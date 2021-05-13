import requests
import re
import execjs
from requests import utils
class Home():
    def __init__(self):
        self.url = 'https://www.mafengwo.cn/i/9754893.html'
        self.headers = {
            'Host': 'www.mafengwo.cn',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.56',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        }
        self.cookies = {}

    def get_cookie_one(self):
        ''' 第一次获取cookie '''
        response = requests.get(url=self.url, headers=self.headers, cookies=self.cookies)
        html = response.text

        # 获取setCookie
        cookie = utils.dict_from_cookiejar(response.cookies)
        # 添加setCookie
        self.cookies = cookie
        # 获取页面内JS代码
        js_code = re.findall(r'document.cookie=(.*?);location.href=', html)[0]
        cookie = execjs.eval(js_code)
        key, vlaue = cookie.split(';')[0].split('=')
        f_cookie = {key: vlaue}
        # 添cookie对象中
        self.cookies.update(f_cookie)

    def get_cookie_two(self):
        ''' 第二次获取cookie '''
        while True:
            # 有时请求是获取不到cookie，所以写个循环
            response = requests.get(url=self.url, headers=self.headers, cookies=self.cookies)
            html = response.text

            go = re.findall('go\(\{(.*)\}\)', html)[0]
            print(go)
            # go='"bts":["1617185800.794|0|8k1","yNtSpzT5%2FJ%2BXIWzaqHJGrY%3D"],"chars":"OtSqDF4KSwDvWIeOarHkzS","ct":"91c81061cfbd7971c02c0d146fccd12060c681c05edc4c8b267aa160fe0dbf2d","ha":"sha256","tn":"__jsl_clearance_s","vt":"3600","wt":"1500"'

            '''
            go({
              "bts": ["1617160559.515|0|LY4", "tVGSYflNiNfJNuC5etNKc4%3D"],
              "chars": "GBJaJDhAQcVkuJtDYYDgOA",
              "ct": "7008fb660901d63ef91b1a3d85c9fc1823f99c6892a062a0adf50175225bb384",
              "ha": "sha256",
              "tn": "__jsl_clearance_s",
              "vt": "3600",
              "wt": "1500"
            });
            '''
            with open('./cookie.js', encoding='utf-8') as f:
                js = f.read()
            js = js + 'go({' + go + '});' + 'function getCookie(){return cookie}'
            try :
                cookie = execjs.compile(js).call('getCookie')
            except:
                print('未获取到cookie，重新获取')
                cookie ={}
            else:
                if cookie:
                    finnal_cookie = cookie.split(';')[0].split('=')
                    # 更换Cookie
                    self.cookies['__jsl_clearance_s'] = finnal_cookie[1]
                    break

    def run(self):
        ''' 方法运行 '''
        try:
            self.get_cookie_one()
            self.get_cookie_two()
        except Exception as f:
            print(f)
            pass
        else:
            return True
    def getInfo(self):
        do = h.run()
        if do:
            response = requests.get(url=self.url, headers=self.headers, cookies=self.cookies)
            html = response.text
            # print(html)
            # with open('1.html','w',encoding='utf-8') as f :
            #     f.write(html)
            m3u8_url = re.findall(r'data-url="(.*?);type=.m3u8',html)
            print(m3u8_url)

if __name__ == '__main__':
    h = Home()
    con = h.getInfo()
