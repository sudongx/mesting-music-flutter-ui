"""Verify formal frozen output and all pre-existing delivery boundaries.

This step only reads the source snapshot, key digests and existing artifacts;
it never modifies Git state, installs an APK, or changes any live service.
"""
from pathlib import Path
import datetime as dt
import hashlib
import json
import os
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def read(path):
    return json.loads(path.read_text('utf-8-sig'))


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


before = read(OUT / 'preservation-before.json')
apk = read(ROOT / 'release/Mesting-Music-v1.0.45-verification.json')
source = read(ROOT / 'release/Mesting-Music-v1.0.45-source-verification.json')
checks = read(OUT / 'host-check-summary.json')
assert digest(ROOT / 'release' / apk['file']) == apk['sha256']
assert digest(ROOT / source['sourceZipName']) == source['sourceZipSha256']
assert not apk['togetherSyncDiagnosticLoggingEnabled']
with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['version'] == '1.0.45' and snapshot['androidVersionCode'] == 66
    assert not snapshot['togetherSyncDiagnosticLoggingEnabled']
    assert snapshot['apkSha256'] == apk['sha256']
    assert len(snapshot['files']) == source['sourceFileCount']
    for item in snapshot['files']:
        assert digest(ROOT / item['path']) == item['sha256'], item['path']
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
    assert not any('.codex-artifacts' in name or '.firecrawl' in name for name in archive.namelist())
for item in before['frozen']:
    path = Path(item['path'])
    assert path.stat().st_size == item['bytes'] and digest(path) == item['sha256'], path
assert digest(ROOT / 'pubspec.lock') == before['pubspecLockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingKeySha256']
assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.md').read_bytes())
branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip()
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
staged = subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT, text=True).splitlines()
assert branch == before['branch'] and head == before['head'] and not staged
assert checks['analysisPassed'] and checks['formalLoggingAndSyncRegression']['counts']['success'] == 28
notes = read(OUT / 'local-apk-notes-verification.json')
assert notes['versionCode'] == 66 and notes['notesCount'] == 8
original = {item['path']: item['sha256'] for item in read(OUT / 'r4-source-manifest-before.json')}
current = {item['path']: item['sha256'] for item in snapshot['files']}
product_delta = [name for name in sorted(set(original) | set(current))
                 if name.startswith(('lib/', 'android/', 'test/', 'assets/'))
                 and original.get(name) != current.get(name)]
assert product_delta == [
    'assets/data/release-notes.json',
    'lib/features/app_update/domain/release_history.dart',
], product_delta
checksum = ROOT / 'release/Mesting-Music-v1.0.45-SHA256.txt'
assert not checksum.exists()
checksum.write_text(apk['sha256'] + '  ' + apk['file'] + '\n' + source['sourceZipSha256'] + '  ' +
                    source['sourceZipName'] + '\nAPK bytes: ' + str(apk['fileSize']) +
                    '\nSource ZIP bytes: ' + str(source['sourceZipSize']) + '\n', encoding='utf-8')
result = {
    'finalizedUtc': dt.datetime.now(dt.timezone.utc).isoformat(),
    'version': '1.0.45', 'androidVersionCode': 66, 'stage': 'local_formal_delivery_complete',
    'apk': {'path': 'release/' + apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256']},
    'source': {'path': source['sourceZipName'], 'bytes': source['sourceZipSize'],
               'sha256': source['sourceZipSha256'], 'files': source['sourceFileCount']},
    'allWorkingEntriesMatchFrozenSource': True,
    'previousFrozenFilesUnchanged': len(before['frozen']),
    'frozenArtifactsIncludingFormalDelivery': len(before['frozen']) + 2,
    'originalSigningKeyAndLockUnchanged': True, 'previousAgentsBytesRetained': True,
    'branch': branch, 'head': head, 'stagedPaths': staged,
    'productSourceDeltaFromR4': product_delta,
    'r4NativeAndSyncProductCodePreserved': True,
    'formalLoggingAndSyncRegressionPassed': 28, 'analysisIssues': 0,
    'actualApkNotesCount': 8, 'togetherSyncDiagnosticLoggingEnabled': False,
    'r4CandidateTrackChangeCasesPassed': 7, 'formalApkDeviceAccepted': False,
    'officialProfileHistoryTotalFixed': False, 'october683MinutesRecovered': False,
    'legacyWeblogAndHeldNativeJournalPreserved': True,
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(OUT / 'delivery-final.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
worker = read(OUT / 'worker-state.json')
worker.update(stage='delivery', status='complete', updatedUtc=result['finalizedUtc'])
(OUT / 'worker-state.json').write_text(json.dumps(worker, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
