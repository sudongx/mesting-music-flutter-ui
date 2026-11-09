from pathlib import Path
import zipfile,struct,json,hashlib,re
root=Path(__file__).resolve().parent
apk=root/'com.netease.cloudmusic-9.6.15.apk'
assert apk.stat().st_size==224823452
assert hashlib.md5(apk.read_bytes()).hexdigest()=='28a99cc05f127aa9f89daa79103cce20'
found=[];endpoint_strings=set();field_strings=set()
def uleb(b,o):
 v=0;s=0
 while True:
  c=b[o];o+=1;v|=(c&127)<<s
  if c<128:return v,o
  s+=7
with zipfile.ZipFile(apk) as archive:
 for entry in archive.namelist():
  if not re.fullmatch(r'classes\d*\.dex',entry):continue
  b=archive.read(entry);assert b.startswith(b'dex\n')
  n,off=struct.unpack_from('<II',b,56);strings=[]
  for i in range(n):
   o=struct.unpack_from('<I',b,off+4*i)[0];_,o=uleb(b,o);end=b.index(0,o)
   text=b[o:end].decode('utf-8',errors='replace');strings.append(text)
   if '/listen/together/' in text:endpoint_strings.add(text)
   if any(k in text.lower() for k in ['connectiontime','historyduration','historylistentime']):field_strings.add(text)
  n,off=struct.unpack_from('<II',b,64);types=[strings[struct.unpack_from('<I',b,off+4*i)[0]] for i in range(n)]
  n,off=struct.unpack_from('<II',b,80);fields=[struct.unpack_from('<HHI',b,off+8*i) for i in range(n)]
  n,off=struct.unpack_from('<II',b,96)
  for i in range(n):
   ci=struct.unpack_from('<I',b,off+32*i)[0];data=struct.unpack_from('<I',b,off+32*i+24)[0]
   if not data:continue
   counts=[]
   for _ in range(4):v,data=uleb(b,data);counts.append(v)
   defined=[]
   for count in counts[:2]:
    index=0
    for _ in range(count):
     delta,data=uleb(b,data);flags,data=uleb(b,data);index+=delta
     owner,ft,name=fields[index];defined.append({'name':strings[name],'type':types[ft]})
   if any(any(k in f['name'].lower() for k in ['connectiontime','historyduration','historylistentime']) for f in defined):
    found.append({'dex':entry,'class':types[ci][1:-1].replace('/','.'),'fields':defined})
result={'artifactSha256':hashlib.sha256(apk.read_bytes()).hexdigest(),'method':'DEX header/string_ids/type_ids/field_ids/class_data definitions; static only, no target execution','classes':found,'matchingFieldStrings':sorted(field_strings),'endpointStrings':sorted(endpoint_strings)}
(root/'dex-field-inventory.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=True,indent=2))
