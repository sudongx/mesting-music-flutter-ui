from pathlib import Path
import datetime,hashlib,json,subprocess
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-10-29-release114'
def load(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def save(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def tests(name):
 events=[]
 for line in (OUT/name).read_text(encoding='utf-8-sig').splitlines():
  try:x=json.loads(line)
  except json.JSONDecodeError:continue
  if isinstance(x,dict) and 'type'in x:events.append(x)
 assert [x for x in events if x['type']=='done'][-1]['success']
 assert not any(x['type']=='error' for x in events)
 return {'passed':sum(x['type']=='testDone' and not x.get('hidden') and not x.get('skipped') and x.get('result')=='success' for x in events),'files':[x['suite']['path'].replace('D:/AnLi/','') for x in events if x['type']=='suite'],'log':(OUT/name).relative_to(ROOT).as_posix(),'success':True}
apk=load(ROOT/'release/Mesting-Music-v1.0.14-verification.json');notes=load(ROOT/'assets/data/release-notes.json');reader=load(OUT/'local-apk-notes-verification.json')
assert apk['version']==notes['version']==reader['version']=='1.0.14'
assert apk['androidVersionCode']==notes['versionCode']==reader['versionCode']==35
assert len(notes['releaseNotes'])==reader['notesCount']==8
assert 'No issues found!' in (OUT/'analysis.txt').read_text(encoding='utf-8-sig')
reg=tests('regression-tests.jsonl');feature=tests('final-feature-tests.jsonl');stable=tests('stable-update-tests.jsonl')
assert (reg['passed'],feature['passed'],stable['passed'])==(904,58,10)
prior=load(OUT/'preserved-inputs.json')
for item in prior:
 p=ROOT/item['path']
 with p.open('rb') as f:assert hashlib.file_digest(f,'sha256').hexdigest()==item['sha256'],item['path']
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()=='deb68e4b4bad84d422085e4567d556b4441b5e48'
assert subprocess.check_output(['git','branch','--show-current'],cwd=ROOT,text=True).strip()=='beta'
probe=load(OUT/'bugpk-production-public-probe.json');assert probe['resolved'] and not probe['accountCredentialsSent'] and probe['returnedScheme']=='https'
stamp=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat(timespec='seconds')
publication={'appSlug':'music','version':'1.0.14','androidVersionCode':35,'packageName':apk['packageName'],'appName':apk['appName'],'apkPath':'D:/AnLi/release/'+apk['file'],'fileSize':apk['fileSize'],'sha256':apk['sha256'],'certificateSha256':apk['certificateSha256'],'releaseNotes':notes['releaseNotes'],'adminUrl':'https://download.csnas.asia/admin?page=apps','readyForUserUpload':True,'publicationOwner':'user','uploaded':False,'published':False,'publicReleaseVerified':False,'preparedAt':stamp}
save(ROOT/'release/Mesting-Music-v1.0.14-publish.json',publication)
(ROOT/'release/Mesting-Music-v1.0.14-release-notes.txt').write_text('\n'.join('- '+s for s in notes['releaseNotes'])+'\n',encoding='utf-8')
validation={'version':'1.0.14','androidVersionCode':35,'date':'2026-10-29','preparedAt':stamp,'status':'local_release_ready_for_user_upload','implementation':'docs/NETEASE-UX-2026-10-29-v1.0.14.md','betaRegression':reg,'finalChangedFeatureRegression':feature,'independentStableUpdateRegression':stable,'groupsOverlapDoNotAdd':True,'staticAnalysis':{'issues':0,'log':(OUT/'analysis.txt').relative_to(ROOT).as_posix()},'uiEvidence':{'rendered':len(list((OUT/'ui').glob('*.png'))),'visuallyReviewedRepresentativeScreens':4,'narrowWidth':320,'textScale':1.5,'lightAndDark':True,'physicalDevice':False},'anonymousBugpkProductionProbe':probe,'apk':apk,'localActualApkNotesReader':reader,'preservedArtifactsAndConfigurations':{'count':len(prior),'allByteIdentical':True},'sourceSnapshotVerification':'release/Mesting-Music-v1.0.14-source-verification.json','sourceVerificationSeparateToAvoidSelfReference':True,'buildLog':(OUT/'build-release.log').relative_to(ROOT).as_posix(),'environment':{'flutter':'3.41.9','dart':'3.11.5','java':'Temurin 17.0.20.1+1','minSdk':24,'targetSdk':36,'ndk':'28.2.13676358','gradleWorkers':1,'gradleMaxHeapGiB':3},'realAccountWritesVerified':False,'officialTogetherInteroperabilityVerified':False,'physicalUpgradeTestPerformed':False,'deviceAccess':False,'uploaded':False,'published':False,'publicReleaseVerified':False,'gitCommitted':False,'gitPushed':False,'userPublicationRequired':True}
save(ROOT/'docs/validation-2026-10-29-v1.0.14.json',validation)
p=ROOT/'docs/SESSION-HANDOFF-2026-10-29-v1.0.14.md';t=p.read_text(encoding='utf-8')
t=t.replace('实现及主机回归已完成，APK正在本机构建，尚未冻结最终交付。','实现、主机回归、原签名APK构建及包结构核验已完成；源码快照状态以相邻验证JSON为准。')
t+=f'''\n## 最终APK本地交付记录\n\n准备时间{stamp}。APK为`release/{apk['file']}`，{apk['fileSize']:,}字节，SHA-256 `{apk['sha256']}`。原证书、v2/v3签名、正式名、包名、1.0.14/code35、双ARM、ZIP 16KiB、ARM64 ELF 16KiB及ARM32 ELF 4KiB对齐、CRC、随包说明/目录/许可与QA资源排除均核验通过。\n\n生产Range说明读取器从最终实际APK读取8条说明，与离线历史一致；{reader['rangeRequests']}次本地Range，共{reader['bytesRead']:,}字节，无网络。普通更新{stable['passed']}项通过；原冻结交付和配置共{len(prior)}项逐字节保持。测试组有重叠，不相加。最终完整验证见`docs/validation-2026-10-29-v1.0.14.json`。本轮未上传、发布、Git提交/推送或访问手机。\n\n构建目录中的临时包不是最终交付。只向music上传`release/{apk['file']}`，更新说明复制`release/Mesting-Music-v1.0.14-release-notes.txt`，核对字段见发布JSON。源码ZIP内清单与整包摘要以相邻source-verification JSON为准。\n'''
p.write_text(t,encoding='utf-8')
p=ROOT/'HANDOFF-CURRENT-SESSION-2026-10-29-v1.0.14.md';t=p.read_text(encoding='utf-8')+f"\n最终APK已核验：{apk['fileSize']:,}字节，SHA-256 `{apk['sha256']}`，原证书和v2/v3签名保持。源码快照以本版source-verification JSON为准。\n";p.write_text(t,encoding='utf-8')
print(json.dumps({'apkReadyForUserUpload':True,'regressionPassed':reg['passed'],'finalFeaturePassed':feature['passed'],'stableUpdatePassed':stable['passed'],'preservedInputs':len(prior),'published':False}))
