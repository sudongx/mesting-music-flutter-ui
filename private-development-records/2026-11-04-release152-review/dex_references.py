"""Candidate const-string references; REA decompilation corroborates selected hits."""
import struct,zipfile,re,json
from pathlib import Path
ROOT=Path(__file__).parent
ns={'__file__':str(ROOT/'index_apk.py')}
exec((ROOT/'index_apk.py').read_text('utf-8').split('out = []')[0],ns)
strings_for=ns['dex_strings']
def uleb(b,p):
 n=0;shift=0
 while True:
  v=b[p];p+=1;n|=(v&127)<<shift;shift+=7
  if v<128:return n,p
needle=re.compile(r'听歌等级|乐龄|勋章收藏馆|h5UrlIndex|medal_index_url|/get_grade_info|listening_statistic/result/upload|listening_statistic/result/query')
rows=[]
with zipfile.ZipFile(ROOT/'private/kugou-20.8.6.apk') as z:
 for name in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',name):continue
  b=z.read(name);s=strings_for(b);ids={i for i,v in enumerate(s) if needle.search(v) and len(v)<1000}
  if not ids:continue
  n,o=struct.unpack_from('<II',b,64);types=[s[i] for (i,) in struct.iter_unpack('<I',b[o:o+n*4])]
  n,o=struct.unpack_from('<II',b,88);methods=list(struct.iter_unpack('<HHI',b[o:o+n*8]))
  n,o=struct.unpack_from('<II',b,96)
  for i in range(n):
   class_idx,_,_,_,_,_,data_off,_=struct.unpack_from('<8I',b,o+i*32)
   if not data_off:continue
   p=data_off;counts=[]
   for j in range(4):v,p=uleb(b,p);counts.append(v)
   for j in range(counts[0]+counts[1]):_,p=uleb(b,p);_,p=uleb(b,p)
   for count in counts[2:]:
    mi=0
    for j in range(count):
     diff,p=uleb(b,p);mi+=diff;_,p=uleb(b,p);co,p=uleb(b,p)
     if not co:continue
     units=struct.unpack_from('<I',b,co+12)[0];code=struct.unpack_from('<'+str(units)+'H',b,co+16)
     hit=set()
     for k,op in enumerate(code[:-2]):
      if op&255==0x1a:idx=code[k+1]
      elif op&255==0x1b:idx=code[k+1]|code[k+2]<<16
      else:continue
      if idx in ids:hit.add(s[idx])
     if hit:rows.append({'dex':name,'class':types[class_idx][1:-1].replace('/','.'),'method':s[methods[mi][2]],'strings':sorted(hit)})
(ROOT/'feature-string-references.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),'utf-8')
for r in rows:print(json.dumps(r,ensure_ascii=True))
