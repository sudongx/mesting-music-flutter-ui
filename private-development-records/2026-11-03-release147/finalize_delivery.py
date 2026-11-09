from pathlib import Path
import hashlib,json,subprocess,zipfile
root=Path('D:/AnLi'); out=root/'.codex-artifacts/2026-11-03-release147'
def digest(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
apk_record=json.loads((root/'release/Mesting-Music-v1.0.47-verification.json').read_text('utf-8'))
source_record=json.loads((root/'release/Mesting-Music-v1.0.47-source-verification.json').read_text('utf-8'))
checks=json.loads((out/'host-check-summary.json').read_text('utf-8'))
protection=json.loads((out/'preservation-final.json').read_text('utf-8'))
apk=root/'release'/apk_record['file']; source=root/source_record['sourceZipName']
assert digest(apk)==apk_record['sha256'] and apk.stat().st_size==apk_record['fileSize']
assert digest(source)==source_record['sourceZipSha256'] and source.stat().st_size==source_record['sourceZipSize']
with zipfile.ZipFile(source) as z:
    manifest=json.loads(z.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version']=='1.0.47' and manifest['androidVersionCode']==68
    assert manifest['apkSha256']==apk_record['sha256']
    assert len(manifest['files'])==source_record['sourceFileCount']
    assert z.testzip() is None
    for item in manifest['files']:
        assert digest(root/item['path'])==item['sha256'],item['path']
        assert hashlib.sha256(z.read(item['path'])).hexdigest()==item['sha256']
    expected=set(z.namelist())-{'SOURCE-SNAPSHOT.json','SOURCE-SNAPSHOT-v1.0.24-BASELINE.json'}
    assert expected=={item['path'] for item in manifest['files']}
with zipfile.ZipFile(apk) as z:
    assert not any('chat-portrait' in p for p in z.namelist()),'Test-only image must not enter app assets'
agents=(root/'AGENTS.md').read_bytes(); original=(out/'AGENTS-before.md').read_bytes()
assert agents.endswith(original) and agents.startswith('**2026-11-03 本地正式交付1.0.47/code68'.encode('utf-8'))
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root,text=True).strip()
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()==manifest['baseCommit']
assert subprocess.check_output(['git','branch','--show-current'],cwd=root,text=True).strip()=='beta'
assert protection['oldFrozenArtifactCount']==84 and protection['allPreviousArtifactBytesUnchanged']
checksum=root/'release/Mesting-Music-v1.0.47-SHA256.txt'
assert not checksum.exists()
checksum.write_text(apk_record['sha256']+'  '+apk.name+'\n'+source_record['sourceZipSha256']+'  '+source.name+'\n','ascii')
record={'version':'1.0.47+68','apk':{'path':str(apk),'bytes':apk.stat().st_size,'sha256':digest(apk)},
    'source':{'path':str(source),'bytes':source.stat().st_size,'sha256':digest(source),
              'files':source_record['sourceFileCount'],'entries':source_record['frozenEntryCount']},
    'allSourceEntriesMatchCurrentDirtyTree':True,'oldAgentsBytesRetained':True,
    'originalSigningAndDependenciesRetained':True,'previousFrozenArtifactCount':84,
    'newFrozenArtifacts':2,'frozenArtifactCount':86,'checksumFile':str(checksum),
    'sourceExternalVerificationAvoidsSelfReference':True,
    'beta':{'files':checks['beta-complete.jsonl']['files'],**checks['beta-complete.jsonl']['counts']},
    'stablePassed':63,'navigationPassed':54,'navigationIsAdditionalToBetaTotal':True,
    'formalLoggingRegressionPassed':28,'formalRegressionIncludedInBeta':True,
    'nativeUnchangedInputChecksInherited':16,'hostFinalRenders':26,'visualRounds':2,
    'analysisIssues':0,'actualApkNotesMatched':8,
    'deviceInstalledOrAccepted':False,'realAccountAccess':False,'backendAccess':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(out/'delivery-final.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n','utf-8')
print(json.dumps(record,ensure_ascii=False,indent=2))
