AI-Powered Quiz Platform - Full Project

Structure:
- frontend/  -> Vite + React UI you provided
- backend/   -> Django backend with session auth & unique email

Backend:
  cd backend
  python -m venv venv
  venv\Scripts\activate
  pip install django django-cors-headers
  python manage.py makemigrations
  python manage.py migrate
  python manage.py runserver

Frontend:
  cd frontend
  npm install
  npm run dev

Frontend should call these endpoints:
  http://127.0.0.1:8000/api/auth/register/
  http://127.0.0.1:8000/api/auth/login/
  http://127.0.0.1:8000/api/auth/logout/
  http://127.0.0.1:8000/api/auth/me/
