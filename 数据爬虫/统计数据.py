import requests
from lxml import etree
import pymysql


def request():
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='000000', db='chars', charset='utf8')
    cursor = db.cursor()
    url = "http://www.sse.com.cn/market/stockdata/statistic/"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; LCTE; rv:11.0) like Gecko Core/1.70.3754.400 QQBrowser/10.5.4020.400"
    }
    reponse = requests.get(url, headers=headers)
    text = reponse.content.decode('utf-8')
    html = etree.HTML(text)
    div = html.xpath("//div[@class='sse_home_in_table2']")[0]
    tds = div.xpath("//td")[0]
    for td in tds:
        companys = td.xpath("//i//text()")[0:7]
        numble = td.xpath("//em//text()")[0:7]
        break
    l = list(zip(companys, numble))
    inser_sql = "insert into app_statistical_data(companys,numble) VALUES(%s,%s)"
    cursor.executemany(inser_sql, l)
    db.commit()
    db.close()


if __name__ == '__main__':
    request()
