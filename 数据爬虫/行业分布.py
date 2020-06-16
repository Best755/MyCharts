import requests
from lxml import etree
import demjson
import pymysql

def request():
    name_numble=[]
    numbles=[]
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='000000', db='chars', charset='utf8')
    cursor = db.cursor()
    url="http://www.sse.com.cn/assortment/stock/areatrade/trade/"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; LCTE; rv:11.0) like Gecko Core/1.70.3754.400 QQBrowser/10.5.4020.400"
    }
    reponse=requests.get(url,headers=headers)
    text = reponse.content.decode('utf-8')
    html = etree.HTML(text)
    sc = html.xpath("//script")[16]
    data = sc.text
    data = data.replace("\n", "").replace("\r", "").replace("\t", "").replace(";", "").replace(
        "tableData['tableData_1258'] =", "")
    dict1 = demjson.decode(data)
    dict1 = demjson.decode(data)
    listss = dict1["list"]
    i = 0
    for lists in listss:
        i = i + 1
        if (i % 2 == 0):
            name=lists[0]
            name=name[:-4]
            name=name[68:]
            name_numble.append(name)
            numble=lists[2]
            numbles.append(int(numble))
    l = list(zip(name_numble, numbles))
    inser_sql = "insert into app_industry(name,numble) VALUES(%s,%s)"
    cursor.executemany(inser_sql, l)
    db.commit()
    db.close()

if __name__ == '__main__':
    request()