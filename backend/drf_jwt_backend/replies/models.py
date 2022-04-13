from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Replies(models.model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)