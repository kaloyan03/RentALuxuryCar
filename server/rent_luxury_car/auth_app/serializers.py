from django.contrib.auth import get_user_model
from rest_framework import serializers

from rent_luxury_car.auth_app.models import Profile

UserModel = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('first_name', 'last_name', 'age')


class CreateUserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)

    class Meta:
        model = UserModel
        fields = ('email', 'password', 'profile')

    def create(self, validated_data):
        user = UserModel(
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        profile_data = validated_data.pop('profile')

        Profile.objects.create(
            first_name=profile_data['first_name'],
            last_name=profile_data['last_name'],
            age=profile_data['age'],
            user=user,
        )

        return user

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data.pop('password')
        return data


class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'password')
