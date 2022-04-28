from time import strftime

from django.db import models

from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.
from rent_luxury_car.auth_app.managers import RentCarUserManager


class RentCarUserModel(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )

    is_staff = models.BooleanField(
        default=False,
    )

    date_joined = models.DateTimeField(
        auto_now_add=True,
    )

    USERNAME_FIELD = "email"

    objects = RentCarUserManager()
