"""Prepare isolated 1.0.41 helpers without altering old frozen build evidence."""
from pathlib import Path

root = Path('D:/AnLi')
old = root / '.codex-artifacts/2026-11-02-v140-fixes'
out = Path(__file__).resolve().parent

def copy(name, replacements=()):
    target = out / name
    assert not target.exists(), target
    text = (old / name).read_text(encoding='utf-8')
    text = text.replace('2026-11-02-v140-fixes', out.name)
    text = text.replace('1.0.40', '1.0.41').replace('MESTING140', 'MESTING141')
    for source, destination in replacements:
        assert source in text, (name, source)
        text = text.replace(source, destination)
    target.write_text(text, encoding='utf-8')

copy('sign_and_verify.py', [
    ("versionCode='61'", "versionCode='62'"),
    ("notes['versionCode'] == 61", "notes['versionCode'] == 62"),
    ("len(notes['releaseNotes']) == 5", "len(notes['releaseNotes']) == 3"),
    ("'androidVersionCode': 61", "'androidVersionCode': 62"),
    ("'bundledNotesCount': 5", "'bundledNotesCount': 3"),
    ("'code': 61", "'code': 62"),
    ("b'netease-together-message-card']", "b'netease-together-message-card', b'recordOrpheus', b'timeTitle', b'creatorAvatarUrl', b'acceptorAvatarUrl']"),
])
copy('build_release.ps1', [('-VersionCode 61', '-VersionCode 62')])
copy('summarize_checks.py')
copy('verify_local_notes.dart', [
    ('versionCode: 61', 'versionCode: 62'),
    ('expect(notes.length, 5)', 'expect(notes.length, 3)'),
    ("'versionCode': 61", "'versionCode': 62"),
])
copy('freeze_source.py', [
    ("'androidVersionCode':61", "'androidVersionCode':62"),
    ('version: 1.0.41+61', 'version: 1.0.41+62'),
    ("'test/release_139_listening_rollback_test.dart',", "'test/release_139_listening_rollback_test.dart',\n              'test/release_141_type51_message_test.dart',\n              'lib/features/music_platform/netease/messages/netease_message_card.dart',"),
])
copy('finish_artifacts.py', [
    ("manifest['androidVersionCode']==61", "manifest['androidVersionCode']==62"),
    ("['versionCode']==61", "['versionCode']==62"),
    ("'androidCode':61", "'androidCode':62"),
])
print('Prepared isolated 1.0.41/code62 build, signing, source and verification helpers.')
