from common160 import *
import zipfile
private=read(OUT/'private-records-push.json');parent=private['commit'];entries=tree_files(parent)
audit=read(OUT/'all-source-verification.json');blobs={};folder=OUT/'private-supplement';folder.mkdir(exist_ok=True)
supplemented=[]
for exception in audit['unpublishedArchives']:
    tag=exception['path'].removeprefix('Mesting-Music-').removesuffix('-source.zip')
    with zipfile.ZipFile(ROOT/exception['path']) as z:
        for name in exception.get('absent',[])+exception.get('different',[]):
            assert name in ['SOURCE-SNAPSHOT.json','AGENTS.md','BETA_ARCHIVE.md','docs/CONTINUE-BETA.md','docs/SESSION-HANDOFF-2026-10-27-v1.0.2.md'],name
            source=name if name in z.namelist() else 'Mesting-Music-'+tag+'/'+name
            data=z.read(source);dest=folder/hashlib.sha256(data).hexdigest();dest.write_bytes(data)
            target='private-development-records/original-archive-metadata/'+tag+'/'+name
            blobs[target]=dest;supplemented.append({'tag':tag,'path':name,'sha256':hashlib.sha256(data).hexdigest()})
for name in ['HANDOFF-GITHUB-GITEE-2026-11-05-v1.0.60.md']:
    path=ROOT/name
    assert path.is_file();blobs[name]=path
for name in ['delivery-final.json','all-source-verification.json','private-records-independent-verification.json','cleanup-plan.json']:
    path=OUT/name;assert path.is_file();blobs['private-development-records/final-archive-verification/'+name]=path
coverage=read(OUT/'source-coverage-and-cleanup-readonly.json')
summary={'all51FormalProductSourcesOnBothRemotes':True,'productCodeDifferencesFound':0,'metadataExceptionsPreservedPrivately':supplemented,'currentProductSourceFiles':coverage['latestProductSourceFiles'],'githubStandaloneHandoffUploads':False}
save(OUT/'complete-source-and-private-docs.json',summary)
blobs['private-development-records/final-archive-verification/complete-source-and-private-docs.json']=OUT/'complete-source-and-private-docs.json'
oids=write_blobs(blobs)
for n,oid in oids.items():entries[n]={'mode':'100644','oid':oid}
commit,tree=commit_tree(entries,'private-final-supplement',parent,'backup: original historical metadata and final archive handoff privately')
url='https://gitee.com/'+REPO+'.git'
git('push','--atomic',url,commit+':'+private['branch'])
actual={l.split()[1]:l.split()[0] for l in git('ls-remote','--heads',url).decode().splitlines()};assert actual[private['branch']]==commit
fresh=OUT/'fresh-private-delta.git'
subprocess.run(['git','--git-dir='+str(fresh),'-c','http.sslBackend=openssl','-c','http.version=HTTP/1.1','fetch','--depth=1','--no-tags',url,private['branch']],env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never'),check=True,capture_output=True)
assert subprocess.check_output(['git','--git-dir='+str(fresh),'rev-parse','FETCH_HEAD']).decode().strip()==commit
assert subprocess.check_output(['git','--git-dir='+str(fresh),'ls-tree','-rz',commit])==git('ls-tree','-rz',commit)
private.update(commit=commit,tree=tree,supplementalFiles=len(blobs),historicalMetadataFiles=len(supplemented),remoteCommitReferenceVerified=True)
save(OUT/'private-records-push.json',private)
save(OUT/'private-final-verification.json',{'commit':commit,'originalRecords':private['records'],'supplementalFiles':len(blobs),'historicalMetadata':supplemented,'remoteCommitReferenceReadBackVerified':True,'independentFetch':True,'allTreeEntriesMatchIndependentRemoteFetch':True,'tlsValidationEnabled':True,'schannelEarlyEofResolvedWithOpenSslBackend':True,'complete':True})
print('Private handoff supplement pushed and remote commit reference verified.',flush=True)
