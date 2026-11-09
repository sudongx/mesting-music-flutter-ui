"""Publish a documentation-only completion commit without touching the primary index.

Only execute after independent public release readback and fresh clone checks pass.
The five frozen tags remain immutable; beta advances by one normal fast-forward.
"""
from continuation_docs import provenance,continuation
from common import *

preserve()
archive=read(OUT/'archive-commits.json')
publication=read(OUT/'release-publication.json')
public=read(OUT/'public-verification.json')
clone=read(OUT/'fresh-clone-verification.json')
assert publication['verified'] and public['publicApiReadbackVerified']
assert clone['checkedHead']==archive['finalCommit'] and clone['cleanCheckout']
assert len(clone['versions'])==5 and public['verifiedAssets']==65
parent=archive['finalCommit']
ref='refs/heads/codex/archive-1.0.13-1.0.17'
prior=refs((OUT/'remote-refs-before.txt').read_bytes())
remote=refs(git('ls-remote','--heads','--tags','origin'))
assert remote['refs/heads/beta']==parent
for name,oid in prior.items():
    if name!='refs/heads/beta':assert remote[name]==oid,name
assert git('rev-parse',ref).decode().strip()==parent

verification='docs/version-archive/GITHUB-ARCHIVE-2026-10-29-v113-v117-verification.json'
public['freshCloneVerification']=clone
public['archivalChecks']={
    'eachFrozenApkPackageVersionAndCodeVerified':True,
    'originalCertificatePreserved':CERT,
    'apkZipalign16KiBVerified':True,
    'sourceZipCrcAndEveryEntrySha256Verified':True,
    'newProductBuildOrTestRun':False,
    'primaryHeadAndIndexPreserved':True,
    'historicalArtifactsChecked':len(read(OUT/'workspace-before.json')['artifacts'])}
generated=OUT/'generated'/'complete'
generated.mkdir(parents=True,exist_ok=True)
save(generated/'verification.json',public)
files={ARCHIVE_DOC:provenance(archive['commits'],complete=True),
       HANDOFF:continuation(archive['commits'],complete=True),
       verification:(generated/'verification.json').read_bytes()}
files[ARCHIVE_DOC]+=('\n最终核验：[GitHub公开附件与新克隆核验](GITHUB-ARCHIVE-2026-10-29-v113-v117-verification.json)。'
                     '五个正式Release共65个附件均通过大小及服务端SHA-256核对；'
                     '独立新克隆逐条核对五份原ZIP的全部源码，工作区干净。\n').encode()
files[HANDOFF]+=('\n本轮验收记录见[公开附件及新克隆核验]('+verification+')。'
                '5版共65个附件通过GitHub公开接口回读，37个已有Release及原main／旧标签保持；'
                '从网络独立克隆并逐文件核对全部原ZIP条目，运行源码与1.0.17冻结版一致。\n').encode()

# These are continuation pointers in the archive tree, not edits to old frozen docs.
for name in ['AGENTS.md','docs/CONTINUE-BETA.md']:
    data=git('show',parent+':'+name).decode('utf-8')
    old='本轮完整归档1.0.13～1.0.17，远端beta以1.0.17为产品基线；'
    new='1.0.13～1.0.17五版独立提交、固定标签、正式Release及65个附件已全部归档并核验，新克隆源码核对通过；远端beta以1.0.17/code38为产品基线；'
    assert data.count(old)==1
    data=data.replace(old,new,1)
    data=data.replace('与本轮归档核验。冻结记录保留原时点；music后台未操作。',
        '与[最终归档核验]('+('docs/' if name=='AGENTS.md' else '')+
        'version-archive/GITHUB-ARCHIVE-2026-10-29-v113-v117-verification.json)。'
        '本次Git/GitHub完整归档经用户明确确认；下方冻结记录保留原时点，不表示远端缺失。'
        '本机原beta/deb68e4、index和全部脏工作区保持，禁止直接拉取覆盖；新目录可从远端beta克隆。music后台未操作。',1)
    if name=='docs/CONTINUE-BETA.md':
        data=data.replace('# 当前接续：Mesting Music 1.0.17 / code38',
                          '## 1.0.17冻结时的本地准备（历史记录）',1)
    files[name]=data.encode('utf-8')

index=OUT/'index-1.0.17-archive-complete'
assert not index.exists() and not (OUT/'archive-final.json').exists()
env={'GIT_INDEX_FILE':str(index)}
git('read-tree',parent,env=env)
for name,data in files.items():
    safe_path(name)
    path=generated/name
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_bytes(data)
    oid=git('hash-object','-w','--no-filters','--stdin',data=data).decode().strip()
    git('update-index','--add','--cacheinfo','100644',oid,name,env=env)
tree=git('write-tree',env=env).decode().strip()
commit=git('commit-tree',tree,'-p',parent,data=(
    'docs: record verified 1.0.13 through 1.0.17 GitHub archive\n\n'
    'Verify five frozen source snapshots, 65 public asset digests, and clean clone.\n').encode()).decode().strip()
changes=set(git('diff-tree','--no-commit-id','--name-only','-r',parent,commit).decode().splitlines())
assert changes==set(files),changes
oldtree=tree_files(parent);newtree=tree_files(commit)
assert all(newtree[name]==value for name,value in oldtree.items() if name not in files)
assert newtree['pubspec.lock']==oldtree['pubspec.lock']
save(OUT/'archive-final.json',{'commit':commit,'parent':parent,'tree':tree,
     'changedDocumentation':sorted(changes),'runtimeAndLockfileUnchanged':True,
     'published':False})
preserve()
git('update-ref',ref,commit,parent)
git('push','origin',ref+':refs/heads/beta')
after=refs(git('ls-remote','--heads','--tags','origin'))
assert after['refs/heads/beta']==commit
assert all(after[name]==oid for name,oid in remote.items() if name!='refs/heads/beta')
final=read(OUT/'archive-final.json');final['published']=True
save(OUT/'archive-final.json',final)

# Add only new archival files locally; preserve all files that existed before work.
local={name:data for name,data in files.items() if name not in {'AGENTS.md','docs/CONTINUE-BETA.md'}}
for row in archive['commits']:
    local[row['manifest']]=(OUT/(row['tag']+'-source-manifest.json')).read_bytes()
before=read(OUT/'workspace-before.json')
for name,data in local.items():
    assert name not in before['files']
    path=ROOT/name
    assert not path.exists() or path.read_bytes()==data,name
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_bytes(data)
preserve()
print('Documentation-only completion commit pushed:',commit,flush=True)
