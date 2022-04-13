from django.db import models
from django.contrib.auth.models import User
from comments.models import Comments
# Create your models here.

class Replies(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(to=Comments, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)