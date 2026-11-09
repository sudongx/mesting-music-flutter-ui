"""Replace rejected76/candidate2 with fixed76/candidate3, verifying actual APK bytes."""
from pathlib import Path
import hashlib
import json
import re
import subprocess

OUT = Path(__file__).resolve().parent
ADB = 'D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
SERIAL = json.loads((OUT/'device-baseline75.json').read_text('utf8'))['serial']
APK = OUT/'candidate3/Mesting-Music-v1.0.76.apk'
verification = json.loads(APK.with_name('Mesting-Music-v1.0.76-verification.json').read_text('utf8'))
assert hashlib.sha256(APK.read_bytes()).hexdigest()==verification['sha256']
assert verification['originalSignature'] and verification['buildInputsUnchangedThroughVerification']

def run(*args, timeout=30):
    value = subprocess.run([ADB,'-s',SERIAL,*args],capture_output=True,timeout=timeout)
    assert value.returncode==0,'ADB step failed: '+' '.join(args[:3])
    return value.stdout.decode('utf8',errors='replace')

def info():
    raw = run('shell','dumpsys','package','com.mesting.music')
    path = run('shell','pm','path','com.mesting.music').strip()
    assert path.startswith('package:') and '\n' not in path
    path = path[len('package:'):]
    assert re.fullmatch(r'/data/app/[A-Za-z0-9_./~+=-]+/base\.apk',path)
    assert '/com.mesting.music-' in path
    # Installed APK is public executable material, never a private account file.
    sha = run('shell','sha256sum',path).split()[0]
    return {'code':int(re.search(r'versionCode=(\d+)',raw)[1]),
        'name':re.search(r'versionName=(\S+)',raw)[1],
        'firstInstallTime':re.search(r'firstInstallTime=([^\r\n]+)',raw)[1],
        'lastUpdateTime':re.search(r'lastUpdateTime=([^\r\n]+)',raw)[1],
        'installedApkSha256':sha}

receipt = OUT/'device/upgrade176-candidate3.json'
assert not receipt.exists()
before = info()
prior = json.loads((OUT/'candidate2/Mesting-Music-v1.0.76-verification.json').read_text('utf8'))
assert before['code']==97 and before['name']=='1.0.76'
assert before['installedApkSha256']==prior['sha256']
print({'replaceRejectedCandidate':2,'installCandidate':3,'dataRetained':True},flush=True)
assert 'Success' in run('install','-r',str(APK),timeout=120)
after = info()
assert after['code']==97 and after['name']=='1.0.76'
assert after['firstInstallTime']==before['firstInstallTime']
assert after['installedApkSha256']==verification['sha256']
assert after['installedApkSha256']!=before['installedApkSha256']
receipt.write_text(json.dumps({'before':before,'after':after,'candidate':3,
    'retainedDataUpgrade':True,'firstInstallTimePreserved':True,
    'actualInstalledApkBytesMatchCandidate':True,'uninstalled':False,'clearedData':False,
    'performanceAccepted':False},indent=2)+'\n','utf8')
print({'installedCandidate':3,'actualInstalledApkHashMatches':True,
    'firstInstallTimePreserved':True,'dataCleared':False},flush=True)
