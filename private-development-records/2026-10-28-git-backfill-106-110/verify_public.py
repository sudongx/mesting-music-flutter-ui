"""Unauthenticated release, digest, bounded download and remote-source checks."""
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from urllib.request import Request, urlopen

from common import ROOT, OUT, REPO, MAIN, git, read_json, save, sha

API = 'https://api.github.com/repos/'+REPO


def public_json(url):
    req = Request(url,headers={'User-Agent':'Mesting-public-backfill-verification',
        'Accept':'application/vnd.github+json','Cache-Control':'no-cache'})
    with urlopen(req,timeout=40) as response:
        assert response.status == 200
        return json.load(response)


def public_prefix(url, limit):
    # Public redirects receive no Authorization header or account cookies.
    assert url.startswith('https://github.com/'+REPO+'/releases/download/')
    req = Request(url,headers={'User-Agent':'Mesting-public-backfill-verification',
        'Range':f'bytes=0-{limit-1}'})
    with urlopen(req,timeout=40) as response:
        assert response.status in {200,206}
        return response.read(limit),response.status


def verify_release(row):
    cached=OUT/f"public-{row['tag']}.json"
    if cached.exists():
        result=read_json(cached)
        assert result['commit']==row['commit']
        return result
    release = public_json(API+'/releases/tags/'+row['tag'])
    assert not release['draft'] and not release['prerelease']
    assert release['target_commitish'] == row['commit']
    assert row['commit'] in release['body'] and '\ufffd' not in release['body']
    expected = {x['name']:x for x in read_json(OUT/'assets'/row['tag']/'expected-assets.json')}
    assert len(release['assets']) == len(expected) == 10
    for asset in release['assets']:
        item = expected[asset['name']]
        assert asset['size'] == item['size'] and asset['state'] == 'uploaded'
        assert asset.get('digest') == 'sha256:'+item['sha256'].lower()
    sums = next(x for x in release['assets'] if x['name']=='SHA256SUMS.txt')
    payload,status = public_prefix(sums['browser_download_url'],sums['size']+1)
    assert len(payload) == sums['size']
    assert hashlib.sha256(payload).hexdigest().upper() == expected['SHA256SUMS.txt']['sha256']
    lines = dict(line.split('  ',1)[::-1] for line in payload.decode('ascii').splitlines())
    assert set(lines) == set(expected)-{'SHA256SUMS.txt'}
    assert all(lines[name] == expected[name]['sha256'] for name in lines)
    binaries = []
    for key in ['apk','zip']:
        local = ROOT/row[key]
        asset = next(x for x in release['assets'] if x['name']==local.name)
        data,status = public_prefix(asset['browser_download_url'],65536)
        with local.open('rb') as stream:
            assert data == stream.read(65536)
        binaries.append({'name':local.name,'publicBytesChecked':len(data),
            'httpStatus':status,'matchesOriginalPrefix':True})
    commit = public_json(API+'/git/commits/'+row['commit'])
    assert commit['tree']['sha'] == row['tree']
    assert commit['parents'][0]['sha'] == row['parent']
    print(f"Public readback passed {row['tag']}: ten asset digests and original source tree",flush=True)
    result={'tag':row['tag'],'commit':row['commit'],'url':release['html_url'],
        'formalRelease':True,'serverSideAssetDigestsVerified':10,
        'checksumDownloadVerified':True,'binaryPrefixChecks':binaries,
        'remoteSourceTreeMatches':True}
    save(cached,result)
    return result


def main():
    publication = read_json(OUT/'release-publication.json')
    assert publication['verified'] and publication['verifiedAssets']==50
    archive = read_json(OUT/'archive-commits.json')
    final = read_json(OUT/'continuation-final.json')
    with ThreadPoolExecutor(max_workers=2) as executor:
        releases = list(executor.map(verify_release,archive['commits']))
    latest = public_json(API+'/releases/latest')
    assert latest['tag_name']=='v1.0.10' and not latest['prerelease'] and not latest['draft']
    current = {x['id']:x for x in public_json(API+'/releases?per_page=100')}
    # Reconfirm the complete current receipt set without downloading already
    # verified immutable prefixes again.
    by_tag={x['tag_name']:x for x in current.values()}
    for row in archive['commits']:
        release=by_tag[row['tag']]
        assert not release['draft'] and not release['prerelease']
        expected={x['name']:x for x in read_json(OUT/'assets'/row['tag']/'expected-assets.json')}
        assert len(release['assets'])==len(expected)==10
        for asset in release['assets']:
            check=expected[asset['name']]
            assert asset['size']==check['size'] and asset['digest']=='sha256:'+check['sha256'].lower()
    old = read_json(OUT/'github-releases-before.json')
    for prior in old:
        actual = current[prior['id']]
        for key in ['tag_name','target_commitish','name','body','draft','prerelease','created_at','published_at']:
            assert actual[key]==prior[key],(prior['tag_name'],key)
        keys=['id','name','size','digest','state']
        reduced=lambda items:sorted(tuple(x.get(k) for k in keys) for x in items)
        assert reduced(actual['assets'])==reduced(prior['assets'])
    assert len(current)==len(old)+5
    parse=lambda data:dict(line.decode().split('\t')[::-1] for line in data.splitlines())
    before=parse((OUT/'remote-refs-before.txt').read_bytes())
    after=parse(git('ls-remote','--heads','--tags','origin'))
    for ref,oid in before.items():
        assert after[ref]==(final['commit'] if ref=='refs/heads/beta' else oid),ref
    assert after['refs/heads/main']==MAIN
    new=set()
    for row in archive['commits']:
        ref='refs/tags/'+row['tag'];new|={ref,ref+'^{}'}
        assert after[ref+'^{}']==row['commit']
        assert sha(ROOT/row['apk'])==row['apkSha256']
        assert sha(ROOT/row['zip'])==row['sourceHash']
    assert set(after)-set(before)==new
    health=public_json('https://download.csnas.asia/api/app/music/health')
    latest_row=archive['commits'][-1]
    assert health['version']=='1.0.10' and health['android_version_code']==31
    assert health['file_size']==latest_row['apkBytes'] and health['sha256'].upper()==latest_row['apkSha256']
    assert git('rev-parse','HEAD').decode().strip()==final['commit']
    assert not git('status','--porcelain').strip()
    clone=read_json(OUT/'fresh-clone-verification.json')
    assert clone['freshCloneSucceeded'] and clone['commit']==final['commit']
    save(OUT/'final-public-verification.json',{'verified':True,'date':'2026-10-28',
        'repository':'https://github.com/'+REPO,'branch':'beta','commit':final['commit'],
        'latestFormalRelease':'v1.0.10','newFormalReleases':5,
        'serverSideAssetDigestsVerified':50,'releases':releases,
        'existingReleasesPreserved':len(old),'existingMainAndTagsPreserved':True,
        'frozenApkAndSourceZipBytesPreserved':True,'freshCloneVerified':clone,
        'musicStill110Code31':True,'workingTreeClean':True,'phoneAccess':False})
    print('FINAL: five releases / fifty asset digests / original main and history / fresh clone all verified.',flush=True)


if __name__=='__main__':
    main()
