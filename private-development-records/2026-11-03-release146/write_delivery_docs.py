"""Write the locally verified release handoff before freezing complete source."""
from pathlib import Path
import json

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'
apk = json.loads((root / 'release/Mesting-Music-v1.0.46-verification.json').read_text('utf-8'))
checks = json.loads((out / 'host-check-summary.json').read_text('utf-8'))
native = json.loads((out / 'formal-payload-verification.json').read_text('utf-8'))
notes = json.loads((out / 'local-apk-notes-verification.json').read_text('utf-8'))
compiler = json.loads((out / 'compiler-definitions.json').read_text('utf-8'))
protection = json.loads((out / 'preservation-final.json').read_text('utf-8'))
assert checks['analysisPassed'] and protection['allPreviousArtifactBytesUnchanged']
assert notes['versionCode'] == 67 and native['formalVersion'] == '1.0.46+67'
beta = checks['beta-complete.jsonl']
passed, skipped = beta['counts']['success'], beta['counts']['skipped']
assert beta['files'] == 134 and passed == 1653 and skipped == 1
visual_files = sorted((out / 'ui-round2').glob('*.png')) + sorted((out / 'ui/footprint').glob('*.png'))
assert len(visual_files) == 20

validation = {
    'date': '2026-11-03', 'version': '1.0.46', 'androidVersionCode': 67,
    'stage': 'local_original_signed_formal_release',
    'apk': {'path': 'release/' + apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256']},
    'approvedScope': [
        'compact account-owned list ends and visible terminal tips',
        'append spinner just above live chrome and one-screen artwork preparation',
        'single-row podcast navigation with narrow-screen dropdown',
        'theme-aware red play-all actions', 'shared comment-style top status feedback',
        'left-swipe deletion of incomplete tasks and validated pause/resume',
        'complete favorites-only search and account-scoped downloaded markers',
        'week/month/year swipes with independent dates and scroll state',
    ],
    'beta': beta, 'betaFileList': json.loads((out / 'beta-files.json').read_text('utf-8-sig')),
    'stable': checks['stable-complete.jsonl'],
    'navigation': checks['search-back-player.jsonl'],
    'additionalStablePlaylist': checks['stable-legacy-playlist.jsonl'],
    'formalLoggingAndSyncRegression': checks['formal-regression.jsonl'],
    'formalRegressionIncludedInBetaCount': True,
    'analysisRunThisBuild': True, 'analysisIssues': 0,
    'actualAndroidReleaseCompilationPassed': True,
    'currentCompilerDefinitions': compiler['whitelistedCompilerDefinitions'],
    'actualApkNotes': notes,
    'originalSignature': True, 'originalCertificateSha256': apk['certificateSha256'],
    'packageName': apk['packageName'], 'appName': apk['appName'],
    'pinnedCustomReleaseEngine': True, 'glassShaderFilesCompared': 7,
    'sdkLibraryFilesCompared': 8, 'optimizedMediaLeaseBridgeVerified': True,
    'permissionsUnchangedFromR2': native['permissionsIdenticalToR2'],
    'nativeScenariosInheritedFromIdenticalR4Inputs': 16,
    'r4SynchronizationInputsPreserved': True,
    'r4CandidateTrackChangeCasesPassedPreviously': 7,
    'r4CandidateLeaseReleaseChecksPassedPreviously': 2,
    'r4CandidateAcceptanceIsNotRelease146DeviceAcceptance': True,
    'visual': {'hostSyntheticOnly': True, 'rounds': 2, 'finalDistinctFrames': 20,
               'files': [str(path.relative_to(root)).replace('\\', '/') for path in visual_files],
               'phoneGpuAcceptance': False,
               'firstCaptureHarnessBackgroundAndFontsCorrected': True},
    'downloadResume': {'rangeAndIfRange': True, 'retainsFlushedPartialBytes': True,
                       'repeatedPauseAndMissingRepeatedEtagTested': True,
                       'completedPartial416Tested': True,
                       'ignoredRangeAndChangedEntityRejected': True,
                       'blockedResolverDeleteReleasesQueueTested': True,
                       'realCdnAndAndroidStorageResumeAcceptance': False,
                       'savingPublishIsAtomicAndNotDismissible': True,
                       'externallyPurgedPartialRequiresFreshDownload': True},
    'togetherSyncDiagnosticLoggingEnabled': False,
    'experimentalNativePlaybackEnabled': False, 'localDiagnosticsLoggingEnabled': False,
    'oldNativeJournalHeldWithoutReplay': True,
    'formalApkDeviceInstalledOrTested': False, 'allBackgroundAcceptanceComplete': False,
    'historicalOfficialProfileTotalFixed': False, 'october683MinutesRecovered': False,
    'previousFrozenArtifactsPreserved': 82, 'originalSigningMaterialUnchanged': True,
    'dependencyLockUnchanged': True, 'branch': protection['branch'], 'head': protection['head'],
    'staged': [], 'deviceAccessThisRelease': False, 'realAccountAccessThisRelease': False,
    'backendAccess': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
    'sourceVerificationExternalToAvoidSelfReference': 'release/Mesting-Music-v1.0.46-source-verification.json',
}
(root / 'docs/validation-2026-11-03-v1.0.46.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

handoff = f'''Mesting Music 1.0.46 / code67 本地正式交付

本入口接替1.0.45正式交付，先读 docs/INSTALL-v1.0.46.md、docs/fixes-2026-11-03-v1.0.46.md 和 docs/validation-2026-11-03-v1.0.46.json。用户确认八组截图改动及下载任务范围：排队、失败和下载中可删除；下载中可暂停并保留进度续传；听歌足迹侧滑切换周/月/年，日期仍用箭头。方案确认后实施，版本为1.0.46/code67，原签名正式APK仅本地交付。

APK：release/Mesting-Music-v1.0.46.apk，{apk['fileSize']}字节，SHA256 {apk['sha256']}。完整当前源码：Mesting-Music-v1.0.46-source.zip；源码文件数、体积及摘要见 release/Mesting-Music-v1.0.46-source-verification.json，汇总摘要见 release/Mesting-Music-v1.0.46-SHA256.txt。显示名Mesting Music，包名com.mesting.music.beta，原证书、双ARM、定制Release引擎、7玻璃shader/8SDK库及许可证保持。更新检查开启，原生上报试验、本机通用诊断和一起听诊断日志关闭。签名材料、设备采集、官版参考、QA字体/截图和构建缓存均不进入源码ZIP。

已完成：列表按当前玻璃控件高度避让，收紧固定大留白，完整数据页末尾显示“已加载全部内容”，静态组合页显示“已到底”；续载动画在控件上方，延长懒列表图片准备范围至一屏，API分页仍按原接口批量；播客按文字实际宽度使用单行或下拉；播放全部改为明暗适配红色；短提示统一使用评论发送同款顶部HUD。下载增加未完成任务左滑删除、暂停/继续、真实Range与If-Range校验；收藏增加完整集合内的歌名/歌手/专辑搜索，搜索按钮无长按放大，当前账号成功保存的歌曲显示已下载。足迹用下载页同款BetaSwipePages实现周/月/年侧滑，保留每页日期、数据及滚动位置。

本次新跑Beta全量并对失败和后续变更做完整文件复测，最终134文件{passed}项通过、{skipped}项条件跳过；这是完整文件替换合并后的结果，不是首轮一次无失败。Stable21、导航54、额外Stable歌单5项通过；关闭日志后的4整文件28项也通过，已包含在Beta范围，不重复累加。静态分析0问题。20张最终主机合成渲染核对明暗、窄屏、大字、下拉及足迹收起态；主机截图不代表手机GPU/输入法表现。实际正式APK的8条说明通过生产Range读取器离线读取并与历史说明核对。

R4原生16项来自已验证且当前摘要相同的输入，本次实际Android编译、DEX中优化后的媒体桥接、资源表、权限、原签名、双ARM和引擎再次核对。此前R4候选双开切歌7项与承载释放2项是历史实测，不能当作46的手机验收。本次未访问手机/ADB、真实账号或业务后台，未安装46。

仍需用户安装验收：真实CDN Range支持、Android存储与暂停后重开App续传、实际键盘和滑动手感、长列表真实账号分页与GPU。服务器忽略Range、资源变更或不提供安全续传依据时会明确提示重新下载，不拼接错误文件；系统清理暂停临时文件后也需重下。保存到系统目录的短暂原子发布阶段不可删除，避免产生已保存却无记录的中间状态。已下载标记根据本账号成功保存记录显示；若文件被外部移动/删除，播放前仍检查可读性。

未解决历史问题：官版个人资料历史总时长及十月683分钟未追回；旧日志继续隔离、不重发。一起听的锁屏、独立设备、播放暂停、长期功耗/厂商省电及真机退房清理仍未全面验收。保留45全部功能及R4逻辑，不实施新的时长候选。

唯一工程D:/AnLi；beta/{protection['head']}，暂存为空，全部旧脏改动保留。82份此前冻结APK/源码原字节核对一致，46另存；HEAD不是当前完整产品。未提交、推送、上传或发布。接续先读本入口及AGENTS，只读核对后沿用已确认任务；不得reset/clean/stash、覆盖冻结交付或外推手机/账号授权。
'''
(root / 'HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.46.md').write_text(handoff, encoding='utf-8')

fixes = '''1.0.46 / code67 实现与验证

布局由共享BetaContentInsets负责：音乐壳和二级页面发布当前展开/收起控件高度；旧180/210dp最小值不再盖过实际高度，已由SafeArea消耗的系统底距仅扣一次。紧凑态含大字安全间距，末项和结束提示可滚过控件。MusicListEnd只在权威数据无后续页时表示全部加载，组合页只表示当前页面到底，加载或失败不冒充完成。

MusicLoadingGeometry将追加等待动画放到当前控件上方16dp，首次加载仍居中，下拉刷新仍避开状态栏。主要懒列表cacheExtent为当前一屏高度，提前准备文字/封面；接口页大小保持原批量，不将返回三条误判为完成，也不破坏原图片就绪栅栏和持久缓存。播客导航量取实际字体和缩放后的标签宽度，能完整容纳时单行，否则使用保留七个原路由的下拉。

BetaAppearance.playbackAction独立于收藏爱心色，浅色D70040、深色D92D4D，白色按钮文字。BetaGlassButton新增red选项，继续使用原玻璃shader、折射、点击和高光；其他强调操作不改色。单曲/集合下载和剩余底部SnackBar入口统一调用showMusicNotice，与评论“已发送”使用同一顶部组件。

下载生命周期仍由单个AudioDownloadManager串行管理，Range校验抽到audio_download_resume.dart。暂停使旧attempt失效并中止流，私有.part保留实际冲刷到磁盘的字节；继续重新解析有效地址，带Range/If-Range请求。206区间、实体校验和完整长度通过后才追加；正确416表示暂停已拿到全部字节，可继续发布。206不重复ETag时保留前次校验信息，支持再次暂停/继续。错误200、错位区间、变更实体或丢失临时文件给出重下提示，不发布损坏音频。暂停状态、字节和validator持久化；临时目录被系统清理后不伪造进度恢复。

排队、解析、下载、暂停、失败和已取消任务可左滑删除；进行中的按钮为暂停，暂停后为继续。删除同时撤销旧attempt、停止传输并清理私有临时文件。解析器阻塞时也释放队列，迟到结果不能复活旧任务。系统保存阶段维持原子发布，不允许在中间删除；已完成文件沿用原播放/导出流程。DownloadedTrackSubtitle仅显示当前平台账号、相同Track.id、completed且有已发布URI的记录；未完成及其他账号不显示。

FavoriteTracksSearch独立管理收藏内文本和编辑状态，通过filterFavoriteTracks筛选完整收藏列表，支持歌名/歌手/专辑的组合词，不调用全局搜索，也不限于可见行。保留新建歌单、全收藏总数和播放全部；结果行的上下文队列为当前筛选结果。输入和操作按钮复用PlatformCommentComposer，搜索专用expandOnPress=false，评论默认交互保持；返回先关闭搜索，账号仓库变化清空查询。

足迹新增ListeningFootprintView，三个固定scale视图读取同一账号缓存，但分别保留区间和滚动控制器，避免滑动中把旧页标为新尺度。BetaSwipePages实现与下载页相同的点击/左右滑动同步；箭头仍切各自日期，异步响应继续使用原账号/请求有效性边界。

回归依据见validation JSON内的完整Beta文件清单和每文件来源。首轮三项页尾失败（旧固定170dp断言、两个大字/紧凑尾项差8～10dp）均保留日志并完整文件复跑；断点续传增加已收完后暂停、重复暂停、Range忽略/实体变化和删除阻塞解析器的实际字节验证。旧歌单测试在默认小测试窗口中未构建第二行，明确设置视口后在Stable完整文件5项通过；没有移除断言。新增UI夹具的标题构造、精确缩放图片预热及捕获背景/字体问题已修正，正常非捕获模式和捕获模式均完整通过。主机渲染限定两轮，最终20个不同状态的图片均为本地合成数据，QA字体不打包。

R4同步、原生媒体服务及旧日志策略未变。16项原生检查是相同输入的继承证据，实际46 Android Release另行构建和包内验证；本地测试不等于真实CDN、手机、GPU、账号、业务后台或发布验收。
'''
(root / 'docs/fixes-2026-11-03-v1.0.46.md').write_text(fixes, encoding='utf-8')

install = f'''Mesting Music 1.0.46 / code67 安装与验收

本地正式APK：D:/AnLi/release/Mesting-Music-v1.0.46.apk
体积：{apk['fileSize']}字节
SHA256：{apk['sha256']}
完整源码：D:/AnLi/Mesting-Music-v1.0.46-source.zip
APK/源码汇总校验：D:/AnLi/release/Mesting-Music-v1.0.46-SHA256.txt

显示名Mesting Music，原包名com.mesting.music.beta、原签名，code67高于45/code66，已核对本地升级身份。覆盖安装路径与账号数据保留尚未在46手机实测；无需卸载旧版。正式诊断日志和原生上报试验关闭，更新检查保留。不要用本地交付状态推断已在music后台或GitHub发布。

建议按本次范围验收：滚到底部看结束提示和浮层避让；继续加载时观察动画和下一批图片；播客下拉检查全部入口；核对各“播放全部”红色与下载顶部提示；任务向左滑删除，下载中暂停再继续并检查字节不回零；我的喜欢搜索屏外歌曲、歌手或专辑并核对已下载标记；足迹左右侧滑周/月/年，返回时日期与滚动位置保持。暂停任务重新打开后点继续；若服务器不接受续传或系统已清理暂存，按明确提示重新下载。

本次未自动安装或连接手机。真实CDN/Android保存、键盘、GPU、长列表真实数据和断点重开验收由用户完成。原R4有限双开通过记录保留，锁屏、独立设备和长期功耗未全面验收。历史总时长及十月683分钟仍未解决，不重发旧日志。回退需要保留同签名数据并按平台版本限制操作，本次未进行降级测试。
'''
(root / 'docs/INSTALL-v1.0.46.md').write_text(install, encoding='utf-8')

prefix = f'''**2026-11-03 本地正式交付1.0.46/code67：先读[46交接](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.46.md)及[安装验收](docs/INSTALL-v1.0.46.md)。按确认完成截图八组：末尾提示/动态底距、续载动画与一屏预备、播客单行或下拉、播放全部红色、统一顶部提示、未完成任务左滑删除与暂停/校验续传、完整收藏内搜索与账号已下载标记、足迹周月年侧滑。Beta134文件{passed}通过/{skipped}条件跳过为全量首轮加完整文件修复复跑合并；Stable21、导航54、额外Stable歌单5、正式日志关闭28项（不重复累加）、分析0及20张最终主机渲染通过。原生16项为相同R4输入继承，46实际Android编译、原签名双ARM/定制引擎/7玻璃shader/8SDK及APK8条说明核对通过。82份旧冻结物、签名/锁文件、全部脏改动、beta/b6bcd542与空暂存保留；46 APK/完整源码另存。未手机/ADB/真实账号/业务后台，实际CDN/Android续传、IME/GPU待验收，R4历史双开结果不冒充46验收。历史总时长与十月683分钟未解决，旧日志隔离不重发。未提交推送上传发布；下方为历史时点。**\r\n\r\n'''
baseline = (out / 'AGENTS-before.md').read_bytes()
current = (root / 'AGENTS.md').read_bytes()
expected = prefix.encode('utf-8') + baseline
assert current == baseline or current == expected, 'Preserve any new user instruction edits'
(root / 'AGENTS.md').write_bytes(expected)
print(json.dumps({'version': '1.0.46+67', 'betaPassed': passed, 'betaSkipped': skipped,
                  'finalHostRenderFrames': len(visual_files), 'documentsWritten': 4,
                  'priorAgentsBytesPreserved': True}, indent=2))
