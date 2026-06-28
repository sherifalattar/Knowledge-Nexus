// Deterministic frame grabber for the Knowledge Nexus film.
// Seeks window.__seek(t) for each frame and screenshots the canvas.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');

const DIR   = __dirname;
const FRAMES= path.join(DIR, 'frames');
const FPS   = 30;

(async () => {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb'],
  });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  page.on('console', m => { if (m.type() === 'error') console.log('PAGE ERR:', m.text()); });

  await page.goto('file://' + path.join(DIR, 'film.html'), { waitUntil: 'load' });
  // wait for fonts + first render
  await page.waitForFunction('window.__ready === true', { timeout: 30000 });

  const duration = await page.evaluate('window.__duration');
  const total = Math.round(duration * FPS);
  console.log(`Rendering ${total} frames @ ${FPS}fps (${duration}s)`);

  const canvas = await page.$('#stage');
  for (let i = 0; i < total; i++) {
    const t = i / FPS;
    await page.evaluate((tt) => window.__seek(tt), t);
    await canvas.screenshot({
      path: path.join(FRAMES, `f${String(i).padStart(5, '0')}.jpg`),
      type: 'jpeg',
      quality: 96,
    });
    if (i % 60 === 0) console.log(`  frame ${i}/${total}`);
  }
  console.log('Done capturing.');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
