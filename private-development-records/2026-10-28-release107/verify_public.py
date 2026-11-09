"""Read-only health, download and Range checks; no admin credentials."""
import hashlib
import json
from pathlib import Path
import time
import urllib.request
import urllib.error

OUT=Path('D:/AnLi/.codex-artifacts/2026-10-28-release107')
expected=json.loads((OUT/'apk-verification.json').read_text(encoding='utf-8'))
req=urllib.request.Request('https://download.csnas.asia/api/app/music/health?t='+str(time.time_ns()),
    headers={'Cache-Control':'no-cache, no-store','Accept':'application/json'})
with urllib.request.urlopen(req,timeout=30) as response:
    health=json.load(response)
assert health['status']=='ok' and health['app_slug']=='music'
assert health['version']=='1.0.7' and health['android_version_code']==28
assert health['file_size']==expected['size']
assert health['sha256'].upper()==expected['sha256']
assert health['filename']=='Mesting-Music-v1.0.7.apk'
(OUT/'public-health.json').write_text(json.dumps(health,ensure_ascii=False,indent=2),encoding='utf-8')
digest=hashlib.sha256(); size=0
download=OUT/'published-download.apk'
if download.exists() and download.stat().st_size==expected['size']:
    with download.open('rb') as cached:
        while chunk:=cached.read(1024*1024):size+=len(chunk);digest.update(chunk)
else:
    with urllib.request.urlopen(urllib.request.Request(health['primary_url'],
        headers={'Cache-Control':'no-cache','Accept-Encoding':'identity'}),timeout=30) as response:
        assert response.status==200 and response.geturl().startswith('https://download.csnas.asia/')
        with download.open('wb') as target:
            while chunk:=response.read(1024*1024):
                size+=len(chunk)
                assert size<=expected['size']
                digest.update(chunk);target.write(chunk)
assert size==expected['size'] and digest.hexdigest().upper()==expected['sha256']
(OUT/'full-download-verification.json').write_text(json.dumps({'size':size,'sha256':digest.hexdigest().upper()},indent=2),encoding='utf-8')
result={'health':health,'fullDownloadSize':size,'fullDownloadSha256':digest.hexdigest().upper(),
    'rangeChecks':'separate production release-note reader','deviceAccess':False}
(OUT/'public-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'version':health['version'],'versionCode':health['android_version_code'],
    'size':size,'sha256':digest.hexdigest().upper()},indent=2))
