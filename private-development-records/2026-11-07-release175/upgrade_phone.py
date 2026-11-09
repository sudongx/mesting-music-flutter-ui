"""Authorized retained-data 95 -> 96 upgrade of the original-signed candidate."""
import hashlib
import json
import re
import subprocess
from pathlib import Path

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT / 'device-state-private.json').read_text('utf-8'))['serial']
APK = OUT / 'candidate4/Mesting-Music-v1.0.75.apk'
verification = json.loads(APK.with_name('Mesting-Music-v1.0.75-verification.json').read_text('utf-8'))
assert hashlib.sha256(APK.read_bytes()).hexdigest() == verification['sha256']
assert verification['originalSignature'] and verification['buildInputsUnchangedThroughVerification']

def run(*args, timeout=15):
    result = subprocess.run([ADB, '-s', SERIAL, *args], capture_output=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError('ADB step failed: ' + ' '.join(args[:3]))
    return result.stdout.decode('utf-8', errors='replace')

def info():
    raw = run('shell', 'dumpsys', 'package', 'com.mesting.music')
    return {
        'code': int(re.search(r'versionCode=(\d+)', raw)[1]),
        'name': re.search(r'versionName=(\S+)', raw)[1],
        'firstInstallTime': re.search(r'firstInstallTime=([^\r\n]+)', raw)[1],
        'lastUpdateTime': re.search(r'lastUpdateTime=([^\r\n]+)', raw)[1],
    }

receipt = OUT / 'device/upgrade175.json'
assert not receipt.exists(), 'Retain the prior upgrade receipt'
before = info()
assert before['code'] == 95 and before['name'] == '1.0.74'
(OUT / 'device/before-upgrade175.json').write_text(json.dumps(before, indent=2) + '\n', 'utf-8')
print(json.dumps({'retainedDataUpgradeStarted': True, 'fromCode': 95, 'toCode': 96}), flush=True)
installed = run('install', '-r', str(APK), timeout=120)
assert 'Success' in installed
after = info()
assert after['code'] == 96 and after['name'] == '1.0.75'
assert after['firstInstallTime'] == before['firstInstallTime']
receipt.write_text(json.dumps({'before': before, 'after': after,
    'apkSha256': verification['sha256'], 'retainedDataUpgrade': True,
    'firstInstallTimePreserved': True, 'uninstalled': False, 'clearedData': False,
    'performanceAccepted': False}, indent=2) + '\n', 'utf-8')
print(json.dumps({'retainedDataUpgradeVerified': True, 'code': 96, 'firstInstallTimePreserved': True}), flush=True)
