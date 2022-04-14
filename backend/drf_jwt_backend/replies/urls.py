from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    # path('', views.RepliesList.as_view()),
    
    path('new/', views.RepliesList.as_view()), #to create a comment (or delete)
    path('fk/<int:fk>/', views.RepliesFK.as_view())   #to get replies by comment id
]


urlpatterns = format_suffix_patterns(urlpatterns)

