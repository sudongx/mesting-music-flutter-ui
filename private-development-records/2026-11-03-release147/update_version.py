from pathlib import Path
import json
root=Path('D:/AnLi')
notes=[
 '优化双平台歌单、歌手歌曲和收藏列表的按需加载，减少进入页面时的集中处理。',
 '新歌速递等完整返回的名单改为后台处理和分批显示，保留完整歌曲内容。',
 '优化评论、消息、记录及通用内容页的长列表，减少屏幕外项目的界面构建。',
 '优化本地音乐、最近播放、听歌排行和回顾统计的大列表处理与缓存。',
 '下载进度改为更新对应任务，减少整份列表和已下载标记的重复刷新。',
 '听歌足迹仅左右切换下方报告，标题、累计时长和周月年选择栏保持固定。',
 '修正酷狗我的喜欢排序，按收藏时间将新收藏的歌曲排在前面。',
 '分批浏览继续支持完整收藏内搜索、准确收藏状态和播放全部，保留原有玻璃效果。',
]
p=root/'pubspec.yaml'; text=p.read_text('utf-8'); assert 'version: 1.0.46+67' in text
p.write_text(text.replace('version: 1.0.46+67','version: 1.0.47+68'),'utf-8')
(root/'assets/data/release-notes.json').write_text(json.dumps({'version':'1.0.47','versionCode':68,'releaseNotes':notes},ensure_ascii=False,indent=2)+'\n','utf-8')
p=root/'lib/features/app_update/domain/release_history.dart'
text=p.read_text('utf-8'); needle='const musicReleaseNotes = <String, List<String>>{\n'; assert needle in text
p.write_text(text.replace(needle,needle+"  '1.0.47': [\n"+''.join('    '+repr(n)+',\n' for n in notes)+'  ],\n',1),'utf-8')
print('1.0.47 / code68 with 8 bundled notes; historical entries retained.')
