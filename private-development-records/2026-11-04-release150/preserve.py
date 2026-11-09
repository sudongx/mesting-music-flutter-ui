"""Protect the existing dirty checkout, frozen deliveries and signing identity."""
import hashlib
import json
import os
from pathlib import Path
import subprocess
from datetime import datetime, timezone

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-release150'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT)


before_path = OUT / 'preservation-before.json'
reference = json.loads((before_path if before_path.exists() else ROOT /
    '.codex-artifacts/2026-11-04-session-handoff149/verification-before.json').read_text('utf-8-sig'))
if isinstance(reference['frozen'], dict):
    reference['frozen'] = [{'path': path, 'bytes': Path(path).stat().st_size, 'sha256': sha}
                           for path, sha in reference['frozen'].items()]
for item in reference['frozen']:
    path = Path(item['path'])
    assert path.stat().st_size == item['bytes'] and digest(path) == item['sha256'], path.name
assert digest(ROOT / 'pubspec.lock') == reference['pubspecLockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == reference['signingKeySha256']
head = git('rev-parse', 'HEAD').decode().strip()
branch = git('branch', '--show-current').decode().strip()
assert head == reference['head'] and branch == reference['branch']
assert not git('diff', '--cached', '--name-only').strip()
index = ROOT / git('rev-parse', '--git-path', 'index').decode().strip()
assert digest(index) == reference['indexSha256']
if not before_path.exists():
    files = []
    for relative in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0'):
        if relative and (ROOT / relative).is_file():
            path = ROOT / relative
            files.append({'path': relative, 'bytes': path.stat().st_size, 'sha256': digest(path)})
    reference.update(files=files, sourceFileCount=len(files))
    before_path.write_text(json.dumps(reference, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    (OUT / 'git-status-before.txt').write_bytes(git('-c', 'core.quotepath=false', 'status', '--porcelain=v1', '--untracked-files=all'))
    print(f'Protected {len(files)} existing source/doc files and {len(reference["frozen"])} frozen artifacts.')
else:
    changed = [item['path'] for item in reference['files'] if not (ROOT/item['path']).is_file() or digest(ROOT/item['path']) != item['sha256']]
    result = {'verifiedAtUtc': datetime.now(timezone.utc).isoformat(), 'oldFrozenCount': len(reference['frozen']),
              'allOldFrozenBytesUnchanged': True, 'signingAndLockUnchanged': True,
              'head': head, 'branch': branch, 'indexUnchanged': True, 'staged': [],
              'changedExistingFiles': changed, 'deviceAccess': False, 'uploaded': False, 'published': False}
    (OUT/'preservation-final.json').write_text(json.dumps(result, ensure_ascii=False, indent=2)+'\n', 'utf-8')
    print(json.dumps({**result, 'changedExistingFiles': len(changed)}, ensure_ascii=False))
