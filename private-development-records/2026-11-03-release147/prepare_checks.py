from pathlib import Path
import json
root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release147'
files = json.loads((root / '.codex-artifacts/2026-11-03-release146/beta-files.json').read_text('utf-8-sig'))
files += [p.relative_to(root).as_posix() for p in (root/'test').glob('release_147_*test.dart')]
for name in ['chat_message_actions_test.dart','saved_messages_page_test.dart','social_repository_test.dart','library_cloud_persistence_test.dart','local_library_integrity_test.dart']:
    files.append('test/'+name)
files = sorted(set(files))
assert all((root/p).is_file() for p in files)
(out/'beta-files.json').write_text(json.dumps(files,indent=2)+'\n','utf-8')
print(len(files), 'complete Beta files selected, with paths verified')
