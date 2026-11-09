# Together ended-message type 51: read-only static evidence

The user supplied two lossy schema reports from 1.0.40. Both have inner
`type=51`, a direct 10-field object, a recognized official web destination with
three query fields, a six-character title, two 71-character strings and a time
label of seven or three characters. The second report is a newly ended room.
No message values, field names hidden as otherN, room IDs or real account DTOs
were recovered from these reports.

Valid shipped-artifact evidence:

- `MsgBody-parse.json`: Evidence
  `ev_e4aa5c274cf0f5002e4084b9eb83d517c84faf8130c9210a5dc1b5aa4295067b`.
  Both local and network parse branches dispatch message type 51 to
  `com.netease.cloudmusic.post.meta.LTRecordMsg`, rather than CommonMessage.
  The method definition is in the original classes19.dex analysis carrier.
- `LTRecordMsg-classes3-valid.json`: Evidence
  `ev_586be22735633fd7e5a302e4174506d4452361dd89459eb28703cffeb67d9e4a`.
  The actual class definition is in original classes3.dex. Its DTO fields
  include recordOrpheus, timeTitle, title, creatorAvatarUrl, acceptorAvatarUrl,
  startColor, endColor, titleColor, isFriend and historyTitle.

The source APK is the already retained official 9.6.15 APK (SHA256
`0c168d70c155d35a111c0031fec328430118ea09b400121ff1377b32c42a7ea4`).
The readerVersion 9.5.61 in user reports is the compatibility request version,
not an assertion that the inspected APK has that version. The DEX carriers
are analysis-only containers; they are never installed or treated as official
signed APKs. Wrong-name/class19 lookups and the absent toRawMessage method are
negative lookup results, not positive class evidence.

Implementation uses the explicit type-51 boundary and a bounded scan of its
direct children to find the exact DTO signature plus the previously validated
ordinary report URL. It does not use otherN aliases as real keys, relax URL
checks, recursively read profiles, or infer session data from relation totals.
Synthetic fixtures reproduce both time-label shapes without capturing a user.

`investigation-export.json` contains all 34 retained Evidence records and was
written by REA reset_investigation before release work. Only valid observations
above support the fix. Static evidence and host fixtures do not establish
that the repaired build works against the user's real account; installation
and reloading both ended records remain user acceptance.
