from common import OUT,REPO,save,refs,git,preserve
import github_transport as api
preserve()
headers=api.credentials()
owner=api.request(headers,'GET','/user')
assert owner['login']=='Mesting42'
repo=api.request(headers,'GET','/repos/'+REPO)
assert repo['full_name']==REPO
releases=api.request(headers,'GET','/repos/'+REPO+'/releases?per_page=100')
save(OUT/'github-releases-before.json',releases)
for r in releases:assert r['tag_name'] not in [f'v1.0.{n}' for n in range(13,18)],'A release already exists; inspect rather than overwrite'
print('Verified GitHub owner, repository and',len(releases),'existing releases; five target releases absent')
