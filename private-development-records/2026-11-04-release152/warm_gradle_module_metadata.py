"""Prefetch exact Gradle metadata only where the existing official POM requests it."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import build_opener, ProxyHandler
from collections import Counter
import os, json

OUT=Path(__file__).resolve().parent
CACHE=OUT/'maven-transport-cache'
BASES={'google':'https://dl.google.com/dl/android/maven2/', 'central':'https://repo.maven.apache.org/maven2/'}
selected=[]
for pom in CACHE.rglob('*.pom'):
    if b'published-with-gradle-metadata' in pom.read_bytes():
        target=pom.with_suffix('.module')
        relative=target.relative_to(CACHE).as_posix().split('/',1)
        if relative[0] in BASES and not target.exists():selected.append((target,*relative))

def warm(item):
    target,route,relative=item
    try:
        with build_opener(ProxyHandler({})).open(BASES[route]+relative,timeout=15) as response:data=response.read(2*1024*1024+1)
        assert len(data)<=2*1024*1024
        parsed=json.loads(data)
        assert 'formatVersion' in parsed
        temporary=target.with_name(target.name+'.prefetch-'+str(os.getpid()))
        temporary.write_bytes(data)
        if target.exists():temporary.unlink();return 'raced_cached'
        os.replace(temporary,target)
        return 'warmed'
    except Exception:return 'unavailable'

with ThreadPoolExecutor(max_workers=8) as pool:counts=Counter(pool.map(warm,selected))
result={'exactPomRedirects':len(selected),'results':dict(counts)}
(OUT/'maven-gradle-module-prefetch.json').write_text(json.dumps(result),'utf-8')
print(json.dumps(result))
