import requests
from lxml import etree
import demjson
import re
import pymysql


def request():
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='000000', db='chars', charset='utf8')
    cursor = db.cursor()
    list_city = []
    list_numble = []
    url = "http://www.sse.com.cn/assortment/stock/areatrade/area/"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3754.400 QQBrowser/10.5.4020.400"
    }
    reponse = requests.get(url, headers=headers)
    text = reponse.content.decode("utf-8")
    html = etree.HTML(text)
    sc = html.xpath("//script")[16]
    data = sc.text
    data = data.replace("\n", "").replace("\r", "").replace("\t", "").replace(";", "").replace(
        "tableData['tableData_1250'] = ", "")
    dict1 = demjson.decode(data)
    listss = dict1["list"]
    i = 0
    for lists in listss:
        i = i + 1
        if (i % 2 == 0):
            list_numble.append(int(lists[1]))
            str = re.sub("[A-Za-z0-9]", "", lists[0])
            s = str[:-3].replace("-", "")
            s = s[20:]
            list_city.append(s)
    l = list(zip(list_city, list_numble))
    inser_sql = "insert into app_area(city,numble) VALUES(%s,%s)"
    cursor.executemany(inser_sql, l)
    db.commit()
    db.close()


if __name__ == '__main__':
    request()
