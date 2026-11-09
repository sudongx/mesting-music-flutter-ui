# 酷狗20.8.6听歌上报调查与本轮独立读回

本文件是本地主机静态调查记录，不是手机、账号或官方入账验收。

## 工件与范围

- 原包：`private/kugou-20.8.6.apk`，com.kugou.android/20.8.6/code20869。
- SHA256：`d434f15fef375cb88ca18a9bc1412dd8df8e11cb47ec4604ce67114a35f3168a`。
- 本子任务新增聚焦载体：classes10-focus.apk（ea0b02936414b71478f8906ae187f5a60dd9f858a98162892a1f8a5dd5436f1a）、classes17-focus.apk（3c4625fe23c7750d7605bc14f2546a74bf0edb9ee3996b1db916690637e48a19）。它们仅包含原manifest与选定原dex改名classes.dex，不是安装包，未执行。
- 没有手机/ADB、真实音乐账号或业务后台访问，没有改签名、SDK或依赖锁，没有Flutter测试/分析/构建、Git提交/推送/发布。

## 旧聚合协议的已见事实

1. `ListenSongDataModel.f`向`gateway.kugou.com/lstatistic/v1/listening_statistic/result/upload`发送`data_type,period,listen_time,song_num,listen_day,song_sort_list,singer_sort_list,style_sort_list,week_day_listen_time`。
2. `ListenSongDataModel.g`把Map<Long,Long>序列化成JSON对象，键为ID的十进制字符串，并非对象数组。
3. query对应`.../result/query`，带`data_type,period,need_self_data`和`mid_list:[{mid,fetch_time}]`。请求签名由ParamGenerator原生合同生成，不能直接当成H5 2919签名。
4. `zs.a`只同步1、2两种日期维度；`ec6.a.b(2,offset)`为年月，其余分支以周相关工具计算年+两位周期。它不是新版lstatistics2的0日/1周/2月/3年通用写入口。
5. `zs.a.D`从当前账户/当前MID的数据库读取累计快照。成功后调用`sf5.a.B`，最终SQL仅把`need_report`改为0，未删除累计数据。
6. `sf5.a.z`合并自己MID的数据时，普通数据取max，`data_type`字段以外的数据库分类`d==5`（listen_day）按位OR。`listen_day`因此不是普通天数。
7. `zs.a.k`按返回MID隔离数据；自己MID以max/OR合并，其余MID单独保存；服务开关依赖`KGConfigKeys.ew`远程配置。

完整关键REA投影和父Evidence ID见`reporting-native-protocol-evidence.json`。另query父Evidence：`ev_a0e03c8195e582b650b02a9d54bbf844cdcc37a7572f8f1754d6365ae02f7c76`；map序列化父Evidence：`ev_ac95e78ba8ddcfeb0c7d43a151d5059012d8ff560e65bf1e66aa47dd428336d3`。REA会话留待主代理统一导出，不由本子任务reset/close。

## 尚不能由现有证据推出的事项

- 该周/月旧快照服务是否仍承载截图中20.8.6新版lstatistics2日/周/月/年统计。
- 从真实播放事件到旧聚合listen_time/各计数的完整有效条件与单位。
- Lite3116授权能否用于标准版原生写通道。
- 旧周/月聚合与新版统计之间的归因仍未核实；这与下面已单独核实并接入的标准v4等级写通道分开。

因此没有把本机增量填入旧聚合、没有伪造历史、没有重发已接收或结果不明的旧日志。原有CSCC/历史/Lite链保持原协议；标准授权后新增测量走单独v4，不能仅由写回执声称新官方统计已计入。

## 已实现的独立官方日读回

- 新增`listening_daily_readback.dart`，仅接收官方日统计服务返回的秒数、读取时间和可用的官方总时长。
- 独立保存当前账号/日期的首个官方基线与最新官方快照。`observedIncreaseSeconds`只是两次官方读数的变化，不能归因于本App、不能用来把某条上传改为verified。
- 失败保留旧官方值，仅保存分类失败，不写原始异常/凭据；初次失败不以0造基线；账号epoch变化后拒收迟到回执。
- 与CSCC/历史/等级链并行读取，每两分钟节流；显式`verifyPending`强制只读刷新，已有读取会合并，不触发任何补发。
- 跨日只重读曾经观测过的昨天，检查官方延迟结算；今天独立建基线，不搬用昨天的秒数。
- 上传摘要查询排除`official_day_readback`，避免把官方查询次数算成上报成功。
- 向统计UI提供`kugouOfficialDailySyncStatusProvider`和含`ownerId`的`OfficialListeningDayStatus`，供UI二次核对账号。

新测试文件`test/release_152_official_listening_readback_test.dart`含9项针对性测试；本子任务未执行，交主代理统一format/测试/分析。现有四个修改文件已预先复制到`.codex-artifacts/2026-11-04-release152/reporting-backup`并SHA256核对。

## 标准v4正常新播放上报

1. 标准授权是同一UID的独立`kugouStandardToken`，主Lite登录继续保留。只有显式取得标准凭据时才使用1005/20869，不能把旧Lite token改标。
2. 实际20.8.6`easytrace.task.j0.A`读取当前UID的成功等级缓存后，对真实`j`毫秒执行`localMillis += j`、`diff_sec += j/1000`，并保存。`j`在原生最多一天，负值丢弃。
3. `protocol.k.d`响应解析设置`d_sec=服务器值`、`diff_sec=0`、`localMillis+=d_sec*1000`。新响应对象的localMillis从0开始，所以这一步建立服务器毫秒基线。
4. `UserGradeInfoHelper.r`计算响应`diff_sec=max(旧localMillis/1000-新d_sec,0)`；内部h/j保留`max(旧localMillis,新服务器localMillis)`。它支持正常客户端重试，但本轮对模糊结果采用更严格的仅读回、不再次发送。
5. 本轮冻结`localMillis=单独v4服务器基线*1000+当前新测量毫秒`、`diffSeconds=新测量整秒`。请求d_sec因此是累计目标，不是Lite旧协议的基线字段。子秒只在未发送余数中保留，不复制到旧grade。
6. 新增`KugouV4GradeRepository`固定HTTPS v4主机/路径，读取零计数，报告只接受正新增量。实证加密/签名模块由另一子任务提供。请求/响应前后校验主凭据、标准凭据、平台和UID，检查响应UID与全部显式错误码，不输出原始异常。
7. `grade_v4`独立日志与协议标记只在当前标准授权新段生成；worker只认本进程注册的测量段。旧grade从不迁移，重启旧queued标准测量中断，不重新发送。claim先入库，再发一次；accepted/unknown/dispatched都只读回。官方v4秒数到达目标才记等级读回verified，日统计仍独立观察。
8. 一条模糊v4未读回时阻止后续重叠上报，不把模糊差额加进新请求。账号重授权后旧请求继续保留dispatched/unknown，不归属新会话。已解析的显式业务拒绝单独记rejected、永不重发，不阻挡后来真实新播放；传输超时和坏回复仍是unknown。

完整计量与清零Evidence见`reporting-v4-counter-evidence.json`、`reporting-v4-native-reset-evidence.json`。新增`test/release_152_standard_grade_reporting_test.dart`10项：累计目标/新diff区分、旧Lite隔离、重启不发、模糊结果不重发、只读不写、显式拒绝隔离、Lite拒用、同UID重授权边界、实际请求包、响应UID。已Dart format，执行由主代理统一完成。此处仍不是实际手机/账号/官版跨日入账验收。
