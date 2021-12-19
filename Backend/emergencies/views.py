from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Incident
from .serializers import IncidentSerializer


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
