"""Check each real scene with its own server-declared music seed, anonymously."""
from concurrent.futures import ThreadPoolExecutor
import json
import urllib.request
from scene_live_probe import OUT, request, save

catalog = json.loads((OUT / 'scene-catalog-live.json').read_text(encoding='utf-8'))
scenes = catalog['data']['list']

def check(scene):
    ident = scene['scene_id']
    module = scene.get('music_tag', {})
    tags = module.get('module_extra', [])
    tag = next((t for t in tags if t.get('content_type', t.get('types')) == 6), None)
    if tag is None:
        # These are actual scene playlists, not songs. Verify the corresponding
        # provider route rather than pretending a playlist tag is an audio tag.
        tag = next(t for t in tags if t.get('content_type', t.get('types')) == 1)
        collection_cache = OUT / f'scene-{ident}-collections-live.json'
        payload = json.loads(collection_cache.read_text(encoding='utf-8')) if collection_cache.exists() else request('/scene/v1/distribution/collection_list', body={
            'appid':3116, 'clientver':11440, 'token':"[REDACTED]", 'userid':0,
            'tag_id':str(tag['tag_id']), 'page':1, 'page_size':30, 'exposed_data':[],
        })
        save(f'scene-{ident}-collections-live.json', payload)
        data = payload.get('data', {})
        result = {'id':ident, 'title':scene['title'], 'kind':'collections',
                  'status':payload.get('status'), 'dataKeys':list(data) if isinstance(data,dict) else type(data).__name__}
        collections = data['list']
        assert collections
        first = collections[0]
        gcid = first.get('global_collection_id') or first.get('content_id') or first['id']
        songs = request('/pubsongs/v2/get_other_list_file_nofilt', query={
            'area_code':1, 'begin_idx':0, 'plat':1, 'type':1, 'mode':1,
            'personal_switch':1, 'extend_fields':'abtags,hot_cmt,popularization',
            'pagesize':30, 'global_collection_id':gcid,
        }, method='GET')
        save(f'scene-{ident}-playlist-songs-live.json', songs)
        song_data = songs.get('data', {})
        result['playlistStatus'] = songs.get('status')
        result['playlistDataKeys'] = list(song_data) if isinstance(song_data, dict) else type(song_data).__name__
        print(json.dumps(result, ensure_ascii=False), flush=True)
        assert payload.get('status') == 1 and songs.get('status') == 1, result
        return result
    cache = OUT / f'scene-{ident}-audio-live.json'
    payload = json.loads(cache.read_text(encoding='utf-8')) if cache.exists() else request('/scene/v1/scene/audio_list', {
        'scene_id': str(ident), 'module_id': str(module['module_id']),
        'tag': str(tag['tag_id']), 'page': 1, 'page_size': 30,
    }, {'appid':3116, 'clientver':11440, 'token':"[REDACTED]", 'userid':0})
    save(f'scene-{ident}-audio-live.json', payload)
    tracks = payload.get('data', {}).get('list', [])
    assert payload.get('status') == 1 and len(tracks) > 0, f'Audio failed for scene {ident}'
    result = {'id':ident, 'title':scene['title'], 'moduleId':module['module_id'],
              'tag':tag['tag_id'], 'tracks':len(tracks), 'status':payload['status'],
              'cover':scene.get('pic') or scene.get('icon') or scene.get('bg_pic')}
    print(json.dumps(result, ensure_ascii=False), flush=True)
    return result

with ThreadPoolExecutor(max_workers=2) as pool:
    results = list(pool.map(check, scenes))
save('scene-live-verification.json', {'anonymous':True, 'accountAccess':False, 'scenes':results})
assert len(results) == len(scenes) == 11
print('PASS: all 11 scene catalogues returned their declared content.', flush=True)
