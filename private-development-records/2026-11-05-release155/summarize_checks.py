"""Summarize fresh whole-file results and explicitly scoped inherited checks."""
from pathlib import Path
import collections
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
def parse(name):
    suites, tests, counts, complete = {}, {}, {}, False
    for line in (OUT / name).read_text('utf-8-sig', errors='replace').splitlines():
        try: event = json.loads(line)
        except ValueError: continue
        if not isinstance(event, dict): continue
        kind = event.get('type')
        if kind == 'suite': suites[event['suite']['id']] = event['suite']['path'].replace('\\', '/')
        elif kind == 'testStart': tests[event['test']['id']] = event['test']
        elif kind == 'testDone' and not event.get('hidden'):
            path = suites[tests[event['testID']]['suiteID']]
            counts.setdefault(path, collections.Counter())['skipped' if event.get('skipped') else event['result']] += 1
        elif kind == 'done': complete = event.get('success', False)
    assert complete and counts and all(not (row.get('failure') or row.get('error')) for row in counts.values()), name
    totals = collections.Counter()
    for row in counts.values(): totals.update(row)
    return {'completeAndSuccessful': True, 'perFile': {p:dict(c) for p,c in counts.items()}, 'counts':dict(totals), 'files':len(counts)}

exits = json.loads((OUT / 'check-exits.json').read_text('utf-8-sig'))
assert set(exits) == {'beta', 'stable', 'navigation', 'analysis'} and not any(exits.values()), exits
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text('utf-8-sig')
beta, stable, navigation = [parse(name) for name in ['beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl']]
if (OUT / 'final-regressions.jsonl').exists():
    rerun = parse('final-regressions.jsonl')
    beta['completeFileRerunProvenance'] = {}
    for path, counts in rerun['perFile'].items():
        assert path in beta['perFile'], path
        beta['perFile'][path] = counts
        beta['completeFileRerunProvenance'][path] = 'final-regressions.jsonl'
    totals = collections.Counter()
    for row in beta['perFile'].values(): totals.update(row)
    beta['counts'] = dict(totals)
assert beta['files'] == len(json.loads((OUT / 'beta-files.json').read_text('utf-8'))) == 185
assert stable['counts'] == {'success':63} and navigation['counts'] == {'success':55}
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
inherited = [p for p in before['source'] if p['path'].startswith(('android/', 'third_party/', 'lib/features/auth/presentation/companion_motion.dart', 'lib/features/auth/presentation/beta_companion_stage.dart'))]
for item in inherited:
    assert hashlib.sha256((ROOT / item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
sdk = [p for p in inherited if p['path'].startswith('third_party/ring_download_sdk/')]
assert len(sdk) == 242
assert hashlib.sha256((ROOT / 'pubspec.lock').read_bytes()).hexdigest() == before['lockSha256']
prior = json.loads((ROOT / '.codex-artifacts/2026-11-05-release154/host-check-summary.json').read_text('utf-8'))
for item in [*prior['nativeFresh']['inputs'], *prior['storageFamilyFresh']['inputs']]:
    assert hashlib.sha256((ROOT / item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
images = sorted((OUT / 'ui-final').glob('*.png'))
assert len(images) == 24, len(images)
result = {
    'beta-complete.jsonl': beta, 'stable-complete.jsonl': stable, 'search-back-player.jsonl': navigation,
    'analysisPassed': True, 'analysisIssues': 0, 'finalHostImages': len(images),
    'new155Cases': {p:c for p,c in beta['perFile'].items() if '/release_155_' in p},
    'networkReproducedBeforeFix': True, 'realLoopbackTlsFixturesOnly': True,
    'wrongHostnameCertificateRejected': True, 'systemProxyConnectVerified': True,
    'inheritedNativeJvm': {'fromVersion':'1.0.54', 'background':16, 'systemHttp':13, 'credentialFamily':6, 'totalPassed':35, 'rerunFor155':False},
    'inheritedRustHost': {'fromVersion':'1.0.54', 'passed':136, 'ignoredExternalNetworkCases':6, 'rerunFor155':False},
    'sdkHistoricalOnly': {'passed':563, 'sourceFilesVerified':242, 'rerunFor155':False},
    'unchangedNativeThirdPartyAndMotionInputsVerified': len(inherited),
    'inheritedWelcomeMotion': {'scheduledFrames':193, 'priorContinuousFrameDemand':720, 'fromVersion':'1.0.53', 'physicalGpuMeasured':False},
    'pubspecLockUnchangedFrom54': True, 'physicalDeviceAcceptance':False,
    'realAccountAccess':False, 'backendAccess':False, 'uploaded':False, 'published':False,
}
(OUT / 'host-check-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'beta':beta['counts'], 'betaFiles':beta['files'], 'stable':stable['counts'], 'navigation':navigation['counts'], 'analysisIssues':0, 'hostImages':len(images), 'inheritedInputFiles':len(inherited)}, indent=2))
