from rest_framework import serializers

from rent_luxury_car.cars.models import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'