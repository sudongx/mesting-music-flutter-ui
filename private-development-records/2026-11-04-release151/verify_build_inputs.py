"""Tie the successful build to final source hashes and whitelisted flags."""
from pathlib import Path
from datetime import datetime
import hashlib,json

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release151'
record=json.loads((OUT/'build-input-final.json').read_text('utf-8'))
for item in record['files']:
    assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
started=datetime.fromisoformat(record['startedAtUtc']).timestamp()
apk=ROOT/'build/app/outputs/flutter-apk/app-beta-release.apk'
assert apk.is_file() and apk.stat().st_mtime>=started
log=(OUT/'build-final-release.log').read_text('utf-8-sig',errors='replace')
assert 'Built build' in log and 'app-beta-release.apk' in log, 'No successful actual build receipt'
flags=json.loads((OUT/'compiler-definitions.json').read_text('utf-8-sig'))
assert datetime.fromisoformat(flags['observedAt'].replace('Z','+00:00')).timestamp()>=started
for definitions in flags['whitelistedCompilerDefinitions']:
    assert definitions['MESTING_NATIVE_PLAYBACK_LOGGING']=='false'
    assert definitions['MESTING_LOCAL_DIAGNOSTICS']=='false'
    assert definitions['TOGETHER_SYNC_DIAGNOSTICS']=='false'
    assert definitions['ENABLE_APP_UPDATE_CHECKS']=='true'
    assert definitions['APP_UPDATE_PACKAGE_NAME']=='com.mesting.music'
verification={'version':'1.0.51','versionCode':72,'sourceFileHashesMatched':len(record['files']),
    'actualBuildReceiptPresent':True,'buildOutputNewerThanFinalSourceManifest':True,
    'compilerDefinitionsObservedDuringThisBuild':True,
    'diagnosticsDisabled':True,'appUpdateChecksEnabled':True,
    'inputApkSha256':hashlib.file_digest(apk.open('rb'),'sha256').hexdigest()}
(OUT/'build-final-verification.json').write_text(json.dumps(verification,indent=2)+'\n','utf-8')
print(json.dumps(verification,indent=2))
