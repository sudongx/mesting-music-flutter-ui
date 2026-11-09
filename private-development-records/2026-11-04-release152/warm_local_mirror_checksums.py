"""Generate this task-local mirror's SHA1 responses from its exact served bytes.

These are transport integrity checksums, not claims of independent upstream
authentication. Existing upstream checksum responses must agree and are never
overwritten. The original HTTPS/cache verification path stays unchanged.
"""
from pathlib import Path
from collections import Counter
import time,hashlib,json,os

OUT=Path(__file__).resolve().parent
counts=Counter()
for source in (OUT/'maven-transport-cache').rglob('*'):
    if not source.is_file() or source.suffix not in {'.pom','.module','.jar','.aar'}:continue
    if time.time()-source.stat().st_mtime<3:counts['recentSkipped']+=1;continue
    before=source.stat()
    with source.open('rb') as stream:digest=hashlib.file_digest(stream,'sha1').hexdigest()
    if source.stat().st_mtime_ns!=before.st_mtime_ns:counts['changedSkipped']+=1;continue
    target=source.with_name(source.name+'.sha1')
    if target.exists():
        existing=target.read_text('ascii').strip().split()[0].lower()
        assert existing==digest, 'Existing checksum differs: '+str(source)
        counts['existingMatched']+=1
        continue
    temporary=target.with_name(target.name+'.prefetch-'+str(os.getpid()))
    temporary.write_text(digest,'ascii')
    if target.exists():temporary.unlink();counts['racedSkipped']+=1;continue
    os.replace(temporary,target)
    counts['created']+=1
result=dict(counts)
(OUT/'maven-local-mirror-checksums.json').write_text(json.dumps(result),'utf-8')
print(json.dumps(result))
