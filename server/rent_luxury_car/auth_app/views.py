from django.contrib.auth import get_user_model, authenticate, login
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authtoken.views import ObtainAuthToken

from rent_luxury_car.auth_app.models import Profile
from rent_luxury_car.auth_app.serializers import CreateUserSerializer, LoginUserSerializer

UserModel = get_user_model()

CLIENT_SERVER_FIELD_NAMINGS_MAPPER = {
    'email': 'Email',
    'password': 'Password',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'age': 'Age',
}

class RegisterUserView(CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = CreateUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            token, created = Token.objects.get_or_create(user=serializer.instance)
            user = UserModel.objects.get(email=serializer.data['email'])
            profile = Profile.objects.get(user_id=user.id)
            return Response({'token': token.key, 'user': {'email': user.email, 'profile_first_name': profile.first_name, 'profile_last_name': profile.last_name, 'profile_age': profile.age}},
                            status=status.HTTP_201_CREATED, headers=headers)

        else:
            errors = ''

            for key, value in serializer.errors.items():
                if key == 'profile':
                    errors += ''.join([f"{CLIENT_SERVER_FIELD_NAMINGS_MAPPER[error_prop]}: {error_message[0]}\n" for error_prop, error_message in value.items()])
                else:
                    errors += f"{CLIENT_SERVER_FIELD_NAMINGS_MAPPER[key]}: {value[0]}\n"

            return Response(data={"message": errors},
                     status=status.HTTP_400_BAD_REQUEST)

class LoginUserView(APIView):
    serializer_class = LoginUserSerializer
    queryset = UserModel.objects.all()

    error_messages = {
        'invalid': "Invalid email or password",
        'empty_fields': 'Fields cannot be empty'
    }

    def _error_response(self, message_key):
        data = {
            'success': False,
            'message': self.error_messages[message_key],
        }
        return data

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not (email or password):
            return Response(data=self._error_response('empty_fields'), status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(
            email=email,
            password=password,
        )

        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)

            data = {
                'email': request.user.email,
                'token': token.key,
                'user_id': request.user.id,
            }

            return Response(data=data, status=status.HTTP_201_CREATED)

        return Response(data=self._error_response('invalid'), status=status.HTTP_404_NOT_FOUND)



