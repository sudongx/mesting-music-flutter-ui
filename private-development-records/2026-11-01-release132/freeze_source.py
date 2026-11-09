"""Freeze the complete current Git-selected source, excluding private material."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi').resolve()
OUT = ROOT / '.codex-artifacts/2026-11-01-release132'
TARGET = ROOT / 'Mesting-Music-v1.0.32-source.zip'
STAGING = OUT / 'source-snapshot-validated.zip'
assert not TARGET.exists() and not STAGING.exists(), 'Never overwrite frozen or incomplete source archives'
selected = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')
external = {'release/Mesting-Music-v1.0.32-source-verification.json',
            'release/Mesting-Music-v1.0.32-source.sha256', 'release/Mesting-Music-v1.0.32-SHA256.txt'}
paths = sorted(set(selected) - external - {'', 'SOURCE-SNAPSHOT.json'})
baseline = (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
baseline_name = 'SOURCE-SNAPSHOT-v1.0.24-BASELINE.json'
assert json.loads(baseline)['version'] == '1.0.24'
assert baseline_name not in paths
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.32-verification.json').read_text(encoding='utf-8'))
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
        assert not parts.intersection({'.git', '.codex-artifacts', '.codex-temp', '.codex-backups',
                                       '.dart_tool', '.gradle', '.kotlin', 'build', 'node_modules'}), relative
        assert file.suffix.lower() not in {'.keystore', '.jks', '.p12', '.pfx', '.apk', '.aab'}, relative
        assert file.name.lower() not in {'key.properties', 'local.properties', '.env'}, relative
        assert not (file.name.lower().startswith('.env.') and file.name.lower() not in {'.env.example', '.env.sample'}), relative
        data = file.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----', data):
            # The upstream MIT SSL demo is an existing public fixture, never an
            # exception for application signing keys or arbitrary PEM content.
            assert relative == public_fixture, f'Unexpected private-key content: {relative}'
            original = subprocess.check_output(['git', 'show', 'HEAD:' + public_fixture], cwd=ROOT)
            assert hashlib.sha256(original).digest() == hashlib.sha256(data).digest()
        archive.writestr(relative, data)
        manifest.append({'path': relative, 'size': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    # Keep tracked historical metadata intact; the delivered archive has its
    # own current manifest and retains the original under an explicit name.
    archive.writestr(baseline_name, baseline)
    metadata = {
        'version': '1.0.32', 'androidVersionCode': 53,
        'baseCommit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
        'status': 'local_working_source_snapshot_not_a_git_release',
        'snapshotContainsWorkingChanges': True, 'gitCommitted': False, 'gitPushed': False,
        'published': False, 'signingMaterialIncluded': False,
        'apkFile': apk['file'], 'apkSha256': apk['sha256'],
        'nativeEngineManifest': 'third_party/flutter_engine/android-release/engine-manifest.json',
        'externalVerificationExcludedToAvoidSelfReference': sorted(external),
        'previousSnapshotMetadata': {'workingTreePath': 'SOURCE-SNAPSHOT.json', 'archivePath': baseline_name,
                                     'size': len(baseline), 'sha256': hashlib.sha256(baseline).hexdigest()},
        'deletedWorkingTreePaths': deleted, 'files': manifest,
    }
    archive.writestr('SOURCE-SNAPSHOT.json', json.dumps(metadata, ensure_ascii=False, indent=2) + '\n')
with zipfile.ZipFile(STAGING) as archive:
    assert archive.testzip() is None
    assert len(archive.namelist()) == len(manifest) + 2 == len(set(archive.namelist()))
    assert archive.read(baseline_name) == baseline == (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
    for item in manifest:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
        assert hashlib.sha256((ROOT / item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
    required = {'lib/features/app_update/data/release_notes_receipt.dart',
'lib/features/app_update/presentation/release_history_page.dart',
'test/release_132_notes_test.dart', 'test/release_132_search_swipe_test.dart',
'test/support/release_132_qa.dart',
'lib/core/cache/browse_response_cache.dart', 'lib/features/music_platform/platform_browse_cache.dart',
                'lib/shared/widgets/music_refresh_indicator.dart', 'lib/shared/widgets/music_loading_scope.dart',
                'lib/shared/widgets/music_activity_indicator.dart',
                'lib/features/music_platform/netease/netease_library_sections.dart',
                'test/release_131_library_test.dart', 'test/release_131_refresh_test.dart', 'test/release_131_tab_input_test.dart',
                'lib/shared/widgets/artwork_reveal_boundary.dart',
                'test/release_130_artwork_reveal_test.dart', 'test/support/pump_artwork_ready.dart',
                'lib/shared/media/artwork_refresh_coordinator.dart', 'lib/shared/widgets/retained_artwork_frame.dart',
                'lib/shared/widgets/beta_root_tab_viewport.dart', 'lib/app/router/beta_tab_shell.dart',
                'test/release_128_presentation_test.dart',
                'third_party/flutter_engine/android-release/arm64-v8a-release.jar',
                'third_party/flutter_engine/android-release/armeabi-v7a-release.jar',
                'third_party/flutter_engine/android-release/assets/LICENSE.flutter-engine.txt',
                'third_party/flutter_engine/android-release/engine-manifest.json',
                'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.32.md', 'docs/INSTALL-v1.0.32.md'}
    assert required.issubset(set(archive.namelist()))
    assert not any('companions-bottom' in name or name.endswith('beta_login_artwork_frame.dart') for name in archive.namelist())
assert TARGET.parent == ROOT and STAGING.parent == OUT and not TARGET.exists()
os.rename(STAGING, TARGET)
with TARGET.open('rb') as stream:
    sha = hashlib.file_digest(stream, 'sha256').hexdigest()
result = {
    'version': '1.0.32', 'androidVersionCode': 53, 'sourceZipName': TARGET.name,
    'sourceZipSize': TARGET.stat().st_size, 'sourceZipSha256': sha, 'sourceFileCount': len(manifest),
    'frozenEntryCount': len(manifest) + 2, 'zipCrcVerified': True,
    'previousSnapshotMetadataPreservedAs': baseline_name, 'allFrozenEntriesByteIdentical': True,
    'includesPinnedNativeEngineAndCompleteLicense': True, 'signingMaterialIncluded': False,
    'privateDeviceAndOfficialReferenceArtifactsExcluded': True, 'buildCachesExcluded': True,
    'publicUpstreamSslFixtureOnly': True, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False, 'manifestInsideZip': 'SOURCE-SNAPSHOT.json',
}
(ROOT / 'release/Mesting-Music-v1.0.32-source-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(ROOT / 'release/Mesting-Music-v1.0.32-source.sha256').write_text(sha + '  ' + TARGET.name + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
