"""Freeze complete Git-selected current source, retaining the dirty checkout."""
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import zipfile

root = Path('D:/AnLi').resolve()
out = root / '.codex-artifacts/2026-11-02-v140-fixes'
target = root / 'Mesting-Music-v1.0.40-source.zip'
staging = out / 'source-snapshot-validated.zip'
assert target.parent == root and staging.parent == out
assert not target.exists() and not staging.exists(), 'Never overwrite a frozen snapshot'
apk = json.loads((root / 'release/Mesting-Music-v1.0.40-verification.json').read_text(encoding='utf8'))
checks = json.loads((out / 'host-check-summary.json').read_text(encoding='utf8'))
assert checks['analysisPassed']
assert all(checks[name]['completeAndSuccessful'] for name in ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
external = {'release/Mesting-Music-v1.0.40-source-verification.json',
            'release/Mesting-Music-v1.0.40-source.sha256','release/Mesting-Music-v1.0.40-SHA256.txt'}
paths = set(subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=root).decode('utf8').split('\0'))
paths -= external | {'','SOURCE-SNAPSHOT.json'}
baseline = (root/'SOURCE-SNAPSHOT.json').read_bytes()
baseline_name = 'SOURCE-SNAPSHOT-v1.0.24-BASELINE.json'
assert json.loads(baseline)['version'] == '1.0.24' and baseline_name not in paths
public_fixture = 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem'
manifest, deleted = [], []
with zipfile.ZipFile(staging,'x',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for relative in sorted(paths):
        file = root/relative
        if not file.exists():
            deleted.append(relative)
            continue
        assert file.is_file() and not file.is_symlink(), relative
        assert not {p.lower() for p in Path(relative).parts}.intersection({
            '.git','.codex-artifacts','.codex-temp','.codex-backups','.dart_tool',
            '.gradle','.kotlin','build','node_modules','.firecrawl'}), relative
        assert file.suffix.lower() not in {'.keystore','.jks','.p12','.pfx','.apk','.aab'},relative
        assert file.name.lower() not in {'key.properties','local.properties','.env'},relative
        assert not (file.name.lower().startswith('.env.') and file.name.lower() not in {'.env.example','.env.sample'}),relative
        data = file.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
            assert relative == public_fixture,relative
            assert data == subprocess.check_output(['git','show','HEAD:'+public_fixture],cwd=root)
        archive.writestr(relative,data)
        manifest.append({'path':relative,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    archive.writestr(baseline_name,baseline)
    archive.writestr('SOURCE-SNAPSHOT.json',json.dumps({
        'version':'1.0.40','androidVersionCode':61,
        'baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip(),
        'branch':'beta','workingTreeIncluded':True,'apkSha256':apk['sha256'],
        'published':False,'phoneAcceptance':False,
        'experimentalNativePlaybackEnabled':False,'localDiagnosticsEnabled':False,
        'buildCachesAndSigningExcluded':True,
        'externalVerificationExcludedToAvoidSelfReference':sorted(external),
        'previousSnapshotMetadata':{'archivePath':baseline_name,'sha256':hashlib.sha256(baseline).hexdigest()},
        'deletedWorkingTreePaths':deleted,'files':manifest,
    },ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(staging) as archive:
    assert archive.testzip() is None
    assert len(archive.namelist()) == len(set(archive.namelist())) == len(manifest)+2
    required={'pubspec.yaml','assets/data/release-notes.json','lib/features/app_update/domain/release_history.dart',
              'lib/features/experience/presentation/playback_pill_artwork.dart',
              'lib/features/experience/presentation/airpods_pro_glyph.dart',
              'lib/features/music_platform/netease/netease_listening_reporter.dart',
              'test/release_139_listening_rollback_test.dart',
              'third_party/audio_glyphs/airpodspro.svg','third_party/audio_glyphs/airpodspro.provenance.json',
              'third_party/audio_glyphs/NOTICE.md','third_party/audio_glyphs/LICENSE-COMPOSE-CUPERTINO.txt',
              'third_party/flutter_engine/android-release/arm64-v8a-release.jar',
              'third_party/flutter_engine/android-release/armeabi-v7a-release.jar',
              'HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.40.md','docs/INSTALL-v1.0.40.md',
              'docs/validation-2026-11-02-v1.0.40.json'}
    assert required.issubset(set(archive.namelist())),required-set(archive.namelist())
    for item in manifest:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
        assert hashlib.sha256((root/item['path']).read_bytes()).hexdigest() == item['sha256'],item['path']
    assert archive.read(baseline_name) == baseline
    assert 'version: 1.0.40+61' in archive.read('pubspec.yaml').decode('utf8')
assert not target.exists()
os.rename(staging,target)
with target.open('rb') as stream: digest=hashlib.file_digest(stream,'sha256').hexdigest()
record={'version':'1.0.40','androidVersionCode':61,'sourceZipName':target.name,
        'sourceZipSize':target.stat().st_size,'sourceZipSha256':digest,
        'sourceFileCount':len(manifest),'frozenEntryCount':len(manifest)+2,
        'zipCrcVerified':True,'allFrozenEntriesByteIdentical':True,
        'includesPinnedNativeEngineAndCompleteLicense':True,
        'signingMaterialIncluded':False,'privateDeviceAndOfficialReferenceArtifactsExcluded':True,
        'buildCachesExcluded':True,'manifestInsideZip':'SOURCE-SNAPSHOT.json',
        'previousSnapshotMetadataPreservedAs':baseline_name,'gitCommitted':False,
        'gitPushed':False,'uploaded':False,'published':False}
(root/'release/Mesting-Music-v1.0.40-source-verification.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
(root/'release/Mesting-Music-v1.0.40-source.sha256').write_text(digest+'  '+target.name+'\n',encoding='utf8')
print(json.dumps(record,ensure_ascii=False,indent=2))
