from django.shortcuts import render
from rest_framework import generics as generic_views

# Create your views here.
from rent_luxury_car.cars.models import Car
from rent_luxury_car.cars.serializers import CarSerializer


class ListCreateCarsView(generic_views.ListCreateAPIView):
    serializer_class = CarSerializer
    queryset = Car.objects.all()


class SingleCarView(generic_views.RetrieveUpdateDestroyAPIView):
    serializer_class = CarSerializer
    queryset = Car.objects.all()