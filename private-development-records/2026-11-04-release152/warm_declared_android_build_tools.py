"""Warm exact Google build-tool coordinates declared by the locked plugins.

The live task-local transport supplies upstream bytes or SHA1-verified cache
hits. This helper does not select versions for Gradle or alter source/config.
"""
from pathlib import Path
from urllib.request import build_opener, ProxyHandler
from xml.etree import ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from collections import Counter
import json,re

OUT=Path(__file__).resolve().parent
BASE='http://127.0.0.1:'+ (OUT/'maven-transport-port.txt').read_text().strip()+'/google/'
VERSIONS=json.loads((OUT/'plugin-agp-versions.json').read_text())
NS={'m':'http://maven.apache.org/POM/4.0.0'}
seen=set()
pending={('com.android.tools.build','gradle',version) for version in VERSIONS}
counts=Counter()

def fetch(path):
    with build_opener(ProxyHandler({})).open(BASE+path,timeout=40) as response:return response.read(120*1024*1024+1)

def warm(gav):
    group,artifact,version=gav
    relative=group.replace('.','/')+'/'+artifact+'/'+version+'/'+artifact+'-'+version
    dependencies=set()
    try:
        data=fetch(relative+'.pom')
        root=ET.fromstring(data)
        if b'published-with-gradle-metadata' in data:
            fetch(relative+'.module')
        packaging=root.findtext('m:packaging','jar',NS)
        if packaging in {'jar','aar'}:fetch(relative+'.'+packaging)
        for item in root.findall('.//m:dependency',NS):
            if item.findtext('m:scope','',NS)=='test' or item.findtext('m:optional','',NS)=='true':continue
            values=tuple((item.findtext('m:'+key,'',NS) or '').strip() for key in ('groupId','artifactId','version'))
            if values[0].startswith(('com.android.','androidx.')) and all(re.fullmatch(r'[A-Za-z0-9_.-]+',value) for value in values):dependencies.add(values)
        return 'warmed',dependencies
    except Exception:return 'unavailable',dependencies

for round_number in range(1,5):
    selected=sorted(pending-seen)[:600]
    if not selected:break
    seen.update(selected)
    pending=set()
    with ThreadPoolExecutor(max_workers=8) as pool:
        for result,dependencies in pool.map(warm,selected):
            counts[result]+=1
            pending.update(dependencies)
    record={'round':round_number,'literalBuildToolCoordinates':len(seen),'results':dict(counts)}
    (OUT/'maven-declared-build-tools-prefetch.json').write_text(json.dumps(record),'utf-8')
    print(json.dumps(record),flush=True)
