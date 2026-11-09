"""Prepare this release without altering any previously frozen deliverable."""
from pathlib import Path
import json, re
ROOT = Path('D:/AnLi')
OLD = ROOT/'.codex-artifacts/2026-11-04-release148'
OUT = ROOT/'.codex-artifacts/2026-11-04-release149'
notes = [
    '我的喜欢搜索改用菊花加载动画，移除横条面板并保留键盘上方输入框。',
    '修复歌单分类代表封面与歌单封面补取，失败后重新读取元数据并尝试真实替代封面。',
    '分类进入和封面重试保留已显示内容，聊天返回消息页时原位更新会话，减少闪动。',
    '双平台歌曲列表新增回到顶部按钮，自动避让底栏、播放胶囊和输入键盘。',
    '分别记住每个账号及歌曲列表上次点播的歌曲，重新启动后继续保留提示。',
    '点击上次播放提示按需补齐列表并定位、短暂高亮歌曲，不自动播放；提示支持关闭。',
    '统一页面进入与退出的反向路径，保留播放器、搜索和弹窗各自的过渡形式与页面状态。',
    '完善窄屏、大字和明暗主题适配，保留原签名、完整玻璃效果与现有播放功能。',
]
pubspec=ROOT/'pubspec.yaml'
text=pubspec.read_text('utf-8')
assert 'version: 1.0.48+69' in text
pubspec.write_text(text.replace('version: 1.0.48+69','version: 1.0.49+70'),'utf-8')
(ROOT/'assets/data/release-notes.json').write_text(json.dumps({'version':'1.0.49','versionCode':70,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n','utf-8')
history=ROOT/'lib/features/app_update/domain/release_history.dart'
text=history.read_text('utf-8');needle='const musicReleaseNotes = <String, List<String>>{\n'
assert needle in text and "'1.0.49':" not in text
history.write_text(text.replace(needle,needle+"  '1.0.49': [\n"+''.join('    '+repr(note)+',\n' for note in notes)+'  ],\n',1),'utf-8')
for relative in ['tool/build_android_release_apk.ps1','tool/build_android_md3_beta_apk.ps1']:
    file=ROOT/relative;text=file.read_text('utf-8')
    text=text.replace("$VersionName = '1.0.48'","$VersionName = '1.0.49'").replace('$VersionCode = 69','$VersionCode = 70')
    file.write_text(text,'utf-8')
file=ROOT/'CHANGELOG.md';text=file.read_text('utf-8')
file.write_text(text.replace('# Changelog\n','# Changelog\n\n## 1.0.49 / Android code70 — 2026-11-04\n\n'+''.join('- '+n+'\n' for n in notes)+'\n仅本地原签名交付；手机、真实账号、CDN与IME/GPU效果仍待验收，历史总时长及十月683分钟仍未解决。\n',1),'utf-8')
beta=json.loads((OLD/'beta-files.json').read_text('utf-8-sig'))
beta=sorted(set(beta+[p.relative_to(ROOT).as_posix() for p in (ROOT/'test').glob('release_149_*test.dart')]))
(OUT/'beta-files.json').write_text(json.dumps(beta,indent=2)+'\n','utf-8')
for name in ['stable-files.json','navigation-files.json']:
    (OUT/name).write_bytes((OLD/name).read_bytes())
for name in ['run_checks.ps1','build.ps1','sign_and_verify.py','verify_formal_payload.py','read_compiler_definitions.ps1','verify_local_notes.dart','verify_build_inputs.py','freeze_source.py','summarize_checks.py']:
    text=(OLD/name).read_text('utf-8-sig')
    text=text.replace('2026-11-04-release148','2026-11-04-release149').replace('1.0.48','1.0.49').replace('release_148_pending','release_149_pending').replace('music148','music149').replace('MESTING148_KEYSTORE_PASSWORD','MESTING149_KEYSTORE_PASSWORD')
    text=re.sub(r'\b69\b','70',text)
    if name=='run_checks.ps1':
        # Formatting and fixes are scoped to changes, never a broad pre-build mutation.
        text='\n'.join(line for line in text.splitlines() if ' fix --apply ' not in line)+'\n'
    if name=='summarize_checks.py':
        text=text.replace("'stable-final.jsonl'","'stable-complete.jsonl'").replace("'navigation-current.jsonl'","'search-back-player.jsonl'").replace("'analyze-current.log'","'analyze-final.log'")
    target=OUT/name
    assert not target.exists(),name
    target.write_text(text,'utf-8')
print(json.dumps({'version':'1.0.49+70','betaFiles':len(beta),'notes':len(notes)}))
