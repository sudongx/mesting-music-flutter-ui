"""GitHub API transport using existing GCM credentials, never logged or stored."""
from __future__ import annotations

import http.client
import json
import os
from pathlib import Path
import subprocess
from urllib.parse import quote, urlsplit
from urllib.request import Request, urlopen
from urllib.error import HTTPError

from common import ROOT, REPO


def credentials():
    env = os.environ.copy()
    env.update({'GIT_TERMINAL_PROMPT': '0', 'GCM_INTERACTIVE': 'Never'})
    result = subprocess.run(['git', 'credential', 'fill'], cwd=ROOT,
        input=b'protocol=https\nhost=github.com\npath=Mesting42/mesting-music-flutter.git\n\n',
        capture_output=True, env=env)
    if result.returncode:
        raise RuntimeError('Existing GitHub credentials could not be read without interaction')
    values = dict(line.split('=', 1) for line in result.stdout.decode().splitlines() if '=' in line)
    if not values.get('password'):
        raise RuntimeError('No existing GitHub credential was returned')
    return {'User-Agent': 'Mesting-verified-release-backfill',
        'Accept': 'application/vnd.github+json',
        'Authorization': "[REDACTED]"+values['password']}


def request(headers, method, path, body=None):
    assert path.startswith('/repos/'+REPO+'/') or path == '/user'
    data = None if body is None else json.dumps(body, ensure_ascii=False).encode('utf-8')
    actual = dict(headers)
    if data is not None:
        actual['Content-Type'] = 'application/json; charset=utf-8'
    req = Request('https://api.github.com'+path, data=data, headers=actual, method=method)
    try:
        with urlopen(req, timeout=45) as response:
            data = response.read()
            return json.loads(data) if data else None
    except HTTPError as error:
        if method == 'GET' and error.code == 404:
            return None
        raise RuntimeError(f'GitHub API {method} {path.split("?")[0]} returned HTTP {error.code}') from None


def upload(headers, release_id, path, name):
    """Stream one immutable local asset directly to the official upload host."""
    path = Path(path)
    connection = http.client.HTTPSConnection('uploads.github.com', timeout=240)
    route = f'/repos/{REPO}/releases/{release_id}/assets?name='+quote(name, safe='')
    try:
        connection.putrequest('POST', route)
        for key, value in headers.items():
            connection.putheader(key, value)
        connection.putheader('Content-Type', 'application/octet-stream')
        connection.putheader('Content-Length', str(path.stat().st_size))
        connection.endheaders()
        with path.open('rb') as stream:
            sent = 0
            next_report = 25*1024*1024
            while chunk := stream.read(1024*1024):
                connection.send(chunk)
                sent += len(chunk)
                if sent >= next_report:
                    print(f'Uploading {name}: {sent}/{path.stat().st_size} bytes', flush=True)
                    next_report += 25*1024*1024
        response = connection.getresponse()
        data = response.read()
        if response.status != 201:
            raise RuntimeError(f'GitHub upload of {name} returned HTTP {response.status}')
        return json.loads(data)
    finally:
        connection.close()
