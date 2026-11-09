"""Verify remote archive through a fresh checkout and publish portable handoff."""
from common import *
from github_transport import credentials,request
import subprocess,io,zipfile,hashlib
state=read(OUT/'state.json');assert state['completed']
checkout=OUT/'fresh-checkout'
if not checkout.exists():
 subprocess.run(['git','clone','--quiet','--single-branch','--branch','beta','https://github.com/'+REPO+'.git',str(checkout)],check=True)
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=checkout).decode().strip()==state['tip']
# Compare every frozen source byte with the independently downloaded checkout.
manifest=read(checkout/'SOURCE-SNAPSHOT.json')
archive=subprocess.check_output(['git','archive','--format=zip','HEAD'],cwd=checkout)
with zipfile.ZipFile(io.BytesIO(archive)) as source:
 for item in manifest['files']:assert hashlib.sha256(source.read(item['path'])).hexdigest()==item['sha256'],item['path']
headers=credentials();rows=[]
for row in state['versions']:
 release=request(headers,'GET',f'/repos/{REPO}/releases/tags/'+row['tag'])
 assert not release['draft'] and release['prerelease']==row['prerelease']
 assets=release['assets'];assert len(assets)==len(row['assets'])
 for asset in row['assets']:
  remote=next(a for a in assets if a['name']==asset['name'])
  assert remote['size']==asset['size'] and remote['digest']=='sha256:'+asset['sha256']
 assert git('ls-remote','origin','refs/tags/'+row['tag']).decode().split()[0]==row['commit']
 rows.append({k:row[k] for k in ('version','tag','commit','prerelease','url','assets')})
evidence={'date':'2026-10-30','versions':rows,'freshCheckoutSourceFilesVerified':len(manifest['files']),'frozenTip':state['tip'],'primaryHeadPreserved':state['head'],'musicBackendTouched':False,'phoneAccessed':False,'note':'1.0.22 is a candidate without physical-device acceptance. Historical source manifests describe frozen snapshots, before this archival documentation commit.'}
for row in evidence['versions']:
 for asset in row['assets']:asset.pop('path',None)
doc='docs/version-archive/GITHUB-ARCHIVE-2026-10-30-v119-v122-verification.json'
handoff='HANDOFF-GITHUB-2026-10-30-v1.0.22.md'
save(ROOT/doc,evidence)
text='''# GitHub archive handoff — 2026-10-30

1.0.19/code40 through 1.0.22/code43 now have independent frozen commits, version tags and GitHub Releases. Each release contains 11 original delivery/verification attachments; GitHub SHA-256 and sizes match local originals. Each tagged source was reconstructed from that version’s frozen source ZIP. Existing APK and ZIP files were not changed.

1.0.22 remains a **candidate prerelease**: no physical-device acceptance, native crash root cause or permanent fix is claimed. The user reported native crashes after installing 1.0.21; archival publication is not a stability endorsement. Read the version handoffs and validation limitations before further work.

The remote beta maintenance branch includes all four frozen versions and this archive handoff. The existing local beta HEAD, primary index and pre-existing dirty worktree were deliberately retained. Do not pull/reset over local changes. A fresh clone of remote beta verified every file listed in the 1.0.22 source snapshot. The snapshot describes the frozen product, before these additional archive documents.

No music backend publication, phone/ADB access, or real-account operation was performed. Private signing credentials and private device evidence were excluded. Existing public upstream SDK fixtures and licenses remain intact.

Evidence: [archive verification](docs/version-archive/GITHUB-ARCHIVE-2026-10-30-v119-v122-verification.json).

'''
text+='\n'.join(f"- [{r['tag']}]({r['url']}): `{r['commit']}`"+(' — candidate prerelease' if r['prerelease'] else '') for r in rows)+'\n'
(ROOT/handoff).write_text(text,encoding='utf-8')
# Add archive guidance on the remote branch without touching the local dirty AGENTS.md.
agent=git('show',state['tip']+':AGENTS.md').decode('utf-8')
agentfile=OUT/'AGENTS-archive.md'
agentfile.write_text('**2026-10-30 GitHub归档：1.0.19～1.0.22独立提交、标签和Release及44个附件已核验，beta已更新。1.0.22仍为候选预发布版、未手机验收。先读 [最新归档交接]('+handoff+')；冻结文档保留原历史状态。未经新授权不访问手机、账号或music后台。**\n\n'+agent,encoding='utf-8')
index=OUT/'index-archive-docs';env={'GIT_INDEX_FILE':str(index)}
git('read-tree',state['tip'],env=env)
for name,path in [(doc,ROOT/doc),(handoff,ROOT/handoff),('AGENTS.md',agentfile)]:
 oid=git('hash-object','-w','--no-filters',str(path)).decode().strip()
 git('update-index','--add','--cacheinfo','100644',oid,name,env=env)
tree=git('write-tree',env=env).decode().strip()
commit=git('commit-tree',tree,'-p',state['tip'],data=b'docs: verify GitHub archives 1.0.19 through 1.0.22\n').decode().strip()
git('push','origin',commit+':refs/heads/beta')
assert git('ls-remote','origin','refs/heads/beta').decode().split()[0]==commit
assert git('rev-parse','HEAD').decode().strip()==state['head']
assert not git('diff','--cached','--name-only').strip()
state['archiveDocumentationCommit']=commit;state['freshCheckoutVerified']=True;save(OUT/'state.json',state)
print('VERIFIED: 44 assets, four tags/releases, fresh source checkout, remote beta documentation; local HEAD/index retained.')
