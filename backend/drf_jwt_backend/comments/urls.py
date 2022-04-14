from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .import views

urlpatterns = [
    path('<str:video_id>/', views.CommentsList.as_view()),
    # path('<int:pk>/', views.CommentsDetail.as_view()),
    path('', views.CommentsList.as_view()),
    path('update/<int:comments_id>/', views.UpdateComment.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)