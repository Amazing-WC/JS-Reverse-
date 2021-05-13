import requests
import random
import json
import re
from concurrent.futures import ThreadPoolExecutor
import json
import pandas as pd
import time
def getallpage():
    num = random.random()
    url = f'http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=6yzf&st=desc&sd=2020-03-10&ed=2021-03-10&qdii=&tabSubtype=,,,,,&pi=1&pn=50&dx=1&v={num}'
    headers = {
        'Host': 'fund.eastmoney.com',
        'Pragma': 'no-cache',
        'Referer': 'http://fund.eastmoney.com/data/fundranking.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
    }
    res = requests.get(url, headers=headers)
    content = res.text
    allpage = re.findall(r'allPages:(\d+),', content)
    allpage = int(allpage[0])
    return allpage
def getallfund(pageindex):
    num = random.random()
    pageindex_all_fund = {}
    url = f'http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=6yzf&st=desc&sd=2020-03-10&ed=2021-03-10&qdii=&tabSubtype=,,,,,&pi={pageindex}&pn=50&dx=1&v={num}'
    headers = {
        'Host': 'fund.eastmoney.com',
        'Pragma': 'no-cache',
        'Referer': 'http://fund.eastmoney.com/data/fundranking.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
    }
    res = requests.get(url, headers=headers)
    content = res.text
    datas = re.findall(r'datas:\[(.*)\],allRecords', content)

    data_str = re.findall(r'"(.*?)"', datas[0])
    for data in data_str:
        all_data = data.split(',')
        fund_code = all_data[0]
        fund_name = all_data[1]
        pageindex_all_fund[fund_code] = fund_name
    print(f'第{pageindex}页打印完毕')
    return pageindex_all_fund

def parse_fund_detail(code,name):
    file_path = f'{name}.csv'
    fund_code=code
    start_date = ''
    end_date = ''
    url = 'http://api.fund.eastmoney.com/f10/lsjz'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        'Referer': 'http://fundf10.eastmoney.com/',
    }
    result = dict()
    result_fsrq = []
    params = {
        "callback": f"jQuery183{''.join([str(random.randrange(0, 10)) for _ in range(17)])}_{int(time.time() * 1000)}",
        "fundCode": fund_code,
        "pageIndex": "1",
        "pageSize": "100000",
        "startDate": start_date,
        "endDate": end_date,
        "_": str(int(time.time() * 1000)),
    }
    response = json.loads(re.findall(r'\((.*)\)', requests.get(url, headers=headers, params=params).text, re.S)[0])
    # 日期
    FSRQ = []
    # 单位净值
    DWJZ = []
    fund_info = response['Data']['LSJZList']
    for i in range(len(fund_info)):
        # FSRQ.append(datetime.datetime.strptime(fund_info[i]['FSRQ'], '%Y-%m-%d'))
        FSRQ.append(fund_info[i]['FSRQ'])
        DWJZ.append(fund_info[i]['DWJZ'])
    result_fsrq = FSRQ if len(FSRQ) > len(result_fsrq) else result_fsrq
    result[fund_code] = DWJZ
    max_len = 0
    for key in result:
        max_len = len(result[key]) if len(result[key]) > max_len else max_len
    for key in result:
        result[key] += [None] * (max_len - len(result[key]))
    result = pd.DataFrame(result)
    result.index = result_fsrq
    result.to_csv(file_path, encoding='ANSI')
    print(f'{file_path}下载成功')
if __name__ == '__main__':
    pool = ThreadPoolExecutor(max_workers=20)
    all_fund={}
    allpage = getallpage()
    for pageindex_all_fund in pool.map(getallfund,range(1,allpage+1)):
        all_fund.update(pageindex_all_fund)
    # for i in all_fund.keys():
    #     if i =='010098':
    #         parse_fund_detail(i,all_fund[i])
    pool.map(parse_fund_detail,all_fund.keys(),all_fund.values())