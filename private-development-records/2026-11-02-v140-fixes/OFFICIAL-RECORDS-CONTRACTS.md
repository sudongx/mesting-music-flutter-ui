# 官版一起听结束报告与全部记录：公开网页静态契约

2026-11-02，Asia/Shanghai。仅抓取公开 HTML/JS，未使用账号 cookie、未访问手机、未发邀请/私信、未执行账号接口。原始来源和摘要见 `.firecrawl/official-record-source-index.json`。这些事实是官版前端静态读取契约，不证明当前账号响应、服务端接受某个替代传输方式或手机业务验收。

## 来源与入口

当前官版 APK 的默认 link 配置指向以下两套不同网页。普通双人记录应使用第一套，不要误用多人 result 接口。

- 全部记录：`https://mp.music.163.com/5fbcd6a217aef81f3a03eda5/list/index.html`；主脚本为 `https://s7.music.126.net/5fbcd6a217aef81f3a03eda5_5fbdc1970ffa58fca0b5069a_0/list/index.960e0928.js`，本地 `.firecrawl/official-record-list.js`。
- 双人本次详情：同项目 `/ending/index.html?roomId=…&roomType=FRIEND&scene=MOBILE_FRIEND&nm_style=sbt`；主脚本 `https://s7.music.126.net/5fbcd6a217aef81f3a03eda5_5fbdc1970ffa58fca0b5069a_0/ending/index.5e70b42d.js`，本地 `.firecrawl/official-record-ending.js`。
- 多人详情：`https://mp.music.163.com/6282047e083722f28246f0c9/result.html`；本地 `.firecrawl/official-record-result.js`。普通列表只有 `recordRoomType === 'multi_room'` 才选择这套。

## 确认的只读请求

| 用途 | 官版 JS 声明的方法与业务路径 | 输入 | 解包后输出 |
|---|---|---|---|
| 全部记录 | GET `/api/listen/together/full/records` | `{page:{size:50,cursor:cursor || ''}}` | `records[]`, `mostListen`, `vip`, `vipType`, `hasMore`, `nextCursor` |
| 双人本次报告 | GET `/api/listen/together/record/get` | `{roomId}` | 独立报告对象，字段见下 |
| 房间歌曲ID | GET `/api/listen/together/room/songs/list` | `{roomId}` | `songIds[]`，官版用于确认收藏按钮是否可用 |
| 头像、昵称 | POST `/api/v1/user/detail/{id}` | `{}` | 原响应 `profile.avatarUrl/nickname/vipType`；官版页面仅投影这三字段 |
| 多人本次报告 | POST `/api/listen/together/multi/record` | `{roomId,userSubjectId}` | 此次未展开全部多人 DTO；与双人报告不同 |

共同请求封装 `2taP.g()` 将传入方法保留到 `options.method`，将上述参数作为 `options.data`，生产环境 `encrypt=true`、`noBridge=false`，配置 `apiDomain='interface.music.163.com'`。它接受 2xx/3xx 的 `status` 或 `code`，随后返回 `response.data`（不存在 data 时返回根）。这只证明网页声明的方法/数据，未验证 App 当前 EAPI POST 是否与这些 GET 业务读取等价。

## 全部记录 DTO 与会员边界

`records[]` 行直接读取：`id`, `date`, `avatar`, `nick`, `startTime`, `duration`, `totalSong`, `userId`, `ltType`, `roomId`, `online`, `canInvite`, `recordRoomType`, `targetUrl`。还存在匹配/多人隐私显示用的 `newUnmaskFlag`, `matchPlayInfo`, `identityIcon`, `identityTag`, `multiGroupTo` 等字段。普通好友 `ltType=1`，入口映射为 `roomType='FRIEND'`, `scene='MOBILE_FRIEND'`。

`mostListen` 直接读取 `selfAvatar`, `friendAvatar`, `friendNick`, `friendUid`, `totalDuration`, `totalSong`, `ltType`, `online`, `identityIcon` 等。

分页使用原样 `nextCursor`，`hasMore` 为下一页是否仍可读。前端的分组仅按服务端每行 `date` 合并，不能用本机日期构造缺失历史。网络首屏数据不足50且 `hasMore=true` 时，官版可能立即请求下一页；这不是必须仿造的产品逻辑。

官版前端在 `vip=false` 时把最常好友统计改成 `*分钟`/`*首`，且 `et()` 分组丢弃当页最后一行的明细，换为 `{hide:true}` 占位。不要将隐藏记录伪装成空记录、把累计数据/本地计时拿来补齐，或以客户端逻辑绕过账户权益。此处是前端观察，不是已证明服务端所有字段均被裁剪。

## 双人报告 DTO 与单位

报告读取 `userInfo`、`anotherUserInfo`，其中已观察到 `userId`, `identityName`, `identityIcon`, `identityTag`；页面另通过用户详情接口取得头像和昵称，并按当前用户ID判断对方，不能固定认为 `anotherUserInfo` 永远是聊天好友。

统计字段：`duration`, `songCount`, `totalDuration`, `totalSongCount`, `distance`, `endTime`。其他控制字段：`roomId`, `roomType`, `scene`, `online`, `canInvite`, `showCollectBtn`, `oldData`, `fateDel`, `sharePageSetting`, `images`。陌生人/匹配页还有聊天数、相似度和共同喜欢歌曲等，不能自动当作好友的字段。

**单位必须按接口区分：**

- 列表行 `duration`、`mostListen.totalDuration`、双人报告 `duration`/`totalDuration` 均为 **毫秒**。列表格式函数 `QmAe.T(t)` 和 ending 格式函数 `H(e)` 第一行均先除 `1e3`，随后除 `3600`/`60`。
- `startTime`/`endTime` 直接交给 JavaScript `Date`，因此是 **毫秒时间戳**。
- 报告 `distance` 已是 **公里**。`getDistanceDesc()` 直接将原值拼接到“公里”，`<=0.1` 改为近在身边提示、`>99999` 显示上限；不得再除1000。
- `songCount`/`totalSongCount`/列表 `totalSong` 是计数；缺失未知不能默认为确知0。网页自身使用 `||0` 是显示兜底，不证明业务真实为0。

## 明确未执行的写操作

源码还可见 record/delete、vip/invite/unlock、原生邀请/聊天/加入歌单和分享桥接。这次调查未执行这些操作。仅阅读记录、进入详情或分页不得隐式结束/创建/加入房间、发邀请、收藏、删除或分享给他人。

## 仍未知

没有当前账号 JSON、服务端逐次回执或本次用户私信原始 DTO。不能根据这些公开脚本断言 `[分享内容]` 的唯一根因。上述旧详情使用 `mp.music.163.com`，现有消息卡 URL 白名单遗漏该主机是父调查另已确认的兼容缺口；正式修复仍应保留严格路径/协议验证。原脚本不是待引入产品的依赖，不打入公开源码或 APK。
