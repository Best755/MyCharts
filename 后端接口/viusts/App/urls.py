from django.conf import settings
from django.urls import path, re_path
from django.views.static import serve

from App import views

app_name = "User"
urlpatterns = [
    path('app_area/', views.app_area, name="app_area"),
    path('app_stockdata/',views.app_stockdata,name='app_stockdata'),
    path('app_statistical_data/',views.app_statistical_data,name='app_statistical_data'),
    path('app_top/',views.app_top,name='app_top'),
    path('app_industry/',views.app_industry,name='app_industry')
]