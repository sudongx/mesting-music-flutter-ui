"""Freeze a reviewable local diagnostic candidate before asking to install it.

Never installs, starts ADB, accesses accounts, publishes or writes Git. Previous
formal APK/source bytes and the intentional dirty index/checkout are protected.
"""
import datetime
import hashlib
import json
import os
from pathlib import Path
import subprocess
import time
import traceback

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
PRIVATE=OUT/'private'; STATE=OUT/'candidate-finalization-state.json'
record={'pid':os.getpid(),'deviceAccess':False,'installed':False,'published':False}
os.environ['GIT_OPTIONAL_LOCKS']='0'
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def digest(p):
    with p.open('rb') as f: return hashlib.file_digest(f,'sha256').hexdigest()
def save(stage,status):
    record.update(stage=stage,status=status,updatedUtc=datetime.datetime.now(datetime.timezone.utc).isoformat())
    STATE.write_text(json.dumps(record,indent=2),encoding='utf-8')
try:
    save('candidate','waiting')
    for _ in range(800):
        previous=read(OUT/'candidate-resume-state.json')
        if previous['status']=='ready_for_review_no_device_permission_yet':break
        if previous['status']=='needs_review':raise RuntimeError('Candidate verification requires review')
        time.sleep(3)
    else:raise TimeoutError('Candidate did not finish')
    save('documentation','running')
    apk=read(PRIVATE/'candidate-verification.json')
    checks=read(OUT/'host-check-summary.json')
    notes=read(OUT/'local-apk-notes-verification.json')
    before=read(OUT/'preservation-before.json')
    assert checks['analysisPassed'] and all(checks[n]['completeAndSuccessful'] for n in
        ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
    assert apk['androidVersionCode']==66 and notes['versionCode']==66
    assert apk['togetherSyncDiagnosticLoggingEnabled'] and not apk['physicalUpgradeTestPerformed']
    assert digest(PRIVATE/apk['file'])==apk['sha256']
    render_dirs=[OUT/'ui',OUT/'footprint/ui',ROOT/'.codex-artifacts/2026-11-03-release145-social/ui']
    renders=[{'path':str(p.relative_to(ROOT)).replace('\\','/'),'bytes':p.stat().st_size,'sha256':digest(p)}
        for d in render_dirs for p in sorted(d.glob('*.png'))]
    validation={
        'date':'2026-11-03','version':'1.0.45','androidVersionCode':66,
        'stage':'private_original_signed_diagnostic_candidate',
        'formalFrozenBaseline':'1.0.44/code65',
        'hostChecks':{k:{a:b for a,b in v.items() if a!='perFile'} if isinstance(v,dict) else v for k,v in checks.items()},
        'nativeHostScenariosPassed':10,'nativeAndroidRuntimeAcceptance':False,
        'renders':renders,
        'apk':{'path':str((PRIVATE/apk['file']).relative_to(ROOT)).replace('\\','/'),
            'bytes':apk['fileSize'],'sha256':apk['sha256'],'certificateSha256':apk['certificateSha256']},
        'actualApkNotes':notes,
        'engineAndGlass':{'pinnedCustomReleaseEngineVerified':apk['engineBytesMatchPinnedManifest'],
            'glassShaderFiles':len(apk['glassShadersComparedByteIdenticalAgainstLocalV136']),
            'sdkLibraryFiles':len(apk['sdkLibrariesComparedByteIdenticalAgainstLocalV136'])},
        'togetherSyncDiagnosticLoggingEnabled':True,
        'ordinaryBuildDiagnosticLoggingDefault':False,
        'backgroundRootCauseResolved':False,'backgroundDeviceRepairVerified':False,
        'historicalOfficialProfileTotalFixed':False,'october683MinutesRecovered':False,
        'newCandidateDeviceAccess':False,'newCandidateInstalled':False,
        'realAccountRequestsByAgent':False,'gitCommitted':False,'gitPushed':False,
        'uploaded':False,'published':False,
        'readOnlyV144Capture':'.codex-artifacts/2026-11-03-v145-readonly/READONLY-CAPTURE-SUMMARY.json',
        'implementation':'docs/UI-AND-SYNC-2026-11-03-v1.0.45.md',
        'boundaries':[
            '1.0.44 read-only capture ended; new installation and capture require separate user permission.',
            'Official background reference is static architecture, not observed Flutter root cause.',
            'Annual report is an official yearly aggregate; no monthly values are fabricated.',
            'Real account relationships, footprint permissions, phone GPU and background/lock-screen behavior remain unverified.',
        ],
    }
    (ROOT/'docs/validation-2026-11-03-v1.0.45-CANDIDATE.json').write_text(
        json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    agents=ROOT/'AGENTS.md'; previous_agents=agents.read_bytes()
    (OUT/'AGENTS-before.md').write_bytes(previous_agents)
    prefix=('**2026-11-03 私有诊断候选1.0.45/code66：先读[本轮接续](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.45-CANDIDATE.md)、'
        '[实现与边界](docs/UI-AND-SYNC-2026-11-03-v1.0.45.md)及[候选安装](docs/INSTALL-v1.0.45-CANDIDATE.md)。'
        '用户确认后完成加载区/连续返回/四操作同一行、网易云我的统计、关注粉丝完整交互和听歌足迹。'
        '131文件1630项Beta通过、1项条件跳过，Stable21、导航界面整文件54、分析0；原生10项及明暗窄屏渲染核对。'
        '44获授权只读采集仍复现后台不同步，进程/前台媒体服务仍在；根因与修复未确认。'
        '本候选补齐原生/Dart分阶段白名单诊断并显式开启私有日志开关，普通构建默认关闭；原签名APK/完整源码仅私有本地准备。'
        '正式冻结基线仍44；72份旧冻结物、原签名/引擎/完整玻璃、全部脏工作区、beta/b6bcd542及空暂存保留。'
        '本候选尚未安装，无新授权不访问手机/ADB/账号/后台或采集；旧44采集授权已结束，不外推。'
        '后台/锁屏、真实账号与GPU待验收，历史总时长及十月683分钟仍未解决；旧日志隔离不重发。未提交推送发布。下方为历史时点。**\r\n\r\n')
    assert not previous_agents.startswith(prefix[:40].encode('utf-8')),'Do not add a duplicate entry'
    agents.write_bytes(prefix.encode('utf-8')+previous_agents)
    save('freeze_source','running')
    with (OUT/'freeze-candidate-source.log').open('wb') as log:
        subprocess.run([os.sys.executable,'-X','utf8',str(OUT/'freeze_candidate_source.py')],
            cwd=ROOT,stdin=subprocess.DEVNULL,stdout=log,stderr=subprocess.STDOUT,
            creationflags=subprocess.CREATE_NO_WINDOW,timeout=1800,check=True)
    source=read(PRIVATE/'candidate-source-verification.json')
    assert digest(PRIVATE/source['sourceZipName'])==source['sourceZipSha256']
    save('preservation_readback','running')
    for item in before['frozen']:
        p=Path(item['path']);assert p.stat().st_size==item['bytes'] and digest(p)==item['sha256'],str(p)
    assert digest(ROOT/'pubspec.lock')==before['pubspecLockSha256']
    assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==before['signingKeySha256']
    assert agents.read_bytes().endswith(previous_agents)
    head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
    branch=subprocess.check_output(['git','branch','--show-current'],cwd=ROOT,text=True).strip()
    staged=subprocess.check_output(['git','diff','--cached','--name-only'],cwd=ROOT,text=True).splitlines()
    assert head==before['head'] and branch=='beta' and not staged
    final={**validation,
        'source':{'path':str((PRIVATE/source['sourceZipName']).relative_to(ROOT)).replace('\\','/'),
            'bytes':source['sourceZipSize'],'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
        'previousFrozenFilesUnchanged':len(before['frozen']),
        'originalKeyAndDependencyLockUnchanged':True,'previousAgentsBytesRetained':True,
        'branch':branch,'head':head,'stagedPaths':staged,
    }
    (PRIVATE/'candidate-delivery.json').write_text(json.dumps(final,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    (PRIVATE/'SHA256.txt').write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+source['sourceZipName']+'\n',encoding='utf-8')
    save('candidate','ready_for_user_installation_permission')
except BaseException:
    (OUT/'candidate-finalization-exception.log').write_text(traceback.format_exc(),encoding='utf-8')
    save(record.get('stage','startup'),'needs_review')
    raise
