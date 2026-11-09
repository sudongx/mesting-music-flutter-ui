from pathlib import Path
import datetime
import hashlib
import json
import subprocess

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-10-29-release116'
def read(path): return json.loads(path.read_text(encoding='utf-8-sig'))
def save(path,value): path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def digest(path):
    with path.open('rb') as f: return hashlib.file_digest(f,'sha256').hexdigest()
def tests(name):
    events=[]
    for line in (OUT/name).read_text(encoding='utf-8-sig').splitlines():
        try: event=json.loads(line)
        except json.JSONDecodeError: continue
        if isinstance(event,dict): events.append(event)
    assert [e for e in events if e.get('type')=='done'][-1]['success'], name
    assert not any(e.get('type')=='error' for e in events), name
    suite_paths={e['suite']['id']:e['suite']['path'].replace('D:/AnLi/','') for e in events if e.get('type')=='suite'}
    test_suites={e['test']['id']:e['test']['suiteID'] for e in events if e.get('type')=='testStart'}
    counts={p:0 for p in suite_paths.values()}
    for e in events:
        if e.get('type')=='testDone' and e.get('result')=='success' and not e.get('hidden') and not e.get('skipped'):
            counts[suite_paths[test_suites[e['testID']]]]+=1
    return {'passed':sum(counts.values()),'files':list(counts),'countsByFile':counts,'log':(OUT/name).relative_to(ROOT).as_posix(),'success':True}

apk=read(ROOT/'release/Mesting-Music-v1.0.16-verification.json')
notes=read(ROOT/'assets/data/release-notes.json')
reader=read(OUT/'local-apk-notes-verification.json')
assert apk['version']==notes['version']==reader['version']=='1.0.16'
assert apk['androidVersionCode']==notes['versionCode']==reader['versionCode']==37
assert 'No issues found!' in (OUT/'analysis.txt').read_text(encoding='utf-8-sig')
regression=tests('regression-tests-final.jsonl')
stable=tests('stable-update-tests.jsonl')
probes_test=tests('probes-after-test.jsonl')
chain_test=tests('production-chain-tests.jsonl')
assert regression['passed']>=979 and stable['passed']==10
before=read(OUT/'frozen-before.json')
for entry in before['files']:
    p=ROOT/entry['path']
    assert p.stat().st_size==entry['bytes'] and digest(p)==entry['sha256'], entry['path']
assert subprocess.check_output(['git','branch','--show-current'],cwd=ROOT,text=True).strip()==before['branch']=='beta'
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()==before['head']=='deb68e4b4bad84d422085e4567d556b4441b5e48'
assert subprocess.check_output(['git','diff','--cached','--raw'],cwd=ROOT,text=True)==before['index']==''
probes=read(OUT/'public-probes-after.json')
chain=read(OUT/'production-chain.json')
assert not probes['credentialsSent'] and not chain['credentialsSent']
assert all(song['success'] and not song['preview'] for song in chain['songs'])
assert all(any(s.get('audioProbe') and s.get('mediaDurationMs',0)>270000 for s in song['sources']) for song in probes['songs'])
stamp=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat(timespec='seconds')
def public_probe(value):
    # Raw search-result titles and signed media paths stay in private local
    # evidence. The distributable record needs only status and audio facts.
    result={key:item for key,item in value.items() if key!='requests'}
    result['requests']=[{key:item for key,item in row.items() if key in {
        'host','status','code','range','timelength','isPreview'
    }} for row in value.get('requests',[])]
    return result
