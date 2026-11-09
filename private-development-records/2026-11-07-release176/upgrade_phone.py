"""Authorized original-signed 96 -> 97 upgrade, without uninstall/data clearing."""
from pathlib import Path
import hashlib
import json
import re
import subprocess

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT / 'device-baseline75.json').read_text('utf8'))['serial']
APK = OUT / 'candidate2/Mesting-Music-v1.0.76.apk'
verification = json.loads(APK.with_name('Mesting-Music-v1.0.76-verification.json').read_text('utf8'))
assert hashlib.sha256(APK.read_bytes()).hexdigest() == verification['sha256']
assert verification['originalSignature'] and verification['buildInputsUnchangedThroughVerification']

def run(*args, timeout=30):
    result = subprocess.run([ADB, '-s', SERIAL, *args], capture_output=True, timeout=timeout)
    assert result.returncode == 0, 'ADB step failed: ' + ' '.join(args[:3])
    return result.stdout.decode('utf8', errors='replace')

def info():
    raw = run('shell', 'dumpsys', 'package', 'com.mesting.music')
    return {'code': int(re.search(r'versionCode=(\d+)', raw)[1]),
        'name': re.search(r'versionName=(\S+)', raw)[1],
        'firstInstallTime': re.search(r'firstInstallTime=([^\r\n]+)', raw)[1],
        'lastUpdateTime': re.search(r'lastUpdateTime=([^\r\n]+)', raw)[1]}

receipt = OUT / 'device/upgrade176.json'
assert not receipt.exists(), 'Retain the prior upgrade receipt'
before = info()
assert before['code'] == 96 and before['name'] == '1.0.75'
(OUT / 'device/before-upgrade176.json').write_text(json.dumps(before, indent=2), 'utf8')
print({'retainedDataUpgradeStarted': True, 'fromCode': 96, 'toCode': 97}, flush=True)
assert 'Success' in run('install', '-r', str(APK), timeout=120)
after = info()
assert after['code'] == 97 and after['name'] == '1.0.76'
assert after['firstInstallTime'] == before['firstInstallTime']
receipt.write_text(json.dumps({'before': before, 'after': after,
    'apkSha256': verification['sha256'], 'retainedDataUpgrade': True,
    'firstInstallTimePreserved': True, 'uninstalled': False, 'clearedData': False,
    'performanceAccepted': False}, indent=2), 'utf8')
print({'retainedDataUpgradeVerified': True, 'code': 97, 'firstInstallTimePreserved': True}, flush=True)
