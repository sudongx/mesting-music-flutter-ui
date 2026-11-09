"""Observe version-pinned cold launches without clearing app data or accounts."""
from pathlib import Path
import subprocess,time,json,sys
ADB='D:/CodexCache/android-build/sdk/platform-tools/adb.exe';SERIAL='eb293ac2'
OUT=Path('D:/AnLi/.codex-artifacts/2026-11-07-release174/device')
def adb(*a):return subprocess.run([ADB,'-s',SERIAL,*a],capture_output=True,check=True)
package=sys.argv[1];label=sys.argv[2]
assert package in ['com.mesting.music','com.netease.cloudmusic','com.kugou.android','com.luna.music']
component=adb('shell','cmd','package','resolve-activity','--brief','-a','android.intent.action.MAIN','-c','android.intent.category.LAUNCHER',package).stdout.decode().strip().splitlines()[-1]
assert component.startswith(package+'/'),component
folder=OUT/label;folder.mkdir(exist_ok=False)
adb('shell','am','force-stop',package)
start=time.monotonic()
p=subprocess.Popen([ADB,'-s',SERIAL,'shell','am','start','-W','-n',component],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
shots=[]
for target in [.35,1,2,4]:
 time.sleep(max(0,target-(time.monotonic()-start)))
 data=adb('exec-out','screencap','-p').stdout
 assert data.startswith(b'\x89PNG');name=f'at-{target}.png';(folder/name).write_bytes(data)
 shots.append({'path':name,'capturedAtMs':round((time.monotonic()-start)*1000)})
stdout,stderr=p.communicate(timeout=20)
(folder/'am-start.txt').write_bytes(stdout+b'\n'+stderr)
data={'package':package,'component':component,'shots':shots,'exit':p.returncode,'dataCleared':False,'note':'am start TotalTime is Android activity startup, not completion of catalogue refresh.'}
(folder/'capture.json').write_text(json.dumps(data,indent=2),'utf-8')
print(json.dumps(data))
