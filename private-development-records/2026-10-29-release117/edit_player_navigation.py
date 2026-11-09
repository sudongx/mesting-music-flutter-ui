from pathlib import Path
r=Path('D:/AnLi')
p=r/'lib/core/audio/mesting_audio_handler.dart';s=p.read_text(encoding='utf-8')
s=s.replace('  int _queueLoadEpoch = 0;', '''  int _queueLoadEpoch = 0;
  // Logical selection is visible while transport is still resolving. Mask old
  // native events so they cannot become progress/history for the new song.
  int? _pendingQueueEpoch;''',1)
a=s.index('    final resolver = _trackPlaybackResolver;',s.index('  Future<bool> _loadQueue('));b=s.index('    return true;\n  }',a)+len('    return true;')
body=s[a:b]
body=body.replace('    // Commit metadata only after all asynchronous source preparation succeeds.','    // Refine the selected metadata with the resolved source, keeping its identity.')
body=body.replace('    _resetConsumptionConfirmation();\n    _completionGate.reset();\n','')
body=body.replace('    _publishUpcomingQueue();\n    // The native engine', '''    _pendingQueueEpoch = null;
    _broadcastState(_player.playbackEvent);
    _publishUpcomingQueue();
    // The native engine''',1)
body=body.replace('    if (_continueAfterExplicitQueue) {\n      _recordPlaybackHistory(orderedTracks.first);\n    }','    _recordPlaybackHistory(orderedTracks.first);',1)
prefix='''    _pendingQueueEpoch = loadEpoch;
    _resetConsumptionConfirmation();
    _completionGate.reset();
    // Stop is issued before any network work. Publish loading before changing
    // identity so listening reporters never attribute the old audio to it.
    final stopped = _player.stop();
    _broadcastState(_player.playbackEvent);
    _tracks = orderedTracks;
    final selectedItems = orderedTracks.map((t) => t.toMediaItem()).toList();
    queue.add(selectedItems);
    _upcomingMediaItems = selectedItems.skip(1).toList(growable: false);
    mediaItem.add(selectedItems.first);
    _publishUpcomingQueue();
    try {
      await stopped;
      if (!isCurrent()) return false;
'''
s=s[:a]+prefix+'\n'.join('  '+line for line in body.splitlines())+'''
    } catch (_) {
      if (isCurrent()) {
        _pendingQueueEpoch = null;
        playbackState.add(playbackState.value.copyWith(
          processingState: AudioProcessingState.error,
          playing: false,
          updatePosition: Duration.zero,
          errorMessage: '歌曲加载失败，请重试或选择其他音源',
        ));
      }
      rethrow;
    }
'''+s[b:]
s=s.replace('    if (_refreshingSource) return;','    if (_refreshingSource || _pendingQueueEpoch != null) return;',1)
s=s.replace('''    if (!_player.playing ||
        currentId == null''','''    if (_pendingQueueEpoch != null ||
        _player.processingState != ProcessingState.ready ||
        !_player.playing ||
        currentId == null''',1)
s=s.replace('  void _handleDuration(Duration? duration) {','  void _handleDuration(Duration? duration) {\n    if (_pendingQueueEpoch != null) return;',1)
s=s.replace('''      if (state == ProcessingState.completed) {
        if (_sleepStoppedAtCompletion) return;''','''      if (state == ProcessingState.completed) {
        if (_sleepStoppedAtCompletion || _pendingQueueEpoch != null) return;''',1)
s=s.replace('''        processingState: switch (_player.processingState) {''','''        processingState: _pendingQueueEpoch != null ? AudioProcessingState.loading : switch (_player.processingState) {''',1)
s=s.replace('''        playing: _player.playing,
        updatePosition: _player.position,
        bufferedPosition: _player.bufferedPosition,''','''        playing: _pendingQueueEpoch == null && _player.playing,
        updatePosition: _pendingQueueEpoch != null ? Duration.zero : _player.position,
        bufferedPosition: _pendingQueueEpoch != null ? Duration.zero : _player.bufferedPosition,''',1)
p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/shared/widgets/beta_scroll_behavior.dart';p.write_text('''import 'package:flutter/material.dart';

/// StretchingOverscrollIndicator isolates its child in an ImageFilter pass.
/// Glass inside that pass cannot sample a Scaffold outside it, producing a
/// dark lens in light mode. Native bouncing keeps the same backdrop and full
/// optical effect while preserving overscroll motion throughout Beta pages.
class BetaScrollBehavior extends MaterialScrollBehavior {
  const BetaScrollBehavior();
  @override
  ScrollPhysics getScrollPhysics(BuildContext context) =>
      const AlwaysScrollableScrollPhysics(parent: BouncingScrollPhysics());
  @override
  Widget buildOverscrollIndicator(BuildContext context, Widget child,
      ScrollableDetails details) => child;
}
''',encoding='utf-8',newline='\n')
p=r/'lib/app/mesting_music_app.dart';s=p.read_text(encoding='utf-8');s="import '../shared/widgets/beta_scroll_behavior.dart';\n"+s
s=s.replace('''      debugShowCheckedModeBanner: false,''','''      debugShowCheckedModeBanner: false,
      scrollBehavior: DistributionChannel.isBeta ? const BetaScrollBehavior() : null,''',1)
s=s.replace('''builder: (context, child) => SystemBackCoordinator(
        child:''','''builder: (context, child) => SystemBackCoordinator(
        canPop: appRouter.canPop,
        child:''',1);p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/app/system_back_coordinator.dart';s=p.read_text(encoding='utf-8');s=s.replace('const SystemBackCoordinator({required this.child, super.key});','const SystemBackCoordinator({required this.child, this.canPop, super.key});\n\n  final bool Function()? canPop;')
s=s.replace('SystemNavigator.setFrameworkHandlesBack(canHandlePop)','SystemNavigator.setFrameworkHandlesBack(canHandlePop || (widget.canPop?.call() ?? false))')
s=s.replace('''          // WidgetsApp still owns normal route-change reporting. This boundary
          // only adds synchronization when the native window resumes.
          return false;''','''          // A nested Shell navigator can report false while a root pageless
          // detail is open. Reconcile both stacks after this frame and consume
          // the notification so WidgetsApp cannot publish the nested false.
          WidgetsBinding.instance.addPostFrameCallback((_) => _synchronize());
          return true;''')
p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/shared/widgets/beta_page_motion.dart';s=p.read_text(encoding='utf-8');s="import 'beta_edge_back.dart';\n"+s;s=s.replace('pageBuilder: (_, _, _) => page,','pageBuilder: (_, _, _) => BetaEdgeBack(child: page),')
s=s.replace('''    child: child,
  );''','''    child: BetaEdgeBack(child: child),
  );''');p.write_text(s,encoding='utf-8',newline='\n')
p=r/'lib/features/music_platform/presentation/platform_design.dart';s=p.read_text(encoding='utf-8');s=s.replace('''              Expanded(child: child),''','''              // Keep an opaque backdrop in the same scroll compositing pass.
              Expanded(child: ColoredBox(color: Theme.of(context).colorScheme.surface, child: child)),''',1);p.write_text(s,encoding='utf-8',newline='\n')
print('Immediate selection, source-event guard, shared scroll and nested-back reconciliation implemented')
