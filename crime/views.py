from rest_framework.exceptions import AuthenticationFailed
from .serializers import CrimeSerializer, CrimebarSerializer, CrimebardetailSerializer, CrimepieSerializer, CrimepiedetailSerializer
from .models import Bargraph, Crime,Piechart
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse, HttpResponseNotFound, Http404
from rest_framework.schemas import AutoSchema
import coreapi
class CrimeViewSchema(AutoSchema):

    def get_manual_fields(self, path, method):
        extra_fields = []
        if method.lower() in ['post', 'put']:
            extra_fields = [
                coreapi.Field('month'),
                coreapi.Field('reported_by'),
                coreapi.Field('falls_within'),
                coreapi.Field('longitude'),
                coreapi.Field('latitude'),
                coreapi.Field('location'),
                coreapi.Field('context'),
                coreapi.Field('crime_type'),
                coreapi.Field('geom_point'),
                coreapi.Field('force_type')
            ]
        manual_fields = super().get_manual_fields(path, method)
        return manual_fields + extra_fields



class CrimeView(APIView):
    schema =CrimeViewSchema()
    def get(self,request):
   
       if request.method == 'GET':
        events = Crime.objects.all()
        event_serializer = CrimeSerializer(events, many=True)
        return JsonResponse(event_serializer.data, safe=False)
        # 'safe=False' for objects serialization
   
 
 
class CrimeDetailView(APIView):
    schema =CrimeViewSchema()
    def get(self,request,pk):
      
        event = Crime.objects.get(pk=pk)
        event_serializer = CrimeSerializer(event) 
        return JsonResponse(event_serializer.data) 

class CrimeBarView(APIView):
    schema =CrimeViewSchema()
    def get(self,request):
   
       if request.method == 'GET':
        events = Bargraph.objects.all()
        event_serializer = CrimebarSerializer(events, many=True)
        return JsonResponse(event_serializer.data, safe=False)
        # 'safe=False' for objects serialization
   
 
 
class CrimeBarDetailView(APIView):
    schema =CrimeViewSchema()
    def get(self,request,month):
      
        event = Bargraph.objects.filter(month=month).first()
        event_serializer = CrimebardetailSerializer(event) 
        return JsonResponse(event_serializer.data) 


class CrimePieView(APIView):
    schema =CrimeViewSchema()
    def get(self,request):
   
       if request.method == 'GET':
        events = Piechart.objects.all()
        event_serializer = CrimepieSerializer(events, many=True)
        return JsonResponse(event_serializer.data, safe=False)
        # 'safe=False' for objects serialization
   
class CrimePieDetailView(APIView):
    schema =CrimeViewSchema()
    def get(self,request,month):
      
        event = Piechart.objects.filter(month=month).first()
        event_serializer = CrimepiedetailSerializer(event) 
        return JsonResponse(event_serializer.data) 
 
