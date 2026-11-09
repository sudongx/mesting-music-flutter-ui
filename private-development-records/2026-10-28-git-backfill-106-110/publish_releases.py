"""Publish approved releases after server-side size and digest verification."""
from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import time

from common import ROOT, OUT, REPO, MAIN, git, read_json, save, sha
import github_transport as api

PREFIX = '/repos/'+REPO
BASE = 'https://github.com/'+REPO
MARKER = '<!-- mesting-backfill-2026-10-28-v106-v110 -->'
STATE = OUT/'release-publication.json'


def asset_list(row):
    folder = OUT/'assets'/row['tag']
    snapshot = OUT/'snapshots'/row['tag']
    copies = [
        (ROOT/row['evidence']/'apk-verification.json', f"Mesting-Music-v{row['version']}-verification.json"),
        (ROOT/row['evidence']/'source-verification.json', f"Mesting-Music-v{row['version']}-source-verification.json"),
        (OUT/f"{row['tag']}-source-manifest.json", f"{row['tag']}-source-manifest.json"),
        (snapshot/row['fixes'],Path(row['fixes']).name),
        (snapshot/row['handoff'],Path(row['handoff']).name),
    ]
    for source,name in copies:
        assert source.is_file(), str(source)
        (folder/name).write_bytes(source.read_bytes())
    notes = (f"Mesting Music {row['version']} / Android code {row['code']}\n\n"
        f"正式发布，Android 7.0+，ARM32 / ARM64。包名com.mesting.music.beta，显示名Mesting Music。\n"
        f"APK大小：{row['apkBytes']}字节；SHA-256：{row['apkSha256']}。\n"
        f"原证书SHA-256：{row['certificateSha256']}。\n\n"
        "此为原始交付归档。Android限制降级，历史版本查看宜使用源码标签；不要卸载日常应用以试装旧包。"
        "原有真机、权限、性能与账号入账待验证项继续保留。当前维护入口为beta，最新正式版1.0.10/code31。\n"
        "完整源码含原授权SDK及其声明；签名私钥和本机配置需私下转移，不在公开附件内。\n")
    install = folder/f"Mesting-Music-v{row['version']}-installation.txt"
    install.write_text(notes,encoding='utf-8')
    paths = [(ROOT/row['apk'],Path(row['apk']).name),(ROOT/row['zip'],row['zip'])]
    paths += [(folder/name,name) for _,name in copies]
    paths += [(install,install.name),(folder/'archive-provenance.md','archive-provenance.md')]
    assets = [{'path':str(path),'name':name,'size':path.stat().st_size,'sha256':sha(path)} for path,name in paths]
    sums = folder/'SHA256SUMS.txt'
    sums.write_text(''.join(f"{x['sha256']}  {x['name']}\n" for x in assets),encoding='ascii')
    assets.append({'path':str(sums),'name':sums.name,'size':sums.stat().st_size,'sha256':sha(sums)})
    assert len(assets) == 10 and len({x['name'] for x in assets}) == 10
    return assets


def body_for(row):
    changes = '\n'.join('- '+line for line in row['notes'])
    return f'''{MARKER}
{changes}

正式发布 **{row['version']} / Android versionCode {row['code']}**。本次补齐原交付的Git与GitHub归档，安装包和源码ZIP保持原始字节。

- 固定源码：[`{row['tag']}`]({BASE}/tree/{row['tag']}) / `{row['commit']}`。
- [本版修改]({BASE}/blob/{row['tag']}/{row['fixes']}) · [归档来源]({BASE}/blob/{row['tag']}/docs/version-archive/RELEASE-BACKFILL-2026-10-28-v106-v110.md)。
- 原APK：`{Path(row['apk']).name}`，**{row['apkBytes']:,}字节**；SHA-256：`{row['apkSha256']}`。
- 原源码ZIP：`{row['zip']}`，**{row['sourceBytes']:,}字节**，逐文件核验{row['sourceFiles']}个原始文件；SHA-256：`{row['sourceHash']}`。
- 附件包含原APK／源码ZIP、包与源码核验JSON、来源清单、修改与冻结交接、安装说明、归档说明及SHA256SUMS.txt。GitHub自动生成的源码包另含追加归档资料，与原交付ZIP不同。

源码提交创建于2026-10-28，不回填开发日期；未重新构建、签名或压缩原交付。冻结文档的未提交／未推送字段保留当时状态，当前Git状态以远端和[跨电脑接续]({BASE}/blob/beta/HANDOFF-CURRENT-SESSION-2026-10-28-GITHUB-CONTINUE.md)为准。

包名`com.mesting.music.beta`、正式名称Mesting Music、原证书`{row['certificateSha256']}`保持。内部beta身份用于升级兼容，五版均为正式Release。完整源码含已授权分发的SDK及原LICENSE／第三方声明；签名私钥、本机配置和账号凭据需私下转移，不在仓库与附件中。

本次只归档，未访问手机或新增真机验收；覆盖升级、持续120fps、真实权限与酷狗官版实际入账仍按原交付边界等待用户核对。当前最新正式版[1.0.10]({BASE}/releases/tag/v1.0.10)，[music下载](https://download.csnas.asia/music/download)沿用现有1.0.10/code31。
'''


