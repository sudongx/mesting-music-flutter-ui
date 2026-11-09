"""Decode captured UI video for motion/blank-frame review, never FPS inference."""
from pathlib import Path
import subprocess
import sys
import imageio_ffmpeg
from PIL import Image, ImageDraw

target = Path(__file__).resolve().parent / 'device' / sys.argv[1]
frames = target / 'review-frames'
frames.mkdir(exist_ok=True)
assert not any(frames.iterdir()), 'Preserve previous decoded evidence'
subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), '-hide_banner', '-loglevel', 'error',
    '-ss', '0.8', '-i', str(target / 'visible-switch.mp4'), '-t', '1.6',
    '-vf', 'fps=10', '-frames:v', '16', str(frames / 'frame-%02d.png')], check=True)
files = sorted(frames.glob('frame-*.png'))
sheet = Image.new('RGB', (1080, 2480), '#dddddd')
for index, path in enumerate(files):
    frame = Image.open(path).convert('RGB')
    frame.thumbnail((270, 600))
    x, y = index % 4 * 270, index // 4 * 620
    sheet.paste(frame, (x, y+20))
    ImageDraw.Draw(sheet).text((x+6, y+2), f'Visual sample {index+1}', fill='black')
sheet.save(target / 'review-sheet.png')
print({'visualSamples': len(files), 'label': target.name, 'fpsAcceptance': False})
