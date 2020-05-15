# from django.urls import path,include
from . import views

# from rest_framework import routers

from django.contrib import admin 
from django.urls import path, re_path, include
# from Notes import views 
from django.conf.urls import url


# router = routers.DefaultRouter()
# router.register(r'notes', views.NoteView, 'todo')


app_name = 'notes'

urlpatterns = [
    # path('notes-apis/', include(router.urls)),

    #home page and dashboard
    path('notes/', views.home, name='home' ),

    

    path('api-notes/<pk>', views.NoteView.as_view(), name='note-home' ),
    path('api-notes/', views.NoteCreateView.as_view(), name='note-create' ),

    path('notes/<slug:slug>/<int:pk>/', include([
        path('',views.note_detail, name='note_detail'),
        path('edit', views.edit_note, name='edit_note'),
        path('delete', views.delete_note, name='note_confirm_delete')
        ]))
    
]
