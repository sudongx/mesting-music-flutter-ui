# 1.0.78 ImageX upload investigation (2026-11-08)

Scope: read-only product/official-artifact investigation. No product/test/helper
source was changed by this worker. No phone, ADB, NAS, private account, business
endpoint, image, or credential was accessed. New files only under this directory.

## Confirmed path mismatch

The local 1.0.77 uploader builds ApplyImageUpload and CommitImageUpload at the
grant host's `/` path and signs that same `/`. The shipped official 19.0.0
uploader uses its app-facing `/top/v1` contract instead:

1. `com.ss.bduploader.AWSV4AuthParams.CANONICAL_URI` is the literal `/top/v1`.
   Fresh REA class Evidence parent
   `ev_07dbcfa628c253c4d25d05ba9132c2305f032ffe5c7a563ff47b260d01779516`
   (the exported bundle is authoritative for the exact parent ID).
2. `BDAuthHelper.getSignature()` unconditionally supplies that constant to
   `AWSV4Auth.Builder.canonicalURI(...)`. Parent Evidence
   `ev_856704fc277ae246d360bec679436b1bcb3f23b77a56ecee8b68ada8306da1ce`.
3. The native library has the path/query prefix `/top/v1?` at file offset/VA
   `0x8e863`. Its helper at `0x85178..0x85180` loads this exact string.
4. The common action-request builder calls that helper at `0x35f28`, then the
   string concatenation/assignment helpers at `0x35f34`/`0x35f40` combine it with
   the previously built Action query. The combined string then enters request
   parameter key 111 at `0x35fa4..0x35fb0`.
5. Apply's branch builds `Action=ApplyImageUpload&Version=...` at
   `0x35dd8..0x35e70` and joins the common builder at `0x35f18`. Commit's branch
   starts at `0x362f8`, uses the literal at `0x8c996`
   (`Action=CommitImageUpload&Version=%s&ServiceId=%s&%s&device_platform=%s`),
   and returns to that same common builder at `0x36340`.

This is stronger than a signing constant alone: the native action-request
representation contains `/top/v1?Action=...`, and the Java signer uses the
matching canonical path. Static analysis still does not observe an actual HTTP
request, server routing, or current account acceptance. Do not claim a real
server request was captured.

Recommended minimal correction: keep the official grant's vetted host, normalize
its base to `/top/v1`, and use that same path for both Apply and Commit and their
canonical signatures. Keep storage upload on the returned upload host and its
separate `/upload/v1/{StoreUri}` path. Do not add root/host probing, change account
credentials, or fall back to an unrelated public API.

## Signature findings and scope boundary

Fresh official `AWSV4Auth.prepareCanonicalRequest()` confirms lowercase sorted
headers, blank line, signed-header names and SHA256(payload), with the query
sorted by key and percent-encoded values. `BDAuthHelper.getSignature()` constructs
only the date and security-token signed headers; it does not add `host`. Thus
standard AWS examples requiring host do not prove that Mesting should add it to
this private contract. The HMAC key derivation matches the existing Dart code.

Service `imagex` is a real native literal at `0x8ca43`; the action builder selects
it for the ImageX branch at `0x35fc0..0x35fe0` and stores it through key 114.
The region is not established as a fixed literal by the inspected evidence. It
is read from the upload object's field at `+0x328`, passed as native key 34,
stored in the signing object, and delivered as Java `setStringValue(2, value)`
at `0x16220..0x16228`. The inspected constructor initially zeroes the field.
This worker has not completed the external configuration-to-field chain.

Therefore **empty region remains a compatibility assumption**, not a newly
proven official constant. The path fix should not introduce an unrelated region
change. Region/service choice must remain visible as fixed nonsecret diagnostic
categories if a server receipt later rejects scope.

## User log: observation vs inference

The user-supplied `诊断报告.txt` is complete JSON: 80 records, 43 Qishui.
At `2026-11-08T04:02:06.982543Z` an official read completes HTTP 200; the next
Qishui storage-family event at `04:02:07.242172Z` is `other/dart/HTTP400`.
There are no prior successful `other` requests in that full action window.
Together with the UI text `图片上传未完成`, this is consistent with failure on
the first Apply request. It does not contain the service's error body or a
per-upload-step identifier, so it cannot conclusively prove which server
validation rejected it, or prove the path mismatch is its sole cause.

