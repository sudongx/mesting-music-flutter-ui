from pathlib import Path

root = Path('D:/AnLi')
prior = root / '.codex-artifacts/2026-10-29-release114'
out = root / '.codex-artifacts/2026-10-29-release115'
for name in ['build-release.ps1', 'sign_delivery.py', 'verify_delivery.py', 'freeze_source.py', 'verify_local_notes.dart']:
    text = (prior / name).read_text(encoding='utf-8-sig')
    text = text.replace('2026-10-29-release114', '2026-10-29-release115').replace('1.0.14', '1.0.15').replace('MESTING114_', 'MESTING115_')
    for old, new in [
        ("-VersionCode 35", "-VersionCode 36"),
        ("versionCode='35'", "versionCode='36'"),
        ("notes['versionCode'] == 35", "notes['versionCode'] == 36"),
        ("'androidVersionCode': 35", "'androidVersionCode': 36"),
        ("'versionCode': 35", "'versionCode': 36"),
        ("versionCode: 35", "versionCode: 36"),
        ("'code': 35", "'code': 36"),
    ]: text = text.replace(old, new)
    if name == 'verify_delivery.py':
        text = text.replace("'third_party/netease_protocol/afp/LICENSE',", "'third_party/netease_protocol/afp/LICENSE',\n    'third_party/unblock_netease/COPYING', 'third_party/unblock_netease/COPYING.LESSER', 'third_party/unblock_netease/NOTICE.md',")
        text = text.replace("'neteaseLicenseAndNoticePackaged': True", "'neteaseLicenseAndNoticePackaged': True, 'unblockLicenseAndNoticePackaged': True")
        text = text.replace("historical com.mesting.music.beta certificate, including local 1.0.10 and archived 1.0.12 record", "frozen local 1.0.13 and 1.0.14 package identity and retained original certificate")
    (out / name).write_text(text, encoding='utf-8')
print('Prepared isolated 1.0.15 build, signing, verification and snapshot scripts')
