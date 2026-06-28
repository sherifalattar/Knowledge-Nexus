# Media — the intro film

`../knowledge-nexus-intro.mp4` is a 34-second cinematic intro for Knowledge
Nexus, built in the site's own visual language: the deep-navy void, the single
cyan **signal** (`#22e8ff`), a constellation that forms around a central point,
and the Observatory where every module orbits that point.

| | |
|---|---|
| Resolution | 1920 × 1080 |
| Frame rate | 30 fps |
| Duration | 34 s |
| Video | H.264 (yuv420p, high profile) |
| Audio | AAC stereo — a passage of `../ambient.mp3`, faded in and out |

## Using it on the site

Drop it anywhere a hero or poster belongs, e.g.

```html
<video src="knowledge-nexus-intro.mp4" autoplay muted loop playsinline></video>
```

For social cards / link previews:

```html
<meta property="og:video" content="knowledge-nexus-intro.mp4">
```

## How it's made (reproducible)

The film is a **deterministic** HTML5 canvas animation — every frame is a pure
function of time `t`, so frames can be seeked exactly and captured cleanly.

1. `intro-film.html` — the animation. `window.__seek(t)` draws the frame at
   second `t`; open it directly in a browser to preview.
2. `render.js` — a Playwright script that seeks each frame and screenshots the
   canvas to `frames/`.
3. Encode the frames and score them with `ambient.mp3`:

```bash
node render.js                       # writes frames/f00000.jpg …

ffmpeg -framerate 30 -i frames/f%05d.jpg \
  -ss 8 -t 34 -i ../ambient.mp3 \
  -filter_complex "[1:a]volume=0.9,afade=t=in:st=0:d=2,afade=t=out:st=31.5:d=2.5[a]" \
  -map 0:v -map "[a]" \
  -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow \
  -c:a aac -b:a 192k -shortest -movflags +faststart \
  ../knowledge-nexus-intro.mp4
```

Edit the palette, copy, scene timing, or `T_END` at the top of
`intro-film.html` and re-run to regenerate.
