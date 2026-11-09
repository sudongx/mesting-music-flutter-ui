"""Validate both new immutable deliveries and write only external checksums."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'
apk_record = json.loads((root / 'release/Mesting-Music-v1.0.46-verification.json').read_text('utf-8'))
source_record = json.loads((root / 'release/Mesting-Music-v1.0.46-source-verification.json').read_text('utf-8'))
apk = root / 'release' / apk_record['file']
source = root / source_record['sourceZipName']


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


assert digest(apk) == apk_record['sha256'] and apk.stat().st_size == apk_record['fileSize']
assert digest(source) == source_record['sourceZipSha256']
assert source.stat().st_size == source_record['sourceZipSize']
with zipfile.ZipFile(source) as archive:
    manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version'] == '1.0.46' and manifest['androidVersionCode'] == 67
    assert manifest['apkSha256'] == apk_record['sha256']
    assert len(manifest['files']) == source_record['sourceFileCount'] == 2278
    assert archive.testzip() is None
    for item in manifest['files']:
        assert digest(root / item['path']) == item['sha256'], item['path']
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
    expected = set(archive.namelist()) - {'SOURCE-SNAPSHOT.json', 'SOURCE-SNAPSHOT-v1.0.24-BASELINE.json'}
    assert expected == {item['path'] for item in manifest['files']}
agents = (root / 'AGENTS.md').read_bytes()
prior_agents = (out / 'AGENTS-before.md').read_bytes()
assert agents.endswith(prior_agents) and agents != prior_agents
assert agents.startswith('**2026-11-03 本地正式交付1.0.46/code67'.encode('utf-8'))
staged = subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root, text=True).strip()
assert not staged
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip() == manifest['baseCommit']
assert subprocess.check_output(['git', 'branch', '--show-current'], cwd=root, text=True).strip() == 'beta'
checksum = root / 'release/Mesting-Music-v1.0.46-SHA256.txt'
assert not checksum.exists(), 'Do not overwrite an existing frozen delivery checksum'
checksum.write_text(apk_record['sha256'] + '  ' + apk.name + '\n' +
                    source_record['sourceZipSha256'] + '  ' + source.name + '\n', encoding='ascii')
record = {'version': '1.0.46+67',
          'apk': {'path': str(apk), 'bytes': apk.stat().st_size, 'sha256': digest(apk)},
          'source': {'path': str(source), 'bytes': source.stat().st_size, 'sha256': digest(source),
                     'files': source_record['sourceFileCount'], 'entries': source_record['frozenEntryCount']},
          'allSourceEntriesMatchCurrentDirtyTree': True, 'oldAgentsBytesRetained': True,
          'originalSigningAndDependenciesRetained': True,
          'previousFrozenArtifactCount': 82, 'newFrozenArtifacts': 2, 'frozenArtifactCount': 84,
          'checksumFile': str(checksum), 'sourceExternalVerificationAvoidsSelfReference': True,
          'beta': {'files': 134, 'passed': 1653, 'skipped': 1}, 'stablePassed': 21,
          'navigationPassed': 54, 'additionalStablePlaylistPassed': 5,
          'formalLoggingRegressionPassed': 28, 'nativeUnchangedInputChecksInherited': 16,
          'hostRenders': 20, 'analysisIssues': 0, 'actualApkNotesMatched': 8,
          'deviceInstalledOrAccepted': False, 'realAccountAccess': False,
          'backendAccess': False, 'gitCommitted': False, 'gitPushed': False,
          'uploaded': False, 'published': False}
(out / 'delivery-final.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(record, ensure_ascii=False, indent=2))
