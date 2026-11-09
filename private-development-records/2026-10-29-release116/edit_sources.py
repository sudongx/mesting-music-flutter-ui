from pathlib import Path
import shutil

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-29-release116'
for name in ['lib/features/music_platform/netease/netease_fallback.dart', 'lib/features/music_platform/netease/fallback/netease_fallback_source.dart', 'lib/features/music_platform/netease/fallback/netease_public_sources.dart', 'lib/features/music_platform/netease/netease_music_repository.dart', 'lib/core/audio/mesting_audio_handler.dart', 'assets/data/release-notes.json', 'lib/features/app_update/domain/release_history.dart', 'CHANGELOG.md', 'AGENTS.md', 'docs/CONTINUE-BETA.md']:
    path = root / name
    target = out / 'before' / name
    target.parent.mkdir(parents=True, exist_ok=True)
    if not target.exists(): shutil.copyfile(path, target)
path = root / 'lib/features/music_platform/netease/netease_fallback.dart'
text = path.read_text(encoding='utf-8')
start = text.index('class AnonymousKuwoFallback implements NeteaseFallbackSource {')
end = text.index('class NeteaseFallbackDiagnostics extends ChangeNotifier {', start)
text = text[:start] + '''/// Preserve the existing exported adapter name; its transport now follows the
/// anonymous mobile API instead of the failing desktop HTML search page.
class AnonymousKuwoFallback extends KuwoPublicSource {
  AnonymousKuwoFallback(super.client);
}

''' + text[end:]
path.write_text(text, encoding='utf-8')
