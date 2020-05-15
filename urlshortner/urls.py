from django.contrib import admin
from django.urls import path,include
from .views import CreateShortenedLink,RedirectLink

from urlshortner import views
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'shorted', views.LinkView, 'urlshortner')


app_name  = 'urlshortner'

urlpatterns = [
    path('urlshortner/', CreateShortenedLink.as_view() , name='shortner'),
    path('<str:attach>/', RedirectLink.as_view()),

    #path for url-shortner-api
    path('url-shortner-apis/', include(router.urls))
]
