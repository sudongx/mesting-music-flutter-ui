"""Read-only product checks around a documentation-only session handoff."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess
import sys

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
phase = sys.argv[1]
assert phase in {'before', 'after'}

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

release_dir = root / '.codex-artifacts/2026-11-05-release154'
prior = json.loads((release_dir / 'state-before.json').read_text('utf-8'))
delivery = json.loads((release_dir / 'delivery-final.json').read_text('utf-8'))
frozen = list(prior['frozen']) + [
    {'path': 'release/' + delivery['apk'], 'bytes': delivery['apkBytes'], 'sha256': delivery['apkSha256']},
    {'path': delivery['source'], 'bytes': delivery['sourceBytes'], 'sha256': delivery['sourceSha256']},
]
assert len(frozen) == len({row['path'] for row in frozen}) == 100
for row in frozen:
    path = root / row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
head = subprocess.check_output(['git', '--no-optional-locks', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
branch = subprocess.check_output(['git', '--no-optional-locks', 'branch', '--show-current'], cwd=root, text=True).strip()
index = subprocess.check_output(['git', '--no-optional-locks', 'diff', '--cached', '--name-only'], cwd=root, text=True).strip()
assert head == prior['head'] and branch == 'beta' and not index
apk = json.loads((root / 'release/Mesting-Music-v1.0.54-verification.json').read_text('utf-8'))
assert digest(root / 'pubspec.lock') == apk['pubspecLockSha256']
assert digest(Path('C:/Users/zyt/.android/debug.keystore')) == prior['signingKeySha256']
selected = subprocess.check_output(['git', '--no-optional-locks', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=root).decode('utf-8').split('\0')
files = {name: digest(root / name) for name in sorted(set(selected)) if name and (root / name).is_file()}
record = {'atUtc': datetime.now(timezone.utc).isoformat(), 'phase': phase,
    'version': '1.0.54', 'code': 75, 'head': head, 'branch': branch, 'indexEmpty': True,
    'frozenArtifactsChecked': frozen, 'frozenArtifactCount': 100,
    'signingKeyUnchanged': True, 'currentDependencyLockUnchangedSince54Delivery': True,
    'lockSha256': apk['pubspecLockSha256'], 'sourceFileHashes': files,
    'productTestsRerun': False, 'rebuilt': False, 'deviceAccess': False,
    'accountBackendAccess': False, 'gitMutationOrPublication': False}
if phase == 'before':
    assert not (out / 'verification-before.json').exists()
    (out / 'AGENTS-before.md').write_bytes((root / 'AGENTS.md').read_bytes())
else:
    before = json.loads((out / 'verification-before.json').read_text('utf-8'))
    old_files = before['sourceFileHashes']
    removed = sorted(old_files.keys() - files.keys())
    changed = sorted(name for name in old_files.keys() & files.keys() if old_files[name] != files[name])
    added = sorted(files.keys() - old_files.keys())
    assert not removed
    assert changed == ['AGENTS.md'], changed
    assert added == ['HANDOFF-SESSION-2026-11-05-v1.0.54-TO-NEW-CHAT.md'], added
    assert (root / 'AGENTS.md').read_bytes().endswith((out / 'AGENTS-before.md').read_bytes())
    record.update({'removedOriginalSourceFiles': removed, 'changedOriginalSourceFiles': changed,
        'addedSourceFiles': added, 'allOtherSourceBytesPreserved': True, 'previousAgentsBytesPreservedExactly': True})
(out / f'verification-{phase}.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({key: value for key, value in record.items() if key not in {'sourceFileHashes', 'frozenArtifactsChecked'}}, ensure_ascii=False, indent=2))
