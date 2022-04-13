from rest_framework import serializers
from .models import Replies;


class repliesSerializer(serializers.ModelSerializer):
    class meta:
        model = Replies
        fields = ['id','user','comment','text']
