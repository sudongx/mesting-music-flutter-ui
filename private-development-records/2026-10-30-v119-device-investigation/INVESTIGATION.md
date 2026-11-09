# 1.0.19 真机问题取证（尚未实施修复）

2026-10-30，Asia/Shanghai。用户明确授权查看已连接手机；逐题确认手机已安装1.0.19，闪退发生在“我的”上下滑动时。此轮仅诊断，未修改产品源码、未安装/卸载/强停、未清缓存或日志、未访问后台、未发送私信、未读取登录凭据、未提权。新修复方案及1.0.20/code41仍待用户确认。

## 已证实

- ADB serial `eb293ac2`，Xiaomi 23116PN5BC/shennong；包名 com.mesting.music.beta，版本1.0.19/code40，arm64。手机base.apk SHA-256为 `247a7347d12ad00161473e7cfad1e1c2170c2cf1adb3697bf08c4a8992089d59`，与本次交付完全相同。
- 真机“创建的歌单”“收藏的歌单”和歌手榜仍显示占位；“我喜欢”、歌曲、新碟、MV等处存在正常图片。证据 screen-profile-playlists.png、screen-artist-shelf.png。
- 消息列表会话明确显示28条未读，但个人页“我的消息”入口没有徽标。未打开任何聊天会话。证据 screen-messages-list.png、screen-profile-playlists.png。
- 系统退出记录：2026-10-30 10:33:40.246，pid26602，APP CRASH(NATIVE)，status11；不是该条记录上的用户强停或软件更新。完整崩溃在 mesting-native-crashes.txt 的最后一段。
- 栈：线程1.raster，SIGSEGV/SEGV_MAPERR，空指针地址0x1c；栈顶 /vendor/lib64/hw/vulkan.adreno.so，包含 vkCmdBeginRenderPass，然后 libflutter.so。Flutter BuildId 0d216f3f630e1105257f8a3f74e22c9b43c22a51；驱动 BuildId 33f69a5b3c5ea87c251952c3e0b7a7a2。这证明故障发生在原生绘制调用路径，尚未证明具体哪段应用操作或资源生命周期导致驱动故障。
- 当前存活pid29305经有限滑动、切换与胶囊伸缩后保持，系统最新退出记录没有新增。本轮没有宣称稳定性验收通过。
- 手机shell自带curl。对此前公开歌手图片两个510×510缩略图直接从手机请求，均200/image/jpg，分别299640与295999字节。原始响应见 phone-public-image-probe.json。此结果仅证明该手机网络环境下shell可读样本，不等于Flutter实际请求/DTO/缓存/解码已正常。
- 应用自带流畅度诊断已采集并自动结束，屏幕摘要1373帧；build p50=.88ms、p90=2.16ms、p99=4.23ms、超过8.33ms为6帧；raster p50=4.25ms、p90=11.97ms、p99=32.99ms、超过8.33ms为334帧、超过16.67ms为96帧。包含滚动、胶囊伸缩、发现入场与滚动，也包含空闲；完整逐帧JSON尚未取得。不能与另一段旧报告直接计算改善百分比或持续帧率。见 frame-summary-on-device.json 和 screen-diagnostics-after-capture.png。
- dumpsys gfxinfo仅8个Android View帧，标注Skia(OpenGL)，不代表Flutter Surface的实际Vulkan后端或完整Flutter帧率；不要用其37.5%当作本轮Flutter卡顿率。
- 采集后meminfo TOTAL PSS679559KiB、RSS594404KiB、swap PSS211297KiB；Graphics183088KiB。单次快照不能证明内存泄漏或此次崩溃是OOM；系统记录原生SIGSEGV且PSS0缺失。

## 仍待定位及可修的边界

1. 图片：实际账户DTO字段、归一化URL、请求结果、磁盘缓存命中、Flutter解码需要在应用中加脱敏观测才能确定哪个环节失效。当前缓存只在resolve返回null时走网络回退；Image.file解码错误只作异步invalidate和有界重试，耗尽时可能永久占位，是需专项验证的缺口，不能直接断言这就是全部真机根因。不得再次只靠主机匿名缩略图返回200宣称修复完成。
2. 未读：入口在net ease_unread.dart只聚合counts()的固定字段；虽然拉了conversations()，没有把已确认存在的会话未读汇入入口。counts请求失败被吞掉，初值{}仍显示0；实际响应字段别名/空值也可能影响。消息页自身能显示28，证明入口与列表存在不一致。后续需共享统一状态，处理服务端总数、会话未读、阅读游标和账号代次；未知/失败不能伪装为0。尚未取得实际账户counts原始响应，不要编造是哪一个字段名。
3. GPU/性能：需按此驱动栈追踪玻璃离屏pass、形变时matte纹理重建与释放、阴影和底部布局重绘。保持现有玻璃质量和正常交互动效；若比较后端，应先做隔离测试包及真实同路径对比，不能把关闭效果当作已经修复。日常包不使用默认flutter drive；原生性能驱动只用隔离.beta.benchmark并--keep-app-running。

## 操作现场与后续约束

- 手机目前停留“流畅度诊断”页，采集已结束；当前音乐继续播放。未点签到、收藏、发送、账号切换、更新或安装按钮。
- Android cmd clipboard没有shell读取实现；uiautomator dump /dev/tty仅有结果提示，没有XML内容。不要把那个文件误当可用UI树，也不应为读取报告提权。
- 匿名公开用户/歌单搜索未匹配到本人，返回了无关结果；这些结果不能作为本人UID、歌单、DTO证据。
- 1.0.19冻结APK与源码ZIP复核保持原摘要：APK见上；源码 `aa11d707e34e40203ba537b6d8eef2533b6f438cf064fab2b3efa8a65140a54d`。本轮产品源码未改，工作区仍保留已完成但未提交的1.0.19改动。
- 原始系统日志与截图存放当前被Git忽略的本地目录，不打入源码/发布包，不公开账号、消息正文或凭据。
- 建议下一步方案：脱敏观测并修复图片完整链路；统一真实未读汇总；针对原生GPU栈做隔离验证并优化绘制。构建为新1.0.20/code41、保留1.0.19，不重复同code。按AGENTS.md等用户确认方案后再实施。
