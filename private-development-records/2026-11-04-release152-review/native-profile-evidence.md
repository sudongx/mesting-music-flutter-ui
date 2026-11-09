# 1.0.52 酷狗统计及等级原生实现证据

本文件记录本轮自行实现使用的官方合同与验证边界。`private` 中的 APK/官方 H5 原文件仅作本机调查证据，不应打入产品或正式源码交付。未读取手机、ADB 或真实音乐账号。

## 已核实来源

- 20.8.6/code20869 标准 APK 的默认配置：`private/v4-config-decoded.txt`（主代理取得）。`listen.static.vip.grade_h5_url_v3` 指向 `https://m.kugou.com/ssr/listen-level/home?ssr_header_param=266431&isHideTitleBar=1&outerFramework=1`。
- 该官方入口本轮公开响应保留于 `private/new-level-js/index.html`，实际脚本在同目录；`__NEXT_DATA__.props.pageProps.normalConfig` 给出等级规则 `https://activity.kugou.com/voo/v-bf6de1d1/index.html`、榜单规则 `https://activity.kugou.com/voo/v-973b9798/index.html`。
- 官方听歌报告入口为 `https://m.kugou.com/ssr/listen-report/home`；脚本在 `private/report-js`，原 URL 记录由主代理保留在同目录 `sources.json`。

## 听歌统计

- `report-js/7724-f682cc91f1537336.js:2333-2382`：`lstatistics2.kugou.com/v1/listen_statistics`，日/周/月维度与独立年度服务；`8505-456a38673d253bcd.js:3657-3670` 明确 `date_type`、`is_real_time`、`date`、`is_entrance`。实时查询用 `date=0`，历史用 `YYYYMMDD`。
- `7724:4611-4620`：`listen_duration` 按秒转换分钟。`8505:4704-4708`：`grade_info.duration` 按分钟除60得到累计小时。
- `2198-e3aed1a58125bf05.js:992-1106`：日趋势为 `clocks[index].listen_duration`，周趋势为 `dates[index].listen_duration`，月趋势为 `months`，月点用其 `month=YYYYMM01` 关联。代码不把月视图的 `dates` 假定为逐日趋势。
- `2198:8610-8620`：日/周/月歌曲数量用 `listen_total`，年度用转换后的 `total_songs`。
- `2198:10172-10255`：歌曲榜 `rank_song` 内嵌 `song_info.name/singer_name/cover/mixsongid` 与 `count`。`2198:9212-9300`：歌手榜内嵌 `singer_info.name/avatar`、播放次数 `total`。
- `7724:2355-2376`：年度请求真实 `field_list`，`7724:5790-5799`：只核实2019至2025的路径；`8505:3675-3689`：2024/2025传 `biz=v2024/v2025`。
- `9465-3f8705eb36fdf0cd.js:747-1028`：年度字段按年不同；2025 `year_data.play_all.total_play_duration` 为秒，2024 `year_data.year_all.play_min` 为分钟，2023 `year_data.play_all.play_time` 为秒，2022/2021 `play_all.play_time` 为分钟，2020/2019 `play_times` 为分钟。`2198:64-87` 再次证明2024及以后原展示单位为分钟，之前走秒格式化。
- `7724:5835-5880`：年度认证模式为 `userid+kugouid+clienttoken`，普通报告模式为 `userid+token`。未将2026年冒用2025字段，年视图明确最新已核实可读年份2025。

## 新版等级、乐龄、三榜与操作

- `new-level-js/106-73e356e01fd5a8b4.js:55-210`：GET `songplay.kugou.com/v1/listen_level/rank` 与 `/v1/listen_level/my_info`。
- `798-262c32da67b71052.js:8025-8122`：`my_info.data` 使用 `{timestamp,user,grade,medal,vip}`。`798:1168-1225`：`grade.duration` 为分钟，除60显示累计小时；乐龄依 `grade.reg_time` 与官方 `timestamp`。`798:605-624`：天数向下取整，以360天为一年、30天为一月。这与旧个人资料自然年月算法分开实现，不以安装日期或本机时间补值。
- `106:2033-2041`：真实等级榜类型为全球年榜2、省月榜3、市周榜4；与旧统计好友榜无关。
- `798:2818-2919`：`rank_type/page/pagesize`（page从1开始、每页50）及响应 `area/self_info/period_end_time/list/total`。原生续页使用真实 `total`，列表为 `SliverList.builder`，非整份列表套Column。
- `106:238-399` 与 `798:1417-1460`：POST `/v1/listen_level/like_user`、`/unlike_user`，body为 `target_userid` 和 `rank_type`；`798:1327-1351` 给出 `like_num/is_liked_today`。
- `106:498-653`：POST `userinfo.user.kugou.com/v1/get_rank_citylist` 与 `/v1/set_rank_city`。`798:4357-4440`：城市列表响应 `data.items`；`798:3580-3635`：省份含 `items` 城市，城市使用 `area_code`。`798:3906-3919`：设置body为当前 `userid/token` 与所选 `city_id`。
- `798:3973-4015`：90天仅一次地区机会及提交前再次确认；原生保留相同实质约束。超时或未确认的点赞/地点写入不会自动重放，需要先重读官方结果。

## 签名、账号隔离与不确定状态

- `new-level-js/879-b9d2fbde40c831e7.js:27030-27104`：H5签名对query键排序，再拼实际JSONbody，两端为已公开H5 key；新版通用补全 `clienttime` 为毫秒。报告模块显式用秒，按已核实服务分别处理。
- 设备来自本App真实注册生成的 `device_info.json`；缺 `mid/uuid/dfid` 时明确重试，不造设备身份。3116凭据始终按3116；用户补充的标准版授权实际使用1005/20869与其独立token。
- Provider按平台、UID、原token、标准token切换生命周期；旧client关闭后身份回调返回null。仓库读取前后校验，Reader关闭后不接收迟到值，覆盖A→B→A。
- 刷新失败保留同账号上次成功快照；缺失官方数字用未返回状态，不补0。官方今日读回卡片只展示独立前后快照，不把增长称为本App入账或某次上报已确认。
- `20010` 已有主代理匿名参数校验失败证据，因此不把该码一律当作登录失效。

## 验证与剩余边界

- 子代理只执行了owned文件的Dart解析/大括号检查及format；未运行Flutter，统一分析、测试、截图由主代理顺序执行。
- `test/release_152_kugou_profile_test.dart` 覆盖日期边界、秒/分钟和年度差异、缺值、两套乐龄算法、身份字段不可覆盖、实际标准token、ABA旧传输关闭、迟到响应拒收、刷新保留、真实榜单和写入method/body、未知点赞禁止重放及城市确认。
- 渲染fixture复用151的主机CJK/主题工具；截图名称均以152-开头。由主代理指定 `CAPTURE_151_DIR=.codex-artifacts/2026-11-04-release152/ui-round1`，覆盖日/周/月/年、等级三榜、乐龄，明暗390dp及320dp两倍字。
- 统计原生页已呈现时长、天数、累计、数量、趋势、歌曲/歌手榜；完整官方报告通过已核实入口交给主代理可信H5壳。完整版报告衍生的分享/唱片墙等特殊原生bridge行为不能由host fixture证明。
- 标准授权真实成功、真实官方统计增长、跨日结算、服务对Lite与标准授权的实际接受范围、地区90天约束、真实榜单点赞及手机GPU/IME均待主代理安排真实账号/设备验收。2026年度报告未核实，不套旧合同。
