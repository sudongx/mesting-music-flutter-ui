from pathlib import Path
import zipfile,struct,json,re
root=Path(__file__).resolve().parent;apk=root/'com.netease.cloudmusic-9.6.15.apk'
def uleb(b,o):
 v=0;s=0
 while True:
  c=b[o];o+=1;v|=(c&127)<<s
  if c<128:return v,o
  s+=7
found=[]
with zipfile.ZipFile(apk) as z:
 for entry in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',entry):continue
  b=z.read(entry);n,off=struct.unpack_from('<II',b,56);strings=[]
  for i in range(n):
   o=struct.unpack_from('<I',b,off+4*i)[0];_,o=uleb(b,o);strings.append(b[o:b.index(0,o)].decode('utf-8',errors='replace'))
  n,off=struct.unpack_from('<II',b,64);types=[strings[struct.unpack_from('<I',b,off+4*i)[0]] for i in range(n)]
  n,off=struct.unpack_from('<II',b,88);methods=[struct.unpack_from('<HHI',b,off+8*i) for i in range(n)]
  targets={i:types[c]+'->'+strings[name] for i,(c,proto,name) in enumerate(methods) if ('LTRelationStatistics;' in types[c] or 'StatisticsChangeMsgData;' in types[c]) and strings[name] in ['getTotalConnectionTime','getCurrentConnectionTime','getDuration']}
  if not targets:continue
  n,off=struct.unpack_from('<II',b,96)
  for i in range(n):
   ci=struct.unpack_from('<I',b,off+32*i)[0];data=struct.unpack_from('<I',b,off+32*i+24)[0]
   if not data:continue
   counts=[]
   for _ in range(4):v,data=uleb(b,data);counts.append(v)
   for count in counts[:2]:
    for _ in range(count):_,data=uleb(b,data);_,data=uleb(b,data)
   for count in counts[2:]:
    idx=0
    for _ in range(count):
     delta,data=uleb(b,data);_,data=uleb(b,data);code,data=uleb(b,data);idx+=delta
     if not code:continue
     size=struct.unpack_from('<I',b,code+12)[0];ins=memoryview(b)[code+16:code+16+size*2]
     calls=[]
     for pos in range(0,len(ins)-4,2):
      if ins[pos] in [0x6e,0x6f,0x70,0x71,0x72,0x74,0x75,0x76,0x77,0x78]:
       callee=struct.unpack_from('<H',ins,pos+2)[0]
       if callee in targets:calls.append({'target':targets[callee],'codeUnitOffset':pos//2})
     if calls:
      found.append({'dex':entry,'class':types[ci][1:-1].replace('/','.'),'method':strings[methods[idx][2]],'codeOffset':code,'candidateCalls':calls})
(root/'statistics-callers-candidates.json').write_text(json.dumps(found,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(found,ensure_ascii=True,indent=2))
