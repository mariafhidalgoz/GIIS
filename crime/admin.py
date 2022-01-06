from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.contrib.gis.admin import OSMGeoAdmin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Bargraph, Crime,Piechart


@admin.register(Crime)
class ShopAdmin(OSMGeoAdmin):
    list_display = ('crime_id', 'geom_point')
admin.site.register(Bargraph)
admin.site.register(Piechart)