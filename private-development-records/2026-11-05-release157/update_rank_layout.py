"""Apply the user's reference masthead to the already-authorized chart page."""
from pathlib import Path
p=Path('D:/AnLi/lib/features/music_platform/presentation/platform_ranking_header.dart')
s=p.read_text('utf-8')
s=s.replace("import 'package:go_router/go_router.dart';", "import 'package:go_router/go_router.dart';\nimport 'package:liquid_glass_widgets/liquid_glass_widgets.dart';\nimport '../../../shared/widgets/beta_glass_action.dart';")
s=s.replace('bool _reading = false, _playing = false, _saving = false;', 'bool _reading = false, _playing = false, _saving = false, _downloading = false;\n  bool get _busy => _playing || _saving || _downloading;')
s=s.replace('if (!_current || _playing || _saving) return;', 'if (!_current || _busy) return;')
s=s.replace('if (!_current || _saving || _playing) return;', 'if (!_current || _busy) return;')
start=s.index('  @override\n  Widget build(BuildContext context) {')
s=s[:start]+r'''
  Future<void> _download() async {
    if (!_current || _busy) return;
    setState(() => _downloading = true);
    try {
      final all = await _complete();
      if (mounted && _current) await enqueueAudioDownloads(context, ref, all);
    } catch (error) {
      if (mounted && _current) showPlatformFailure(context, error);
    } finally {
      if (mounted) setState(() => _downloading = false);
    }
  }

  void _details() {
    if (_info == null) { unawaited(_read()); return; }
    showLiquidGlassBottomSheet<void>(context: context, useRootNavigator: true, useSafeArea: true,
      builder: (sheet) => SingleChildScrollView(padding: const EdgeInsets.all(24), child: Column(
        crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
          Text(widget.item.title, style: Theme.of(sheet).textTheme.titleLarge),
          const SizedBox(height: 16), Text(_info!.description.isEmpty ? '平台暂未提供榜单介绍' : _info!.description),
          if (!_netease) const Padding(padding: EdgeInsets.only(top: 12), child: Text('收藏保留本期歌曲，之后可在酷狗云歌单中管理。')),
        ])));
  }

  @override
  Widget build(BuildContext context) {
    ref.watch(platformAccountProvider);
    ref.listen(platformAccountProvider, (before, after) {
      if (before?.value?.ownerId != after.value?.ownerId || before?.value?.token != after.value?.token) {
        _revoked = true;
      }
    });
    if (!_current) return const SizedBox.shrink();
    final total = _info?.total ?? widget.total;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _RankingMasthead(
        title: widget.item.title, platform: _owner!.platform,
        cover: _info?.cover ?? widget.item.cover, updatedAt: _info?.updatedAt,
        period: _info?.period ?? '',
        onSearch: () => GoRouter.maybeOf(context)?.push('/music/search'), onDetails: _details,
        actions: [
          _RankingPillAction(id: 'save', label: _saving ? '收藏中' : _netease ? (_subscribed == true ? '已收藏' : '收藏') : '收藏本期',
            icon: _subscribed == true && _netease || _snapshotId != null ? Icons.library_add_check_outlined : Icons.library_add_outlined,
            count: _info?.collections, onPressed: _busy ? null : () => unawaited(_save())),
          _RankingPillAction(id: 'comments', label: _netease ? '评论' : '歌单评论', icon: Icons.chat_bubble_outline,
            count: _info?.comments, onPressed: _busy ? null : () => unawaited(_comments())),
          _RankingPillAction(id: 'share', label: '分享', icon: Icons.share_outlined,
            count: _info?.shares, onPressed: _busy ? null : () => unawaited(_share())),
        ],
      ),
      if (_error != null) Padding(padding: const EdgeInsets.symmetric(horizontal: 22),
        child: TextButton(onPressed: _reading ? null : _read, child: Text(_error!))),
      Padding(padding: const EdgeInsets.fromLTRB(16, 10, 16, 12), child: Row(children: [
        Expanded(child: TextButton(
          key: const ValueKey('ranking-play-all'), onPressed: widget.tracks.isEmpty || _busy ? null : _play,
          style: TextButton.styleFrom(alignment: Alignment.centerLeft, padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 10)),
          child: Row(children: [
            Container(width: 26, height: 26, decoration: BoxDecoration(shape: BoxShape.circle,
              color: BetaAppearance.playbackAction(Theme.of(context).brightness)),
              child: _playing ? const BetaActivityIndicator(color: Colors.white, radius: 8)
                : const Icon(Icons.play_arrow_rounded, size: 21, color: Colors.white)),
            const SizedBox(width: 12),
            Flexible(child: Text.rich(TextSpan(children: [
              TextSpan(text: _playing ? '读取完整榜单' : '播放全部'),
              if (total != null) TextSpan(text: '（$total）', style: TextStyle(fontSize: 14, color: Theme.of(context).colorScheme.onSurfaceVariant)),
            ]), style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: Theme.of(context).colorScheme.onSurface))),
          ]))),
        if (_downloading) const Padding(padding: EdgeInsets.all(14), child: BetaActivityIndicator())
        else BetaGlassAction(label: '下载完整榜单', icon: Icons.download_outlined, blue: false,
          onPressed: _busy || widget.tracks.isEmpty ? null : () => unawaited(_download())),
      ])),
    ]);
  }
}

/// Presentation-only masthead: official update dates and counts are supplied by
/// the repository, never synthesized from the local clock or loaded row count.
class _RankingMasthead extends StatelessWidget {
  const _RankingMasthead({required this.title, required this.platform, required this.cover,
    required this.period, required this.actions, required this.onSearch, required this.onDetails, this.updatedAt});
  final String title, cover, period;
  final MusicPlatform platform;
  final DateTime? updatedAt;
  final List<_RankingPillAction> actions;
  final VoidCallback onSearch, onDetails;
  @override
  Widget build(BuildContext context) {
    final netease = platform == MusicPlatform.netease;
    final updated = updatedAt;
    final date = updated != null ? '${updated.month}月${updated.day}日更新' : period.isNotEmpty ? '第$period期' : '官方榜单';
    final theme = Theme.of(context);
    final top = MediaQuery.paddingOf(context).top;
    return Theme(data: theme.copyWith(
      colorScheme: theme.colorScheme.copyWith(onSurface: Colors.white, onSurfaceVariant: Colors.white70),
      iconTheme: const IconThemeData(color: Colors.white)), child: Padding(
        padding: const EdgeInsets.only(bottom: 26),
        child: Stack(clipBehavior: Clip.none, children: [
          SizedBox(width: double.infinity, child: Stack(children: [
            Positioned.fill(child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(
              begin: Alignment.topLeft, end: Alignment.bottomRight,
              colors: netease ? const [Color(0xFF8E292F), Color(0xFFAC4C53)] : const [Color(0xFF144F70), Color(0xFF367C95)])))),
            if (cover.isNotEmpty) Positioned.fill(child: Opacity(opacity: .16,
              child: ArtworkImage(uri: cover, fit: BoxFit.cover))),
            Padding(padding: EdgeInsets.fromLTRB(20, top + 10, 20, 50), child: Column(children: [
              Row(children: [const BetaGlassBackButton(), const Spacer(),
                BetaGlassAction(label: '搜索歌曲', icon: Icons.search_rounded, blue: false, onPressed: onSearch),
                const SizedBox(width: 8), BetaGlassAction(label: '榜单介绍', icon: Icons.more_vert, blue: false, onPressed: onDetails)]),
              const SizedBox(height: 12),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                const Icon(Icons.music_note_rounded, size: 17, color: Colors.white70), const SizedBox(width: 4),
                Text(netease ? '网易云音乐' : '酷狗音乐', style: const TextStyle(fontSize: 13, color: Colors.white70)),
              ]),
              const SizedBox(height: 16),
              Text(title, key: const ValueKey('ranking-masthead-title'), textAlign: TextAlign.center, maxLines: 2,
                overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 42, height: 1.12, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: -1)),
              const SizedBox(height: 18),
              Text(date, style: const TextStyle(fontSize: 13, color: Colors.white70, fontWeight: FontWeight.w600)),
            ])),
          ])),
          Positioned(left: 22, right: 22, bottom: -26, child: _RankingActionCapsule(actions: actions)),
        ])));
  }
}

class _RankingPillAction {
  const _RankingPillAction({required this.id, required this.label, required this.icon, this.count, this.onPressed});
  final String id, label;
  final IconData icon;
  final int? count;
  final VoidCallback? onPressed;
  String get caption => count == null ? label : count! >= 100000000
    ? '${(count! / 100000000).toStringAsFixed(1)}亿'
    : count! >= 10000 ? '${(count! / 10000).toStringAsFixed(1)}万' : '$count';
}

/// One shared glass lens matches the reference's compact, divided capsule.
/// At large text sizes it scrolls horizontally so captions keep their text
/// scale and every action remains reachable instead of shrinking or clipping.
class _RankingActionCapsule extends StatelessWidget {
  const _RankingActionCapsule({required this.actions});
  final List<_RankingPillAction> actions;
  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, constraints) {
    final scaler = MediaQuery.textScalerOf(context);
    final widths = <double>[];
    for (final action in actions) {
      final painter = TextPainter(text: TextSpan(text: action.caption, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600)),
        textScaler: scaler, textDirection: Directionality.of(context))..layout();
      widths.add((painter.width + 48).clamp((constraints.maxWidth - 2) / 3, double.infinity)); painter.dispose();
    }
    final height = (scaler.scale(12) + 30).clamp(52, double.infinity);
    return RepaintBoundary(child: GlassContainer(useOwnLayer: true, quality: GlassQuality.premium,
      shape: const LiquidRoundedRectangle(borderRadius: 40),
      settings: betaNeutralActionGlass(context).copyWith(glassColor: const Color(0xF239393F)),
      child: ClipRRect(borderRadius: BorderRadius.circular(40), child: SingleChildScrollView(scrollDirection: Axis.horizontal,
        child: Row(children: [for (var i = 0; i < actions.length; i++) ...[
          if (i > 0) Container(width: 1, height: 22, color: Colors.white24),
          BetaGlassButton(key: ValueKey('ranking-action-${actions[i].id}'), label: '${actions[i].label}${actions[i].count == null ? '' : '，${actions[i].count}'}',
            width: widths[i], height: height, horizontalPadding: 8, embeddedInPill: true,
            onPressed: actions[i].onPressed,
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(actions[i].icon, size: 20, color: Colors.white), const SizedBox(width: 6),
              Text(actions[i].caption, style: const TextStyle(fontSize: 12, color: Colors.white, fontWeight: FontWeight.w600)),
            ])),
        ]])))));
  });
}
'''
p.write_text(s,'utf-8')
