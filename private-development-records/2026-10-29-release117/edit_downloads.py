from pathlib import Path
r=Path('D:/AnLi')
p=r/'android/app/src/main/kotlin/com/mesting/mesting_music/MainActivity.kt';s=p.read_text(encoding='utf-8');s=s.replace('private var musicDownloadBridge: MusicDownloadBridge?','private var musicDownloadBridge: OfflineAudioStorageBridge?').replace('MusicDownloadBridge(this, flutterEngine.dartExecutor.binaryMessenger) { uri -> localMusicBridge?.indexDownloaded(uri) }','OfflineAudioStorageBridge(this, flutterEngine.dartExecutor.binaryMessenger)');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/shared/models/track.dart';s=p.read_text(encoding='utf-8');s=s.replace('  bool get isRemote => source != TrackSource.local;', '''  /// A saved recording keeps its original platform identity for library and
  /// listening synchronization, while its transport can be entirely offline.
  bool get hasLocalAudio => audioAsset.startsWith('content://') || audioAsset.startsWith('file://');
  bool get isRemote => source != TrackSource.local && !hasLocalAudio;''');s=s.replace('artUri ?? (isRemote ? Uri.tryParse(coverAsset) : null)','artUri ?? ((isRemote || coverAsset.startsWith(\'http\') || coverAsset.startsWith(\'file://\')) ? Uri.tryParse(coverAsset) : null)');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/app/mesting_music_app.dart';s=p.read_text(encoding='utf-8');s=s.replace('''      audioHandler.configureTrackPlaybackResolver((track) async {
''','''      audioHandler.configureTrackPlaybackResolver((track) async {
        if (track.hasLocalAudio) return track;
''',1);p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/downloads/audio_downloads.dart';s=p.read_text(encoding='utf-8');s=s.replace("import 'package:flutter/services.dart';\n",'');s=s.replace("import '../local_music/local_music_providers.dart';", "import 'audio_download_storage.dart';")
s=s.replace('''  AudioDownloadTask copy({
    AudioDownloadPhase? phase,''','''  AudioDownloadTask copy({
    Track? track,
    AudioDownloadPhase? phase,''',1);s=s.replace('''    track: track,
    phase: phase ?? this.phase,''','''    track: track ?? this.track,
    phase: phase ?? this.phase,''',1)
s=s.replace('''          phase: AudioDownloadPhase.completed,
          received: received,''','''          phase: AudioDownloadPhase.completed,
          track: task.track.copyWith(playbackQuality: media.playbackQuality, audioBitrate: media.audioBitrate),
          received: received,''',1)
a=s.index('    publish: (file, track, extension, mime) async {');b=s.index('\n  );',a)
s=s[:a]+'''    publish: const AudioDownloadStorage().publish,'''+s[b:]
s=s.replace("final audioDownloadManagerProvider =",'''/// URI-backed playback bypasses platform parsing, even after an app restart.
Track downloadedPlaybackTrack(AudioDownloadTask task) {
  if (task.phase != AudioDownloadPhase.completed || task.uri.isEmpty) {
    throw const MusicPlatformException('歌曲尚未下载完成');
  }
  final uri = Uri.tryParse(task.uri);
  if (uri == null || !{'content', 'file'}.contains(uri.scheme)) {
    throw const MusicPlatformException('下载文件地址不可用，请重新下载');
  }
  return task.track.copyWith(audioAsset: task.uri, audioHeaders: const {}, isPreview: false);
}

final audioDownloadManagerProvider =''',1)
p.write_text(s,encoding='utf-8',newline='\n')
print('Independent SAF download storage and offline transport installed; old files preserved')