feature_files={'test/netease_v116_recovery_test.dart','test/netease_v115_sources_test.dart','test/netease_v114_workflows_test.dart','test/netease_v112_fallback_download_test.dart','test/netease_data_adapters_test.dart'}
feature_counts={p:n for p,n in regression['countsByFile'].items() if p in feature_files}
validation={
 'version':'1.0.16','androidVersionCode':37,'date':'2026-10-29','preparedAt':stamp,
 'status':'local_release_ready_for_user_upload',
 'implementation':'docs/NETEASE-SOURCES-2026-10-29-v1.0.16.md',
 'betaRegression':regression,
 'changedFeatureRegression':{'passed':sum(feature_counts.values()),'countsByFile':feature_counts,'derivedFrom':regression['log'],'isSubsetOfBetaRegression':True},
 'independentStableUpdateRegression':stable,'groupsOverlapDoNotAdd':True,
 'staticAnalysis':{'issues':0,'log':(OUT/'analysis.txt').relative_to(ROOT).as_posix()},
 'publicProbeTest':probes_test,'scopedProductionChainTest':chain_test,
 'anonymousProductionProbes':public_probe(probes),'anonymousProductionChain':public_probe(chain),
 'sourceStatus':{'kugou':'anonymous_android_adapter_retained_not_executed_on_desktop','kuwo':'mobile_search_repaired_two_sample_11_second_audio_rejected','bilibili':'two_sample_audio_search_empty','bilivideo':'two_sample_full_duration_headers_and_cdn_range_passed','bugpk':'two_sample_outer_redirect_not_audio_rejected','gdstudio':'disabled_unchanged','bodian':'disabled_unchanged','youtube':'disabled_unchanged'},
 'crashReport':{'userTrigger':'song_selection_waiting_for_fallback_or_playback_start','originalSystemExitRecordAvailable':False,'originalRootCauseVerified':False,'reproducedHostFailuresFixed':['unhandled_automatic_advance_failure','stale_lookup_failure_affecting_new_selection','timed_out_provider_io_lifetime'], 'androidOwnProcessExitHistoryAdded':True,'nativeTraceRead':False,'physicalCrashRetestPerformed':False},
 'apk':apk,'localActualApkNotesReader':reader,
 'preservedArtifactsAndLock':{'entries':len(before['files']),'allByteIdentical':True},
 'sourceSnapshotVerification':'release/Mesting-Music-v1.0.16-source-verification.json','sourceVerificationSeparateToAvoidSelfReference':True,
 'upstream':{'repository':'https://github.com/UnblockNeteaseMusic/server','revision':'1d64281c0fae81a4e3cf21f176706b0baa3a606d','license':'LGPL-3.0-only','kuwoReferenceAndCorrespondingDartSourceIncluded':True,'nodeRuntimeIncluded':False,'personalProviderCredentialsUsed':False},
 'buildLog':(OUT/'build-release.log').relative_to(ROOT).as_posix(),
 'environment':{'flutter':'3.41.9','dart':'3.11.5','java':'Temurin 17.0.20.1+1','minSdk':24,'targetSdk':36,'ndk':'28.2.13676358','gradleWorkers':1,'gradleMaxHeapGiB':3},
 'serverMembershipChanged':False,'memberOnlyRealAccountTracksVerified':False,'fullTrackListeningPerformed':False,'officialTogetherInteroperabilityVerified':False,'physicalUpgradeTestPerformed':False,
 'deviceAccess':False,'accountAccess':False,'uploaded':False,'published':False,'publicReleaseVerified':False,'gitCommitted':False,'gitPushed':False,'userPublicationRequired':True,
}
save(ROOT/'docs/validation-2026-10-29-v1.0.16.json',validation)
publish={'appSlug':'music','version':'1.0.16','androidVersionCode':37,
 'packageName':apk['packageName'],'appName':apk['appName'],
 'apkPath':(ROOT/'release'/apk['file']).as_posix(),'fileSize':apk['fileSize'],'sha256':apk['sha256'],'certificateSha256':apk['certificateSha256'],
 'releaseNotes':notes['releaseNotes'],'adminUrl':'https://download.csnas.asia/admin?page=apps',
 'readyForUserUpload':True,'publicationOwner':'user','uploaded':False,'published':False,'publicReleaseVerified':False,'preparedAt':stamp}
