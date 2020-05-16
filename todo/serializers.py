from rest_framework import serializers 
from .models import Note
from .models import *


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Note
        fields = ('id', 'owner','title', 'note', 'date', 'slug')
        read_only_fields = ['owner']
        # depth =    2


    def validate_title(self, value):
        qs = Note.objects.filter(title__iexact = value)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)
        if qs.exists():
            raise serializers.ValidationError('This Title Has Already been used')
        return value
