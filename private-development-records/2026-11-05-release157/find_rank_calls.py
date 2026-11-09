"""Candidate method-id references for focused, later-corroborated decompilation."""
import json,re,struct,zipfile
from pathlib import Path
p=Path('D:/AnLi/.codex-artifacts/2026-11-05-release157/kugou-classes12-analysis-only.apk')
def uleb(b,p):
 n=s=0
 while True:
  v=b[p];p+=1;n|=(v&127)<<s;s+=7
  if v<128:return n,p
with zipfile.ZipFile(p) as z:b=z.read('classes.dex')
n,o=struct.unpack_from('<II',b,56);strings=[]
for (p,) in struct.iter_unpack('<I',b[o:o+n*4]):
 _,p=uleb(b,p);strings.append(b[p:b.index(0,p)].decode('utf-8','replace'))
n,o=struct.unpack_from('<II',b,64);types=[strings[i] for (i,) in struct.iter_unpack('<I',b[o:o+n*4])]
n,o=struct.unpack_from('<II',b,88);methods=list(struct.iter_unpack('<HHI',b[o:o+n*8]))
n,o=struct.unpack_from('<II',b,96);rows=[]
for i in range(n):
 ci,_,_,_,_,_,p,_=struct.unpack_from('<8I',b,o+i*32)
 if not p or not types[ci].startswith('Lcom/kugou/android/netmusic/bills/rankinglist/'):continue
 counts=[]
 for _ in range(4):v,p=uleb(b,p);counts.append(v)
 for _ in range(counts[0]+counts[1]):_,p=uleb(b,p);_,p=uleb(b,p)
 for count in counts[2:]:
  mi=0
  for _ in range(count):
   d,p=uleb(b,p);mi+=d;_,p=uleb(b,p);co,p=uleb(b,p)
   if not co:continue
   units=struct.unpack_from('<I',b,co+12)[0];code=struct.unpack_from('<'+str(units)+'H',b,co+16);hits=set()
   for k,op in enumerate(code[:-2]):
    if op&255 not in [0x6e,0x6f,0x70,0x71,0x72,0x74,0x75,0x76,0x77,0x78]:continue
    idx=code[k+1]
    if idx>=len(methods):continue
    c,_,m=methods[idx];target=types[c]+':'+strings[m]
    if re.search('collect|favorite|comment|special|cloudplaylist|share',target,re.I):hits.add(target)
   if hits:rows.append({'class':types[ci][1:-1].replace('/','.'),'method':strings[methods[mi][2]],'calls':sorted(hits)})
Path('D:/AnLi/.codex-artifacts/2026-11-05-release157/rank-call-candidates.json').write_text(json.dumps(rows,indent=2),'utf-8')
for r in rows:
 if any(re.search('collect|favorite|comment|cloudplaylist',x,re.I) for x in r['calls']):print(json.dumps(r))
