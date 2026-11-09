"""Count complete test files once and retain every earlier failed/stopped run."""
from pathlib import Path
from collections import Counter
import hashlib
import json
from summarize_tests import read_run

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

base = {name: read_run(OUT / f'{name}-complete-r2.jsonl')
        for name in ['beta', 'stable', 'navigation']}
for value in base.values():
    assert value['completeSuccess'] and not value['errors']
files = {path.replace('\\', '/').lower(): value
         for path, value in base['beta']['files'].items()}
for name in ['ui-reference-r2', 'ui-reference-final-r2']:
    run = read_run(OUT / f'{name}.jsonl')
    assert run['completeSuccess'] and not run['errors']
    files.update({path.replace('\\', '/').lower(): value
                  for path, value in run['files'].items()})
counts = Counter()
for value in files.values():
    counts.update(value)
base['beta'].update(counts=dict(counts), files=files)
assert 'No issues found!' in (OUT / 'analyze-final-r4.log').read_text('utf-8-sig')
helper = json.loads((OUT / 'helper-contract-check.json').read_text('utf-8'))
assert helper['passed'] and helper['synthetic'] and not helper['helperModified']
cenc = json.loads((ROOT / '.codex-artifacts/2026-11-06-release167/cenc-host-summary.json').read_text('utf-8'))
assert all(sha(ROOT / row['path']) == row['sha256'] for row in cenc['inputs'])
native = json.loads((ROOT / '.codex-artifacts/2026-11-06-release166/native-audio-history-input-match.json').read_text('utf-8'))
assert all(sha(ROOT / row['path']) == row['sha256'] for row in native)
images = sorted((OUT / 'ui').glob('*.png'))
assert len(images) == 8
review = {'images': [{'path': str(path.relative_to(OUT)), 'sha256': sha(path)} for path in images],
          'reviewedByAgent': True, 'fixtureOnly': True, 'physicalDevice': False,
          'widths': [390, 320], 'maxTextScale': 1.8,
          'reference': 'User-provided official Qishui screenshot; image/identity/counts not bundled',
          'lyricsSelectionSeekFollowAndBackVerified': True}
(OUT / 'ui-review.json').write_text(json.dumps(review, ensure_ascii=False, indent=2) + '\n', 'utf-8')
summary = {'version': '1.0.68', 'androidVersionCode': 89, 'passed': True, 'analysisIssues': 0,
           'analysisLog': 'analyze-final-r4.log',
           **{name: {'files': len(run['files']), 'passed': run['counts'].get('success', 0),
                    'skipped': run['counts'].get('skipped', 0), 'complete': True}
              for name, run in base.items()},
           'betaPerFile': files,
           'counting': 'Completed whole files replace earlier runs; no overlapping totals added',
           'initialFailuresAndStoppedRunRetained': True,
           'nativeAudio': {'passed': 14, 'historicalOnly': True, 'rerunOrAdded': False,
                           'inheritedFrom': '1.0.64 unchanged Media3 production and runner', 'inputs': native},
           'officialCencDecoder': {'passed': 10, 'historicalOnly': True, 'rerunOrAdded': False,
                                   'inheritedFrom': '1.0.67 unchanged Kotlin production and synthetic runner', 'inputs': cenc['inputs']},
           'helperPolicyCompatibility': helper, 'ui': review,
           'collaboratorCommits': ['454c10417ebdaeb8995162cb802465bb0628d300',
                                  'bb4b8bccb54693b20b98861aa26ae5fad427cf65'],
           'collaboratorPullRequest': 'https://github.com/Mesting42/mesting-music-flutter/pull/2',
           'collaboratorGitHubLogin': 'sudongx', 'mergedIntoLocalSourceOnly': True,
           'prior67Installed': 'user-reported in this chat, no new ADB readback',
           'physicalDeviceAccess': False, 'nasOrSignerServiceAccess': False,
           'realAccountAccess': False, 'officialPlaybackAcceptedIn68': False,
           'downloadHelperRouteNotYetSupported': '/luna/commerce/v2/check_download',
           'prior66QrAccountAndColdRestoreUserAccepted': True,
           'prior66NetEaseAutoSourceFullPlaybackUserAccepted': True,
           'phoneLoginRemoved': True, 'sms2156Resolved': False,
           'oldLogsReplayed': False, 'gitCommitted': False, 'gitPushed': False,
           'uploaded': False, 'published': False}
(OUT / 'host-check-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({name: summary[name] for name in base}, indent=2))
