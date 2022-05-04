
# Create your views here.
from rest_framework import generics as generic_views

# Create your views here.
from rent_luxury_car.rents.models import Rent
from rent_luxury_car.rents.serializers import RentSerializer


class ListCreateRentsView(generic_views.ListCreateAPIView):
    serializer_class = RentSerializer
    queryset = Rent.objects.all()


class SingleRentView(generic_views.RetrieveUpdateDestroyAPIView):
    serializer_class = RentSerializer
    queryset = Rent.objects.all()