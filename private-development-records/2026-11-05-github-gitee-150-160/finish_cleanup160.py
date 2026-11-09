from common160 import *
from datetime import datetime,timezone
cleanup=read(OUT/'cleanup-result.json');assert cleanup['count']==51 and not cleanup['permanentDelete']
private=read(OUT/'private-records-push.json');verification=read(OUT/'private-final-verification.json');assert verification['independentFetch']
before=read(OUT/'workspace-before.json');removed={Path(x['path']).resolve() for x in cleanup['movedToRecycleBin']}
for name,h in before['files'].items():assert sha(ROOT/name)==h,name
retained=0
for name,h in before['frozen'].items():
    path=Path(name)
    if path.resolve() in removed:assert not path.exists()
    else:assert sha(path)==h;retained+=1
assert sha(before['indexPath'])==before['indexSha256']
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()==before['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=ROOT).strip()
handoff=ROOT/'HANDOFF-GITHUB-GITEE-2026-11-05-v1.0.60.md'
text=handoff.read_text('utf-8')
text+='\n## 用户确认的本地清理\n\n已将 D:/AnLi/release 内51个与GitHub原附件大小/SHA256相同的APK移入回收站，未永久删除；保留校验和说明文件、根目录51份源码ZIP、原签名/锁、全部产品源码。旧release160/after.json中的112份冻结物记录为清理前历史基线，现有51个APK缺失是明确授权的清理，不自动从旧基线恢复或判为丢失。当前清理清单及其远端链接在归档目录cleanup-result.json；本轮最新保护回执为after-cleanup.json。\n\n私有记录最终增量已独立取回校验（OpenSSL TLS、证书校验开启），早期schannel下载失败证据保留。源码与APK保留既有公开标签/原始ZIP中的文档；没有额外独立公开上传交接或开发记录。Gitee无需APK，所有APK可从GitHub下载。\n'
handoff.write_text(text,'utf-8')
agent=ROOT/'AGENTS.md';old=agent.read_bytes()
prefix='''**2026-11-05 GitHub/Git/Gitee归档与授权清理完成：先读[归档与清理交接](HANDOFF-GITHUB-GITEE-2026-11-05-v1.0.60.md)及 `.codex-artifacts/2026-11-05-github-gitee-150-160/after-cleanup.json`。GitHub补50～60共11个正式Release/77原附件，Latest60；Gitee补52～60共9源码标签，50/51旧对象保留。51份正式源码ZIP的产品代码均在双端，早期6版9份交接/元数据差异另存私有；新增交接与脱敏开发记录5478份仅私有Gitee（312脱敏/745按约定排除），最终增量独立取回核验，证书校验保留。用户明确既有标签/源码ZIP中已有的文档保留，不改写公开历史，不再单独上传交接/开发记录到GitHub。Gitee不要求APK。按用户确认，仅release中51个远端SHA256核验APK移入回收站，非永久删除；根目录源码ZIP、校验说明、全部源码、签名/锁及主beta/b6bcd542/空暂存保持。旧112冻结物基线含现已授权回收的51个APK，不据旧记录自动恢复或报丢失；其远端链接和回收清单另存。本轮只归档及清理，不重建/手机/ADB/音乐账号/业务后台；真实网易云领取到账及60设备边界沿用未验。新接续先只读核对并等待，不自动同步清理构建发布。下方均保留历史时点。**\r\n\r\n'''
agent.write_bytes(prefix.encode('utf-8')+old)
record={'recordedAtUtc':datetime.now(timezone.utc).isoformat(),'head':before['head'],'branch':before['branch'],'indexUnchanged':True,'originalSourceFilesVerifiedBeforeDocumentationUpdate':len(before['files']),'onlyExistingSourceFileUpdatedAfterward':'AGENTS.md prefix; original bytes preserved','recycledApks':51,'recycledBytes':sum(x['bytes'] for x in cleanup['movedToRecycleBin']),'permanentDelete':False,'remainingFrozenFilesVerified':retained,'rootSourceZipsRetained':True,'releaseMetadataRetained':True,'sourceCodeRetained':True,'githubStandalonePrivateDocUploads':False,'privateRecordsBackupVerified':True}
save(OUT/'after-cleanup.json',record)
parent=private['commit'];entries=tree_files(parent)
files={'AGENTS.md':agent,handoff.name:handoff}
for name in ['cleanup-result.json','after-cleanup.json','private-final-verification.json','private-full-download-check.json']:
    files['private-development-records/final-archive-verification/'+name]=OUT/name
for name,oid in write_blobs(files).items():entries[name]={'oid':oid,'mode':'100644'}
commit,tree=commit_tree(entries,'private-cleanup-receipt',parent,'backup: private archive handoff and authorized recycle receipts')
url='https://gitee.com/'+REPO+'.git';git('push','--atomic',url,commit+':'+private['branch'])
fresh=OUT/'fresh-private-delta.git'
subprocess.run(['git','--git-dir='+str(fresh),'-c','http.sslBackend=openssl','-c','http.version=HTTP/1.1','fetch','--depth=1','--no-tags',url,private['branch']],env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never'),check=True,capture_output=True)
assert subprocess.check_output(['git','--git-dir='+str(fresh),'rev-parse','FETCH_HEAD']).decode().strip()==commit
assert subprocess.check_output(['git','--git-dir='+str(fresh),'ls-tree','-rz',commit])==git('ls-tree','-rz',commit)
private.update(commit=commit,tree=tree,cleanupReceiptBackedUp=True,finalIndependentFetchVerified=True)
save(OUT/'private-records-push.json',private)
save(OUT/'final-completion.json',{'githubReleases':11,'githubAssets':77,'githubLatest':'v1.0.60','giteeNewSourceTags':9,'formalProductSourceVersionsOnBothRemotes':51,'privateRecords':5478,'privateBranch':private['branch'],'privateCommit':commit,'privateRecordTreeIndependentlyVerified':True,'cleanup':record,'giteeApkNotRequired':True,'noMusicBackendPublication':True})
print(json.dumps({'completed':True,'githubReleases':11,'githubAssets':77,'privateRecords':5478,'recycledApks':51,'rootSourceArchivesAndMetadataRetained':True,'privateCommit':commit},indent=2),flush=True)
