"""Freeze complete current dirty source, with explicit retired-account deletions."""
from pathlib import Path
import hashlib
import json
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
TARGET = ROOT / 'Mesting-Music-v1.0.75-source.zip'
STAGING = OUT / 'source-validated.zip'
assert not TARGET.exists() and not STAGING.exists(), 'Never replace a frozen source ZIP'
before = json.loads((OUT / 'before.json').read_text('utf-8'))
host = json.loads((OUT / 'host-summary.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.75-verification.json').read_text('utf-8'))
build = json.loads((OUT / 'candidate4/build-input.json').read_text('utf-8'))
for row in build['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
assert all(host[name]['failed'] == 0 for name in ['beta', 'stable', 'navigation'])
assert 'No issues found!' in (OUT / host['analysis']['log']).read_text('utf-8-sig')
assert subprocess.check_output(['git', '--no-optional-locks', 'rev-parse', 'HEAD'], cwd=ROOT).decode().strip() == before['head']
assert not subprocess.check_output(['git', '--no-optional-locks', 'diff', '--cached', '--name-only'], cwd=ROOT)
baseline = (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
assert json.loads(baseline)['version'] == '1.0.24'
selected = set(subprocess.check_output(['git', '--no-optional-locks', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0'))
external = {f'release/Mesting-Music-v1.0.75{suffix}' for suffix in
            ['-verification.json', '-source-verification.json', '.apk.sha256', '-source.sha256', '-SHA256.txt']}
generated = {p for p in selected if p.startswith(('android/build/', '.impeccable/review/'))}
registrant = 'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java'
selected -= external | generated | {'', 'SOURCE-SNAPSHOT.json', registrant}
fixture = 'test/support/tls155/public-test-key.pem'
fixture_hash = hashlib.sha256((ROOT / fixture).read_bytes()).hexdigest()
retired = sorted(row['path'] for row in before['currentFiles'] if not (ROOT / row['path']).is_file())
assert len([path for path in retired if path.startswith('lib/')]) == 47
manifest, git_deleted = [], []
with zipfile.ZipFile(STAGING, 'x', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for relative in sorted(selected):
        path = ROOT / relative
        if not path.exists():
            git_deleted.append(relative)
            continue
        assert path.is_file() and not path.is_symlink(), relative
        assert not {p.lower() for p in path.relative_to(ROOT).parts} & {
            '.git', '.codex-artifacts', '.codex-temp', '.codex-backups', '.dart_tool',
            '.gradle', '.kotlin', 'build', 'node_modules', '.firecrawl'}, relative
        assert path.suffix.lower() not in {'.keystore', '.jks', '.p12', '.pfx', '.apk', '.aab'}, relative
        assert path.name.lower() not in {'key.properties', 'local.properties', '.env'}, relative
        assert not (path.name.lower().startswith('.env.') and path.name.lower() not in {'.env.example', '.env.sample'}), relative
        if path.suffix.lower() == '.zip':
            assert relative == 'test/support/release_notes_apk_fixture.zip', relative
        data = path.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----', data):
            if relative == fixture:
                assert hashlib.sha256(data).hexdigest() == fixture_hash
                assert (ROOT / 'test/support/tls155/README.md').is_file()
            else:
                assert relative == 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem', relative
                assert data == subprocess.check_output(['git', 'show', 'HEAD:' + relative], cwd=ROOT)
        archive.writestr(relative, data)
        manifest.append({'path': relative, 'size': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    archive.writestr('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json', baseline)
    snapshot = {
        'version': '1.0.75', 'androidVersionCode': 96, 'branch': 'beta',
        'baseCommit': before['head'], 'workingTreeIncluded': True,
        'packageName': 'com.mesting.music', 'internalFlavor': 'beta',
        'apkSha256': apk['sha256'], 'hostValidation': host,
        'fixedProductAndBuildInputs': build,
        'authorizedDeletedSince74': retired, 'deletedWorkingTreePaths': sorted(git_deleted),
        'generatedOrPrivateQaExcluded': sorted(generated | {registrant}),
        'externalVerificationExcludedToAvoidSelfReference': sorted(external),
        'buildCachesSigningPrivateEvidenceExcluded': True,
        'publicSyntheticTlsFixtureKeySha256': fixture_hash,
        'publicTestKeyIsNotAnApplicationSigningKeyOrUserCredential': True,
        'physicalRetainedDataUpgradePerformed': True,
        'physicalValidation': '34 core scenarios;84 sampled/1failed/48skipped;three Tab drivers12/12 each. See same-version performance/validation documents.',
        'continuous120FpsAccepted': False, 'fullCatalogueOrLongTermStabilityAccepted': False,
        'old74NativeCrashProvenFixed': False,
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
        'files': manifest,
    }
    archive.writestr('SOURCE-SNAPSHOT.json', json.dumps(snapshot, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(STAGING) as archive:
    assert archive.testzip() is None
    names = set(archive.namelist())
    assert len(names) == len(archive.namelist()) == len(manifest) + 2
    assert not set(retired) & names
    for required in ['lib/shared/widgets/beta_tab_motion.dart', 'lib/shared/widgets/beta_root_tab_viewport.dart',
        'lib/features/music_platform/presentation/platform_auth_page.dart',
        'test/release_175_account_migration_test.dart', 'test/release_175_tab_rendering_test.dart',
        'test/release_175_diagnostic_tabs_test.dart', 'docs/fixes-2026-11-07-v1.0.75.md',
        'docs/INSTALL-v1.0.75.md', 'docs/performance-2026-11-07-v1.0.75.md',
        'docs/performance-2026-11-07-v1.0.75.json', 'docs/validation-2026-11-07-v1.0.75.json',
        'docs/build-inputs-v1.0.75.json', 'HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.75.md', 'AGENTS.md']:
        assert required in names, required
    old_required = {row['path'] for row in before['currentFiles']
        if row['path'] not in {registrant, 'SOURCE-SNAPSHOT.json'} | external | set(retired)
        and not row['path'].startswith(('android/build/', '.impeccable/review/'))}
    assert old_required.issubset(names), sorted(old_required - names)
    for row in manifest:
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256']
        assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256']
    assert 'version: 1.0.75+96' in archive.read('pubspec.yaml').decode('utf-8')
    assert archive.read('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json') == baseline
STAGING.rename(TARGET)
with TARGET.open('rb') as stream:
    digest = hashlib.file_digest(stream, 'sha256').hexdigest()
record = {
    'version': '1.0.75', 'androidVersionCode': 96,
    'sourceZipName': TARGET.name, 'sourceZipSize': TARGET.stat().st_size,
    'sourceZipSha256': digest, 'sourceFileCount': len(manifest), 'frozenEntryCount': len(manifest) + 2,
    'zipCrcVerified': True, 'allFrozenEntriesByteIdentical': True,
    'authorizedRetiredPathsExcluded': retired,
    'allOtherPreexistingSourcePathsPreserved': True,
    'signingMaterialIncluded': False, 'buildCachesAndPrivateEvidenceExcluded': True,
    'publicSyntheticTlsTestKeyExplicitlyDocumented': True,
    'generatedOrPrivateQaExcluded': sorted(generated | {registrant}),
    'physicalRetainedDataUpgradePerformed': True, 'continuous120FpsAccepted': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
for suffix, text in [('-source-verification.json', json.dumps(record, ensure_ascii=False, indent=2) + '\n'),
                     ('-source.sha256', digest + '  ' + TARGET.name + '\n'),
                     ('-SHA256.txt', apk['sha256'] + '  Mesting-Music-v1.0.75.apk\n' + digest + '  ' + TARGET.name + '\n')]:
    path = ROOT / ('release/Mesting-Music-v1.0.75' + suffix)
    assert not path.exists()
    with path.open('x', encoding='utf-8') as stream:
        stream.write(text)
print(json.dumps({key: record[key] for key in ['sourceZipName', 'sourceZipSize', 'sourceZipSha256', 'sourceFileCount', 'zipCrcVerified']}, indent=2))
