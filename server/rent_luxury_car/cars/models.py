import datetime

from django.core.validators import MinLengthValidator, MinValueValidator, MaxValueValidator
from django.db import models

# Create your models here.
class Car(models.Model):
    BRAND_MAX_LENGTH = 30
    BRAND_MIN_LENGTH = 2

    MODEL_MAX_LENGTH = 40
    MODEL_MIN_LENGTH = 3

    YEAR_CREATED_MAX_VALUE = datetime.datetime.now().year
    YEAR_CREATED_MIN_VALUE = 2000


    COUPE_TYPE_CHOICES = (
        ('Hatchback', 'Hatchback'),
        ('Sedan', 'Sedan'),
        ('Family', 'Family'),
        ('Coupe', 'Coupe'),
        ('Cabriolet', 'Cabriolet'),
    )

    COUPE_TYPE_CHOICES_MAX_LENGTH = max([len(x) for x, _ in COUPE_TYPE_CHOICES])
    COUPE_TYPE_CHOICES_MIN_LENGTH = min([len(x) for x, _ in COUPE_TYPE_CHOICES])

    FUEL_TYPE_CHOICES = (
            ('Gasoline', 'Gasoline'),
            ('Diesel', 'Diesel'),
            ('Petrol', 'Petrol'),
            ('Electric', 'Electric'),
            ('Hybrid', 'Hybrid'),
        )

    FUEL_TYPE_CHOICES_MAX_LENGTH = max([len(x) for x, _ in FUEL_TYPE_CHOICES])
    FUEL_TYPE_CHOICES_MIN_LENGTH = min([len(x) for x, _ in FUEL_TYPE_CHOICES])

    GEARBOX_TYPE_CHOICES = (
            ('Manual', 'Manual'),
            ('Automatic', 'Automatic'),
        )

    GEARBOX_TYPE_CHOICES_MAX_LENGTH = max([len(x) for x, _ in GEARBOX_TYPE_CHOICES])
    GEARBOX_TYPE_CHOICES_MIN_LENGTH = min([len(x) for x, _ in GEARBOX_TYPE_CHOICES])

    FUEL_CONSUMPTION_MAX_VALUE = 50
    FUEL_CONSUMPTION_MIN_VALUE = 0

    HORSEPOWER_MAX_VALUE = 1500
    HORSEPOWER_MIN_VALUE = 0


    brand = models.CharField(
        max_length=BRAND_MAX_LENGTH,
        validators=(
            MinLengthValidator(BRAND_MIN_LENGTH),
        )
    )

    model = models.CharField(
        max_length=MODEL_MAX_LENGTH,
        validators=(
            MinLengthValidator(MODEL_MIN_LENGTH),
        )
    )

    year_created = models.IntegerField(
        validators=(
            MaxValueValidator(YEAR_CREATED_MAX_VALUE),
            MinValueValidator(YEAR_CREATED_MIN_VALUE),
        ),
    )

    image = models.ImageField(
        upload_to='cars_images',
    )

    description = models.TextField(
    )

    coupe_type = models.CharField(
        choices=COUPE_TYPE_CHOICES,
        max_length=COUPE_TYPE_CHOICES_MAX_LENGTH,
        validators=(
            MinLengthValidator(COUPE_TYPE_CHOICES_MIN_LENGTH),
        )
    )

    fuel_type = models.CharField(
        choices=FUEL_TYPE_CHOICES,
        max_length=FUEL_TYPE_CHOICES_MAX_LENGTH,
        validators=(
            MinLengthValidator(FUEL_TYPE_CHOICES_MIN_LENGTH),
        )
    )

    gearbox_type = models.CharField(
        choices=GEARBOX_TYPE_CHOICES,
        max_length=GEARBOX_TYPE_CHOICES_MAX_LENGTH,
        validators=(
            MinLengthValidator(GEARBOX_TYPE_CHOICES_MIN_LENGTH),
        )
    )

    fuel_consumption = models.IntegerField(
        validators=(
            MinValueValidator(FUEL_CONSUMPTION_MIN_VALUE),
            MaxValueValidator(FUEL_CONSUMPTION_MAX_VALUE),
        )
    )

    horsepower = models.IntegerField(
        validators=(
            MinValueValidator(HORSEPOWER_MIN_VALUE),
            MaxValueValidator(HORSEPOWER_MAX_VALUE),
        )
    )

    is_rented = models.BooleanField(
        default=False,
    )


    def __str__(self):
        return f"{self.brand} {self.model}; Rented - {self.is_rented}"