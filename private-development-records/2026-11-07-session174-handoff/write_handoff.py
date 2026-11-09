"""Append the authorized session document and preserve every old AGENTS byte."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
before = json.loads((OUT / 'before.json').read_text('utf8'))
assert before['currentFileCount'] == 2989
old_agents = (OUT / 'AGENTS-before.bin').read_bytes()
assert (ROOT / 'AGENTS.md').read_bytes() == old_agents
target = ROOT / 'HANDOFF-SESSION-2026-11-07-v1.0.73-74-TO-NEW-CHAT.md'
assert not target.exists()
target.write_bytes((OUT / 'session-handoff.md').read_bytes())
prefix = '''**2026-11-07 本会话总交接优先：先读[73—74总交接](HANDOFF-SESSION-2026-11-07-v1.0.73-74-TO-NEW-CHAT.md)，按`.codex-artifacts/2026-11-07-session174-handoff/after.json`只读接收后报告等待。当前本地及本轮最后实机74/code95是测量候选：166可比阶段中UI构建小幅变化，网易云/酷狗栅格化P90为14.570→22.013ms、14.995→21.987ms；12:09:35原生raster SIGSEGV后断点补采，不是稳定性或整体优化通过。74完整记录514条/28294帧、321通过/5失败/188跳过；汽水新增8场景24通过/1失败/7跳过，没有73汽水基线。三平台Tab巡检均stage_error，网易云用户歌单/公共歌单page_error；history误入旧Mesting保护页已排除主要对比。心动收藏为平台收藏共用旧界面，不是已证明旧账号数据。用户要求先数据、新问题只记录、确认后再改；旧Mesting账号体系源码级移除已确定方向但清理方案待确认，未实施。默认入口缓存恢复、附近加载、懒构建、汽水分页/缓存、后台JSON与图片/取消/旧错误/跨账号显示修复已有本地实现，玻璃/角色动画保留。Beta2803/2条件跳过、Stable63、导航57、分析0、12图是既有结果，原生14/29仅同输入历史；原签名双ARM/定制引擎/7shader/12旧非app库/JNI/DSP声明/R8另验。88冻结物/1660构建输入/签名/锁/历史脏树、beta/b6bcd542/空暂存保持；74源码2975文件，原APK/ZIP及同版文档不回填。当前仅总交接和AGENTS入口追加，未产品修改/重测重建/手机ADB/账号/NAS/发布。无挂起编码构建安装采样导出上传任务。旧301/400、本人VIP整曲/云封面/双向历史写入/奖励/下载/DSP仍未验；独立助手/NAS未动。66/71用户已确认项目保持，手机号停止；63ZIP不补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布备份。下方均历史时点。**

'''
(ROOT / 'AGENTS.md').write_bytes(prefix.encode('utf8') + old_agents)
print(json.dumps({'sessionHandoffWritten': str(target), 'oldAgentsSuffixPreserved': True, 'frozenReleaseFilesChanged': False}, ensure_ascii=False))
