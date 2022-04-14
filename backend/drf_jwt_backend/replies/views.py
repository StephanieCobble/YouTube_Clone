from itertools import product
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Replies
from .serializer import repliesSerializer

# Create your views here.

class RepliesList(APIView, AllowAny):
    def get(self, request, format=None):
        replies = Replies.objects.all()
        serializer = repliesSerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

 

class RepliesDetail(APIView, IsAuthenticated):
    # def get_object(self, pk):
    #     try:
    #         return Replies.objects.get(pk=pk)  
    #     except Replies.DoesNotExist:
    #         raise Http404

    def post(self, request, format=None):
        serializer = repliesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # def get(self, request, pk, format=None):
    #     replies = self.get_object(pk)
    #     serializer = repliesSerializer(replies)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    # def put(self, request, pk, format=None):
    #     replies = self.get_object(pk)
    #     serializer = repliesSerializer(replies, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        replies = self.get_object(pk)
        replies.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RepliesFK(APIView, IsAuthenticated):
    def get(self, request, fk, format=None):
        replies = Replies.objects.filter(comments=fk)
        serializer = repliesSerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)