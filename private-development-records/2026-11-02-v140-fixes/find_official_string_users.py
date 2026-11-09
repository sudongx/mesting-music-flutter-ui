"""Find DEX const-string candidates; validate selected bodies with REA.

This bounded byte scan is a locator, not a control-flow decoder. It never
executes the APK or reads an account. Original package bytes remain untouched.
"""
from pathlib import Path
import json
import re
import struct
import zipfile

ROOT = Path(__file__).resolve().parent
APK = ROOT.parent / '2026-11-02-duration-phone139/official-current-9.6.15.apk'
PATTERN = re.compile(r'listenTogether_(?:newRecordPage|recordList|recordListCombine)|listen_together_record_page|cell_listentogether_history_entrance|look_listen_together_record')

def uleb(data, offset):
    value = shift = 0
    while True:
        part = data[offset]
        offset += 1
        value |= (part & 127) << shift
        if part < 128:
            return value, offset
        shift += 7

found = []
with zipfile.ZipFile(APK) as archive:
    for entry in archive.namelist():
        if not re.fullmatch(r'classes\d*\.dex', entry):
            continue
        data = archive.read(entry)
        count, offset = struct.unpack_from('<II', data, 56)
        strings = []
        for index in range(count):
            at = struct.unpack_from('<I', data, offset + index * 4)[0]
            _, at = uleb(data, at)
            strings.append(data[at:data.index(0, at)].decode('utf-8', errors='replace'))
        targets = {i: s for i, s in enumerate(strings) if PATTERN.search(s)}
        if not targets:
            continue
        count, offset = struct.unpack_from('<II', data, 64)
        types = [strings[struct.unpack_from('<I', data, offset + i * 4)[0]] for i in range(count)]
        count, offset = struct.unpack_from('<II', data, 88)
        methods = [struct.unpack_from('<HHI', data, offset + i * 8) for i in range(count)]
        count, offset = struct.unpack_from('<II', data, 96)
        for index in range(count):
            owner = struct.unpack_from('<I', data, offset + index * 32)[0]
            at = struct.unpack_from('<I', data, offset + index * 32 + 24)[0]
            if not at:
                continue
            counts = []
            for _ in range(4):
                value, at = uleb(data, at)
                counts.append(value)
            for field_count in counts[:2]:
                for _ in range(field_count):
                    _, at = uleb(data, at)
                    _, at = uleb(data, at)
            for method_count in counts[2:]:
                method_index = 0
                for _ in range(method_count):
                    delta, at = uleb(data, at)
                    _, at = uleb(data, at)
                    code, at = uleb(data, at)
                    method_index += delta
                    if not code:
                        continue
                    length = struct.unpack_from('<I', data, code + 12)[0]
                    ins = memoryview(data)[code + 16:code + 16 + length * 2]
                    hits = []
                    for pos in range(0, len(ins) - 4, 2):
                        op = ins[pos]
                        if op not in (0x1a, 0x1b):
                            continue
                        sid = struct.unpack_from('<H' if op == 0x1a else '<I', ins, pos + 2)[0]
                        if sid in targets:
                            hits.append({'string': targets[sid], 'codeUnitOffset': pos // 2})
                    if hits:
                        found.append({'dex': entry, 'class': types[owner][1:-1].replace('/', '.'), 'method': strings[methods[method_index][2]], 'hits': hits})
(ROOT / 'official-string-users.json').write_text(json.dumps(found, indent=2), encoding='utf-8')
print(json.dumps(found, indent=2))
