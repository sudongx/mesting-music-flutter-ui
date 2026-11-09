"""Finalize local release records before the source snapshot is frozen."""
from pathlib import Path
import datetime
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-29-release113'

def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

def test_result(name):
    events = [json.loads(line) for line in (OUT / name).read_text(encoding='utf-8-sig').splitlines() if line.strip()]
    finished = [event for event in events if event['type'] == 'done'][-1]
    assert finished['success']
    assert not any(event['type'] == 'error' for event in events)
    return {
        'passed': sum(event['type'] == 'testDone' and not event.get('hidden') and not event.get('skipped') and event.get('result') == 'success' for event in events),
        'files': [event['suite']['path'].removeprefix('D:/AnLi/') for event in events if event['type'] == 'suite'],
        'success': True, 'log': str((OUT / name).relative_to(ROOT)).replace('\\', '/'),
    }

apk = load(ROOT / 'release/Mesting-Music-v1.0.13-verification.json')
notes = load(ROOT / 'assets/data/release-notes.json')
local_notes = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == local_notes['version'] == '1.0.13'
assert local_notes['notesCount'] == 8 and local_notes['productionReader']
assert 'No issues found!' in (OUT / 'analysis.txt').read_text(encoding='utf-8-sig')
stable_tests = test_result('stable-update-tests.jsonl')
beta_tests = test_result('beta-update-tests-final.jsonl')
prior = load(OUT / 'preserved-inputs.json')
for item in prior:
    file = ROOT / item['path']
    assert file.stat().st_size == item['size'], 'Preserved file changed size: ' + item['path']
    with file.open('rb') as source:
        assert hashlib.file_digest(source, 'sha256').hexdigest() == item['sha256'], 'Preserved file changed: ' + item['path']
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip() == 'deb68e4b4bad84d422085e4567d556b4441b5e48'
stamp = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat(timespec='seconds')
publish = {
    'appSlug': 'music', 'version': '1.0.13', 'androidVersionCode': 34,
    'packageName': apk['packageName'], 'appName': apk['appName'],
    'apkPath': 'D:/AnLi/release/Mesting-Music-v1.0.13.apk',
    'fileSize': apk['fileSize'], 'sha256': apk['sha256'],
    'certificateSha256': apk['certificateSha256'],
    'releaseNotes': notes['releaseNotes'],
    'adminUrl': 'https://download.csnas.asia/admin?page=apps',
    'readyForUserUpload': True, 'publicationOwner': 'user',
    'uploaded': False, 'published': False, 'publicReleaseVerified': False,
    'preparedAt': stamp,
}
save(ROOT / 'release/Mesting-Music-v1.0.13-publish.json', publish)
(ROOT / 'release/Mesting-Music-v1.0.13-release-notes.txt').write_text('\n'.join('- ' + line for line in notes['releaseNotes']) + '\n', encoding='utf-8')
validation = {
    'version': '1.0.13', 'androidVersionCode': 34, 'date': '2026-10-29',
    'status': 'local_release_preparation_only', 'preparedAt': stamp,
    'implementationEvidence': 'docs/validation-netease-full-2026-10-29.json',
    'implementationBetaRegression': {'passed': 887, 'files': 33},
    'implementationIndependentStableSearch': {'passed': 11},
    'finalCatalogueContracts': {'passed': 553},
    'releaseStableUpdateTests': stable_tests, 'releaseBetaUpdateTests': beta_tests,
    'testGroupsMayOverlap': True,
    'staticAnalysis': {'issues': 0, 'log': '.codex-artifacts/2026-10-29-release113/analysis.txt'},
    'apk': apk, 'localActualApkProductionNotesReader': local_notes,
    'preservedArtifactsAndConfigurations': {'count': len(prior), 'allByteIdentical': True},
    'sourceSnapshotVerification': 'release/Mesting-Music-v1.0.13-source-verification.json',
    'sourceSnapshotIsSeparateToAvoidSelfReference': True,
    'buildLog': '.codex-artifacts/2026-10-29-release113/build-release.log',
    'environment': {'flutter': '3.41.9', 'dart': '3.11.5', 'java': 'Temurin 17.0.20.1+1', 'target': 36, 'min': 24, 'ndk': '28.2.13676358', 'gradleWorkers': 1, 'gradleMaxHeapGiB': 3},
    'uploaded': False, 'published': False, 'publicReleaseVerified': False,
    'deviceAccess': False, 'physicalUpgradeTestPerformed': False,
    'gitCommitted': False, 'gitPushed': False,
    'userPublicationRequired': True,
}
save(ROOT / 'docs/validation-2026-10-29-v1.0.13.json', validation)
handoff = ROOT / 'docs/SESSION-HANDOFF-2026-10-29-v1.0.13.md'
text = handoff.read_text(encoding='utf-8')
text = text.replace('完整功能代码及主机验证已完成；本版构建与最终包校验正在准备，未上传或发布，未Git提交／推送。', '完整功能代码、主机验证和原签名APK构建已完成，包身份、结构及本地安装前说明读取通过。源码ZIP以相邻源码验证JSON及实际文件为准，未上传或发布，未Git提交／推送。')
text += f'''\n## 本地APK交付记录\n\n截至本机准备时间{stamp}，原签名Release包已核验：\n\n- APK：`release/Mesting-Music-v1.0.13.apk`，{apk['fileSize']:,}字节。\n- SHA-256：`{apk['sha256']}`。\n- 正式名称Mesting Music、包名com.mesting.music.beta、1.0.13/code34，原证书与历史版一致；v2/v3签名、双ARM、ZIP 16KiB、ARM64 ELF 16KiB及ARM32 ELF 4KiB对齐通过。\n- CRC、305项目录、AFP资源和MIT许可与源文件一致，QA字体与integration_test插件排除通过。\n- 生产`PublicApkReleaseNotes`从最终APK本地模拟Range读取8条说明，内置当前版本说明完全一致；{local_notes['rangeRequests']}次读取，共{local_notes['bytesRead']:,}字节。这没有访问网络，不代表music线上说明已核验。\n- 发布阶段普通更新{stable_tests['passed']}项、Beta更新{beta_tests['passed']}项通过，分析0问题；原有冻结产物、gradle.properties与依赖锁共{len(prior)}项逐字节保持。旧UI回归中的历史按钮定位已改为当前网易云登录入口，应用欢迎页未改变。\n\n源码目标：根目录`Mesting-Music-v1.0.13-source.zip`；逐文件清单在包内`SOURCE-SNAPSHOT.json`，最终整包大小与摘要在`release/Mesting-Music-v1.0.13-source-verification.json`与`.sha256`中。外部整包校验不进入自身快照。\n\n向music上传只选择APK。更新说明可直接复制`release/Mesting-Music-v1.0.13-release-notes.txt`，候选核对字段在`release/Mesting-Music-v1.0.13-publish.json`。本地核验汇总见`docs/validation-2026-10-29-v1.0.13.json`。当前没有上传、后台操作、公开发布或线上下载核验，不向后台上传源码或签名材料。\n'''
handoff.write_text(text, encoding='utf-8')
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-10-29-v1.0.13.md').write_text(f'''# 当前本机接续：Mesting Music 1.0.13 / code34\n\n先读[1.0.13本机接续](docs/SESSION-HANDOFF-2026-10-29-v1.0.13.md)、[修改](docs/fixes-2026-10-29-v1.0.13.md)、[安装验收](docs/INSTALL-v1.0.13.md)与`docs/validation-2026-10-29-v1.0.13.json`。\n\n用户已确认完整本地发布准备，稍后自行上传music。APK为`release/Mesting-Music-v1.0.13.apk`，{apk['fileSize']:,}字节，SHA-256 `{apk['sha256']}`。包名com.mesting.music.beta、正式名Mesting Music、原证书保持，签名、双ARM和16KiB对齐等包结构检查通过。没有使用手机或执行ADB，实际覆盖升级、账号与支付及一起听双端仍待用户验收。\n\n源码ZIP为`Mesting-Music-v1.0.13-source.zip`，逐文件清单在ZIP内，大小和SHA-256见`release/Mesting-Music-v1.0.13-source-verification.json`。签名、密码、本机配置、缓存和真实账号数据不进入源码。\n\n工程根D:/AnLi，beta / deb68e4，所有本轮修改和既有工作区保留，未提交／推送，旧版冻结产物不覆盖。未上传或发布，不关闭保留的music网页，不继续桌面内存优化。新会话先只读核对上述文件、Git和产物摘要，再等待用户新指令。\n''', encoding='utf-8')
print(json.dumps({'apkReadyForUserUpload': True, 'stableReleaseChecks': stable_tests['passed'], 'betaReleaseChecks': beta_tests['passed'], 'priorFilesUnchanged': len(prior), 'published': False}))
