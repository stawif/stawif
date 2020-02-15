from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=30,blank=False)

    def  __str__(self):
        return self.name