"""Read original APK DEX class declarations; never install or execute an APK."""
import hashlib
import json
import re
import struct
import sys
import zipfile
from pathlib import Path

base = Path(__file__).resolve().parent
targets = {
    'kugou': base.parent / '2026-11-04-release152-review/private/kugou-20.8.6.apk',
    'netease': base.parent / '2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk',
}

def classes(data):
    def u32(offset):
        return struct.unpack_from('<I', data, offset)[0]
    strings_offset = u32(60)
    types_offset = u32(68)
    for index in range(u32(96)):
        type_index = u32(u32(100) + index * 32)
        string_index = u32(types_offset + type_index * 4)
        position = u32(strings_offset + string_index * 4)
        while data[position] & 0x80:
            position += 1
        position += 1
        end = data.index(0, position)
        yield data[position:end].decode('utf-8', errors='replace').strip('L;').replace('/', '.')

for platform, path in targets.items():
    index_path = base / (platform + '-class-index.json')
    if index_path.exists():
        result = json.loads(index_path.read_text('utf-8'))
    else:
        result = {'source': str(path), 'sha256': hashlib.file_digest(path.open('rb'), 'sha256').hexdigest(), 'dex': []}
        with zipfile.ZipFile(path) as archive:
            for name in archive.namelist():
                if re.fullmatch(r'classes\d*\.dex', name):
                    data = archive.read(name)
                    result['dex'].append({'member': name, 'sha256': hashlib.sha256(data).hexdigest(), 'classes': list(classes(data))})
        index_path.write_text(json.dumps(result, ensure_ascii=False), 'utf-8')
    pattern = re.compile(r'(?:network\.(?:cookie|http|proxy|dns)|(?:^|\.)(?:OkHttpClient|Dns|LoginManager|UserManager|LoginUser|LoginData|ProxySelector|HttpDns|KugouHttp|KGDataConnection)[\w$]*$)', re.I)
    print(json.dumps({'platform': platform, 'source_sha256': result['sha256'], 'matches': [{'member': dex['member'], 'class': name} for dex in result['dex'] for name in dex['classes'] if pattern.search(name)]}, ensure_ascii=False))
