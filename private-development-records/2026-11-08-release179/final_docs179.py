"""Write only new 79 documents after complete host and actual APK checks."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT / 'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.79-verification.json').read_text('utf8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf8'))
inputs = json.loads((OUT / 'candidate1/build-input.json').read_text('utf8'))
helper = json.loads((OUT / 'helper-cross-validation179.json').read_text('utf8'))
assert all(host[s]['failed'] == 0 for s in ['beta', 'stable', 'navigation'])
assert host['analysis']['issues'] == 0
assert helper['newRequestAccepted'] and helper['oldEmptyRequestAccepted']
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
beta, stable, nav = host['beta'], host['stable'], host['navigation']
counts = (f"Beta {beta['files']}文件{beta['passed']}通过/{beta['skipped']}跳过；"
          f"Stable {stable['passed']}通过/{stable['skipped']}跳过；导航{nav['passed']}；分析0")


def new(path, text):
    target = ROOT / path
    assert not target.exists(), target
    target.write_text(text.rstrip() + '\n', 'utf8')


new('docs/fixes-2026-11-08-v1.0.79.md', f'''# 1.0.79 / code100：汽水真实诊断后的三项修正

用户已确认搜索可用、NAS0.2.2已更新重启；官版同账号汽水关注/粉丝为空，Mesting抖音分组正常。用户提供的1.0.78专用报告有44条记录：两轮关注成功响应缺省空数组、六轮官方累计listen_duration:null、两轮图片Apply HTTP400/InvalidAuthorization。本轮限定汽水，不改网易云或酷狗，不访问手机、账号或NAS。

## 空关注与空粉丝列表

官版UserFollowListResponse构造初始化空ArrayList，BasePageResponse的hasMore缺省false。现场成功响应仅含status_info/status_code/next_cursor，App错误地要求follow_items必须存在。本版仅在明确业务成功、数组确实省略、没有更多页且内外层均为已知envelope时按空列表结束。显式null、错误数组类型、非0或矛盾业务码、未知列表承载字段及more=true仍报异常。对应页面显示暂无记录，抖音分组、账号隔离、翻页和关注/取消关注读回保持。

空列表不会改写官方统计或把未知关注/粉丝数补0。本轮没有非空汽水列表或真实关注写入验收。

## 官方累计读取请求

官版19与21的UserRepository实际调用不是ab_param空串：它序列化三项能力为JSON字符串。ListeningDurationConfigKt.k在两个原DEX均固定true，经过整数转换为enable_new_music_wall:1；两个收藏实验的配置默认false。本版独立QishuiMusicWallRequest模块发送1/false/false，保留feed_music_wall_extra为空对象，不编造官版推荐、传感器或商业上下文。

这修正了已确认的请求差异；缺失开关导致null是合理推断，**尚未证明PC扫码身份实际返回官方累计**。服务未给数据时仍显示未知，不用本机时长代替。MCS报文、身份/回执规则、账号账本键和旧未知记录不重放行为均未改。78报告没有listeningReport事件，不能用它断言新播放上报或入账结果。

原助手会话已完成独立0.2.3本地候选：仅放行精确三项只读参数，兼容旧空串，85项完整测试通过；主会话用App真实传输层生成的纯虚构envelope，另核验新旧请求、8项拒绝及原始URL/正文/header不重写。**NAS仍需更新至0.2.3，本轮未推送或部署。** 详见同版助手契约。

## 封面上传InvalidAuthorization

78路径修正后，真实报告仍在Apply阶段返回InvalidAuthorization，未进入传图或Commit。继续核对官版原native：base构造将明文九字节sdwdmwlll复制至对象+0x348，经native key109、JNI NewStringUTF、Java key2和Builder.regionName直接进入签名scope。标准UploadImageObservable路径新建上传器且未覆盖该字段。它不是空region，也不是依据公开SDK猜出的地区。

79以独立固定协议模块统一/top/v1、imagex和sdwdmwlll，并将Authorization逗号后格式对齐官版，不增加host签名头，不切换其他签名算法，不轮询猜测地区。独立Python先复现178空region旧向量，再得到两个新向量，Dart精确匹配；受控上传流程同时核验Apply/Commit的新scope和授权头格式。云歌单仍只有相同封面URI读回后才显示成功。

178调查中将+0x328/key34归为region的旧归因已在179证据更正：该字段实际是secret key；旧178包、文档和证据不回填。此次证明源协议差异，**没有证明现场HTTP400已消失、真实图片上传或官方封面同步已成功**。

## 验证

{counts}。新空关注/粉丝与抖音往返切换UI行为回归通过；本轮无新布局或截图，不把主机测试当实机/GPU验收。定向首轮有一个诊断版本断言仍期待99，修为100后在完整运行中验证，原日志保留；定向与全量不累加。

原签名双ARM、固定引擎、7shader、12非app库及实际DEX/JNI/DTO/DSP/R8另验，编译输入{len(inputs['files'])}项固定。旧96冻结物、原签名/锁/74退休路径/Drift7被动兼容和历史脏树保留；79另存，不回填78。66/71用户验收及手机号停止保持，旧51不恢复、63ZIP不补。主项目未提交推送上传发布备份。
''')

new('docs/qishui-helper-contract-v1.0.79.md', '''# 汽水官方累计只读参数：1.0.79 / 助手0.2.3

用户授权需要时交接原助手会话；主会话没有接管或代改助手。原会话“汽水自用 Windows／NAS 签名助手”完成0.2.3本地候选，85项完整测试通过，未推送或部署。

既有路由不变：POST https://api.qishui.com/luna/me/music_wall，application/json。正文精确候选：

```json
{"feed_music_wall_extra":{},"ab_param":"{\"enable_new_music_wall\":1,\"enable_fav_artists\":false,\"enable_fav_playables\":false}"}
```

ab_param是JSON字符串，内层只允许这三个键、数值1和两个false；保留旧空串兼容。拒绝对象代替字符串、额外/缺少/重复键、错误类型、禁用开关、非空extra或时长/身份/凭据字段。助手检查后仍签原始URL、UTF-8正文和header，不重编码；音乐墙不向助手增加Cookie/token/CSRF权限，没有新增时长写入路由。

主会话App真实传输夹具仅使用虚构身份和nas.example.test，生成后按捕获时钟离线校验，未送往原生签名器、真实NAS或官方。其SHA256为d80d8169c2f7c579d1e777b9f30c1d8c9f5b845fc1bc1de60ee2b04e02cddb60。主会话另验8项拒绝；助手85项不与之合并计数。

助手独立工作区：C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app。
交接：HANDOFF-QISHUI-SIGNER-NAS-0.2.3-2026-11-08.md。
本地补丁位于同项目outputs/qishui-signer-0.2.3-app-verified-patch.zip，只适用于完整0.2.2基线，不含私有组件或令牌，不是新安装包。源码推送和NAS部署仍由原会话按用户授权安排。

当前NAS0.2.2是用户确认的历史运行状态；它会拒绝新AB字符串。使用79的官方累计读取前需更新并重启至0.2.3，保持原配置、令牌和卷。主项目本地交付不会使NAS自动更新。真实官方累计返回及后续实际听歌入账需要分别验收。
''')

new('docs/qishui-diagnostics-v1.0.79.md', '''# 汽水专用诊断：1.0.79

入口仍为设置→连接与播放诊断→汽水专用诊断。保持应用不退出，复现目标问题后选择社交、时长或封面分组，导出JSON文件。导出不发业务请求、不播放或重放旧记录。

保持schema178结构，appVersion改为1.0.79、appVersionCode为100。封面固定协议元数据改为gatewayPath=/top/v1、signature=AWS4-HMAC-SHA256、service=imagex、regionMode=officialSdkDefault、region=sdwdmwlll。它们是固定协议常量，不包含真实临时授权或签名。

其余闭合阶段、状态码、固定安全错误码和有界结构摘要保持；HTTP200、parse成功、提交正回执和官版实际入账仍分开。精简JSON不超过4096字符；文件导出固定于私有qishui_diagnostics/mesting-qishui-report.json，不放宽任意路径或1MiB边界。

重点区分helper拒绝与图片服务apply/storage/commit拒绝。79时长读取需要NAS助手0.2.3；未更新时不能把助手拒绝解释为官方没有累计。新真实收听后若仍未确认，需要含listeningReport的本次记录，旧9分51秒不会自动补发。
''')

new('docs/INSTALL-v1.0.79.md', '''# 1.0.79 / code100 安装与验收

原签名双ARM候选：release/Mesting-Music-v1.0.79.apk。完整源码：Mesting-Music-v1.0.79-source.zip。本轮无手机、ADB或安装；按原签名覆盖安装保留账号和本机记录，实际升级恢复尚待本人验证。

1. 汽水关注与粉丝空组应显示暂无记录；切换抖音核对原有内容，往返切换不串组。非空汽水列表和关注/取消关注仍需本人对照官版。
2. 官方累计读取需先将NAS助手更新重启至0.2.3。原助手会话已准备本地补丁及交接，尚未推送/部署；0.2.2会拒绝新参数。更新后刷新官方时长，核对本人总累计/本周，不能以本机数代替。
3. 为本人可编辑歌单选择图片、保存封面，核对歌单页和官版同账号。79修正剩余签名region及格式，但Apply接受、传图、Commit和真实云读回尚未验。
4. 实际新听歌后暂停，再核对本次上报诊断和官版累计。已提交回执不等于入账，旧未确认记录不会重发。
5. 如仍有问题，保持应用不退出，到汽水专用诊断选择对应分组导出JSON。78报告没有listeningReport事件；判断新播放需新的相应记录。

歌曲搜索已由用户确认可用。网易云、酷狗和完整玻璃壳保持；本轮主机回归/包装检查不代表实机GPU/DSP、持续120或长期稳定验收。无需连接手机即可先取得本地候选，但真实业务结果需本人后续验证。
''')

validation = {
    'version': '1.0.79', 'androidVersionCode': 100, 'date': '2026-11-08',
    'scope': 'Qishui sparse empty social groups, official music-wall capability string and official ImageX native default region',
    'hostValidation': host, 'actualApk': apk, 'actualNativePackaging': native,
    'buildInputs': len(inputs['files']), 'helperCrossValidation': helper,
    'imagexRegionStaticValue': 'sdwdmwlll', 'imagexRegionAndAuthorizationAligned': True,
    'independentSigningGoldenVectorsPassed': True, 'sparseEmptyGroupsLocallyVerified': True,
    'officialMusicWallRequestDifferenceCorrected': True,
    'liveCoverHttp400Resolved': False, 'realCoverUploadAccepted': False,
    'officialSocialAndListeningReadAccepted': False,
    'officialDurationAccountAttributionOrCreditingVerified': False,
    'priorSearchAcceptedByUser': True, 'officialQishuiOwnFollowingAndFansEmptyReportedByUser': True,
    'douyinGroupsWorkingReportedByUser': True, 'nas022UpdatedAndRestartedReportedByUser': True,
    'helperContractChangedByIndependentOwnerChat': True, 'requiredHelperVersion': '0.2.3',
    'helperPushedOrNasDeployed': False, 'oldUnknownListeningRecordsReplayed': False,
    'deviceAccess': False, 'physicalAcceptancePerformed': False, 'realAccountAccess': False,
    'nasAccessOrDeployment': False, 'agentInitiatedOfficialBusinessRequests': False,
    'unrelatedPlatformSourceChangedFrom78': False, 'historical96FrozenArtifactsPreserved': True,
    'old74RetiredPathsPreserved': True, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
new('docs/validation-2026-11-08-v1.0.79.json', json.dumps(validation, ensure_ascii=False, indent=2))
new('docs/build-inputs-v1.0.79.json', json.dumps(inputs, ensure_ascii=False, indent=2))

new('HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.79.md', f'''# 1.0.79 / code100 当前本地修复候选

先读同版fixes、INSTALL、helper-contract、diagnostics、validation、build-inputs；按 `.codex-artifacts/2026-11-08-release179/after.json` 与 `python -B .codex-artifacts/2026-11-08-release179/verify179.py check` 只读接收。79另存，不运行78旧冻结脚本校验当前已变化源码，不回填旧包/ZIP/文档。

用户78实际报告44条及反馈优先：汽水本人关注/粉丝确实为空、抖音分组正常；官方累计六次listen_duration:null；封面两次Apply InvalidAuthorization。这覆盖旧78“未安装/待反馈”时点。79已本地修正严格空组兼容、music_wall三项AB字符串和官版native默认region sdwdmwlll/授权头格式；缺开关解释null及region解释现场400仍属因果推断，真实业务恢复未验。

官版19/21原DEX与原native静态证据保存在179私有research子目录。178将key34/对象+0x328归为region的旧归因已更正：实际secret key，region为key109/+0x348；旧证据原样保留。REA已关闭清理，无挂起调查。标准静态路径无region覆盖，不外推动态热修补或设备配置。

助手按用户要求交接原会话，独立0.2.3本地候选85项通过；主会话真实App虚构envelope及8项拒绝另验。NAS仍为用户确认已更新重启的0.2.2，未代访问/推送/部署；79累计读取需0.2.3，原会话有app-verified补丁/交接。主项目与助手状态不得混同。

{counts}；完整结果不与定向累加，一次诊断code99旧断言失败保留并在完整运行修正。新空组与抖音切换软件UI行为已验，无新布局/截图。原签名双ARM/固定引擎/7shader/12非app库及实际DEX/JNI/DTO/DSP/R8另验，{len(inputs['files'])}输入固定。APK SHA256 `{apk['sha256']}`，字节{apk['fileSize']}。

未手机ADB/实际账号/NAS/官方业务或MCS请求，79未安装；真实非空汽水社交写入、累计返回、封面400消失和实际入账仍未验。78报告无listeningReport事件，不断言新收听已失败/成功。旧177账本键、本机9分51秒未知记录及不重放保持，未知数不补0，HTTP200/提交回执不作官版入账。

旧96冻结物、74退休路径/Drift7被动兼容、原签名锁、历史脏树/beta/b6bcd542和空暂存保持；66/71既有用户验收与手机号停止保持。旧51不恢复、63ZIP不补，未提交推送上传发布备份。所有构建/测试/导出结束后才冻结最终after收据，新会话只读核对后按用户方向继续。
''')

prefix = f'''**2026-11-08 当前本地1.0.79/code100修复候选1：先读[79交接](HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.79.md)、[实现](docs/fixes-2026-11-08-v1.0.79.md)、[安装](docs/INSTALL-v1.0.79.md)、[助手契约](docs/qishui-helper-contract-v1.0.79.md)和[验证](docs/validation-2026-11-08-v1.0.79.json)，按release179/after.json及verify179.py只读接收。用户78实际报告44条：汽水本人空关注/粉丝报错、抖音两组正常；累计listen_duration:null；Apply两次InvalidAuthorization。79已本地修正严格空组兼容、官版AB参数及native默认region sdwdmwlll/授权头格式，现场恢复和真实入账仍未验，不用本机冒充官方。助手原会话0.2.3本地85通过/主App虚构合同交叉验，未推送部署；79官方累计需NAS0.2.3，用户此前确认0.2.2已重启不等同本次更新。旧账本/9分51秒未知及不重放保持。{counts}；UI空组/抖音切换已验，无新截图。原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验。178key34旧归因在179更正，旧包/文档不回填。未手机ADB/账号/NAS/真实业务，79未安装；旧96冻结物/74退休路径/Drift7兼容/签名锁/历史脏树/beta/b6bcd542/空暂存保持，79另存。66/71已验及手机号停止保持，旧51不恢复、63ZIP不补，未提交推送上传发布备份。下方均历史时点。**\r\n\r\n'''
old_agents = (OUT / 'AGENTS-before.bin').read_bytes()
assert (ROOT / 'AGENTS.md').read_bytes() == old_agents
(ROOT / 'AGENTS.md').write_bytes(prefix.encode('utf8') + old_agents)
changelog = ROOT / 'CHANGELOG.md'
changelog.write_bytes(('''# 1.0.79 / code100 — 2026-11-08

- 修复汽水成功响应省略空关注/粉丝数组时被误判格式异常，保留抖音分组。
- 官方累计读取补入官版三项能力字符串，需配套助手0.2.3；原助手会话已交付本地候选，未部署。
- 封面签名对齐官版native默认region与Authorization格式，保留上传及云歌单读回规则。
- 真实官方累计返回、封面400消失和新收听入账仍待本人验证，旧未知时长不重放。
- 本地回归/原签名包装与边界详见同版validation；无手机/NAS/实际业务或发布操作。

''').encode('utf8') + changelog.read_bytes())
print(json.dumps({'newDocsWritten': True, 'version': '1.0.79', 'fixedInputs': len(inputs['files'])}))
