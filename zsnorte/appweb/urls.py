# appweb/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    # Aquí puedes agregar más URLs según sea necesario
]
