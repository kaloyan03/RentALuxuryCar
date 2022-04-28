from django.urls import path
from rent_luxury_car.auth_app import views as auth_views

urlpatterns = (
    path('register/', auth_views.RegisterUserView.as_view(), name='register view'),
    path('login/', auth_views.LoginUserView.as_view(), name='login view'),
)