import sys,time,re,subprocess,json
from pathlib import Path
phase=sys.argv[1];out=Path('D:/AnLi/.codex-artifacts/2026-10-30-release120')
log=out/f'native-{phase}.log';seen=set();deadline=time.monotonic()+240
adb='D:/CodexCache/android-build/sdk/platform-tools/adb.exe'
while time.monotonic()<deadline:
 text=log.read_text(encoding='utf-8-sig',errors='replace') if log.exists() else ''
 for marker in re.findall(r'MESTING_DEVICE_CAPTURE ([\w-]+)',text):
  if marker not in seen:
   seen.add(marker)
   (out/f'{phase}-{marker}.png').write_bytes(subprocess.check_output([adb,'-s','eb293ac2','exec-out','screencap','-p']))
   if marker=='benchmark-expanded':
    (out/f'{phase}-display.txt').write_bytes(subprocess.check_output([adb,'-s','eb293ac2','shell','dumpsys','display']))
    (out/f'{phase}-battery.txt').write_bytes(subprocess.check_output([adb,'-s','eb293ac2','shell','dumpsys','battery']))
   print('Captured',phase,marker,flush=True)
 if ('All tests passed' in text or 'Some tests failed' in text or 'Native profile suite failed' in text):break
 time.sleep(.12)
print('observer ended',phase,len(seen),flush=True)
