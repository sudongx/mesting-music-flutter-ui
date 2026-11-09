"""Build one immutable commit per original ZIP, plus a continuation document commit."""
from pathlib import Path
import zipfile,hashlib
from common import *

def provenance(rows,current=None,complete=False):
 title=f'Mesting Music {current["version"]} 冻结源码归档' if current else 'Mesting Music 1.0.13～1.0.17 Git / GitHub 归档'
 text=f'# {title}\n\n日期：2026-10-29（Asia/Shanghai）。用户确认逐版完整归档，保留main及旧版本历史。\n\n'
 text+='每个版本来自其独立冻结源码ZIP，不使用最新代码反推历史版本。所有ZIP条目，包括SOURCE-SNAPSHOT.json与原基线说明，逐文件核对字节与Git blob；只追加归档来源清单及校验资料。原APK和源码ZIP均不重建、不重签、不重新压缩。提交创建于本轮，不回填历史开发日期。\n\n'
 text+='| 版本 / code | 固定标签 | 原始ZIP条目 | APK SHA-256 | 原始源码ZIP SHA-256 |\n| --- | --- | --- | --- | --- |\n'
 for row in rows:text+=f'| {row["version"]} / {row["code"]} | `{row["tag"]}` | {row["originalZipEntries"]} | `{row["apkSha256"]}` | `{row["sourceHash"]}` |\n'
 text+='\n每个标签保存该版冻结内容及截至该版的新增来源清单。GitHub自动生成的源码包包含追加归档材料，与原交付source.zip附件不同；原交付请下载带Mesting-Music版本号的附件。\n\n'
 text+='冻结文档与验证JSON中的“未提交／未推送／未发布”保留当时事实；当前GitHub状态以远端Release与最终归档核验记录为准。GitHub归档不会改变music后台。\n\n'
 text+='源码保留用户已确认可公开分发的SDK、原LICENSE和第三方声明，不重新许可第三方内容。应用签名、密码、平台账号、本机设置、缓存与用户媒体均不公开。tiny_http公开TLS示例仅保留与既有Git基线相同的夹具字节，与应用签名无关。\n\n'
 text+='本次不重跑历史产品测试，不操作手机、ADB、音乐账号或music后台；原真机体验、文件管理器、完整音源和官版统计入账的验收边界继续保留。\n\n'
 text+=f'远端维护入口beta的跨电脑接续见[本轮总交接](../../{HANDOFF})。本机脏工作区HEAD/index保留，归档引用另存codex分支，不能将冻结时的本机状态误认成远端缺失。\n'
 return text.encode('utf-8')

def continuation(rows,complete=False):
 state='五版Git标签和正式GitHub Release已完成，所有附件SHA-256与服务端digest已核对。' if complete else '五版源码已核验，提交与附件正在归档；以最终核验JSON及远端为准。'
 text=f'# 跨电脑接续：Mesting Music 1.0.17 / code38\n\n日期：2026-10-29。{state} 远端维护入口beta，main与旧历史保留。\n\n'
 text+='| 版本 / code | 标签与Release | 固定源码提交 |\n| --- | --- | --- |\n'
 for row in rows:text+=f'| {row["version"]} / {row["code"]} | [{row["tag"]}](https://github.com/{REPO}/releases/tag/{row["tag"]}) | `{row["commit"]}` |\n'
 text+='\n各Release保留原APK、完整原源码ZIP、APK／源码验证、逐文件来源清单、原回归记录、安装复测／修改／冻结交接、更新说明、归档说明与SHA256SUMS.txt。原产物摘要保持，不重复构建。\n\n'
 text+='## 新电脑接续\n\n```powershell\ngit clone --branch beta https://github.com/Mesting42/mesting-music-flutter.git Mesting-Music\ncd Mesting-Music\ngit fetch origin --tags\ngit status --short --branch\ngit log -7 --oneline --decorate\ngit merge-base --is-ancestor v1.0.17 HEAD\n```\n\n'
 text+='先读AGENTS.md、本文、docs/SESSION-HANDOFF-2026-10-29-v1.0.17.md、docs/UX-PLAYBACK-2026-10-29-v1.0.17.md与INSTALL-v1.0.17.md，再等待用户需求。冻结文档中的未推送状态为历史时点，当前Git状态看本文和docs/version-archive/GITHUB-ARCHIVE-2026-10-29-v113-v117-verification.json。原1.0.11/1.0.12的跨电脑交接保留作历史，不用其旧“最新”覆盖本版。\n\n'
 text+='## 环境、产物与边界\n\nFlutter3.41.9 / Dart3.11.5，Java/Kotlin17，min24/target36，NDK28.2.13676358。使用仓库内SDK和pubspec.lock，不全量更新依赖；新电脑自行配置SDK路径和android/local.properties。原证书SHA-256：`'+CERT+'`，包名com.mesting.music.beta，显示名Mesting Music。密钥需私下转移，不能使用新电脑自动生成的密钥冒充可覆盖升级。公开版本由发布入口参数指定，共享pubspec的旧stable版本不决定Beta交付身份。\n\n'
 text+='1.0.17原验证：45套1017项主机回归、普通stable搜索与更新19项、Android返回专项1项；末次音频与界面65项与主组重叠，不相加。本轮归档只复核冻结源码和产物，不把它说成新做过真机或真实账号验收。\n\n'
 text+='本轮产品含个人页、返回、玻璃控件、消息／搜索、立即切歌、封面、独立下载／播放全部／离线／导出／目录入口及既有音源逐曲选择；没有新增酷狗账号音源或双平台签到。真机文件管理器、离线重启、实际账号未读、官版数据和流畅度仍由用户复测。GitHub发布与music后台独立，本轮未操作后者。\n\n'
 text+='## 本机保留\n\nD:/AnLi原beta工作区仍保留归档前HEAD deb68e4、原index与全部文件字节，不切分支、不reset／clean／stash。归档提交与标签已写入本地Git对象库，另有codex/archive-1.0.13-1.0.17引用；远端beta已指向新归档链。该本地脏工作区不能直接拉取覆盖；新电脑或新的干净目录从远端beta克隆即可接续。未经新授权不访问手机／ADB，不关闭保留的music网页，不继续桌面内存优化。\n'
 return text.encode('utf-8')
