"""Restore files from manifest and locally downloaded private archive assets.

Usage: python restore.py --assets FOLDER --destination EMPTY_FOLDER
No credential is read or uploaded. Download private archive parts and existing
referenced Release assets while signed in, place them in FOLDER, then run this.
Secrets excluded from backup remain listed and are never fabricated. Redacted
files restore their sanitized copy, not their sensitive original.
"""
from pathlib import Path,PurePosixPath
import argparse,json,hashlib,zipfile,shutil

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--assets',type=Path,required=True)
    parser.add_argument('--destination',type=Path,required=True)
    args=parser.parse_args();assets=args.assets.resolve();destination=args.destination.resolve()
    assert not destination.exists(),'Restore into a new folder; never overwrite a checkout'
    manifest=json.loads((assets/'manifest.json').read_text('utf8'))
    # Validate every dependency before creating a restored file.
    for pack in manifest['packs']:
        with (assets/pack['name']).open('rb') as stream:
            assert hashlib.file_digest(stream,'sha256').hexdigest()==pack['sha256'],pack['name']
    archives={}
    try:
        for row in manifest['files']:
            rel=PurePosixPath(row['path'])
            assert not rel.is_absolute() and '..' not in rel.parts and '\\' not in row['path']
            if row['status'] in ['excludedLocalSecret','linkNotFollowed']:continue
            target=destination.joinpath(*rel.parts)
            assert target.resolve().is_relative_to(destination)
            target.parent.mkdir(parents=True,exist_ok=True)
            digest=hashlib.sha256()
            with target.open('xb') as result:
                if row['status']=='existingReleaseAsset':
                    # Historical releases can each have SHA256SUMS.txt. Use
                    # immutable asset IDs to prevent same-name collisions.
                    source=assets/'existing'/str(row['reference']['assetId'])/row['reference']['assetName']
                    if not source.exists():source=assets/row['reference']['assetName']
                    with source.open('rb') as stream:
                        while chunk:=stream.read(1024*1024):result.write(chunk);digest.update(chunk)
                    expected=row['originalSha256']
                else:
                    for key in row['blocks']:
                        pack=manifest['objects'][key]['pack']
                        if pack not in archives:archives[pack]=zipfile.ZipFile(assets/pack)
                        data=archives[pack].read('objects/'+key)
                        assert hashlib.sha256(data).hexdigest()==key
                        result.write(data);digest.update(data)
                    expected=row['storedSha256']
            assert digest.hexdigest()==expected,row['path']
    finally:
        for archive in archives.values():archive.close()
    print('Restored all included files; review excluded/redacted entries in manifest.json')

if __name__=='__main__':main()
