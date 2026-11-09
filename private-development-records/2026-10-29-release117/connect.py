from pathlib import Path
r=Path('D:/AnLi')
for f in ['lib/features/experience/presentation/playback_pill_menu.dart','lib/features/experience/presentation/beta_now_playing_page.dart','lib/features/experience/presentation/editorial_widgets.dart']:
 p=r/f;s=p.read_text(encoding='utf-8');s="import '../../music_platform/netease/fallback/netease_source_picker.dart';\n"+s;s=s.replace('下载到本地音乐','下载音乐')
 if 'playback_pill_menu' in f:
  s=s.replace("            if (platform) action('quality', '音质', CupertinoIcons.waveform),", "            if (platform) action('quality', '音质', CupertinoIcons.waveform),\n            if (track.source == TrackSource.netease && !track.hasLocalAudio) action('choose-source', '选择音乐来源', CupertinoIcons.antenna_radiowaves_left_right),")
  s=s.replace("    switch (selected) {", "    switch (selected) {\n      case 'choose-source':\n        await showNeteaseTrackSources(context, ref, track);")
 elif 'beta_now' in f:
  s=s.replace("        if (value == 'download') {", "        if (value == 'choose-source') {\n          await showNeteaseTrackSources(context, ref, track);\n          return;\n        }\n        if (value == 'download') {",1)
  s=s.replace("          if (track.source == TrackSource.netease)\n            const PlayerMenuAction(", "          if (track.source == TrackSource.netease && !track.hasLocalAudio)\n            const PlayerMenuAction('choose-source', '选择音乐来源', CupertinoIcons.antenna_radiowaves_left_right),\n          if (track.source == TrackSource.netease)\n            const PlayerMenuAction(",1)
 else:
  s=s.replace('''              actions: [
                CupertinoActionSheetAction(''','''              actions: [
                if (track.source == TrackSource.netease) CupertinoActionSheetAction(
                  onPressed: () { Navigator.pop(c); showNeteaseTrackSources(context, ref, track); },
                  child: const Text('选择音乐来源'),
                ),
                CupertinoActionSheetAction(''',1)
 p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/music_platform/presentation/beta_personal_profile.dart';s=p.read_text(encoding='utf-8-sig');s=s.replace("import '../netease/netease_features_repository.dart';", "import '../netease/netease_features_page.dart';");p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/core/audio/mesting_audio_handler.dart';s=p.read_text(encoding='utf-8');s=s.replace('  int? _pendingQueueEpoch;', '  int? _pendingQueueEpoch;\n  String? _loadedTrackId;')
s=s.replace('''    final loadEpoch = ++_queueLoadEpoch;
    final transportEpoch =
        requiredTransportIntentEpoch ?? _transportIntentEpoch;''','''    final transportEpoch = requiredTransportIntentEpoch ?? _transportIntentEpoch;
    // A delayed, already superseded command must not invalidate the newer load.
    if (transportEpoch != _transportIntentEpoch ||
        (requiredUserCommandEpoch != null && requiredUserCommandEpoch != _userCommandEpoch)) return false;
    final loadEpoch = ++_queueLoadEpoch;''',1)
s=s.replace('''    if (tracks.isEmpty) {
      _tracks''','''    if (tracks.isEmpty) {
      _pendingQueueEpoch = null;
      _loadedTrackId = null;
      _tracks''',1)
s=s.replace('''      _pendingQueueEpoch = null;
      _broadcastState(_player.playbackEvent);''','''      _pendingQueueEpoch = null;
      _loadedTrackId = orderedTracks.first.id;
      _handleDuration(_player.duration);
      _broadcastState(_player.playbackEvent);''',1)
s=s.replace('''    _consecutiveLoadFailures = 0;
    _startPlayer();
  }

  void _startPlayer()''','''    _consecutiveLoadFailures = 0;
    if (mediaItem.value?.id != _loadedTrackId) {
      final applied = await _loadQueue(_tracks);
      if (!applied) return;
    }
    _startPlayer();
  }

  void _startPlayer()''',1)
s=s.replace('''      _transportIntentEpoch++;
    }
    if (command != 'skipNext' ''','''      _transportIntentEpoch++;
      _pendingQueueEpoch = null;
    }
    if (command != 'skipNext' ''',1)
s=s.replace('''    _markUserCommand('replaceQueue');
    _consecutiveLoadFailures''','''    _markUserCommand('replaceQueue');
    final transportEpoch = _transportIntentEpoch;
    _consecutiveLoadFailures''',1)
s=s.replace('''      tracks,
      initialIndex: initialIndex,
      initialPosition: initialPosition,
    );''','''      tracks,
      initialIndex: initialIndex,
      initialPosition: initialPosition,
      requiredTransportIntentEpoch: transportEpoch,
    );''',1)
p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/experience/presentation/floating_playback_pill.dart';s=p.read_text(encoding='utf-8');s="import 'package:audio_service/audio_service.dart';\nimport '../../../shared/widgets/beta_glass_controls.dart';\n"+s;s=s.replace('''    final handler = ref.watch(audioHandlerProvider);''','''    final busy = ref.watch(playbackStateProvider.select((value) => value.value?.processingState == AudioProcessingState.loading));
    final handler = ref.watch(audioHandlerProvider);''',1)
s=s.replace("                  control(\n                    label: playing ? '暂停' : '播放',", "                  if (busy)\n                    const SizedBox(width: 44, height: 44, child: Center(child: BetaActivityIndicator(label: '正在加载所选歌曲')))\n                  else control(\n                    label: playing ? '暂停' : '播放',",1);p.write_text(s,encoding='utf-8',newline='\n')
# Preserve mocked search controllers' contracts for existing UI fixtures.
for f in ['test/music_search_ui_test.dart','test/search_menu_fm_regression_test.dart']:
 p=r/f;s=p.read_text(encoding='utf-8');s=s.replace('void setQuery(String rawQuery)', 'void setQuery(String rawQuery, {bool composing = false})').replace('void setQuery(String value)', 'void setQuery(String value, {bool composing = false})').replace('void setQuery(String raw)', 'void setQuery(String raw, {bool composing = false})');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/downloads/audio_downloads.dart';s=p.read_text(encoding='utf-8');idx=s.find('\nextension on String {');s=s if idx<0 else s[:idx]+'\n';p.write_text(s,encoding='utf-8',newline='\n')
print('Source menus connected; selected-source cancellation and retry guarded')
