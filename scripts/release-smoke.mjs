import { chromium } from 'playwright';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const base = process.env.PRODUCT_PREVIEW_URL ?? 'http://127.0.0.1:4192';
const axe = readFileSync(require.resolve('axe-core'), 'utf8');
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH ?? (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : undefined), headless: true });
const failures = [];
let count = 0;
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  for (const locale of ['', 'pt/', 'es/', 'ko/', 'ar/']) {
    for (const route of ['', 'apps/']) {
      const path = `/${locale}${route}`;
      await page.goto(base + path, { waitUntil: 'networkidle' });
      for (const width of [320, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) failures.push({ path, width, issue: 'overflow' });
        const oversized = await page.locator('.appcard__art').evaluateAll(xs => xs.filter(x => { const b = x.getBoundingClientRect(); return b.height > b.width * 1.35; }).length);
        if (oversized) failures.push({ path, width, issue: 'phone image stretches product cards' });
      }
      await page.addScriptTag({ content: axe });
      const violations = await page.evaluate(async () => (await window.axe.run()).violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })));
      if (violations.length) failures.push({ path, violations });
      count++;
    }
  }
  await page.goto(base + '/pt/', { waitUntil: 'networkidle' });
  await page.locator('img').evaluateAll(xs => xs.forEach(x => x.loading = 'eager'));
  await page.evaluate(async () => { await Promise.all([...document.images].map(x => x.decode().catch(() => {}))); });
  if (await page.locator('.hero__art img').getAttribute('src') !== '/media/studio/vision-hero.webp') failures.push({ issue: 'original home artwork changed' });
  await page.screenshot({ path: '/private/tmp/navl-release-home-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '/private/tmp/navl-release-home-mobile.png', fullPage: true });
  console.log(JSON.stringify({ corePages: count, widths: [320, 1440], failures }, null, 2));
  if (failures.length) process.exitCode = 1;
} finally { await browser.close(); }
