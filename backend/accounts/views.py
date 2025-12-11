# import json
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login, logout
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.views.decorators.http import require_http_methods

# @csrf_exempt
# @require_http_methods(['POST'])
# def register(request):
#     try:
#         data = json.loads(request.body.decode('utf-8'))
#     except json.JSONDecodeError:
#         return JsonResponse({'success': False, 'message': 'Invalid JSON.'}, status=400)

#     full_name = data.get('full_name', '').strip()
#     email = data.get('email', '').strip().lower()
#     password = data.get('password', '')

#     if not full_name or not email or not password:
#         return JsonResponse({'success': False, 'message': 'All fields are required.'}, status=400)

#     if User.objects.filter(username=email).exists():
#         return JsonResponse({'success': False, 'message': 'Email is already registered.'}, status=400)

#     user = User.objects.create_user(
#         username=email,
#         email=email,
#         password=password,
#         first_name=full_name,
#     )

#     return JsonResponse(
#         {'success': True, 'message': 'Registered successfully. Please login.', 'user_id': user.id},
#         status=201,
#     )

# @csrf_exempt
# @require_http_methods(['POST'])
# def login_view(request):
#     try:
#         data = json.loads(request.body.decode('utf-8'))
#     except json.JSONDecodeError:
#         return JsonResponse({'success': False, 'message': 'Invalid JSON.'}, status=400)

#     email = data.get('email', '').strip().lower()
#     password = data.get('password', '')

#     if not email or not password:
#         return JsonResponse({'success': False, 'message': 'Email and password are required.'}, status=400)

#     user = authenticate(request, username=email, password=password)
#     if user is None:
#         return JsonResponse({'success': False, 'message': 'Invalid email or password.'}, status=401)

#     login(request, user)

#     return JsonResponse(
#         {'success': True,
#          'message': 'Logged in successfully.',
#          'user': {'id': user.id, 'full_name': user.first_name, 'email': user.email}}
#     )

# @require_http_methods(['GET'])
# def me(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({'isAuthenticated': False}, status=401)

#     user = request.user
#     return JsonResponse(
#         {'isAuthenticated': True,
#          'user': {'id': user.id, 'full_name': user.first_name, 'email': user.email}}
#     )

# @csrf_exempt
# @require_http_methods(['POST'])
# def logout_view(request):
#     if request.user.is_authenticated:
#         logout(request)
#     return JsonResponse({'success': True, 'message': 'Logged out.'})
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register_user(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    data = json.loads(request.body)

    email = data.get("email")
    password = data.get("password")
    fullName = data.get("fullName")

    if User.objects.filter(username=email).exists():
        return JsonResponse({"success": False, "message": "Email already registered!"})

    user = User.objects.create_user(username=email, email=email, password=password, first_name=fullName)
    user.save()

    return JsonResponse({"success": True, "message": "Registered successfully!"})


@csrf_exempt
def login_user(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    data = json.loads(request.body)
    email = data.get("email")
    password = data.get("password")

    user = authenticate(username=email, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({"success": True, "message": "Login successful!", "user": user.username})

    return JsonResponse({"success": False, "message": "Invalid email or password"})
from django.contrib.auth import logout

@csrf_exempt
def logout_view(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    logout(request)
    return JsonResponse({"success": True, "message": "Logged out successfully"})
