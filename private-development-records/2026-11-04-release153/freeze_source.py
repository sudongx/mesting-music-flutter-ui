"""Freeze complete Git-selected dirty source, rejecting private material."""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

ROOT=Path('D:/AnLi').resolve()
OUT=ROOT/'.codex-artifacts/2026-11-04-release153'
TARGET=ROOT/'Mesting-Music-v1.0.53-source.zip'
STAGING=OUT/'source-snapshot-validated.zip'
os.environ['GIT_OPTIONAL_LOCKS']='0'
assert not TARGET.exists() and not STAGING.exists(), 'Never overwrite a frozen delivery'
checks=json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
assert checks['analysisPassed']
for name in ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl']:
    assert checks[name]['completeAndSuccessful'],name
apk=json.loads((ROOT/'release/Mesting-Music-v1.0.53-verification.json').read_text('utf-8'))
external={'release/Mesting-Music-v1.0.53-source-verification.json',
          'release/Mesting-Music-v1.0.53-source.sha256','release/Mesting-Music-v1.0.53-SHA256.txt'}
selected=set(subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf-8').split('\0'))
selected-=external|{'','SOURCE-SNAPSHOT.json'}
# Gradle can write its generated problem report under android/build, outside
# the root-only /build ignore. It is neither product source nor a frozen input.
# Preserve it locally, record its exclusion, and reject any tracked exception.
generated_reports={path for path in selected if path.startswith('android/build/')}
tracked=set(subprocess.check_output(['git','ls-files','-z','--','android/build'],cwd=ROOT).decode('utf-8').split('\0'))- {''}
assert not tracked, 'Do not omit a tracked Android build path without review'
selected-=generated_reports
baseline=(ROOT/'SOURCE-SNAPSHOT.json').read_bytes()
baseline_name='SOURCE-SNAPSHOT-v1.0.24-BASELINE.json'
assert json.loads(baseline)['version']=='1.0.24'
manifest=[]
deleted=[]
preserved={item['path']:item['sha256'] for item in json.loads((OUT/'preservation-before.json').read_text('utf-8'))['files']}
with zipfile.ZipFile(STAGING,'x',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for relative in sorted(selected):
        file=ROOT/relative
        if not file.exists(): deleted.append(relative);continue
        assert file.is_file() and not file.is_symlink(),relative
        assert not {part.lower() for part in file.relative_to(ROOT).parts}.intersection({
            '.git','.codex-artifacts','.codex-temp','.codex-backups','.dart_tool','.gradle',
            '.kotlin','build','node_modules','.firecrawl'}),relative
        assert file.suffix.lower() not in {'.keystore','.jks','.p12','.pfx','.apk','.aab'},relative
        if file.suffix.lower()=='.zip':
            # The production range-reader's preexisting tiny APK fixture is
            # source test data, not a release archive or signing material.
            assert relative=='test/support/release_notes_apk_fixture.zip',relative
            assert hashlib.sha256(file.read_bytes()).hexdigest()==preserved[relative],relative
        assert file.name.lower() not in {'key.properties','local.properties','.env'},relative
        assert not (file.name.lower().startswith('.env.') and file.name.lower() not in {'.env.example','.env.sample'}),relative
        data=file.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
            assert relative=='third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem',relative
            assert data==subprocess.check_output(['git','show','HEAD:'+relative],cwd=ROOT)
        archive.writestr(relative,data)
        manifest.append({'path':relative,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    archive.writestr(baseline_name,baseline)
    archive.writestr('SOURCE-SNAPSHOT.json',json.dumps({
        'version':'1.0.53','androidVersionCode':74,'branch':'beta',
        'baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),
        'workingTreeIncluded':True,'apkSha256':apk['sha256'],
        'published':False,'phoneAcceptance':False,'packageName':'com.mesting.music','internalFlavor':'beta','oldBetaDataAutomaticallyMigrated':False,'deviceAccess':False,
        'experimentalNativePlaybackEnabled':False,'localDiagnosticsEnabled':False,
        'togetherSyncDiagnosticLoggingEnabled':False,'formalApkInstalledOnDevice':False,
        'r4CandidateDualProfileTrackChangeCasesPassed':7,'fullBackgroundAcceptanceComplete':False,
        'hostValidation':checks,'buildCachesAndSigningExcluded':True,
        'externalVerificationExcludedToAvoidSelfReference':sorted(external),
        'generatedBuildReportsExcluded':sorted(generated_reports),
        'previousSnapshotMetadata':{'archivePath':baseline_name,'sha256':hashlib.sha256(baseline).hexdigest()},
        'deletedWorkingTreePaths':deleted,'files':manifest,
    },ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(STAGING) as archive,zipfile.ZipFile(ROOT/'Mesting-Music-v1.0.51-source.zip') as prior:
    assert archive.testzip() is None
    names=set(archive.namelist())
    assert len(names)==len(archive.namelist())==len(manifest)+2
    old=json.loads(prior.read('SOURCE-SNAPSHOT.json'))
    assert {item['path'] for item in old['files']}.issubset(names), 'Earlier source files must remain present'
    required={'test/release_152_accounts_test.dart', 'test/release_152_accounts_ui_test.dart', 'test/release_152_medals_test.dart', 'test/release_152_kugou_profile_test.dart', 'test/release_152_kugou_standard_login_test.dart', 'test/release_152_standard_grade_reporting_test.dart', 'test/release_152_official_listening_readback_test.dart', 'lib/features/music_platform/data/kugou_account_store.dart', 'lib/features/music_platform/data/kugou_medal_repository.dart', 'lib/features/music_platform/data/kugou_standard_login.dart', 'lib/features/music_platform/data/kugou_v4_grade_protocol.dart', 'docs/kugou-standard-2086-contract-2026-11-04.md', 'test/release_151_navigation_test.dart', 'test/release_151_login_test.dart', 'test/release_151_loading_test.dart', 'test/release_151_scroll_test.dart', 'test/support/release_151_qa.dart', 'lib/shared/widgets/song_list_scroll_motion.dart', 'lib/features/music_platform/presentation/song_actions_sheet.dart', 'lib/features/music_platform/data/song_menu_details.dart', 'lib/features/library/data/favorite_pins.dart', 'lib/features/library/favorite_pins_provider.dart', 'lib/shared/widgets/song_list_bookmark_capsule.dart', 'test/release_150_data_test.dart', 'test/release_150_queue_test.dart', 'test/release_150_navigation_test.dart', 'test/release_150_ui_test.dart', 'test/release_150_package_test.dart', 'lib/shared/models/song_list_memory.dart','lib/shared/widgets/song_list_tools.dart',
              'lib/features/music_platform/presentation/song_list_tools_host.dart',
              'test/release_149_bookmarks_test.dart','test/release_149_regressions_test.dart','test/release_149_ui_test.dart',
              'lib/shared/models/audio_origin.dart','lib/shared/widgets/keyboard_overlay_layout.dart',
              'lib/features/music_platform/netease/netease_item_artwork.dart',
              'lib/features/music_platform/netease/netease_song_metadata.dart',
              'lib/features/music_platform/data/playback_quality_catalog.dart',
              'test/release_148_data_test.dart','test/release_148_ui_test.dart','test/release_148_playback_test.dart',
              'docs/fixes-2026-11-04-v1.0.53.md','docs/INSTALL-v1.0.53.md',
              'docs/validation-2026-11-04-v1.0.53.json','HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.53.md'}
    required.update({'lib/core/network/music_http_client.dart','lib/core/network/music_network_diagnostics.dart','lib/core/security/retained_secure_read.dart','lib/features/auth/presentation/companion_motion.dart','android/app/src/main/kotlin/com/mesting/mesting_music/MusicHttpPlugin.kt','test/release_153_network_test.dart','test/release_153_audio_test.dart','test/release_153_motion_test.dart','test/release_153_storage_test.dart','test/release_153_ui_test.dart'})
    assert required.issubset(names),required-names
    for item in manifest:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest()==item['sha256']
        assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
    assert 'version: 1.0.53+74' in archive.read('pubspec.yaml').decode('utf-8')
    assert archive.read(baseline_name)==baseline
assert not TARGET.exists()
STAGING.rename(TARGET)
with TARGET.open('rb') as stream:digest=hashlib.file_digest(stream,'sha256').hexdigest()
record={'version':'1.0.53','androidVersionCode':74,'sourceZipName':TARGET.name,
        'sourceZipSize':TARGET.stat().st_size,'sourceZipSha256':digest,
        'sourceFileCount':len(manifest),'frozenEntryCount':len(manifest)+2,
        'zipCrcVerified':True,'allFrozenEntriesByteIdentical':True,
        'includesPinnedNativeEngineAndCompleteLicense':True,'signingMaterialIncluded':False,
        'privateDeviceAndOfficialReferenceArtifactsExcluded':True,'buildCachesExcluded':True,
        'manifestInsideZip':'SOURCE-SNAPSHOT.json','previousSnapshotMetadataPreservedAs':baseline_name,
        'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(ROOT/'release/Mesting-Music-v1.0.53-source-verification.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n','utf-8')
(ROOT/'release/Mesting-Music-v1.0.53-source.sha256').write_text(digest+'  '+TARGET.name+'\n','utf-8')
print(json.dumps(record,ensure_ascii=False,indent=2))
