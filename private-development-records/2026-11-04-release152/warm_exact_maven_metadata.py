"""Warm only literal, unchanged Maven POM coordinates in the task-local cache.

Gradle remains the resolver. This helper only moves predictable metadata I/O
ahead of that resolver; it never chooses a version or edits any project input.
"""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import build_opener, ProxyHandler, Request
from xml.etree import ElementTree as ET
from collections import Counter
import json, os, re

OUT = Path(__file__).resolve().parent
CACHE = OUT / 'maven-transport-cache'
GRADLE = Path('D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
BASES = {'google': 'https://dl.google.com/dl/android/maven2/',
         'central': 'https://repo.maven.apache.org/maven2/'}
NS = {'m': 'http://maven.apache.org/POM/4.0.0'}
seen = set()
counts = Counter()

def coordinates():
    found = set()
    for pom in CACHE.rglob('*.pom'):
        try: root = ET.fromstring(pom.read_bytes())
        except (ET.ParseError, OSError): continue
        for item in root.findall('.//m:dependency', NS) + root.findall('m:parent', NS):
            if item.findtext('m:scope', '', NS) == 'test': continue
            if item.findtext('m:optional', '', NS) == 'true': continue
            values = tuple((item.findtext('m:' + key, '', NS) or '').strip()
                           for key in ('groupId', 'artifactId', 'version'))
            if all(re.fullmatch(r'[A-Za-z0-9_.+-]+', value) and '$' not in value
                   and value not in {'LATEST', 'RELEASE', '+'} for value in values):
                found.add(values)
    return found

def warm(gav):
    group, artifact, version = gav
    relative = group.replace('.', '/') + '/' + artifact + '/' + version + '/' + artifact + '-' + version + '.pom'
    # A content-store hit is served locally by the live transport already.
    if any((GRADLE / group / artifact / version).glob('*/' + artifact + '-' + version + '.pom')):
        return 'gradle_cached'
    route = 'google' if group.startswith(('com.android.', 'androidx.', 'com.google.android.', 'com.google.firebase')) else 'central'
    target = CACHE / route / relative
    if target.exists(): return 'task_cached'
    try:
        opener = build_opener(ProxyHandler({}))
        with opener.open(Request(BASES[route] + relative, headers={'User-Agent': 'Mesting-build-metadata-prefetch/1'}), timeout=15) as response:
            data = response.read(2 * 1024 * 1024 + 1)
        if len(data) > 2 * 1024 * 1024: return 'oversize'
        ET.fromstring(data)
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(target.name + '.prefetch-' + str(os.getpid()))
        temporary.write_bytes(data)
        if target.exists(): temporary.unlink(); return 'raced_cached'
        os.replace(temporary, target)
        return 'warmed'
    except Exception:
        return 'unavailable'

for number in range(1, 5):
    pending = sorted(coordinates() - seen)
    if not pending: break
    # Bound the work even if a malformed POM contains a large dependency set.
    pending = pending[:1500]
    seen.update(pending)
    with ThreadPoolExecutor(max_workers=8) as pool:
        for future in as_completed([pool.submit(warm, gav) for gav in pending]):
            counts[future.result()] += 1
    report = {'round': number, 'literalCoordinates': len(seen), 'results': dict(counts)}
    (OUT / 'maven-exact-metadata-prefetch.json').write_text(json.dumps(report), 'utf-8')
    print(json.dumps(report), flush=True)
