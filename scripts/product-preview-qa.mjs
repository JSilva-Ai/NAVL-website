import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const axe = readFileSync(require.resolve('axe-core'), 'utf8');
const base = process.env.PRODUCT_PREVIEW_URL ?? 'http://127.0.0.1:4190';
const slugs = ['biblelink', 'void-striker', 'nova-frontier', 'trophiva', 'galaxy-forge', 'loop', 'shield', 'guard', 'personal-finance', 'special-dates'];
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const failures = [];
const output = '/private/tmp/navl-product-preview';
mkdirSync(output, { recursive: true });
let pages = 0;
try {
  for (const locale of ['', 'pt/', 'es/', 'ko/', 'ar/']) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const slug of slugs) {
      const path = `/${locale}apps/${slug}/`;
      const response = await page.goto(base + path, { waitUntil: 'networkidle' });
      if (response.status() !== 200) failures.push(`${path}: HTTP ${response.status()}`);
      if (await page.locator('main h1').count() !== 1) failures.push(`${path}: expected one h1`);
      if (await page.locator('.ps-site, .bl-site').count() !== 1) failures.push(`${path}: missing independent product site`);
      const menu = page.locator('.ps-menu, .bl-menu-toggle');
      await menu.click();
      if (await menu.getAttribute('aria-expanded') !== 'true') failures.push(`${path}: menu did not open`);
      await menu.click();
      const depth = page.locator('.ps-depth, .bl-stage-controls button');
      if (!await depth.isDisabled()) failures.push(`${path}: reduced-motion depth control should be disabled`);
      const d = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, dir: document.documentElement.dir, lang: document.documentElement.lang }));
      if (d.scroll > d.width + 1) failures.push(`${path}: overflow ${d.scroll}/${d.width}`);
      if (locale === 'ar/' && d.dir !== 'rtl') failures.push(`${path}: RTL missing`);
      const smallTargets = await page.locator('a[href],button').evaluateAll(xs => xs.filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && (r.width < 24 || r.height < 24); }).map(el => el.outerHTML.slice(0,140)));
      if (smallTargets.length) failures.push(`${path}: small touch targets ${JSON.stringify(smallTargets)}`);
      for (const anchor of await page.locator('.ps-nav nav a, .bl-nav-links a').evaluateAll(xs => xs.map(x => x.hash))) {
        if (await page.locator(anchor).count() !== 1) failures.push(`${path}: missing section ${anchor}`);
      }
      const broken = await page.locator('.ps-hero img, .bl-hero img').evaluateAll(xs => xs.filter(x => !x.complete || !x.naturalWidth).map(x => x.src));
      if (broken.length) failures.push(`${path}: broken hero images ${broken.join(',')}`);
      {
        await page.addScriptTag({ content: axe });
        const violations = await page.evaluate(async () => (await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'] } })).violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })));
        if (violations.length) failures.push(`${path}: axe ${JSON.stringify(violations)}`);
        if (await page.locator('.ps-gallery button').count()) {
          const button = page.locator('.ps-gallery button').first();
          await button.click();
          if (!await page.locator('dialog').evaluate(el => el.open)) failures.push(`${path}: gallery did not open`);
          await page.keyboard.press('Escape');
          if (await page.locator('dialog').evaluate(el => el.open)) failures.push(`${path}: Escape did not close gallery`);
        }
        if (slug === 'void-striker' || (slug === 'biblelink' && ['', 'pt/'].includes(locale))) {
          if (await page.locator('video').count()) failures.push(`${path}: video loaded before play`);
          await page.locator('.ps-cinema > button, .bl-play-film').click();
          await page.locator('video').waitFor();
          const video = await page.locator('video').evaluate(async el => { await new Promise(resolve => { if (el.readyState >= 1) resolve(); else { el.addEventListener('loadedmetadata', resolve, { once: true }); setTimeout(resolve, 8000); } }); return { error: el.error?.message, duration: el.duration }; });
          if (video.error || !Number.isFinite(video.duration)) failures.push(`${path}: video ${JSON.stringify(video)}`);
        }
        await page.setViewportSize({ width: 320, height: 740 });
        if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) failures.push(`${path}: overflow at 320px`);
        await page.setViewportSize({ width: 1440, height: 1000 });
        if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) failures.push(`${path}: overflow at 1440px`);
        if (locale === 'pt/' && ['biblelink', 'void-striker', 'trophiva', 'special-dates'].includes(slug)) {
          await page.goto(base + path, { waitUntil: 'networkidle' });
          await page.locator('.ps-details, .bl-faq').scrollIntoViewIfNeeded();
          await page.evaluate(async () => { await Promise.all([...document.images].filter(img => !img.complete).map(img => new Promise(resolve => { img.addEventListener('load', resolve, { once: true }); img.addEventListener('error', resolve, { once: true }); setTimeout(resolve, 3000); }))); });
          await page.evaluate(() => scrollTo(0, 0));
          await page.screenshot({ path: `${output}/${slug}-desktop.png`, fullPage: true });
          await page.setViewportSize({ width: 390, height: 844 });
          await page.goto(base + path, { waitUntil: 'networkidle' });
          await page.locator('.ps-details, .bl-faq').scrollIntoViewIfNeeded();
          await page.evaluate(() => scrollTo(0, 0));
          await page.screenshot({ path: `${output}/${slug}-mobile.png`, fullPage: true });
        }
        await page.setViewportSize({ width: 390, height: 844 });
      }
      pages++;
    }
    if (errors.length) failures.push(`${locale}: JS errors ${errors.join('; ')}`);
    await page.close();
  }
  const page = await browser.newPage();
  await page.goto(base + '/pt/apps/', { waitUntil: 'networkidle' });
  for (const slug of slugs) if (!await page.locator(`main a[href="/pt/apps/${slug}/"]`).count()) failures.push(`Missing catalog link: ${slug}`);
  await page.getByRole('button', { name: 'Jogos', exact: true }).click();
  if (await page.locator('.collection-card').count() !== 3) failures.push('Game filter should show three games');
  await page.getByRole('button', { name: 'Disponíveis', exact: true }).click();
  if (await page.locator('.collection-card').count() !== 2) failures.push('Released filter should show two products');
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  if (await page.locator('.collection-card').count() !== 10) failures.push('All filter should restore ten products');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: `${output}/catalog-desktop.png`, fullPage: true });
  console.log(JSON.stringify({ pages, viewports: [320, 390, 1440], failures, screenshots: output }, null, 2));
  if (failures.length) process.exitCode = 1;
} finally { await browser.close(); }
