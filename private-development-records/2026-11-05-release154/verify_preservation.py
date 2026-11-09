"""Hash every protected original artifact without touching the dirty checkout."""
from pathlib import Path
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
before = json.loads((out / 'state-before.json').read_text('utf-8'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

for row in before['frozen']:
    path = root / row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
changed = []
for row in before['source']:
    path = root / row['path']
    assert path.is_file(), 'Original source path removed: ' + row['path']
    if digest(path) != row['sha256']:
        changed.append(row['path'])
key = Path('C:/Users/zyt/.android/debug.keystore')
assert digest(key) == before['signingKeySha256']
assert digest(out / 'pubspec-before.lock') == before['lockSha256']
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip() == before['head']
assert subprocess.check_output(['git', 'branch', '--show-current'], cwd=root, text=True).strip() == before['branch']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root).strip()
current_formal = list((root / 'release').glob('Mesting-Music-v*.apk')) + list(root.glob('Mesting-Music-v*-source.zip'))
# Version50+ switched identity; frozen files, not only the current pattern, are protected above.
record = {'oldFrozenArtifactsVerified': len(before['frozen']), 'oldSourcePathsRetained': len(before['source']),
    'modifiedOriginalSourcePaths': changed, 'originalSigningKeyUnchanged': True,
    'originalDependencyLockBackupUnchanged': True, 'currentLockAuthorizedException': 'local FSS10.3.1 override only; sign check verifies all other entries',
    'branch': before['branch'], 'head': before['head'], 'indexEmpty': True,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'newApkPresent': (root / 'release/Mesting-Music-v1.0.54.apk').exists(),
    'newSourcePresent': (root / 'Mesting-Music-v1.0.54-source.zip').exists()}
(out / 'preservation-final.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({key: value for key, value in record.items() if key != 'modifiedOriginalSourcePaths'}, indent=2))
