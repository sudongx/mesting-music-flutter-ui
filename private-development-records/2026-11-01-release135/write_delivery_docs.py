from pathlib import Path
import json, runpy

root = Path('D:/AnLi')
out = root/'.codex-artifacts/2026-11-01-release135'
# Reuse the exact JSON reporter parser, with its globals bound to this run.
base = runpy.run_path(str(root/'.codex-artifacts/2026-11-01-release134/write_delivery_docs.py'))
report = base['report']
report.__globals__['out'] = out

def collect_host():
    beta, stable, back = (report(n) for n in ['beta-final.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
    assert beta['fileCount']==96 and beta['passed']==1376, beta
    assert stable['passed']==19 and back['passed']==11
    assert 'No issues found!' in (out/'analyze-complete.log').read_text(encoding='utf-8-sig')
    assert 'All tests passed!' in (out/'render.log').read_text(encoding='utf-8-sig')
    renders=sorted(p.name for p in (out/'ui').glob('*.png'));assert len(renders)==4,renders
    host={'beta':beta,'stable':stable,'searchBackPlayer':back,'analysis':{'issues':0},'renders':renders,'renderCount':4,
          'aggregation':'Final full runs only; focused and render repeats not added to counts.',
          'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'footprintParityObserved':False,
          'historicalMonthBackdatingVerified':False,'completionMessageRecordResolved':False}
    (out/'host-check-summary.json').write_text(json.dumps(host,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    return host

if __name__=='__main__':
    host=collect_host()
    apk=json.loads((root/'release/Mesting-Music-v1.0.35-verification.json').read_text(encoding='utf-8'))
    artifacts=f'原签名双ARM APK：release/{apk["file"]}，{apk["fileSize"]}字节；SHA256：{apk["sha256"]}。\n\n完整源码：Mesting-Music-v1.0.35-source.zip；大小及摘要见release/Mesting-Music-v1.0.35-SHA256.txt和source-verification.json（避免自引用）。'
    checks='96文件1376项Beta、Stable19项、搜索/返回/播放器11项（含Android返回登记1项）、分析0问题及4张主机渲染通过。专项和渲染重复项不叠加完整套件数量。'
    changes='''1. 公共内容视口按懒加载缓存行的封面就绪状态约束向下滚动。未就绪前停在已准备内容末尾，只由视口显示一个Apple动画；向上回看、原位失败重试、分页和原有惯性继续可用。
2. 显式Bouncing/Clamping等物理外加公共边界适配，保留原物理为parent；未注册Beta内容视口及横向/Stable保持原行为。覆盖心动模式共用功能页、双平台发现/音乐库、搜索/详情/推荐等共用长列表。原本只是暂停的内部加载图形改为不绘制，避免与视口动画叠在一起。
3. 官版核心播放日志的realtime、time、startlogtime已核对。真实时长与倍速媒体时长分别计量，真实开始时记录时间。旧的未发送逐次记录保留原日期补发；已接受/已发出/结果不明/被拒记录不自动重发，不把每日或月度汇总合成播放。
4. 网易云播放与同步页增加官方云村听歌足迹汇总读取及刷新、未发送记录同步入口。官方小时/分钟字段按官版条件二选一显示，不相加；接口接收、最近播放确认与足迹累计继续分别表达。'''
    boundary='''仅本地准备；未访问手机/ADB、真实账号或music后台，未提交推送、打标签、上传或发布。主机验证不证明真机覆盖安装、网络/账号结果、GPU/FPS、长期稳定。用户已确认1.0.34一起听历史累计正常；此前一起听结束私信记录仍为独立未确认事项。'''
    recovery='''云村足迹真实新增时长及十月/十一月追溯仍待用户验收。683分钟来自用户本机统计，本轮未读取其手机数据库，不能声称683分钟已补回。APK在用户手机运行后才会核查该账号保留的逐次未发送记录。只有日期/歌曲汇总而无逐次事件的旧时长继续保留本机，未证明官方接受旧日期或重算已结束月份；禁止将已accepted/unknown记录改ID重复上报。保留当前已验证的clientlog eapi传输，静态字段对齐不等于完整官版传输或真实入库验收。'''
    links='[安装验收](docs/INSTALL-v1.0.35.md)、[维护说明](docs/list-loading-and-footprint-2026-11-01-v1.0.35.md)、[主机验证](docs/validation-2026-11-01-v1.0.35.json)、[APK核验](release/Mesting-Music-v1.0.35-verification.json)、[源码核验](release/Mesting-Music-v1.0.35-source-verification.json)。'
    validation={'version':'1.0.35','androidVersionCode':56,'date':'2026-11-01','timezone':'Asia/Shanghai',
      'git':{'branch':'beta','head':'b6bcd5425e0df3e03febdd460b56d0ed42004c52','committed':False,'pushed':False,'dirtySourcePreserved':True},
      'host':host,'frozenPreviousFilesUnchanged':52,'apkVerification':'release/Mesting-Music-v1.0.35-verification.json',
      'scrollFrontier':{'sharedViewport':True,'originalPhysicsRetained':True,'clampingAndBouncingTested':True,'forwardOnlyFence':True,'readyContentRetained':True,'singleContentIndicator':True,'scope':'Beta registered vertical artwork/content viewports'},
      'listeningReport':{'realtimeActualAudibleSeconds':True,'timeSpeedWeightedMediaSeconds':True,'originalStartlogtime':True,'queuedOpenUndispatchedRecoveryOnly':True,'acceptedUnknownDispatchedNeverReplayed':True,'aggregateBackfillFabricated':False,'originalTransportRetained':True,'officialFootprintReadRoute':'/api/music/multi/terminal/widget/listen/data','realFootprintObserved':False,'historicalBackdatingVerified':False},
      'userConfirmedTogetherCumulativeWorkingIn134':True,'completionMessageRecordResolved':False,
      'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'published':False}
    (root/'docs/validation-2026-11-01-v1.0.35.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    (root/'docs/fixes-2026-11-01-v1.0.35.md').write_text(f'''# Mesting Music 1.0.35 / code56 修改与维护

2026-11-01，Asia/Shanghai。用户逐项澄清并确认实施。

{changes}

{checks}

实现和官方静态证据范围见[list-loading-and-footprint](list-loading-and-footprint-2026-11-01-v1.0.35.md)。新test/release_135_scroll_frontier_test.dart与test/release_135_listening_report_test.dart覆盖快速甩动/解锁/反向/重试、时钟/协议/跨月未发送记录、账号隔离、避免重发与官方足迹读取。早期夹具/物理继承未命中、设置自动读取和分页旧控制器失败日志保留私有目录，不计入通过数量。设置改手动读取；公共滚动配置复用以保留活动ScrollPosition；诊断测试保留原始异常栈，最终完整回归覆盖。

{recovery}

{boundary}

保留52份旧冻结APK/源码ZIP、签名密钥、完整玻璃、固定双ARM引擎/依赖锁定和PRODUCT.md/DESIGN.md。只针对本轮源码实施，未格式化覆盖无关旧改动；build入口显式1.0.35/code56，pubspec既有版本占位保留，实际APK另验。
''',encoding='utf-8')
    (root/'docs/INSTALL-v1.0.35.md').write_text(f'''# Mesting Music 1.0.35 / code56 安装验收

2026-11-01，Asia/Shanghai。应用Mesting Music，包名com.mesting.music.beta，原签名及固定双ARM定制Release引擎/完整玻璃保持。签名相容不等于已经真机覆盖安装验收。

{artifacts}

请自行覆盖安装后验证：

1. 心动模式快速向下甩动，未就绪前停在已显示内容末尾，只出现一个Apple加载动画；等待时能向上回看，内容和封面就绪后可继续往下，失败能原位重试。连续快速正反向拖动不应大片空白或双动画。
2. 对照搜索各分类、发现/推荐、音乐库、歌单/专辑/歌手详情及网易云其他长列表；保留原先页面状态、封面缓存、底部玻璃和末项避让。慢网、离线、大字号与较短列表也需检查；横向切页不应被纵向边界拦住。
3. 在网易云账号下播放一首可完整播放的歌曲数分钟后切到下一首，随后到网易云播放与同步页刷新官方云村足迹，并对照官版。统计可能延迟；接口200或最近播放出现不能代替足迹时长验收。暂停/缓冲/拖动不计真实秒，倍速不放大实际听歌时间。
4. 升级后查看待结束/待发送时长，可点击同步确定未发送的记录。只能补发手机仍保存的真实逐次未发送日志，沿用原时间；已接受或结果不明的不会重复发送。本机十月683分钟及十一月统计不删除、不改写。历史原月份能否补回以官方处理为准，不能以按钮完成或日志接收表示已追回。
5. 复测已确认的一起听历史累计、1.0.33地区与历史说明底距、1.0.32搜索侧滑等既有功能。

{checks}

{recovery}

{boundary}
''',encoding='utf-8')
    (root/'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.35.md').write_text(f'''# Mesting Music 1.0.35 / code56 本地交付与接续

2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。1.0.25～1.0.35未提交改动保留，暂存区空；HEAD不是当前完整源码。

{artifacts}

{links}

{changes}

{checks}

{recovery}

{boundary}

维护入口：lib/shared/widgets/artwork_scroll_frontier.dart、artwork_reveal_boundary.dart；lib/core/audio/actual_listening_counter.dart；lib/features/music_platform/netease/netease_playback_log.dart、netease_footprint.dart、netease_listening_reporter.dart、netease_music_repository.dart、netease_playback_settings_page.dart。测试见test/release_135_*。私有完整日志、4张主机渲染、构建/保护校验在.codex-artifacts/2026-11-01-release135/，官版证据在其protocol/子目录，不进入源码ZIP。

52份旧冻结产物/原签名、PRODUCT.md/DESIGN.md、完整玻璃与双ARM定制引擎保留。Flutter3.41.9/Dart3.11.5、JDK/SDK/NDK和依赖锁未升级；build包装入口默认1.0.35/code56。源码ZIP保存当前manifest与旧SOURCE-SNAPSHOT-v1.0.24-BASELINE.json，工作区SOURCE-SNAPSHOT.json仍为历史基线，不据此回滚。

后续保持脏工作区，不reset/clean/stash、切分支或pull覆盖；未经新授权不访问手机/ADB、真实账号/music后台，不提交推送/打标签或发布。新需求继续一次一个问题、方案确认后实施；已确认选择不重复询问。
''',encoding='utf-8')
    agents=root/'AGENTS.md';text=agents.read_text(encoding='utf-8-sig');assert '本机最新为1.0.35/code56' not in text
    pointer='**2026-11-01 本机最新为1.0.35/code56：按确认补列表就绪边界、末尾单动画/重试，修正网易云realtime/time/startlogtime与未发送逐次记录恢复，增加官方云村足迹汇总读取。先读[1.0.35交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.35.md)和[安装验收](docs/INSTALL-v1.0.35.md)。96文件1376项Beta、Stable19、搜索/返回/播放器11项、分析0及4张渲染通过。原签名双ARM仅本地准备，完整玻璃/定制引擎与52份旧冻结物保留；1.0.25～1.0.35未提交。用户已确认1.0.34一起听历史累计正常；结束私信记录仍未确认。云村真实新增与十月683分钟/十一月追溯待验收，不能凭汇总补造或重发已确认/结果不明日志。D:/AnLi，beta/b6bcd542；未手机/ADB、真实账号/后台、提交推送或发布。下方最新保留历史时点。**\n\n'
    agents.write_text(pointer+text,encoding='utf-8')
    print('1.0.35 delivery documents and current pointer written')
