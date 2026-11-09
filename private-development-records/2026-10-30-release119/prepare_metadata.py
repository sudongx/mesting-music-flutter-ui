from pathlib import Path
import json, hashlib
root=Path('D:/AnLi')
out=root/'.codex-artifacts/2026-10-30-release119'
notes=[
 '网易云歌单与歌手封面改为按显示尺寸读取CDN缩略图，修复大图缓存加载失败并减少解码开销。',
 '网易云和酷狗下载前可选择歌曲支持的音质，下载任务独立保存档位，批量下载仅提供共同支持的音质。',
 '核对下载返回的实际档位，试听或降档资源不作为所选音质完成，失败可重试并保留原选择。',
 '修复聊天表情面板和按钮图案居中，兼容网易云官版常用方括号表情的图案显示。',
 '好友名称居中并减轻加粗，一起听位于右上角菜单左侧，窄屏保留带提示的紧凑入口。',
 '我的消息显示私信、评论、提及、通知和新粉丝等未读总数，超过99显示99+，阅读后刷新并隔离账号。',
 '移除网易云专区重复且会打开空页的音乐搜索入口，保留原有底部搜索和搜索功能。',
 '推荐栏延后至切页入场结束再加载，降低图片解码与转场绘制竞争，保留玻璃材质和交互过渡。',
]
(root/'assets/data/release-notes.json').write_text(json.dumps({'version':'1.0.19','versionCode':40,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=root/'lib/features/app_update/domain/release_history.dart'
s=p.read_text(encoding='utf-8')
assert "'1.0.19':" not in s
s=s.replace("  '1.0.18': [", "  '1.0.19': [\n"+''.join('    '+json.dumps(n,ensure_ascii=False)+',\n' for n in notes)+"  ],\n  '1.0.18': [",1)
p.write_text(s,encoding='utf-8')
frozen={}
for folder in [root,root/'release']:
 for f in folder.iterdir():
  if f.is_file() and 'v1.0.18' in f.name:
   frozen[str(f.relative_to(root))]={'size':f.stat().st_size,'sha256':hashlib.file_digest(f.open('rb'),'sha256').hexdigest()}
(out/'frozen-v118-before.json').write_text(json.dumps(frozen,indent=2),encoding='utf-8')
print(json.dumps({'notes':len(notes),'frozenFiles':len(frozen)}))
