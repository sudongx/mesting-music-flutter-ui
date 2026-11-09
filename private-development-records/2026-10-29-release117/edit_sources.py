from pathlib import Path
p=Path('D:/AnLi/lib/features/music_platform/netease/netease_fallback.dart');s=p.read_text(encoding='utf-8');s="import 'netease_track_sources.dart';\n"+s
start=s.index('class NeteaseFallbackResolver');a=s[:start];b=s[start:]
b=b.replace('''    String? requiredQuality,
    Future<void>? abortTrigger,
  }) async {''','''    String? requiredQuality,
    String? onlySource,
    Future<void>? abortTrigger,
  }) async {''',1)
b=b.replace('''        activeSources: [...sources, ...clients.keys],''','''        activeSources: [...sources, ...clients.keys].where((source) => onlySource == null || source.label == onlySource).toList(),''',1)
b=b.replace("${original.playbackQuality}|$requiredQuality';", "${original.playbackQuality}|$requiredQuality|${activeSources.map((s) => s.label).join(',')}';",1)
s=a+b
s=s.replace('''      requireQuality: requireQuality,
      abortTrigger: request.abort,''','''      requireQuality: requireQuality,
      selectedSource: ref.read(neteaseTrackSourcesProvider)[track.id] ?? NeteaseTrackSource.automatic,
      abortTrigger: request.abort,''',1)
a=s.index('Future<Track> resolveNeteaseTrack({');s=s[:a]+s[a:].replace('''  bool requireQuality = false,
  Future<void>? abortTrigger,''','''  bool requireQuality = false,
  NeteaseTrackSource selectedSource = NeteaseTrackSource.automatic,
  Future<void>? abortTrigger,''',1)
a=s.index('  Track? original;',s.index('Future<Track> resolveNeteaseTrack({'))
s=s[:a]+'''  if (selectedSource.adapter != null) {
    final selected = await fallback.resolve(track.copyWith(playbackQuality: quality.code),
      current: current, requiredQuality: requireQuality ? quality.code : null,
      onlySource: selectedSource.adapter, abortTrigger: abortTrigger);
    if (!current()) throw const MusicPlatformException('播放请求已取消或账号已变化');
    if (selected == null) throw MusicPlatformException('${selectedSource.label}暂未提供这首歌的完整版本，请重新检测或选择自动');
    return selected;
  }
'''+s[a:]
s=s.replace('''  if (allowFallback) {
    final resolved = await fallback.resolve(''','''  if (selectedSource == NeteaseTrackSource.official) {
    if (original != null && !original.isPreview) return original;
    throw failure ?? const MusicPlatformException('网易云官方当前未提供完整音频');
  }
  if (allowFallback) {
    final resolved = await fallback.resolve(''',1)
p.write_text(s,encoding='utf-8',newline='\n')
print('Forced source resolution cannot silently fall through to another provider')
