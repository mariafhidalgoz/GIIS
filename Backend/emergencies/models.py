from django.contrib.gis.db import models


class Incident(models.Model):
    location = models.PointField()
    type = models.CharField(max_length=200)
    is_active = models.BooleanField()
    created_at = models.DateTimeField()
    closed_at = models.DateTimeField()


class PoliceStation(models.Model):
    location = models.PointField()
    name = models.CharField(max_length=200)
    contact_name = models.CharField(max_length=200)
    contact_phone = models.IntegerField()
