from django.http import JsonResponse,HttpResponse
from django.shortcuts import render

# Create your views here.
from App.Serializer import MeiziSerializer, stockSerializer, statisticalSerializer, topSerializer, industrySerializer
from App.models import area, stockdata, statistical_data, top, industry


def app_area(request):
    if request.method=="GET":
        meizis = area.objects.all()
        serializer = MeiziSerializer(meizis, many=True)
        return JsonResponse(serializer.data,safe=False,json_dumps_params={'ensure_ascii':False})


def app_stockdata(request):
    if request.method=="GET":
        meizis = stockdata.objects.all()
        serializer = stockSerializer(meizis, many=True)
        return JsonResponse(serializer.data,safe=False,json_dumps_params={'ensure_ascii':False})


def app_statistical_data(request):
    if request.method=="GET":
        meizis = statistical_data.objects.all()
        serializer = statisticalSerializer(meizis, many=True)
        return JsonResponse(serializer.data,safe=False,json_dumps_params={'ensure_ascii':False})


def app_top(request):
    if request.method=="GET":
        meizis = top.objects.all()
        serializer = topSerializer(meizis, many=True)
        return JsonResponse(serializer.data,safe=False,json_dumps_params={'ensure_ascii':False})


def app_industry(request):
    if request.method == "GET":
        meizis = industry.objects.all()
        serializer = industrySerializer(meizis, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})