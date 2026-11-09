"""Record final source/APK/install preservation without claiming QR acceptance."""
import hashlib
import json
import subprocess
import zipfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream,'sha256').hexdigest()


before = json.loads((OUT/'baseline.json').read_text('utf-8'))
inputs = json.loads((OUT/'build-input-final.json').read_text('utf-8'))['files']
assert all(digest(ROOT/r['path'])==r['sha256'] for r in inputs)
frozen = list(before['frozenArtifacts'])
assert len(frozen)==72
for row in frozen:
    path = ROOT/row['path']
    assert path.stat().st_size==row['bytes'] and digest(path)==row['sha256'], row['path']
for relative in ('release/Mesting-Music-v1.0.67.apk','Mesting-Music-v1.0.67-source.zip'):
    path = ROOT/relative
    frozen.append({'path':relative,'bytes':path.stat().st_size,'sha256':digest(path)})
assert len(frozen)==74
source = json.loads((ROOT/'release/Mesting-Music-v1.0.67-source-verification.json').read_text('utf-8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.67-verification.json').read_text('utf-8'))
assert frozen[-1]['sha256']==source['sourceZipSha256']
assert frozen[-2]['sha256']==apk['sha256']
with zipfile.ZipFile(ROOT/source['sourceZipName']) as archive:
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    for row in snapshot['files']:
        assert digest(ROOT/row['path'])==row['sha256'], row['path']
head = subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()
branch = subprocess.check_output(['git','branch','--show-current'],cwd=ROOT).decode().strip()
assert head==before['head'] and branch==before['branch']
assert digest(ROOT/'.git/index')==before['indexSha256']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=ROOT).strip()
assert digest(ROOT/'pubspec.lock')==before['lockSha256']
assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==before['signingSha256']
delivery = json.loads((OUT/'delivery-mode-user-update.json').read_text('utf-8'))
assert delivery['apkDeliveryOnly'] and not delivery['installPerformed']
checks = json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
status = subprocess.check_output(['git','--no-optional-locks','status','--porcelain=v1','-z'],cwd=ROOT)
(OUT/'git-status-after.nul').write_bytes(status)
feedback_path = OUT/'user67-feedback.json'
feedback = json.loads(feedback_path.read_text('utf-8')) if feedback_path.exists() else {}
accepted = feedback.get('mestingProfileDisplayed') is True
after = {
    'recordedAtUtc':datetime.now(timezone.utc).isoformat(),
    'version':'1.0.67','androidVersionCode':88,'head':head,'branch':branch,
    'indexSha256':before['indexSha256'],'indexEmpty':True,
    'lockSha256':before['lockSha256'],'signingSha256':before['signingSha256'],
    'frozenArtifacts':frozen,'priorFrozenArtifactsChecked':72,'frozenArtifactIssues':[],
    'productFiles':inputs,'differencesFrom67BuildInputs':[],'sourceFiles':snapshot['files'],
    'sourceZip67Verified':True,'source63ZipExists':(ROOT/'Mesting-Music-v1.0.63-source.zip').exists(),
    'handoffSha256':digest(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-06-v1.0.67.md'),
    'agentInstructionsSha256':digest(ROOT/'AGENTS.md'),
    'hostChecks':checks,'installed67WithDataRetained':False,
    'installedVersion':None,'lastHistoricalDeviceVersion':'1.0.66','lastHistoricalDeviceCode':87,'deliveryMode':'APK only as requested by user','installReceipt':None,
    'phoneLoginRemoved':True,'smsInvestigationStoppedByUser':True,'sms2156Resolved':False,
    'qrOnlyLogin':True,'scanWithOfficialQishuiApp':True,
    'realQrAccountAccepted':accepted,'physicalColdRestoreAccepted':feedback.get('coldRestoreAccepted') is True,
    'officialOrMestingPrivateCredentialFilesRead':False,'agentSmsTriggered':False,
    'diagnosticPackageUninstalled':True,'oldLogsReplayed':False,
    'prior64BasicKugouAndNetEasePlaybackUserAccepted':True,
    'prior66NetEaseAutoSourceUserAccepted':True, 'prior66QrAndColdRestoreUserAccepted':True, 'soda67PlaybackUserAccepted':feedback.get('sodaFullPlaybackAccepted') is True,'fullQishuiMediaBenefitsDspAccepted':False,
    'gitStatusSha256':hashlib.sha256(status).hexdigest(),
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
    'status':'Official-Soda-only APK delivered with reference external signer; user deferred phone installation and real account acceptance.',
}
(OUT/'after.json').write_text(json.dumps(after,ensure_ascii=False,indent=2)+'\n','utf-8')
(ROOT/'release/Mesting-Music-v1.0.67-SHA256.txt').write_text(
    apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+source['sourceZipName']+'\n','utf-8')
summary = {'version':'1.0.67','code':88,'apk':{'bytes':apk['fileSize'],'sha256':apk['sha256']},
    'source':{'bytes':source['sourceZipSize'],'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
    'protectedOriginal72':True,'protectedNow':74,'buildInputsMatched':len(inputs),
    'indexUnchangedAndEmpty':True,'installedVersion':None,
    'phoneLoginRemoved':True,'qrAccountAccepted':accepted,'coldRestoreAccepted':feedback.get('coldRestoreAccepted') is True,'published':False}
(OUT/'final-summary.json').write_text(json.dumps(summary,indent=2)+'\n','utf-8')
print(json.dumps(summary,indent=2))
