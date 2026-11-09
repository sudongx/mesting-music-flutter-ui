from pathlib import Path
import zipfile,struct,json,re
p=Path(__file__).resolve().parent;apk=p.parent.parent/'2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'
def uleb(b,o):
 v=0;s=0
 while True:
  c=b[o];o+=1;v|=(c&127)<<s
  if c<128:return v,o
  s+=7
rows=[]
with zipfile.ZipFile(apk) as z:
 for n in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',n):continue
  b=z.read(n);count,o=struct.unpack_from('<II',b,56);ss=[]
  for i in range(count):
   q=struct.unpack_from('<I',b,o+4*i)[0];_,q=uleb(b,q);ss.append(b[q:b.index(0,q)].decode('utf-8',errors='replace'))
  if 'play' not in ss:continue
  play=ss.index('play');count,o=struct.unpack_from('<II',b,64);ts=[ss[struct.unpack_from('<I',b,o+i*4)[0]] for i in range(count)]
  count,o=struct.unpack_from('<II',b,88);mm=[struct.unpack_from('<HHI',b,o+8*i) for i in range(count)];count,o=struct.unpack_from('<II',b,96)
  for i in range(count):
   ci=struct.unpack_from('<I',b,o+32*i)[0];data=struct.unpack_from('<I',b,o+32*i+24)[0];cn=ts[ci][1:-1].replace('/','.')
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
     size=struct.unpack_from('<I',b,code+12)[0];ins=memoryview(b)[code+16:code+16+size*2];strings=[];calls=[]
     for pos in range(0,len(ins)-6,2):
      if ins[pos] in [0x1a,0x1b]:
       si=struct.unpack_from('<H' if ins[pos]==0x1a else '<I',ins,pos+2)[0]
       if si<len(ss):strings.append(ss[si])
      if ins[pos] in [0x6e,0x6f,0x70,0x71,0x72,0x74,0x75,0x76,0x77,0x78]:
       mi=struct.unpack_from('<H',ins,pos+2)[0]
       if mi<len(mm):
        owner,pr,nam=mm[mi];meth=ts[owner]+'->'+ss[nam]
        if any(x in meth for x in ['IStatistic','logJSON','StatisticUtils','statistic/','PlayRecord']):calls.append(meth)
     if 'startlogtime' in strings or 'play' in strings:
      rows.append({'dex':n,'class':cn,'method':ss[mm[idx][2]],'codeOffset':code,'strings':sorted(set(strings)),'statCalls':list(set(calls))})
(p/'play-payload-candidates.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
print('Candidate count',len(rows))
for row in rows:
 if 'startlogtime' in row['strings']:print(json.dumps({'dex':row['dex'],'class':row['class'],'method':row['method'],'strings':[s for s in row['strings'] if len(s)<70],'statCalls':row['statCalls']},ensure_ascii=True))
