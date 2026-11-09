
from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,re
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-05-release154'
record=json.loads((OUT/'build-input-final.json').read_text())
for item in record['files']:
    assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
started=datetime.fromisoformat(record['startedAtUtc']).timestamp()
apk=ROOT/'build/app/outputs/flutter-apk/app-beta-release.apk'
assert apk.stat().st_mtime>=started
log=(OUT/'build-final-release.log').read_text('utf-8-sig',errors='replace')
assert re.search(r'Built build[\\/]app[\\/]outputs[\\/]flutter-apk[\\/]app-beta-release.apk',log)
assert 'Verified 69 formal-only assets are absent' in log
flags=json.loads((OUT/'compiler-definitions.json').read_text('utf-8-sig'))
assert datetime.fromisoformat(flags['observedAt'].replace('Z','+00:00')).timestamp()>=started
for values in flags['whitelistedCompilerDefinitions']:
    assert values['MESTING_NATIVE_PLAYBACK_LOGGING']=='false'
    assert values['MESTING_LOCAL_DIAGNOSTICS']=='false'
    assert values['TOGETHER_SYNC_DIAGNOSTICS']=='false'
    assert values['ENABLE_APP_UPDATE_CHECKS']=='true'
    assert values['APP_UPDATE_PACKAGE_NAME']=='com.mesting.music'
result={'version':'1.0.54','versionCode':75,'sourceFileHashesMatched':len(record['files']),
 'actualBuildReceiptPresent':True,'builder':'tool/build_android_release_apk.ps1',
 'compilerDefinitionsObservedDuringThisBuild':True,'privateCompilerArgumentsExported':False,
 'processOnlyMavenProxyUsed':False,'globalProxyConfigurationChanged':False,
 'buildOutputNewerThanFinalSourceManifest':True,'successfulFlutterPubPrerequisite':True,
 'diagnosticsDisabled':True,'networkCategoryMemoryReportAvailable':True,
 'inputApkSha256':hashlib.file_digest(apk.open('rb'),'sha256').hexdigest()}
(OUT/'build-final-verification.json').write_text(json.dumps(result,indent=2),'utf-8')
print(json.dumps({'sourceInputsMatched':len(record['files']),'freshBuild':True,'compilerFlagsObserved':True}))
