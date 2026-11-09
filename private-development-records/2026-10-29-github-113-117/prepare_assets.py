"""Prepare original release attachments and their checksums without altering inputs."""
from common import *
archive=read(OUT/'archive-commits.json')
for row in archive['commits']:
 folder=OUT/'assets'/row['tag'];folder.mkdir(parents=True,exist_ok=True)
 paths=[
  (ROOT/row['apk'],Path(row['apk']).name),
  (ROOT/row['zip'],Path(row['zip']).name),
  (ROOT/f"release/Mesting-Music-v{row['version']}-verification.json",f"Mesting-Music-v{row['version']}-verification.json"),
  (ROOT/f"release/Mesting-Music-v{row['version']}-source-verification.json",f"Mesting-Music-v{row['version']}-source-verification.json"),
  (OUT/f"{row['tag']}-source-manifest.json",f"{row['tag']}-source-manifest.json"),
  (ROOT/f"docs/validation-2026-10-29-v{row['version']}.json",f"validation-2026-10-29-v{row['version']}.json"),
  (ROOT/row['installation'],Path(row['installation']).name),
  (ROOT/row['fixes'],Path(row['fixes']).name),
  (ROOT/row['handoff'],Path(row['handoff']).name),
  (ROOT/f"HANDOFF-CURRENT-SESSION-2026-10-29-v{row['version']}.md",f"HANDOFF-CURRENT-SESSION-2026-10-29-v{row['version']}.md"),
  (ROOT/f"release/Mesting-Music-v{row['version']}-release-notes.txt",f"Mesting-Music-v{row['version']}-release-notes.txt"),
  (OUT/'generated'/row['tag']/'archive-provenance.md','archive-provenance.md'),
 ]
 assets=[]
 for p,name in paths:
  assert p.is_file(),p
  # Copies of small metadata make retry inputs immutable too. Large artifacts
  # stream directly from the hash-guarded frozen delivery files.
  if p.stat().st_size<5*1024*1024:
   target=folder/name
   if not target.exists():target.write_bytes(p.read_bytes())
   assert sha(target)==sha(p);p=target
  assets.append({'path':str(p),'name':name,'size':p.stat().st_size,'sha256':sha(p)})
 sums=folder/'SHA256SUMS.txt';sums.write_text(''.join(f"{x['sha256']}  {x['name']}\n" for x in assets),encoding='ascii')
 assets.append({'path':str(sums),'name':sums.name,'size':sums.stat().st_size,'sha256':sha(sums)})
 assert len(assets)==13 and len({x['name'] for x in assets})==13
 save(folder/'expected-assets.json',assets)
 print('Prepared',row['tag'],len(assets),'original delivery/verification attachments',flush=True)
preserve()
