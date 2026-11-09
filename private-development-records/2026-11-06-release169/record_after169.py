"""Independently verify protections and freeze this release's final receipts."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT)

before = json.loads((OUT / 'protected-state.json').read_text('utf-8'))
assert git('rev-parse', 'HEAD').decode().strip() == before['head']
assert git('branch', '--show-current').decode().strip() == before['branch']
assert not git('diff', '--cached', '--name-only', '-z')
assert sha(ROOT / '.git/index') == before['indexSha256']
assert sha(ROOT / 'pubspec.lock') == before['lockSha256']
assert sha(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingSha256']

def issue(row):
    path = ROOT / row['path']
    return row['path'] if (not path.is_file() or sha(path) != row['sha256'] or
                          'bytes' in row and path.stat().st_size != row['bytes']) else None

with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [value for value in pool.map(issue, before['frozenArtifacts']) if value]
assert not frozen_issues, frozen_issues
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))['files']
with ThreadPoolExecutor(max_workers=6) as pool:
    changed = [value for value in pool.map(issue, inputs) if value]
assert not changed, changed

apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.69-verification.json').read_text('utf-8'))
source = json.loads((ROOT / 'release/Mesting-Music-v1.0.69-source-verification.json').read_text('utf-8'))
assert sha(ROOT / 'release/Mesting-Music-v1.0.69.apk') == apk['sha256']
assert sha(ROOT / source['sourceZipName']) == source['sourceZipSha256']
(ROOT / 'release/Mesting-Music-v1.0.69-SHA256.txt').write_text(
    f"{apk['sha256']}  Mesting-Music-v1.0.69.apk\n"
    f"{source['sourceZipSha256']}  {source['sourceZipName']}\n", 'utf-8')

def record(relative):
    path = ROOT / relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}

frozen = before['frozenArtifacts'] + [record('release/Mesting-Music-v1.0.69.apk'),
                                      record(source['sourceZipName'])]
selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')))
current = [record(name) for name in selected if name and (ROOT / name).is_file()
           and not name.startswith('android/build/')]
assert all((ROOT / row['path']).exists() for row in before['currentFiles'])
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
after = {'version': '1.0.69', 'androidVersionCode': 90, 'releaseBuild': True,
         **{key: before[key] for key in ['head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256']},
         'indexEmpty': True, 'originalFrozenArtifactsChecked': len(before['frozenArtifacts']),
         'originalFrozenArtifactIssues': frozen_issues,
         'frozenArtifacts': frozen, 'frozenArtifactCount': len(frozen),
         'productFiles': inputs, 'productInputsChecked': len(inputs),
         'differencesFrom69BuildInputs': changed,
         'currentFiles': current, 'currentFileCount': len(current),
         'gitStatusSha256': hashlib.sha256(git('status', '--porcelain=v1', '-z')).hexdigest(),
         'hostChecks': host, 'apkSha256': apk['sha256'], 'sourceZipSha256': source['sourceZipSha256'],
         'sourceZipFiles': source['sourceFileCount'], 'sourceCrcAndAllEntriesVerified': True,
         'prior68InstalledUserReported': True, 'installed69': False,
         'lastActualHistoricalDeviceReadback': '1.0.66/code87; not a claim about the current phone',
         'phoneOrAdbOrAccountOrActualSignatureAccessThisRelease': False,
         'nasAnonymousReadyz200Config401Root404Only': True,
         'realQishuiPlaybackOrDownloadOrWritesAcceptedIn69': False,
         'prior66QrAndColdRestoreAndNeteaseAutoSourceAccepted': True,
         'collaboratorCommitsIntegratedLocally': host['collaboratorCommits'],
         'remotePullRequestMerged': False, 'gitCommitted': False, 'gitPushed': False,
         'uploaded': False, 'published': False, 'pendingCodingBuildOrInstallTasks': False,
         'receiverInstruction': 'Read current AGENTS and 69 handoff, verify only, then wait. No automatic phone/account/NAS/service/publish actions.'}
(OUT / 'after.json').write_text(json.dumps(after, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'version': after['version'], 'code': after['androidVersionCode'],
    'oldFrozenChecked': len(before['frozenArtifacts']), 'frozenNow': len(frozen),
    'productInputsChecked': len(inputs), 'currentFiles': len(current),
    'issues': frozen_issues + changed, 'indexAndLockAndOriginalSigningPreserved': True}, indent=2))
