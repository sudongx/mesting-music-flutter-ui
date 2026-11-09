"""Temporary local browser transaction. Human alone authorizes in official app.

No SMS, account import, password input, persisted profile or credential output.
The owned browser is closed after one result/expiry; this does not log Mesting in.
"""
import asyncio
import base64
import hashlib
import json
import secrets
import time
import urllib.parse
import uuid
from datetime import datetime
from pathlib import Path
from playwright.async_api import async_playwright

out = Path(__file__).resolve().parent
assets = Path('D:/AnLi/third_party/qishui_web_auth/android-assets/qishui-web-auth')
origin = 'https://api.qishui.com'
run = 'full-context-live-' + datetime.now().strftime('%H%M%S')
status_file = out / (run + '.json')

async def main():
    records = []
    status = {'run': run, 'state': 'starting', 'events': records,
              'smsTriggered': False, 'cookieValuesRecorded': False}
    def save():
        status_file.write_text(json.dumps(status, indent=2), 'utf-8')
    save()
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless=True)
        try:
            context = await browser.new_context()
            async def route(r):
                u = urllib.parse.urlparse(r.request.url)
                name = u.path.rsplit('/', 1)[-1]
                if u.hostname == 'api.qishui.com' and u.path == '/':
                    await r.fulfill(content_type='text/html', body=(assets/'security_host.html').read_text('utf-8'))
                elif name in ('react.js','react-dom.js','sdk-glue.js','bdms.js'):
                    await r.fulfill(content_type='text/javascript', body=(assets/name).read_bytes())
                else:
                    await r.continue_()
            await context.route('**/*', route)
            page = await context.new_page()
            await page.goto(origin, wait_until='domcontentloaded', timeout=40000)
            await page.wait_for_function('Boolean(window.bdms && window.__qishuiRequest)', timeout=30000)
            await page.wait_for_timeout(2500)
            device = str(10**15 + secrets.randbelow(9*10**15))
            install = str(10**14 + secrets.randbelow(9*10**14))
            # Disposable web-client identity, never labelled mobile registration.
            fields = {'aid':'386088','passport_jssdk_version':'2.4.13',
                'passport_jssdk_type':'normal','is_from_ttaccountsdk':'1',
                'language':'zh','account_sdk_source':'web','p_js_v':'2.4.13',
                'p_js_t':'pro','p_zt':'3.3.5','p_ver':'1.0.29','p_bd':'1.0.0.41',
                'device_platform':'PC','version_code':'3.5.2','is_new_login':'1',
                'is_from_iesaccountsaas':'1','device_id':device,'did':device,
                'install_id':install,'iid':install,
                'request_host':urllib.parse.quote(origin, safe='')}
            portrait = str(uuid.uuid4())+'.login'
            async def request(path, extra=None, form=None):
                info = await page.evaluate('''async () => {
                    const info=await window.__qishuiBrowserInfo();
                    info.raw.request_host=location.hostname;
                    info.raw.request_pathname=location.pathname;
                    return xor5Hex(JSON.stringify(info.raw));
                }''')
                params = {**fields, 'account_sdk_source_info':info,
                    'biz_trace_id':secrets.token_hex(4), **(extra or {})}
                cookies = await context.cookies(origin)
                ms = next((c['value'] for c in cookies if c['name']=='msToken'), '')
                if ms: params['msToken']=ms
                body = urllib.parse.urlencode(form) if form is not None else None
                headers={'Accept':'application/json',
                    'x-tt-passport-verify-portrait':portrait,
                    'x-tt-passport-trace-id':secrets.token_hex(4)}
                if body is not None:
                    headers['Content-Type']='application/x-www-form-urlencoded'
                    headers['x-ss-stub']=hashlib.md5(body.encode()).hexdigest().upper()
                response = await page.evaluate('''async r => window.__qishuiRequest(r)''', {
                    'url':origin+path+'?'+urllib.parse.urlencode(params),
                    'method':'GET' if body is None else 'POST','headers':headers,'body':body})
                data = json.loads(response.get('body') or '{}')
                return data, response
            payload, response = await request('/passport/web/get_qrcode/', {
                'next':origin,'need_logo':'false','need_short_url':'false','is_new_login':'1'})
            d = payload.get('data') or {}
            token=d.get('token');image=d.get('qrcode','')
            assert d.get('error_code') in (0,None) and token and image.startswith('data:image/png;base64,')
            png=base64.b64decode(image.partition(',')[2],validate=True)
            assert png.startswith(b'\x89PNG\r\n\x1a\n') and len(png)<512*1024
            image_file=out/(run+'.private.png');image_file.write_bytes(png)
            status.update({'state':'waiting-user','qrImage':str(image_file),
                'client':'isolated local Edge Web SDK; not Mesting',
                'createdAt':datetime.now().isoformat(),'expiresSeconds':180})
            save();print(json.dumps({'ready':True,'run':run,'statusFile':str(status_file),'image':str(image_file)}),flush=True)
            started=time.monotonic();last=None
            while time.monotonic()-started<180:
                await page.wait_for_timeout(3000)
                value, response=await request('/passport/web/check_qrconnect/', form={
                    'need_logo':'false','need_short_url':'false','is_frontier':'true',
                    'token':token,'is_new_login':'1','next':origin})
                d=value.get('data') or {};code=str(d.get('error_code',0));qr_state=str(d.get('status',''))
                event={'code':code,'qrStatus':qr_state,'elapsedSeconds':round(time.monotonic()-started)}
                key=(code,qr_state)
                if key!=last:
                    records.append(event);last=key;save();print(json.dumps(event),flush=True)
                if code=='2046':
                    status['state']='verification-required';break
                if code=='2' or qr_state in ('expired','expire','timeout'):
                    status['state']='expired';break
                if code=='0' and (qr_state in ('3','confirmed','success') or d.get('logged_in') is True):
                    cookies=await context.cookies(origin)
                    status['confirmedByService']=True
                    status['freshSessionCookiePresent']=any(c['name'] in ('sessionid','sessionid_ss') and c['value'] for c in cookies)
                    status['state']='service-confirmed';break
                if code=='7': await page.wait_for_timeout(2000)
            else:
                status['state']='expired-without-confirmation'
            await context.close()
        except Exception as error:
            status.update({'state':'failed','errorType':type(error).__name__})
        finally:
            await browser.close()
            status['browserClosed']=True
            status['credentialValuesPersisted']=False
            save();print(json.dumps({'run':run,'finalState':status['state'],'browserClosed':True}),flush=True)

asyncio.run(main())
