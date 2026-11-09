"""Independent offline HMAC vectors using the shipped native SDK region.

All grants and times are invented. Only Python standard-library code is run;
the APK, native library and real business services are never executed.
"""
import hashlib
import hmac
import json
from pathlib import Path
from urllib.parse import quote

OUT = Path(__file__).resolve().parent


def sign(method, query, body, region):
    path = '/top/v1'
    access_key = 'AKTEST178'
    secret_key = 'synthetic-secret-key-178'
    token = "[REDACTED]"
    timestamp = '20261108T040207Z'
    date = timestamp[:8]
    service = 'imagex'
    headers = {'x-amz-date': timestamp, 'x-amz-security-token': token}
    names = ';'.join(sorted(headers))
    canonical_query = '&'.join(k + '=' + quote(str(v), safe='~-._')
                               for k, v in sorted(query.items()))
    canonical_headers = ''.join(k + ':' + headers[k].strip() + '\n'
                                for k in sorted(headers))
    digest = lambda x: hashlib.sha256(x.encode('utf8')).hexdigest()
    canonical = '\n'.join([method, path, canonical_query, canonical_headers,
                            names, digest(body)])
    scope = '/'.join([date, region, service, 'aws4_request'])
    to_sign = '\n'.join(['AWS4-HMAC-SHA256', timestamp, scope, digest(canonical)])
    mac = lambda key, value: hmac.new(key, value.encode('utf8'), hashlib.sha256).digest()
    key = ('AWS4' + secret_key).encode('utf8')
    for part in [date, region, service, 'aws4_request']:
        key = mac(key, part)
    signature = mac(key, to_sign).hex()
    authorization = [REDACTED]
                     + ',SignedHeaders=' + names + ',Signature=' + signature)
    return {'fictionalOnly': True, 'method': method, 'path': path,
            'query': query, 'body': body, 'accessKey': access_key,
            'secretKey': secret_key, 'sessionToken': token,
            'timeUtc': timestamp, 'region': region, 'service': service,
            'canonicalRequest': canonical, 'canonicalSha256': digest(canonical),
            'stringToSign': to_sign, 'signature': signature,
            'authorization': authorization}


def main():
    apply = {'Action': 'ApplyImageUpload', 'Version': '2018-08-01',
             'ServiceId': 'fixture-service-178', 'FileType': 'image', 'UploadNum': '1'}
    commit = {'Action': 'CommitImageUpload', 'Version': '2018-08-01',
              'ServiceId': 'fixture-service-178'}
    body = '{"SessionKey":"fixture-session-key-178","SuccessActionStatus":"200"}'
    old = [sign('GET', apply, '', ''), sign('POST', commit, body, '')]
    # Keep the old released calculation immutable and verify this separate
    # implementation can reproduce it before changing the one region input.
    assert old[0]['signature'] == '723ca6684f45e1b745ea452a65c49218dc72709d066ab6b558babf82a886dd05'
    assert old[1]['signature'] == 'a684304deeabd451fd7af2460bc6abcb9e6cfb068fa2cd819cda4507f9868cc3'
    new = [sign('GET', apply, '', 'sdwdmwlll'),
           sign('POST', commit, body, 'sdwdmwlll')]
    assert new[0]['signature'] != old[0]['signature']
    assert new[1]['signature'] != old[1]['signature']
    output = {'purpose': 'Official19 native-default region differential vectors',
              'networkRequests': 0, 'officialAppOrLibraryExecuted': False,
              'oldEmptyRegionReproduced': True,
              'oldEmptyRegionNegativeVectors': old, 'vectors': new}
    dest = OUT / 'reference-vectors179.json'
    assert not dest.exists(), 'Do not overwrite retained research'
    dest.write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    for row in new:
        print(row['method'], row['path'], row['region'], row['signature'])


if __name__ == '__main__':
    main()
