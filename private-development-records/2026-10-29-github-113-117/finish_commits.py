"""Complete metadata assembly after the ZIP-only baseline manifest was omitted.
No ref was published. Reuse and re-verify the five already prepared commits.
"""
from common import *
from continuation_docs import provenance,continuation
import hashlib,zipfile
preserve();rows=read(OUT/'verified-deliveries.json')
commits=['e11c4b8fb5921a47f2a11b432f3ec83855e17c49','f4808d68792079b03877405526c7e467bc4ee1a9','14a48fab0a876d13ab67c2499ece0b852a19daf2','b5e8e578ea568b9c957746098c5736840cc7eb29','3c4e29e7e210973ab7edf5dd655ec2fd08798b2a']
parent=BASELINE
for row,commit in zip(rows,commits):
 assert git('show','-s','--format=%P',commit).decode().strip()==parent
 tree=git('show','-s','--format=%T',commit).decode().strip();actual=tree_files(commit)
 proof=read(OUT/f"{row['tag']}-source-manifest.json")
 with zipfile.ZipFile(ROOT/row['zip']) as z:
  for f in proof['files']:
   data=z.read(f['path']);assert hashlib.sha256(data).hexdigest()==f['sha256']
   oid=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
   assert actual[f['path']][1]==oid,f['path']
 row.update({'commit':commit,'tree':tree,'parent':parent,'gitFiles':len(actual),'archiveAdditions':sorted(set(actual)-{f['path'] for f in proof['files']})})
 parent=commit
# Start with the complete latest ZIP, including both manifest-only entries.
proof=read(OUT/'v1.0.17-source-manifest.json')
files={f['path']:OUT/'snapshots'/'v1.0.17'/f['path'] for f in proof['files']}
for name in read(OUT/'workspace-before.json')['files']:
 if name not in files:files[name]=ROOT/name
for row in rows:files[row['manifest']]=OUT/f"{row['tag']}-source-manifest.json"
base=OUT/'generated'/'continuation'
(base/'provenance.md').write_bytes(provenance(rows));files[ARCHIVE_DOC]=base/'provenance.md'
(base/'handoff.md').write_bytes(continuation(rows));files[HANDOFF]=base/'handoff.md'
for name in ['AGENTS.md','docs/CONTINUE-BETA.md']:files[name]=base/Path(name).name
commit,tree=create_commit(files,'1.0.17-continuation-verified',parent,tree_files(BASELINE))
oldtree=tree_files(parent);newtree=tree_files(commit);overrides={'AGENTS.md','docs/CONTINUE-BETA.md'}
assert all(oldtree[f['path']]==newtree[f['path']] for f in proof['files'] if f['path'] not in overrides)
save(OUT/'archive-commits.json',{'baseline':BASELINE,'branch':'beta','commits':rows,'releaseCommit':parent,'finalCommit':commit,
 'continuationTree':tree,'documentationOverrides':sorted(overrides),'primaryWorkspaceHeadAndIndexPreserved':True})
preserve();print('Five frozen commits and full continuation verified:',commit)
