from pathlib import Path
import zipfile,struct,re,json
p=Path(__file__).resolve().parent;apk=p.parent.parent/'2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'
def uleb(b,o):
 while b[o]&128:o+=1
 return o+1
rows=[];classes=[]
with zipfile.ZipFile(apk) as z:
 for n in z.namelist():
  if not re.fullmatch(r'classes\d*\.dex',n):continue
  b=z.read(n);count,o=struct.unpack_from('<II',b,56);ss=[]
  for i in range(count):
   q=uleb(b,struct.unpack_from('<I',b,o+4*i)[0]);s=b[q:b.index(0,q)].decode('utf-8',errors='replace');ss.append(s)
   if any(k in s.lower() for k in ['playlog','playsong','play_time','listen_time','playduration','listeningtime','playstatistics','musiclog','record/song','record/play','song/log','log/song','record/client','record/report','playreport','log/play']):rows.append({'dex':n,'string':s})
  count,o=struct.unpack_from('<II',b,64);ts=[ss[struct.unpack_from('<I',b,o+i*4)[0]] for i in range(count)];count,o=struct.unpack_from('<II',b,96)
  for i in range(count):
   cn=ts[struct.unpack_from('<I',b,o+i*32)[0]][1:-1].replace('/','.')
   if 'netease.cloudmusic' in cn and (any(k in cn.lower() for k in ['.log.','.statistics.','.statistic.','.monitor.','playservice'])):classes.append({'dex':n,'class':cn})
(p/'extended-inventory.json').write_text(json.dumps({'strings':rows,'classes':classes},ensure_ascii=False,indent=2),encoding='utf-8')
for x in rows:
 if not x['string'].startswith('L'):print(x)
print('class candidates',len(classes))
