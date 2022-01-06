from django.contrib.gis.db import models


class Crime(models.Model):
    crime_id = models.AutoField(primary_key=True)
    month=models.CharField(max_length=500)
    reported_by=models.CharField(max_length=500)
    falls_within=models.CharField(max_length=500)
    longitude = models.CharField(max_length=500)
    latitude = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    lsoa_code = models.CharField(max_length=500)
    lsoa_name = models.CharField(max_length=500)
    crime_type = models.CharField(max_length=500)
    last_outcome_category = models.CharField(max_length=500)
    context = models.CharField(max_length=500)
    geom_point = models.PointField()

class Bargraph(models.Model):
    month=models.CharField(max_length=500)
    force_type= models.CharField(max_length=500)
    count= models.IntegerField()

class Piechart(models.Model):
    month= models.CharField(max_length=500) 
    crime_type=models.CharField(max_length=500)
    count=models.IntegerField()   

