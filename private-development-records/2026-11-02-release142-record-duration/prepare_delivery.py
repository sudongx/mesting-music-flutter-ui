"""Reuse the reviewed local delivery flow with isolated v142 evidence paths."""
from pathlib import Path

root = Path('D:/AnLi')
old = root / '.codex-artifacts/2026-11-02-release141-type51'
out = Path(__file__).resolve().parent

def copy(name, replacements=()):
    target = out / name
    assert not target.exists(), target
    text = (old / name).read_text(encoding='utf-8')
    text = text.replace(old.name, out.name).replace('1.0.41', '1.0.42')
    text = text.replace('MESTING141', 'MESTING142')
    for source, destination in replacements:
        assert source in text, (name, source)
        text = text.replace(source, destination)
    target.write_text(text, encoding='utf-8')

copy('sign_and_verify.py', [
    ("versionCode='62'", "versionCode='63'"),
    ("notes['versionCode'] == 62", "notes['versionCode'] == 63"),
    ("'androidVersionCode': 62", "'androidVersionCode': 63"),
    ("'code': 62", "'code': 63"),
])
copy('build_release.ps1', [('-VersionCode 62', '-VersionCode 63')])
copy('verify_local_notes.dart', [
    ('versionCode: 62', 'versionCode: 63'),
    ("'versionCode': 62", "'versionCode': 63"),
])
copy('freeze_source.py', [
    ("'androidVersionCode':62", "'androidVersionCode':63"),
    ('version: 1.0.42+62', 'version: 1.0.42+63'),
    ("['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl']", "['beta-targeted.jsonl']"),
    ("'test/release_141_type51_message_test.dart',", "'test/release_141_type51_message_test.dart',\n              'lib/features/music_platform/netease/together/together_record.dart',"),
])
copy('finish_artifacts.py', [
    ("manifest['androidVersionCode']==62", "manifest['androidVersionCode']==63"),
    ("['versionCode']==62", "['versionCode']==63"),
    ("'androidCode':62", "'androidCode':63"),
    ("'beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'", "'beta-targeted.jsonl',"),
    ("'realAccountAcceptance':False,'historyTotalFixed':False", "'realAccountAcceptance':False,'neteaseProfileHistoryTotalFixed':False,\n    'togetherReportUsesSeconds':True,'togetherHistoryRetainsMilliseconds':True"),
])
print('Prepared isolated 1.0.42/code63 packaging and verification helpers.')
