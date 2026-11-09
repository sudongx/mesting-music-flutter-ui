"""Authorized one-time, original-signature, retain-data replacement.

Read package metadata only. No private credentials, official app, SMS, account
confirmation or real playlist mutations are read or operated by this script.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import re
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
ADB = Path('D:/CodexCache/android-build/sdk/platform-tools/adb.exe')
devices = subprocess.check_output([str(ADB), 'devices'], text=True)
serials = re.findall(r'^([^\s]+)\s+device\s*$', devices, re.M)
assert len(serials) == 1, 'Exactly one authorized, unlocked device must be available'
serial = serials[0]

def call(*args, timeout=30):
    return subprocess.check_output([str(ADB), '-s', serial, *map(str, args)], stderr=subprocess.STDOUT,
                                   timeout=timeout).decode('utf-8', errors='replace')

def package():
    value = call('shell', 'dumpsys', 'package', 'com.mesting.music')
    return {'version': re.search(r'\bversionName=([^\s]+)', value)[1],
            'code': int(re.search(r'\bversionCode=(\d+)', value)[1]),
            'firstInstallTime': re.search(r'firstInstallTime=([^\r\n]+)', value)[1].strip()}

assert not (OUT/'device-after-install.json').exists(), 'Do not repeat a successful overlay'
before = package()
assert before['version'] == '1.0.66' and before['code'] == 87
previous = json.loads((ROOT/'.codex-artifacts/2026-11-06-release166/device-after-install.json').read_text('utf-8'))
assert before['firstInstallTime'] == previous['firstInstallTime']
(OUT/'device-before-install.json').write_text(json.dumps(before, indent=2)+'\n', 'utf-8')
apk = ROOT/'release/Mesting-Music-v1.0.67.apk'
record = json.loads((ROOT/'release/Mesting-Music-v1.0.67-verification.json').read_text('utf-8'))
with apk.open('rb') as stream:
    digest = hashlib.file_digest(stream, 'sha256').hexdigest()
assert record['sha256'] == digest and record['androidVersionCode'] == 88
assert record['certificateSha256'] == '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
assert (OUT/'host-check-summary.json').exists() and (OUT/'native-packaging-verification.json').exists()
result = call('install', '-r', apk, timeout=180)
(OUT/'install.log').write_text(result, 'utf-8')
assert 'Success' in result
after = package()
assert after['version'] == '1.0.67' and after['code'] == 88
assert after['firstInstallTime'] == before['firstInstallTime']
after.update({'recordedAtUtc': datetime.now(timezone.utc).isoformat(), 'serial': serial,
    'installedApkSha256': digest, 'replaceRequested': True, 'uninstallOrClearData': False,
    'privateCredentialFilesRead': False, 'smsTriggeredByAgent': False,
    'appStartedByInstallScript': False, 'businessAcceptanceClaimed': False})
(OUT/'device-after-install.json').write_text(json.dumps(after, indent=2)+'\n', 'utf-8')
print({key: after[key] for key in ('version', 'code', 'firstInstallTime')})
