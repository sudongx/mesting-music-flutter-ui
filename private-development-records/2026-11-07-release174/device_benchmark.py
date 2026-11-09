"""Bounded real-app frame timeline capture; navigation/scroll only, no playback."""
from pathlib import Path
import json, subprocess, sys, time

ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-07-release174/device'
ADB='D:/CodexCache/android-build/sdk/platform-tools/adb.exe';SERIAL='eb293ac2'
def adb(*args, **kwargs):
    return subprocess.run([ADB,'-s',SERIAL,*args],capture_output=True,check=True,**kwargs)
def screen(name):
    p=OUT/name;data=adb('exec-out','screencap','-p').stdout
    assert data.startswith(b'\x89PNG');p.write_bytes(data)
def shell(*args):return adb('shell',*args).stdout.decode('utf-8',errors='replace')
def sample(label):
    assert label in ('before','after')
    assert 'com.mesting.music' in shell('dumpsys','window','windows')
    # Starting point: the production profile root, with playback paused.
    assert not (OUT/f'{label}-scenario.json').exists()
    screen(f'{label}-scenario-start.png')
    for service in ('meminfo','thermalservice'):
        args=[service,'com.mesting.music'] if service=='meminfo' else [service]
        (OUT/f'{label}-{service}-start.txt').write_text(shell('dumpsys',*args),'utf-8')
    config='buffers { size_kb: 16384 fill_policy: RING_BUFFER }\ndata_sources { config { name: "android.surfaceflinger.frametimeline" } }\ndata_sources { config { name: "linux.process_stats" process_stats_config { scan_all_processes_on_start: true } } }\nduration_ms: 30000\n'
    remote=f'/data/misc/perfetto-traces/mesting174_{label}.pftrace'
    trace=subprocess.Popen([ADB,'-s',SERIAL,'shell','perfetto','--txt','-c','-','-o',remote],stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    trace.stdin.write(config.encode());trace.stdin.close();time.sleep(1)
    begun=time.monotonic();events=[]
    # Coordinates are taken from the just-inspected 1080x2400 production screen.
    # Repeat this exact order and spacing after the retained-data upgrade.
    for i,x in enumerate([155,540,735,350,155,735,540,155,350,540,735,155]):
        shell('input','tap',str(x),'2235')
        events.append({'action':'rootTab','x':x,'atMs':round((time.monotonic()-begun)*1000)})
        time.sleep(.45 if i%3 else .9)
    for index in range(6):
        a,b=(1700,720) if index%2==0 else (720,1700)
        shell('input','swipe','580',str(a),'580',str(b),'350')
        events.append({'action':'scroll','direction':'down' if a>b else 'up','atMs':round((time.monotonic()-begun)*1000)})
        time.sleep(.45)
    screen(f'{label}-scenario-end.png')
    trace.wait(timeout=40)
    stdout=trace.stdout.read().decode('utf-8',errors='replace');stderr=trace.stderr.read().decode('utf-8',errors='replace')
    (OUT/f'{label}-perfetto-status.txt').write_text(stdout+'\n'+stderr,'utf-8')
    assert trace.returncode==0,(trace.returncode,stderr)
    adb('pull',remote,str(OUT/f'{label}-frames.pftrace'))
    for service in ('meminfo','thermalservice'):
        args=[service,'com.mesting.music'] if service=='meminfo' else [service]
        (OUT/f'{label}-{service}-end.txt').write_text(shell('dumpsys',*args),'utf-8')
    result={'label':label,'events':events,'injectedActions':len(events),'scenarioElapsedMs':round((time.monotonic()-begun)*1000),'performancePass':None,'note':'Injected events and captured trace are evidence only; app-frame coverage must be verified before reporting jank.'}
    (OUT/f'{label}-scenario.json').write_text(json.dumps(result,indent=2),'utf-8')
    print(json.dumps({'label':label,'captured':True,'events':len(events)}))
if __name__=='__main__':sample(sys.argv[1])