save(ROOT/'release/Mesting-Music-v1.0.16-publish.json',publish)
(ROOT/'release/Mesting-Music-v1.0.16-release-notes.txt').write_text('\n'.join(notes['releaseNotes'])+'\n',encoding='utf-8')
handoff=ROOT/'docs/SESSION-HANDOFF-2026-10-29-v1.0.16.md'
text=handoff.read_text(encoding='utf-8').split('\n## 最终本机交付\n')[0]
text+=f'''\n## 最终本机交付\n\n准备时间 {stamp}。最终APK `release/{apk['file']}`，{apk['fileSize']:,}字节，SHA256 `{apk['sha256']}`。原签名、v2/v3、非debuggable、双ARM、ZIP/ELF对齐、CRC、8条随包说明及原许可均通过实际包核验。\n\n{len(regression['files'])}文件{regression['passed']}项主机回归通过；其中修改相关5文件{sum(feature_counts.values())}项是同一组的子集，不另相加。普通stable更新{stable['passed']}项通过，静态0问题。两个实际匿名样本及独立请求范围组成的补源顺序通过；没有在桌面执行Android内嵌酷狗、真实账号、真机解码、后台、下载落盘和用户原闪退复测。\n\n生产Range说明读取器从本地最终APK读取{reader['notesCount']}条，{reader['rangeRequests']}次/{reader['bytesRead']:,}字节，无网络。{len(before['files'])}个旧交付文件及锁文件逐字节保留。源码ZIP最终大小/摘要见release下本版source-verification JSON。用户自行发布，当前未上传、未发布、未提交推送。\n'''
handoff.write_text(text,encoding='utf-8')
banner='**当前本机开发版（2026-10-29）：用户确认1.0.16 / Android code37，修复完整音频补源与点歌解析稳定性。先读[1.0.16接续](docs/SESSION-HANDOFF-2026-10-29-v1.0.16.md)，以实际验证JSON及冻结产物为准。两首用户样本主机匿名音轨检查通过，原闪退根因与真机复测未确认；保留旧冻结交付、beta/deb68e4及全部脏工作区。music由用户发布；未经新授权不访问手机/ADB、账号或后台，不提交推送，不关闭music网页，不继续桌面内存优化。**\n\n'
path=ROOT/'AGENTS.md'
text=path.read_text(encoding='utf-8')
if '用户确认1.0.16 / Android code37' not in text: text=text.replace('# 协作约定\n\n','# 协作约定\n\n'+banner,1)
path.write_text(text,encoding='utf-8')
path=ROOT/'docs/CONTINUE-BETA.md'
text=path.read_text(encoding='utf-8')
if not text.startswith('# 当前接续：Mesting Music 1.0.16'):
    text='# 当前接续：Mesting Music 1.0.16 / code37\n\n已完成完整音频补源修复、主机回归和原签名本地交付。先读[1.0.16接续](SESSION-HANDOFF-2026-10-29-v1.0.16.md)与[实现及边界](NETEASE-SOURCES-2026-10-29-v1.0.16.md)。两首用户样本匿名音轨通过，不能当作原闪退已完成真机复测。保留所有旧冻结产物，music由用户发布，不访问手机或真实账号，不提交推送，不关闭music网页。\n\n'+text.replace('# 当前接续：Mesting Music 1.0.15 / code36','## 历史本地准备：1.0.15 / code36',1)
path.write_text(text,encoding='utf-8')
root_handoff=ROOT/'HANDOFF-CURRENT-SESSION-2026-10-29-v1.0.16.md'
root_handoff.write_text('# 当前本机交付：Mesting Music 1.0.16 / code37\n\n先读[本版接续](docs/SESSION-HANDOFF-2026-10-29-v1.0.16.md)、[样本和实现](docs/NETEASE-SOURCES-2026-10-29-v1.0.16.md)与[复测步骤](docs/INSTALL-v1.0.16.md)。最终产物与测试见validation及release验证JSON；源码ZIP见独立source-verification。\n\n当前beta/deb68e4，全部未提交变化保留。1.0.13～1.0.15冻结交付保留；music由用户发布。未访问手机、真实账号或后台，未提交推送，未执行官版一起听双端验收。原用户闪退系统根因尚未取得证据，不能将异步错误回归等同真机通过。\n',encoding='utf-8')
print(json.dumps({'apkReady':True,'betaPassed':regression['passed'],'featureSubsetPassed':sum(feature_counts.values()),'stablePassed':stable['passed'],'preservedFiles':len(before['files']),'published':False}))
