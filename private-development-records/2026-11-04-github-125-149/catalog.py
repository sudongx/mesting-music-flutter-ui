"""Generate channel-specific, numeric-descending navigation from real assets."""
from common149 import *
import re
BASE='https://github.com/'+REPO
CATALOG=BASE+'/blob/beta/docs/apk-downloads.md'

def version_key(value):return tuple(map(int,value.split('.')))
def create_catalog():
    before=read(OUT/'remote-before.json');inventory=read(OUT/'inventory.json')
    releases=before['releases'];bytag={row['tag_name']:row for row in releases}
    stable=[]
    for release in releases:
        if release['tag_name']!='historical-stable-apks-2026-08-26':continue
        for asset in release['assets']:
            match=re.fullmatch(r'Mesting-Music-v(\d+\.\d+\.\d+)-build(\d+)\.apk',asset['name'])
            if match:stable.append((version_key(match[1]),int(match[2]),match[1],asset['browser_download_url']))
    stable.sort(reverse=True)
    beta=[]
    for release in releases:
        match=re.fullmatch(r'v(1\.0\.\d+)',release['tag_name'])
        if match:
            apk=next((asset for asset in release['assets'] if asset['name']==f"Mesting-Music-{release['tag_name']}.apk"),None)
            if apk is None:
                # 1.0.23 was formally archived from its approved R2 artifact.
                # Keep that actual filename instead of inventing a plain APK.
                candidates=[asset for asset in release['assets'] if asset['name'].endswith('.apk')]
                assert len(candidates)==1,release['tag_name']
                apk=candidates[0]
            if apk:beta.append({'version':match[1],'tag':release['tag_name'],'url':release['html_url'],'apk':apk['browser_download_url'],'code':None,'prerelease':release['prerelease']})
    for row in inventory['versions']:
        beta.append({'version':row['version'],'tag':row['tag'],'url':BASE+'/releases/tag/'+row['tag'],'apk':BASE+'/releases/download/'+row['tag']+f"/Mesting-Music-{row['tag']}.apk",'code':row['code'],'prerelease':False})
    beta.sort(key=lambda row:version_key(row['version']),reverse=True)
    experiments=sorted((row for row in releases if re.fullmatch(r'v1\.0\.37-beta\.\d+',row['tag_name'])),key=lambda row:int(row['tag_name'].rsplit('.',1)[1]),reverse=True)
    header='''# Mesting Music APK 下载与版本目录

核对日期：2026-11-04（北京时间）。按**实际安装通道**分组，各系列按数值版本号、Build 或 Beta 序号从新到旧排列；不按字符串排序。

| 安装通道 | Android 包名 | 目录 |
| --- | --- | --- |
| 正式稳定通道 | `com.mesting.music` | [正式稳定版](#正式稳定版) |
| Beta 通道 | `com.mesting.music.beta` | [Beta 通道正式交付](#beta-通道正式交付)、[早期 Beta 实验系列](#早期-beta-实验系列) |
| Java/MySQL 测试通道 | `com.mesting.music.javatest` 等 | [独立测试包](#javamysql-独立测试包) |

**安装通道与 GitHub 发布状态分别记录。** 1.0.25～1.0.49 的已冻结正式交付属于 Beta 安装通道，本次按用户选择创建正式 GitHub Release（非 prerelease），1.0.49/code70 设为仓库 Latest；包名和升级身份保持原样。GitHub Latest 不会改变任何应用内更新清单。

源码标签和手工源码 ZIP 均对应各版的冻结文件。APK、源码 ZIP、SHA256 与原验收资料放在对应 Release；历史资料中的“未推送/未发布”保留其原时点。真实设备、账号、CDN、IME/GPU 等验收边界继续以各版安装说明为准。

## 正式稳定版

以下是 GitHub 已留存的 `com.mesting.music` 历史安装包；Beta 包不混入此表。表格只列真实存在的资产，不为缺失的 APK 补造下载入口。

| 版本 / Build | APK | 归档 |
| --- | --- | --- |
'''
    text=header+''.join(f'| {version} / {build} | [下载]({url}) | [历史归档]({BASE}/releases/tag/historical-stable-apks-2026-08-26) |\n' for _,build,version,url in stable)
    text+='''
## Beta 通道正式交付

这组保持 `com.mesting.music.beta` 和既有签名，使用开发分支 `beta`。1.0.38 仅有本地私有诊断候选，没有本系列正式冻结交付，因此没有对应下载项；这与旧 Java/MySQL 的同名测试版本不同。

| 版本 | Android code | GitHub 状态 | APK | 源码与校验资料 |
| --- | --- | --- | --- | --- |
'''
    for row in beta:
        code=str(row['code']) if row['code'] is not None else '见原 Release'
        state='Latest · 正式 Release' if row['tag']=='v1.0.49' else ('原预发布保留' if row['prerelease'] else '正式 Release')
        text+=f"| {row['version']} | {code} | {state} | [下载]({row['apk']}) | [Release]({row['url']}) · [标签源码]({BASE}/tree/{row['tag']}) |\n"
    text+='''
## 早期 Beta 实验系列

同属 Beta 安装通道，但属于早期 `1.0.37-beta.N` 视觉实验系列，单独按 Beta 序号排列，保留原发布状态和原附件。

| Beta 序号 | 版本标签 | 下载与源码 |
| --- | --- | --- |
'''
    for row in experiments:
        number=int(row['tag_name'].rsplit('.',1)[1])
        text+=f"| {number} | {row['tag_name']} | [Release]({row['html_url']}) |\n"
    text+=f'''
更早的 UI Beta 原型包见[旧实验归档]({BASE}/releases/tag/ui-beta-apks-2026-08-26)，不与正式稳定 APK 混用。

## Java/MySQL 独立测试包

| Build（从新到旧） | 包 / 版本 | 下载 |
| --- | --- | --- |
'''
    java=bytag.get('java-mysql-http-test-apks-2026-08-26',{})
    for asset in sorted(java.get('assets',[]),key=lambda a:(int(re.search(r'build(\d+)',a['name'])[1]) if re.search(r'build(\d+)',a['name']) else 0,a['name']),reverse=True):
        match=re.search(r'build(\d+)',asset['name'])
        if asset['name'].endswith('.apk'):text+=f"| {match[1] if match else '原记录'} | {asset['name']} | [APK]({asset['browser_download_url']}) |\n"
    text+='''
## 版本与升级说明

同名版本号不代表同一安装通道，请同时核对包名、Android code 和签名。较高 code 通常不能被较低 code 覆盖安装；历史 APK 用于留档和主动验收，不能当作应用内自动回退。私有诊断候选、签名私钥、密码、手机记录和构建缓存不在此次公开附件中。此次只归档 Git/GitHub，没有操作音乐更新后台。
'''
    assert len(beta)==48 and len(experiments)==21
    assert beta[0]['tag']=='v1.0.49' and beta[-1]['tag']=='v1.0.1'
    return text,{'stableApkRows':len(stable),'betaFormalRows':len(beta),'betaExperimentalRows':len(experiments),'sort':'numeric descending within each installation-channel series'}

