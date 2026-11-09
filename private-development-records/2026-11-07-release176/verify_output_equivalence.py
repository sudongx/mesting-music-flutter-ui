"""Prove whether candidate2 actual audio-route evidence carries over to3."""
from pathlib import Path
import hashlib
import json
import re
import zipfile

OUT = Path(__file__).resolve().parent
def inputs(candidate):
    return {r['path']:r['sha256'] for r in json.loads((OUT/candidate/'build-input.json').read_text('utf8'))['files']
            if r['path'].startswith('android/')}
before, after = inputs('candidate2'), inputs('candidate3')
native_changed = sorted(p for p in before.keys() | after.keys() if before.get(p) != after.get(p))
def dex(candidate):
    with zipfile.ZipFile(OUT/candidate/'Mesting-Music-v1.0.76.apk') as apk:
        return {p:hashlib.sha256(apk.read(p)).hexdigest() for p in apk.namelist()
                if re.fullmatch(r'classes\d*\.dex',p)}
a,b = dex('candidate2'),dex('candidate3')
record = {'candidateBefore':2,'candidateAfter':3,'nativeSourceInputCount':len(after),
    'allNativeSourceInputsByteIdentical':not native_changed,'changedNativeSourcePaths':native_changed,
    'allDexPayloadsByteIdentical':a==b,'dexBefore':a,'dexAfter':b,
    'scope':'Only native route evidence; candidate2 visual/performance run remains rejected.'}
(OUT/'device/native-output-candidate3-equivalence.json').write_text(json.dumps(record,indent=2)+'\n','utf8')
print({k:record[k] for k in ['allNativeSourceInputsByteIdentical','allDexPayloadsByteIdentical']})
assert not native_changed and a==b
