"""Read existing APK identity/signature only; no install or device connection."""
from pathlib import Path
import json
import os
import re
import subprocess

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
tools = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
jdk = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1')
env = os.environ.copy()
env['JAVA_HOME'] = str(jdk)
env['PATH'] = str(jdk / 'bin') + os.pathsep + env.get('PATH', '')
rows = []
for version, code in [('1.0.52', 73), ('1.0.53', 74), ('1.0.54', 75)]:
    path = root / 'release' / f'Mesting-Music-v{version}.apk'
    signature = subprocess.check_output([str(tools / 'apksigner.bat'), 'verify', '--print-certs', str(path)], env=env, text=True)
    cert = re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].lower()
    assert cert == '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
    badging = subprocess.check_output([str(tools / 'aapt.exe'), 'dump', 'badging', str(path)], env=env, text=True, encoding='utf-8', errors='replace')
    assert f"package: name='com.mesting.music' versionCode='{code}' versionName='{version}'" in badging
    rows.append({'version': version, 'code': code, 'package': 'com.mesting.music', 'certificateSha256': cert})
record = {'actualApkIdentityReadbacks': rows, 'matchingPackageAndSigningCertificate': True,
    'increasingVersionCode': True, 'physicalUpgradePerformed': False, 'privateDataPreservationOnDeviceVerified': False,
    'deviceAccess': False}
(out / 'upgrade-identities.json').write_text(json.dumps(record, indent=2) + '\n', 'utf-8')
print('Actual52/53/54 package and certificate match; increasing73/74/75; no physical upgrade performed.')
