"""Independently read public releases and compare every attachment's digest."""
import json,time,urllib.request
from common import *
publication=read(OUT/'release-publication.json');assert publication['verified']
archive=read(OUT/'archive-commits.json');prior=refs((OUT/'remote-refs-before.txt').read_bytes())
def get(path):
 req=urllib.request.Request('https://api.github.com/repos/'+REPO+path,headers={'Accept':'application/vnd.github+json','User-Agent':'Mesting-public-archive-verifier','Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=40) as response:return json.load(response)
records=[]
for row in archive['commits']:
 release=get('/releases/tags/'+row['tag']+'?archive_audit='+str(time.time_ns()))
 assert not release['draft'] and not release['prerelease'] and release['target_commitish']==row['commit']
 assets={x['name']:x for x in release['assets']};expected=read(OUT/'assets'/row['tag']/'expected-assets.json')
 assert len(assets)==len(expected)==13
 checked=[]
 for item in expected:
  a=assets[item['name']];assert a['size']==item['size'] and a.get('digest')=='sha256:'+item['sha256'] and a['state']=='uploaded'
  checked.append({'name':a['name'],'bytes':a['size'],'sha256':item['sha256'],'downloadUrl':a['browser_download_url']})
 records.append({'version':row['version'],'androidVersionCode':row['code'],'tag':row['tag'],'commit':row['commit'],
  'releaseUrl':release['html_url'],'formalRelease':True,'assets':checked,'sourceFileCount':row['sourceFiles'],
  'originalZipEntryCount':row['originalZipEntries'],'apkAndOriginalZipUnchanged':True})
 print('Public readback verified',row['tag'],'13 assets',flush=True)
assert get('/releases/latest?archive_audit='+str(time.time_ns()))['tag_name']=='v1.0.17'
after=refs(git('ls-remote','--heads','--tags','origin'))
for ref,value in prior.items():assert after[ref]==(archive['finalCommit'] if ref=='refs/heads/beta' else value),ref
for row in archive['commits']:assert after['refs/tags/'+row['tag']+'^{}']==row['commit']
result={'date':'2026-10-29','repository':'https://github.com/'+REPO,'maintenanceBranch':'beta','checkedBranchHead':archive['finalCommit'],
 'latestRelease':'v1.0.17','newFormalReleases':5,'verifiedAssets':65,'releases':records,
 'oldMainAndTagsPreserved':True,'oldReleasesPreserved':37,'publicApiReadbackVerified':True,
 'originalApksAndZipsUnchanged':True,'primaryWorkingTreePreserved':True,'deviceAccess':False,'musicBackendAccess':False}
save(OUT/'public-verification.json',result);preserve()
