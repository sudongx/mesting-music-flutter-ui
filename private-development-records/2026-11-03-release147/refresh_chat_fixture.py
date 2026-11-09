from pathlib import Path
from PIL import Image, ImageDraw
root=Path('D:/AnLi')
p=root/'test/fixtures/chat-portrait.png'
assert not p.exists()
p.parent.mkdir(parents=True,exist_ok=True)
image=Image.new('RGB',(168,374),(49,57,78))
draw=ImageDraw.Draw(image)
draw.rectangle((12,12,155,180),fill=(201,109,127))
draw.rectangle((12,192,155,361),fill=(130,160,178))
image.save(p)
test=root/'test/chat_page_test.dart'
text=test.read_text('utf-8')
text=text.replace('assets/branding/dress-midnight-launch.png','assets/images/theme_playlists/shinchan/cover-01.jpg')
text=text.replace('assets/branding/dress-morning-launch.png','assets/images/theme_playlists/shinchan/cover-02.jpg')
start=text.index("testWidgets('portrait image keeps")
end=text.index("testWidgets(",start+15)
part=text[start:end]
part=part.replace("mediaUrl: 'assets/images/theme_playlists/shinchan/cover-01.jpg',", "// Test-only portrait: old login illustrations were removed in 1.0.26.\n          mediaUrl: File('test/fixtures/chat-portrait.png').absolute.uri.toString(),",1)
part=part.replace('841 / 1870','168 / 374')
text=text[:start]+part+text[end:]
test.write_text(text,'utf-8')
print('Replaced removed legacy artwork references with retained covers and a synthetic test-only portrait.')
