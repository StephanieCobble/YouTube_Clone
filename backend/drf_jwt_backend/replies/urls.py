from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from .import views

urlpatterns = [
    path('', views.RepliesList.as_view()),
    
    path('<int:pk>/', views.RepliesDetail.as_view()),
    path('fk/<int:fk>/', views.RepliesFK.as_view())
]


urlpatterns = format_suffix_patterns(urlpatterns)

