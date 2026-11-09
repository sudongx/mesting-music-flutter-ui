from pathlib import Path
import zipfile,struct,json,re
p=Path(__file__).resolve().parent;apk=p.parent.parent/'2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'
def uleb(b,o):
 v=0;s=0
 while True:
  c=b[o];o+=1;v|=(c&127)<<s
  if c<128:return v,o
  s+=7
found=[]
with zipfile.ZipFile(apk) as z:
 for n in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',n):continue
  b=z.read(n);count,o=struct.unpack_from('<II',b,56);ss=[]
  for i in range(count):
   q=struct.unpack_from('<I',b,o+4*i)[0];_,q=uleb(b,q);ss.append(b[q:b.index(0,q)].decode('utf-8',errors='replace'))
  count,o=struct.unpack_from('<II',b,64);ts=[ss[struct.unpack_from('<I',b,o+i*4)[0]] for i in range(count)]
  count,o=struct.unpack_from('<II',b,80);ff=[struct.unpack_from('<HHI',b,o+8*i) for i in range(count)]
  count,o=struct.unpack_from('<II',b,88);mm=[struct.unpack_from('<HHI',b,o+8*i) for i in range(count)]
  count,o=struct.unpack_from('<II',b,96)
  for i in range(count):
   ci=struct.unpack_from('<I',b,o+32*i)[0];data=struct.unpack_from('<I',b,o+32*i+24)[0];cn=ts[ci][1:-1].replace('/','.')
   if not data:continue
   counts=[]
   for _ in range(4):v,data=uleb(b,data);counts.append(v)
   for count in counts[:2]:
    idx=0
    for _ in range(count):
     delta,data=uleb(b,data);_,data=uleb(b,data);idx+=delta;owner,typ,si=ff[idx];name=ss[si]
     if name in ['mPlayLogHelper','playLogMap','playLogState']:found.append({'dex':n,'class':cn,'field':name,'type':ts[typ]})
   for count in counts[2:]:
    idx=0
    for _ in range(count):
     delta,data=uleb(b,data);_,data=uleb(b,data);_,data=uleb(b,data);idx+=delta;name=ss[mm[idx][2]]
     if any(q in name.lower() for q in ['reportplayduration','doplaylog','dostartplaylog','playrecord','playlog','listeningtime','playduration']):found.append({'dex':n,'class':cn,'method':name})
(p/'member-names.json').write_text(json.dumps(found,ensure_ascii=False,indent=2),encoding='utf-8')
for f in found:print(f)
