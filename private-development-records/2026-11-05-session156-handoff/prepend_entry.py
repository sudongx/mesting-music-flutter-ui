"""Add only a session handoff pointer; preserve the entire former AGENTS body."""
from pathlib import Path
root = Path('D:/AnLi')
path = root / 'AGENTS.md'
prior = path.read_bytes()
prefix = '''**2026-11-05 本会话总移交：先读[55/56完成项、注意事项与未完成验收总交接](HANDOFF-SESSION-2026-11-05-v1.0.56-TO-NEW-CHAT.md)。最新本地交付仍1.0.56/code77，原签名APK及2588文件完整源码已冻结；本会话完成55的TLS/连接租约/图片重订阅/目标重新认证/酷狗资料刷新及56的旧登录兼容、空恢复区绕过、独立新登录重新解包验证和失败平台归属。用户56双平台新登录成功；真实双凭据独立解密、冷恢复、同最终56/code77保留数据覆盖与双向切换已验，未递增code，不能外推未来升级。旧私钥失效原因未知、旧密文未解开；用户中途重装52影响首组试验，后续连续对照另验。临时helper/随机测试密钥/合成槽已清理，两个真实账号保留。本次仅文档移交，不改产品、不重测重建、不回填APK/ZIP；104冻结物、原签名/锁/完整玻璃/定制引擎/原脏工作区、beta/b6bcd542和空暂存保持。Beta2054/2跳过、Stable63、导航55、FSS164及分析0为已有结果，不重新累加。没有挂起的编码构建上传任务；递增升级、可读50/51真机路径、同VPN节点开关/网络切换/首次图片/完整播放/GPU/酷狗官方资料、更新HTTP400及历史总时长/十月683分10秒仍有未验收或未解决项，旧日志不重发。新会话先读本文与56交接，只读核对并报告接收后等待；本轮设备授权不外推，不自动ADB/手机/账号/VPN/后台/Git同步清理/测试编译或发布，不接管旧Gitee。本文和本入口写于56冻结之后，不回填旧包，下方均保留历史时点。**

'''
assert not prior.startswith('**2026-11-05 本会话总移交：先读[55/56'.encode('utf-8'))
path.write_bytes(prefix.replace('\n', '\r\n').encode('utf-8') + prior)
print('Session handoff pointer prepended; former AGENTS bytes preserved.')
