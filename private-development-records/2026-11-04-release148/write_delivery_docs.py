from pathlib import Path
import hashlib,json,subprocess
ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-11-04-release148'
checks=json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
apk=json.loads((ROOT/'release/Mesting-Music-v1.0.48-verification.json').read_text('utf-8'))
notes=json.loads((OUT/'local-apk-notes-verification.json').read_text('utf-8'))
assert checks['analysisPassed'] and checks['finalHostFrames']>=16
assert all(checks[name]['completeAndSuccessful'] for name in ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
assert notes['notesCount']==8 and notes['productionReader']
before=json.loads((OUT/'preservation-before.json').read_text('utf-8'))
native=[item for item in before['files'] if item['path'].startswith('android/') or item['path'].startswith('test/native/')]
for item in native:
    assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256'],item['path']
beta=checks['beta-complete.jsonl']; stable=checks['stable-complete.jsonl']; nav=checks['search-back-player.jsonl']
beta_count=beta['counts']['success']; skipped=beta['counts'].get('skipped',0)
stable_count=stable['counts']['success'];nav_count=nav['counts']['success'];frames=checks['finalHostFrames']
validation={
    'version':'1.0.48','androidVersionCode':69,'clientDate':'2026-11-04',
    'beta':{'files':beta['files'],'passed':beta_count,'skipped':skipped,'singleCompleteSuccessfulInvocation':False,
      'completeInitialRunPlusSuccessfulCompleteFileReruns':True},
    'stable':{'files':stable['files'],'passed':stable_count},
    'navigation':{'files':nav['files'],'passed':nav_count,'includedInBetaTotal':False},
    'analysisIssues':0,'finalHostFrames':frames,'visualRounds':checks['visualRounds'],
    'hostKeyboardInsetsSimulated':True,'physicalImeOrGpuAcceptance':False,
    'nativeSourceAndTestsUnchangedFromV147':True,'r4NativeTestsInherited':16,'nativeTestsRerun':False,
    'actualAndroidCompilationPerformed':True,'originalCertificate':True,'dualArm':True,
    'customEngineAndGlassPreserved':True,'packagedReleaseNotesVerified':notes,
    'apkSha256':apk['sha256'],'previousFrozenArtifactsRetained':86,
    'historicalTotalDurationResolved':False,'october683MinutesRecovered':False,'oldLogsReplayed':False,
    'phoneAccess':False,'realAccountAccess':False,'backendAccess':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
    'pendingAcceptance':['原签名覆盖安装与资料保存归属','真实输入法/窄屏/大字/GPU',
      '真实网易云歌单封面和心动模式','真实歌曲、音源与账号音质能力、CDN地址',
      '下载CDN续传及47长列表/收藏排序/足迹','一起听锁屏/独立设备/播放暂停/长期功耗/真机退房'],
}
(ROOT/'docs/validation-2026-11-04-v1.0.48.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')
report=f'''# Mesting Music 1.0.48 / code69 修复与验证

本轮按八张截图及三次明确选择实施：音质只列当前歌曲、实际音源和账号可切换的档位；歌手页播放当前列表完整集合；分类名称层也显示真实代表封面。仅本地交付。

## 账号资料与收藏搜索

- 资料页的同步说明和读取错误使用进入编辑时绑定的账号平台。原账号/凭证失效拦截及保存仓库分派继续保留，未将文案修改当作真实资料写入验收。
- `KeyboardOverlayLayout` 使用物理窗口、当前容器坐标和键盘边界计算剩余抬升量，适配全高玻璃外壳、已缩小的Scaffold、SafeArea和不同键盘高度。收藏输入与提交仍使用原玻璃组件，保留查询与全收藏搜索。
- 收藏搜索后页沿真实offset追加，保留前页结果、完整集合语义和账号失效保护。

## 歌手及同类详情页

- 歌手图片与简要资料/播放全部组成紧凑头部；收藏/关注、更多、评论、下载的共用操作由图标上下排列调整为紧凑同行，完整说明仍可通过tooltip/semantics读取。
- 歌曲、专辑、MV、相似歌手正常显示一行；窄屏和大字显示两列，保留四个目的地。
- 心动模式、歌手详情及同类歌曲列表增加红色播放全部。显式点击才补齐当前列表，逐页去重，完成后交给已有`playBetaSelection`。加载失败、重复页或账号变化不交付一个冒充完整的队列。原待播保留/替换选择继续有效。
- 用户追加确认下载放到播放全部右侧，正常宽度同行居中，窄屏/大字允许换行；最终主机图与坐标断言覆盖这一摆放。

## 真实封面与心动模式

- `netease_song_metadata.dart` 统一处理歌曲包装层、别名和真实图片字段，空/数字/无效主字段不会挡住后续有效URL。
- 心动模式稀疏资料按歌曲ID补取，200个ID一批，按原顺序关联，不以响应顺序或外层推荐ID配图。已有完整资料不重复补取；种子只读喜欢歌单的第一首。
- 分类封面由对应分类真实歌单取得；随可见行按需加载，账号内缓存，上限96项，同时最多3个元数据请求。
- 图片失败后可重新读取同一歌单详情；原封面不可用时尝试该歌单内真实专辑封面。分类恢复复用并发槽，避免嵌套等待。自动恢复有界，手动重试保留；没有虚构封面或用无关图片冒充真实结果。
- 没有可用元数据恢复接口的歌手/播客等空封面沿用已有“无封面”终态，不会持续等待不存在的请求；其正常图片重试仍由原图片组件处理。

## 音质与实际播放来源

- `AudioOrigin` 将实际适配器/录音ID与原歌曲身份分开保存。网易云收藏、歌词、听歌上报和一起听仍使用原网易云歌曲ID；音质菜单使用实际播放来源。
- 移除本地SVIP直接列出预设尝试档位的分支。官方音源从真实资源字段取候选，补源固定当前适配器及同一录音，再校验当前账号返回的完整文件和实际档位；同时最多2个探测，不触发播放或听歌上报。
- 试听、降档、错录音、跨音源和不可用档位不加入列表。旧快照未记录补源录音ID时仅保守保留已知当前档位；新的播放解析会补充实际来源。界面提供重新检测。
- 音质选定后由现有音频owner安装已验证的源，继续使用进度、播放/暂停、队列、模式和旧回调失效保护。失败保留原流；选择不再隐式回到自动补源的其他平台。
- 会员、版权和CDN可变，真实账号可用范围需要安装验收。主机合成/Mock响应不替代真实平台证明。

## 最终主机与实际构建

Beta {beta['files']}整文件{beta_count}项通过/{skipped}项条件跳过；Stable {stable['files']}文件{stable_count}项；独立导航整文件{nav_count}项；分析0问题；{frames}张最终主机图。Beta为完整成功首轮加最终源相关整文件成功复跑合并，每文件只计一次；前期夹具/导航失败及中断日志私有保留，不累加通过项。

两项既有条件跳过是旧Windows SQLite云快照夹具和可选AirPods原图。主机模拟键盘/软件渲染不证明Android输入法、GPU、帧率或物理触摸。原生16项沿用R4相同源码与测试输入，本轮未重跑；本轮实际Android编译、原签名双ARM、定制引擎、7份玻璃shader、8份SDK库及APK内八条更新说明另行核验。

## 保留事项

86份原冻结APK/源码、签名、锁和既有脏工作区保留。beta/b6bcd542及空暂存不变，未提交、推送、上传或发布。47及本版真机/账号、实际CDN、IME/GPU仍待验收；历史总听歌时长和十月683分10秒仍未解决，旧日志隔离不重发。R4同机候选历史切歌结果不作为48手机验收。
'''
(ROOT/'docs/fixes-2026-11-04-v1.0.48.md').write_text(report,'utf-8')
install=f'''# Mesting Music 1.0.48 / code69 安装与验收

本地原签名正式APK：`D:/AnLi/release/Mesting-Music-v1.0.48.apk`

SHA256：`{apk['sha256']}`

完整源码：`D:/AnLi/Mesting-Music-v1.0.48-source.zip`；校验：`release/Mesting-Music-v1.0.48-SHA256.txt`。

包名`com.mesting.music.beta`，code69；原签名升级身份已在APK核验。保留旧版数据直接覆盖安装，无需卸载。本轮未安装手机。

1. 分别进入网易云/酷狗资料编辑，核对同步平台文字；切换账号后旧编辑页应失效。资料实际保存由用户按需操作。
2. 我的喜欢打开搜索并输入，输入框和提交按钮应在键盘上方；检查关闭/重开键盘、提交、返回、大字和搜索收藏末尾。
3. 歌手榜进入歌手，检查紧凑头部和四个入口；窄屏/大字允许两列。检查专辑/MV/歌单的共用操作保持完整。
4. 分类名称层应显示真实代表封面；进入分类检查歌单封面，失败时点击重试，确认补取后仍属于该分类/歌单。
5. 心动模式检查歌名、歌手及封面；点击红色播放全部检查完整队列。歌手详情也应补齐当前列表后再播放，保留待播处理方式。
6. 网易云歌曲使用酷狗等补源后打开音质，应显示实际来源及已确认档位。首次需核验，支持重新检测；检查切换后的实际音质、进度、暂停状态和队列，未成功时保留原播放。
7. 继续检查47长列表/收藏时间排序/足迹、46暂停/删除/实际CDN续传，以及一起听剩余设备范围。

主机最终：Beta {beta['files']}文件{beta_count}通过/{skipped}条件跳过，Stable {stable_count}，独立导航{nav_count}，分析0，{frames}帧。新功能主机夹具与Android编译已核验，真实账号/IME/GPU/CDN待验收。历史总时长和十月683分钟未解决，旧日志未重发。未提交推送或上传发布。

实现和边界见[修复说明](fixes-2026-11-04-v1.0.48.md)。
'''
(ROOT/'docs/INSTALL-v1.0.48.md').write_text(install,'utf-8')
handoff=f'''# Mesting Music 1.0.48 / code69 当前交接

用户已确认八图修复方案及1.0.48/code69原签名本地交付。完成资料平台标注、收藏键盘避让、歌手/共用操作紧凑排版、真实分类代表封面及失败元数据恢复、心动稀疏资料、心动和歌手完整播放全部，以及基于实际音源/歌曲/账号的严格音质列表与源替换。

先读[实现与验证](docs/fixes-2026-11-04-v1.0.48.md)、[安装验收](docs/INSTALL-v1.0.48.md)及[机器验证](docs/validation-2026-11-04-v1.0.48.json)。APK在`release/Mesting-Music-v1.0.48.apk`，完整源码在根目录同版ZIP，摘要在release同版SHA256资料。

最终Beta {beta['files']}文件{beta_count}通过/{skipped}条件跳过，Stable {stable_count}、独立导航{nav_count}、分析0及{frames}张主机图。两项既有跳过、模拟键盘/主机软件渲染和R4原生16项继承边界均见说明。本轮实际原签名双ARM编译、原引擎、7shader/8SDK与APK八条更新说明核验通过。

真实账号资料保存/封面/心动/音质及CDN、IME/GPU、覆盖安装尚待验收。分类封面最多3个并发、96缓存；音质最多2个探测，固定实际适配器和录音。旧补源快照没有实际录音ID时不伪造可切换能力；当前已验证档位仍保留，下一次解析会填实际来源。网易云原始歌曲ID继续服务收藏/报告，音源身份不能替代它。

历史总时长及十月683分钟仍未解决；旧日志隔离不重发。R4历史同机候选结果不冒充本版验收，锁屏/独立设备/播放暂停/长期功耗/真机退房仍待完整验收。未访问手机/ADB/真实账号/业务后台。

唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52；暂存空，旧脏改动及86份旧冻结物、签名/锁保留，新APK和完整源码另存。未提交推送上传发布；先只读核对再按后续指令行动。

私有最终日志在`.codex-artifacts/2026-11-04-release148/`；前期测试夹具失败/中断日志保留。没有待续跑的产品修复或本轮授权的设备操作。
'''
(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.48.md').write_text(handoff,'utf-8')
agents=ROOT/'AGENTS.md'; old_agents_bytes=agents.read_bytes()
assert not old_agents_bytes.startswith('**2026-11-04 本地正式交付1.0.48'.encode('utf-8'))
prefix=f'''**2026-11-04 本地正式交付1.0.48/code69：先读[48交接](HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.48.md)、[安装验收](docs/INSTALL-v1.0.48.md)及[实现](docs/fixes-2026-11-04-v1.0.48.md)。按确认完成资料平台标注、收藏键盘避让、歌手/共用操作紧凑排版、真实分类代表封面与元数据恢复、心动稀疏资料及完整播放全部、实际音源/歌曲/账号严格音质。Beta{beta['files']}文件{beta_count}通过/{skipped}条件跳过、Stable{stable_count}、独立导航{nav_count}、分析0和{frames}张主机图；原生16为相同R4输入继承，实际本版Android编译/原签名双ARM/7shader/8SDK及APK八条说明另核验。86份旧冻结物、签名/锁、全部脏改动、beta/b6bcd542及空暂存保留，新APK/完整源码另存。未手机/ADB/真实账号/后台；真实封面/音质/CDN/IME/GPU待验收。历史总时长和十月683分钟仍未解决，旧日志不重发，R4历史实测不冒充48验收。未提交推送上传发布。下方均为历史时点，新会话先只读核对后等待。**

'''
agents.write_bytes(prefix.encode('utf-8')+old_agents_bytes)
print('Prepared 1.0.48 implementation, installation, validation, handoff and AGENTS entry from actual final checks.')
