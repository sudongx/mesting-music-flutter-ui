"""One authorized, original-signature, data-retaining replacement install."""
import hashlib
import json
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
adb = Path('D:/CodexCache/android-build/sdk/platform-tools/adb.exe')
serial = 'eb293ac2'

def call(*args, timeout=30):
    return subprocess.check_output([str(adb), '-s', serial, *args],
        stderr=subprocess.STDOUT, timeout=timeout).decode('utf-8', errors='replace')

def package():
    raw = call('shell', 'dumpsys', 'package', 'com.mesting.music')
    return {
        'version': re.search(r'\bversionName=([^\s]+)', raw)[1],
        'code': int(re.search(r'\bversionCode=(\d+)', raw)[1]),
        'firstInstallTime': re.search(r'firstInstallTime=([^\r\n]+)', raw)[1].strip(),
    }

before = json.loads((out / 'device-before-install.json').read_text('utf-8'))
assert call('get-state').strip() == 'device'
current = package()
assert current['version'] == before['version'] == '1.0.65'
assert current['code'] == before['code'] == 86
assert current['firstInstallTime'] == before['firstInstallTime']
record = json.loads((root / 'release/Mesting-Music-v1.0.66-verification.json').read_text('utf-8'))
apk = root / 'release/Mesting-Music-v1.0.66.apk'
with apk.open('rb') as stream:
    digest = hashlib.file_digest(stream, 'sha256').hexdigest()
assert digest == record['sha256'] and record['androidVersionCode'] == 87
assert record['certificateSha256'] == '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
result = call('install', '-r', str(apk), timeout=180)
(out / 'install.log').write_text(result, 'utf-8')
assert 'Success' in result
after = package()
assert after['version'] == '1.0.66' and after['code'] == 87
assert after['firstInstallTime'] == before['firstInstallTime']
after.update({
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'serial': serial, 'installedApkSha256': digest,
    'replaceRequested': True, 'uninstallOrClearData': False,
    'privateCredentialFilesRead': False, 'smsTriggeredByAgent': False,
    'appStartedByInstallScript': False, 'businessAcceptanceClaimed': False,
})
(out / 'device-after-install.json').write_text(json.dumps(after, indent=2), 'utf-8')
print({k: after[k] for k in ('version', 'code', 'firstInstallTime')})
