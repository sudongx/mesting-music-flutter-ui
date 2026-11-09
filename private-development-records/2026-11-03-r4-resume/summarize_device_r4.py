"""Summarize only the authorized, bounded dual-profile R4 observations.

The source report contains scenario outcomes and counts, never account IDs,
song titles, raw device dumps, phase payloads or screenshots. Keep original
private observations intact, including failed HTTP ticks and recovery.
"""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
RESUME = Path(__file__).resolve().parent
DEVICE = RESUME / 'device-r4'
labels = {
    1: '首次覆盖安装恢复；分身未手动播放，主实例向后台分身切歌',
    2: '分身切歌，主实例后台接收',
    3: '双方回桌面，系统媒体下一首明确指向分身',
    4: '双方留在后台数分钟后，再次从系统媒体控件切歌',
    5: '再次覆盖同一候选；主实例从未播放，分身向后台主实例切歌',
    6: '主实例切歌，分身后台接收',
    7: '双方回桌面，系统媒体下一首明确指向主实例',
}
cases = []
for number, label in labels.items():
    record = json.loads((DEVICE / f'case-{number}.json').read_text('utf-8'))
    assert record['backgroundMatchedBeforeReceiverForeground']
    for sample in record['samples']:
        assert record['receiver'] not in sample['mestingFocusedUsers']
    last = {item['user']: item for item in record['samples'][-1]['sessions']}
    assert last[0]['metadataFingerprint'] == last[999]['metadataFingerprint']
    cases.append({'case': number, 'scenario': label, 'passed': True,
                  'observedWithinSeconds': record['elapsedSeconds'],
                  'matchedBeforeReceiverOpened': True})
captures = []
failures = []
for number in (1, 2, 3):
    directory = DEVICE / f'capture-{number}'
    state = json.loads((directory / 'capture-state.json').read_text('utf-8'))
    assert state['state'] == 'complete' and state['elapsedSeconds'] < 180
    captures.append({'capture': number, 'seconds': state['elapsedSeconds'],
                     'samples': state['samples'], 'stopped': True,
                     'rawLogcatPersisted': state['rawLogcatPersisted']})
    events = [json.loads(line) for line in (directory / 'phase-events.jsonl').read_text('utf-8').splitlines()]
    for event in events:
        if event['phase'] not in ('httpFailed', 'tickFailed', 'httpTimedOut',
                                  'applicationFailed', 'applicationTimedOut'):
            continue
        recovered = next((other for other in events
                          if other['pid'] == event['pid'] and other['phase'] == 'tickCompleted'
                          and other['captureElapsedSeconds'] > event['captureElapsedSeconds']), None)
        failures.append({'capture': number, 'phase': event['phase'],
                         'operation': event.get('operation'),
                         'captureElapsedSeconds': event['captureElapsedSeconds'],
                         'nextTickCompletedAfterSeconds': round(
                             recovered['captureElapsedSeconds'] - event['captureElapsedSeconds'], 3)
                         if recovered else None})
releases = json.loads((DEVICE / 'cold-lease-foreground-releases.json').read_text('utf-8'))
assert len(releases) == 2
for record in releases:
    user = record['foregroundProfile']
    assert record['sample']['mestingFocusedUsers'] == [user]
    assert all(session['playState'] == 'NONE' for session in record['sample']['sessions'])
    assert record['foregroundAudioServiceByProfile'][str(user)] is False
    assert record['foregroundAudioServiceByProfile'][str(999 if user == 0 else 0)] is True
installation = json.loads((DEVICE / 'installation.json').read_text('utf-8'))
assert installation['sha256Matched'] and not installation['clearDataRequested']
summary = {
    'version': '1.0.45', 'androidVersionCode': 66, 'candidate': 'R4',
    'authorizedScope': 'Continuous same-scope candidate installation and direct dual-app track changes; whitelisted capture <=180 seconds per round.',
    'installedApkSha256': installation['deviceSha256'],
    'replacementInstallationsWithDigestReadback': 2,
    'clearDataRequested': False, 'trackChangeCasesPassed': len(cases),
    'trackChangeCasesFailed': 0, 'cases': cases, 'captures': captures,
    'totalSamplesAcrossSeparateCaptures': sum(item['samples'] for item in captures),
    'allCapturesStopped': True, 'leaseForegroundReleaseChecksPassed': 2,
    'coldRestoreNoPlayingBeforeManualTrackChange': True,
    'transientFailuresRetained': failures,
    'mediaFocusInterferenceExcludedPlaybackPauseAcceptance': True,
    'scopeRepairVerified': 'First restored never-played rooms and bidirectional track changes in the tested same-phone dual-profile environment.',
    'allBackgroundBehaviorVerified': False,
    'lockScreenVerified': False, 'separateDevicesVerified': False,
    'longTermPowerAndVendorPolicyVerified': False,
    'exitRoomOnDeviceTested': False,
    'unrelatedAccountWritesPerformed': False,
    'historicalOfficialProfileTotalFixed': False,
    'october683MinutesRecovered': False,
    'finalUi': 'Main instance returned to foreground; room and accounts retained.',
}
(RESUME / 'device-r4-summary.json').write_text(
    json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: summary[key] for key in (
    'trackChangeCasesPassed', 'trackChangeCasesFailed', 'captures',
    'leaseForegroundReleaseChecksPassed', 'transientFailuresRetained')}, ensure_ascii=False, indent=2))
