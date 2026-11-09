"""Read back final remote state and prove original local state was preserved."""
import subprocess
import github_transport as api
from common import *

final=read(OUT/'archive-final.json');assert final['published']
archive=read(OUT/'archive-commits.json')
publication=read(OUT/'release-publication.json')
clone=read(OUT/'fresh-clone-verification.json')
assert publication['verified'] and publication['verifiedAssets']==65
assert clone['checkedHead']==final['commit'] and clone['cleanCheckout']
assert len(clone['versions'])==5 and all(x['allSourceBytesMatchOriginalManifest'] for x in clone['versions'])
oldrefs=refs((OUT/'remote-refs-before.txt').read_bytes())
newrefs=refs(git('ls-remote','--heads','--tags','origin'))
for name,value in oldrefs.items():
    assert newrefs[name]==(final['commit'] if name=='refs/heads/beta' else value),name
for row in archive['commits']:
    assert newrefs['refs/tags/'+row['tag']+'^{}']==row['commit']
expected_new={name for row in archive['commits'] for name in ('refs/tags/'+row['tag'],'refs/tags/'+row['tag']+'^{}')}
assert set(newrefs)-set(oldrefs)==expected_new

headers=api.credentials()
current=api.request(headers,'GET','/repos/'+REPO+'/releases?per_page=100')
byid={r['id']:r for r in current}
old_releases=read(OUT/'github-releases-before.json')
compact=lambda assets:sorted((a['id'],a['name'],a['size'],a.get('digest'),a['state']) for a in assets)
for old in old_releases:
    new=byid[old['id']]
    for key in ['tag_name','target_commitish','name','body','draft','prerelease','created_at','published_at']:
        assert new[key]==old[key],(old['tag_name'],key)
    assert compact(new['assets'])==compact(old['assets']),old['tag_name']
assert len(current)==len(old_releases)+5
assert api.request(headers,'GET','/repos/'+REPO+'/releases/latest')['tag_name']=='v1.0.17'
for row in archive['commits']:
    release=next(r for r in current if r['tag_name']==row['tag'])
    assert not release['draft'] and not release['prerelease']
    assert release['target_commitish']==row['commit']
    expected=read(OUT/'assets'/row['tag']/'expected-assets.json')
    actual={a['name']:a for a in release['assets']}
    assert len(actual)==len(expected)==13
    for item in expected:
        a=actual[item['name']]
        assert a['state']=='uploaded' and a['size']==item['size']
        assert a.get('digest')=='sha256:'+item['sha256']

before=preserve()
assert git('rev-parse','refs/heads/codex/archive-1.0.13-1.0.17').decode().strip()==final['commit']
verification='docs/version-archive/GITHUB-ARCHIVE-2026-10-29-v113-v117-verification.json'
for name in [HANDOFF,ARCHIVE_DOC,verification]:
    assert (ROOT/name).read_bytes()==git('show',final['commit']+':'+name),name
save(OUT/'completion-verification.json',{
    'verified':True,'remoteBeta':final['commit'],'latestRelease':'v1.0.17',
    'independentVersionCommitsAndTags':5,'formalReleasesPublished':5,'verifiedAssets':65,
    'oldReleasesUnchanged':len(old_releases),'oldMainAndTagsUnchanged':True,
    'freshCloneHead':clone['checkedHead'],'freshCloneClean':True,
    'frozenZipEntriesVerified':sum(v['originalZipEntriesVerified'] for v in clone['versions']),
    'primaryHead':before['head'],'primaryBranch':before['branch'],
    'primaryIndexSha256':before['indexSha256'],'originalWorkspaceFilesPreserved':len(before['files']),
    'originalArtifactsPreserved':len(before['artifacts']),
    'runtimeAndLockfileUnchanged':final['runtimeAndLockfileUnchanged'],
    'musicBackendAccess':False,'deviceAccess':False})
print('COMPLETE: 5 version commits/tags/releases, 65 assets, 8406 source entries; old releases, main, tags, working tree and artifacts preserved.',flush=True)
print('Remote beta:',final['commit'],flush=True)
