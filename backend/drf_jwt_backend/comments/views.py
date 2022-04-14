from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Comments
from .serializer import CommentsSerializer

# Create your views here.

class CommentsList(APIView, AllowAny):
    def get(self, request, video_id, format=None):
        comments = Comments.objects.filter(video_id=video_id)
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    

class CommentsDetail(APIView, IsAuthenticated):
    # def get_object(self, pk):
    #     try:
    #         return Comments.objects.get(pk=pk)  
    #     except Comments.DoesNotExist:
    #         raise Http404

    def post(self, request, format=None):
        serializer = CommentsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # def get(self, request, pk, format=None):
    #     comments = self.get_object(pk)
    #     serializer = CommentsSerializer(comments)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    # def delete(self, request, pk, format=None):
    #     comments = self.get_object(pk)
    #     comments.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)

class UpdateComment(APIView, IsAuthenticated):
    def put(self, request, pk, comments_id, format=None):
        comments = Comments.objects.get(id=comments_id)
        serializer = CommentsSerializer(comments, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)