from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Incident
from .serializers import IncidentSerializer


# @api_view(['GET', 'POST', 'DELETE'])
# def incident_list(request):
#     if request.method == 'GET':
#         incidents = Incident.objects.all()
#         incident_serializer = IncidentSerializer(incidents, many=True)
#         return JsonResponse(incident_serializer.data, safe=False)
#         # 'safe=False' for objects serialization
#
#     elif request.method == 'POST':
#         incidents = Incident.objects.all()
#         incidents_data = JSONParser().parse(request)
#         incident_serializer = IncidentSerializer(incidents, many=True)
#         # tutorial_serializer = IncidentSerializer(data=incidents_data)
#         if incident_serializer.is_valid():
#             incident_serializer.save()
#             return JsonResponse(incident_serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(incident_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         count = Incident.objects.all().delete()
#         return JsonResponse({'message': '{} Icidents were deleted successfully!'.format(count[0])},
#                             status=status.HTTP_204_NO_CONTENT)


class IncidentList(APIView):
    """
    List all incidents, or create a new incident.
    """

    def get(self, request, format=None):
        incidents = Incident.objects.all()
        serializer = IncidentSerializer(incidents, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = IncidentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class IncidentDetail(APIView):
    """
    Retrieve, update or delete a incident instance.
    """

    def get_object(self, id):
        try:
            return Incident.objects.get(id=id)
        except Incident.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        incident = self.get_object(id)
        serializer = IncidentSerializer(incident)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        incident = self.get_object(id)
        serializer = IncidentSerializer(incident, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        incident = self.get_object(id)
        incident.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
