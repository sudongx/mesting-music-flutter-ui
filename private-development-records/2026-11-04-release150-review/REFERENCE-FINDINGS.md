# 1.0.50 local official reference review

2026-11-04. Static, offline inspection only. Product source, original APKs and previous evidence were not changed. No phone, emulator, ADB, music account, backend or Internet access. No official application was executed.

## Artifacts and scope

- Kugou Lite `com.kugou.android.lite` 5.2.9/code11590: original `.codex-artifacts/2026-11-03-release147/private/kugou-lite-official.apk`, SHA256 `509df2c4a381c185d46f41628b9445dd85fa05a2890b725a54a3a536a32b52c4` (prior byte identity record). New focused APK retains its exact manifest and classes5/7/8/12.dex only; SHA256 `9d7b7d8708cfcb5dc8dd3575829bea44e7035d2fd8e220ea67a01f2a97c332d5`. Resources and other DEX were omitted from the focused APK. Resource XML was separately decoded from the original APK with existing aapt2.
- NetEase `com.netease.cloudmusic` 9.6.15: original `.codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk`, SHA256 `e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`. New focused APK retains the original manifest and classes5.dex only; SHA256 `09c985f6f98f7c8a37ac06ff3e6792899bab03d8590c1b572c007d38cc21b92a`.
- Focused files are private analysis carriers, not signed/installable official deliveries. They do not establish the version shown in the user's screenshots.

## Last-played hint: observed facts and explicit gap

REA `PlaylistRecordDelegate.<init>` (`ev_05ca62201909dc8844de780dcd72800791bb3f9bced606fda88d57d407f6dd8b`) inflates `kg_playlist_record_item_bar`, binds play icon, instruction text and song-name text, and delegates a click to its existing callback. It does not bind a song-cover ImageView or close button. `u` sets the view visible (`ev_7100041ee699f7c778bc638dd71612b8bd22e720675a1dbfea9ee9f22d341048`); `updateSkin` separately colors hint and song title (`ev_2e9bf12670efbb2bdc1fd29dec1d51f811c01dcc7c9204d0df3d54883d48706a`). Earlier 149 evidence established list-scoped persistence and hide behavior; this is still static evidence.

Raw DEX field decoding maps `ml.j.kg_playlist_record_item_bar` to resource `0x7f0d06c3`; aapt2 maps that to `res/z/aj3.xml`. `kugou-inline-record.xmltree.txt` shows a full-width horizontal 40dp-tall inline bar: 18dp play icon, 12dp instruction, ellipsized 12dp song title. This is **not** the requested compact floating cover capsule.

No examined local artifact establishes the precise width/height ratio of the user's referenced newer Kugou cover capsule. Do not label a chosen Mesting size as an official measurement. A compact capsule with real cover, two text lines and one integrated close touch area is the explicitly approved Mesting design. About 220x56dp with a 40dp cover and 44dp close hit area is a design suggestion, not an observed official dimension. Preserve accessibility/text scaling and locate-only behavior.

`kugou-floating-record.xmltree.txt` is retained under its original investigation name but actually decodes `view_last_playable` (resource `0x7f0d0b75`), the playback-queue wrapper. It is not evidence for the requested last-played capsule.

## Song menus

The user's NetEase screenshots are the strongest direct visual evidence: a rounded bottom sheet, real song cover/title/artist header, then vertically aligned icon/text actions and real performer/creator/album information. No payment/reward/subscription controls belong in this implementation.

NetEase `ActionMenuType` inventory (`ev_55d539fbfef4648f268115fd1fc557fb2f09464c26609b49e8f72459fef857bd`) includes `ADD_NEXT_PLAY`, `PIN_TOP`, `UNPIN_TOP`, `Comment_Music`, `Download_Music`, `Share`, `Artist`, `CREATOR`, `Album`, and separate local/playlist actions. `MusicActionMenuItem` has an independent `OnPinTopMusicInfoListener` (`ev_f99b0daaffa65d032880f46934b7e6d6deaa77e5cb791c2ba828dedb6f7a3165`). The selected `setUpMenuActionItems` decompiles to a null stub (`ev_739c74591951b709a107af46b656710a16731a4cd9162f37ec49ccc43c56d5d4`); do not infer live action availability from that body. `ResourceActionBottomSheet` is a real shared menu surface with target `MusicInfo`, builder/context and menu list (`ev_e0833c4c85df5504d205817e89802b5b5a377cc6a236dba9c2380cd22a02428f`). Its examined `initHeaderMenuHolder` is for voice/podcast controls, not the song cover/header (`ev_1866b2d84820add912894e7ff74ddbafb3b8d896f64493b5ad17dec9e0051f89`).

Kugou Lite `BaseMoreMenuDialogNew` and `MenuAction` are distinct player-menu types (`ev_f73beb6fb91ee1a782231576853fca00e0fbd857175c07505b1f28543c43d331`, `ev_bb0c04bf927aeeb273947497a9915e7d15705a5e5c38aeeea316834dfae3660b`). `MenuAction.Companion.crateBaseActions` is a player-settings menu with quality, speed, song info and other app-specific functions (`ev_6058ab0ae8dba8829d503334b6e743b10864e24dd7d2185d9cdef7872486097e`); `createSongTypeActions` extends it (`ev_30c7f7cb6638bba2a98f60af956598ffdc772b160fef2acfcad51040eb36e175`). These do not prove the complete favorite/history/search song-list menu. Do not copy unrelated player settings into list menus or claim exact list-menu parity based on this scope.

## Metadata evidence for implementation

- NetEase `/song/wiki/summary` is supported by generated native route `lib/features/music_platform/netease/full/netease_native_routes.g.dart:3156` and frozen request fixture `test/fixtures/netease-full-upstream-contracts.json:6550`: request path `/api/song/play/about/block/page`, data `{songId: id}`, `weapi: false`. Local upstream docs `.../upstream/package/public/docs/home.md:3805` call it a complex music encyclopedia response but do not provide its response schema.
- No actual `/song/wiki/summary` response payload was found in the bounded local files examined. Exact `blocks/creatives/resources` role/person fields therefore remain unverified. Read only explicit role/name/ID structures and do not invent production credits from arbitrary strings or use a generic artists list as lyricist/composer evidence. Missing metadata should keep usable actions and support retry.
- Kugou existing owning parser `lib/features/music_platform/data/embedded_kugou_music_source.dart:138` reads performer arrays `singerinfo`/`authors`/`singers` and names `name`/`author_name`/`singername`. Existing category parser (`platform_category_search.dart:132`) uses performer ID aliases `singerid`/`author_id`/`singer_id`/`SingerId`. These establish performers, not production roles.
- Kugou `/audio` existing repository `platform_library_repository.dart:456` reads `data` as first list item or map; album ID is `record.album_id`, `record.album_info.id`, or `record.base.album_id`. Do not confuse `mixsongid`/`album_audio_id` with album ID. Existing `PlatformSongIdentity` keeps recording IDs distinct and prioritizes album-recording IDs for comments.
- Song source and current account must continue to own write operations; fallback audio providers must not silently turn a NetEase song menu into a Kugou account write. Local/download rows should retain their actual file/export/removal and playlist contexts.

## Retention and cleanup

Complete session Evidence was checkpointed to `rea-evidence.json` (46 records, 4,877,902 bytes). The Android provider resources were closed and the investigation reset with `retained_target: false`. This report distinguishes observed static facts, implementation suggestions and unknown runtime/server behavior; it is not phone acceptance.
