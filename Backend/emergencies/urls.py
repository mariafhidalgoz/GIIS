from django.urls import path

from . import views

urlpatterns = [
    path('incidents/', views.IncidentList.as_view()),
    path('incidents/<int:id>/', views.IncidentDetail.as_view()),
]
