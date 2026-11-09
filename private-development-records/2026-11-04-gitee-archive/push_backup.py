"""Push exactly the approved private-source refs, with no mirror or deletion."""
from datetime import datetime, timezone
from pathlib import Path
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-gitee-archive'
BARE = OUT / 'repository.git'
URL = 'https://gitee.com/Mesting42/mesting-music-flutter.git'
ENV = dict(os.environ, GIT_OPTIONAL_LOCKS='0', GIT_TERMINAL_PROMPT='0', GCM_INTERACTIVE='never')
plan = json.loads((OUT / 'prepared-backup.json').read_text('utf-8'))
assert plan['private'] and plan['versionCount'] == 71
expected = plan['refsToPush']
assert len(expected) == 72 and set(expected) == {'refs/heads/main'} | {
    'refs/tags/' + row['tag'] for row in plan['versions']}
assert not any(v in name for name in expected for v in ['historical-stable', 'java-mysql', 'private', 'candidate'])
base = ['git', '--git-dir=' + str(BARE), '-c', 'credential.username=Mesting42']


def refs():
    """Read server state before every mutation; refuse unexpected destinations."""
    result = subprocess.run(base + ['ls-remote', '--refs', URL], env=ENV, capture_output=True, check=True)
    return {line.split()[1]: line.split()[0] for line in result.stdout.decode().splitlines()}


before = refs()
assert set(before).issubset(expected), 'Unexpected remote refs: never overwrite or delete them'
assert all(expected[name] == value for name, value in before.items()), 'Existing remote content differs'
specs = [name + ':' + name for name in expected]
dry = subprocess.run(base + ['push', '--dry-run', '--atomic', '--porcelain', URL, *specs],
                     env=ENV, capture_output=True)
(OUT / 'push-dry-run.txt').write_bytes(dry.stdout + dry.stderr)
assert dry.returncode == 0, 'Dry run rejected; retained report needs inspection'
print('Atomic dry run accepted for one branch and 71 selected tags.', flush=True)
result = subprocess.run(base + ['push', '--atomic', '--porcelain', URL, *specs], env=ENV,
                        capture_output=True)
(OUT / 'push-receipt.txt').write_bytes(result.stdout + result.stderr)
after = refs()
assert result.returncode == 0 and after == expected, 'Retained push receipt/remote refs need inspection'
record = {'completedAtUtc': datetime.now(timezone.utc).isoformat(), 'destination': URL,
          'expectedPrivateRepository': True, 'branchCount': 1, 'tagCount': 71,
          'remoteRefs': after, 'atomic': True, 'force': False, 'deletions': False,
          'githubWritten': False, 'primaryWorktreeChanged': False}
(OUT / 'push-final.json').write_text(json.dumps(record, indent=2) + '\n', 'utf-8')
print(json.dumps({k: v for k, v in record.items() if k != 'remoteRefs'}, indent=2), flush=True)
