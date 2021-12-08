from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.contrib.gis.admin import OSMGeoAdmin

from .models import PoliceStation

admin.site.unregister(Group)
admin.site.unregister(User)


@admin.register(PoliceStation)
class PoliceStationAdmin(OSMGeoAdmin):
    list_display = ('name', 'contact_name', 'contact_phone', 'location')
