"""Task-local loopback Maven transport; immutable artifacts keep their versions.

Only official public repositories are forwarded. Exact Gradle content-store
artifacts are reused after their SHA1 directory name is verified. No project or
global Gradle configuration is modified, and no credential/header is forwarded.
"""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.request import build_opener, ProxyHandler, Request
from urllib.error import HTTPError
from urllib.parse import unquote, urlsplit
import hashlib, json, threading, time

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / 'maven-transport-cache'
GRADLE = Path('D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
BASES = {'google': 'https://dl.google.com/dl/android/maven2/',
         'central': 'https://repo.maven.apache.org/maven2/',
         'plugins': 'https://plugins.gradle.org/m2/',
         'jitpack': 'https://jitpack.io/',
         'flutter': 'https://storage.googleapis.com/download.flutter.io/'}
OPENER = build_opener(ProxyHandler({}))
LOCK = threading.Lock()
COUNTS = {'requests': 0, 'local': 0, 'fetched': 0, 'misses': 0}

def cached_artifact(relative):
    parts = relative.split('/')
    if len(parts) < 4: return None
    group, artifact, version, filename = '.'.join(parts[:-3]), parts[-3], parts[-2], parts[-1]
    checksum = filename.endswith(('.sha1', '.sha256', '.md5'))
    artifact_name = filename.rsplit('.', 1)[0] if checksum else filename
    parent = GRADLE / group / artifact / version
    if not parent.is_dir(): return None
    for file in parent.glob('*/' + artifact_name):
        if not file.is_file(): continue
        data = file.read_bytes()
        if hashlib.sha1(data).hexdigest() != file.parent.name: continue
        if checksum:
            algorithm = filename.rsplit('.', 1)[1]
            return hashlib.new(algorithm, data).hexdigest().encode()
        return data
    return None

class Handler(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'
    def log_message(self, *args): pass
    def do_HEAD(self): self.serve(False)
    def do_GET(self): self.serve(True)
    def serve(self, body):
        path = unquote(urlsplit(self.path).path).lstrip('/')
        parts = path.split('/')
        if len(parts) < 2 or parts[0] not in BASES or any(p in {'', '.', '..'} or '\\' in p for p in parts):
            self.send_error(404); return
        kind, relative = parts[0], '/'.join(parts[1:])
        with LOCK: COUNTS['requests'] += 1
        target = CACHE / kind / relative
        try:
            data = target.read_bytes() if target.is_file() else None
            if data is None:
                data = cached_artifact(relative)
                if data is not None:
                    with LOCK: COUNTS['local'] += 1
                else:
                    request = Request(BASES[kind] + relative, headers={'User-Agent': 'Mesting-local-build-cache/1'})
                    with OPENER.open(request, timeout=25) as response:
                        data = response.read(120 * 1024 * 1024 + 1)
                    if len(data) > 120 * 1024 * 1024: raise ValueError('artifact limit')
                    with LOCK: COUNTS['fetched'] += 1
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
            self.send_response(200)
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Content-Type', 'application/octet-stream')
            self.send_header('ETag', '"' + hashlib.sha256(data).hexdigest() + '"')
            self.end_headers()
            if body: self.wfile.write(data)
        except HTTPError as error:
            with LOCK: COUNTS['misses'] += 1
            self.send_error(error.code if error.code in {400, 401, 403, 404} else 502)
        except (BrokenPipeError, ConnectionResetError): pass
        except Exception:
            self.send_error(502)
        finally:
            with LOCK:
                (ROOT / 'maven-transport-status.json').write_text(json.dumps(COUNTS), 'utf-8')

server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
server.daemon_threads = True
(ROOT / 'maven-transport-port.txt').write_text(str(server.server_port), 'utf-8')
print(json.dumps({'host': '127.0.0.1', 'port': server.server_port}), flush=True)
server.serve_forever()
