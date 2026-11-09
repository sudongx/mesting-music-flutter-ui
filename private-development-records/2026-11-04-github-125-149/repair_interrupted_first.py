"""Finish only the interrupted first draft; do not write shared worker state."""
from common149 import *
import time
row=read(OUT/'prepared-state.json')['versions'][0];assert row['tag']=='v1.0.25'
headers=credentials()
release=request(headers,'GET',f'/repos/{REPO}/releases?per_page=100')
release=next(r for r in release if r['tag_name']==row['tag']);assert release['draft']
rid=release['id']
for asset in row['assets']:
    live=request(headers,'GET',f'/repos/{REPO}/releases/{rid}/assets?per_page=100')
    found=next((a for a in live if a['name']==asset['name']),None)
    if found and found['state']!='uploaded':
        # GitHub's starter reports the declared final Content-Length even
        # though no valid asset exists. State and absence of a digest identify
        # the stopped transfer; size alone cannot identify this placeholder.
        assert found['state']=='starter' and not found.get('digest')
        assert found['size'] in {0,asset['size']}
        # This new draft did not exist before this task. The placeholder holds
        # no completed file and is safe to replace after its sender stopped.
        request(headers,'DELETE',f"/repos/{REPO}/releases/assets/{found['id']}")
        found=None
    if found is None:
        for attempt in range(4):
            try:
                found=upload(headers,rid,asset['path'],asset['name']);break
            except Exception:
                live=request(headers,'GET',f'/repos/{REPO}/releases/{rid}/assets?per_page=100')
                found=next((a for a in live if a['name']==asset['name']),None)
                if found and found['state']=='uploaded':break
                if attempt==3:raise
                time.sleep(4)
    assert found['size']==asset['size'] and found.get('digest')=='sha256:'+asset['sha256'],asset['name']
    print('Verified interrupted-first asset: '+asset['name'],flush=True)
print('First draft complete; sequential publisher will validate and publish it later.',flush=True)
