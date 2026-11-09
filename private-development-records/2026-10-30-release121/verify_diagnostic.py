from pathlib import Path
import hashlib, json, re, subprocess, zipfile
root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-10-30-release121'
apk=out/'diagnostic-code42-signed.apk';bt=Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
def run(tool,*args): return subprocess.check_output([str(bt/tool),*map(str,args)],stderr=subprocess.STDOUT).decode('utf-8',errors='replace')
badging=run('aapt.exe','dump','badging',apk)
assert "package: name='com.mesting.music.beta' versionCode='42' versionName='1.0.21'" in badging
assert "application-label:'Mesting Music'" in badging
signature=run('apksigner.bat','verify','--verbose','--print-certs',apk)
cert=re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)',signature)[1].lower()
assert cert=='8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
assert 'Verified using v3 scheme (APK Signature Scheme v3): true' in signature
with zipfile.ZipFile(apk) as z:
 assert z.testzip() is None
 assert b'MESTING_LOCAL ' in z.read('lib/arm64-v8a/libapp.so')
 assert all(b'IntegrationTestPlugin' not in z.read(n) for n in z.namelist() if re.fullmatch(r'classes\d*\.dex',n))
 assert json.loads(z.read('assets/flutter_assets/assets/data/release-notes.json'))==json.loads((root/'assets/data/release-notes.json').read_text(encoding='utf-8'))
with apk.open('rb') as stream: sha=hashlib.file_digest(stream,'sha256').hexdigest()
r=dict(version='1.0.21',code=42,originalSignature=True,diagnosticsEnabled=True,sha256=sha,size=apk.stat().st_size,finalDelivery=False,scrollSchedulerIncluded=True,artworkSingleUserAgentTransportIncluded=True)
(out/'diagnostic-verification.json').write_text(json.dumps(r,indent=2),encoding='utf-8')
print(json.dumps(r))
