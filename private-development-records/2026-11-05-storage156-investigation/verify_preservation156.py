"""Verify preexisting frozen releases and final build inputs without Git edits."""
from pathlib import Path
import datetime
import hashlib
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

for row in before['frozenArtifacts']:
    path = ROOT / row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
inputs = json.loads((OUT / 'build-input156-final.json').read_text('utf-8'))
for row in inputs['files']:
    assert digest(ROOT / row['path']) == row['sha256'], row['path']
assert digest(ROOT / 'pubspec.lock') == before['lockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingSha256']
branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip()
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
assert branch == before['branch'] and head == before['head']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT).strip()
expected = {
    'pubspec.yaml', 'tool/build_android_release_apk.ps1', 'tool/build_android_md3_beta_apk.ps1',
    'assets/data/release-notes.json', 'lib/features/app_update/domain/release_history.dart',
    'lib/core/security/retained_credential_vault.dart',
    'lib/features/music_platform/music_platform_providers.dart',
    'third_party/flutter_secure_storage/package/android/src/main/java/com/it_nomads/fluttersecurestorage/FlutterSecureStorage.java',
    'third_party/flutter_secure_storage/package/android/src/main/java/com/it_nomads/fluttersecurestorage/FlutterSecureStoragePlugin.java',
    'AGENTS.md', 'CHANGELOG.md',
}
changed = []
for row in before['source']:
    path = ROOT / row['path']
    assert path.is_file(), row['path']
    if digest(path) != row['sha256']:
        changed.append(row['path'])
assert set(changed) <= expected, sorted(set(changed) - expected)
record = {
    'at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'oldFrozenArtifacts': len(before['frozenArtifacts']), 'oldFrozenArtifactBytesUnchanged': True,
    'buildInputs': len(inputs['files']), 'allFinalBuildInputsUnchanged': True,
    'preexistingSourcePathsPreserved': len(before['source']),
    'intentionalModifiedExistingSourcePaths': changed,
    'originalSigningUnchanged': True, 'pubspecLockUnchanged': True,
    'branch': branch, 'head': head, 'indexEmpty': True,
    'gitMutation': False, 'uploaded': False, 'published': False,
}
(OUT / 'final-preservation.json').write_text(json.dumps(record, indent=2), 'utf-8')
print(json.dumps(record))
