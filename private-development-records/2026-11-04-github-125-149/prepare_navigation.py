"""Append navigation to beta; main gets only README/download-directory docs."""
from common149 import *
from catalog import docs_for,BASE
from datetime import datetime,timezone

statefile=OUT/'prepared-state.json';state=read(statefile)
assert len(state['versions'])==24 and state.get('versionTip')
if state.get('betaTip') and state.get('mainTip'):
    print('Navigation commits already prepared; retaining their object IDs.');raise SystemExit(0)
before=read(OUT/'remote-before.json');baseline=before['refs']['refs/heads/main']
assert git('rev-parse','origin/main').decode().strip()==baseline
summary={key:value for key,value in state.items() if key not in ['preservation']}
rows=[{'version':r['version'],'code':r['code'],'tag':r['tag'],'commit':r['commit'],'sourceEntries':r['sourceEntries'],'sourceSha256':r['sourceSha256'],'apkSha256':r['apkSha256'],'assets':len(r['assets'])} for r in state['versions']]
public={'date':'2026-11-04','stage':'source_prepared_asset_digests_to_be_verified_after_upload','versions':rows,'sourceEntriesVerified':sum(r['sourceEntries'] for r in rows),'assetCount':263,'frozenApkAndZipBytePreserved':True,'installationChannel':'com.mesting.music.beta','githubPrereleaseFlag':False,'latest':'v1.0.49','phoneAccess':False,'musicBackendPublication':False,'primaryWorkingTreeAndIndexPreserved':True}
doc=f'''# 2026-11-04 GitHub 完整归档 1.0.25～1.0.49

按用户确认，24个正式冻结交付分别建立源码提交、注释标签和正式GitHub Release：1.0.25～1.0.37、1.0.39～1.0.49；1.0.38仅有私有候选，不公开。每版原APK、完整源码ZIP、校验和原说明共263个附件保持字节不变，50,809个源码条目在Git archive流逐项核对。所有标签源码来自对应版本的冻结ZIP，当前工作树没有用作历史源码。

安装通道按真实包名分组，正式稳定包com.mesting.music与Beta包com.mesting.music.beta分开；各系列按数值版本倒序。新Release的发布状态按用户选择为正式，1.0.49设Latest。这不改变包名、签名、旧标签、旧发布状态和任何音乐后台更新清单。

1.0.25～1.0.36源码pubspec有意保留共享Stable历史值1.0.37+58，发布身份来自构建参数与APK内说明，原字节不改。其余源码pubspec与发布身份一致。旧冻结文档的“未推送/未发布”保留历史语义；当前事实由此后附件/远端核验记录补充，不回写旧ZIP。

本轮Git提交日期为实际归档日期，不伪造开发历史。本地使用隔离索引，主工作区、主索引、既有源码、90份冻结APK/ZIP、签名和依赖锁不变。远端beta普通快进，main只同步README与下载目录，产品源码不变。官方参考APK、REA数据、私有候选二进制、凭证及设备记录排除。

各版已有测试与设备边界沿原说明，归档时不重复构建或把主机结果当作真机验收。历史总时长及十月683分10秒未解决，旧日志不重发。GitHub归档不表示操作手机/账号/业务后台。
'''
handoff=f'''# GitHub 接续：1.0.49 / code70

2026-11-04，已按用户确认准备24个版本的Git/GitHub完整归档。最新标签[v1.0.49]({BASE}/releases/tag/v1.0.49)，维护分支beta；正式稳定通道与Beta通道见[分组倒序目录](docs/apk-downloads.md)。安装通道与Release状态独立，Latest属于Beta安装通道的正式交付。

先读[本轮归档来源](docs/version-archive/RELEASE-ARCHIVE-2026-11-04-v125-v149.md)、[1.0.49安装验收](docs/INSTALL-v1.0.49.md)和AGENTS.md。各标签完整还原原版ZIP，APK和手工ZIP附件不重建、不重签；历史文件中的“未推送”保留原时点。上传后会另加机器核验记录，包含263附件摘要与远端提交。

```powershell
git clone --config core.autocrlf=false --branch beta https://github.com/{REPO}.git Mesting-Music
cd Mesting-Music
git status --short --branch
git merge-base --is-ancestor v1.0.49 HEAD
```

此机原D:/AnLi主HEAD仍保留b6bcd542、原脏改动和空暂存，远端会领先本地主HEAD。不要在这个脏工作区自动pull/reset/clean；新电脑从beta克隆接续。签名材料须私下转移，定制引擎和完整许可随源码保留。

真实账号/CDN/IME/GPU、一起听剩余设备范围仍待验收；历史总听歌时长及十月683分钟未解决。此归档任务未访问手机/ADB、音乐账号、业务后台或重发旧日志。
'''
for branch,base in [('beta',state['versionTip']),('main',baseline)]:
    texts,stats=docs_for(branch,base)
    if branch=='beta':
        texts.update({'HANDOFF-GITHUB-2026-11-04-v1.0.49.md':handoff,'docs/CONTINUE-BETA.md':handoff.replace('# GitHub 接续','# 当前维护分支接续').replace('(docs/','('),'docs/version-archive/RELEASE-ARCHIVE-2026-11-04-v125-v149.md':doc,'docs/version-archive/GITHUB-ARCHIVE-2026-11-04-v125-v149-source-verification.json':json.dumps(public,ensure_ascii=False,indent=2)+'\n'})
        old=git('show',base+':AGENTS.md').decode('utf-8-sig')
        texts['AGENTS.md']='**2026-11-04 GitHub归档接续：24版1.0.25～1.0.37及1.0.39～1.0.49按用户确认分别归档，Beta安装通道/正式稳定通道分组倒序，新Release正式且49为Latest。先读[GitHub交接](HANDOFF-GITHUB-2026-11-04-v1.0.49.md)和[归档来源](docs/version-archive/RELEASE-ARCHIVE-2026-11-04-v125-v149.md)，上传后机器核验另附；冻结文档保留原时点。主机和设备验收区分，历史时长未解决，旧日志不重发。下方历史本地交付入口保持。**\n\n'+old
    else:assert set(texts)=={'README.md','docs/apk-downloads.md','docs/versions.md'}
    folder=OUT/('navigation-'+branch);files={}
    for name,text in texts.items():
        target=folder/name;target.parent.mkdir(parents=True,exist_ok=True);target.write_text(text,'utf-8');files[name]=target
    blobs=write_blobs(files);entries=tree_files(base)
    entries.update({name:{'mode':'100644','oid':oid} for name,oid in blobs.items()})
    commit,tree=commit_tree(entries,'navigation-'+branch,base,'docs: separate stable and Beta downloads and archive versions through 1.0.49')
    changed=git('diff-tree','--no-commit-id','--name-only','-r',base,commit).decode().splitlines()
    assert set(changed)==set(texts)
    state[branch+'Tip']=commit;state[branch+'DocumentationPaths']=changed;state['catalog']=stats
    save(statefile,state)
    print(json.dumps({'branch':branch,'commit':commit,'documentationPaths':changed},ensure_ascii=False),flush=True)
state['preservation']=preserve();save(statefile,state)
