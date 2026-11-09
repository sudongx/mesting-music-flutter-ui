# 1.0.40 静态消息调查与证据留存

当前本地官版原 APK 为 `.codex-artifacts/2026-11-02-duration-phone139/official-current-9.6.15.apk`，本次没有重新拉取手机。原始APK及定向classes16载体不修改。这里只检查静态解析与公开网页，不代表取得用户本次原始私信或实际访问其账号。

- `CommonMessage.fromJson` 确认 title/subTitle/cover/nativeUrl/tag/subTag/inboxBriefContent/canPlay/resName/subType。证据 `ev_4b1a63f0839128e8f1e08f65eafe15d556884d146421254c171a3114bcfeebcf`，单独保存 `official-common-message-parser.json`。
- 私信类型映射 `e10.c.e` 确认 type23 的字段为 generalMsg。证据 `ev_fb1acfb1cfd286a41119138c3f21087875ad77cf9e80f1c84f580199e7b2b9af`，保存 `official-private-type-fields.json`。
- APK 默认 link 配置指向 mp.music.163.com 的5fbcd...普通双人ending/list页面；现有URL允许列表遗漏该主机是观察到的兼容缺口，不证明该条实际私信的唯一根因。
- 公开页面读取契约见 `OFFICIAL-RECORDS-CONTRACTS.md`，来源摘要在 `.firecrawl/official-record-source-index.json`。没有以静态字段臆造心跳、历史时长或结束报告。

用户发送“继续”前的内存内REA结果未跨运行时保留，因此恢复后重新读取最小方法集并立即保存。有效完整导出是 `rea-recovered-message-evidence.json`，共6条（含summary父记录），随后reset已清空本轮调查且无打开的二进制目标。早先 `rea-official-records-evidence.json` 为0条，只能视为空接收结果，不作为证据。不要依据文件名把空包当作分析完成。