def docs_for(branch,base):
    catalog,stats=create_catalog()
    old=git('show',base+':README.md').decode('utf-8-sig')
    if old.startswith('# Mesting Music\n'):old=old.split('\n',1)[1].lstrip('\n')
    intro=f'''# Mesting Music

**最新维护交付：1.0.49 / Android code70（Beta 安装通道）。** [Latest Release]({BASE}/releases/tag/v1.0.49) · [分通道下载目录](docs/apk-downloads.md) · [版本目录](docs/versions.md)。

| 安装通道 | 包名 | 导航 |
| --- | --- | --- |
| 正式稳定版 | `com.mesting.music` | [历史包按版本倒序](docs/apk-downloads.md#正式稳定版) |
| Beta | `com.mesting.music.beta` | [正式交付按版本倒序](docs/apk-downloads.md#beta-通道正式交付)、[早期实验系列](docs/apk-downloads.md#早期-beta-实验系列) |
| Java/MySQL 测试 | `com.mesting.music.javatest` 等 | [独立测试包](docs/apk-downloads.md#javamysql-独立测试包) |

本次补齐 1.0.25～1.0.37、1.0.39～1.0.49 共24版的独立源码提交、标签和正式 GitHub Release，263个附件均保持原始字节。1.0.38 的私有候选不公开。安装通道按真实包名分组，与 Release 的正式/预发布状态分别记录；1.0.49 设为 GitHub Latest，应用内更新后台未改动。

当前页面位于 `{branch}` 分支。`beta` 维护当前产品；`main` 保留原产品源码，仅同步本下载导航。新电脑继续开发应从 [beta 分支接续]({BASE}/blob/beta/docs/CONTINUE-BETA.md)。设备、账号和历史时长的未完成验收如实保留，GitHub 归档不替代它们。

---

下面保留此前产品介绍的历史原文；其中旧版本状态和下载提示请以本页上方目录为准。

'''
    versions=f'''# 版本目录

[正式稳定通道](apk-downloads.md#正式稳定版) · [Beta 通道正式交付](apk-downloads.md#beta-通道正式交付) · [早期 Beta 实验系列](apk-downloads.md#早期-beta-实验系列) · [Java/MySQL 独立测试](apk-downloads.md#javamysql-独立测试包)。

所有表格按各通道内的数值版本/Build/Beta 序号倒序排列。GitHub Release 原生列表不能建立自定义分组，本目录提供稳定的分组入口；旧标签和发布记录保留。

本次24个版本均有独立冻结源码提交、标签、原签名APK和手工完整源码ZIP。发布状态为正式 Release；安装通道仍是Beta，1.0.49/code70为Latest。详见[本次归档与交接]({BASE}/blob/beta/HANDOFF-GITHUB-2026-11-04-v1.0.49.md)。
'''
    return {'README.md':intro+old,'docs/apk-downloads.md':catalog,'docs/versions.md':versions},stats
