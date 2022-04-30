from django.contrib.auth import get_user_model, authenticate, login
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from rent_luxury_car.auth_app.models import Profile
from rent_luxury_car.auth_app.serializers import UserSerializer


UserModel = get_user_model()

CLIENT_SERVER_FIELD_NAMINGS_MAPPER = {
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'age': 'Age',
}

class RegisterUserView(CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            token, created = Token.objects.get_or_create(user=serializer.instance)
            user = UserModel.objects.get(email=serializer.data['email'])
            return Response({'token': token.key, 'user_id': user.id, 'email': user.email},
                            status=status.HTTP_201_CREATED, headers=headers)

        else:
            errors = ''
            for key, value in serializer.errors['profile'].items():
                errors += f"{CLIENT_SERVER_FIELD_NAMINGS_MAPPER[key]}: {value[0]}\n"

            return Response(data={"message": errors},
                     status=status.HTTP_400_BAD_REQUEST)

class LoginUserView(APIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not (email or password):
            return Response(data={"message": "Email or password field cannot be empty"}, status=status.HTTP_400_BAD_REQUEST)

        check_if_exists = UserModel.objects.filter(email=email)

        if not check_if_exists:
            return Response(data={"message": "User with that email does not exists"}, status=status.HTTP_404_NOT_FOUND)

        user = authenticate(email=email, password=password)

        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)

            data = {
                'email': request.user.email,
                'token': token.key,
                'user_id': request.user.id,
            }

            return Response(data=data, status=status.HTTP_201_CREATED)
        return Response(data={"message": "Incorrect email or password"}, status=status.HTTP_400_BAD_REQUEST)
