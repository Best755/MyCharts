from django.db import models


class area(models.Model):
    city = models.CharField(max_length=255)
    numble = models.IntegerField()

    def to_dict(self):
        return {'id': self.id, "city": self.city, "numble": self.numble}


class statistical_data(models.Model):
    companys = models.CharField(max_length=255)
    numble = models.FloatField()


class stockdata(models.Model):
    MKT_VALUE = models.FloatField()
    NEGOTIABLE_VALUE = models.FloatField()
    AVG_PROFIT_RATE = models.FloatField()


class industry(models.Model):
    name = models.CharField(max_length=255)
    numble = models.IntegerField()


class top(models.Model):
    rank = models.IntegerField()
    code = models.IntegerField()
    name = models.CharField(max_length=255)
    sum = models.FloatField()
    scale = models.FloatField()
