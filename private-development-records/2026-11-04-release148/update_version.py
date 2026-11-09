from pathlib import Path
import json
ROOT = Path('D:/AnLi')
notes = [
    '修正编辑个人资料的账号平台说明，保存目标与当前编辑账号一致。',
    '修复我的喜欢搜索时输入框被键盘遮挡，保留完整收藏内搜索和提交操作。',
    '紧凑排列歌手详情及同类资源页头部操作，保留所有入口并适配窄屏和大字。',
    '歌单分类显示对应分类内真实歌单的代表封面，按需加载并限制并发。',
    '完善歌单封面字段兼容和失败后的元数据补取，重试不再只重复原失效地址。',
    '补齐心动模式稀疏歌曲资料与封面，并增加红色播放全部按钮。',
    '歌手详情新增播放全部，补齐当前歌曲列表后再加入队列，保留原有待播处理。',
    '音质选择跟随当前实际音源，只显示已确认歌曲与账号可用的档位，切换失败保留原播放。',
]
pubspec = ROOT/'pubspec.yaml'
text = pubspec.read_text('utf-8')
assert 'version: 1.0.47+68' in text
pubspec.write_text(text.replace('version: 1.0.47+68', 'version: 1.0.48+69'), 'utf-8')
(ROOT/'assets/data/release-notes.json').write_text(json.dumps({'version': '1.0.48', 'versionCode': 69, 'releaseNotes': notes}, ensure_ascii=False, indent=2)+'\n', 'utf-8')
history = ROOT/'lib/features/app_update/domain/release_history.dart'
text = history.read_text('utf-8')
needle = 'const musicReleaseNotes = <String, List<String>>{\n'
assert needle in text and "'1.0.48':" not in text
history.write_text(text.replace(needle, needle+"  '1.0.48': [\n"+''.join('    '+repr(note)+',\n' for note in notes)+'  ],\n', 1), 'utf-8')
for relative in ['tool/build_android_release_apk.ps1', 'tool/build_android_md3_beta_apk.ps1']:
    file = ROOT/relative
    text = file.read_text('utf-8')
    text = text.replace("$VersionName = '1.0.46'", "$VersionName = '1.0.48'").replace('$VersionCode = 67', '$VersionCode = 69')
    file.write_text(text, 'utf-8')
file = ROOT/'CHANGELOG.md'
text = file.read_text('utf-8')
file.write_text(text.replace('# Changelog\n', '# Changelog\n\n## 1.0.48 / Android code69 — 2026-11-04\n\n'+''.join('- '+note+'\n' for note in notes)+'\n仅本地原签名交付；真机/真实账号及CDN仍待验收，历史总时长与十月683分钟仍未解决。\n', 1), 'utf-8')
print('Version 1.0.48/code69 and eight bundled notes prepared; history retained.')
