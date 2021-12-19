from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.contrib.gis.admin import OSMGeoAdmin
from crime.models import Crime

admin.site.register(Crime)

