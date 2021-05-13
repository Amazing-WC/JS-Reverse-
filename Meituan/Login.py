import requests
from lxml import etree
import execjs
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
import base64
url = 'https://passport.meituan.com/account/unitivelogin'
headers = {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
}
session = requests.session()
def get_html(url):
    html = session.get(url, headers=headers).text
    with open('1.html','w',encoding='utf-8') as f :
        f.write(html)
    return html
def get_param(html):
    html = etree.HTML(html)
    login_url = 'https://passport.meituan.com'+html.xpath('//div[@class="login-section"]/form[@id="J-normal-form"]/@action')[0]
    print(login_url)
    # uuid=html.xpath('//i[@class="form-uuid"]/text()')[0]
    # print(uuid)
    csrf = html.xpath('//span[@id="csrf"]/text()')[0]
    print(csrf)
    return login_url,csrf
def get_h5F(url):
    with open('h5Fingerprint.js',encoding='utf-8') as f:
        js = f.read()
    h5fingerprint = execjs.compile(js).call('get_h5Fingerprint',url)
    return h5fingerprint
def get_encrypt_pwd(pwd):
    rsakey=RSA.importKey(open('public.pem').read())
    cipher = Cipher_pkcs1_v1_5.new(rsakey)  # 创建用于执行pkcs1_v1_5加密或解密的密码
    encrypt_pwd = base64.b64encode(cipher.encrypt(pwd.encode('utf-8'))).decode('utf-8')
    print(encrypt_pwd)
    return encrypt_pwd
def login(login_url,csrf,h5fingerprint,encrypt_pwd):
    headers={
        'Host': 'passport.meituan.com',
        'Origin': 'https://passport.meituan.com',
        'Referer': 'https://passport.meituan.com/account/unitivelogin',
        'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
        'X-CSRF-Token': csrf,
        'X-Requested-With': 'XMLHttpRequest',
    }
    data={
        'countrycode':86,
        'email':157********,
        'password':encrypt_pwd,
        'origin':'account-login',
        'csrf':csrf,
        'requestCode':'',
        'responseCode':'',
        'h5Fingerprint':h5fingerprint,
        'device_name':'',
        'device_type': 'Chrome',
        'device_os': 'Window',
        'sdkType': 'pc'
}
    content = session.post(login_url,headers=headers,data=data)
    print(content.text)

if __name__ == '__main__':
    pwd='123456'
    html =get_html(url)
    login_url, csrf = get_param(html)
    h5fingerprint = get_h5F(login_url)
    encrypt_pwd = get_encrypt_pwd(pwd)
    login(login_url,csrf,h5fingerprint,encrypt_pwd)
