"""Paired stages of fresh75/core and76/core, including separately verified Tabs.

The threshold and matching rule do not depend on the observed improvement.
New menu stages have no75 Flutter baseline and are reported separately.
"""
from collections import Counter
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def read(name):
    path = OUT / 'device' / name
    return json.loads(path.read_text('utf8')), hashlib.sha256(path.read_bytes()).hexdigest()

def stats(samples, hz=120):
    result = {'frames': len(samples)}
    for key in ['build', 'raster']:
        times = sorted(s[key+'Us']/1000 for s in samples)
        for suffix, p in [('P50Ms', .50), ('P90Ms', .90), ('P95Ms', .95), ('P99Ms', .99)]:
            result[key+suffix] = round(times[int((len(times)-1)*p)], 3) if times else None
        for suffix, budget in [('OverDisplayBudgetPercent', 1000/hz), ('Over16_67Percent', 16.667)]:
            result[key+suffix] = round(100*sum(t>budget for t in times)/len(times), 3) if times else None
    return result

def summary(report):
    s = report['session']
    records = s['records']
    return {'environment': s['environment'], 'status': s['status'],
        'startedAt': s['startedAt'], 'updatedAt': s['updatedAt'],
        'scenarios': len(s['scenarioManifest']), 'records': len(records),
        'statuses': dict(Counter(r['status'] for r in records)),
        'frames': sum(len(seg['samples']) for seg in report['segments']),
        'platformRestored': s.get('platformRestored'),
        'failures': [r for r in records if r['status']=='failed'],
        'skips': [{k: r.get(k) for k in ['scenario', 'phase', 'reason']} for r in records if r['status']=='skipped']}

def segments(report):
    passed = {(r['scenario'], r['phase']) for r in report['session']['records'] if r['status']=='passed'}
    return {(s['environment']['scenario'], s['environment']['phase']): s for s in report['segments']
        if (s['environment']['scenario'], s['environment']['phase']) in passed and len(s['samples'])>=25}

before, before_hash = read('baseline75-core-report.json')
after, after_hash = read('after76-core-report.json')
assert before['session']['environment']['appVersion']=='1.0.75'
assert after['session']['environment']['appVersion']=='1.0.76'
assert after['session']['status']=='completed'
assert before['session']['originalPlatform']==after['session']['originalPlatform']
a,b = segments(before), segments(after)
keys = sorted(k for k in a.keys() & b.keys() if k[1]!='pages')
paired = [{'scenario':k[0], 'phase':k[1], 'before':stats(a[k]['samples']), 'after':stats(b[k]['samples'])} for k in keys]
aggregate = {}
for platform in ['netease','kugou','qishui','common','all']:
    selected = [k for k in keys if platform=='all' or k[0].startswith(platform+'/')]
    aggregate[platform] = {'stages':len(selected),
        'before':stats([s for k in selected for s in a[k]['samples']]),
        'after':stats([s for k in selected for s in b[k]['samples']])}
tabs = []
for platform in ['netease','kugou','qishui']:
    key = (platform+'/tabs','pages')
    old_record = next(r for r in before['session']['records'] if (r['scenario'],r['phase'])==key)
    new_record = next(r for r in after['session']['records'] if (r['scenario'],r['phase'])==key)
    tabs.append({'scenario':key[0], 'beforeRecord':old_record, 'afterRecord':new_record,
        'before':stats(a[key]['samples']) if key in a else None,
        'after':stats(b[key]['samples']) if key in b else None})
new_menus = [r for r in after['session']['records'] if any(s in r['scenario'] for s in ['/profile-menu','/player-menu','/queue-motion'])]
result = {'version':'1.0.76','code':97,'date':'2026-11-07',
    'candidate':3,'rejectedCandidate2ExcludedEntirely':True,
    'installedApkSha256':json.loads((OUT/'device/upgrade176-candidate3.json').read_text('utf8'))['after']['installedApkSha256'],
    'measurement':'Flutter release FrameTiming; not screen presentation FPS',
    'passedStageDefinition':'The permitted action completed and produced nonzero samples; not an8.33ms/120FPS performance pass',
    'minimumFramesPerMatchedPassedStage':25,'excludePagesFromGeneralPairs':True,
    'baselineSha256':before_hash,'afterSha256':after_hash,
    'before':summary(before),'after':summary(after),'paired':aggregate,'pairedStages':paired,
    'verifiedRapidTabs':tabs,'newMenuAndQueueRecords':new_menus,
    'continuous120FpsAccepted':False,'old74NativeCrashProvenFixed':False,
    'limitations':[
        'One phone and sequential runs with dynamic account content/network/cache and thermal state; no single-change causal attribution.',
        'Both runs request OpenGLES and preserve the same engine/shaders, user timeout and visible system performance overlay.',
        '76 adds menu/queue scenarios, so total run counts and pooled whole-run percentiles are not equivalent workloads.',
        'Only matching successful stages with at least25 frames in each run enter the paired aggregate; failures/skips/short stages remain listed.',
        'New menu Flutter stages have no75 counterpart. Own-layer ADB captures are separate and do not prove each gesture completed.',
        'P95/P99 are recomputed from raw build/raster samples for both versions. They do not measure input-to-photon or presentation FPS.',
        'Occasional ADB screenshots were taken to check for retained menus/veils. Their capture load can perturb nearby samples; screenrecord was not run during the in-app core collection.',
        'No rewards, NAS deployment, cloud writes, download entitlement or VIP full-track acceptance is inferred from performance browsing.'
    ]}
(ROOT/'docs/performance-2026-11-07-v1.0.76.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf8')
print(json.dumps({'before':{k:result['before'][k] for k in ['scenarios','records','statuses','frames']},
    'after':{k:result['after'][k] for k in ['scenarios','records','statuses','frames']},'paired':aggregate,
    'tabs':[{'scenario':t['scenario'],'before':t['before'],'after':t['after'],'actions':t['afterRecord'].get('actions')} for t in tabs]},indent=2))
