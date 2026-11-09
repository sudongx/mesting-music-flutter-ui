"""Verify the actual R8 APK still exposes both annotated JS reply methods."""
import json
import re
import sys
import zipfile
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT/'.codex-artifacts/2026-11-05-soda-rootless-feasibility'))
from read_dex_contract import Dex

mapping = (ROOT/'build/app/outputs/mapping/betaRelease/mapping.txt').read_text('utf-8')
expected = {
    'com.mesting.music.QishuiWebAuthPlugin$begin$1': '(ILjava/lang/String;Ljava/lang/String;)V',
    'com.mesting.music.QishuiWebAuthPlugin$verify$1': '(ZLjava/lang/String;)V',
}
wanted = {}
for original, signature in expected.items():
    match = re.search(r'^'+re.escape(original)+r' -> ([^:]+):$', mapping, re.M)
    assert match, original
    wanted['L'+match[1].replace('.','/')+';'] = (original, signature)
found = []
with zipfile.ZipFile(ROOT/'release/Mesting-Music-v1.0.73.apk') as apk:
    for name in apk.namelist():
        if not re.fullmatch(r'classes\d*\.dex', name):
            continue
        dex = Dex(apk.read(name))
        for owner, (original, signature) in wanted.items():
            cls = dex.inspect_class(owner)
            if cls is None:
                continue
            method = next(m for m in cls['declared_methods'] if m['name']=='complete' and m['descriptor']==signature)
            assert method['access_flags'] & 1
            annotation = next(m for m in cls['methods'] if m['name']=='complete' and m['descriptor']==signature)
            assert any(a['type']=='Landroid/webkit/JavascriptInterface;' and a['visibility']==1 for a in annotation['annotations'])
            found.append({'class':owner,'originalClass':original,'method':'complete',
                          'descriptor':signature,'public':True,'runtimeJsAnnotation':True,'dex':name})
assert len(found)==2
(OUT/'qr-javascript-interface-verification.json').write_text(json.dumps(found,indent=2),'utf-8')
print({'actualR8JavascriptCallbacksVerified':len(found)})
