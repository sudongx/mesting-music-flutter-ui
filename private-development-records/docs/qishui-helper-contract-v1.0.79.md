# 汽水官方累计只读参数：1.0.79 / 助手0.2.3

用户授权需要时交接原助手会话；主会话没有接管或代改助手。原会话“汽水自用 Windows／NAS 签名助手”完成0.2.3本地候选，85项完整测试通过，未推送或部署。

既有路由不变：POST https://api.qishui.com/luna/me/music_wall，application/json。正文精确候选：

```json
{"feed_music_wall_extra":{},"ab_param":"{"enable_new_music_wall":1,"enable_fav_artists":false,"enable_fav_playables":false}"}
```

ab_param是JSON字符串，内层只允许这三个键、数值1和两个false；保留旧空串兼容。拒绝对象代替字符串、额外/缺少/重复键、错误类型、禁用开关、非空extra或时长/身份/凭据字段。助手检查后仍签原始URL、UTF-8正文和header，不重编码；音乐墙不向助手增加Cookie/token/CSRF权限，没有新增时长写入路由。

主会话App真实传输夹具仅使用虚构身份和nas.example.test，生成后按捕获时钟离线校验，未送往原生签名器、真实NAS或官方。其SHA256为d80d8169c2f7c579d1e777b9f30c1d8c9f5b845fc1bc1de60ee2b04e02cddb60。主会话另验8项拒绝；助手85项不与之合并计数。

助手独立工作区：C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app。
交接：HANDOFF-QISHUI-SIGNER-NAS-0.2.3-2026-11-08.md。
本地补丁位于同项目outputs/qishui-signer-0.2.3-app-verified-patch.zip，只适用于完整0.2.2基线，不含私有组件或令牌，不是新安装包。源码推送和NAS部署仍由原会话按用户授权安排。

当前NAS0.2.2是用户确认的历史运行状态；它会拒绝新AB字符串。使用79的官方累计读取前需更新并重启至0.2.3，保持原配置、令牌和卷。主项目本地交付不会使NAS自动更新。真实官方累计返回及后续实际听歌入账需要分别验收。
