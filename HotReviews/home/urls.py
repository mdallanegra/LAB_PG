from django.views.generic.base import RedirectView
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('favicon.ico', RedirectView.as_view(
        url='/static/imagenes/favicon.ico')),
]
