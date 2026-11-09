"""Use the retained original key; never expose its password in output/argv."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-29-release113'
retained = root / '.codex-artifacts/2026-10-26-beta17-signing'
tools = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
source = root / 'build/app/outputs/flutter-apk/app-beta-release.apk'
signed = out / 'app-beta-release-signed.apk'
assert not signed.exists(), 'Do not replace an existing signed candidate'
instructions = (retained / '使用说明.txt').read_text(encoding='utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert passwords and len(set(passwords)) == 1, 'Signing instructions need manual private review'
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert aliases and len(set(aliases)) == 1, 'Signing alias needs private review'
env = os.environ.copy()
env['MESTING113_KEYSTORE_PASSWORD'] = passwords[0]
subprocess.run([str(tools / 'zipalign.exe'), '-c', '-P', '16', '4', str(source)], check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
subprocess.run([
    str(tools / 'apksigner.bat'), 'sign', '--ks', str(retained / 'debug.keystore'),
    '--ks-key-alias', aliases[0], '--ks-pass', 'env:MESTING113_KEYSTORE_PASSWORD',
    '--key-pass', 'env:MESTING113_KEYSTORE_PASSWORD', '--v1-signing-enabled', 'false',
    '--v2-signing-enabled', 'true', '--v3-signing-enabled', 'true',
    '--v4-signing-enabled', 'false', '--out', str(signed), str(source),
], env=env, check=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
with source.open('rb') as stream:
    source_hash = hashlib.file_digest(stream, 'sha256').hexdigest()
(out / 'signing-input.json').write_text(json.dumps({'inputApkSha256': source_hash, 'originalKey': True, 'v2AndV3Requested': True}, indent=2), encoding='utf-8')
print(json.dumps({'originalKeyUsed': True, 'v2AndV3Requested': True, 'signedCandidateCreated': signed.exists()}))
