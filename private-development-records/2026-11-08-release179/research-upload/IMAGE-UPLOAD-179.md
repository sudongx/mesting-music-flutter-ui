# ImageX InvalidAuthorization investigation (2026-11-08)

## Result and minimal correction

The official 19.0.0 uploader's standard native default region is the literal
**`sdwdmwlll`**, not an empty string. The complete byte-copy, request-parameter,
JNI and Java assignment path is below. The 1.0.78 client signs the same private
ImageX gateway with region `''`; this is a confirmed source-contract mismatch.

Recommended source correction:

1. Retain the verified `/top/v1` gateway path and `imagex` signing service.
2. Derive both Apply and Commit signing keys and Credential scopes with the
   official standard default region `sdwdmwlll`.
3. Emit the official Authorization formatting exactly:
   `AWS4-HMAC-SHA256 Credential=...,...` with no spaces after the commas.
4. Keep the same two signed headers (`x-amz-date`, `x-amz-security-token`).
   Do not add host, change algorithm to public Volc HMAC, substitute a public
   region name, or probe a list of alternative parameters.

The region change is a statically established correction; its ability to remove
the user's actual InvalidAuthorization error is still **unverified**. No real
grant, business request or upload was made in this investigation.

## Actual 1.0.78 evidence

Read-only input: `C:/Users/zyt/Downloads/mesting-qishui-report.json`.
The complete schema178 report has 44 records. Its own contract summary confirms
`gatewayPath=/top/v1`, `signature=AWS4-HMAC-SHA256`, `service=imagex`, and
`regionMode=emptyUnverified`.

Records 10 and 14 are both `coverUpload/apply/http`, HTTP400, service code
`InvalidAuthorization`. Both follow successful helper signing, HTTP200 uploader
responses and successfully parsed grants. This supersedes any assumption that
the 1.0.78 path correction alone fixed actual uploads. The sanitized report does
not contain real Authorization bytes or grant secrets; it cannot identify the
server's exact internal parser failure or rule out other later defects.

## Correction to the earlier region-field interpretation

The 178 report left region unproved and incorrectly associated the original
upload object's `+0x328` with region through native key34. A full register-level
trace now establishes **key34 is the secret-key path**. The old 178 files and
frozen artifacts remain untouched; this document records the corrected result.

The relevant raw library is SHA256
`d2d6fb857391fe35fd175493a3e2a5dbf254e0ec03015962464fc1338a5b0bf0`.
Its first load segment maps file offsets directly to the quoted VAs.

| Upload object field | Native signing setter key | Signing object field | Java BDAuthHelper key | Meaning |
| --- | --- | --- | --- | --- |
| `+0x348` | 109 | `+0x00` | 2 | regionName |
| `+0x320` | 110 | `+0x08` | 0 | accessKeyID |
| `+0x328` | 34 | `+0x10` | 1 | secretAccessKey |
| `+0x330` | 103 | `+0x18` | 9 | session token |
| literal `imagex` for ImageX | 114 | `+0x20` | 3 | serviceName |

JNI shuffles registers between native field reads and Java calls; the mapping
must follow those moves rather than infer Java keys from native field order.

## Nonempty region literal: exact static chain

1. Base constructor at `0x2dff4` initializes the upload object.
   At `0x2e394..0x2e3a4`, it loads rodata address `0x90bb4` into x0.
   The bytes there are `73 64 77 64 6d 77 6c 6c 6c 00`, i.e.
   `sdwdmwlll` followed by NUL.
2. `0x2e3d4` calls the imported `__strlen_chk`, producing length9. At
   `0x2e3f4`, helper `0x7d618` allocates length+1 with `operator new[]`.
   `0x85eec` only places length in x2 and saves the destination pointer;
   `0x2e408` calls imported `memcpy` with the literal source, then writes NUL.
   The pointer is stored in upload object `+0x348` at `0x2e404`.
3. The ImageX request builder's `0x80a78` loads upload `+0x348` into x2 and
   sets key109; caller `0x35f7c` invokes setter `0x51cf0`.
4. That setter's jump table at rodata `0x88c13` sends key109 to `0x51d94`.
   This branch is `strlen` / new[] / memcpy / NUL, storing the copied value at
   signing object `+0x00`. No character transform appears in that path.
5. `0x15fa8` loads signing object `+0x00` into x23. At `0x16164..0x16174`
   helper `0x7d270` invokes the JNIEnv `NewStringUTF` slot at offset `0x538`
   and stores the resulting Java string in x28.
6. `0x16220..0x16228` calls `BDAuthHelper.setStringValue(2, x28)`.
   Fresh REA Evidence
   `ev_7ea255ad2a8f23760a384cdc6f3b651240a27283cbba95dea4de0179a668e773`
   shows Java key2 directly assigns `regionName`.
7. `AWSV4Auth.Builder.regionName` directly assigns its argument (Evidence
   `ev_cc44214705d5a40bf93f2bc115efbfe5331408399a5a57d7a0e3171bb208b1fe`).
   `AWSV4Auth(Builder)` directly copies that field (Evidence
   `ev_b1d7f56c54b68bdda46f0f1931b4ca9932901b6daa88339e96c7e62588d7e61d`).
   The previously retained `prepareStringToSign` and `getSignatureKey` use it
   directly in the scope and HMAC key derivation.

`native-region-selected179.txt` contains the precise native instruction ranges;
its provenance JSON pins the native and saved disassembly hashes, literal
bytes and key jump targets. This is a derived static trace, not execution.

