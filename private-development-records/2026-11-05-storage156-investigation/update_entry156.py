"""Prepend the current handoff without rewriting any historical AGENTS bytes."""
from pathlib import Path
path = Path('D:/AnLi/AGENTS.md')
previous = path.read_bytes()
assert not previous.startswith('**2026-11-05 本地交付1.0.56'.encode('utf-8'))
prefix = '''**2026-11-05 本地交付1.0.56/code77：先读[56交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.56.md)、[安装](docs/INSTALL-v1.0.56.md)、[实现](docs/fixes-2026-11-05-v1.0.56.md)及[验证](docs/validation-2026-11-05-v1.0.56.json)。按用户要求保留50/51可读旧登录路径，修复空恢复区触碰失效密钥、新登录预读坏旧区、同实例回读不足及失败平台归属；故障新登录独立加密并重新解包验证，不删除旧密钥密文。用户授权本轮手机调试并确认56双平台无需清数据可重新登录；已验证真实双凭据独立进程解密、双平台冷恢复、同最终56/code77覆盖及双向切换，覆盖前后凭据与指针字节一致。此组未递增code，不冒充未来版本或50/51真机升级验收。原密钥失效原因未知、旧密文未解开；用户期间重装52并登录使首组试验混入干预，不能据此归因普通升级，后续连续对照另验。临时helper/随机密钥/合成槽已清理，未清除/卸载Mesting，双账号保留。Beta186文件2054通过/2跳过、Stable63、导航55、FSS原生164、分析0；先前两项限时失败及相关11文件99项完整复跑通过并保留失败证据、不累加。1516编译输入、原证书双ARM/定制引擎/7shader/55全部12非app库、DEX三类五方法十二字段JNI及APK八条说明另验。原102份冻结物保持，56 APK/完整源码另存；签名/锁/原脏工作区、beta/b6bcd542及空暂存保持。VPN开关/网络切换/首次图片/完整播放/GPU/酷狗官方资料仍待验收；原网络媒体35、Rust136/6外网忽略、SDK563仅同输入继承。未后台/提交推送发布，不接管旧Gitee；历史总时长/十月683分10秒未解决，旧日志不重发。新接手先只读核对后等待，不外推本轮手机授权，不自动同步清理构建或发布；下方均保留历史时点。**

'''
path.write_bytes(prefix.replace('\n', '\r\n').encode('utf-8') + previous)
print('Current 56 handoff prepended; historical bytes retained.')
