
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Replies
from .serializer import repliesSerializer

# Create your views here.

class RepliesList(APIView, AllowAny):
    def post(self, request, format=None):
        serializer = repliesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

 

# class RepliesDetail(APIView, IsAuthenticated):
#     def delete(self, request, pk, format=None):
#         replies = Replies.objects.get(pk)
#         replies.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)



class RepliesFK(APIView, IsAuthenticated):
    def get(self, request, fk, format=None):
        replies = Replies.objects.filter(comment=fk)
        serializer = repliesSerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)