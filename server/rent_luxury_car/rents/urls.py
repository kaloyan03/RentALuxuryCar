from django.urls import path
from rent_luxury_car.rents import views as rent_views

urlpatterns = [
    path('', rent_views.ListCreateRentsView.as_view(), name='list create cars'),
    path('<int:pk>/', rent_views.SingleRentView.as_view(), name='retrieve update destroy car'),
]