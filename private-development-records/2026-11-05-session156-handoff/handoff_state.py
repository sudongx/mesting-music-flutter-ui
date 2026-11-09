"""Read-only inventories around a documentation-only session transfer."""
from pathlib import Path
import datetime
import hashlib
import json
import os
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
VERSION = ROOT / '.codex-artifacts/2026-11-05-storage156-investigation'
DOC = 'HANDOFF-SESSION-2026-11-05-v1.0.56-TO-NEW-CHAT.md'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT)

def snapshot():
    state = json.loads((VERSION / 'state-before.json').read_text('utf-8'))
    apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.56-verification.json').read_text('utf-8'))
    source = json.loads((ROOT / 'release/Mesting-Music-v1.0.56-source-verification.json').read_text('utf-8'))
    frozen = [*state['frozenArtifacts'],
        {'path': 'release/Mesting-Music-v1.0.56.apk', 'bytes': apk['fileSize'], 'sha256': apk['sha256']},
        {'path': source['sourceZipName'], 'bytes': source['sourceZipSize'], 'sha256': source['sourceZipSha256']}]
    for row in frozen:
        path = ROOT / row['path']
        assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
    selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')) - {''})
    files = [{'path': name, 'bytes': (ROOT / name).stat().st_size, 'sha256': digest(ROOT / name)}
             for name in selected if (ROOT / name).is_file()]
    status = git('status', '--porcelain=v1', '-z').decode('utf-8').split('\0')
    branch = git('branch', '--show-current').decode().strip()
    head = git('rev-parse', 'HEAD').decode().strip()
    assert branch == state['branch'] and head == state['head']
    assert not git('diff', '--cached', '--name-only').strip()
    assert digest(ROOT / 'pubspec.lock') == state['lockSha256']
    assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == state['signingSha256']
    return {'at': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'branch': branch, 'head': head,
        'indexEmpty': True, 'trackedChanged': sum(bool(x) and not x.startswith('?? ') for x in status),
        'untracked': sum(x.startswith('?? ') for x in status), 'files': files,
        'frozenArtifacts': frozen, 'frozenArtifactsCount': len(frozen),
        'lockSha256': state['lockSha256'], 'signingSha256': state['signingSha256'],
        'phoneAccessDuringHandoff': False, 'testsRunDuringHandoff': False,
        'buildDuringHandoff': False, 'gitMutationDuringHandoff': False, 'published': False}

stage = sys.argv[1]
current = snapshot()
if stage == 'before':
    assert not (OUT / 'before.json').exists()
    (OUT / 'AGENTS-before.bin').write_bytes((ROOT / 'AGENTS.md').read_bytes())
elif stage == 'after':
    before = json.loads((OUT / 'before.json').read_text('utf-8'))
    prior = {x['path']: x['sha256'] for x in before['files']}
    now = {x['path']: x['sha256'] for x in current['files']}
    changed = sorted(name for name, sha in prior.items() if now.get(name) != sha)
    added = sorted(set(now) - set(prior))
    assert changed == ['AGENTS.md'], changed
    assert added == [DOC], added
    old_agents = (OUT / 'AGENTS-before.bin').read_bytes()
    assert (ROOT / 'AGENTS.md').read_bytes().endswith(old_agents)
    current.update({'changedExistingPaths': changed, 'addedPaths': added,
        'previousAgentsBytesRetained': True, 'allOtherWorkspaceFilesUnchanged': True,
        'all104FrozenArtifactsUnchanged': True, 'handoffSha256': digest(ROOT / DOC)})
else:
    raise ValueError('Unknown stage')
(OUT / (stage + '.json')).write_text(json.dumps(current, ensure_ascii=False, indent=2), 'utf-8')
print(json.dumps({k: v for k, v in current.items() if k not in ['files', 'frozenArtifacts']}, ensure_ascii=True))
