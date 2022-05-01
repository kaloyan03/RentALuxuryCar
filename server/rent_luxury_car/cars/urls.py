from django.urls import path
from rent_luxury_car.cars import views as car_views

urlpatterns = [
    path('', car_views.ListCreateCarsView.as_view(), name='list create cars'),
    path('<int:pk>/', car_views.SingleCarView.as_view(), name='retrieve update destroy car'),
]