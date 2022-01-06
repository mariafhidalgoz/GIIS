from django.conf.urls import url 
from crime import views 
from django.urls import path, include
from .views import CrimeBarDetailView, CrimeBarView, CrimeDetailView, CrimePieDetailView, CrimePieView, CrimeView
urlpatterns = [
        path('all', CrimeView.as_view()),
        path('<pk>', CrimeDetailView.as_view()),
        path('barchart/all', CrimeBarView.as_view()),
        path('barchart/<month>', CrimeBarDetailView.as_view()),
        path('piechart/all', CrimePieView.as_view()),
        path('piechart/<month>', CrimePieDetailView.as_view()),
  ]


