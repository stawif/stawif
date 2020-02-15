from django.shortcuts import render
from django.http import HttpResponse
from .models import Team
from .serializers import TeamSerializer
from rest_framework import generics


class list_of_names(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    