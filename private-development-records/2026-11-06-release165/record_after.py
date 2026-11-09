"""Record final byte-level preservation and build/source/install boundaries."""
import hashlib
import json
import os
import subprocess
import zipfile
from datetime import datetime, timezone
from pathlib import Path

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

b = json.loads((out / 'baseline.json').read_text('utf-8'))
inputs = json.loads((out / 'build-input-final.json').read_text('utf-8'))['files']
differences = [row['path'] for row in inputs if not (root / row['path']).is_file()
               or digest(root / row['path']) != row['sha256']]
assert not differences, differences
frozen = list(b['frozenArtifacts'])
for row in frozen:
    path = root / row['path']
    assert path.is_file() and path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
for relative in ('release/Mesting-Music-v1.0.65.apk', 'Mesting-Music-v1.0.65-source.zip'):
    path = root / relative
    frozen.append({'path': relative, 'bytes': path.stat().st_size, 'sha256': digest(path)})
assert len(frozen) == 70
apk = json.loads((root / 'release/Mesting-Music-v1.0.65-verification.json').read_text('utf-8'))
source = json.loads((root / 'release/Mesting-Music-v1.0.65-source-verification.json').read_text('utf-8'))
with zipfile.ZipFile(root / source['sourceZipName']) as archive:
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert archive.testzip() is None
    for row in snapshot['files']:
        assert digest(root / row['path']) == row['sha256'], row['path']
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root).decode().strip()
branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=root).decode().strip()
index_hash = digest(root / '.git/index')
assert head == b['head'] and branch == b['branch']
assert index_hash == b['indexSha256']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root).strip()
assert digest(root / 'pubspec.lock') == b['lockSha256']
assert digest(root / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == b['signingSha256']
status = subprocess.check_output(['git', '--no-optional-locks', 'status', '--porcelain=v1', '-z'], cwd=root)
(out / 'git-status-after.nul').write_bytes(status)
installed = json.loads((out / 'device-after-install.json').read_text('utf-8'))
after = {
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'version': '1.0.65', 'androidVersionCode': 86,
    'head': head, 'branch': branch, 'indexSha256': index_hash, 'indexEmpty': True,
    'lockSha256': b['lockSha256'], 'signingSha256': b['signingSha256'],
    'frozenArtifacts': frozen, 'priorFrozenArtifactsChecked': 68, 'frozenArtifactIssues': [],
    'productFiles': inputs, 'differencesFrom65BuildInputs': differences,
    'sourceFiles': snapshot['files'], 'sourceZip65Verified': True,
    'source63ZipExists': (root / 'Mesting-Music-v1.0.63-source.zip').exists(),
    'handoffSha256': digest(root / 'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.65.md'),
    'agentInstructionsSha256': digest(root / 'AGENTS.md'),
    'deviceAccessed': True, 'installed65WithDataRetained': True,
    'lastHistoricalDeviceReadVersion': '1.0.65/code86', 'installReceipt': 'device-after-install.json',
    'officialDeviceApkReadOnly': '19.0.0/code100190050 public APK',
    'agentSmsTriggered': False, 'accountPrivateFilesRead': False,
    'prior64OrdinaryPlaybackUserAccepted': True,
    'sms2156Resolved': False, 'qrImplemented': True, 'qrGeneratedOn65Device': None,
    'realQrAccountAccepted': False, 'newPreviewPhysicalPlaybackAccepted': False,
    'oldLogsReplayed': False, 'gitCommitted': False, 'gitPushed': False, 'published': False,
    'gitStatusSha256': hashlib.sha256(status).hexdigest(),
    'status': 'Candidate installed. Await user SMS/QR and new preview playback acceptance; do not backfill frozen deliveries.',
}
(out / 'after.json').write_text(json.dumps(after, ensure_ascii=False, indent=2)+'\n', 'utf-8')
(root / 'release/Mesting-Music-v1.0.65-SHA256.txt').write_text(
    f"{apk['sha256']}  {apk['file']}\n{source['sourceZipSha256']}  {source['sourceZipName']}\n", 'utf-8')
summary = {
    'version': '1.0.65', 'code': 86,
    'apk': {'bytes': apk['fileSize'], 'sha256': apk['sha256']},
    'source': {'bytes': source['sourceZipSize'], 'sha256': source['sourceZipSha256'], 'files': source['sourceFileCount']},
    'protectedOriginal68': True, 'protectedNow': 70, 'buildInputsUnchanged': len(inputs),
    'indexUnchangedAndEmpty': True, 'installedVersion': installed['version'],
    'smsAcceptancePending': True, 'published': False,
}
(out / 'final-summary.json').write_text(json.dumps(summary, indent=2)+'\n', 'utf-8')
print(json.dumps(summary, indent=2))
