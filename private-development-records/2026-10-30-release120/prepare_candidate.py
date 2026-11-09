from pathlib import Path
import json, hashlib
root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-10-30-release120'
notes=[
 '修复网易云封面缓存失效时的恢复链路，补充图片字段、请求和解码的脱敏诊断。',
 '统一消息入口与会话列表的未读汇总，兼容计数字段并在总数请求异常时保留已知未读。',
 '针对滑动、切页及底部控件的绘制开销和原生崩溃路径进行稳定性处理，保留玻璃交互动效。',
]
(root/'assets/data/release-notes.json').write_text(json.dumps({'version':'1.0.20','versionCode':41,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
frozen={}
for folder in [root,root/'release']:
 for p in folder.iterdir():
  if p.is_file() and any(v in p.name for v in ['v1.0.18','v1.0.19']):
   with p.open('rb') as f:sha=hashlib.file_digest(f,'sha256').hexdigest()
   frozen[str(p.relative_to(root))]={'size':p.stat().st_size,'sha256':sha}
(out/'frozen-before.json').write_text(json.dumps(frozen,indent=2),encoding='utf-8')
print(json.dumps({'version':'1.0.20','code':41,'localCandidateOnly':True,'frozenOldFiles':len(frozen)}))
