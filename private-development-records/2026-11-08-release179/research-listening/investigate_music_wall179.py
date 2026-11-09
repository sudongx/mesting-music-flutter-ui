"""Read retained official APKs; index direct music-wall request construction.

No APK execution, service requests, user credentials or REA session changes.
Instruction boundaries and resolved references are original DEX observations;
branch/register interpretation remains static analyst inference.
"""
from pathlib import Path
import hashlib
import json
import re
import sys
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / '.codex-artifacts/2026-11-05-soda-rootless-feasibility'))
from index_official_hosts import Dex
from index_official_host_calls import calls
from index_phone_context_calls import proto
from dump_dex_method_insns import decode
from read_dex_contract import Dex as AnnotationDex

SOURCES = [
    ('19', ROOT / '.codex-artifacts/2026-11-06-release165/official-device-19.0.0.apk',
     '68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8'),
    ('21', ROOT / '.codex-artifacts/2026-11-05-soda-rootless-feasibility/official-android-latest.apk',
     'b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741'),
]
TARGET = 'Lcom/luna/biz/me/user/net/UserApi$GetMyMusicWallRequest;'
EXTRA = 'Lcom/luna/biz/me/user/net/UserApi$FeedMusicWallExtra;'
WANTED_CLASSES = {
    TARGET, EXTRA,
    'Lcom/luna/biz/me/user/net/UserApi;',
    'Lcom/luna/biz/me/config/MusicWallListenDurVipConfig;',
    'Lcom/luna/biz/me/experiment/MusicWallOptimizeConfig;',
    'Lcom/luna/biz/me/user/musicwall/ab/MusicWallFirstStateAB;',
    'Lcom/luna/biz/me/user/net/BaseNetGetMusicWallResponse;',
    'Lcom/luna/biz/me/user/net/NetGetMyMusicWallResponse;',
}

for version, path, expected in SOURCES:
    actual = hashlib.file_digest(path.open('rb'), 'sha256').hexdigest()
    assert actual == expected, path
    report = {'version': version, 'source': str(path.relative_to(ROOT)), 'sha256': actual,
              'scope': __doc__, 'dex': []}
    with zipfile.ZipFile(path) as apk:
        for name in apk.namelist():
            if not re.fullmatch(r'classes\d*\.dex', name):
                continue
            data = apk.read(name)
            dex = Dex(data)
            targets = {}
            for i in range(dex.methods_count):
                method = dex.method(i)
                if ((method['owner'] in {TARGET, EXTRA} and method['name'] == '<init>') or
                        (method['owner'] == 'Lcom/luna/biz/me/user/net/UserApi;' and
                         method['name'] == 'getMeMusicWall')):
                    targets[i] = {**method, 'prototype': proto(dex, method['proto_index'])}
            classes = []
            found = [owner for _, owner, _ in dex.classes() if owner in WANTED_CLASSES]
            if found:
                ann = AnnotationDex(data)
                classes = [ann.inspect_class(owner) for owner in found]
            if not targets and not classes:
                continue
            entry = {'member': name, 'sha256': hashlib.sha256(data).hexdigest(),
                     'classes': classes, 'targets': list(targets.values()), 'callers': [],
                     'decodeErrors': []}
            for ordinal, owner, index, offset in dex.code_methods():
                try:
                    sites = list(calls(dex, offset, targets))
                    if sites:
                        entry['callers'].append({**dex.method(index),
                            'prototype': proto(dex, dex.method(index)['proto_index']),
                            'classDefinition': ordinal, 'codeOffset': offset, 'sites': sites,
                            **decode(dex, offset)})
                except (IndexError, ValueError) as error:
                    entry['decodeErrors'].append({'methodIndex': index, 'kind': type(error).__name__})
            report['dex'].append(entry)
    target = OUT / f'music-wall-call-index{version}.json'
    assert not target.exists(), target
    target.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf8')
    print(json.dumps({'version': version, 'dex': len(report['dex']),
                     'callers': [{'member': d['member'], 'owner': c['owner'],
                                  'name': c['name'], 'sites': len(c['sites'])}
                                 for d in report['dex'] for c in d['callers']],
                     'errors': sum(len(d['decodeErrors']) for d in report['dex'])}, ensure_ascii=False))
