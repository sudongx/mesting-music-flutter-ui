from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path('D:/AnLi')
src = root / '.codex-artifacts/2026-11-01-release131'
out = root / '.codex-artifacts/2026-11-01-release132'
for name in ['build_release.ps1', 'sign_and_verify.py', 'freeze_source.py',
             'verify_local_notes.dart', 'summarize.py', 'finish_artifacts.py']:
    text = (src / name).read_text(encoding='utf-8-sig')
    text = text.replace('1.0.30', 'PREVIOUS_VERSION').replace('1.0.31', '1.0.32').replace('PREVIOUS_VERSION', '1.0.31')
    text = text.replace('release131', 'release132').replace('MESTING131', 'MESTING132').replace('LocalV130', 'LocalV131')
    text = text.replace("'52'", "'53'").replace('== 52', '== 53').replace(': 52', ': 53').replace('VersionCode 52', 'VersionCode 53')
    text = text.replace("'frozenPreviousFilesUnchanged': 44", "'frozenPreviousFilesUnchanged': 46")
    if name == 'freeze_source.py':
        text = text.replace("required = {", "required = {'lib/features/app_update/data/release_notes_receipt.dart',\n"
            "'lib/features/app_update/presentation/release_history_page.dart',\n"
            "'test/release_132_notes_test.dart', 'test/release_132_search_swipe_test.dart',\n"
            "'test/support/release_132_qa.dart',\n")
    (out / name).write_text(text, encoding='utf-8')
files = sorted(set(json.loads((src / 'beta-files.json').read_text(encoding='utf-8-sig')) + [
    'test/release_132_notes_test.dart', 'test/release_132_search_swipe_test.dart',
]))
(out / 'beta-files.json').write_text(json.dumps(files, indent=2) + '\n', encoding='utf-8')
with zipfile.ZipFile(root / 'Mesting-Music-v1.0.31-source.zip') as archive:
    previous = {row['path']: row['sha256'] for row in json.loads(archive.read('SOURCE-SNAPSHOT.json'))['files']}
paths = subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=root).decode('utf-8').split('\0')
changed = [path for path in paths if path and (root / path).is_file() and
           hashlib.sha256((root / path).read_bytes()).hexdigest() != previous.get(path)]
(out / 'changes-from-v131.json').write_text(json.dumps(changed, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
(out / 'dart-changes.json').write_text(json.dumps([path for path in changed if path.startswith(('lib/', 'test/')) and path.endswith('.dart')], indent=2) + '\n', encoding='utf-8')
print({'betaFiles': len(files), 'changedDartFiles': sum(path.endswith('.dart') for path in changed)})
