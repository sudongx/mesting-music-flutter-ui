from pathlib import Path
from collections import Counter
from datetime import datetime, timezone, timedelta
import hashlib, json, subprocess, zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-30-release122'
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def write(p, j): p.write_text(json.dumps(j, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
def digest(p):
    with p.open('rb') as f: return hashlib.file_digest(f, 'sha256').hexdigest()
def tests(name):
    events = []
    for line in (out/name).read_text(encoding='utf-8-sig').splitlines():
        try: events.append(json.loads(line))
        except ValueError: pass
    assert events[-1].get('type') == 'done' and events[-1].get('success') is True, name
    assert not any(e.get('type') == 'error' for e in events), name
    suites = {e['suite']['id']: e['suite']['path'] for e in events if e.get('type') == 'suite'}
    started = {e['test']['id']: e['test'] for e in events if e.get('type') == 'testStart'}
    counts = Counter()
    for e in events:
        if e.get('type') == 'testDone' and e.get('result') == 'success' and not e.get('hidden') and not e.get('skipped'):
            counts[Path(suites[started[e['testID']]['suiteID']]).relative_to(root).as_posix()] += 1
    return {'passed': sum(counts.values()), 'files': sorted(counts), 'countsByFile': dict(sorted(counts.items())), 'success': True, 'log': (out/name).relative_to(root).as_posix()}

beta, stable, back = tests('beta-regression.jsonl'), tests('stable-final.jsonl'), tests('android-back.jsonl')
assert beta['passed'] == 1123 and len(beta['files']) == 60
assert stable['passed'] == 19 and back['passed'] == 1
assert 'No issues found!' in (out/'analyze-final.log').read_text(encoding='utf-8-sig')
assert 'NATIVE_TRACE_TESTS_PASSED=11' in (out/'native-trace-tests-final.log').read_text(encoding='utf-8-sig')
visual=read(out/'visual/comparison.json')
assert visual['textRectsEqual'] and visual['pixelsOutsideResizedLikedCoverEqual']
apk=read(root/'release/Mesting-Music-v1.0.22-verification.json')
assert apk['androidVersionCode'] == 43 and digest(root/'release'/apk['file']) == apk['sha256']
previous=read(root/'release/Mesting-Music-v1.0.21-verification.json')
assert previous['androidVersionCode'] == 42 and previous['packageName'] == apk['packageName']
assert previous['certificateSha256'] == apk['certificateSha256']
assert apk['privateDiagnosticsDisabled'] and apk['integrationTestPluginAbsent']
apk.update(localDiagnosticsCompileFlag=False, localDiagnosticLogSentinelAbsent=True,
           physicalUpgradeTestPerformed=False, userChoseSelfInstallation=True)
write(root/'release/Mesting-Music-v1.0.22-verification.json',apk)
notes=read(out/'local-apk-notes-verification.json')
assert notes['versionCode'] == 43 and notes['notesCount'] == 4
frozen=read(out/'frozen-before.json')
for name,item in frozen.items():
    p=root/name
    assert p.stat().st_size == item['size'] and digest(p)==item['sha256'],name
lock=digest(root/'pubspec.lock')
assert lock=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
assert head=='8763551c0cc39c1c25f60e42fd49624f58d91a89'
record={
 'version':'1.0.22','androidVersionCode':43,'date':'2026-10-30',
 'preparedAt':datetime.now(timezone(timedelta(hours=8))).isoformat(),
 'status':'original_signed_candidate_ready_pending_device_acceptance','baseCommit':head,
 'betaRegression':beta,'stableRegression':stable,'androidBackRegistration':back,
 'analysis':{'issues':0,'log':(out/'analyze-final.log').relative_to(root).as_posix()},
 'hostProfileVerification':{
  'passed':9,'includedInBetaRegression':True,'signedInFixtureFavorites':674,'fixturePlaylists':5,
  'fixtureCreatedPlaylists':2,'fixtureSavedPlaylists':2,'levelAndFullNeteaseNavigation':True,
  'realPlatformAccountUsed':False,'platformNetworkCallsMocked':True,'imagesBundled':True,
  'normalRapidAndReverseScrolling':True,'repeatedLibraryEntryAndReturnCycles':12,
  'libraryRouteInHostHarnessIsEntryStubNotProductionLibraryPerformanceTest':True,
  'offscreenHeadingAndQuickSliverPaintExtentZero':True,
  'unrelatedFavoriteMetadataDoesNotRebuildAvatarOrGlass':True,
  'countChangesStillUpdateVisibleCounts':True,'likedCoverLogicalDecodeSize':64,
  'scrollBeginningOnQuickButtonCancelsAction':True,
  'visualComparison':visual,
  'visualFontSubstitution':True,'androidGlyphsAndImpellerOpticsVerified':False,
 },
 'nativeTraceParser':{'passed':11,'runner':'tool/test_native_crash_trace.py','deviceRequired':False,
  'schema':'AOSP android16-release debuggerd/proto/tombstone.proto','maxScanBytes':4194304,
  'maxScanSecondsPerTrace':1,'maxThreadCandidates':128,'maxExportedFrames':24,'latestNativeTracesRead':2,
  'backgroundWorker':True,'boundedQueue':True,'activityReplyTeardownGuard':True,
  'unknownVendorFieldsSkipped':True,'rawTracePersisted':False,'arbitraryPrivateFieldsExported':False},
 'dartDiagnosticBoundary':{'passed':5,'includedInBetaRegression':True,'oldExitReportCompatible':True,
  'secondAllowlist':True,'historicalVersionStillUnknown':True},
 'performance':{'nativeSamplingPerformed':False,'nativeFrameQuantiles':None,
  'realDeviceReproductionPerformed':False,'continuous120FpsClaimed':False,
  'scope':'host layout/interaction/resource contracts only; My native scrolling and crash acceptance pending',
  'previousV121GuestBenchmarkReusedAsV122Evidence':False},
 'crashInvestigation':{
  'inputVersion':'1.0.21','inputVersionEvidence':'user report; not device-read in this round',
  'systemRecordVersionKnown':False,'recordsSource':'user-copied Android history JSON',
  'localExitTimes':['2026-10-30 19:58:05.735 +08:00','2026-10-30 20:02:57.147 +08:00','2026-10-30 20:04:57.696 +08:00'],
  'classification':'native_crash','status':11,'nativeBacktraceProvided':False,
  'sameAdrenoRootCauseAsPriorVersionsProven':False,'oomProven':False,'permanentFixClaimed':False,
  'videoObserved':True,'videoDurationSeconds':24,'recordingFps':30,'recordingFpsIsNotAppFps':True,
  'videoAndRawUserLogsIncludedInSource':False},
 'productionApkNotesReader':notes,'apk':apk,
 'realDeviceFunctionalVerification':{'performed':False,'formalFinalApkInstalledOnPhone':False,
  'candidateApkInstalledOnPhone':False,'reason':'user cannot connect now; approved local candidate first'},
 'preservedArtifactsAndLock':{'oldFrozenFiles':len(frozen),'allByteIdentical':True,'lockSha256':lock},
 'sourceSnapshotVerification':'release/Mesting-Music-v1.0.22-source-verification.json',
 'sourceVerificationSeparateToAvoidSelfReference':True,
 'deviceAccess':False,'adbUsed':False,'realAccountReadOnlyViaApp':False,'realAccountAccess':False,
 'backendAccess':False,'uploaded':False,'published':False,'gitCommitted':False,'gitPushed':False,
 'candidateInstallationAndRetestPendingUser':True,
}
write(root/'docs/validation-2026-10-30-v1.0.22.json',record)
print(json.dumps({'recordsWritten':True,'beta':beta['passed'],'kotlin':11,'oldFrozenFilesPreserved':len(frozen),'deviceAccess':False}))

