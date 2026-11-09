from pathlib import Path
import json, runpy

root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-11-01-release136'
base=runpy.run_path(str(root/'.codex-artifacts/2026-11-01-release134/write_delivery_docs.py'))
report=base['report'];report.__globals__['out']=out
def collect_host():
    beta,stable,back=(report(n) for n in ['beta-final.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
    assert beta['fileCount']==98 and beta['passed']==1388,beta
    assert stable['passed']==19 and back['passed']==11
    assert 'No issues found!' in (out/'analyze-complete.log').read_text(encoding='utf-8-sig')
    assert 'All tests passed!' in (out/'render.log').read_text(encoding='utf-8-sig')
    renders=sorted(p.name for p in (out/'ui').glob('*.png'));assert len(renders)==4,renders
    host={'beta':beta,'stable':stable,'searchBackPlayer':back,'analysis':{'issues':0},'renders':renders,'renderCount':4,
      'aggregation':'Final complete runs only; focused/render repeats are not added to overlapping counts.',
      'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'actualOctoberRecordsInspected':False,
      'october683MinutesRecovered':False,'completionMessageRecordResolved':False}
    (out/'host-check-summary.json').write_text(json.dumps(host,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return host
if __name__=='__main__':
    host=collect_host();apk=json.loads((root/'release/Mesting-Music-v1.0.36-verification.json').read_text(encoding='utf-8'))
    artifacts=f'原签名双ARM APK：release/{apk["file"]}，{apk["fileSize"]}字节；SHA256：{apk["sha256"]}。\n\n完整源码：Mesting-Music-v1.0.36-source.zip；大小与摘要见release/Mesting-Music-v1.0.36-SHA256.txt和source-verification.json，避免自引用。'
    checks='98文件1388项Beta、Stable19项、搜索/返回/播放器11项（含Android返回登记1项）、分析0问题及4张主机渲染通过。专项12项及渲染重跑不叠加完整套件数量。'
    work='''新增“网易云播放与同步→按月听歌上报诊断”。默认上个月，可切换有本机记录的月份并刷新，读取当前网易云账号的一致本机快照。分别展示全部来源/网易云歌曲的按日真实时长、逐次时长记录及各发送状态、开始播放与最近播放匹配数量、旧版缺少realtime/startlogtime等字段。

模型、数据库读取、页面/复制分别解耦。数据库只读事务不改变日志状态、不发网络请求；本版不改播放上报/补发协议。JSON仅白名单日期、匿名报告内编号、时长、状态和字段完整度，不含账号/歌曲/事件真实ID、名称、URL、凭据或精确播放时刻。导出前预览，确认复制后由用户手动分享；账号变化后不能复制旧报告。逐次明细上限5000条并显式标识截断，汇总仍完整。

按本机收听日与逐次开始日期归月可能存在跨午夜差异，二者不能直接相减当作云端缺失分钟。旧记录缺字段只能说明本机保存的内容，不能倒推补发时的真实线上载荷；accepted及recent匹配不等于足迹入库，只有time而无真实计时证据的记录不会被当作确切真实分钟。'''
    limits='''本版目标是拿到真实按月诊断，尚未读到用户手机上的十月明细，也没有追回683分钟。用户已确认1.0.35点击补发后仍未恢复，待发约0分钟；截图为已接收540条、最近播放确认236条、结果未确认18条，官方汇总显示2026/11约1小时。上述为全期条数与当前月显示，不证明十月入库。旧月份追溯、真实新增足迹仍待验收，不重发accepted/dispatched/unknown或伪造日/月汇总。用户已确认1.0.34一起听历史累计正常；结束私信记录仍为独立未确认事项。'''
    boundary='仅本地准备；未访问手机/ADB、真实账号/music后台，未Git提交推送/打标签、上传或发布。原签名、完整玻璃与固定双ARM引擎保持；主机验证不等于真实账号、手机覆盖安装、GPU/FPS与长期稳定验收。'
    paths='lib/features/music_platform/netease/diagnostics/netease_listening_audit.dart、netease_listening_audit_provider.dart、netease_listening_audit_page.dart；设置入口netease_playback_settings_page.dart。新回归test/release_136_listening_audit_test.dart和test/release_136_listening_audit_ui_test.dart。'
    validation={'version':'1.0.36','androidVersionCode':57,'date':'2026-11-02','timezone':'Asia/Shanghai',
      'git':{'branch':'beta','head':'b6bcd5425e0df3e03febdd460b56d0ed42004c52','committed':False,'pushed':False,'dirtySourcePreserved':True},
      'host':host,'frozenPreviousFilesUnchanged':54,'apkVerification':'release/Mesting-Music-v1.0.36-verification.json',
      'monthlyAudit':{'scope':'current NetEase owner only','consistentReadOnlyDatabaseSnapshot':True,'networkUsed':False,
        'journalStatesMutated':False,'localDailySeparateFromPerPlayCalendarAttribution':True,'mediaTimeDoesNotSubstituteActualTime':True,
        'missingSavedFieldsNotProofOfWireFields':True,'explicitPreviewThenClipboard':True,'accountSwitchPreventsStaleCopy':True,
        'identifiersTitlesUrlsCredentialsExcluded':True,'detailLimit':5000,'truncationDisclosed':True,'aggregateTotalsNotTruncated':True},
      'actualOctoberRecordsInspected':False,'october683MinutesRecovered':False,'userConfirmedTogetherCumulativeWorkingIn134':True,
      'completionMessageRecordResolved':False,'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'published':False}
    (root/'docs/validation-2026-11-01-v1.0.36.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    (root/'docs/fixes-2026-11-01-v1.0.36.md').write_text(f'''# Mesting Music 1.0.36 / code57 修改维护

2026-11-01开始准备，2026-11-02完成本地核验，Asia/Shanghai。用户确认新增按月诊断与脱敏导出后实施。

{work}

维护入口：{paths}

{checks}

专项覆盖本机683分钟没有逐次日志、日志状态与开始/时长分开、原时间归月、账号/来源隔离、重复输入去重、隐私白名单、明细截断及数据库状态不变。UI覆盖深/浅色、320px大字号、切月、取消/复制、账号变更、按钮按住滚动恢复。真实入口是push页，测试夹具同样使用push，避免把Navigator根页弹出菜单改变edge-back形态造成的销毁误当业务切月问题；月份控件独立于异步内容以保留选择生命周期。历史更新说明旧测试在新增版本后把条目停在底部控件覆盖处，现先滚入可操作视口再点击；生产历史页面不因此改动。早期夹具/编译及首次完整套件失败保留私有日志，不计为通过。

{limits}

{boundary}

54份旧冻结APK/源码ZIP、密钥、依赖锁、PRODUCT.md/DESIGN.md保留。构建入口默认1.0.36/code57，工作区既有pubspec版本占位保持；实际APK版本独立核验。
''',encoding='utf-8')
    (root/'docs/INSTALL-v1.0.36.md').write_text(f'''# Mesting Music 1.0.36 / code57 安装与诊断

2026-11-01开始准备，2026-11-02完成本地核验，Asia/Shanghai。应用名Mesting Music，包名com.mesting.music.beta；保留原签名、固定双ARM引擎及完整玻璃。签名相容不等于真机覆盖安装已验收。

{artifacts}

安装后请执行：

1. 在网易云播放与同步页进入“按月听歌上报诊断”，选择2026-10，点击“重新读取本机记录”。核对本机时长、逐次时长的接口回执/未知/待发状态、缺少旧版字段数量。不要用顶部音源/崩溃的“复制JSON日志”替代此报告。
2. 点击“预览并复制脱敏 JSON”，查看说明后点“复制诊断”，手动把文本发回本会话。这里不需要账号、Cookie、歌曲名称或手机连接；诊断不会补发、上传或改变原记录。
3. 可再选2026-11导出单独报告；切月应切换数字，刷新后更新快照。0条/0分钟只表示当前账号与该月的本机读取结果，不代表官方已完成足迹同步。
4. 在深/浅色、大字号与窄屏检查按钮、预览和底部玻璃避让；从按钮起手向上拖动时不应触发复制，取消预览不复制，账号变化后旧报告不能复制。
5. 保留1.0.35列表加载/滚动及已确认一起听历史累计等功能。原补发按钮仍只补发确定未发送逐次日志，不重发结果未知或已有回执的记录。

{checks}

{limits}

{boundary}
''',encoding='utf-8')
    (root/'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.36.md').write_text(f'''# Mesting Music 1.0.36 / code57 本地交付与接续

2026-11-01开始准备，2026-11-02完成本地核验，Asia/Shanghai。唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。1.0.25～1.0.36未提交改动保留，暂存区空；HEAD不是当前完整源码。

{artifacts}

[安装诊断步骤](docs/INSTALL-v1.0.36.md)、[维护说明](docs/fixes-2026-11-01-v1.0.36.md)、[主机验证](docs/validation-2026-11-01-v1.0.36.json)、[APK核验](release/Mesting-Music-v1.0.36-verification.json)、[源码核验](release/Mesting-Music-v1.0.36-source-verification.json)。

{work}

{checks}

{limits}

{boundary}

接下来的真正阻点是等待用户手动提供十月脱敏按月JSON，之后才能判断缺少逐次记录、旧载荷字段或平台不接受历史追溯。不要拿当前540/236/18的全期条数推算十月分钟数，不重复询问已经确认的0分钟和补发已点击事实。没有数据时不承诺追回，也不继续打无依据的“补回版”。

维护入口：{paths}

私有完整日志、4张渲染、构建和保护校验在.codex-artifacts/2026-11-01-release136/，不进入源码ZIP。54份旧冻结物及签名密钥、PRODUCT.md/DESIGN.md、完整玻璃和定制引擎保持。Flutter3.41.9/Dart3.11.5/JDK/SDK/NDK和依赖锁不升级；两个build包装入口默认1.0.36/code57。源码ZIP自带当前manifest和旧SOURCE-SNAPSHOT-v1.0.24-BASELINE.json，工作区SOURCE-SNAPSHOT.json仍为历史基线，不据此回滚。

不reset/clean/stash、切分支或pull覆盖。无新明确授权不访问手机/ADB、真实账号/music后台，不提交推送/打标签或发布。新需求继续一次一个问题、方案确认后实施，已确认选择不重复询问。
''',encoding='utf-8')
    agents=root/'AGENTS.md';text=agents.read_text(encoding='utf-8-sig');assert '本机最新为1.0.36/code57' not in text
    pointer='**2026-11-02 本机最新为1.0.36/code57：新增当前网易云账号按月听歌上报诊断及预览/复制脱敏JSON，只读本机统计与日志，分开时长、状态、旧字段缺失及最近播放确认。先读[1.0.36交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.36.md)和[安装诊断](docs/INSTALL-v1.0.36.md)。98文件1388项Beta、Stable19、搜索/返回/播放器11项、分析0及4张渲染通过。原签名双ARM仅本地准备；完整玻璃/引擎与54份旧冻结物保留；1.0.25～1.0.36未提交。用户十月683分钟仍未追回，已点击补发、待发0分钟、截图全期回执540/最近确认236/未知18，等待本版十月脱敏报告；不要重复盲发或声称已补回。一起听累计用户已确认，结束私信记录仍未确认。D:/AnLi，beta/b6bcd542；未手机/ADB、真实账号/后台、提交推送或发布。下方最新保留历史时点。**\n\n'
    agents.write_text(pointer+text,encoding='utf-8');print('1.0.36 delivery documents and pointer written')
