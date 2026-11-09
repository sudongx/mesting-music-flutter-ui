"""Offline reference vectors from shipped AWSV4Auth's documented byte steps.

All credentials, times and upload session values below are fictional.  This is
a separate Python/stdlib calculation, not the Dart production implementation,
and it never contacts a service or executes the official application.
"""
from pathlib import Path
import hashlib
import hmac
import json
from urllib.parse import quote

OUT = Path(__file__).resolve().parent


def vector(method, path, query, payload):
    stamp = '20261108T040207Z'
    date = stamp[:8]
    access = 'AKTEST178'
    secret = 'synthetic-secret-key-178'
    token = "[REDACTED]"
    region = ''
    service = 'imagex'
    headers = {'x-amz-date': stamp, 'x-amz-security-token': token}
    encode = lambda value: quote(value, safe='~-._')
    canonical_query = '&'.join(
        key + '=' + encode(str(value)) for key, value in sorted(query.items())
    )
    names = ';'.join(sorted(headers))
    header_block = ''.join(key + ':' + headers[key].strip() + '\n'
                           for key in sorted(headers))
    digest = lambda text: hashlib.sha256(text.encode('utf8')).hexdigest()
    canonical = '\n'.join([method, path, canonical_query, header_block,
                           names, digest(payload)])
    scope = '/'.join([date, region, service, 'aws4_request'])
    string_to_sign = '\n'.join(['AWS4-HMAC-SHA256', stamp, scope,
                                digest(canonical)])
    mac = lambda key, text: hmac.new(key, text.encode('utf8'),
                                     hashlib.sha256).digest()
    key = ('AWS4' + secret).encode('utf8')
    for part in [date, region, service, 'aws4_request']:
        key = mac(key, part)
    signature = mac(key, string_to_sign).hex()
    return {
        'fictionalOnly': True,
        'method': method,
        'path': path,
        'query': query,
        'body': payload,
        'accessKey': access,
        'secretKey': secret,
        'sessionToken': token,
        'timeUtc': stamp,
        'region': region,
        'service': service,
        'canonicalRequest': canonical,
        'canonicalSha256': digest(canonical),
        'stringToSign': string_to_sign,
        'signature': signature,
        # SDK has no spaces after comma; Dart's optional spaces do not alter
        # the signed bytes or MAC.  Compare the Credential/Signature values.
        'authorization': ('AWS4-HMAC-SHA256 Credential=' + access + '/' + scope
                          + ',SignedHeaders=' + names + ',Signature=' + signature),
    }


def main():
    apply_query = {'Action': 'ApplyImageUpload', 'Version': '2018-08-01',
                   'ServiceId': 'fixture-service-178', 'FileType': 'image',
                   'UploadNum': '1'}
    commit_query = {'Action': 'CommitImageUpload', 'Version': '2018-08-01',
                    'ServiceId': 'fixture-service-178'}
    body = json.dumps({'SessionKey': 'fixture-session-key-178',
                       'SuccessActionStatus': '200'}, separators=(',', ':'))
    vectors = [
        vector('GET', '/top/v1', apply_query, ''),
        vector('POST', '/top/v1', commit_query, body),
        vector('GET', '/', apply_query, ''),
        vector('POST', '/', commit_query, body),
    ]
    assert vectors[0]['signature'] != vectors[2]['signature']
    assert vectors[1]['signature'] != vectors[3]['signature']
    record = {
        'purpose': 'Offline fictional AWSV4Auth path differential vectors',
        'source': 'Official19 AWSV4Auth / BDAuthHelper static REA observations',
        'networkRequests': 0,
        'scopeLimitation': 'Empty region retained for a one-variable path comparison; not proved live scope.',
        'vectors': vectors,
    }
    destination = OUT / 'reference-vectors178.json'
    assert not destination.exists(), 'Do not replace frozen research results'
    destination.write_text(json.dumps(record, ensure_ascii=False, indent=2)
                           + '\n', encoding='utf8')
    for row in vectors:
        print(row['method'], row['path'], row['signature'])


if __name__ == '__main__':
    main()
