"""Write the final handoff only after actual host/build/APK readback succeeds."""
from pathlib import Path
import hashlib,json
ROOT=Path('D:/AnLi'); OUT=ROOT/'.codex-artifacts/2026-11-04-release149'
def read(path): return json.loads(path.read_text('utf-8'))
checks=read(OUT/'host-check-summary.json')
apk=read(ROOT/'release/Mesting-Music-v1.0.49-verification.json')
notes=read(OUT/'local-apk-notes-verification.json')
before=read(OUT/'preservation-before.json')
assert checks['analysisPassed'] and checks['finalHostFrames']>=10
assert notes['notesCount']==8 and notes['productionReader']
for item in before['files']:
    if item['path'].startswith(('android/','test/native/')):
        assert hashlib.sha256((ROOT/item['path']).read_bytes()).hexdigest()==item['sha256']
b=checks['beta-complete.jsonl']; s=checks['stable-complete.jsonl']; n=checks['search-back-player.jsonl']
assert all(c['completeAndSuccessful'] for c in [b,s,n])
metrics=f"Beta {b['files']}文件{b['counts']['success']}通过/{b['counts'].get('skipped',0)}条件跳过，Stable {s['files']}文件{s['counts']['success']}，独立导航{n['counts']['success']}，分析0，{checks['finalHostFrames']}张主机图"
validation={'version':'1.0.49','androidVersionCode':70,'clientDate':'2026-11-04',
    'beta':b,'stable':s,'independentNavigation':n,'analysisIssues':0,
    'finalHostFrames':checks['finalHostFrames'],'visualRounds':checks['visualRounds'],
    'hostKeyboardInsetsSimulated':True,'phoneImeOrGpuAcceptance':False,
    'r4NativeTestsInherited':16,'nativeTestsRerun':False,'nativeInputsUnchanged':True,
    'actualAndroidCompilationPerformed':True,'originalCertificate':True,'dualArm':True,
    'customEngineAndGlassPreserved':True,'packagedReleaseNotes':notes,'apkSha256':apk['sha256'],
    'previousFrozenArtifactsRetained':len(before['frozen']),
    'historicalTotalDurationResolved':False,'october683MinutesRecovered':False,'oldLogsReplayed':False,
    'phoneAccess':False,'realAccountAccess':False,'backendAccess':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(ROOT/'docs/validation-2026-11-04-v1.0.49.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')
report=f'''# Mesting Music 1.0.49 / code70 实现与验证

本轮为用户确认后的五项方案本地交付。{metrics}。Beta按完整首轮及必要整文件成功复跑合并，每个文件仅计一次；完整日志和每文件来源在私有host-check-summary中保留。

## 收藏搜索、分类与消息

收藏搜索移除带背景的加载面板，使用独立菊花动画；原输入框、提交、物理键盘边界与完整收藏查询保持。分类首次进入只读缓存，不再使账号全部浏览查询失效；刷新保留旧列表直至替代结果成功。分类/歌单的封面重试在显式live缓存作用域重新读取元数据，按真实图片内容身份排除失效小图/大图别名，必要时读取歌单内真实专辑封面。最多3个元数据请求，分类缓存与失败历史均有96项上限，图片自动恢复最多3次。初次元数据等待纳入统一首屏就绪，已显示的单张重试隔离于整页展示门，不重新遮住列表。

消息页按当前Auth用户UID建立保留值的family读取层。同账号刷新会话和未读时继续显示旧值；切换账号使用新key，避免带入上个账号的会话。聊天和普通页面使用live、不截图的页面过渡，返回时可见保留的父页。

## 双平台歌曲列表工具

SongListMemory只保存歌曲ID、标题与时间，使用平台ownerId及逻辑列表键隔离，SharedPreferences串行写入，上限256个列表，损坏的可选记录不影响页面打开。不保存凭证/音频地址，不改队列、报告或音频服务。SongListTools管理一个列表的按钮、定位与短暂高亮；SongListEntry只登记实际行/滚动位置与当前完整成员快照。原分页仍由原控制器管理，点击提示才额外请求缺页；失败或账号/页面失效停止后续请求，记录保留。补页循环采用60秒预算（已发出的单页遵循原网络超时）和14次实际行高估算跳转，最后ensureVisible精确定位，高亮2秒；无法找到时明确提示，不自动播放。

喜欢、云/本地歌单、专辑、歌手、每日推荐/心动、搜索歌曲/歌词、历史、本地音乐、下载完成列表、足迹今日歌曲与待播队列接入共用工具。支持回顶部、关闭本次提示，提示避让音乐底栏/播放胶囊，键盘显示时隐藏。搜索和分类带查询/实体身份；没有owner或逻辑列表的独立组件保持原行为。列表排序或刷新替换当前结构section的成员快照，避免拿旧索引定位。重启后按原账号和原列表继续读取记录。空列表替换或身份改变时解绑旧滚动位置；新增空列表与恢复条目的回归，避免回顶部操作访问旧位置。

官版参考仅为本地酷狗Lite 5.2.9/code11590的classes12静态证据，非截图安装版本的运行时验收。PlaylistRecordManager按recordId保存mixId/time，Delegate恢复末播位置、控制提示和点击回调；本实现额外按用户确认隔离账号、定位但不播放。原APK、聚焦DEX、REA结果与录屏45帧只在私有review目录保存，不进入交付源码。

## 页面反向路径

普通Beta路由及Material导入页保留右侧进出，实际不截图并保留父页状态。原单层交接过渡的正反阈值改为同一动画坐标，避免退场时错到另一时段。播放器黑胶飞入、搜索展开、头像淡入缩放、资料/收藏页与底部弹窗保留各自入口形式，退场沿自己的路径反向；Tab状态及快速改向保持。动态玻璃、引擎及主题组件没有替换为静态效果。

## 验证和边界

{metrics}。两项既有条件跳过为Windows SQLite云快照夹具与可选AirPods原图。两轮布局检查后仅追加滚动位置生命周期保护，最终6整文件再次验证，布局样式未再修改。主机键盘模拟/软件像素不证明真实Android IME、GPU、流畅度、CDN或账号行为。原生16项继承R4相同源码及测试输入，本轮不重跑；本轮另做实际Android编译、原签名双ARM、定制引擎、7shader/8SDK、APK八条说明及Range生产读取核验。

88份旧冻结物、原签名、锁、原脏工作区、beta/b6bcd542和空暂存保留。仅本地交付，未手机/ADB/真实账号/业务后台、未提交推送上传发布。历史总时长及十月683分10秒未解决，旧日志不重发；R4历史双开结果不能作为本版设备验收。
'''
(ROOT/'docs/fixes-2026-11-04-v1.0.49.md').write_text(report,'utf-8')
install=f'''# Mesting Music 1.0.49 / code70 安装验收

APK：`D:/AnLi/release/Mesting-Music-v1.0.49.apk`，SHA256：`{apk['sha256']}`。

完整源码：`D:/AnLi/Mesting-Music-v1.0.49-source.zip`。摘要见release同版SHA256.txt。包名com.mesting.music.beta，正式名称Mesting Music；原签名升级身份已经APK核验，本轮未实际覆盖安装。请保留数据直接覆盖安装，无需卸载。

1. 双平台喜欢页打开搜索：加载只出现菊花，输入及提交在键盘上方；检查返回、重开输入法与大字。
2. 打开歌单分类，检查真实代表封面；进入分类后返回，确认列表不闪动；封面失败重试，已显示条目应保留。
3. 聊天返回我的消息，列表应继续显示并原位刷新未读；切换账号不显示前一账号会话。
4. 在喜欢、歌单、专辑、歌手、搜索等长列表点播一首，离开并重启后回到同列表，检查上次点播提示。点击提示只定位/高亮、不开始播放。位于后续页的歌需要等待补页；关闭提示仅本次隐藏。账号与列表分别记忆。
5. 滚动一屏后回顶部按钮应可用；检查窄屏、大字、播放胶囊/底栏和键盘避让，以及本地音乐/下载/足迹/待播队列。
6. 检查消息、聊天、分类、资料编辑、收藏、播放器、搜索及底部弹窗：退场沿各自入口反向返回，原页面内容、滚动和草稿应保留。
7. 48实际音源音质、真实封面/心动/完整播放全部，47长列表/排序，46下载CDN续传与一起听剩余设备范围继续由真实设备验收。

{metrics}。原生相同输入16项继承；实际编译与APK核验已完成。未手机/真实账号/后台，真机IME/GPU/CDN仍待验收；历史总时长及十月683分钟未解决，旧日志未重发。未提交推送发布。
'''
(ROOT/'docs/INSTALL-v1.0.49.md').write_text(install,'utf-8')
handoff=f'''# Mesting Music 1.0.49 / code70 当前交接

用户确认后完成收藏搜索菊花、分类代表封面/重试和保留列表、聊天返回会话保留、双平台歌曲列表回顶部及账号/列表持久化上次点播定位、各入口反向退出。先读[实现](docs/fixes-2026-11-04-v1.0.49.md)、[安装](docs/INSTALL-v1.0.49.md)及[验证](docs/validation-2026-11-04-v1.0.49.json)。

{metrics}。原生16项仅相同R4输入继承，本轮实际Android原签名双ARM/引擎/7shader/8SDK及APK说明读取另验。APK在release同版路径，完整源码根目录同版ZIP，校验release同版SHA256.txt。

当前唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存空，88份旧冻结物、全部原脏改动、签名和锁保留。私有证据在.codex-artifacts/2026-11-04-release149及release149-review。官版仅静态聚焦DEX，不冒充运行时。前期失败/中断日志保留；没有仍待续跑的本轮产品步骤。

未手机/ADB/真实账号/后台、提交推送上传发布，真实设备覆盖安装/IME/GPU/CDN/账号和一起听完整范围待验收。历史总时长及十月683分10秒仍未解决，旧日志不重发，R4同机历史结果不作为49设备验收。后续先只读核对再按用户新指令行动，不外推设备授权。
'''
(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.49.md').write_text(handoff,'utf-8')
agents=ROOT/'AGENTS.md'; original=agents.read_bytes()
assert not original.startswith('**2026-11-04 本地正式交付1.0.49'.encode())
prefix=f'**2026-11-04 本地正式交付1.0.49/code70：先读[49交接](HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.49.md)、[安装](docs/INSTALL-v1.0.49.md)及[实现](docs/fixes-2026-11-04-v1.0.49.md)。按确认完成收藏搜索菊花、分类真实封面/保留内容、聊天返回会话保留、双平台歌曲列表回顶部及按账号/列表重启保留的上次点播定位高亮、各入口反向退出。{metrics}；R4原生16项相同输入继承，实际本版Android编译/原签名双ARM/7shader/8SDK及APK八条说明另验。88份旧冻结物、签名/锁、全部原脏改动、beta/b6bcd542及空暂存保留，新APK/完整源码另存。未手机/ADB/真实账号/后台，实际CDN/封面/IME/GPU及账号行为待验收。历史总时长及十月683分钟未解决，旧日志不重发。未提交推送上传发布；下方为历史时点，后续先只读核对。**\n\n'
agents.write_bytes(prefix.encode()+original)
print(metrics)
