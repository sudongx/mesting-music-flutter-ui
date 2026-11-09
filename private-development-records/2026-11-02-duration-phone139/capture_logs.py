"""Bounded capture of only the two authorized player processes."""
import json
from pathlib import Path
import subprocess
import time
import phone

stop = phone.ROOT / 'stop-log-capture'
assert not stop.exists()
children = []
streams = []
try:
    for package in ['com.mesting.music.beta', 'com.netease.cloudmusic']:
        pid = phone.shell('pidof', package).strip().split()[0]
        output = (phone.ROOT / (package + '-sample-logcat-private.txt')).open('wb')
        error = (phone.ROOT / (package + '-logcat-stderr-private.txt')).open('wb')
        process = subprocess.Popen(phone.ADB + ['logcat', '-v', 'threadtime', '--pid=' + pid, '-T', '1'],
            stdout=output, stderr=error, creationflags=subprocess.CREATE_NO_WINDOW)
        streams.extend([output, error])
        children.append((package, pid, process, output))
    phone.record('log-capture-start', packages=[{'package': p, 'pid': pid} for p, pid, _, _ in children])
    print('Capturing only Mesting and official player logs; bounded to 30 minutes and 40 MiB per player.', flush=True)
    started = time.monotonic()
    reason = 'time-limit'
    while time.monotonic() - started < 1800:
        if stop.exists():
            reason = 'requested-stop'
            break
        if any(output.tell() > 40 * 1024 * 1024 for _, _, _, output in children):
            reason = 'byte-limit'
            break
        if any(process.poll() is not None for _, _, process, _ in children):
            reason = 'capture-process-exited'
            break
        time.sleep(1)
finally:
    for _, _, process, _ in children:
        if process.poll() is None:
            process.terminate()
        process.wait(timeout=10)
    for stream in streams:
        stream.close()
    phone.record('log-capture-stop', reason=locals().get('reason', 'exception'))
    print('Log capture stopped: ' + locals().get('reason', 'exception'), flush=True)
