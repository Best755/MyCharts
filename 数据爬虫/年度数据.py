import requests
import demjson
import pymysql

MKT_VALUE = []
NEGOTIABLE_VALUE = []
AVG_PROFIT_RATE = []


def Head():
    url = "http://query.sse.com.cn/commonQuery.do?jsonCallBack=jsonpCallback79410&inYear={}&sqlId" \
          "=COMMON_SSE_SJ_GPSJ_CJGK_MONTHCJGK_C&stockType=90&_=1592106165041 "
    years = ["2020-04", "2020-02", "2020-03", "2020-04", "2020-05"]
    for year in years:
        urls = url.format(year)
        request(urls, year)
    Sql()


def request(url, year):
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; LCTE; rv:11.0) like Gecko Core/1.70.3754.400 "
                      "QQBrowser/10.5.4020.400", "Referer": "http://www.sse.com.cn/market/stockdata/overview/monthly/"}
    Cookies = {
        "Cookie": "yfx_c_g_u_id_10000042=_ck20061311192111315396613240931; "
                  "yfx_mr_10000042=%3A%3Amarket_type_free_search%3A%3A%3A%3Abaidu%3A%3A%3A%3A%3A%3A%3A%3Awww.baidu.com"
                  "%3A%3A%3A%3Apmf_from_free_search; "
                  "yfx_mr_f_10000042=%3A%3Amarket_type_free_search%3A%3A%3A%3Abaidu%3A%3A%3A%3A%3A%3A%3A%3Awww.baidu"
                  ".com%3A%3A%3A%3Apmf_from_free_search; yfx_key_10000042=; "
                  "VISITED_MENU=%5B%228307%22%2C%228767%22%2C%228766%22%2C%228535%22%2C%2211169%22%2C%2211913%22%2C"
                  "%228536%22%2C%228464%22%2C%228467%22%2C%228466%22%2C%228468%22%5D; "
                  "yfx_f_l_v_t_10000042=f_t_1592018361115__r_t_1592103887353__v_t_1592104830900__r_c_1 "
    }
    reponse = requests.get(url=url, headers=headers, cookies=Cookies)
    text = reponse.content.decode('utf-8').replace("jsonpCallback79410(", "").replace(")", "")
    data = demjson.decode(text)
    if year == "2020-02" or year == "2020-03":
        result = data["result"][2]
    elif year == "2020-04":
        result = data["result"][3]
    else:
        result = data["result"][0]
    Sum = result["MKT_VALUE"]
    MKT_VALUE.append(Sum)
    Circulate = result["NEGOTIABLE_VALUE"]
    NEGOTIABLE_VALUE.append(Circulate)
    Mean = result["AVG_PROFIT_RATE"]
    AVG_PROFIT_RATE.append(Mean)


def Sql():
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='000000', db='chars', charset='utf8')
    cursor = db.cursor()
    l = list(zip(MKT_VALUE, NEGOTIABLE_VALUE,AVG_PROFIT_RATE))
    inser_sql = "insert into app_stockdata(MKT_VALUE,NEGOTIABLE_VALUE,AVG_PROFIT_RATE) VALUES(%s,%s,%s)"
    cursor.executemany(inser_sql, l)
    db.commit()
    db.close()


if __name__ == '__main__':
    Head()
