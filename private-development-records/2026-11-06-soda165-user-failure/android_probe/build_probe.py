"""Build an isolated anonymous WebView comparison, not a Mesting release.

No phone/account/OTP access is compiled into this diagnostic. Only the two
anonymous create/check results and signature lengths are returned to the host.
"""
import json
import os
import secrets
import shutil
import subprocess
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
JAVA = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1/bin')
SDK = Path('D:/CodexCache/android-build/sdk')
TOOLS = SDK/'build-tools/35.0.0'
ANDROID = SDK/'platforms/android-36/android.jar'
ASSETS = Path('D:/AnLi/third_party/qishui_web_auth/android-assets/qishui-web-auth')
PACKAGE = 'com.mesting.diagnostics.sodaqr166'


def run(*args, env=None):
    result = subprocess.run([str(a) for a in args], capture_output=True, text=True, env=env)
    if result.returncode:
        raise RuntimeError('Diagnostic build step failed: '+result.stderr[-2000:])


def main():
    assets = ROOT/'assets'
    classes = ROOT/'classes'
    dex = ROOT/'dex'
    for folder in (assets, classes, dex):
        folder.mkdir(exist_ok=True)
    for n in ('security_host.html', 'bdms.js', 'sdk-glue.js', 'react.js', 'react-dom.js'):
        shutil.copyfile(ASSETS/n, assets/n)
    shutil.copyfile(ROOT/'probe.js', assets/'probe.js')
    (ROOT/'AndroidManifest.xml').write_text(
        '<manifest xmlns:android="http://schemas.android.com/apk/res/android" '
        'package="'+PACKAGE+'" android:versionCode="1" android:versionName="1">'
        '<uses-permission android:name="android.permission.INTERNET"/>'
        '<application android:debuggable="true" android:allowBackup="false" '
        'android:label="扫码匿名诊断" android:theme="@android:style/Theme.Material.Light.NoActionBar">'
        '<activity android:name=".ProbeActivity" android:exported="true">'
        '<intent-filter><action android:name="android.intent.action.MAIN"/>'
        '<category android:name="android.intent.category.LAUNCHER"/></intent-filter>'
        '</activity></application></manifest>', encoding='utf-8')
    run(JAVA/'javac.exe', '-encoding', 'UTF-8', '-source', '8', '-target', '8',
        '-classpath', ANDROID, '-d', classes, ROOT/'ProbeActivity.java')
    run(JAVA/'jar.exe', 'cf', ROOT/'classes.jar', '-C', classes, '.')
    run(JAVA/'java.exe', '-cp', TOOLS/'lib/d8.jar', 'com.android.tools.r8.D8',
        '--min-api', '23', '--lib', ANDROID, '--output', dex, ROOT/'classes.jar')
    run(TOOLS/'aapt2.exe', 'link', '-I', ANDROID, '--manifest', ROOT/'AndroidManifest.xml',
        '--min-sdk-version', '23', '--target-sdk-version', '36', '-A', assets, '-o', ROOT/'unsigned.apk')
    with zipfile.ZipFile(ROOT/'unsigned.apk', 'a', zipfile.ZIP_DEFLATED) as apk:
        apk.write(dex/'classes.dex', 'classes.dex')
    run(TOOLS/'zipalign.exe', '-f', '4', ROOT/'unsigned.apk', ROOT/'aligned.apk')
    # This one-off debug key has no relation to the protected release signer.
    key = ROOT/'probe-only.keystore'
    password_file = ROOT/'probe-only-password.private.txt'
    if not key.exists():
        password_file.write_text(secrets.token_hex(24), encoding='ascii')
        env = {**os.environ, 'MESTING_PROBE_KEY_PASS': password_file.read_text()}
        run(JAVA/'keytool.exe', '-genkeypair', '-keystore', key, '-alias', 'probe',
            '-keyalg', 'RSA', '-keysize', '2048', '-validity', '30',
            '-dname', 'CN=Mesting Anonymous QR Diagnostic',
            '-storepass:env', 'MESTING_PROBE_KEY_PASS', '-keypass:env', 'MESTING_PROBE_KEY_PASS', env=env)
    env = {**os.environ, 'MESTING_PROBE_KEY_PASS': password_file.read_text()}
    run(JAVA/'java.exe', '-jar', TOOLS/'lib/apksigner.jar', 'sign', '--ks', key,
        '--ks-pass', 'env:MESTING_PROBE_KEY_PASS', '--out', ROOT/'anonymous-qr-probe.apk', ROOT/'aligned.apk', env=env)
    run(JAVA/'java.exe', '-jar', TOOLS/'lib/apksigner.jar', 'verify', ROOT/'anonymous-qr-probe.apk')
    print(json.dumps({'package': PACKAGE, 'apk': str(ROOT/'anonymous-qr-probe.apk'),
                      'scope': 'anonymous WebView create/check only; independent diagnostic key'}))


if __name__ == '__main__':
    main()
