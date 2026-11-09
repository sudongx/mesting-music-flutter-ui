"""Read back the frozen pair, preserve every prior artifact, and report facts."""
from pathlib import Path
import hashlib
import json
import os
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
load = lambda path: json.loads(path.read_text('utf-8-sig'))
def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

before = load(OUT / 'state-before.json')
apk = load(ROOT / 'release/Mesting-Music-v1.0.55-verification.json')
source = load(ROOT / 'release/Mesting-Music-v1.0.55-source-verification.json')
old_artifacts = before['frozenArtifacts']
assert len(old_artifacts) == 100
for row in old_artifacts:
    path = ROOT / row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
new_pair = [
    {'path':'release/Mesting-Music-v1.0.55.apk', 'bytes':apk['fileSize'], 'sha256':apk['sha256']},
    {'path':'Mesting-Music-v1.0.55-source.zip', 'bytes':source['sourceZipSize'], 'sha256':source['sourceZipSha256']},
]
for row in new_pair:
    path = ROOT / row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256']
assert digest(ROOT / 'pubspec.lock') == before['lockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingSha256']
removed = [r['path'] for r in before['source'] if not (ROOT / r['path']).is_file()]
assert not removed
changed = [r['path'] for r in before['source'] if digest(ROOT / r['path']) != r['sha256']]
expected_changes = {
    'AGENTS.md', 'CHANGELOG.md', 'pubspec.yaml', 'assets/data/release-notes.json',
    'lib/core/network/system_music_io_client.dart', 'lib/core/network/music_http_client.dart',
    'lib/core/network/music_network_diagnostics.dart', 'lib/core/security/credential_failure.dart',
    'lib/features/auth/presentation/beta_entry_coordinator.dart',
    'lib/features/app_update/domain/release_history.dart',
    'lib/features/music_platform/data/kugou_official_api.dart',
    'lib/features/music_platform/presentation/kugou_standard_authorization_page.dart',
    'lib/features/music_platform/presentation/platform_login_options_page.dart',
    'lib/features/settings/presentation/music_network_diagnostics_page.dart',
    'lib/shared/widgets/artwork_image.dart', 'lib/shared/widgets/retained_artwork_frame.dart',
    'tool/build_android_release_apk.ps1', 'tool/build_android_md3_beta_apk.ps1',
}
assert set(changed) == expected_changes, sorted(set(changed) ^ expected_changes)
with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    for row in snapshot['files']:
        assert digest(ROOT / row['path']) == row['sha256'], row['path']
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256']
    assert len(snapshot['files']) == source['sourceFileCount'] == 2575
    assert len(archive.namelist()) == source['frozenEntryCount'] == 2577
with zipfile.ZipFile(OUT / 'source-before.zip') as previous:
    assert (ROOT / 'AGENTS.md').read_bytes().endswith(previous.read('AGENTS.md'))
branch = subprocess.check_output(['git','--no-optional-locks','branch','--show-current'],cwd=ROOT,text=True).strip()
head = subprocess.check_output(['git','--no-optional-locks','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
index_empty = not subprocess.check_output(['git','--no-optional-locks','diff','--cached','--name-only'],cwd=ROOT).strip()
assert branch == before['branch'] == 'beta' and head == before['head'] and index_empty
record = {
    'version':'1.0.55', 'code':76, 'branch':branch, 'head':head, 'indexEmpty':index_empty,
    'oldFrozenArtifactsVerified':100, 'allFormalArtifacts':old_artifacts + new_pair,
    'formalArtifactCount':102, 'originalSourcePathsRetained':len(before['source']),
    'modifiedOriginalSourcePaths':sorted(changed), 'allOtherOriginalSourceBytesUnchanged':True,
    'previousAgentsBytesPreservedExactly':True, 'originalSigningKeyUnchanged':True,
    'pubspecLockUnchangedFrom54':True, 'pubspecLockSha256':before['lockSha256'],
    'completeSourceFilesFrozen':2575, 'frozenEntries':2577,
    'newFrozenSourceMatchesCurrentWorkingSource':True,
    'deviceAccess':False, 'realAccountAccess':False, 'backendAccess':False,
    'gitCommitted':False, 'gitPushed':False, 'uploaded':False, 'published':False,
}
(OUT / 'preservation-final.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
checksum = '# SHA256; paths are relative to D:/AnLi\n' + ''.join(f"{r['sha256']}  {r['path']}\n" for r in new_pair)
(ROOT / 'release/Mesting-Music-v1.0.55-SHA256.txt').write_text(checksum, 'utf-8')
delivery = {
    'version':'1.0.55', 'code':76, 'apk':new_pair[0], 'source':new_pair[1],
    'sourceFiles':2575, 'formalArtifactsPreserved':102,
    'originalCertificateVerified':True, 'hostValidationComplete':True,
    'physicalAcceptanceComplete':False, 'uploaded':False, 'published':False,
}
(OUT / 'delivery-final.json').write_text(json.dumps(delivery, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps(delivery, ensure_ascii=False, indent=2))
