from pathlib import Path
p=Path('D:/AnLi/lib/features/downloads/audio_downloads.dart')
s=p.read_text('utf-8')
begin=s.index('  final restored = <AudioDownloadTask>[];',s.index('final audioDownloadManagerProvider'))
end=s.index('  final manager = AudioDownloadManager(',begin)
body=s[begin:end].replace("jsonDecode(preferences.getString('audio_download_tasks_v1') ?? '[]')",'jsonDecode(raw)')
assert 'preferences.' not in body
helper='''/// Persisted tasks are one device snapshot, not a frame-time UI operation.
List<AudioDownloadTask> _decodeDownloadSnapshot(String raw) {
'''+body+'''  return restored;
}

Future<List<AudioDownloadTask>> decodeAudioDownloadSnapshot(String raw) => raw.length < 128 * 1024
    ? Future.value(_decodeDownloadSnapshot(raw))
    : compute(_decodeDownloadSnapshot, raw, debugLabel: 'download-directory-restore');

String _encodeDownloadSnapshot(List<AudioDownloadTask> tasks) => jsonEncode(tasks.map((task) => task.toJson()).toList());
Future<String> encodeAudioDownloadSnapshot(List<AudioDownloadTask> tasks) => tasks.length < 100
    ? Future.value(_encodeDownloadSnapshot(tasks))
    : compute(_encodeDownloadSnapshot, tasks, debugLabel: 'download-directory-write');

'''
s=s[:begin]+'''  final raw = preferences.getString('audio_download_tasks_v1') ?? '[]';
  final largeSnapshot = raw.length >= 128 * 1024;
  final restored = largeSnapshot ? <AudioDownloadTask>[] : _decodeDownloadSnapshot(raw);
'''+s[end:]
s=s.replace("jsonEncode(tasks.map((t) => t.toJson()).toList()),",'await encodeAudioDownloadSnapshot(tasks),')
needle='  ref.listen(platformAccountProvider, (before, after) {'
assert needle in s
s=s.replace(needle,'''  if (largeSnapshot) unawaited(manager.restoreSnapshot(decodeAudioDownloadSnapshot(raw)));
'''+needle,1)
idx=s.index('final audioDownloadManagerProvider')
s=s[:idx]+helper+s[idx:]
p.write_text(s,'utf-8')
