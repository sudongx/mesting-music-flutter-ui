"""Publish verified archival evidence as a final documentation-only beta commit."""
from common149 import *
from datetime import datetime,timezone
verified=read(OUT/'remote-verification-final.json');prepared=read(OUT/'prepared-state.json')
assert verified['versionCount']==24 and verified['assetCount']==263
assert verified['sourceEntriesVerifiedInFreshClone']==50809
base=prepared['betaTip'];main=prepared['mainTip']
current={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
statefile=OUT/'final-state.json'
state=read(statefile) if statefile.exists() else {}
assert current['refs/heads/main']==main
assert current['refs/heads/beta'] in {base,state.get('finalBetaTip')}
if not state:
    # Verification records intentionally name the read-back source/navigation
    # tip. A document cannot contain the hash of its own enclosing commit.
    public={k:v for k,v in verified.items() if k not in ['preservation']}
    public['preservation']={k:v for k,v in verified['preservation'].items() if k!='primaryHead'}
    public['verifiedBeforeFinalEvidenceCommit']=True
    texts={'docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json':json.dumps(public,ensure_ascii=False,indent=2)+'\n'}
    handoff=git('show',base+':HANDOFF-GITHUB-2026-11-04-v1.0.49.md').decode('utf-8-sig')
    handoff=handoff.replace('已按用户确认准备24个版本的Git/GitHub完整归档','已按用户确认完成24个版本的Git/GitHub完整归档')
    handoff=handoff.replace('上传后会另加机器核验记录，包含263附件摘要与远端提交。','[最终GitHub机器核验](docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json)已回读263个附件大小/SHA256，独立新克隆的50,809个源码条目全部与原ZIP相符，原有49条Release和旧标签未改。')
    handoff=handoff.replace('远端会领先本地主HEAD','远端已领先本地主HEAD')
    texts['HANDOFF-GITHUB-2026-11-04-v1.0.49.md']=handoff
    texts['docs/CONTINUE-BETA.md']=handoff.replace('# GitHub 接续','# 当前维护分支接续').replace('(docs/','(')
    agents=git('show',base+':AGENTS.md').decode('utf-8-sig')
    agents=agents.replace('上传后机器核验另附','263附件大小/SHA256与新克隆50,809源码条目核验完成，见docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json',1)
    texts['AGENTS.md']=agents
    report=git('show',base+':docs/version-archive/RELEASE-ARCHIVE-2026-11-04-v125-v149.md').decode('utf-8-sig')
    report+='\n## 完成回读\n\n24条正式Release已发布，263个原附件的大小和GitHub提供的SHA256摘要全部相符；独立新克隆核验50,809个冻结源码条目。1.0.49为Latest；原有49条Release/附件及既有标签保持，main仅改README与两份下载导航文档。完整结果见[机器核验](GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json)。主机Git归档不能代替真实设备验收。\n'
    texts['docs/version-archive/RELEASE-ARCHIVE-2026-11-04-v125-v149.md']=report
    folder=OUT/'final-docs';files={}
    for name,text in texts.items():
        text=text.replace('\r\n','\n')
        path=folder/name;path.parent.mkdir(parents=True,exist_ok=True);path.write_text(text,'utf-8',newline='\n');files[name]=path
    blobs=write_blobs(files);entries=tree_files(base)
    entries.update({name:{'mode':'100644','oid':oid} for name,oid in blobs.items()})
    commit,tree=commit_tree(entries,'final-evidence',base,'docs: verify 24 GitHub releases, 263 assets and channel-sorted downloads')
    changes=git('diff-tree','--no-commit-id','--name-only','-r',base,commit).decode().splitlines()
    assert set(changes)==set(texts)
    state={'finalBetaTip':commit,'mainTip':main,'evidenceParent':base,'documentationPaths':changes}
    save(statefile,state)
git('merge-base','--is-ancestor',base,state['finalBetaTip'])
git('push','origin',state['finalBetaTip']+':refs/heads/beta')
refs={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
assert refs['refs/heads/beta']==state['finalBetaTip'] and refs['refs/heads/main']==main
for row in prepared['versions']:assert refs['refs/tags/'+row['tag']+'^{}']==row['commit']
headers=credentials();latest=request(headers,'GET',f'/repos/{REPO}/releases/latest')
assert latest['tag_name']=='v1.0.49' and not latest['prerelease'] and not latest['draft']
import base64
remote=request(headers,'GET',f'/repos/{REPO}/contents/docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json?ref=beta')
assert base64.b64decode(remote['content'])==(OUT/'final-docs/docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-verification.json').read_bytes()
state.update(completedAtUtc=datetime.now(timezone.utc).isoformat(),versionCount=24,assetCount=263,sourceEntriesVerified=50809,latest='v1.0.49',repository='https://github.com/'+REPO,downloadCatalog='https://github.com/'+REPO+'/blob/main/docs/apk-downloads.md',mainProductFilesUnchanged=True,preservation=preserve(),musicBackendPublication=False,phoneAccess=False,privateCandidatesExcluded=True)
# Leave a local continuation entry without modifying any preexisting file or
# pretending the intentionally dirty primary branch has been checked out anew.
local=ROOT/'HANDOFF-GITHUB-ARCHIVE-2026-11-04-v1.0.49-COMPLETED.md'
text=git('show',state['finalBetaTip']+':HANDOFF-GITHUB-2026-11-04-v1.0.49.md').decode('utf-8-sig')
text+=f"\n最终远端beta：`{state['finalBetaTip']}`；main文档提交：`{main}`。本地新入口创建于49源码ZIP冻结之后，不回填旧ZIP。原主HEAD/index/既有文件保持；新电脑直接克隆远端beta。\n"
text=text.replace('\r\n','\n')
if local.exists():assert local.read_text('utf-8')==text
else:local.write_text(text,'utf-8',newline='\n')
state['localHandoff']=str(local);save(statefile,state)
print(json.dumps(state,ensure_ascii=False,indent=2),flush=True)
