from common160 import *
from datetime import datetime,timezone
p=read(OUT/'prepared-state.json');published=read(OUT/'publish-state.json');assert published['completed']
h=credentials();rows=request(h,'GET',f'/repos/{REPO}/releases?per_page=100')
live={r['tag_name']:r for r in rows};old=read(OUT/'github-before.json')['releases']
for r in old:
    actual=live[r['tag_name']]
    for key in ['id','name','body','tag_name','draft','prerelease','published_at','target_commitish']:
        assert actual[key]==r[key],(r['tag_name'],key)
    assert [(a['id'],a['name'],a['size'],a.get('digest')) for a in actual['assets']]==[(a['id'],a['name'],a['size'],a.get('digest')) for a in r['assets']]
assets=0
for row in p['versions']:
    r=live[row['tag']];assert not r['draft'] and not r['prerelease']
    remote=request(h,'GET',f"/repos/{REPO}/releases/{r['id']}/assets?per_page=100")
    expected={a['name']:a for a in row['assets']};assert set(expected)=={a['name'] for a in remote}
    for a in remote:
        e=expected[a['name']];assert a['size']==e['size'] and a['digest']=='sha256:'+e['sha256']
    assets+=len(remote)
assert request(h,'GET',f'/repos/{REPO}/releases/latest')['tag_name']=='v1.0.60'
fresh={host:read(OUT/(host+'-fresh-verification.json')) for host in ['github','gitee']}
assert all(v['complete'] for v in fresh.values())
for host in ['github','gitee']:
    refs={l.split()[1]:l.split()[0] for l in git('ls-remote','--heads','--tags',f'https://{host}.com/{REPO}.git').decode().splitlines()}
    expected=read(OUT/(host+'-refs-after.json'))
    if host=='gitee':
        private=read(OUT/'private-records-push.json');expected[private['branch']]=private['commit']
    assert refs==expected
    save(OUT/(host+'-refs-final.json'),refs)
# Import only the verified new tags and remote-tracking pointers. The local
# beta branch, primary index and all dirty files remain deliberately untouched.
for row in p['versions']:
    existing=subprocess.run(['git','show-ref','--verify','--hash','refs/tags/'+row['tag']],cwd=ROOT,capture_output=True)
    if existing.returncode==0:assert existing.stdout.decode().strip()==row['tagObject']
    else:subprocess.run(['git','fetch','--no-tags',str(BARE),'refs/tags/'+row['tag']+':refs/tags/'+row['tag']],cwd=ROOT,check=True,capture_output=True)
for name,commit in [('origin/beta',p['betaTip']),('origin/main',p['mainTip']),('gitee/main',p['giteeTip'])]:
    subprocess.run(['git','fetch','--no-tags',str(BARE),commit+':refs/remotes/'+name],cwd=ROOT,check=True,capture_output=True)
protected=preserve()
report={'completedAtUtc':datetime.now(timezone.utc).isoformat(),'github':{'newFormalReleases':11,'originalAssetsVerified':assets,'originalUploadBytes':sum(a['size'] for row in p['versions'] for a in row['assets']),'latest':'v1.0.60','oldReleasesAndAssetsUnchanged':len(old),'source':fresh['github']},'gitee':{'newSourceTags':9,'existing50And51TagsPreserved':True,'latestCatalog':'v1.0.60','source':fresh['gitee'],'apkAssetsNotRequiredByUser':True,'privateRecords':read(OUT/'private-records-independent-verification.json'),'reason':'User permits GitHub-only APK storage; private Gitee records backup requested'},'localTags50Through60Verified':True,'preservation':protected,'phoneAccess':False,'musicBackendPublished':False,'sourceRebuilt':False,'forcePush':False,'deletedRefs':False}
save(OUT/'delivery-final.json',report)
handoff=f'''# GitHub / Git / Gitee归档交接（2026-11-05）

GitHub已完整归档1.0.50～1.0.60：11个正式Release、77个原始附件（APK、原始源码ZIP及校验文件），Latest为1.0.60。各版独立源码提交/注释标签来自对应原始ZIP；50/51沿用Gitee既有对象。旧73个Release与附件保持。

Gitee已补齐52～60的9个源码标签，50/51原标签保持，main源码和目录更新至60。按用户后续确认，Gitee不要求APK附件；原生Release暂不创建：现有API授权HTTP401，浏览器因无法可靠识别Windows URL而被自动审核阻止，已停止UI操作；没有创建新令牌或改变权限。不要把源码标签当成已完成Release附件归档。

GitHub和Gitee均从独立全新仓库浅取11个选中标签，每个树与原ZIP全部条目逐字节核验，并通过strict fsck；这不宣称全历史深克隆。具体条目数、refs、Release/附件SHA256及保护回执见 `.codex-artifacts/2026-11-05-github-gitee-150-160/delivery-final.json` 和同目录state/verification文件。

本地主分支beta及HEAD b6bcd542保持、空暂存与全部2660份既有工作区文件、112份冻结APK/ZIP、原签名/锁保持；已补本地50～60标签及远端跟踪引用。不自动pull/reset/clean/stash/switch，不将旧HEAD当完整产品。该交接写在60冻结以后，不回填旧包和源码ZIP。

GitHub beta：{p['betaTip']}；main仅目录文档：{p['mainTip']}；Gitee main：{p['giteeTip']}。原始版本标签不混导航文档。

本轮未重建、操作手机/ADB/真实音乐账号或音乐更新后台。归档不证明真实网易云领取到账、升级/冷恢复或设备验收；这些边界及历史统计未解决事项沿用60交接。

Gitee不要求APK附件；交接与开发记录仅私有备份，不再单独上传GitHub。若后续补原生Release，需先提供可用本机API授权；不可在聊天中粘贴令牌，不重复上传已完成的GitHub文件。
'''
(ROOT/'HANDOFF-GITHUB-GITEE-2026-11-05-v1.0.60.md').write_text(handoff,'utf-8')
print(json.dumps({'githubReleases':11,'githubAssets':assets,'giteeNewSourceTags':9,'giteeReleasesDeferredByUser':True,'preservation':protected},ensure_ascii=True,indent=2),flush=True)
