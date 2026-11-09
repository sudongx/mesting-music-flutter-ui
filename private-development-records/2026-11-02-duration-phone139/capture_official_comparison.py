"""Capture only the two authorized player PIDs for this comparison stage."""
import subprocess
import time
import phone

children = []
streams = []
reason = 'time-limit'
try:
    for package in ['com.mesting.music.beta', 'com.netease.cloudmusic']:
        pid = phone.shell('pidof', package).strip().split()[0]
        stream = (phone.ROOT / (package + '-official-comparison-logcat-private.txt')).open('xb')
        error = (phone.ROOT / (package + '-official-comparison-stderr-private.txt')).open('xb')
        process = subprocess.Popen(phone.ADB + ['logcat', '-v', 'threadtime', '--pid=' + pid, '-T', '1'],
            stdout=stream, stderr=error, creationflags=subprocess.CREATE_NO_WINDOW)
        streams.extend([stream, error])
        children.append((package, pid, process, stream))
    phone.record('official-comparison-log-start', packages=[{'package': p, 'pid': pid} for p, pid, _, _ in children])
    print('Scoped official comparison capture started; 20 minute or 40 MiB limit.', flush=True)
    started = time.monotonic()
    while time.monotonic() - started < 1200:
        if (phone.ROOT / 'stop-official-comparison-log').exists():
            reason = 'requested-stop'
            break
        if any(stream.tell() > 40 * 1024 * 1024 for _, _, _, stream in children):
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
    phone.record('official-comparison-log-stop', reason=reason)
    print('Scoped capture stopped: ' + reason, flush=True)
