import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE_URL = 'http://localhost:5173';

const TEMPLATES = ['template-k', 'template-l', 'template-m', 'template-n', 'template-o'];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

for (const id of TEMPLATES) {
  const dir = join(ROOT, 'templates', id, 'preview');
  mkdirSync(dir, { recursive: true });

  console.log(`📸 Screenshotting ${id}...`);
  await page.goto(`${BASE_URL}/${id}`, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait a bit for fonts/images to settle
  await page.waitForTimeout(1500);

  // Hero screenshot (viewport)
  await page.screenshot({
    path: join(dir, 'hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  // Full page screenshot
  await page.screenshot({
    path: join(dir, 'full.png'),
    fullPage: true,
  });

  console.log(`  ✓ Saved to templates/${id}/preview/`);
}

await browser.close();
console.log('\n✅ All screenshots done!');