def upload_asset(headers, release_id, expected):
    path = Path(expected['path'])
    assert sha(path) == expected['sha256'] and path.stat().st_size == expected['size']
    for attempt in range(3):
        assets = api.request(headers,'GET',PREFIX+f'/releases/{release_id}/assets?per_page=100')
        asset = next((x for x in assets if x['name'] == expected['name']),None)
        if asset is not None and asset['state'] == 'starter':
            # Only this operation's unfinished draft upload can be removed.
            release = api.request(headers,'GET',PREFIX+f'/releases/{release_id}')
            assert release['draft'] and MARKER in release['body']
            api.request(headers,'DELETE',PREFIX+f"/releases/assets/{asset['id']}")
            asset = None
        if asset is None:
            try:
                asset = api.upload(headers,release_id,path,expected['name'])
            except Exception as error:
                if attempt == 2:
                    raise
                print(f"Retry draft upload {expected['name']}: {type(error).__name__}",flush=True)
                time.sleep(2)
                continue
        assert asset['state'] == 'uploaded' and asset['size'] == expected['size']
        assert asset.get('digest') == 'sha256:'+expected['sha256'].lower(),expected['name']
        return {'id':asset['id'],'name':asset['name'],'size':asset['size'],
            'sha256':expected['sha256'],'url':asset['browser_download_url']}
    raise RuntimeError('Bounded draft upload attempts exhausted')


def main():
    archive = read_json(OUT/'archive-commits.json')
    assert read_json(OUT/'git-push-verification.json')['atomicPushVerified']
    headers = api.credentials()
    assert api.request(headers,'GET','/user')['login'] == 'Mesting42'
    assert api.request(headers,'GET',PREFIX+'/branches/beta')['commit']['sha'] == archive['finalCommit']
    assert api.request(headers,'GET',PREFIX+'/branches/main')['commit']['sha'] == MAIN
    state = read_json(STATE) if STATE.exists() else {'repository':BASE,'releases':[],'verified':False}
    save(STATE,state)
    for row in archive['commits']:
        body = body_for(row)
        release = api.request(headers,'GET',PREFIX+'/releases/tags/'+row['tag'])
        if release is None:
            release = api.request(headers,'POST',PREFIX+'/releases',{
                'tag_name':row['tag'],'target_commitish':row['commit'],
                'name':'Mesting Music '+row['version'],'body':body,
                'draft':True,'prerelease':False,'make_latest':'false'})
            print('Created draft '+row['tag'],flush=True)
        else:
            assert MARKER in release['body'] and release['body'] == body
        assert release['target_commitish'] == row['commit']
        record = next((x for x in state['releases'] if x['tag'] == row['tag']),None)
        if record is None:
            record = {'tag':row['tag'],'id':release['id'],'commit':row['commit'],'assets':[],'published':False}
            state['releases'].append(record)
        save(STATE,state)
        expected = asset_list(row)
        save(OUT/'assets'/row['tag']/'expected-assets.json',expected)
        with ThreadPoolExecutor(max_workers=2) as executor:
            futures = [executor.submit(upload_asset,headers,release['id'],item) for item in expected]
            for future in as_completed(futures):
                asset = future.result()
                record['assets'] = [x for x in record['assets'] if x['name'] != asset['name']]+[asset]
                save(STATE,state)
                print(f"Verified {row['tag']} asset {asset['name']}: {asset['size']} bytes, SHA-256 matches",flush=True)
        current = api.request(headers,'GET',PREFIX+f"/releases/{release['id']}")
        assert len(current['assets']) == 10
        if current['draft']:
            current = api.request(headers,'PATCH',PREFIX+f"/releases/{release['id']}",{
                'draft':False,'prerelease':False,
                'make_latest':'true' if row['tag']=='v1.0.10' else 'false'})
        assert not current['draft'] and not current['prerelease'] and current['body'] == body
        record.update({'published':True,'url':current['html_url']})
        save(STATE,state)
        print('Published '+row['tag']+': '+current['html_url'],flush=True)
    current = api.request(headers,'GET',PREFIX+'/releases?per_page=100')
    by_id = {x['id']:x for x in current}
    old = read_json(OUT/'github-releases-before.json')
    for prior in old:
        release = by_id[prior['id']]
        for key in ['tag_name','target_commitish','name','body','draft','prerelease','created_at','published_at']:
            assert release[key] == prior[key],(prior['tag_name'],key)
        keys = ['id','name','size','digest','state']
        reduced = lambda items: sorted(tuple(x.get(k) for k in keys) for x in items)
        assert reduced(release['assets']) == reduced(prior['assets'])
    assert api.request(headers,'GET',PREFIX+'/releases/latest')['tag_name'] == 'v1.0.10'
    state.update({'verified':True,'newReleases':5,'verifiedAssets':50,
        'existingReleasesPreserved':len(old),'latest':'v1.0.10'})
    save(STATE,state)
    print('Verified five formal releases and 50 server-side asset digests; old 30 releases unchanged.',flush=True)


if __name__ == '__main__':
    main()
