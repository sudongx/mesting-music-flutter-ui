"""Read original DEX metadata for candidate discovery; confirm bodies in REA/SDK.

Instruction scans below are deliberately candidate-only: aligned byte patterns
can also occur in data payloads. They are never substituted for disassembly.
"""
from pathlib import Path
import struct, re, zipfile, json

APK = Path('D:/AnLi/.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk')

def uleb(data, pos):
    value = shift = 0
    while True:
        byte = data[pos]; pos += 1
        value |= (byte & 127) << shift
        if byte < 128:
            return value, pos
        shift += 7

class Dex:
    def __init__(self, name, data):
        self.name, self.data = name, data
        n, off = struct.unpack_from('<II', data, 56)
        self.strings = []
        for i in range(n):
            pos = struct.unpack_from('<I', data, off+4*i)[0]
            _, pos = uleb(data, pos)
            self.strings.append(data[pos:data.index(0,pos)].decode('utf-8', errors='replace'))
        n, off = struct.unpack_from('<II', data, 64)
        self.types = [self.strings[struct.unpack_from('<I',data,off+4*i)[0]] for i in range(n)]
        n, off = struct.unpack_from('<II', data, 88)
        self.methods = [struct.unpack_from('<HHI',data,off+8*i) for i in range(n)]
        n, off = struct.unpack_from('<II', data, 80)
        self.fields = [struct.unpack_from('<HHI',data,off+8*i) for i in range(n)]
        n, off = struct.unpack_from('<II', data, 96)
        self.classes = []
        for i in range(n):
            pos=off+32*i
            self.classes.append((self.types[struct.unpack_from('<I',data,pos)[0]],struct.unpack_from('<I',data,pos+24)[0]))

    def bodies(self):
        for cls, pos in self.classes:
            if not pos: continue
            counts=[]
            for _ in range(4):
                value,pos=uleb(self.data,pos);counts.append(value)
            for count in counts[:2]:
                for _ in range(count):
                    _,pos=uleb(self.data,pos);_,pos=uleb(self.data,pos)
            for count in counts[2:]:
                idx=0
                for _ in range(count):
                    delta,pos=uleb(self.data,pos);_,pos=uleb(self.data,pos);code,pos=uleb(self.data,pos);idx+=delta
                    if code:
                        length=struct.unpack_from('<I',self.data,code+12)[0]
                        yield cls,self.strings[self.methods[idx][2]],self.data[code+16:code+16+length*2]

    def find(self, string_test=None, call_test=None):
        strings={i:s for i,s in enumerate(self.strings) if string_test and string_test(s)}
        calls={i:self.types[m[0]]+'->'+self.strings[m[2]] for i,m in enumerate(self.methods) if call_test and call_test(self.types[m[0]],self.strings[m[2]])}
        if not strings and not calls: return []
        results=[]
        for cls,method,code in self.bodies():
            hits=set()
            for pos in range(0,len(code)-5,2):
                op=code[pos]
                if op in (0x1a,0x1b):
                    idx=struct.unpack_from('<H' if op==0x1a else '<I',code,pos+2)[0]
                    if idx in strings:hits.add(strings[idx])
                elif op in (0x6e,0x6f,0x70,0x71,0x72,0x74,0x75,0x76,0x77,0x78):
                    idx=struct.unpack_from('<H',code,pos+2)[0]
                    if idx in calls:hits.add(calls[idx])
            if hits: results.append({'dex':self.name,'class':cls[1:-1].replace('/','.'),'method':method,'candidates':sorted(hits)})
        return results

def dexes():
    with zipfile.ZipFile(APK) as archive:
        for name in archive.namelist():
            if re.fullmatch(r'classes\d*\.dex',name):
                yield Dex(name,archive.read(name))

if __name__=='__main__':
    out=Path(__file__).parent
    findings=[]; endpoints=[]
    for dex in dexes():
        endpoints += [{'dex':dex.name,'string':s} for s in dex.strings if ('/' in s and any(x in s.lower() for x in ['listen/','footprint','listenrecord','listen_record','listencalendar','listen-calendar'])) or s in ['todayDuration','todayListenTime','totalListenTime','listenDuration','totalDuration','todayPlayTime','realTimeAudioPlayDuration']]
        findings += dex.find(string_test=lambda s: s in ['todayDuration','todayListenTime','totalListenTime','listenDuration','realTimeAudioPlayDuration','addPlayDuration minutes='] or ('/' in s and any(x in s.lower() for x in ['listen/','footprint','listenrecord','listen_record','listencalendar','listen-calendar'])),call_test=lambda c,m:'PlayRecordEntity;' in c or m=='reportPlayDuration')
    (out/'candidate-index.json').write_text(json.dumps({'endpoints':endpoints,'methods':findings},ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps({'endpoints':endpoints,'methods':findings},ensure_ascii=False,indent=2))
