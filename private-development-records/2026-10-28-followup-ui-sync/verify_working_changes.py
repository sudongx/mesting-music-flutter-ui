"""Audit approved changes against frozen 1.0.9 without changing Git or releases."""
from datetime import datetime, timezone
import difflib
import hashlib
import json
from pathlib import Path
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-28-followup-ui-sync'
RELEASE = ROOT / '.codex-artifacts/2026-10-28-release109'
def sha(path):
    digest = hashlib.sha256()
    with Path(path).open('rb') as file:
        while chunk := file.read(1024 * 1024): digest.update(chunk)
    return digest.hexdigest().upper()
def read(path):
    return json.loads(Path(path).read_text(encoding='utf-8-sig'))

expected_modified = set('''AGENTS.md
HANDOFF-CURRENT-SESSION-2026-10-28-v1.0.9.md
docs/CONTINUE-BETA.md
lib/features/auth/presentation/beta_onboarding_page.dart
lib/features/experience/presentation/floating_playback_pill.dart
lib/features/local_music/presentation/local_music_page.dart
lib/features/music_platform/data/platform_explore.dart
lib/features/music_platform/listening_sync/listening_sync_repository.dart
lib/features/music_platform/listening_sync/listening_sync_store.dart
lib/features/music_platform/listening_sync/listening_sync_worker.dart
lib/features/music_platform/presentation/platform_search_landing.dart
lib/features/queue/presentation/beta_playback_queue.dart
lib/features/settings/presentation/settings_page.dart
lib/shared/widgets/beta_glass_action.dart
lib/shared/widgets/beta_glass_controls.dart
test/beta10_entry_test.dart
test/release_107_listening_sync_test.dart
test/release_107_local_music_test.dart
third_party/liquid_glass_widgets/MESTING_PATCHES.md
third_party/liquid_glass_widgets/package/lib/src/engine/glass_drag_builder.dart
third_party/liquid_glass_widgets/package/lib/src/engine/stretch.dart
third_party/liquid_glass_widgets/package/lib/widgets/interactive/glass_button.dart'''.splitlines())
expected_new = set('''HANDOFF-CURRENT-SESSION-2026-10-28-UI-SCENE-SYNC.md
docs/BETA-CONTROL-CONVENTIONS.md
docs/fixes-2026-10-28-ui-scene-sync.md
docs/kugou-listening-sync-investigation-2026-10-28.md
lib/features/experience/presentation/playback_pill_track_motion.dart
test/followup_controls_regression_test.dart
test/scene_catalog_contract_test.dart'''.splitlines())
preserved = read(RELEASE / 'preserved-frozen.json')['unchanged']
apk = read(RELEASE / 'apk-verification.json')
source = read(RELEASE / 'source-verification.json')
preserved += [{'Path':apk['delivery'],'Hash':apk['sha256']}, {'Path':source['sourceZip'],'Hash':source['sha256']}]
for item in preserved: assert sha(item['Path']) == item['Hash'], item['Path']
modified, missing, diff = [], [], []
with zipfile.ZipFile(source['sourceZip']) as archive:
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    base = {item['path']:item for item in snapshot['files']}
    for rel, item in base.items():
        path = ROOT / rel
        if not path.is_file(): missing.append(rel); continue
        if sha(path).lower() != item['sha256']:
            modified.append(rel)
            if rel.endswith(('.md','.dart')):
                diff.extend(difflib.unified_diff(archive.read(rel).decode('utf-8-sig').splitlines(True), path.read_text(encoding='utf-8-sig').splitlines(True), fromfile='frozen109/'+rel, tofile='working/'+rel))
paths = set(p for p in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf-8').split('\0') if p)
new = paths - set(base)
unexpected_modified = set(modified) - expected_modified
unexpected_new = new - expected_new
assert not missing, missing
assert not unexpected_modified, sorted(unexpected_modified)
assert not unexpected_new, sorted(unexpected_new)
assert set(modified) == expected_modified
assert new == expected_new
head = subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
branch = subprocess.check_output(['git','branch','--show-current'],cwd=ROOT,text=True).strip()
assert branch == 'beta' and head == 'dbc5e78d05570c26f56fe5c5773245737a464a5f'
for log in ['visual-final.log','regression-final.log']:
    assert 'All tests passed!' in (OUT/log).read_text(encoding='utf-8-sig'), log
assert 'No issues found!' in (OUT/'analyze-final2.log').read_text(encoding='utf-8-sig')
assert len(read(OUT/'scene-production-replay.json')['scenes']) == 11
result = {'checkedAtUtc':datetime.now(timezone.utc).isoformat(), 'baseRelease':'1.0.9/code30',
          'comparedFrozenFiles':len(base),'modifiedFromFrozen':sorted(modified),'newSourceFiles':sorted(new),
          'missingFrozenFiles':missing,'unexpectedModified':sorted(unexpected_modified),'unexpectedNew':sorted(unexpected_new),
          'preservedHistoricalFiles':preserved,'branch':branch,'head':head,'screens':len(list((OUT/'screens').rglob('*.png'))),
          'tests':{'targetedAndLiveReplay':28,'regression':126,'analyzer':'no_issues'},
          'deviceAccess':False,'realAccountReadsOrWrites':False,'newVersionBuiltOrPublished':False}
(OUT/'working-change-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'changes-vs109.diff').write_text(''.join(diff),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
