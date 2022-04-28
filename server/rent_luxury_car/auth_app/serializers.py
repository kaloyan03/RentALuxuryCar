from django.contrib.auth import get_user_model
from rest_framework import serializers

from rent_luxury_car.auth_app.models import Profile

UserModel = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('first_name', 'last_name', 'age', 'profile_picture')


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)

    class Meta:
        model = UserModel
        fields = ('email', 'password', 'profile')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = UserModel.objects.create(
            email=validated_data['email'],
            password=password,
        )

        user.set_password(password)
        user.save()

        profile_data = validated_data.pop('profile')

        profile = Profile.objects.create(
            first_name=profile_data['first_name'],
            last_name=profile_data['last_name'],
            age=profile_data['age'],
            profile_picture=profile_data['profile_picture'],
            user=user,
        )

        profile.save()

        return user
