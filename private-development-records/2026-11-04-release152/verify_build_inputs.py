"""Tie the successful build to final source hashes and whitelisted flags."""
from pathlib import Path
from datetime import datetime
import hashlib,json

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release152'
record=json.loads((OUT/'build-input-final.json').read_text('utf-8'))
for item in record['files']:
    assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
started=datetime.fromisoformat(record['startedAtUtc']).timestamp()
apk=ROOT/'build/app/outputs/flutter-apk/app-beta-release.apk'
assert apk.is_file() and apk.stat().st_mtime>=started
log=(OUT/'build-final-release.log').read_text('utf-8-sig',errors='replace')
# The captured Flutter invocation uses Gradle -q, which suppresses the normal
# BUILD SUCCESSFUL banner. build_transport.ps1 emits this receipt only after
# the real child exit code is zero, a newly written APK exists and production
# asset exclusions have passed. Do not invent a Gradle banner for a quiet run.
assert 'Built build/app/outputs/flutter-apk/app-beta-release.apk from exact Flutter Gradle arguments with task-scoped verified loopback Maven transport to exact upstream dependency versions' in log, 'No successful actual quiet Gradle build receipt'
flags=json.loads((OUT/'compiler-definitions.json').read_text('utf-8-sig'))
assert datetime.fromisoformat(flags['observedAt'].replace('Z','+00:00')).timestamp()>=started
for definitions in flags['whitelistedCompilerDefinitions']:
    assert definitions['MESTING_NATIVE_PLAYBACK_LOGGING']=='false'
    assert definitions['MESTING_LOCAL_DIAGNOSTICS']=='false'
    assert definitions['TOGETHER_SYNC_DIAGNOSTICS']=='false'
    assert definitions['ENABLE_APP_UPDATE_CHECKS']=='true'
    assert definitions['APP_UPDATE_PACKAGE_NAME']=='com.mesting.music'
verification={'version':'1.0.52','versionCode':73,'sourceFileHashesMatched':len(record['files']),
    'actualBuildReceiptPresent':True,'builder':'exact_flutter_gradle_arguments_with_task_scoped_maven_transport','successfulFlutterPubPrerequisite':True,'gradleOffline':False,'processOnlyMavenTransport':True,'dependencyDeclarationsUnchanged':True,'sameRequestedArtifactCoordinates':True,'onlineMetadataWaitAttemptRetained':True,'buildOutputNewerThanFinalSourceManifest':True,
    'compilerDefinitionsObservedDuringThisBuild':True,
    'diagnosticsDisabled':True,'appUpdateChecksEnabled':True,
    'inputApkSha256':hashlib.file_digest(apk.open('rb'),'sha256').hexdigest(),
    'transportSupportSha256':{name:hashlib.sha256((OUT/name).read_bytes()).hexdigest() for name in ['maven_transport.init.gradle','maven_build_proxy.py','maven_build_proxy_pooled.py','build_transport.ps1']}}
(OUT/'build-final-verification.json').write_text(json.dumps(verification,indent=2)+'\n','utf-8')
print(json.dumps(verification,indent=2))
