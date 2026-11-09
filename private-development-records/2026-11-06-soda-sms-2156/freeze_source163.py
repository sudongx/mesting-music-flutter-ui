"""Freeze the full dirty source, never a HEAD-only or signing-material archive."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
TARGET = ROOT / 'Mesting-Music-v1.0.63-source.zip'
STAGING = OUT / 'source-validated.zip'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
assert not TARGET.exists() and not STAGING.exists(), 'Never overwrite a frozen delivery'
checks = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
assert checks['analysisPassed']
assert checks['deltaTests']['complete'] and checks['deltaTests']['success'] == 61
assert checks['priorFullRegression62']['inheritedOnly']
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.63-verification.json').read_text('utf-8'))
before = json.loads((OUT / 'protected-state.json').read_text('utf-8'))
baseline = (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
assert json.loads(baseline)['version'] == '1.0.24'
external = {f'release/Mesting-Music-v1.0.63{suffix}' for suffix in
            ['-verification.json', '-source-verification.json', '.apk.sha256', '-source.sha256', '-SHA256.txt']}
selected = set(subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0'))
generated = {p for p in selected if p.startswith('android/build/')}
tracked_generated = subprocess.check_output(['git', 'ls-files', '-z', '--', 'android/build'], cwd=ROOT)
assert not tracked_generated.strip(b'\0'), 'Review a tracked generated report before omitting it'
selected -= external | generated | {'', 'SOURCE-SNAPSHOT.json'}
selected = {p for p in selected if not p.startswith('.impeccable/review/')}
public_key = ROOT / 'test/support/tls155/public-test-key.pem'
fixture_sha = hashlib.sha256(public_key.read_bytes()).hexdigest()
manifest, deleted = [], []
with zipfile.ZipFile(STAGING, 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for relative in sorted(selected):
        path = ROOT / relative
        if not path.exists():
            deleted.append(relative)
            continue
        assert path.is_file() and not path.is_symlink(), relative
        assert not {p.lower() for p in path.relative_to(ROOT).parts} & {'.git', '.codex-artifacts', '.codex-temp', '.codex-backups', '.dart_tool', '.gradle', '.kotlin', 'build', 'node_modules', '.firecrawl'}, relative
        assert path.suffix.lower() not in {'.keystore', '.jks', '.p12', '.pfx', '.apk', '.aab'}, relative
        assert path.name.lower() not in {'key.properties', 'local.properties', '.env'}, relative
        assert not (path.name.lower().startswith('.env.') and path.name.lower() not in {'.env.example', '.env.sample'}), relative
        if path.suffix.lower() == '.zip':
            assert relative == 'test/support/release_notes_apk_fixture.zip', relative
        data = path.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----', data):
            if relative == 'test/support/tls155/public-test-key.pem':
                assert hashlib.sha256(data).hexdigest() == fixture_sha
                assert (ROOT / 'test/support/tls155/README.md').is_file()
            else:
                assert relative == 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem', relative
                assert data == subprocess.check_output(['git', 'show', 'HEAD:' + relative], cwd=ROOT)
        archive.writestr(relative, data)
        manifest.append({'path': relative, 'size': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    archive.writestr('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json', baseline)
    archive.writestr('SOURCE-SNAPSHOT.json', json.dumps({
        'version': '1.0.63', 'androidVersionCode': 84, 'branch': 'beta',
        'baseCommit': before['head'], 'workingTreeIncluded': True,
        'packageName': 'com.mesting.music', 'internalFlavor': 'beta', 'apkSha256': apk['sha256'],
        'hostValidation': checks, 'buildCachesAndSigningExcluded': True,
        'publicSyntheticTlsFixtureKeySha256': fixture_sha,
        'publicTestKeyIsNotAnApplicationSigningKeyOrUserCredential': True,
        'externalVerificationExcludedToAvoidSelfReference': sorted(external),
        'generatedAndroidBuildReportsExcluded': sorted(generated),
        'deletedWorkingTreePaths': deleted, 'files': manifest,
        'deviceAccess': True, 'deviceScope': 'Authorized SMS debugging and retained-data installation; SMS manually triggered by user', 'phoneAcceptance': False, 'published': False,
        'loginStorageScopePassedOnThisDevice': False,
        'deviceValidation': json.loads((ROOT / 'docs/validation-2026-11-06-v1.0.63.json').read_text('utf-8'))['device'],
        'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    }, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(STAGING) as archive, zipfile.ZipFile(ROOT / 'Mesting-Music-v1.0.62-source.zip') as prior:
    assert archive.testzip() is None
    names = set(archive.namelist())
    assert len(names) == len(archive.namelist()) == len(manifest) + 2
    previous = json.loads(prior.read('SOURCE-SNAPSHOT.json'))
    assert {p['path'] for p in previous['files']}.issubset(names)
    # Flutter regenerates this ignored file for the chosen flavor. The before
    # copy remains in private evidence; it may contain integration_test and is
    # intentionally absent from both the prior source and current source ZIP.
    generated_registrant = 'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java'
    assert {p['path'] for p in before['files'] if p['path'] != generated_registrant}.issubset(names)
    for row in manifest:
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256']
        assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
    assert 'version: 1.0.63+84' in archive.read('pubspec.yaml').decode('utf-8')
    assert archive.read('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json') == baseline
STAGING.rename(TARGET)
with TARGET.open('rb') as stream:
    digest = hashlib.file_digest(stream, 'sha256').hexdigest()
record = {
    'version': '1.0.63', 'androidVersionCode': 84, 'sourceZipName': TARGET.name,
    'sourceZipSize': TARGET.stat().st_size, 'sourceZipSha256': digest,
    'sourceFileCount': len(manifest), 'frozenEntryCount': len(manifest) + 2,
    'zipCrcVerified': True, 'allFrozenEntriesByteIdentical': True,
    'allPreexistingSourcePathsPreserved': True, 'signingMaterialIncluded': False,
    'publicSyntheticTlsTestKeyExplicitlyDocumented': True,
    'buildCachesAndPrivateEvidenceExcluded': True, 'gitCommitted': False,
    'gitPushed': False, 'uploaded': False, 'published': False,
    'deviceAccess': True, 'deviceScope': 'Authorized SMS debugging and retained-data installation; SMS manually triggered by user', 'physicalAcceptanceComplete': False,
    'loginStorageScopePassedOnThisDevice': False,
}
(ROOT / 'release/Mesting-Music-v1.0.63-source-verification.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
(ROOT / 'release/Mesting-Music-v1.0.63-source.sha256').write_text(digest + '  ' + TARGET.name + '\n', 'utf-8')
print(json.dumps(record, ensure_ascii=False, indent=2))
