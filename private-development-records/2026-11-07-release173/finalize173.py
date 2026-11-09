"""Close local delivery with preservation, input and source-archive receipts."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import json
import zipfile

from check_preservation173 import ROOT, OUT, git, record, sha, verify

target = OUT / 'after.json'
assert not target.exists(), 'Never rewrite a finalized receipt'
before, build, changed = verify()
expected_changed = {
    'AGENTS.md', 'assets/data/release-notes.json', 'pubspec.yaml',
    'lib/app/mesting_music_app.dart', 'lib/app/system_back_coordinator.dart',
    'lib/core/network/music_network_diagnostics.dart',
    'lib/features/experience/presentation/beta_music_shell.dart',
    *{'lib/features/music_platform/qishui/' + name + '.dart' for name in [
        'qishui_api', 'qishui_lyrics_page', 'qishui_models', 'qishui_now_playing',
        'qishui_official_audio_cache', 'qishui_pages', 'qishui_playback_media',
        'qishui_playback_recovery', 'qishui_playlist_page', 'qishui_repository',
        'qishui_request_signer', 'qishui_web_routes']},
    'test/qishui_appearance172_ui_test.dart', 'test/qishui_ui168_test.dart',
}
assert set(changed) == expected_changed, sorted(set(changed) ^ expected_changed)
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.73-verification.json').read_text('utf-8'))
source = json.loads((ROOT / 'release/Mesting-Music-v1.0.73-source-verification.json').read_text('utf-8'))
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
assert host['passed'] and host['analysisIssues'] == 0
assert apk['sha256'] == sha(ROOT / 'release' / apk['file'])
assert source['sourceZipSha256'] == sha(ROOT / source['sourceZipName'])
assert source['zipCrcVerified'] and source['allFrozenEntriesByteIdentical']
assert apk['originalSignature'] and apk['v2Signature'] and apk['v3Signature']

# The two new immutable deliverables get independent external hashes. Their
# verification metadata stays outside the ZIP to avoid circular references.
hash_text = (
    f"{apk['sha256']}  {apk['file']}\n"
    f"{source['sourceZipSha256']}  {source['sourceZipName']}\n"
    '\n1.0.73 / Android code 94; original signing certificate retained.\n'
    'Local validation only; no device/account/NAS/deployment/publication acceptance.\n'
)
hash_path = ROOT / 'release/Mesting-Music-v1.0.73-SHA256.txt'
assert not hash_path.exists()
hash_path.write_text(hash_text, 'utf-8')

selected = sorted({p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')
                   if p and not p.startswith('android/build/') and (ROOT / p).is_file()})
with ThreadPoolExecutor(max_workers=6) as pool:
    current = list(pool.map(record, selected))
old_paths = {r['path'] for r in before['currentFiles']}
assert old_paths.issubset(set(selected))
added = sorted(set(selected) - old_paths)
assert all(not p.startswith(('.codex-artifacts/', '.git/')) for p in added)

# Reopen the final delivery itself and compare every manifest entry with both
# the archive and current dirty source, including the new handoff and docs.
with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['version'] == '1.0.73' and snapshot['androidVersionCode'] == 94
    assert snapshot['apkSha256'] == apk['sha256']
    assert len(snapshot['files']) == source['sourceFileCount']
    for row in snapshot['files']:
        assert sha(ROOT / row['path']) == row['sha256'], row['path']
        import hashlib
        assert hashlib.sha256(archive.read(row['path'])).hexdigest() == row['sha256'], row['path']
    assert archive.read('AGENTS.md').endswith((OUT / 'AGENTS-before.bin').read_bytes())

new_frozen = [record('release/' + apk['file']), record(source['sourceZipName'])]
frozen = [*before['frozenArtifacts'], *new_frozen]
assert len(frozen) == 86 and len({r['path'] for r in frozen}) == 86
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(),
    'phase': 'after', 'version': '1.0.73', 'androidVersionCode': 94,
    **{key: before[key] for key in ('head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256')},
    'indexEmpty': True, 'historicalDirtyWorktreeRetained': True,
    'frozenArtifacts': frozen, 'frozenArtifactCount': len(frozen), 'frozenArtifactIssues': [],
    'oldFrozenArtifactsCheckedUnchanged': len(before['frozenArtifacts']),
    'release72FrozenSourceAndMetadataRewritten': False,
    'productFiles': build['files'], 'productInputsChecked': len(build['files']), 'productInputIssues': [],
    'buildInputReceipt': 'build-input-final.json', 'buildInputReceiptSha256': sha(OUT / 'build-input-final.json'),
    'currentFiles': current, 'currentFileCount': len(current),
    'existingChangedFiles': changed, 'addedFiles': added,
    'allPreexistingPathsPreserved': True,
    'previousAgentsSuffixPreserved': True,
    'sourceFileCount': source['sourceFileCount'], 'sourceFrozenEntryCount': source['frozenEntryCount'],
    'allSourceZipEntriesAndCurrentFilesVerified': True,
    'hostChecks': {name: host[name] for name in ('beta', 'stable', 'navigation', 'analysisIssues')},
    'uiImagesViewed': len(host['ui']['images']),
    'nativeResultsInheritedOnlyWithMatchingInputs': True,
    'actualApkOriginalSignatureAndNativePackagingVerified': True,
    'prior66QrAndReopenAndNetEaseFullPlaybackUserAccepted': True,
    'prior71BasicPlaybackUserAccepted': True,
    'prior72AccountSigningOptInActuallyUsedThenHttp400Reported': True,
    'phoneAdbDeviceOrRealAccountAccess': False,
    'realNasOrSignerNetworkRequests': False,
    'helperSourceOrDeploymentModified': False,
    'cloudSearchHistoryAndCoverServerAcceptanceVerified': False,
    'imageXEmptyRegionAndGrantCompatibilityVerifiedLive': False,
    'vipFullPlayback301CauseOrPhysical73AcceptanceVerified': False,
    'oldAcceptedOrUnknownRecordsReplayed': False,
    'pendingCodingBuildInstallUploadTasks': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Read the 1.0.73 handoff and AGENTS, verify this receipt read-only and report before continuing. Preserve all frozen deliveries and the dirty tree; do not infer device, account, NAS/helper deployment, publication or Git cleanup authorization.',
}
(OUT / 'git-status-after.txt').write_bytes(git('status', '--short'))
target.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({k: receipt[k] for k in [
    'version', 'androidVersionCode', 'frozenArtifactCount',
    'oldFrozenArtifactsCheckedUnchanged', 'productInputsChecked', 'currentFileCount',
    'sourceFileCount', 'sourceFrozenEntryCount', 'allPreexistingPathsPreserved',
    'allSourceZipEntriesAndCurrentFilesVerified', 'hostChecks', 'uiImagesViewed',
    'indexEmpty', 'phoneAdbDeviceOrRealAccountAccess', 'realNasOrSignerNetworkRequests']},
    ensure_ascii=False, indent=2))
