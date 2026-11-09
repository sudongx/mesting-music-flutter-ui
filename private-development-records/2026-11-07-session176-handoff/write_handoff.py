"""Add only the requested session handoff and a byte-preserving AGENTS prefix."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
DOCUMENT = 'HANDOFF-SESSION-2026-11-07-v1.0.75-76-TO-NEW-CHAT.md'
before = json.loads((OUT/'before.json').read_text('utf8'))
old = (OUT/'AGENTS-before.bin').read_bytes()
assert (ROOT/'AGENTS.md').read_bytes()==old
assert not (ROOT/DOCUMENT).exists()
draft = (OUT/'session-handoff.md').read_bytes()
assert draft.decode('utf8').startswith('# 本会话总交接：1.0.75—1.0.76')
assert hashlib.sha256(old).hexdigest()==next(r['sha256'] for r in before['currentFiles'] if r['path']=='AGENTS.md')
header = ('**2026-11-07 本会话总交接优先：先读[75—76总交接]('+DOCUMENT+')，按`.codex-artifacts/2026-11-07-session176-handoff/after.json`和`verify_handoff.py check`只读接收、报告并等待。'
    '当前仍1.0.76/code97修正候选3；75旧Mesting源码47产品/23测试/4原生工具已退休，三平台/游客/当前数据和Drift7被动兼容保持。'
    '76缓存内容封面/首页顶部/平台过渡/Tab菜单/播放器队列黑色加载门/本机输出入口已实现；候选2菜单残留与灰色遮挡整轮拒收，修正3现场复查未再见所述遮挡。'
    '最终40场景154记录12844帧、95采样0失败59跳过，三平台Tab各12/12、12菜单阶段48开闭；2个队列自动场景queue_empty跳过，不冒称18阶段通过。'
    '67配对阶段栅格P90网易云9.320→8.584、酷狗10.006→8.866、汽水8.919→8.145ms；更多菜单/汽水Tab/部分P99仍差，稳定120和旧74原生崩溃根因/长期稳定未完成。'
    'Beta2821/1跳过、Stable50/12跳过、导航57、分析0为既有最终结果，不重跑累加。'
    '本次仅新增总交接及AGENTS字节前缀，不改产品/重测重建/手机ADB/账号/NAS/Git/上传发布；92冻结物/1613输入/签名锁/74退休路径/历史脏树/beta/b6bcd542/空暂存保留。'
    '旧release176收据不回填；直接旧校验会因新AGENTS入口偏移，接收用新session176收据。76APK/ZIP及同版文档未回写；最后设备状态仅沿用上一阶段读回，当前交接未再连接。'
    '无挂起编码构建安装采样导出上传任务，验收缺口与业务/NAS/DSP/VIP旧边界详见总交接；66/71用户已验保持，手机号停止、独立助手不接管。未提交推送上传发布备份。下方均历史时点。**\n\n')
with (ROOT/DOCUMENT).open('xb') as stream:
    stream.write(draft)
(ROOT/'AGENTS.md').write_bytes(header.encode('utf8')+old)
assert (ROOT/'AGENTS.md').read_bytes().endswith(old)
print(json.dumps({'newDocument':DOCUMENT,'oldAgentsBytesPreserved':True,
    'productOrFrozenDeliveriesModified':False},ensure_ascii=False,indent=2))
