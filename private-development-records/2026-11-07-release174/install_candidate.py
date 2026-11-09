"""Retained-data upgrade of the single authorized package on the named phone."""
import hashlib, json, re, subprocess
from pathlib import Path

ROOT = Path('D:/AnLi'); OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = 'eb293ac2'; PACKAGE = 'com.mesting.music'
def adb(*args):
    return subprocess.run([ADB, '-s', SERIAL, *args], capture_output=True, check=True)
def installed():
    raw = adb('shell', 'dumpsys', 'package', PACKAGE).stdout.decode('utf8', errors='replace')
    values = {}
    for key, pattern in {'code': r'versionCode=(\d+)', 'name': r'versionName=([^\s]+)',
                         'firstInstallTime': r'firstInstallTime=([^\r\n]+)', 'lastUpdateTime': r'lastUpdateTime=([^\r\n]+)'}.items():
        values[key] = re.search(pattern, raw)[1].strip()
    return values
before = installed()
assert (before['code'], before['name']) in [('94', '1.0.73'), ('95', '1.0.74')], before
if before['code'] == '95':
    prior_receipt = OUT / 'fourth-device-candidate/installation74.json'
    if not prior_receipt.exists():
        prior_receipt = OUT / 'second-device-candidate/installation74.json'
    if not prior_receipt.exists():
        prior_receipt = OUT / 'first-device-candidate/installation74.json'
    first = json.loads(prior_receipt.read_text('utf8'))
    assert first['after']['firstInstallTime'] == before['firstInstallTime']
    prior_path = adb('shell', 'pm', 'path', PACKAGE).stdout.decode().strip().splitlines()[0]
    assert prior_path.startswith('package:/data/app/') and prior_path.endswith('/base.apk')
    assert adb('shell', 'sha256sum', prior_path.removeprefix('package:')).stdout.decode().split()[0] == first['apkSha256']
apk = ROOT / 'release/Mesting-Music-v1.0.74.apk'
record = json.loads((ROOT / 'release/Mesting-Music-v1.0.74-verification.json').read_text('utf8'))
assert record['originalSignature'] and record['androidVersionCode'] == 95
assert hashlib.sha256(apk.read_bytes()).hexdigest() == record['sha256']
result = adb('install', '-r', str(apk))
assert b'Success' in result.stdout, 'Upgrade did not report success'
after = installed()
assert after['code'] == '95' and after['name'] == '1.0.74'
assert after['firstInstallTime'] == before['firstInstallTime']
path = adb('shell', 'pm', 'path', PACKAGE).stdout.decode().strip().splitlines()[0]
assert path.startswith('package:/data/app/') and path.endswith('/base.apk')
assert adb('shell', 'sha256sum', path.removeprefix('package:')).stdout.decode().split()[0] == record['sha256']
receipt = {'package': PACKAGE, 'before': before, 'after': after, 'installMode': 'adb install -r',
           'appDataCleared': False, 'uninstalled': False, 'firstInstallTimePreserved': True,
           'installedPublicApkSha256Matched': True, 'apkSha256': record['sha256'],
           'phoneSerialRedacted': True, 'privateAccountFilesRead': False}
(OUT / 'device/installation74.json').write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
record.update({'physicalUpgradeTestPerformed': True, 'physicalUpgradeReceipt': 'installation74.json',
               'firstInstallTimePreserved': True, 'installedPublicApkSha256Matched': True})
(ROOT / 'release/Mesting-Music-v1.0.74-verification.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({'retainedDataUpgrade': True, 'version': after['name'], 'code': after['code'],
                  'firstInstallTimePreserved': True, 'installedPublicApkSha256Matched': True}))
