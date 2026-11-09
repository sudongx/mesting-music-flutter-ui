"""Bounded anonymous public QR/route checks. Never send SMS or account cookies."""
import base64
import json
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

out = Path(__file__).resolve().parent
ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

def get(url):
    request = urllib.request.Request(url, headers={'User-Agent': ua, 'Accept': '*/*'})
    try:
        response = urllib.request.urlopen(request, timeout=20)
    except urllib.error.HTTPError as error:
        response = error
    with response:
        return response.status, dict(response.headers), response.read(1024 * 1024)

query = urllib.parse.urlencode({
    'passport_jssdk_version': '2.4.13', 'passport_jssdk_type': 'normal',
    'is_from_ttaccountsdk': '1', 'aid': '386088', 'next': 'https://api.qishui.com',
    'need_logo': 'false', 'need_short_url': 'false', 'is_new_login': '1',
})
status, headers, body = get('https://api.qishui.com/passport/web/get_qrcode/?' + query)
# This private response may contain an ephemeral QR token. Do not print it,
# include it in external searches, or copy it into product/release records.
(out / 'anonymous-create.private.json').write_bytes(body)
payload = json.loads(body)
data = payload.get('data') or {}
url = urllib.parse.urlparse(data.get('qrcode_index_url', ''))
summary = {'createHttp': status, 'businessCode': data.get('error_code'),
    'dataFields': sorted(data), 'hasToken': bool(data.get('token')),
    'indexHost': url.hostname, 'indexPath': url.path,
    'indexQueryKeys': sorted(urllib.parse.parse_qs(url.query)),
    'imageType': str(data.get('qrcode', ''))[:22],
    'imageLength': len(data.get('qrcode', '')),
}
image = data.get('qrcode', '')
if image.startswith('data:image/png;base64,'):
    raw = base64.b64decode(image.partition(',')[2], validate=True)
    assert raw.startswith(b'\x89PNG\r\n\x1a\n') and len(raw) < 512 * 1024
    (out / 'anonymous-qr.private.png').write_bytes(raw)
summary['routeChecks'] = []
for path in ('/ucenter_web/app/sdk-next', '/light/invoke/scan_login'):
    # No live token: this tests route delivery, not successful login.
    probe = 'https://bff-pc.qishui.com' + path + '?aid=386088&token=[REDACTED]&uc_sdk=scan-auth'
    try:
        code, response_headers, raw = get(probe)
        name = path.rsplit('/', 1)[1]
        (out / (name + '.public.html')).write_bytes(raw)
        summary['routeChecks'].append({'path': path, 'http': code,
            'contentType': response_headers.get('Content-Type', ''), 'bytes': len(raw)})
    except Exception as error:
        summary['routeChecks'].append({'path': path, 'error': type(error).__name__})
(out / 'public-route-summary.json').write_text(json.dumps(summary, indent=2), 'utf-8')
print(json.dumps(summary))
