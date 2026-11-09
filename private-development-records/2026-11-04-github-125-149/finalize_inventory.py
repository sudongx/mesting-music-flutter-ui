from pathlib import Path
import json
OUT=Path(__file__).resolve().parent
d=json.loads((OUT/'inventory.json').read_text('utf-8'))
removed=[]
for row in d['versions']:
    allowed={f"Mesting-Music-{row['tag']}{suffix}" for suffix in ['.apk','-source.zip','-verification.json','-source-verification.json','.apk.sha256','-source.sha256','-SHA256.txt']}
    old=row['assets']
    row['assets']=[a for a in old if not a['name'].startswith('Mesting-Music-') or a['name'] in allowed]
    removed.extend(a['name'] for a in old if a not in row['assets'])
d['totalAssets']=sum(len(x['assets']) for x in d['versions'])
d['totalUploadBytes']=sum(a['size'] for x in d['versions'] for a in x['assets'])
d['assetMatching']='Exact version and suffix; Beta suffixes never mixed into a numeric release'
(OUT/'inventory.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps({'versions':len(d['versions']),'assets':d['totalAssets'],'bytes':d['totalUploadBytes'],'sourceEntriesVerified':sum(x['sourceEntries'] for x in d['versions']),'excludedOtherVersionAttachments':len(removed)},indent=2))
