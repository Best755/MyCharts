import requests
from lxml import etree
import demjson
import pymysql


def request():
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='000000', db='chars', charset='utf8')
    cursor = db.cursor()
    rank = []
    stock_code = []
    name = []
    numble_sum = []
    numble_scale = []
    url = "http://www.sse.com.cn/market/stockdata/marketvalue/main/"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; LCTE; rv:11.0) like Gecko Core/1.70.3754.400 QQBrowser/10.5.4020.400"
    }
    reponse = requests.get(url, headers=headers)
    text = reponse.content.decode('utf-8')
    html = etree.HTML(text)
    sc = html.xpath("//script")[17]
    data = sc.text
    data = data.replace("\n", "").replace("\r", "").replace("\t", "").replace(";", "").replace(
        "var aa ='<div>所占总市值的比例总计：28.97%</div>'var empb = ''tableData['tableData_1205'] =", "")
    dict1 = demjson.decode(data)
    listss = dict1["list"]
    i = 0
    for lists in listss:
        i = i + 1
        if (i % 2 == 0):
            rank.append(int(lists[0]))
            tr = lists[1]
            tr = tr[:-4]
            tr = tr[94:]
            stock_code.append(int(tr))
            name.append(lists[2])
            sum = lists[3]
            sum = sum[:-6]
            sum = sum[29:]
            numble_sum.append(float(sum))
            scale = lists[4]
            scale = scale[:-6]
            scale = scale[28:]
            numble_scale.append(float(scale))
    l = list(zip(rank, stock_code, name, numble_sum, numble_scale))
    inser_sql = "insert into app_top(rank,code,name,sum,scale) VALUES(%s,%s,%s,%s,%s)"
    cursor.executemany(inser_sql, l)
    db.commit()
    db.close()


if __name__ == '__main__':
    request()
