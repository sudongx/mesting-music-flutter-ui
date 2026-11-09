"""Freeze the exact new82 dirty-tree source while preserving every81 source path."""
from pathlib import Path
import hashlib
import json
import re
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
TARGET = ROOT/'Mesting-Music-v1.0.82-source.zip'
STAGING = OUT/'source-validated.zip'
assert not TARGET.exists() and not STAGING.exists()
before = json.loads((OUT/'before.json').read_text('utf8'))
host = json.loads((OUT/'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.82-verification.json').read_text('utf8'))
build = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))
validation = json.loads((ROOT/'docs/validation-2026-11-09-v1.0.82.json').read_text('utf8'))
for row in build['files']:
    assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['sha256'],row['path']
assert all(host[s]['failed']==0 for s in ['beta','stable','navigation'])
assert 'No issues found!' in (OUT/host['analysis']['log']).read_text('utf-8-sig')
assert validation['deviceAccess']==False and validation['physicalAcceptancePerformed']==False
assert subprocess.check_output(['git','--no-optional-locks','rev-parse','HEAD'],cwd=ROOT).decode().strip()==before['head']
assert not subprocess.check_output(['git','--no-optional-locks','diff','--cached','--name-only'],cwd=ROOT)
baseline = (ROOT/'SOURCE-SNAPSHOT.json').read_bytes()
assert json.loads(baseline)['version']=='1.0.24'
selected = set(subprocess.check_output(['git','--no-optional-locks','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf8').split('\0'))
external = {f'release/Mesting-Music-v1.0.82{s}' for s in ['-verification.json','-source-verification.json','.apk.sha256','-source.sha256','-SHA256.txt']}
generated = {p for p in selected if p.startswith(('android/build/','.impeccable/review/'))}
registrant = 'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java'
selected -= external | generated | {'','SOURCE-SNAPSHOT.json',registrant}
fixture = 'test/support/tls155/public-test-key.pem'
fixture_hash = hashlib.sha256((ROOT/fixture).read_bytes()).hexdigest()
retired = before['authorizedRetiredPaths']
assert not any((ROOT/p).exists() for p in retired)
assert not [r['path'] for r in before['currentFiles'] if not (ROOT/r['path']).is_file()], 'No additional source retirement approved in82'
manifest,git_deleted = [],[]
with zipfile.ZipFile(STAGING,'x',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for relative in sorted(selected):
        path = ROOT/relative
        if not path.exists():
            git_deleted.append(relative)
            continue
        assert path.is_file() and not path.is_symlink(),relative
        assert not {p.lower() for p in path.relative_to(ROOT).parts} & {
            '.git','.codex-artifacts','.codex-temp','.codex-backups','.dart_tool',
            '.gradle','.kotlin','build','node_modules','.firecrawl'},relative
        assert path.suffix.lower() not in {'.keystore','.jks','.p12','.pfx','.apk','.aab'},relative
        assert path.name.lower() not in {'key.properties','local.properties','.env'},relative
        assert not(path.name.lower().startswith('.env.') and path.name.lower() not in {'.env.example','.env.sample'}),relative
        if path.suffix.lower()=='.zip':
            assert relative=='test/support/release_notes_apk_fixture.zip',relative
        data = path.read_bytes()
        if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
            if relative==fixture:
                assert hashlib.sha256(data).hexdigest()==fixture_hash
                assert (ROOT/'test/support/tls155/README.md').is_file()
            else:
                assert relative=='third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem',relative
                assert data==subprocess.check_output(['git','show','HEAD:'+relative],cwd=ROOT)
        archive.writestr(relative,data)
        manifest.append({'path':relative,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    archive.writestr('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json',baseline)
    snapshot = {'version':'1.0.82','androidVersionCode':103,'branch':'beta','baseCommit':before['head'],
        'workingTreeIncluded':True,'packageName':'com.mesting.music','internalFlavor':'beta',
        'apkSha256':apk['sha256'],'hostValidation':host,'fixedProductAndBuildInputs':build,
        'authorizedRetiredPathsPreservedFrom75':retired,'deletedWorkingTreePaths':sorted(git_deleted),
        'generatedOrPrivateQaExcluded':sorted(generated|{registrant}),
        'externalVerificationExcludedToAvoidSelfReference':sorted(external),
        'buildCachesSigningPrivateEvidenceExcluded':True,'publicSyntheticTlsFixtureKeySha256':fixture_hash,
        'publicTestKeyIsNotAnApplicationSigningKeyOrUserCredential':True,
        'physicalRetainedDataUpgradePerformed':False,'physicalValidation':'Not performed; this approval covers local repair and delivery, not device or account access',
        'continuous120FpsAccepted':False,'fullCatalogueOrLongTermStabilityAccepted':False,
        'old74NativeCrashProvenFixed':False,
        'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,'files':manifest}
    archive.writestr('SOURCE-SNAPSHOT.json',json.dumps(snapshot,ensure_ascii=False,indent=2)+'\n')
with zipfile.ZipFile(STAGING) as archive:
    assert archive.testzip() is None
    names = set(archive.namelist())
    assert len(names)==len(archive.namelist())==len(manifest)+2
    assert not set(retired)&names
    for required in ['lib/features/music_platform/netease/ad_probe/netease_ad_probe_context.dart', 'test/netease_ad_probe182_test.dart', 'lib/core/network/music_reward_diagnostic.dart', 'lib/features/music_platform/netease/ad_probe/netease_ad_probe_page.dart', 'lib/features/music_platform/netease/ad_probe/netease_ad_probe_report.dart', 'test/netease_ad_probe181_test.dart', 'test/netease_ad_probe181_ui_test.dart', 'lib/features/music_platform/netease/netease_free_listen_entry.dart', 'lib/features/music_platform/netease/netease_reward_requests.dart', 'test/netease_free_listen180_test.dart', 'docs/fixes-2026-11-09-v1.0.82.md', 'docs/INSTALL-v1.0.82.md', 'docs/netease-ad-probe-v1.0.82.md', 'docs/validation-2026-11-09-v1.0.82.json', 'docs/build-inputs-v1.0.82.json', 'HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.82.md', 'AGENTS.md']:
        assert required in names,required
    old_required = {r['path'] for r in before['currentFiles'] if r['path'] not in {registrant,'SOURCE-SNAPSHOT.json'}|external
        and not r['path'].startswith(('android/build/','.impeccable/review/'))}
    assert old_required.issubset(names),sorted(old_required-names)
    for row in manifest:
        assert hashlib.sha256(archive.read(row['path'])).hexdigest()==row['sha256']
        assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['sha256']
    assert 'version: 1.0.82+103' in archive.read('pubspec.yaml').decode('utf8')
    assert archive.read('SOURCE-SNAPSHOT-v1.0.24-BASELINE.json')==baseline
STAGING.rename(TARGET)
with TARGET.open('rb') as stream:
    digest = hashlib.file_digest(stream,'sha256').hexdigest()
record = {'version':'1.0.82','androidVersionCode':103,'sourceZipName':TARGET.name,
    'sourceZipSize':TARGET.stat().st_size,'sourceZipSha256':digest,
    'sourceFileCount':len(manifest),'frozenEntryCount':len(manifest)+2,
    'zipCrcVerified':True,'allFrozenEntriesByteIdentical':True,
    'authorizedRetiredPathsExcluded':retired,'allOtherPreexistingSourcePathsPreserved':True,
    'signingMaterialIncluded':False,'buildCachesAndPrivateEvidenceExcluded':True,
    'publicSyntheticTlsTestKeyExplicitlyDocumented':True,
    'generatedOrPrivateQaExcluded':sorted(generated|{registrant}),
    'physicalRetainedDataUpgradePerformed':False,'continuous120FpsAccepted':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
for suffix,text in [('-source-verification.json',json.dumps(record,ensure_ascii=False,indent=2)+'\n'),
    ('-source.sha256',digest+'  '+TARGET.name+'\n'),
    ('-SHA256.txt',apk['sha256']+'  Mesting-Music-v1.0.82.apk\n'+digest+'  '+TARGET.name+'\n')]:
    path = ROOT/('release/Mesting-Music-v1.0.82'+suffix)
    assert not path.exists()
    with path.open('x',encoding='utf8') as stream:
        stream.write(text)
print(json.dumps({k:record[k] for k in ['sourceZipName','sourceZipSize','sourceZipSha256','sourceFileCount','zipCrcVerified']},indent=2))

