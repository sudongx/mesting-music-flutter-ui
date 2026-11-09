from pathlib import Path
ROOT=Path('D:/AnLi')
file=ROOT/'lib/features/local_music/presentation/local_music_page.dart'
text=file.read_text('utf-8')
text="import '../../../shared/widgets/song_list_tools.dart';\n"+text
text=text.replace('                  return CustomScrollView(\n',"                  return SongListTools(\n                    listId: 'local-music:$index:${_folderId ?? 'all'}:$_query',\n                    child: CustomScrollView(\n",1)
text=text.replace('                    ],\n                  );\n                },','                    ],\n                    ),\n                  );\n                },',1)
needle='''                            return ListTile(
                              key: ValueKey(entry.id),'''
assert needle in text
text=text.replace(needle,'''                            return SongListEntry(
                              key: ValueKey(entry.id),
                              track: entry.track,
                              tracks: entries.map((item) => item.track).toList(),
                              child: ListTile(''',1)
text=text.replace('''                                  : () => _play(entry),
                            );''','''                                  : () {
                                      SongListTools.remember(context, entry.track);
                                      unawaited(_play(entry));
                                    },
                              ),
                            );''',1)
file.write_text(text,'utf-8')
file=ROOT/'lib/features/queue/presentation/beta_playback_queue.dart'
text=file.read_text('utf-8')
text="import '../../../shared/widgets/song_list_tools.dart';\nimport '../../../shared/models/track.dart';\n"+text
text=text.replace('    return Padding(\n',"    return SongListTools(\n      listId: 'playback-queue',\n      bottom: widget.bottomClearance,\n      child: Padding(\n",1)
text=text.replace('''                      return Dismissible(''','''                      final row = Dismissible(''',1)
text=text.replace('''                            onPressed: () => unawaited(
                              act(() => handler.playTrack(item.id)),
                            ),''','''                            onPressed: () {
                              if (track != null) SongListTools.remember(context, track);
                              unawaited(act(() => handler.playTrack(item.id)));
                            },''',1)
needle='''                      );
                    },
                  ),'''
assert needle in text
text=text.replace(needle,'''                      );
                      return track == null ? row : SongListEntry(
                        key: ValueKey('queue-entry-${item.id}'),
                        track: track,
                        tracks: items.map((item) => handler.trackForId(item.id)).whereType<Track>().toList(),
                        child: row,
                      );
                    },
                  ),''',1)
text=text.replace('''        ],
      ),
    );
  }
}''','''        ],
      ),
      ),
    );
  }
}''',1)
file.write_text(text,'utf-8')
file=ROOT/'lib/features/music_platform/netease/footprint/listening_footprint_page.dart'
text=file.read_text('utf-8')
text="import '../../../../shared/widgets/song_list_tools.dart';\n"+text
text=text.replace('''      child: CustomScrollView(
        key: _scrollPageKeys[index],''','''      child: SongListTools(
        listId: 'footprint-today:$index:$_query',
        child: CustomScrollView(
        key: _scrollPageKeys[index],''',1)
needle='''      ),
    );
  }

  Widget _periodNavigation'''
assert needle in text
text=text.replace(needle,'''      ),
      ),
    );
  }

  Widget _periodNavigation''',1)
# Build one canonical track snapshot, reused by row membership and playback.
needle='''    final todayBlock = oldDay ? null : reader.todayListening;'''
assert needle in text
text=text.replace(needle,'''    final tracks = songs.map((song) => Track(
      id: 'netease_${song.id}', title: song.title,
      artist: song.artists.join(' / '), album: '', duration: Duration.zero,
      audioAsset: 'mesting-platform://netease/${song.id}',
      coverAsset: song.cover, lyricsAsset: '', source: TrackSource.netease,
      provider: '网易云音乐', platformSongId: song.id,
    )).toList();
    final todayBlock = oldDay ? null : reader.todayListening;''',1)
text=text.replace('''        itemBuilder: (context, index) => _TodaySongRow(
          song: songs[index],''','''        itemBuilder: (context, index) => SongListEntry(
          track: tracks[index], tracks: tracks,
          child: _TodaySongRow(
          song: songs[index],''',1)
text=text.replace('''            final song = songs[index];
            if (widget.onSongSelected''','''            final song = songs[index];
            SongListTools.remember(context, tracks[index]);
            if (widget.onSongSelected''',1)
start=text.index('''                Track(
                  id: 'netease_${song.id}''',text.index('final tracks ='))
end=text.index('\n                ),',start)+len('\n                ),')
text=text[:start]+'                tracks[index],'+text[end:]
text=text.replace('''          },
        ),
      ),
    ];''','''          },
          ),
        ),
      ),
    ];''',1)
file.write_text(text,'utf-8')
print('Extended local music, footprint songs and shared inline/sheet queue using the same decoupled list tools.')
