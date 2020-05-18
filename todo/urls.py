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

    path('notes', views.notes_list),
    path('notes/<int:pk>', views.notes_detail),




    # path('notes-apis/', include(router.urls)),

    #home page and dashboard
    path('notes/', views.home, name='home' ),

    
    # path('', views.NoteOverview, name = 'Note-Overview'),
    # path('note-create/', views.NoteCreate, name = 'Note-Create'),
    # path('note-list/', views.NoteList, name = 'Note-List'),
    # path('note-detail/<str:pk>/', views.NoteDetail, name = 'Note-Detail'),
    # path('note-update/<str:pk>/', views.NoteUpdate, name = 'Note-Update'),
    # path('note-delete/<str:pk>/', views.NoteDelete, name = 'Note-Delete'),

    # path('mynotes/<pk>', views.NoteView.as_view(), name='note-home' ),
    # path('mynotes/', views.NoteCreateView.as_view(), name='note-create' ),
    # path('user-list/', views.userList.as_view(), name='user-list' ),

    path('notes/<slug:slug>/<int:pk>/', include([
        path('',views.note_detail, name='note_detail'),
        path('edit', views.edit_note, name='edit_note'),
        path('delete', views.delete_note, name='note_confirm_delete')
        ]))
    
] 
