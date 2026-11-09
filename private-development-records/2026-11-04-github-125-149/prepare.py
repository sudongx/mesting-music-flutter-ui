"""Create each version from its own verified ZIP; never from today's checkout."""
from common149 import *
from datetime import datetime,timezone
import zipfile

inventory=read(OUT/'inventory.json');assert inventory['complete']
baseline=read(OUT/'remote-before.json')['refs']['refs/heads/beta']
statefile=OUT/'prepared-state.json'
state=read(statefile) if statefile.exists() else {'baseline':baseline,'versions':[],'approval':{'formalReleases':True,'latest':'v1.0.49','installationChannelGrouping':True,'privateCandidatesExcluded':True,'mainDocumentationOnly':True}}
assert state['baseline']==baseline
preserve()
cachefile=OUT/'blob-cache.json';cache=read(cachefile) if cachefile.exists() else {}
cachefolder=OUT/'blob-files';cachefolder.mkdir(exist_ok=True)
parent=state['versions'][-1]['commit'] if state['versions'] else baseline
for row in inventory['versions'][len(state['versions']):]:
    source=ROOT/f"Mesting-Music-{row['tag']}-source.zip"
    assert sha(source)==row['sourceSha256']
    audit=read(OUT/(row['tag']+'-source-audit.json'))
    files={};new={}
    with zipfile.ZipFile(source) as archive:
        assert set(archive.namelist())==set(audit)
        for name,check in audit.items():
            safe(name);value=check['sha256']
            if value not in cache and value not in new:
                data=archive.read(name);assert hashlib.sha256(data).hexdigest()==value
                target=cachefolder/value
                if target.exists():assert sha(target)==value
                else:target.write_bytes(data)
                new[value]=target
        cache.update(write_blobs(new));save(cachefile,cache)
    modes=tree_files(parent)
    entries={name:{'oid':cache[check['sha256']],'mode':modes.get(name,{}).get('mode','100644')} for name,check in audit.items()}
    commit,tree=commit_tree(entries,row['version'],parent,
        f"archive: preserve Mesting Music {row['version']} / code{row['code']}\n\nFrozen source ZIP {row['sourceSha256']}; original APK {row['apkSha256']}.\nInstallation channel: Beta. GitHub formal release archival; device acceptance remains as documented.")
    checked=archive_verify(commit,audit)
    tag=row['tag']
    existing=git('tag','--list',tag).decode().strip()
    if existing:assert git('rev-parse',tag+'^{}').decode().strip()==commit,('Local tag collision',tag)
    else:
        git('-c','tag.gpgSign=false','tag','-a',tag,commit,'-m',f"Mesting Music {row['version']} / code{row['code']}\n\nOriginal frozen delivery. Installation channel: Beta; formal GitHub Release.\nSource SHA256 {row['sourceSha256']}\nAPK SHA256 {row['apkSha256']}")
    result={**row,'commit':commit,'tree':tree,'parent':parent,'tagObject':git('rev-parse',tag).decode().strip(),'gitArchiveEntriesVerified':checked}
    state['versions'].append(result);parent=commit;save(statefile,state)
    print(json.dumps({'prepared':tag,'commit':commit,'verifiedEntries':checked,'newBlobCount':len(new)},ensure_ascii=False),flush=True)
state['versionTip']=parent
state['preservation']=preserve();state['preparedAtUtc']=datetime.now(timezone.utc).isoformat()
save(statefile,state)
print('Prepared 24 byte-verified version commits and annotated tags; primary checkout/index unchanged.',flush=True)
