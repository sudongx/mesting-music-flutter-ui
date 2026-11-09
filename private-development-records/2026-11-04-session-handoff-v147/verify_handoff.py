"""Snapshot and verify documentation-only handoff without changing Git or releases."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import os
import subprocess
import sys
import zipfile

ROOT = Path('D:/AnLi').resolve()
OUT = ROOT / '.codex-artifacts/2026-11-04-session-handoff-v147'
DOC = 'HANDOFF-SESSION-2026-11-04-v1.0.47-TO-NEW-CHAT.md'
BASE = ROOT / '.codex-artifacts/2026-11-03-release147'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT)


def source_paths():
    return sorted(p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0') if p and (ROOT / p).is_file())


def identity():
    return {
        'head': git('rev-parse', 'HEAD').decode().strip(),
        'branch': git('branch', '--show-current').decode().strip(),
        'staged': git('diff', '--cached', '--name-only').decode().splitlines(),
        'indexSha256': digest(ROOT / '.git/index'),
    }


def frozen_records():
    records = list(json.loads((BASE / 'preservation-before.json').read_text('utf-8'))['frozen'])
    delivery = json.loads((BASE / 'delivery-final.json').read_text('utf-8'))
    for name in ('apk', 'source'):
        item = delivery[name]
        records.append({'path': item['path'], 'bytes': item['bytes'], 'sha256': item['sha256']})
    assert len(records) == len({r['path'] for r in records}) == 86
    return records


def check_frozen(records):
    for item in records:
        path = Path(item['path'])
        assert path.is_file() and path.stat().st_size == item['bytes'], path
        assert digest(path) == item['sha256'], path


mode = sys.argv[1]
if mode == 'before':
    assert not (OUT / 'verification-before.json').exists()
    assert not (ROOT / DOC).exists(), 'Never overwrite an existing handoff.'
    state = identity()
    assert state['head'] == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
    assert state['branch'] == 'beta' and not state['staged']
    frozen = frozen_records()
    check_frozen(frozen)
    files = [{'path': p, 'bytes': (ROOT / p).stat().st_size, 'sha256': digest(ROOT / p)} for p in source_paths()]
    with zipfile.ZipFile(ROOT / 'Mesting-Music-v1.0.47-source.zip') as archive:
        manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
        assert len(manifest['files']) == 2305 and archive.testzip() is None
        for item in manifest['files']:
            assert digest(ROOT / item['path']) == item['sha256'], item['path']
    prior = json.loads((BASE / 'preservation-before.json').read_text('utf-8'))
    signing = ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
    assert digest(signing) == prior['signingKeySha256']
    assert digest(ROOT / 'pubspec.lock') == prior['pubspecLockSha256']
    (OUT / 'AGENTS-before.md').write_bytes((ROOT / 'AGENTS.md').read_bytes())
    (OUT / 'git-status-before.txt').write_bytes(git('status', '--porcelain=v1', '-uall'))
    record = {
        'verifiedAtUtc': datetime.now(timezone.utc).isoformat(), 'clientDate': '2026-11-04',
        **state, 'sourceFileCount': len(files), 'files': files, 'frozenCount': 86,
        'frozen': frozen, 'allFrozenBytesMatchRecordedDelivery': True,
        'sourceZipManifestFileCount': 2305, 'allFrozenSourceEntriesMatchBeforeHandoff': True,
        'signingKeySha256': prior['signingKeySha256'], 'pubspecLockSha256': prior['pubspecLockSha256'],
        'deviceAccess': False, 'testsRerun': False, 'apkRebuilt': False,
    }
    (OUT / 'verification-before.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    print(json.dumps({k: v for k, v in record.items() if k not in ('files', 'frozen', 'signingKeySha256')}, ensure_ascii=False, indent=2))
elif mode == 'after':
    before = json.loads((OUT / 'verification-before.json').read_text('utf-8'))
    assert identity() == {k: before[k] for k in ('head', 'branch', 'staged', 'indexSha256')}
    original = (OUT / 'AGENTS-before.md').read_bytes()
    current = (ROOT / 'AGENTS.md').read_bytes()
    assert current.endswith(original) and current != original
    assert current.startswith('**2026-11-04 本会话总移交'.encode('utf-8'))
    changed = []
    for item in before['files']:
        path = ROOT / item['path']
        assert path.is_file(), item['path']
        if digest(path) != item['sha256']:
            changed.append(item['path'])
    assert changed == ['AGENTS.md'], changed
    added = set(source_paths()) - {r['path'] for r in before['files']}
    assert added == {DOC}, sorted(added)
    check_frozen(before['frozen'])
    assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingKeySha256']
    assert digest(ROOT / 'pubspec.lock') == before['pubspecLockSha256']
    record = {
        'verifiedAtUtc': datetime.now(timezone.utc).isoformat(), 'clientDate': '2026-11-04',
        **identity(), 'originalSourceFileCount': before['sourceFileCount'],
        'changedExistingFiles': changed, 'addedPublicFiles': sorted(added),
        'oldAgentsBytesRetainedAsSuffix': True, 'allOtherSourceBytesUnchanged': True,
        'frozenCount': 86, 'allFrozenBytesUnchanged': True,
        'signingUnchanged': True, 'dependencyLockUnchanged': True,
        'handoffDocumentSha256': digest(ROOT / DOC),
        'writtenAfterSourceFreeze': True, 'oldSourceZipNotRebuilt': True,
        'testsRerun': False, 'apkRebuilt': False, 'deviceAccess': False,
        'gitMutation': False, 'uploaded': False, 'published': False,
    }
    (OUT / 'verification-after.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    print(json.dumps(record, ensure_ascii=False, indent=2))
else:
    raise ValueError(mode)
