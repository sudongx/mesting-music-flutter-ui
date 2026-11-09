"""Read-only validation of prior frozen artifacts and retained local identity."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'
before = json.loads((out / 'preservation-before.json').read_text('utf-8'))


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


assert len(before['frozen']) == 82
for file in before['frozen']:
    path = Path(file['path'])
    assert path.is_file() and path.stat().st_size == file['bytes'], path.name
    assert digest(path) == file['sha256'], path.name
assert digest(root / 'pubspec.lock') == before['pubspecLockSha256']
assert digest(root / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingKeySha256']
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=root, text=True).strip()
staged = subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root, text=True).strip()
assert head == before['head'] and branch == before['branch'] and not staged
record = {'verifiedAt': datetime.now(timezone.utc).isoformat(),
          'oldFrozenArtifactCount': len(before['frozen']),
          'allPreviousArtifactBytesUnchanged': True,
          'originalSigningMaterialUnchanged': True, 'dependencyLockUnchanged': True,
          'branch': branch, 'head': head, 'staged': [],
          'resetCleanStashOrCommitPerformed': False, 'deviceAccess': False}
(out / 'preservation-final.json').write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
print(json.dumps(record, indent=2))
