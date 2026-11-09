"""Anonymous comparison against SodaM's pinned libresoda QR contract.

Only creates disposable anonymous QRs and reads their initial status. Never
displays the QRs, requests SMS, imports an account or persists credentials.
The reference's random web nonce is not a mobile install/security credential.
"""
import asyncio
import base64
import hashlib
import json
import secrets
import urllib.parse
import uuid
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent
ASSETS = Path('D:/AnLi/third_party/qishui_web_auth/android-assets/qishui-web-auth')
ORIGIN = 'https://api.qishui.com'
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) SodaMusic/3.2.1 Chrome/136.0.7103.59 Electron/36.4.0 Safari/537.36')


def web_fields(full):
    fields = {'passport_jssdk_version': '2.4.13', 'passport_jssdk_type': 'normal',
              'is_from_ttaccountsdk': '1', 'aid': '386088'}
    if full:
        # Exact public reference fields. These are disposable web identifiers,
        # not copied from SodaM, the official app or the user's saved account.
        device = str(10**15 + secrets.randbelow(8*10**15))
        install = str(10**14 + secrets.randbelow(8*10**14))
        fields.update({'language': 'zh', 'account_sdk_source': 'web',
                       'p_js_v': '2.4.13', 'p_js_t': 'pro', 'p_zt': '3.3.5',
                       'p_ver': '1.0.29', 'request_host': 'app%3A%2F%2Fresources',
                       'p_bd': '1.0.0.41', 'is_new_login': '1',
                       'is_from_iesaccountsaas': '1', 'device_platform': 'PC',
                       'version_code': '3.5.2', 'account_sdk_source_info': '00',
                       'device_id': device, 'install_id': install, 'did': device,
                       'iid': install,
                       'msToken': base64.urlsafe_b64encode(secrets.token_bytes(88)).decode().rstrip('=') + '=='})
    return fields


async def main():
    records = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
            headless=True)
        try:
            for full in (False, True):
                context = await browser.new_context(user_agent=UA)
                try:
                    async def route(r):
                        u = urllib.parse.urlparse(r.request.url)
                        name = u.path.rsplit('/', 1)[-1]
                        if u.hostname == 'api.qishui.com' and u.path == '/':
                            await r.fulfill(content_type='text/html', body=(ASSETS/'security_host.html').read_bytes())
                        elif name in ('react.js', 'react-dom.js', 'sdk-glue.js', 'bdms.js'):
                            await r.fulfill(content_type='text/javascript', body=(ASSETS/name).read_bytes())
                        else:
                            await r.continue_()
                    await context.route('**/*', route)
                    page = await context.new_page()
                    await page.goto(ORIGIN, wait_until='domcontentloaded', timeout=40000)
                    await page.wait_for_function('Boolean(window.bdms && window.__qishuiRequest)', timeout=30000)
                    await page.wait_for_timeout(1000)
                    fields = web_fields(full)
                    portrait = str(uuid.uuid4())+'.login'

                    async def request(path, extra=None, form=None):
                        trace = secrets.token_hex(4)
                        params = {**fields, 'biz_trace_id': trace, **(extra or {})}
                        headers = {'Accept': 'application/json, text/javascript',
                                   'x-tt-passport-verify-portrait': portrait,
                                   'x-tt-passport-trace-id': trace}
                        body = urllib.parse.urlencode(form) if form is not None else None
                        if body is not None:
                            headers.update({'Content-Type': 'application/x-www-form-urlencoded',
                                            'x-ss-stub': hashlib.md5(body.encode()).hexdigest().upper()})
                        response = await page.evaluate('async r => window.__qishuiRequest(r)', {
                            'url': ORIGIN+path+'?'+urllib.parse.urlencode(params),
                            'method': 'GET' if body is None else 'POST',
                            'headers': headers, 'body': body})
                        value = json.loads(response.get('body') or '{}')
                        signed = urllib.parse.parse_qs(urllib.parse.urlparse(response.get('responseURL', '')).query)
                        return value, len(signed.get('a_bogus', [''])[0])

                    created, signature_length = await request('/passport/web/get_qrcode/', {
                        'next': ORIGIN, 'need_logo': 'false', 'need_short_url': 'false', 'is_new_login': '1'})
                    d = created.get('data') or {}
                    token = d.get('token')
                    row = {'variant': 'sodam-pinned' if full else 'mesting65-minimal',
                           'createCode': d.get('error_code', 0),
                           'createSignedLength': signature_length,
                           'isFrontierReturned': d.get('is_frontier'),
                           'queryKeys': sorted(fields)}
                    if token:
                        await page.wait_for_timeout(3000)
                        polled, n = await request('/passport/web/check_qrconnect/', form={
                            'need_logo': 'false', 'need_short_url': 'false', 'is_frontier': 'true',
                            'token': token, 'is_new_login': '1', 'next': ORIGIN})
                        d = polled.get('data') or {}
                        row.update({'pollCode': d.get('error_code', 0),
                                    'pollStatus': str(d.get('status', '')), 'pollSignedLength': n})
                    row['unexpectedSessionPresent'] = any(
                        c['name'] in ('sessionid', 'sessionid_ss') for c in await context.cookies())
                    records.append(row)
                    print(json.dumps(row), flush=True)
                finally:
                    await context.close()
        finally:
            await browser.close()
    (ROOT/'sodam-anonymous-contract-comparison.json').write_text(json.dumps({
        'scope': 'anonymous host browser only; no phone or account acceptance',
        'reference': 'sodahub-org/libresoda@5edd2ff3b825f0a16b1e281204822ee06842df9c',
        'smsTriggered': False, 'credentialValuesPersisted': False, 'records': records,
        'browserClosed': True}, indent=2), encoding='utf-8')


if __name__ == '__main__':
    asyncio.run(main())
