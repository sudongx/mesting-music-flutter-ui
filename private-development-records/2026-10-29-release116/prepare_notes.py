from pathlib import Path
import json

root=Path('D:/AnLi')
notes=[
    '修复酷我旧搜索页面失效，改用匿名搜索接口，继续核对歌手、专辑、录音版本与时长。',
    '完善B站音轨标题解析与候选核验，失效结果不再阻断其他同曲候选，补充一次受限的歌词搜索。',
    '增加MP3帧数与FLAC时长检查，拒绝短试听和短提示音，不将可访问的音频地址直接视为完整版。',
    '连续点歌时取消旧播放解析，超时后终止对应请求，并限制音源响应大小。',
    '修复自动切歌解析失败时的未处理异常，以及旧点歌请求失败影响新选择的问题。',
    '细化本机音源诊断，区分搜索无结果、录音不符、短音频、音质不足与请求失败。',
    '开启音源诊断时附加系统可用的本应用历史异常退出原因，支持手动复制，便于排查闪退。',
    '保留官方、新音源、BugPk顺序与原有玻璃交互；完整播放和实际音质仍取决于可用音源。',
]
path=root/'assets/data/release-notes.json'
path.write_text(json.dumps({'version':'1.0.16','versionCode':37,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
path=root/'lib/features/app_update/domain/release_history.dart'
text=path.read_text(encoding='utf-8')
assert "  '1.0.16': [" not in text
text=text.replace("const musicReleaseNotes = <String, List<String>>{", "const musicReleaseNotes = <String, List<String>>{\n  '1.0.16': [\n"+''.join('    '+json.dumps(n,ensure_ascii=False).replace('"',"'")+',\n' for n in notes)+"  ],")
path.write_text(text,encoding='utf-8')
for name in ['tool/build_android_release_apk.ps1','tool/build_android_md3_beta_apk.ps1']:
    path=root/name
    text=path.read_text(encoding='utf-8-sig').replace("$VersionName = '1.0.15'", "$VersionName = '1.0.16'").replace('$VersionCode = 36','$VersionCode = 37').replace('[ValidateRange(36, 2147483647)]','[ValidateRange(37, 2147483647)]')
    path.write_text(text,encoding='utf-8')
path=root/'CHANGELOG.md'
text=path.read_text(encoding='utf-8')
title='## 1.0.16 / Android code37 — 2026-10-29\n\n'
assert title not in text
entry=title+''.join('- '+note+'\n' for note in notes)+'\n状态：本机修复与交付准备；最终结果见本版 validation 和 release 验证JSON。未访问手机或真实账号，未上传发布，未提交推送。\n\n'
first=text.find('\n## ')
if first>=0: text=text[:first+1]+entry+text[first+1:]
else: text=entry+text
path.write_text(text,encoding='utf-8')
print('Prepared version 1.0.16/code37 and 8 consistent notes; historical notes retained')
