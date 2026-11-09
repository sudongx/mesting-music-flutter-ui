"""Anonymous isolated Web SDK comparison; no SMS, account, or saved profile."""
import asyncio
import json
import re
import secrets
import urllib.parse
import uuid
from pathlib import Path
from playwright.async_api import async_playwright

out = Path(__file__).resolve().parent
assets = Path('D:/AnLi/third_party/qishui_web_auth/android-assets/qishui-web-auth')
origin = 'https://api.qishui.com'

async def main():
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
            headless=True,
        )
        stage = 'context'
        try:
            context = await browser.new_context()

            async def route(request_route):
                url = urllib.parse.urlparse(request_route.request.url)
                name = url.path.rsplit('/', 1)[-1]
                if url.hostname == 'api.qishui.com' and url.path == '/':
                    await request_route.fulfill(content_type='text/html',
                        body=(assets / 'security_host.html').read_text('utf-8'))
                elif name in ('react.js', 'react-dom.js', 'sdk-glue.js', 'bdms.js'):
                    await request_route.fulfill(content_type='text/javascript',
                        body=(assets / name).read_bytes())
                else:
                    await request_route.continue_()

            await context.route('**/*', route)
            page = await context.new_page()
            stage = 'navigation'
            await page.goto(origin, wait_until='domcontentloaded', timeout=40000)
            stage = 'sdk-ready'
            await page.wait_for_function('Boolean(window.bdms && window.__qishuiRequest)', timeout=30000)
            await page.wait_for_timeout(3000)
            params = {'aid':'386088','passport_jssdk_version':'2.4.13',
                'passport_jssdk_type':'normal','is_from_ttaccountsdk':'1',
                'biz_trace_id':secrets.token_hex(4)}
            headers = {'Accept':'application/json',
                'x-tt-passport-verify-portrait':str(uuid.uuid4())+'.login',
                'x-tt-passport-trace-id':secrets.token_hex(4)}

            async def request(path, fields, form=None):
                return await page.evaluate('''async ({url,headers,form}) => {
                    const body=form===null?null:new URLSearchParams(form).toString();
                    if(body!==null)headers['Content-Type']='application/x-www-form-urlencoded';
                    const r=await window.__qishuiRequest({method:body===null?'GET':'POST',url,headers,body});
                    return r;
                }''', {'url':origin+path+'?'+urllib.parse.urlencode(fields),
                        'headers':dict(headers),'form':form})

            stage = 'create-request'
            created = await request('/passport/web/get_qrcode/', {**params,
                'next':origin,'need_logo':'false','need_short_url':'false','is_new_login':'1'})
            payload = json.loads(created.get('body') or '{}')
            data = payload.get('data') or {}
            token = data.get('token')
            results.append({'phase':'create','http':created.get('status'),
                'business':data.get('error_code'),'hasToken':bool(token),
                'signed':bool(urllib.parse.parse_qs(urllib.parse.urlparse(created.get('responseURL','')).query).get('a_bogus'))})
            if not token:
                raise RuntimeError('Anonymous QR creation did not provide a token')
            body = {'need_logo':'false','need_short_url':'false','is_frontier':'true',
                'is_new_login':'1','token':token,'next':origin}
            # These are disposable WEB client IDs, never mobile BDInstall IDs.
            # Compare a declared web client with the existing minimal request.
            device = str(10**15 + secrets.randbelow(9*10**15))
            install = str(10**14 + secrets.randbelow(9*10**14))
            for label in ('minimal','web-context'):
                stage = label
                await page.wait_for_timeout(3000)
                fields = dict(params)
                if label == 'web-context':
                    info = await page.evaluate('window.__qishuiBrowserInfo()')
                    cookies = await context.cookies(origin)
                    ms_token = next((c['value'] for c in cookies if c['name']=='msToken'), '')
                    fields.update({'language':'zh','account_sdk_source':'web','p_js_v':'2.4.13',
                        'p_js_t':'pro','p_zt':'3.3.5','p_ver':'1.0.29','p_bd':'1.0.0.41',
                        'device_platform':'PC','version_code':'3.5.2','is_new_login':'1',
                        'device_id':device,'did':device,'install_id':install,'iid':install,
                        'account_sdk_source_info':info['encrypted'],
                        'request_host':urllib.parse.quote(origin, safe='')})
                    if ms_token:
                        fields['msToken'] = ms_token
                response = await request('/passport/web/check_qrconnect/', fields, body)
                value = json.loads(response.get('body') or '{}')
                d = value.get('data') or {}
                results.append({'phase':label,'http':response.get('status'),
                    'business':d.get('error_code'),'qrStatus':d.get('status'),
                    'signed':bool(urllib.parse.parse_qs(urllib.parse.urlparse(response.get('responseURL','')).query).get('a_bogus')),
                    'requestFieldNames':sorted(fields),
                    'hasRuntimeMsToken':"[REDACTED]" in fields})
            await context.close()
        except Exception as error:
            # No raw browser errors/URLs/cookie values in the public summary.
            safe = re.sub(r'https?://[^\s\"\'<>]+', '[url]', str(error))
            safe = re.sub(r'[A-Za-z0-9_+/=-]{24,}', '[opaque]', safe)
            results.append({'failure':type(error).__name__, 'stage':stage,
                'detail':safe[:500]})
        finally:
            await browser.close()
    (out/'isolated-web-context-results.json').write_text(json.dumps(results,indent=2),'utf-8')
    print(json.dumps(results))

asyncio.run(main())
