"""Close the verified local performance delivery without changing Git refs."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib, json, zipfile
from check_preservation174 import ROOT, OUT, git, record, sha, verify

target = OUT / 'after.json'
assert not target.exists(), 'Never rewrite a finalized receipt'
before, build, changed = verify()
expected = set(json.loads((OUT / 'changed-existing-expected.json').read_text('utf8'))) | {'AGENTS.md'}
assert set(changed) == expected, sorted(set(changed) ^ expected)
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.74-verification.json').read_text('utf8'))
source = json.loads((ROOT / 'release/Mesting-Music-v1.0.74-source-verification.json').read_text('utf8'))
host = json.loads((OUT / 'host-check-summary.json').read_text('utf8'))
perf = json.loads((ROOT / 'docs/performance-2026-11-07-v1.0.74.json').read_text('utf8'))
validation = json.loads((ROOT / 'docs/validation-2026-11-07-v1.0.74.json').read_text('utf8'))
assert host['passed'] and host['analysisIssues'] == 0
assert apk['sha256'] == sha(ROOT / 'release' / apk['file'])
assert apk['originalSignature'] and apk['v2Signature'] and apk['v3Signature']
assert apk['physicalUpgradeTestPerformed'] and apk['installedPublicApkSha256Matched']
assert source['sourceZipSha256'] == sha(ROOT / source['sourceZipName'])
assert source['zipCrcVerified'] and source['allFrozenEntriesByteIdentical']
assert perf['after']['status'] == 'completed' and perf['after']['platformRestored'] is True
assert len(perf['sodaSeparate']['newScenarioIds']) == 8
assert validation['version'] == '1.0.74'
hash_path = ROOT / 'release/Mesting-Music-v1.0.74-SHA256.txt'
assert not hash_path.exists()
hash_path.write_text(
    f"{apk['sha256']}  {apk['file']}\n{source['sourceZipSha256']}  {source['sourceZipName']}\n\n"
    '1.0.74 / Android code95; original signing certificate retained.\n'
    'Authorized retained-data upgrade and on-device performance observations recorded in validation74.\n'
    'No helper deployment or remote publication; full media/account/DSP acceptance remains separate.\n', 'utf8')
selected = sorted({p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf8').split('\0')
                   if p and not p.startswith('android/build/') and (ROOT / p).is_file()})
with ThreadPoolExecutor(max_workers=6) as pool:
    current = list(pool.map(record, selected))
assert {r['path'] for r in before['currentFiles']}.issubset(selected)
added = sorted(set(selected) - {r['path'] for r in before['currentFiles']})
assert all(not p.startswith(('.codex-artifacts/', '.git/')) for p in added)
with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['version'] == '1.0.74' and snapshot['androidVersionCode'] == 95
    assert snapshot['apkSha256'] == apk['sha256']
    assert len(snapshot['files']) == source['sourceFileCount']
    for row in snapshot['files']:
        assert sha(ROOT / row['path']) == row['sha256'], row['path']
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256'], row['path']
    assert archive.read('AGENTS.md').endswith((OUT / 'AGENTS-before.bin').read_bytes())
new_frozen = [record('release/' + apk['file']), record(source['sourceZipName'])]
frozen = [*before['frozenArtifacts'], *new_frozen]
assert len(frozen) == len({r['path'] for r in frozen}) == 88
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(), 'phase': 'after', 'version': '1.0.74', 'androidVersionCode': 95,
    **{key: before[key] for key in ('head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256')},
    'indexEmpty': True, 'historicalDirtyWorktreeRetained': True,
    'frozenArtifacts': frozen, 'frozenArtifactCount': len(frozen), 'frozenArtifactIssues': [],
    'oldFrozenArtifactsCheckedUnchanged': len(before['frozenArtifacts']), 'release73AndOlderFrozenArtifactsRewritten': False,
    'productFiles': build['files'], 'productInputsChecked': len(build['files']), 'productInputIssues': [],
    'buildInputReceipt': 'build-input-final.json', 'buildInputReceiptSha256': sha(OUT / 'build-input-final.json'),
    'currentFiles': current, 'currentFileCount': len(current), 'existingChangedFiles': changed, 'addedFiles': added,
    'allPreexistingPathsPreserved': True, 'previousAgentsSuffixPreserved': True,
    'sourceFileCount': source['sourceFileCount'], 'sourceFrozenEntryCount': source['frozenEntryCount'],
    'allSourceZipEntriesAndCurrentFilesVerified': True,
    'hostChecks': {name: host[name] for name in ('beta', 'stable', 'navigation', 'analysisIssues')},
    'uiImagesViewed': len(host['ui']['images']), 'finalUiImagesByteIdenticalToViewedR3': True,
    'nativeResultsInheritedOnlyWithMatchingInputs': True, 'actualApkOriginalSignatureAndNativePackagingVerified': True,
    'authorizedPhonePerformanceAndRetainedDataUpgrade': True,
    'privateAccountFilesOrTokensExtracted': False, 'agentInitiatedSignerMediaResolution': False,
    'helperSourceOrDeploymentModified': False, 'cloudHistoryWriteAndCoverAcceptedByServer': False,
    'actual301RootCauseConfirmed': False, 'actualVipFullPlaybackAcceptedThisRelease': False,
    'performanceSamplingCompletedAfterNativeCrashResume': True,
    'continuousCrashFreeDeviceAcceptance': False,
    'overallPerformanceObjectiveAccepted': False,
    'measuredRasterRegressionRequiresLaterReview': True,
    'allThreePlatformTabDiagnosticStagesPassed': False,
    'samplingIssuesAwaitUserConfirmationBeforeFixes': True,
    'oldMestingAccountSourceRemovalRequestedButNotImplemented': True,
    'prior66QrReopenAndNetEaseFullPlaybackUserAccepted': True, 'prior71BasicPlaybackUserAccepted': True,
    'prior72AccountSigningOptInActuallyUsedThenHttp400Reported': True,
    'oldAcceptedOrUnknownRecordsReplayed': False, 'pendingCodingBuildInstallUploadTasks': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Read the74 handoff, validation and performance evidence first; verify after.json read-only. Preserve dirty source and frozen deliveries. Follow current user authorization; do not automatically access a future device, deploy the helper, rebuild frozen artifacts or publish.'
}
target.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({k: receipt[k] for k in ['version', 'frozenArtifactCount', 'oldFrozenArtifactsCheckedUnchanged', 'productInputsChecked', 'currentFileCount', 'sourceFileCount', 'hostChecks']}, ensure_ascii=False, indent=2))
