from pathlib import Path
import datetime
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-29-release115'
def load(path): return json.loads(path.read_text(encoding='utf-8-sig'))
def save(path, value): path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
def digest(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream, 'sha256').hexdigest()
def tests(name):
    events = []
    for line in (OUT / name).read_text(encoding='utf-8-sig').splitlines():
        try: event = json.loads(line)
        except json.JSONDecodeError: continue
        if isinstance(event, dict) and 'type' in event: events.append(event)
    assert [event for event in events if event['type'] == 'done'][-1]['success'], name
    assert not any(event['type'] == 'error' for event in events), name
    return {
        'passed': sum(event['type'] == 'testDone' and not event.get('hidden') and not event.get('skipped') and event.get('result') == 'success' for event in events),
        'files': [event['suite']['path'].replace('D:/AnLi/', '') for event in events if event['type'] == 'suite'],
        'log': (OUT / name).relative_to(ROOT).as_posix(), 'success': True,
    }

apk = load(ROOT / 'release/Mesting-Music-v1.0.15-verification.json')
notes = load(ROOT / 'assets/data/release-notes.json')
reader = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == reader['version'] == '1.0.15'
assert apk['androidVersionCode'] == notes['versionCode'] == reader['versionCode'] == 36
assert len(notes['releaseNotes']) == reader['notesCount'] == 8
assert 'No issues found!' in (OUT / 'analysis.txt').read_text(encoding='utf-8-sig')
regression = tests('regression-tests.jsonl')
feature = tests('final-feature-tests.jsonl')
stable = tests('stable-update-tests.jsonl')
assert (regression['passed'], feature['passed'], stable['passed']) == (937, 46, 10)
before = load(OUT / 'frozen-before.json')
for item in before:
    path = Path(item['path'])
    assert path.stat().st_size == item['bytes'] and digest(path) == item['sha256'], item['path']
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip() == 'deb68e4b4bad84d422085e4567d556b4441b5e48'
assert subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip() == 'beta'
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT, text=True).strip()
probes = load(OUT / 'public-probes.json')
assert not probes['accountCredentialsSent']
assert any(row.get('source', '').startswith('BugPk') and row.get('probeAudio') for row in probes['sources'])
stamp = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat(timespec='seconds')
validation = {
    'version': '1.0.15', 'androidVersionCode': 36, 'date': '2026-10-29', 'preparedAt': stamp,
    'status': 'local_release_ready_for_user_upload',
    'implementation': 'docs/NETEASE-SOURCES-2026-10-29-v1.0.15.md',
    'betaRegression': regression, 'finalChangedFeatureRegression': feature,
    'independentStableUpdateRegression': stable, 'groupsOverlapDoNotAdd': True,
    'staticAnalysis': {'issues': 0, 'log': (OUT / 'analysis.txt').relative_to(ROOT).as_posix()},
    'uiEvidence': {'rendered': len(list((OUT / 'ui').glob('*.png'))), 'visuallyReviewedRepresentativeScreens': 6, 'narrowWidth': 320, 'textScale': 1.5, 'lightAndDark': True, 'heldDragCancelVerified': True, 'physicalDevice': False, 'desktopQaFontsPackaged': False},
    'anonymousProductionProbes': probes,
    'sourceStatus': {'kugou': 'reused_anonymous_android_adapter', 'kuwo': 'anonymous_sample_no_results', 'bilibili': 'anonymous_search_responded_no_same_song_candidate', 'bilivideo': 'anonymous_wbi_search_responded_candidate_rejected_by_recording_match', 'gdstudio': 'disabled_400_unsupported_source_and_403_access_denied', 'bodian': 'disabled_ad_completion_chain_not_ported', 'youtube': 'disabled_region_and_dynamic_signature_not_validated', 'bugpk': 'anonymous_exact_id_sample_https_audio_range_passed'},
    'apk': apk, 'localActualApkNotesReader': reader,
    'preservedArtifactsAndLock': {'entries': len(before), 'uniquePaths': len({item['path'] for item in before}), 'allByteIdentical': True},
    'sourceSnapshotVerification': 'release/Mesting-Music-v1.0.15-source-verification.json',
    'sourceVerificationSeparateToAvoidSelfReference': True,
    'upstream': {'repository': 'https://github.com/UnblockNeteaseMusic/server', 'revision': '1d64281c0fae81a4e3cf21f176706b0baa3a606d', 'license': 'LGPL-3.0-only', 'correspondingDartSourceAndLicenseIncluded': True, 'nodeRuntimeIncluded': False, 'personalProviderCredentialsUsed': False},
    'buildLog': (OUT / 'build-release.log').relative_to(ROOT).as_posix(),
    'environment': {'flutter': '3.41.9', 'dart': '3.11.5', 'java': 'Temurin 17.0.20.1+1', 'minSdk': 24, 'targetSdk': 36, 'ndk': '28.2.13676358', 'gradleWorkers': 1, 'gradleMaxHeapGiB': 3},
    'serverMembershipChanged': False, 'memberOnlyRealAccountTracksVerified': False,
    'officialTogetherInteroperabilityVerified': False, 'physicalUpgradeTestPerformed': False,
    'deviceAccess': False, 'uploaded': False, 'published': False, 'publicReleaseVerified': False,
    'gitCommitted': False, 'gitPushed': False, 'userPublicationRequired': True,
}
save(ROOT / 'docs/validation-2026-10-29-v1.0.15.json', validation)
publish = {
    'appSlug': 'music', 'version': '1.0.15', 'androidVersionCode': 36,
    'packageName': apk['packageName'], 'appName': apk['appName'],
    'apkPath': (ROOT / 'release' / apk['file']).as_posix(), 'fileSize': apk['fileSize'],
    'sha256': apk['sha256'], 'certificateSha256': apk['certificateSha256'],
    'releaseNotes': notes['releaseNotes'], 'adminUrl': 'https://download.csnas.asia/admin?page=apps',
    'readyForUserUpload': True, 'publicationOwner': 'user', 'uploaded': False,
    'published': False, 'publicReleaseVerified': False, 'preparedAt': stamp,
}
save(ROOT / 'release/Mesting-Music-v1.0.15-publish.json', publish)
(ROOT / 'release/Mesting-Music-v1.0.15-release-notes.txt').write_text('\n'.join(notes['releaseNotes']) + '\n', encoding='utf-8')
handoff = ROOT / 'docs/SESSION-HANDOFF-2026-10-29-v1.0.15.md'
text = handoff.read_text(encoding='utf-8').split('\n## 最终本机交付\n')[0].replace('实现已进入本机回归及交付准备；最终实际 APK 与源码快照以本版相邻 verification JSON 为准。', '实现、主机回归、原签名 APK 构建及实际包核验已完成；源码快照以本版相邻 source-verification JSON 为准。')
text += f'''\n## 最终本机交付\n\n准备时间 {stamp}。最终 APK 为 `release/{apk['file']}`，{apk['fileSize']:,} 字节，SHA-256 `{apk['sha256']}`。包内 1.0.15/code36、正式名、原证书、v2/v3、双 ARM、ZIP/ELF 对齐、包内8条说明和第三方许可均核验通过。\n\n36个文件937项主机回归、最终4文件46项及普通更新10项通过，组间重叠不相加。静态分析0问题。UI渲染{validation['uiEvidence']['rendered']}张，检查浅深色、320宽/1.5倍字及玻璃起手滚动取消。生产Range读取器从最终APK本地读取8条说明，{reader['rangeRequests']}次、{reader['bytesRead']:,}字节，无网络。\n\n匿名样本中BugPk回退到HTTPS网易CDN，仅读首1024字节；B站检索可响应但样本未通过同曲检查，酷我样本无结果；GD Studio拒绝/访问受限。没有读取真实账号、代测会员专属歌曲、访问手机或进行官版双端验收。旧冻结产物及锁文件{len(before)}条记录逐字节保持。\n\n由用户自行上传此APK，说明复制 `release/Mesting-Music-v1.0.15-release-notes.txt`，字段见 publish JSON。本轮未上传或发布，未提交或推送。源码ZIP逐文件清单和摘要见本版 source-verification JSON。\n'''
handoff.write_text(text, encoding='utf-8')
print(json.dumps({'apkReady': True, 'betaPassed': regression['passed'], 'finalFeaturePassed': feature['passed'], 'stablePassed': stable['passed'], 'preservedEntries': len(before), 'published': False}))
