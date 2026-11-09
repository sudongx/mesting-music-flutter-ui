"""Anonymous, bounded catalogue reads using the shipped Rust signing contract.

No user cookies, login state, device storage or reporting routes are accessed.
The POST below is the provider's read-only catalogue query contract.
"""
import hashlib
import json
from pathlib import Path
import re
import time
import urllib.parse
import urllib.request

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-28-followup-ui-sync'
salt = re.search(r'pub const ROUTE: &str = "([^"]+)"', (ROOT / 'third_party/md3music/rust/src/helper.rs').read_text(encoding='utf-8')).group(1)

def request(path, query=None, body=None, method='POST'):
    params = {'dfid': '-', 'mid': '-', 'uuid': "[REDACTED]", 'appid': 3116, 'clientver': 11440, 'clienttime': int(time.time())}
    params.update(query or {})
    data = b'' if body is None else json.dumps(body, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
    joined = ''.join(k + '=' + str(params[k]) for k in sorted(params))
    params['signature'] = hashlib.md5(salt.encode() + joined.encode() + data + salt.encode()).hexdigest()
    headers = {'User-Agent': 'Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi',
               'dfid': '-', 'mid': '-', 'clienttime': str(params['clienttime']),
               'kg-rc': '1', 'kg-thash': '5d816a0', 'kg-rec': '1',
               'kg-rf': 'B9EDA08A64250DEFFBCADDEE00F8F25F', 'Content-Type': 'application/json'}
    req = urllib.request.Request('https://gateway.kugou.com' + path + '?' + urllib.parse.urlencode(params),
                                 data=None if method == 'GET' else data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=20) as response:
        return json.load(response)

def save(name, value):
    (OUT / name).write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')

if __name__ == '__main__':
    catalog = request('/scene/v1/scene/list', method='GET')
    save('scene-catalog-live.json', catalog)
    print(json.dumps({'catalogStatus': catalog.get('status'), 'catalogKeys': list(catalog), 'dataKeys': list(catalog.get('data', {}))}, ensure_ascii=False), flush=True)
    def rows(node):
        if isinstance(node, list):
            return [item for child in node for item in rows(child)]
        if not isinstance(node, dict): return []
        for key in ['data', 'scene_list', 'scenes', 'list', 'lists', 'info', 'children']:
            nested = rows(node.get(key))
            if nested: return nested
        return [node] if (node.get('scene_id') or node.get('id')) and (node.get('scene_name') or node.get('name') or node.get('title')) else []
    scenes = rows(catalog)
    print(json.dumps({'scenes': [{'id': s.get('id', s.get('scene_id')), 'name': s.get('name') or s.get('scene_name') or s.get('title')} for s in scenes]}, ensure_ascii=False), flush=True)
    # First reproduce the exact named category reported in the screenshot.
    target = next(s for s in scenes if '心情' in str(s.get('name') or s.get('scene_name') or s.get('title', '')))
    ident = str(target.get('scene_id', target.get('id')))
    module = request('/scene/v1/scene/module', {'scene_id': ident})
    save('scene-mood-module-live.json', module)
    data = module.get('data', {})
    print(json.dumps({'moodId': ident, 'moduleStatus': module.get('status'), 'dataKeys': list(data) if isinstance(data, dict) else str(type(data)), 'moduleCount': len(data.get('content', [])) if isinstance(data, dict) else 0}, ensure_ascii=False), flush=True)
    content = data['content']
    music = content['music'][0]
    tag = next(tag for tag in music['extra'] if tag.get('content_type') == 6)
    audio = request('/scene/v1/scene/audio_list', {
        'scene_id': ident, 'module_id': str(music['module_id']), 'tag': str(tag['tag_id']), 'page': 1, 'page_size': 30,
    }, {'appid':3116, 'clientver':11440, 'token':"[REDACTED]", 'userid':0})
    save('scene-mood-audio-live.json', audio)
    print(json.dumps({'audioStatus': audio.get('status'), 'audioKeys': list(audio), 'dataKeys': list(audio.get('data', {}))}, ensure_ascii=False), flush=True)
