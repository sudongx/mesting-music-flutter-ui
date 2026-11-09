"""Offline bounded direct-invoke scan of selected official uploader methods.

The scan decodes standard DEX instruction widths and skips payload bodies. It
does not execute code or prove reflection/runtime coverage. Selected findings
are seeds for REA/JADX source inspection, not evidence of network acceptance.
"""
from pathlib import Path
import importlib.util
import json
import struct
import zipfile
import hashlib

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location(
    'dex_contract179', ROOT / '.codex-artifacts/2026-11-05-soda-rootless-feasibility/read_dex_contract.py')
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
Dex = mod.Dex

WIDTH = {}
for a,b,w in [(0x0a,0x12,1),(0x2d,0x3d,2),(0x44,0x6d,2),
              (0x6e,0x72,3),(0x74,0x78,3),(0x7b,0x8f,1),
              (0x90,0xaf,2),(0xb0,0xcf,1),(0xd0,0xe2,2)]:
    WIDTH.update({i:w for i in range(a,b+1)})
WIDTH.update({0:1,1:1,2:2,3:3,4:1,5:2,6:3,7:1,8:2,9:3,
              0x13:2,0x14:3,0x15:2,0x16:2,0x17:3,0x18:5,0x19:2,
              0x1a:2,0x1b:3,0x1c:2,0x1d:1,0x1e:1,0x1f:2,
              0x20:2,0x21:1,0x22:2,0x23:2,0x24:3,0x25:3,0x26:3,
              0x27:1,0x28:1,0x29:2,0x2a:3,0x2b:3,0x2c:3,
              0xfa:4,0xfb:4,0xfc:3,0xfd:3,0xfe:2,0xff:2})


def methods(dex):
    for ordinal in range(dex.class_count):
        row = struct.unpack_from('<8I',dex.data,dex.class_offset+32*ordinal)
        pos = row[6]
        if not pos: continue
        sizes=[]
        for _ in range(4):n,pos=dex.uleb(pos);sizes.append(n)
        for size in sizes[:2]:
            for _ in range(size):_,pos=dex.uleb(pos);_,pos=dex.uleb(pos)
        for size in sizes[2:]:
            index=0
            for _ in range(size):
                delta,pos=dex.uleb(pos);index+=delta
                access,pos=dex.uleb(pos);code,pos=dex.uleb(pos)
                if code:yield index,code


def selected_sites(dex, code, targets):
    size=dex.uint(code+12)
    words=struct.unpack_from('<%dH'%size,dex.data,code+16)
    i=0;sites=[]
    while i<size:
        op=words[i]&255
        if words[i] in (0x100,0x200,0x300):
            ident=words[i]
            if ident==0x100:width=4+2*words[i+1]
            elif ident==0x200:width=2+4*words[i+1]
            else:
                count=words[i+2]+words[i+3]*65536
                width=4+(words[i+1]*count+1)//2
        else:
            width=WIDTH.get(op)
            if width is None:return sites,{'unknownOpcode':op,'offset':i}
            if (0x6e<=op<=0x72 or 0x74<=op<=0x78) and i+1<size and words[i+1] in targets:
                sites.append({'codeUnit':i,'opcode':hex(op),'target':targets[words[i+1]],
                              'nearbyCodeUnits':[hex(x) for x in words[max(0,i-12):min(size,i+9)]]})
        if i+width>size:return sites,{'instructionOverrun':i}
        i+=width
    return sites,None


def main():
    source=ROOT/'.codex-artifacts/2026-11-06-release165/official-device-19.0.0.apk'
    allrows=[];coverage=[]
    names={'setTopAccessKey','setTopSecretKey','setTopSessionToken','setServiceID',
           'setFileUploadDomain','setConfig','_setStringValue'}
    with zipfile.ZipFile(source) as archive:
        entries=[n for n in archive.namelist() if n.endswith('.dex')]
        for entry in entries:
            raw=archive.read(entry);dex=Dex(raw);targets={}
            for i in range(dex.method_count):
                owner,proto,name=struct.unpack_from('<HHI',raw,dex.method_offset+8*i)
                if dex.string(name) not in names:continue
                cls=dex.type(owner)
                if cls.startswith('Lcom/ss/bduploader/') and 'Image' in cls:
                    targets[i]=dex.method(i)
            if not targets:continue
            total=0;partial=0;found=0
            for index,code in methods(dex):
                total+=1
                sites,error=selected_sites(dex,code,targets)
                if error:partial+=1
                if sites:
                    found+=1
                    allrows.append({'dex':entry,'dexSha256':hashlib.sha256(raw).hexdigest(),
                                    'caller':dex.method(index),'codeItemOffset':code,
                                    'scanProblem':error,'sites':sites})
            coverage.append({'dex':entry,'targets':len(targets),'methodsScanned':total,
                             'partialMethods':partial,'matchedCallers':found})
            print(entry,'targetMethods',len(targets),'matchedCallers',found,'partial',partial,flush=True)
    out=OUT/'official-upload-callers179.json'
    assert not out.exists()
    out.write_text(json.dumps({'source':str(source),'coverage':coverage,'callers':allrows},
                              ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    print('totalCallers',len(allrows),flush=True)


if __name__=='__main__':main()
