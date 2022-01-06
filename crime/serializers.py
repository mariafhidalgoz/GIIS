from rest_framework import serializers
from .models import Crime, Bargraph, Piechart
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers

from rest_framework import serializers




class CrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime
        fields = '__all__'

class CrimebarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bargraph
        fields = '__all__'

class CrimebardetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bargraph
        fields = ['force_type','count']
class CrimepieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Piechart
        fields = '__all__'

class CrimepiedetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Piechart
        fields = ['crime_type','count']

        