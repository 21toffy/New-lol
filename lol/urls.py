from django.contrib import admin
from django.urls import path,include
from todo import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home', views.LandingView.as_view() , name='landing' ),
    path('', include('todo.urls',namespace='notes')),
    path('', include('urlshortner.urls',namespace='urlshortner')),
    path('accounts/login/', views.login_view, name='login'),
    path('accounts/logout/', views.logout_view, name='logout'),
    path('accounts/register/', views.register_view, name='register'),
]
