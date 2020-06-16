from rest_framework import serializers

from App.models import area, stockdata, statistical_data, top, industry


class MeiziSerializer(serializers.ModelSerializer):
    # ModelSerializer和Django中ModelForm功能相似
    # Serializer和Django中Form功能相似
    class Meta:
        model = area
        fields = ('city', 'numble')


class stockSerializer(serializers.ModelSerializer):
    # ModelSerializer和Django中ModelForm功能相似
    # Serializer和Django中Form功能相似
    class Meta:
        model = stockdata
        fields = ('MKT_VALUE', 'NEGOTIABLE_VALUE', 'AVG_PROFIT_RATE')


class statisticalSerializer(serializers.ModelSerializer):
    # ModelSerializer和Django中ModelForm功能相似
    # Serializer和Django中Form功能相似
    class Meta:
        model = statistical_data
        fields = ('companys', 'numble')


class topSerializer(serializers.ModelSerializer):
    # ModelSerializer和Django中ModelForm功能相似
    # Serializer和Django中Form功能相似
    class Meta:
        model = top
        fields = ('rank', 'code', 'name', 'sum', 'scale')
class industrySerializer(serializers.ModelSerializer):
    # ModelSerializer和Django中ModelForm功能相似
    # Serializer和Django中Form功能相似
    class Meta:
        model = industry
        fields = ('name', 'numble')
