from time import strftime

from django.core.validators import MinLengthValidator, MaxValueValidator, MinValueValidator
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


class Profile(models.Model):
    FIRST_NAME_MIN_LENGTH = 2
    FIRST_NAME_MAX_LENGTH = 30

    LAST_NAME_MIN_LENGTH = 2
    LAST_NAME_MAX_LENGTH = 30

    AGE_MIN_VALUE = 18
    AGE_MAX_VALUE = 100

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH,
        validators=(
            MinLengthValidator(FIRST_NAME_MIN_LENGTH),
        )
    )

    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH,
        validators=(
            MinLengthValidator(LAST_NAME_MIN_LENGTH),
        )
    )

    age = models.IntegerField(
        validators=(
            MinValueValidator(AGE_MIN_VALUE),
            MaxValueValidator(AGE_MAX_VALUE),
        )
    )

    user = models.OneToOneField(
        RentCarUserModel,
        on_delete=models.CASCADE,
    )