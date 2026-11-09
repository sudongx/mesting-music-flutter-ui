"""Read DEX string/class tables without running or broadly decompiling the APK."""
from pathlib import Path
import struct, zipfile, json, re, hashlib

ROOT = Path(__file__).parent
SOURCE = ROOT / 'private/kugou-20.8.6.apk'
PATTERN = re.compile(r'(?i)(medal|badge|listen.?report|listen.?stat|listen.?rank|music.?age|listen.?grade|song.?grade|听歌统计|听歌等级|乐龄|勋章收藏|佩戴管理)')

def dex_strings(data):
    count, offset = struct.unpack_from('<II', data, 56)
    values = []
    for (pos,) in struct.iter_unpack('<I', data[offset:offset+count*4]):
        while data[pos] & 128: pos += 1
        pos += 1
        end = data.find(b'\x00',pos)
        values.append(data[pos:end].decode('utf-8','replace'))
    return values

out = []
with zipfile.ZipFile(SOURCE) as archive:
    for name in archive.namelist():
        if re.fullmatch(r'classes\d*\.dex', name):
            data = archive.read(name)
            strings = dex_strings(data)
            count, offset = struct.unpack_from('<II', data, 64)
            types = [strings[i] for (i,) in struct.iter_unpack('<I',data[offset:offset+count*4])]
            count, offset = struct.unpack_from('<II', data, 96)
            classes = [types[struct.unpack_from('<I',data,offset+i*32)[0]] for i in range(count)]
            hits = [s for s in strings if PATTERN.search(s) and len(s)<3000]
            out.append({'dex':name,'classes':[s for s in classes if PATTERN.search(s)],'strings':hits})
    assets = [n for n in archive.namelist() if n.startswith('assets/') and re.search(r'(?i)(medal|badge|listen|grade|user)',n)]
report = {'source':str(SOURCE),'sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(),'dex':out,'assets':assets}
(ROOT/'dex-feature-index.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),'utf-8')
for item in out:
    if item['classes'] or item['strings']:
        print(item['dex'],len(item['classes']),len(item['strings']))
        for c in item['classes'][:16]:print(' ',c)
print('assets',len(assets))
