from django.conf.urls import url 
from crime import views 
 
urlpatterns = [ 
    url('', views.crime_list),
       
]