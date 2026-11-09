from pathlib import Path
import zipfile,struct,json,re,hashlib
root=Path(__file__).resolve().parent
apk=root.parent.parent/'2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'
assert apk.stat().st_size==224823452
def uleb(b,o):
 v=0;s=0
 while True:
  c=b[o];o+=1;v|=(c&127)<<s
  if c<128:return v,o
  s+=7
found=[];named=[];ss=[]
need={'playend','startplay','endplay','mainsiteWeb','/api/feedback/weblog','feedback/weblog'}
with zipfile.ZipFile(apk) as z:
 for entry in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',entry):continue
  b=z.read(entry);n,off=struct.unpack_from('<II',b,56);strings=[]
  for i in range(n):
   o=struct.unpack_from('<I',b,off+4*i)[0];_,o=uleb(b,o);strings.append(b[o:b.index(0,o)].decode('utf-8',errors='replace'))
  for s in strings:
   if any(x in s.lower() for x in ['footprint','weblog','listen/duration','listening/duration','云村听歌足迹','听歌足迹','playtime/report','listening/report']):ss.append({'dex':entry,'string':s})
  n,off=struct.unpack_from('<II',b,64);types=[strings[struct.unpack_from('<I',b,off+4*i)[0]] for i in range(n)]
  n,off=struct.unpack_from('<II',b,88);methods=[struct.unpack_from('<HHI',b,off+8*i) for i in range(n)]
  target={i:s for i,s in enumerate(strings) if s in need or any(q in s for q in ['feedback/weblog','analyse_doPlayLog','analyse_doStartPlayLog','addPlayDuration minutes','getFootPrintWidgetData','footPrintWidgetState','tsSongPlayLog','trySaveAuditionPlayLog'])}
  n,off=struct.unpack_from('<II',b,96)
  for i in range(n):
   ci=struct.unpack_from('<I',b,off+32*i)[0];data=struct.unpack_from('<I',b,off+32*i+24)[0];cn=types[ci][1:-1].replace('/','.')
   if any(q in cn.lower() for q in ['playrecord','playlog','playstatistics','listening','footprint','playreport','musiclog']):named.append({'dex':entry,'class':cn})
   if not data or not target:continue
   counts=[]
   for _ in range(4):v,data=uleb(b,data);counts.append(v)
   for count in counts[:2]:
    for _ in range(count):_,data=uleb(b,data);_,data=uleb(b,data)
   for count in counts[2:]:
    idx=0
    for _ in range(count):
     delta,data=uleb(b,data);_,data=uleb(b,data);code,data=uleb(b,data);idx+=delta
     if not code:continue
     size=struct.unpack_from('<I',b,code+12)[0];ins=memoryview(b)[code+16:code+16+size*2];hits=[]
     for pos in range(0,len(ins)-6,2):
      if ins[pos] in [0x1a,0x1b]:
       si=struct.unpack_from('<H' if ins[pos]==0x1a else '<I',ins,pos+2)[0]
       if si in target:hits.append({'string':target[si],'codeUnitOffset':pos//2})
     if hits:found.append({'dex':entry,'class':cn,'method':strings[methods[idx][2]],'codeOffset':code,'candidates':hits})
(root/'log-string-candidates.json').write_text(json.dumps({'calls':found,'namedClasses':named,'strings':ss},ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'candidateMethods':len(found),'namedClasses':len(named),'matchingStrings':len(ss)}))
for row in found:print(row['dex'],row['class'],row['method'],[s['string'] for s in row['candidates']])
