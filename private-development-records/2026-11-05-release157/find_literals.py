"""Locate candidate literal owners; selected hits require REA corroboration.

Scanning code units is candidate discovery only, not an instruction decoder.
Never treat a candidate offset as an established invoke or executed behavior.
"""
import json, re, struct, zipfile
from pathlib import Path
ROOT=Path('D:/AnLi')
OUT=Path(__file__).parent
targets={'kugou': ROOT/'.codex-artifacts/2026-11-04-release152-review/private/kugou-20.8.6.apk',
         'netease': ROOT/'.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'}
pattern=re.compile(r'(?i)(rank[/_].*(?:collect|comment|share|favor)|(?:collect|comment|share|favor)[/_].*rank|snsapi_userinfo|/sns/login|/login/sns|lstatistics2|listening_statistic/result/upload|listen_statistics|为我精选|为你精选)')
def uleb(b,p):
    n=shift=0
    while True:
        v=b[p];p+=1;n|=(v&127)<<shift;shift+=7
        if v<128:return n,p
rows=[]
for platform,path in targets.items():
 with zipfile.ZipFile(path) as z:
  for name in z.namelist():
   if not re.fullmatch(r'classes\d*\.dex',name):continue
   b=z.read(name);n,o=struct.unpack_from('<II',b,56);s=[]
   for (p,) in struct.iter_unpack('<I',b[o:o+n*4]):
    _,p=uleb(b,p);s.append(b[p:b.index(0,p)].decode('utf-8','replace'))
   ids={i for i,v in enumerate(s) if pattern.search(v) and len(v)<1000}
   if not ids:continue
   n,o=struct.unpack_from('<II',b,64);types=[s[i] for (i,) in struct.iter_unpack('<I',b[o:o+n*4])]
   n,o=struct.unpack_from('<II',b,88);methods=list(struct.iter_unpack('<HHI',b[o:o+n*8]))
   n,o=struct.unpack_from('<II',b,96)
   for i in range(n):
    ci,_,_,_,_,_,p,_=struct.unpack_from('<8I',b,o+i*32)
    if not p:continue
    counts=[]
    for _ in range(4):v,p=uleb(b,p);counts.append(v)
    for _ in range(counts[0]+counts[1]):_,p=uleb(b,p);_,p=uleb(b,p)
    for count in counts[2:]:
     mi=0
     for _ in range(count):
      diff,p=uleb(b,p);mi+=diff;_,p=uleb(b,p);co,p=uleb(b,p)
      if not co:continue
      units=struct.unpack_from('<I',b,co+12)[0];code=struct.unpack_from('<'+str(units)+'H',b,co+16);hits=set()
      for k,op in enumerate(code[:-2]):
       idx=code[k+1] if op&255==0x1a else code[k+1]|code[k+2]<<16 if op&255==0x1b else -1
       if idx in ids:hits.add(s[idx])
      if hits:rows.append({'platform':platform,'dex':name,'class':types[ci][1:-1].replace('/','.'),'method':s[methods[mi][2]],'strings':sorted(hits)})
(OUT/'literal-candidates.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),'utf-8')
for r in rows:print(json.dumps(r,ensure_ascii=True))
