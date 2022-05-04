from rest_framework import serializers

from rent_luxury_car.rents.models import Rent


class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = '__all__'


    def create(self, validated_data):
        car = self.validated_data['car']
        car.is_rented = True
        car.save()
        user = self.validated_data['user']
        rent_start_time = self.validated_data['rent_start_time']
        rent_end_time = self.validated_data['rent_end_time']

        rent = Rent.objects.create(
            car=car,
            user=user,
            rent_start_time=rent_start_time,
            rent_end_time=rent_end_time,
        )

        return rent

