from pathlib import Path
import json, runpy

root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-11-02-release137'
base=runpy.run_path(str(root/'.codex-artifacts/2026-11-01-release134/write_delivery_docs.py'))
report=base['report'];report.__globals__['out']=out

def collect_host():
    beta,stable,back=(report(n) for n in ['beta-final.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
    assert beta['fileCount']==100 and beta['passed']==1404,beta
    assert stable['passed']==19 and back['passed']==11
    assert 'No issues found!' in (out/'analyze-complete.log').read_text(encoding='utf-8-sig')
    assert 'All tests passed!' in (out/'render.log').read_text(encoding='utf-8-sig')
    renders=sorted(p.name for p in (out/'ui').glob('*.png'));assert len(renders)==6,renders
    host={'beta':beta,'stable':stable,'searchBackPlayer':back,'analysis':{'issues':0},'renders':renders,'renderCount':6,
      'focusedTests':16,'aggregation':'Final complete runs only; focused/render repetitions are not added to overlapping test totals.',
      'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'october683MinutesRecovered':False,
      'completionMessageRecordResolved':False,'actualApiAcceptanceVerified':False}
    (out/'host-check-summary.json').write_text(json.dumps(host,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return host

if __name__=='__main__':
    host=collect_host();apk=json.loads((root/'release/Mesting-Music-v1.0.37-verification.json').read_text(encoding='utf-8'))
    checks='100文件1404项Beta、Stable19项、搜索/返回/播放器11项（含Android返回登记1项）、分析0问题及6张主机渲染通过。专项16项与渲染复跑不重复叠加。'
    artifacts=f'''原签名双ARM APK：release/{apk['file']}，{apk['fileSize']}字节，SHA256：{apk['sha256']}。

完整源码：Mesting-Music-v1.0.37-source.zip；大小、摘要和文件数见release/Mesting-Music-v1.0.37-SHA256.txt及source-verification.json，避免源码包自引用。'''
    features='''网易云播放与同步页的“云村听歌足迹”改为独立入口，分别读取官方今日、当前月和历史总时长，记录每项成功读取时间。失败保留旧值、保留原读取时间并提示；字段缺失不变成0。今日按官方日期匹配日记录，歌曲/播客/有声书分项求和；当前月与历史报表校验返回月份，防止官方返回最新报告却误标为所选历史月。

历史月份默认上个月，可选择最近36个月，手动读取官方月报后核对当前账号本机网易云歌曲时长、逐次记录及已知真实时长。官方多端口径和本机/逐次归月不同，不直接相减为缺失分钟；查看范围也可能受平台会员规则影响。窄屏大字号渲染发现月报按钮文字换行裁切，已缩短为“读取月报并核对”，保留原玻璃并验证单行及页尾内容避让。

数据模型、只读仓库、读取协调器、账号Provider和页面分层。时长字段以秒解析，报告时间戳按毫秒解析；北京时间日/月与请求代次隔离，账号/凭据变化销毁旧快照。同一账号应用会话内离页再进入保留成功值，不承诺重启后的持久化。入页、手动刷新、前台恢复触发读取；仅可见前台页每分钟检查是否跨日，只有日期变化才刷新，不增加听歌写入心跳或后台轮询。'''
    limits='''十月683分钟尚未追回。用户已提供完整十月脱敏报告：本机683分10秒，逐次292条约649分30秒，其中280条accepted约617分31秒、12条unknown约31分59秒、0待发，均保存旧格式字段。用户反馈十一月官版今日/本周会增长；规则截图确认今日可能延迟1～2分钟、历史总时长按天更新，周日15点是周报，月报次月1日19点前后。

本轮不修改播放上报/补发协议，不重复发送accepted/dispatched/unknown、不根据按天汇总伪造播放。官版离线队列静态证据不等于服务器支持已接收旧日志纠错或已结束月份回填；真实API返回、跨端新增和十月恢复由用户验收。本地MockClient只证明传输路径、参数与状态逻辑，不证明官版账号成功。用户已确认一起听历史累计有效；结束私信记录仍为独立未确认事项。'''
    boundary='仅本地准备；未访问手机/ADB、真实账号/music后台，未Git提交推送/打标签、上传或发布。原签名、固定双ARM定制引擎、完整玻璃、PRODUCT.md/DESIGN.md及56份旧冻结APK/源码ZIP保持。主机验证不等于真机覆盖安装、GPU/FPS或长期稳定验收。'
    paths='lib/features/music_platform/netease/footprint/official_footprint.dart、official_footprint_repository.dart、official_footprint_reader.dart、official_footprint_providers.dart、official_footprint_page.dart；入口netease_playback_settings_page.dart；新回归test/release_137_footprint_test.dart和test/release_137_footprint_ui_test.dart。'
    protocol='''官方当前网页源日期2026-11-02；REA调查原APK为9.6.15/code9006015，SHA256 e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894。当前网页动态代码与该APK静态代码分别归属，不宣称同版本运行验证。API模块main-290eea8e.ae83ab53.js的6882及页面main-49eac513.a1a5bbec.js的87869/82796/84513提供读取参数、日期与秒数消费证据；格式化函数r8除以3600和60，日记录合计duration/podcastDuration/audiobookDuration。REA parent Evidence：ev_7039699c9b5d758de0ca18820547a117e76a57e33c0f2aebbdb16cec42ae5edc；静态语义图partial，不当成真实后台观测。

接口：当前周/月 /api/content/activity/listen/data/realtime/report，type=week/month；历史月报 /api/content/activity/listen/data/report，type=month、endTime=中国日历月底减一小时（与官版导航一致）；历史总时长 /api/content/activity/listen/data/total，读取data.totalDuration。这些业务是读取统计，沿用App已有EAPI传输与请求级凭据代次保护；网页层GET/POST与App的EAPI HTTP封装不冒充完全相同。未向接口发送本机时长或逐次日志。

没有回退到旧widget的hourDuration/minuteDuration相加；旧widget DTO/测试保留兼容，本入口改用官方主页面字段。无新的SDK/依赖升级。'''
    validation={'version':'1.0.37','androidVersionCode':58,'date':'2026-11-02','timezone':'Asia/Shanghai',
      'git':{'branch':'beta','head':'b6bcd5425e0df3e03febdd460b56d0ed42004c52','committed':False,'pushed':False},
      'host':host,'frozenPreviousFilesUnchanged':56,'apkVerification':'release/Mesting-Music-v1.0.37-verification.json',
      'officialReadback':{'separateTodayMonthTotal':True,'historyMonthValidated':True,'secondsAndEpochMillisecondsSeparate':True,
        'threeDailyResourceKindsSummed':True,'noMissingFieldToZero':True,'independentRefreshFailurePreservesValuesAndTimestamps':True,
        'ownerTokenAndRequestGenerationIsolation':True,'chinaCalendarRollover':True,'visiblePageCalendarCheckOnly':True,
        'sessionMemorySnapshotsOnly':True,'localComparisonsReadOnly':True,'listeningWriteProtocolChanged':False,'uncertainRecordsReplayed':False},
      'octoberReportInspected':True,'october683MinutesRecovered':False,'newNovemberGrowthUserReported':True,
      'completionMessageRecordResolved':False,'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'published':False}
    (root/'docs/validation-2026-11-02-v1.0.37.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    (root/'docs/official-footprint-2026-11-02-v1.0.37.md').write_text(f'''# 1.0.37 官方足迹读取维护

{features}

{protocol}

维护入口：{paths}

{checks}

专项包含三类秒数、零值/缺失、无效/重复日、日期/闰年、原历史endTime、独立失败与旧时间、同日合并点击、午夜/跨月晚响应、账号/凭据生命周期、快速切月及失败保留。UI包含真实push路由、深浅色、320px/1.5字号、读取失败、历史本机对照、另一账号晚返回、注销、按钮按住拖动和前台跨日。新增版本后，旧更新说明测试的1.0.32条目下移到浮动播放器范围，已修正测试滚动定位，单独复测通过后重新运行完整回归。早期测试括号/日期上限、懒列表滚动方向及模拟生命周期失败保留私有日志；最终完整运行才计入通过。

{limits}

{boundary}
''',encoding='utf-8')
    (root/'docs/fixes-2026-11-02-v1.0.37.md').write_text(f'''# Mesting Music 1.0.37 / code58 修改

2026-11-02，用户确认方案后实施。

{features}

{checks}

[维护与依据](official-footprint-2026-11-02-v1.0.37.md)。

{limits}

{boundary}
''',encoding='utf-8')
    (root/'docs/INSTALL-v1.0.37.md').write_text(f'''# Mesting Music 1.0.37 / code58 安装验收

2026-11-02，Asia/Shanghai。显示名Mesting Music，包名com.mesting.music.beta，保留原签名及完整玻璃。签名/版本兼容已主机核验，真机覆盖安装未验收。

{artifacts}

1. 安装后进入“网易云播放与同步→云村听歌足迹”。分别观察官方今日、当前月和历史总时长及各自读取时间；不是旧widget只显示整小时的汇总。
2. 正常听歌并结束/切换一首，再进入或手动刷新足迹，对照官版今日/当月增长。官方统计可延迟；历史总时长按天处理，不能用接口回执替代足迹验收。不要在测试中重复盲发十月旧记录。
3. 断网刷新：已有值和原时间保留，显示失败提示；首次未获得的项显示暂未获取，不能变为0。恢复网络后可重试。
4. 选择2026-10，点击“读取月报并核对”。报告月份不匹配、未开放或失败时明确提示，不把最新月份冒充十月；成功时分别显示官方月报、本机网易云歌曲及逐次记录。不要把口径差当作确切缺失分钟。
5. 午夜/月底前后或后台恢复后检查日期。若新读取失败，旧日期应明确标为上次记录；切换/退出账号后不得出现上一账号值。源码内的模拟测试不等于这些设备行为已真实验证。
6. 窄屏、大字号、深浅色检查底部避让；按住刷新/历史按钮上下拖动时不应误触发。保留既有一起听累计和列表加载行为。

{checks}

{limits}

{boundary}
''',encoding='utf-8')
    handoff=root/'HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.37.md'
    handoff.write_text(f'''# Mesting Music 1.0.37 / code58 本地交付与接续

2026-11-02，Asia/Shanghai；D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。1.0.25～1.0.37全部未提交改动保留，暂存区空，HEAD不是当前完整源码。

{artifacts}

[安装验收](docs/INSTALL-v1.0.37.md)、[实现与证据](docs/official-footprint-2026-11-02-v1.0.37.md)、[验证](docs/validation-2026-11-02-v1.0.37.json)、[APK核验](release/Mesting-Music-v1.0.37-verification.json)、[源码核验](release/Mesting-Music-v1.0.37-source-verification.json)。

{features}

{checks}

{limits}

{boundary}

维护入口：{paths}

原官版逆向与完整REA ledger在.codex-artifacts/2026-11-02-offline-investigation/（不进入源码ZIP），用户十月报告分析在2026-11-02-october-report/。本版日志/6张渲染/构建/签名与保护校验在2026-11-02-release137/。完整源码ZIP保留定制引擎和许可，排除密钥/本机配置/私有诊断；旧SOURCE-SNAPSHOT.json工作区元数据不覆盖，打包为明确的v1.0.24-BASELINE另附当前manifest。

不reset/clean/stash、切分支或pull覆盖；不重问十月诊断报告已提供、待发0、已点击补发和新播放增长等已确认事实。后续重点是用户验收真实今日/当前月/总与十月报表读取；服务器纠错/回填尚未知，不据静态队列直接重发已接收或未知旧记录。没有新授权不访问手机/ADB、真实账号/music后台，不提交推送/打标签或发布。新需求仍一次一个问题，方案确认后实施。
''',encoding='utf-8')
    p=root/'AGENTS.md';text=p.read_text(encoding='utf-8-sig');assert '本机最新为1.0.37/code58' not in text
    pointer='**2026-11-02 本机最新为1.0.37/code58：按确认接入官方今日、当前月和历史总时长，分别保留读取时间/失败旧值，增加历史月报本机核对与跨日/账号隔离。先读[1.0.37交接](HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.37.md)和[安装验收](docs/INSTALL-v1.0.37.md)。100文件1404项Beta、Stable19、搜索/返回/播放器11项、分析0及6张渲染通过。原签名双ARM仅本地准备；完整玻璃/定制引擎与56份旧冻结物保留；1.0.25～1.0.37未提交。十月完整报告已收到：本机683分10秒、逐次292条（280接收/12未知）、待发0；新十一月增长用户已反馈。十月仍未追回，不重发已接收/未知日志，真实官方读取和总时长待用户验收；一起听累计已确认，结束私信仍未确认。D:/AnLi，beta/b6bcd542；未手机/ADB、真实账号/后台、提交推送或发布。下方最新保留历史时点。**\n\n'
    p.write_text(pointer+text,encoding='utf-8')
    print('1.0.37 verified delivery docs and continuation pointer written.')
