from django.shortcuts import render, get_object_or_404,redirect
# from django.contrib.auth.models import User
from django.views import View

#REST-API IMPORTS
from rest_framework import viewsets

from rest_framework import generics, mixins
from rest_framework import serializers
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view



#END OF REST-API IMPORTS

from .models import Note
from django.contrib.auth.decorators import login_required
from .forms import Note_form, edit_note_form, UserRegisterForm
import datetime
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.contrib.auth import(
    authenticate,
    get_user_model,
    login,
    logout
)


#LANDING PAGE
class LandingView(View):
    def get(self,request):
        # this displays the landing page
        template_name  = 'landing/landing.html'
        context = {}
        return render(request,template_name,context)



#login logic/view
def login_view(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('notes:home'))
            else:

                return HttpResponseRedirect(reverse('login'))
                messages.error(request, 'this account is not active')
            
        else:
            messages.error(request, 'Bad username or password')

    return render (request, 'login.html', {"error":messages.error})



#register logic
def register_view(request):
    if request.method=='POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            email = form.cleaned_data['email']
            user = User.objects.create_user(username, password=password, email=email)
            messages.success(request, 'Thanks for registering {}'.format(user.username))
            return HttpResponseRedirect(reverse('notes:home'))
        else:
            print(form.errors)
            
            messages.error(request, form.errors)
            print(form.errors)

    else:
        form = UserRegisterForm()

    return render(request, 'signup.html', {'form':form})




#logout logic

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('login'))




@login_required
def home(request):
    current_user = request.user #for the url, in other to pick the current user
    username=current_user.username #for the url, in other to pick the current users username
    note = Note.objects.filter(owner=current_user)#to get the notes of only the current user
    #the add note form
    if request.method == 'POST':
        form = Note_form(request.POST)
        if form.is_valid():
            new_note = form.save(commit=False)
            new_note.owner = current_user
            new_note.date = datetime.datetime.now()
            new_note.save()
            messages.success(request, '{} added'.format(new_note.title))
            return HttpResponseRedirect(reverse('notes:home'))

    else:
        form=Note_form()
    context = {'current_user':current_user, 'note':note, 'form':form}
    return render(request,'dashboard.html',context)

@login_required
def note_detail(request, slug, pk):
    note = get_object_or_404(Note, pk=pk, slug=slug)
    current_user = request.user #for the url, in other to pick the current user
    username=current_user.username #for the url, in other to pick the current users username
    context = {'note':note, 'username':username}
    # return HttpResponseRedirect(reverse('note_detail', kwargs={'username':username, 'id':id}))
    return render(request, 'note_detail.html', context)

#edit  Note  function
def edit_note(request, pk, slug):
    note = get_object_or_404(Note, pk=pk, slug=slug)
    if request.user != note.owner:
        return redirect('login')

    if request.method=="POST":
        form =edit_note_form(request.POST, instance=note)
        if form.is_valid():
            form.save()
            messages.success(request, 'note edited succesfully')
    else:
        form = edit_note_form(instance=note)
    return render(request, 'edit_note.html', {'note':note, 'form':form})

##delete note function
def delete_note(request, slug, pk):
    note = get_object_or_404(Note, pk=pk, slug=slug)
    current_user = request.user #for the url, in other to pick the current user
    username=current_user.username #for the url, in other to pick the current users username
    if request.user != note.owner:
        return redirect('login')
    if request.method=='POST':
        note.delete()
        messages.success(request, 'note has been deleted', extra_tags='alert alert-success alert-dismissible fade show')
        return redirect('notes:home')
    return render(request, 'note_confirm_delete.html', {'note':note})




#NOTE_API



@api_view(['GET'])
def NoteOverview(request):
    Note_Urls = {
        'List':'/note-list/',
        'Detail':'/note-detail/<str:pk>/',
        'Create':'/note-create/',
        'Update':'/note-update/<str:pk>/',
        'Delete':'/note-delete/<str:pk>/',
    }
    return Response(Note_Urls)

@api_view(['GET'])
def NoteList(request):
    # MyNote = Note.objects.filter(owner=request.user).order_by('-id')
    MyNote = Note.objects.all()
    serializer = NoteSerializer(MyNote, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def NoteDetail(request, pk):
    MyNote = Note.objects.get(id=pk)
    serializer = NoteSerializer(MyNote, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def NoteCreate(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def NoteUpdate(request, pk):
    MyNote = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance =MyNote, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def NoteDelete(request, pk):
    MyNote = Note.objects.get(id=pk)
    MyNote.delete()
    return Response('item deleted')










'''
class NoteView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        MyNote = Note.objects.filter(owner=self.request.user)
        print (MyNote.pk)
        return MyNote


class NoteCreateView(generics.ListCreateAPIView):
    # mixins.CreateModelMixin, generics.ListAPIView
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'
    serializer_class = NoteSerializer

    # def get(self, request): 
    #     MyNote = Note.objects.filter(owner=self.request.user)
    #     serializer = NoteSerializer(MyNote, many=True)
    #     return Response({"notes": serializer.data})

    def get_queryset(self): 
        MyNote = Note.objects.filter(owner=self.request.user)
        # print (self.request.user.note_set.all())
       
        return MyNote

    # def get(self, request, *args, **kwargs):
    #     return self.list(request, *args, *kwargs)


    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def post(self, request, *args, **kwargs):
        print (pk)
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
'''   


    

