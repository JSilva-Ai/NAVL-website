import { writeFileSync } from 'node:fs';

const origin = 'https://newaivisionlabs.com';
const locales = [
  { prefix: '', hreflang: 'en' },
  { prefix: 'pt', hreflang: 'pt-BR' },
  { prefix: 'es', hreflang: 'es' },
  { prefix: 'ko', hreflang: 'ko' },
  { prefix: 'ar', hreflang: 'ar' },
];
const routes = [
  '', 'about', 'news', 'apps', 'apps/loop', 'apps/shield', 'apps/guard', 'apps/biblelink',
  'apps/biblelink/privacy', 'apps/biblelink/support', 'apps/void-striker',
  'apps/galaxy-forge', 'demo', 'support', 'privacy', 'terms', 'data-deletion',
];
const pathFor = (prefix, route) => [prefix, route].filter(Boolean).join('/');
const absolute = (prefix, route) => `${origin}/${pathFor(prefix, route)}${pathFor(prefix, route) ? '/' : ''}`;
const singlePageDocs = ['apps/void-striker/privacy', 'apps/void-striker/support'];

const entries = [];
for (const locale of locales) {
  for (const route of routes) {
    const priority = route === '' ? '1.0' : route === 'apps' ? '0.9' : route.startsWith('apps/') ? '0.8' : route === 'about' || route === 'news' || route === 'demo' ? '0.7' : '0.5';
    const links = locales.map((alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${absolute(alternate.prefix, route)}" />`,
    );
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute('', route)}" />`);
    entries.push([
      '  <url>',
      `    <loc>${absolute(locale.prefix, route)}</loc>`,
      ...links,
      `    <changefreq>${route.startsWith('apps/') || route === 'apps' || route === '' || route === 'news' || route === 'demo' ? 'monthly' : 'yearly'}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n'));
  }
}
for (const route of singlePageDocs) {
  entries.push([
    '  <url>',
    `    <loc>${absolute('', route)}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${absolute('', route)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute('', route)}" />`,
    '    <changefreq>yearly</changefreq>',
    '    <priority>0.5</priority>',
    '  </url>',
  ].join('\n'));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`Wrote ${entries.length} localized URLs to public/sitemap.xml`);
