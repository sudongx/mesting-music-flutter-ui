"""Freeze the current complete dirty source after verified local checks only."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
target = root / 'Mesting-Music-v1.0.67-source.zip'
staging = out / 'source-validated.zip'
assert not target.exists() and not staging.exists(), 'Never overwrite frozen deliveries'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
checks = json.loads((out / 'host-check-summary.json').read_text(encoding='utf-8'))
assert checks['passed'] and checks['analysisIssues'] == 0
assert checks['nativeAudio']['passed'] == 14
apk = json.loads((root / 'release/Mesting-Music-v1.0.67-verification.json').read_text(encoding='utf-8'))
before = json.loads((out / 'baseline.json').read_text(encoding='utf-8'))
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root).decode().strip() == before['head']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root)
baseline = (root / 'SOURCE-SNAPSHOT.json').read_bytes()
assert json.loads(baseline)['version'] == '1.0.24'
external = {f'release/Mesting-Music-v1.0.67{suffix}' for suffix in
            ['-verification.json', '-source-verification.json', '.apk.sha256', '-source.sha256', '-SHA256.txt']}
selected = set(subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=root).decode('utf-8').split('\0'))
generated = {p for p in selected if p.startswith('android/build/')}
qa_review = {p for p in selected if p.startswith('.impeccable/review/')}
assert not subprocess.check_output(['git', 'ls-files', '-z', '--', 'android/build'], cwd=root).strip(b'\0')
selected -= external | generated | {'', 'SOURCE-SNAPSHOT.json'}
selected = {p for p in selected if not p.startswith('.impeccable/review/')}
fixture_path = 'test/support/tls155/public-test-key.pem'
fixture_hash = hashlib.sha256((root / fixture_path).read_bytes()).hexdigest()
manifest, deleted = [], []
with zipfile.ZipFile(staging, 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for relative in sorted(selected):
        path = root / relative
        if not path.exists():
            deleted.append(relative)
            continue
        assert path.is_file() and not path.is_symlink(), relative
        assert not {p.lower() for p in path.relative_to(root).parts} & {'.git', '.codex-artifacts', '.codex-temp', '.codex-backups', '.dart_tool', '.gradle', '.kotlin', 'build', 'node_modules', '.firecrawl'}, relative
        assert path.suffix.lower() not in {'.keystore', '.jks', '.p12', '.pfx', '.apk', '.aab'}, relative
        assert path.name.lower() not in {'key.properties', 'local.properties', '.env'}, relative
        assert not (path.name.lower().startswith('.env.') and path.name.lower() not in {'.env.example', '.env.sample'}), relative
        if path.suffix.lower() == '.zip': assert relative == 'test/support/release_notes_apk_fixture.zip', relative
        data = path.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----', data):
            if relative == fixture_path:
                assert hashlib.sha256(data).hexdigest() == fixture_hash
                assert (root / 'test/support/tls155/README.md').is_file()
            else:
                assert relative == 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem', relative
                assert data == subprocess.check_output(['git', 'show', 'HEAD:' + relative], cwd=root)
        archive.writestr(relative, data)
        manifest.append({'path': relative, 'size': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    archive.writestr('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json', baseline)
    snapshot = {
        'version': '1.0.67', 'androidVersionCode': 88, 'branch': 'beta', 'baseCommit': before['head'],
        'workingTreeIncluded': True, 'packageName': 'com.mesting.music', 'internalFlavor': 'beta',
        'apkSha256': apk['sha256'], 'hostValidation': checks,
        'buildCachesAndSigningExcluded': True, 'publicSyntheticTlsFixtureKeySha256': fixture_hash,
        'publicTestKeyIsNotAnApplicationSigningKeyOrUserCredential': True,
        'externalVerificationExcludedToAvoidSelfReference': sorted(external),
        'generatedAndroidBuildReportsExcluded': sorted(generated), 'deletedWorkingTreePaths': deleted,
        'privateQaReviewArtifactsExcluded': sorted(qa_review),
        'files': manifest, 'deviceAccess': True, 'phoneAcceptance': False, 'published': False,
        'phoneLoginRemoved': True, 'qrOnlyLogin': True, 'sms2156Resolved': False, 'qrLoginImplemented': True, 'prior66QrAndColdRestoreUserAccepted': True, 'realQrAccountAcceptedIn67': False,
        'ordinaryPlaybackHostRegressionPassed': True, 'prior66NetEaseAutoSourceUserAccepted': True, 'physicalSodaPlaybackAcceptedIn67': False, 'officialAudioOnly': True, 'externalSignerChosenByUser': True, 'credentialsSentToSigner': False,
        'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    }
    archive.writestr('SOURCE-SNAPSHOT.json', json.dumps(snapshot, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(staging) as archive, zipfile.ZipFile(root / 'Mesting-Music-v1.0.62-source.zip') as prior:
    assert archive.testzip() is None
    names = set(archive.namelist())
    assert len(names) == len(archive.namelist()) == len(manifest) + 2
    assert {p['path'] for p in json.loads(prior.read('SOURCE-SNAPSHOT.json'))['files']}.issubset(names)
    registrant = 'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java'
    # The receipt baseline also inventories generated Gradle reports and old
    # private QA images. Retain them locally, but never publish them as source.
    original_source = {p['path'] for p in before['currentFiles']
                       if p['path'] not in {registrant, 'SOURCE-SNAPSHOT.json'} and not p['path'].startswith(('android/build/', '.impeccable/review/'))}
    assert original_source.issubset(names)
    for row in manifest:
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256']
        assert hashlib.sha256((root / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
    assert 'version: 1.0.67+88' in archive.read('pubspec.yaml').decode('utf-8')
    assert archive.read('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json') == baseline
staging.rename(target)
with target.open('rb') as stream: digest = hashlib.file_digest(stream, 'sha256').hexdigest()
record = {'version': '1.0.67', 'androidVersionCode': 88, 'sourceZipName': target.name,
          'sourceZipSize': target.stat().st_size, 'sourceZipSha256': digest, 'sourceFileCount': len(manifest),
          'frozenEntryCount': len(manifest)+2, 'zipCrcVerified': True, 'allFrozenEntriesByteIdentical': True,
          'allPreexistingSourcePathsPreserved': True, 'signingMaterialIncluded': False,
          'generatedAndroidBuildReportsExcluded': sorted(generated),
          'privateQaReviewArtifactsExcluded': sorted(qa_review),
          'publicSyntheticTlsTestKeyExplicitlyDocumented': True,
          'buildCachesAndPrivateEvidenceExcluded': True, 'gitCommitted': False, 'gitPushed': False,
          'uploaded': False, 'published': False, 'deviceAccess': True, 'physicalAcceptanceComplete': False}
(root / 'release/Mesting-Music-v1.0.67-source-verification.json').write_text(json.dumps(record, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
(root / 'release/Mesting-Music-v1.0.67-source.sha256').write_text(digest+'  '+target.name+'\n', encoding='utf-8')
print(json.dumps(record, ensure_ascii=False, indent=2))
