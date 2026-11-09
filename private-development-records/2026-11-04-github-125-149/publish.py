"""Push immutable snapshots, then publish originals with verified asset hashes.

Resume is by tag/release ID and asset name+digest. Existing mismatched assets
are never overwritten. A failed upload is reread before any bounded retry.
"""
from common149 import *
from datetime import datetime,timezone
import time,zipfile

state=read(OUT/'prepared-state.json');assert len(state['versions'])==24
assert state.get('betaTip') and state.get('mainTip')
before=read(OUT/'remote-before.json');refs=before['refs']
preserve()
current={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
for branch in ['beta','main']:
    assert current['refs/heads/'+branch] in {refs['refs/heads/'+branch],state[branch+'Tip']},('Remote branch changed',branch)
    git('merge-base','--is-ancestor',refs['refs/heads/'+branch],state[branch+'Tip'])
for row in state['versions']:
    actual=current.get('refs/tags/'+row['tag'])
    assert actual in {None,row['tagObject']},('Remote tag collision',row['tag'])
refspecs=[row['tag']+':refs/tags/'+row['tag'] for row in state['versions']]
refspecs += [state['betaTip']+':refs/heads/beta',state['mainTip']+':refs/heads/main']
receipt=git('push','--atomic','origin',*refspecs)
(OUT/'push-receipt.txt').write_bytes(receipt)
current={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
assert all(current['refs/heads/'+branch]==state[branch+'Tip'] for branch in ['beta','main'])
assert all(current['refs/tags/'+row['tag']]==row['tagObject'] and current['refs/tags/'+row['tag']+'^{}']==row['commit'] for row in state['versions'])
save(OUT/'remote-after-push.json',current)
print('Atomic push verified: 24 annotated tags, beta fast-forward and documentation-only main fast-forward.',flush=True)

headers=credentials();headers['User-Agent']='Mesting-frozen-archive-125-149'
statusfile=OUT/'publish-state.json'
status=read(statusfile) if statusfile.exists() else {'versions':[],'refsPushed':True}
def get(path):
    for attempt in range(4):
        try:return request(headers,'GET',path)
        except RuntimeError:
            if attempt==3:raise
            time.sleep(2*(attempt+1))
def assets_for(rid):
    result=[]
    for page in range(1,5):
        rows=get(f'/repos/{REPO}/releases/{rid}/assets?per_page=100&page={page}')
        result+=rows
        if len(rows)<100:return result
    raise AssertionError('Too many assets')
def body_for(row):
    with zipfile.ZipFile(ROOT/f"Mesting-Music-{row['tag']}-source.zip") as archive:
        notes=json.loads(archive.read('assets/data/release-notes.json'))['releaseNotes']
    text=f"Mesting Music {row['version']} / Android code{row['code']}\n\n"
    text+='安装通道：**Beta**（`com.mesting.music.beta`）。本条按用户确认作为**正式 GitHub Release** 发布；安装通道和 prerelease 标记分别记录。\n\n'
    text+=f"[按安装通道分组、版本倒序的下载目录](https://github.com/{REPO}/blob/beta/docs/apk-downloads.md) · [正式稳定通道](https://github.com/{REPO}/blob/main/docs/apk-downloads.md#正式稳定版)\n\n"
    text+='本版更新：\n\n'+''.join('- '+str(note)+'\n' for note in notes)
    text+=f"\n冻结源码提交：`{row['commit']}`。该标签的全部 {row['sourceEntries']} 个文件来自本版原始源码 ZIP，已逐字节核验；没有从最新工作树回填历史。\n\n"
    if row['version']<'1.0.37' and int(row['version'].rsplit('.',1)[1])<=36:
        text+='源码的共享 pubspec 历史值保持 1.0.37+58；本版公开身份使用原构建参数及 APK 内版本说明，均保持原字节。\n\n'
    text+=f"APK SHA256：`{row['apkSha256']}`\n\n源码 ZIP SHA256：`{row['sourceSha256']}`\n\n"
    text+='原 APK、源码 ZIP、校验和原安装/验证资料均作为附件保留。设备、真实账号、CDN、IME/GPU 等待验收项目仍以原说明为准；归档不代表新增手机验收。历史文档中的“未推送/未发布”保留原时点，本次 GitHub 归档是后续事实。\n\n'
    text+='本次没有操作音乐更新后台、手机或账号；签名私钥、密码、私有诊断候选二进制及设备证据未上传。历史总时长与十月683分钟仍未解决，旧日志未重发。'
    return text

for row in state['versions']:
    tag=row['tag']
    all_releases=get(f'/repos/{REPO}/releases?per_page=100')
    release=next((r for r in all_releases if r['tag_name']==tag),None)
    if release is None:
        release=request(headers,'POST',f'/repos/{REPO}/releases',{
            'tag_name':tag,'target_commitish':row['commit'],
            'name':f"Mesting Music {row['version']} / code{row['code']} · Beta 通道",
            'body':body_for(row),'draft':True,'prerelease':False,'make_latest':'false'})
    rid=release['id']
    assert release['tag_name']==tag
    live={asset['name']:asset for asset in assets_for(rid)}
    expected={asset['name']:asset for asset in row['assets']}
    assert set(live).issubset(expected),(tag,'Unexpected preexisting asset')
    for asset in row['assets']:
        assert sha(asset['path'])==asset['sha256']
        found=live.get(asset['name'])
        for attempt in range(4):
            if found is not None:break
            try:found=upload(headers,rid,asset['path'],asset['name'])
            except Exception as error:
                # Do not repeat a completed upload just because the receipt
                # connection failed; the authoritative asset list comes first.
                live={a['name']:a for a in assets_for(rid)}
                found=live.get(asset['name'])
                if found is None:
                    print(f"Upload retry {tag} {asset['name']} attempt {attempt+1}: {type(error).__name__}",flush=True)
                    if attempt==3:raise
                    time.sleep(3*(attempt+1))
        assert found and found['state']=='uploaded'
        assert found['size']==asset['size'] and found.get('digest')=='sha256:'+asset['sha256'],(tag,asset['name'],'Remote digest mismatch')
        live[asset['name']]=found
    assert set(live)==set(expected)
    # Publish oldest-to-newest so these new Releases are ordered numerically
    # by publication too. Only the explicitly chosen last version becomes Latest.
    release=request(headers,'PATCH',f'/repos/{REPO}/releases/{rid}',{
        'name':f"Mesting Music {row['version']} / code{row['code']} · Beta 通道",
        'body':body_for(row),'draft':False,'prerelease':False,
        'make_latest':'true' if tag=='v1.0.49' else 'false'})
    assert not release['draft'] and not release['prerelease']
    verified=assets_for(rid)
    assert len(verified)==len(expected)
    for asset in verified:
        actual=expected[asset['name']]
        assert asset['size']==actual['size'] and asset.get('digest')=='sha256:'+actual['sha256']
    value={'version':row['version'],'tag':tag,'releaseId':rid,'url':release['html_url'],'publishedAt':release['published_at'],'draft':False,'prerelease':False,'assets':[{'name':a['name'],'id':a['id'],'size':a['size'],'digest':a['digest'],'url':a['browser_download_url']} for a in verified]}
    status['versions']=[v for v in status['versions'] if v['tag']!=tag]+[value]
    save(statusfile,status)
    print(json.dumps({'published':tag,'assetsVerified':len(verified),'completed':len(status['versions']),'total':24},ensure_ascii=False),flush=True)
latest=get(f'/repos/{REPO}/releases/latest')
assert latest['tag_name']=='v1.0.49'
status.update(completed=True,latestVerified='v1.0.49',completedAtUtc=datetime.now(timezone.utc).isoformat(),preservation=preserve())
save(statusfile,status)
print('COMPLETE: 24 formal Releases and 263 original assets verified; 1.0.49 is Latest.',flush=True)
