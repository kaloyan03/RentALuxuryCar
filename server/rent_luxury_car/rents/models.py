from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
from rent_luxury_car.cars.models import Car

UserModel = get_user_model()

class Rent(models.Model):
    rent_start_time = models.DateTimeField()
    rent_end_time = models.DateTimeField()

    car = models.ForeignKey(
        Car,
        on_delete=models.CASCADE,
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
    )

