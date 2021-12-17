from .serializers import CrimeSerializer
from .models import Crime
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def crime_list(request):
    if request.method == 'GET':
        events = Crime.objects.all()
        event_serializer = CrimeSerializer(events, many=True)
        return JsonResponse(event_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        crimes = Crime.objects.all()
        crimes_data = JSONParser().parse(request)
        crime_serializer = CrimeSerializer(crimes, many=True)
        tutorial_serializer = CrimeSerializer(data=crimes_data)
        if crime_serializer.is_valid():
            crime_serializer.save()
            return JsonResponse(crime_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(crime_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Crime.objects.all().delete()
        return JsonResponse({'message': '{} Crimes were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 