The dedicated diagnostic change should record Apply/storage/Commit separately,
HTTP status and only allowlisted service error codes / bounded numeric CodeN.
Never include raw error Message, RequestId, upload URL, StoreUri, SessionKey,
AK/SK/security token, account cookies or image bytes.

## Offline independent reference vectors

Run `python -B reference_vectors178.py` only in a new output directory (the
script refuses to overwrite an existing result). All values are fictional.
`reference-vectors178.json` contains exact input, canonical text, SHA256 and MAC
from a separate Python/stdlib implementation of the shipped Java byte steps.
This is an offline reconstruction, not execution of the official app or SDK.

With time `20261108T040207Z`, access key `AKTEST178`, secret
`synthetic-secret-key-178`, token `fixture-session-178`, service
`fixture-service-178`, retained region `''`, signing service `imagex`:

| Request | Canonical path | Signature |
| --- | --- | --- |
| Apply GET | `/top/v1` | `723ca6684f45e1b745ea452a65c49218dc72709d066ab6b558babf82a886dd05` |
| Commit POST | `/top/v1` | `a684304deeabd451fd7af2460bc6abcb9e6cfb068fa2cd819cda4507f9868cc3` |
| Apply GET old-path negative | `/` | `0948753b6c1951e48925ec794ef243c72388bfbf05ab32e431a3026d4476655f` |
| Commit POST old-path negative | `/` | `d037226a711efb1c52ca5fc83c61e3f00c5b086666ece8a0f199036eadce5271` |

The exact query and Commit JSON body are in the JSON/script. Unit regression
should use these pinned inputs and require the dispatched URL path to match
the signed path. An HTTP client fixture should reject `/` and accept `/top/v1`
without claiming the fixture proves current ImageX accepts the account grant.

## Artifact identity and retained evidence

The official original APK, selected raw DEX and extracted native library were
freshly hashed and checked against the APK ZIP members. See
`official19-identities178.json`:

- Official19 APK SHA256 `68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8`.
- Raw classes24.dex SHA256 `bddc2e76dc912d646eb5daa558ff29163acfe0555689664d64292052055d6d53`.
- Analysis-only DEX carrier SHA256 `88b5133659ab71e6e23997fb9b2ca95c10cae390ebdfb7090f30a756c2a54394`.
- Native SHA256 `d2d6fb857391fe35fd175493a3e2a5dbf254e0ec03015962464fc1338a5b0bf0`.

`native-path-selected178.txt` and its provenance JSON retain the relevant ranges
from the earlier exact-library LLVM disassembly. Manual native flow statements
above are derived from these raw instructions, with incomplete interprocedural
coverage explicitly retained. No native decompiler was available on the current
REA server; no tool was installed or reconfigured. REA's portable export-table
check observed native identity under parent
`ev_4daf2d9197443e985124d5d866e76889ff0b78827aeb7d93640949b5b91c9cc3`.

Fresh Java/DEX observations are retained in `rea-imagex178-evidence.json`.
The bundle, rather than any manually typed short ID, is the source of truth.

## Public documentation cross-check (not the app contract)

The first-party [veImageX Apply API](https://docs.volcengine.com/docs/veimagex/get-file-upload-address?lang=en)
and [upload flow](https://docs.volcengine.com/docs/veimagex/veimagex-upload-best-practices?lang=en)
describe its public OpenAPI at root `/` and direct binary PUT. That public
contract is not evidence that the Qishui-granted private AWS-style SDK path
should use root. The shipped app code, not this distinct public protocol,
establishes the `/top/v1` correction. No speculative switch from AWS4 to public
Volc HMAC-SHA256, or from the private storage method to PUT, is recommended.

## Remaining acceptance

The path mismatch is statically confirmed and locally correctable. The actual
HTTP400 disappearance, usable returned storage grant, final playlist URI
readback, and same-account official cover change still require the user's
later device/account run. This investigation does not establish any of those.
