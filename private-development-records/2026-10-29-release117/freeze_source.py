"""Snapshot the complete current Git-selected tree, with no signing material."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi').resolve()
OUT = ROOT / '.codex-artifacts/2026-10-29-release117'
TARGET = ROOT / 'Mesting-Music-v1.0.17-source.zip'
STAGING = OUT / 'source-snapshot-validated.zip'
assert TARGET.parent == ROOT and STAGING.parent == OUT
assert not TARGET.exists(), 'Do not overwrite a frozen source ZIP'
assert not STAGING.exists(), 'Review an incomplete staging archive before retrying'
selected = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')
external_verification = {'release/Mesting-Music-v1.0.17-source-verification.json', 'release/Mesting-Music-v1.0.17-source.sha256', 'release/Mesting-Music-v1.0.17-SHA256.txt'}
paths = sorted(set(path for path in selected if path and path not in external_verification and path != 'SOURCE-SNAPSHOT.json'))
baseline_snapshot = (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
baseline_name = 'SOURCE-SNAPSHOT-BASELINE.json'
assert baseline_name not in paths
public_fixture = 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem'
manifest = []
deleted = []
with zipfile.ZipFile(STAGING, 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for relative in paths:
        file = ROOT / relative
        if not file.exists():
            deleted.append(relative)
            continue
        assert file.is_file() and not file.is_symlink(), relative
        parts = {part.lower() for part in Path(relative).parts}
        assert not parts.intersection({'.git', '.codex-artifacts', '.codex-temp', '.codex-backups', '.dart_tool', '.gradle', 'build', 'node_modules'}), relative
        assert file.suffix.lower() not in {'.keystore', '.jks', '.p12', '.pfx', '.apk', '.aab'}, relative
        assert file.name.lower() not in {'key.properties', 'local.properties', '.env'}, relative
        assert not (file.name.lower().startswith('.env.') and file.name.lower() not in {'.env.example', '.env.sample'}), relative
        data = file.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----', data):
            # This one public MIT upstream SSL example is already in Git.
            # Never generalize this exception to application signing files.
            assert relative == public_fixture, f'Unexpected private-key content: {relative}'
            original = subprocess.check_output(['git', 'show', 'HEAD:' + public_fixture], cwd=ROOT)
            assert hashlib.sha256(original).digest() == hashlib.sha256(data).digest()
        archive.writestr(relative, data)
        manifest.append({'path': relative, 'size': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    # Keep the previous tracked metadata byte-for-byte without colliding with
    # this archive's new generated manifest. The working-tree file is untouched.
    archive.writestr(baseline_name, baseline_snapshot)
    metadata = {
        'version': '1.0.17', 'versionCode': 38,
        'baseCommit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
        'status': 'local_working_source_snapshot_not_a_git_release',
        'published': False, 'signingMaterialIncluded': False,
        'externalVerificationExcludedToAvoidSelfReference': sorted(external_verification),
        'previousSnapshotMetadata': {'workingTreePath': 'SOURCE-SNAPSHOT.json', 'archivePath': baseline_name, 'size': len(baseline_snapshot), 'sha256': hashlib.sha256(baseline_snapshot).hexdigest()},
        'deletedWorkingTreePaths': deleted, 'files': manifest,
    }
    archive.writestr('SOURCE-SNAPSHOT.json', json.dumps(metadata, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(STAGING) as archive:
    assert archive.testzip() is None
    assert len(archive.namelist()) == len(manifest) + 2
    assert len(archive.namelist()) == len(set(archive.namelist()))
    assert archive.read(baseline_name) == baseline_snapshot == (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
    for item in manifest:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
        assert hashlib.sha256((ROOT / item['path']).read_bytes()).hexdigest() == item['sha256'], 'Source changed during freeze: ' + item['path']
# Both resolved paths are explicitly inside this workspace, and Windows rename
# refuses to replace an existing final file.
assert not TARGET.exists()
os.rename(STAGING, TARGET)
with TARGET.open('rb') as source:
    sha = hashlib.file_digest(source, 'sha256').hexdigest()
result = {
    'version': '1.0.17', 'androidVersionCode': 38,
    'sourceZipName': TARGET.name, 'sourceZipSize': TARGET.stat().st_size,
    'sourceZipSha256': sha, 'sourceFileCount': len(manifest),
    'frozenEntryCount': len(manifest) + 2, 'zipCrcVerified': True,
    'previousSnapshotMetadataPreservedAs': baseline_name,
    'allFrozenEntriesByteIdentical': True, 'signingMaterialIncluded': False,
    'publicUpstreamSslFixtureOnly': True, 'gitCommitted': False,
    'gitPushed': False, 'uploaded': False, 'published': False,
    'manifestInsideZip': 'SOURCE-SNAPSHOT.json',
}
(ROOT / 'release/Mesting-Music-v1.0.17-source-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(ROOT / 'release/Mesting-Music-v1.0.17-source.sha256').write_text(sha + '  ' + TARGET.name + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
