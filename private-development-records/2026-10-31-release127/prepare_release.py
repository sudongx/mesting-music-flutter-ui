"""Check local release inputs without exposing retained signing credentials."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release127'
CERT = '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

notes = json.loads((ROOT / 'assets/data/release-notes.json').read_text(encoding='utf-8'))
assert notes['version'] == '1.0.27' and notes['versionCode'] == 48
history = (ROOT / 'lib/features/app_update/domain/release_history.dart').read_text(encoding='utf-8')
current = history.split("'1.0.27': [", 1)[1].split('],', 1)[0]
assert re.findall(r"'([^']+)'", current) == notes['releaseNotes']
assert len(notes['releaseNotes']) == 3
assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
engine_dir = ROOT / 'third_party/flutter_engine/android-release'
engine = json.loads((engine_dir / 'engine-manifest.json').read_text(encoding='utf-8'))
for item in engine['files']:
    assert digest(engine_dir / item['jar']) == item['jarSha256']
assert digest(engine_dir / 'assets/LICENSE.flutter-engine.txt') == engine['licensesSha256']

# Parse the existing private instructions; no password is printed or put in argv.
retained = ROOT / '.codex-artifacts/2026-10-26-beta17-signing'
instructions = (retained / '使用说明.txt').read_text(encoding='utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert passwords and len(set(passwords)) == 1
assert aliases and len(set(aliases)) == 1
env = os.environ.copy()
env['MESTING125_KEYSTORE_PASSWORD'] = passwords[0]
keytool = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1/bin/keytool.exe')
certificate = subprocess.check_output([
    str(keytool), '-J-Duser.language=en', '-list', '-v', '-keystore', str(retained / 'debug.keystore'),
    '-alias', aliases[0], '-storepass:env', 'MESTING125_KEYSTORE_PASSWORD',
], env=env, stderr=subprocess.STDOUT).decode('utf-8', errors='replace')
match = re.search(r'SHA256:\s*([0-9A-Fa-f:]+)', certificate)
assert match and match[1].replace(':', '').lower() == CERT

# Old frozen files and the private key must remain byte-for-byte unchanged.
protected = list((ROOT / 'release').glob('*.apk')) + list(ROOT.glob('*-source.zip'))
protected += [retained / 'debug.keystore', retained / 'Mesting-Music-Beta17-signing.zip']
record = {path.relative_to(ROOT).as_posix(): {'size': path.stat().st_size, 'sha256': digest(path)} for path in protected}
target = OUT / 'frozen-before.json'
assert not target.exists(), 'Preserve the first before-build evidence'
target.write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'version': '1.0.27', 'versionCode': 48, 'notesAndHistoryMatch': True,
                  'retainedCertificateVerified': True, 'pinnedEngineVerified': True,
                  'protectedFrozenFiles': len(record)}, ensure_ascii=False))
