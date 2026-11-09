"""Compare only the named app buffer layer; idle gaps prevent an FPS promise."""
from pathlib import Path
import json
import re

OUT = Path(__file__).resolve().parent

def percentile(values, p):
    values = sorted(values)
    return round(values[int((len(values)-1)*p)],3) if values else None

def analyze(label):
    directory = OUT/'device'/label
    source = (directory/'timestats.txt').read_text('utf-8-sig')
    blocks = list(re.finditer(r'layerName = ([^\r\n]+)(.*?)(?=\n\s*layerName = |\Z)',source,re.S))
    own = [b for b in blocks if 'SurfaceView[com.mesting.music/' in b[1] and '(BLAST)' in b[1]]
    assert len(own)==1
    name,body = own[0][1],own[0][2]
    result = {'label':label,'layer':name,'globalCountersUsed':False}
    for field,pattern in {'frames':r'totalFrames = (\d+)',
        'timelineFrames':r'totalTimelineFrames = (\d+)', 'jankyFrames':r'jankyFrames = (\d+)'}.items():
        result[field] = int(re.search(pattern,body)[1])
    result['jankyPercent'] = round(100*result['jankyFrames']/result['timelineFrames'],3)
    line = re.search(r'present2present histogram is as below:\s*([^\r\n]+)',body)[1]
    buckets = {int(ms):int(n) for ms,n in re.findall(r'(\d+)ms=(\d+)',line)}
    result['nonzeroPresentationBucketsMs'] = {ms:n for ms,n in buckets.items() if n}
    result['bucket8msPercent'] = round(100*buckets.get(8,0)/sum(buckets.values()),3)
    result['perCycleRollingLatency'] = []
    for path in sorted(directory.glob('latency-*.txt')):
        rows = [tuple(map(int,line.split())) for line in path.read_text('utf8').splitlines()
            if re.fullmatch(r'\d+\s+\d+\s+\d+',line.strip())]
        pts = sorted({r[1] for r in rows if 0<r[1]<2**63-1})
        intervals = [(b-a)/1e6 for a,b in zip(pts,pts[1:])]
        result['perCycleRollingLatency'].append({'file':path.name,'validPresents':len(pts),
            'sentinelsExcluded':sum(r[1] in [0,2**63-1] for r in rows),
            'p95Ms':percentile(intervals,.95),'p99Ms':percentile(intervals,.99)})
    for phase in ['start','end']:
        env = (directory/f'environment-{phase}.txt').read_text('utf8')
        result['temperatureC'+phase.title()] = int(re.search(r'temperature:\s*(\d+)',env)[1])/10
    result['actions'] = json.loads((directory/'actions.json').read_text('utf8'))
    return result

pairs = []
for workload in ['player-menu','player-queue','profile-menu']:
    after_label = 'final76-netease-'+workload
    pairs.append({'workload':workload,'before':analyze('baseline75-'+workload),'after':analyze(after_label)})
report = {'version':'1.0.76','candidate':3,'pairs':pairs,'continuous120FpsAccepted':False,
    'excludedCandidate2Captures':True,
    'excludedFinal76GenericCaptures': 'The app cold-started on Kugou; generic final76-player-menu/player-queue/profile-menu are Kugou observations, not comparable to the NetEase75 baseline. Explicit NetEase captures replace them.',
    'excludedCapture':{'label':'after76-profile-menu','reason':'Playback active, unlike paused75 baseline; retained and replaced with paused capture'},
    'limitations':[
        'Each run issued24 actual ADB input events in12 planned cycles; every intermediate open/close was not independently verified. Use the in-app76 diagnostic for verified cycles.',
        'The named app buffer layer is used. System overlay/global SurfaceFlinger FPS is excluded.',
        'Rounded8ms buckets are not exact8.333ms deadline passes. Idle gaps, input-command delays, cache/content and thermal state can differ.',
        'Per-cycle latency buffers overlap and include idle gaps; never pool them as independent animation-only frame samples.',
        'SurfaceFlinger jank and Flutter build/raster timings are different measurements; no single-change causal attribution.'
    ]}
(OUT/'surface-presentation-final-summary.json').write_text(json.dumps(report,indent=2)+'\n','utf8')
print(json.dumps([{'workload':p['workload'],**{side:{k:p[side][k] for k in ['frames','jankyPercent','bucket8msPercent','temperatureCStart','temperatureCEnd']} for side in ['before','after']}} for p in pairs],indent=2))
