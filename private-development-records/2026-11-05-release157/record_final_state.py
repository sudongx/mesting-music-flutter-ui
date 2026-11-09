"""Record final delivery and retained dirty-tree identity without Git writes."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', *args], cwd=ROOT).decode('utf-8')


before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.57-verification.json').read_text('utf-8'))
source = json.loads((ROOT / 'release/Mesting-Music-v1.0.57-source-verification.json').read_text('utf-8'))
assert git('branch', '--show-current').strip() == before['branch']
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only').strip()
assert digest(ROOT / 'pubspec.lock') == before['lockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingSha256']
new_artifacts = []
for path, expected in [
    ('release/Mesting-Music-v1.0.57.apk', apk['sha256']),
    ('Mesting-Music-v1.0.57-source.zip', source['sourceZipSha256']),
]:
    actual = digest(ROOT / path)
    assert actual == expected
    new_artifacts.append({'path': path, 'bytes': (ROOT / path).stat().st_size, 'sha256': actual})
(ROOT / 'release/Mesting-Music-v1.0.57-SHA256.txt').write_text(
    '\n'.join(f"{row['sha256']}  {Path(row['path']).name}" for row in new_artifacts) + '\n', 'utf-8')
selected = git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
files = []
for relative in sorted(set(selected)):
    path = ROOT / relative
    if relative and path.is_file() and not relative.startswith('android/build/'):
        files.append({'path': relative, 'bytes': path.stat().st_size, 'sha256': digest(path)})
known = {row['path']: row for row in files}
changed = []
for row in before['source']:
    assert row['path'] in known, row['path']
    if known[row['path']]['sha256'] != row['sha256']:
        changed.append(row['path'])
assert len(changed) == 23, changed
assert all(not p.startswith(('android/', 'third_party/')) for p in changed)
record = {
    'version': '1.0.57', 'androidVersionCode': 78,
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'branch': before['branch'], 'head': before['head'], 'indexEmpty': True,
    'files': files, 'frozenArtifacts': before['frozenArtifacts'] + new_artifacts,
    'old104RehashedDuringFinalApkDocumentationCheck': True,
    'lockSha256': before['lockSha256'], 'signingSha256': before['signingSha256'],
    'changedPreexistingSourcePaths': changed,
    'newSourcePaths': sorted(set(known) - {row['path'] for row in before['source']}),
    'sourceZipFiles': source['sourceFileCount'], 'sourceZipEntries': source['frozenEntryCount'],
    'sourceZipFilesVerifiedAgainstWorkspaceBeforeFreeze': True,
    'deviceAccess': False, 'adbUsed': False, 'realAccountAccess': False,
    'backendAccess': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
(OUT / 'after.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'version': record['version'], 'code': 78, 'sourceFiles': source['sourceFileCount'],
    'protectedAndNewArtifacts': len(record['frozenArtifacts']), 'indexEmpty': True,
    'originalBranchAndHeadRetained': True, 'newArtifactsVerified': new_artifacts}, indent=2))
