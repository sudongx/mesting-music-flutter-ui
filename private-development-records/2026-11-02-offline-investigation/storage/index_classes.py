from pathlib import Path
import json,struct,zipfile,hashlib
root=Path(__file__).resolve().parent
apk=root.parents[1]/'2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk'
targets={'Ljm0/z1;','Lcom/netease/cloudmusic/module/player/utils/SongPlayedTime;','Ljm0/m;','Lqn0/z0;'}
rows=[]
with zipfile.ZipFile(apk) as z:
 for name in z.namelist():
  if not name.startswith('classes') or not name.endswith('.dex'):continue
  b=z.read(name);count,off=struct.unpack_from('<II',b,56);ss=[]
  for i in range(count):
   p=struct.unpack_from('<I',b,off+i*4)[0]
   while b[p]&128:p+=1
   p+=1;ss.append(b[p:b.index(0,p)].decode('utf-8',errors='replace'))
  count,off=struct.unpack_from('<II',b,64);types=[ss[struct.unpack_from('<I',b,off+i*4)[0]] for i in range(count)]
  count,off=struct.unpack_from('<II',b,96)
  matches=[types[struct.unpack_from('<I',b,off+i*32)[0]] for i in range(count) if types[struct.unpack_from('<I',b,off+i*32)[0]] in targets]
  if matches:rows.append({'dex':name,'sha256':hashlib.sha256(b).hexdigest(),'classes':matches})
(root/'target-index.json').write_text(json.dumps(rows,indent=2)+'\n',encoding='utf-8')
print(json.dumps(rows,indent=2))