### Check against a ciphertext or initialization placeholder

The bytes are in non-writable `.rodata` (section flags2), not a mutable global.
The ELF's sole `.init_array` entry is `0x10460`, which registers destruction of a
separate static object with `__cxa_atexit`; it does not decode this string. The
literal has only two ADRP+ADD exact references, both in the constructor's copy
sequence. No relocation writes overlap the ten literal bytes. The native
dynamic symbol table has no imported mprotect/mmap/dlopen/dlsym entry. Its
adjacent semantic constants `video`, `imagex`, `/top/v1?` are ordinary plaintext.

More importantly, the actual copy/getter/JNI/Java path above contains no decode
step: `__strlen_chk`, allocation, `memcpy`, `NewStringUTF`, then assignments.
These bounded checks support treating `sdwdmwlll` as the static SDK default
value. They do not claim universal absence of external runtime patching or
self-modifying behavior outside the inspected path.

## Does Qishui's upload operation override the default?

Fresh byte-identical classes21 DEX source for
`UploadImageObservable.F` (Evidence
`ev_465e3065901c7fa6a97dcdc84e7f62e572f9bc2aaefdcaa56df967c1ceb339ae`)
creates a new `BDImageXUploader` for the grant response. It then sets only the
grant image host, access key, secret key, session token and service ID, HTTPS,
the file reader/path and listener, before calling `start()`.
It does not set a region, generic string value, config map or reusable uploader.

`BDImageXUploader.<init>` only invokes the base constructor (Evidence
`ev_6aed4bf21db9832d3a06e48fd605411bc5e803fafe4facbe04d2527e2151ea37`).
The base constructor invokes `_create(1)` in the previous retained evidence.
Both static `(I)J` constructor candidates call the same native base constructor
`0x2dff4` (at `0x13298` and `0x13c2c`). The ImageX candidate also sets its native
type to5 for input1 at `0x13bf0..0x13c18`. No constructor after the base call
sets region in the inspected path.

`BDImageXUploaderBase.start()` only conditionally sets the SDK context directory,
updates local state/time and invokes `_start` (Evidence
`ev_52d6a64f980801f11646a9d00e2f02372808f3f85fc2299e16bb077e8641dd64`).
The standard Qishui Java business path therefore relies on the native default.
Native context-file loading, hotfix dispatch at the beginning of F and actual
device-side override state were not observed and remain outside the claim.

The bounded full-root DEX scan in `official-upload-callers179.json` scanned
method bodies containing references to selected ImageX setters without unknown
opcodes in those DEXes. It found 23 callers across6 DEXes, including unrelated
live/game/IM upload features. Those other call sites are not the playlist-cover
operation and do not establish an override in F. The JNI tool additionally
reported ambiguous class attribution and partial total APK native coverage;
those limits are retained in the exported evidence rather than hidden.

## Authorization format and unchanged fields

The shipped `buildAuthorizationString` (retained178 parent Evidence
`ev_6a3921db97af3ef6facbc0094234c6e8c93bb5bdb81e8c0f6cc00d5dd0905016`)
uses comma-separated Credential, SignedHeaders and Signature with no spaces
after commas. The client currently inserts spaces; align exact formatting as
a narrow compatibility correction. Whitespace after commas is outside the
HMAC calculation and is not proven to be the server's particular rejection.

Keep access-key/secret/token mappings from the official grant; source F matches
the current app's named fields. Keep canonical header handling and hashing as
previously validated. Do not print/store a real Authorization or temporary key
to diagnose this; the region and formatting contract are public fixed values.

## Independent vectors

`reference_vectors179.py` is a separate Python/stdlib HMAC calculation using
invented grants. It first reproduces both frozen178 empty-region vectors, then
changes only region to the official native default. All inputs/canonical bytes
are in `reference-vectors179.json`.

| Request | Region | Expected SHA256-HMAC signature |
| --- | --- | --- |
| Apply GET `/top/v1` | `sdwdmwlll` | `df9ad51a6e3e04cf9fe2f80da615e795abf8e0aeaa6ff91c899f45c639e3c9cf` |
| Commit POST `/top/v1` | `sdwdmwlll` | `ac5d10f6313a2fa3d63d571129b2b7478a39955d54847011a2b66936cd0eb97a` |

The retained178 negative signatures with empty region are respectively
`723ca6684f45e1b745ea452a65c49218dc72709d066ab6b558babf82a886dd05` and
`a684304deeabd451fd7af2460bc6abcb9e6cfb068fa2cd819cda4507f9868cc3`.
No old178 file is changed. The vectors establish deterministic local bytes,
not real authorization, image upload or final official playlist readback.

## Evidence retention and remaining acceptance

The latest complete evidence bundle is `rea-imagex179-evidence-complete.json`
(46 records, including the30 imported178 records). The earlier179 export is a
12-record checkpoint; retain both. The server restarted during the interrupted
investigation, so F and setStringValue were re-read on the fresh session, and
the old178 bundle re-imported before final export. No old evidence was edited.

The raw official APK/native identities are unchanged from the independently
checked178 identity record. No product, Flutter test, assistant, phone, NAS,
real grant or actual music business operation was run by this worker.

The user's next actual upload must still confirm Apply accepts the fixed scope,
storage and Commit succeed, the playlist update reads back the exact URI and
the official app shows the cover. Do not label any of these accepted based on
this static correction or local fixtures alone.
