import json
from pathlib import Path
r=Path('D:/AnLi'); out=r/'.codex-artifacts/2026-10-29-release117'
notes=[
 '整理“我的”页面资料、快捷入口和创建／收藏歌单分组，播放与同步等单项专区直接进入实际页面。',
 '统一二、三级页面的边缘返回与转场覆盖，补充嵌套导航返回状态同步，保留玻璃材质和动画。',
 '设置选择、歌曲与歌单菜单改用公共玻璃控件，修复浅色滚动时玻璃按钮背景取样异常。',
 '私信按当前账号保存已显示消息的阅读位置，刷新会话与总未读数时保留之后到达的新消息。',
 '搜索等待中文输入提交及输入间隔，保留已有结果，避免逐字重建加载动画与旧请求覆盖新词。',
 '切歌立即停止旧音频并更新胶囊歌曲与加载状态，连续选择以最后一次为准，失败可明确重试。',
 '修复旧封面地址加载；新增独立已下载列表、播放全部、离线播放、文件导出和打开保存文件夹。',
 '歌曲菜单支持自动和既有音源的逐曲选择，检测完整同录音后启用，不可用来源置灰并可重新检测。',
]
p=r/'assets/data/release-notes.json';p.write_text(json.dumps({'version':'1.0.17','versionCode':38,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=r/'lib/features/app_update/domain/release_history.dart';s=p.read_text(encoding='utf-8');assert "  '1.0.17': [" not in s;s=s.replace('const musicReleaseNotes = <String, List<String>>{', "const musicReleaseNotes = <String, List<String>>{\n  '1.0.17': [\n"+''.join('    '+json.dumps(n,ensure_ascii=False).replace('"',"'")+',\n' for n in notes)+"  ],");p.write_text(s,encoding='utf-8',newline='\n')
for f in ['tool/build_android_release_apk.ps1','tool/build_android_md3_beta_apk.ps1']:
 p=r/f;s=p.read_text(encoding='utf-8-sig').replace("$VersionName = '1.0.16'", "$VersionName = '1.0.17'").replace('$VersionCode = 37','$VersionCode = 38').replace('[ValidateRange(37, 2147483647)]','[ValidateRange(38, 2147483647)]');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'CHANGELOG.md';s=p.read_text(encoding='utf-8');pos=s.find('\n## ');entry='## 1.0.17 / Android code38 — 2026-10-29\n\n'+''.join('- '+n+'\n' for n in notes)+'\n本轮不新增酷狗音乐源或双平台签到联动。状态与验证边界见本版validation及交接；用户自行安装发布。\n\n';s=s[:pos+1]+entry+s[pos+1:] if pos>=0 else entry+s;p.write_text(s,encoding='utf-8',newline='\n')
# A nullable activity result must not be dereferenced on alternative SDK builds.
p=r/'android/app/src/main/kotlin/com/mesting/mesting_music/OfflineAudioStorageBridge.kt';s=p.read_text(encoding='utf-8-sig').replace('data.flags and permissions','(data?.flags ?: 0) and permissions');p.write_text(s,encoding='utf-8',newline='\n')
files=json.loads((out/'regression-files.json').read_text());files=[f for f in files if f!='test/music_search_ui_test.dart'];files+=['test/beta8_navigation_test.dart'];files=sorted(set(files));(out/'regression-files.json').write_text(json.dumps(files,indent=2),encoding='utf-8')
script="$ErrorActionPreference = 'Stop'\nSet-Location -LiteralPath 'D:/AnLi'\n$regressionFiles = @(\n"+''.join("  '"+p+"'\n" for p in files)+")\n& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --concurrency 2 --reporter json @regressionFiles *> .codex-artifacts/2026-10-29-release117/regression-tests-final.jsonl\nexit $LASTEXITCODE\n";(out/'run-regression.ps1').write_text(script,encoding='utf-8')
print('1.0.17/code38 notes and release defaults prepared;',len(files),'Beta regression suites')
