import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { docsFor, bibleLinkDocsFor } from './src/content/docs.ts';
import { pagesFor } from './src/content/i18n.ts';
import { DEFAULT_LOCALE, PUBLISHED, locales, localeFromRoute, routeIn } from './src/content/locales.ts';

const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Every index.html in the project is a page.
 *
 * This is a multi-page build rather than a single-page app, which is a
 * deployment decision more than an architectural one: on a static host an SPA
 * serves unknown paths from the 404 document, and GitHub Pages returns it with
 * a real 404 status. /privacy, /terms, /support and /data-deletion are URLs
 * that Apple and Google reviewers open directly, so they have to be real files
 * answering 200.
 *
 * Discovered rather than listed so that adding a route is adding a directory,
 * and nobody has to remember to register it here as well.
 */
function findPages(dir: string, found: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    /*
     * Two directories hold index.html files that are not routes.
     *
     * `public/` is copied to the site root verbatim by Vite. It contains only
     * a redirect at the former game URL. The game source and native projects
     * live in a separate private repository.
     */
    if (
      name === 'node_modules' ||
      name === 'dist' ||
      name === 'public' ||
      name === 'mobile' ||
      name.startsWith('.')
    )
      continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) findPages(path, found);
    else if (name === 'index.html') found.push(path);
  }
  return found;
}

const input = Object.fromEntries(
  findPages(root).map((path) => {
    const key = relative(root, path).replace(/\/?index\.html$/, '') || 'index';
    return [key, path];
  }),
);

/**
 * Stamp the build into every page.
 *
 * Without this there is no way to tell which build a browser is actually
 * showing, which is not hypothetical: a cached copy of an older build was
 * mistaken for a broken deploy, and the only thing that settled it was
 * spotting a fixed typo still present in a screen recording.
 *
 * `View source` on any page now answers it in one line. GITHUB_SHA is set by
 * Actions; locally it falls back to the checked-out commit.
 */
function buildStamp() {
  let sha = process.env.GITHUB_SHA ?? '';
  if (!sha) {
    try {
      sha = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    } catch {
      sha = 'unknown';
    }
  }
  const built = new Date().toISOString();
  return {
    name: 'build-stamp',
    transformIndexHtml() {
      return [
        { tag: 'meta', attrs: { name: 'build-sha', content: sha.slice(0, 12) }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'build-time', content: built }, injectTo: 'head' as const },
      ];
    },
  };
}

/**
 * Put the legal text in the HTML, for readers that do not run JavaScript.
 *
 * /privacy, /terms, /support and /data-deletion are real files answering 200 —
 * that was the reason for a multi-page build. But the *text* was rendered by
 * React on the client, so `curl` on any of the four returned a document with
 * exactly zero characters of body text. A reviewer opening it in Safari sees
 * the policy; Google Play's automated check on the privacy policy URL does not
 * run scripts, and an empty policy page is a documented rejection.
 *
 * <noscript> is the right tool: a browser with JavaScript never renders it, so
 * real visitors are unaffected and there is nothing to keep in sync visually,
 * while anything fetching the URL without a script engine gets the full text.
 *
 * Pre-rendering the React tree would be better still — one source of truth
 * rather than two renderings of it — but it needs the components to survive
 * SSR, and this closes the compliance hole today.
 */
/**
 * The head of every page, rendered from the route table.
 *
 * Each index.html carries only what Vite has to read literally — the charset
 * and the module script that is the page's entry. Everything else in the head
 * comes from `pages` in src/content/pages.ts: the title, the description, the
 * canonical, the icons, the font preload, and the Open Graph and Twitter tags
 * that are the same three strings repeated under different names.
 *
 * Two reasons, one now and one shortly.
 *
 * Now: thirteen documents each carrying twenty head tags is a copy-paste
 * surface. A canonical pointing at the wrong page is invisible in a browser,
 * invisible in the build, and expensive once a search engine has believed it.
 *
 * Shortly: a four-locale site is fifty-two documents. The same head rendered
 * from one table is what makes that routine instead of unmaintainable, and it
 * is the reason this refactor comes before any locale work rather than after.
 *
 * A document with no row fails the build. That is deliberate — the failure
 * mode it replaces is a page shipping with no title and no canonical, which
 * nothing else here would have caught.
 */
function pageMeta() {
  const ORIGIN = 'https://newaivisionlabs.com';

  /*
   * The deployed base path, resolved from Vite rather than assumed.
   *
   * Vite rewrites root-absolute URLs it finds written in an index.html, but
   * attributes on a tag injected by a plugin never go through that pass — the
   * injection happens after it. So `/favicon.svg` written here stays
   * `/favicon.svg`, which is correct at a domain root and a 404 under a
   * subpath. Every asset href below is built from this instead.
   *
   * This is the one thing the head refactor got wrong, and it was invisible
   * locally because the local builds were all at "/". CI builds at
   * "/Claude-ai/" precisely so that the configuration nobody develops in is
   * still the configuration that gets tested.
   */
  let base = '/';
  const abs = (route: string) => (route === '' ? `${ORIGIN}/` : `${ORIGIN}/${route}/`);

  /** A file in public/, resolved against the base the build is deployed at. */
  const publicAsset = (path: string) => base + path.replace(/^\/+/, '');

  return {
    name: 'page-meta',
    configResolved(config: { base: string }) {
      base = config.base;
    },
    transformIndexHtml(html: string, ctx: { filename: string }) {
      const rel = relative(root, ctx.filename).replace(/\\/g, '/');
      const fullRoute = rel.replace(/\/?index\.html$/, '');
      const { locale, rest } = localeFromRoute(fullRoute);

      if (!PUBLISHED.includes(locale.code)) {
        throw new Error(
          `The page at ${rel} is in the "${locale.code}" locale, which is not in ` +
            `PUBLISHED in src/content/locales.ts. A locale goes live the moment its ` +
            `directory reaches main, so this build fails rather than shipping copy ` +
            `that has not been approved.`,
        );
      }

      const page = pagesFor(locale.code).find((p) => p.route === rest);
      if (!page) {
        throw new Error(
          `No entry in src/content/en/pages.ts for the page at ${rel}. ` +
            `Add a row with route: '${rest}' — a page without one would ship ` +
            `with no title and no canonical.`,
        );
      }

      const canonical = abs(fullRoute);
      const productSlug = rest.startsWith('apps/') ? rest.split('/')[1] : '';
      const socialKey = productSlug || (rest === 'about' || rest === 'news' ? rest : '');
      const socialImage = socialKey ? `${ORIGIN}/social/${socialKey}.jpg` : `${ORIGIN}/og.jpg`;
      const socialAlt = page.title;
      const meta = (name: string, content: string) => ({
        tag: 'meta',
        attrs: { name, content },
        injectTo: 'head' as const,
      });
      const og = (property: string, content: string) => ({
        tag: 'meta',
        attrs: { property, content },
        injectTo: 'head' as const,
      });
      const link = (attrs: Record<string, string>) => ({
        tag: 'link',
        attrs,
        injectTo: 'head' as const,
      });

      /*
       * hreflang lists published locales only.
       *
       * While English is the only one, that is a single self-referencing
       * alternate plus x-default — which is correct rather than pointless: it
       * states that this page is the English one and the default, and it means
       * the shape is already right when a second locale is approved. Naming
       * unpublished locales here would advertise URLs that answer 404.
       */
      const documentLocales = rest.startsWith('apps/void-striker/') ? [DEFAULT_LOCALE] : PUBLISHED;
      const alternates = documentLocales.map((code) =>
        link({
          rel: 'alternate',
          hreflang: locales[code].lang,
          href: abs(routeIn(locales[code], rest)),
        }),
      );
      alternates.push(
        link({
          rel: 'alternate',
          hreflang: 'x-default',
          href: abs(routeIn(locales[DEFAULT_LOCALE], rest)),
        }),
      );

      const ogLocaleAlternates = documentLocales.filter((code) => code !== locale.code).map((code) =>
        og('og:locale:alternate', locales[code].ogLocale),
      );

      const structured: Record<string, unknown> = rest === ''
        ? {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'New AI Vision Labs',
            legalName: 'New AI Vision Labs LLC',
            url: `${ORIGIN}/`,
            logo: `${ORIGIN}/brand/mark-512.png`,
            email: 'support@newaivisionlabs.com',
            telephone: '+1-404-597-3852',
            description: page.description,
          }
        : rest === 'about'
          ? { '@context': 'https://schema.org', '@type': 'AboutPage', name: page.title, description: page.description, url: canonical }
          : rest === 'news'
            ? { '@context': 'https://schema.org', '@type': 'CollectionPage', name: page.title, description: page.description, url: canonical }
            : rest === 'apps/biblelink'
              ? { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'BibleLink', applicationCategory: 'ReferenceApplication', operatingSystem: 'iOS, iPadOS', description: page.description, url: canonical }
              : rest === 'apps/void-striker'
                ? { '@context': 'https://schema.org', '@type': 'VideoGame', name: 'VOID STRIKER', gamePlatform: ['iOS', 'Android'], description: page.description, url: canonical }
                : { '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: canonical };

      return {
        /*
         * `lang` and `dir` are attributes on <html>, which no injected tag can
         * reach — so this is the one part of the head that is a string rewrite
         * rather than a tag list. Every document declares both explicitly,
         * including the English ones: `dir="ltr"` written down is a statement,
         * where an absent `dir` is an assumption that happens to be right.
         */
        html: html.replace(
          /<html[^>]*>/,
          `<html lang="${locale.lang}" dir="${locale.dir}">`,
        ),
        tags: [
          {
            tag: 'meta',
            attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
            injectTo: 'head' as const,
          },
          meta('color-scheme', 'dark'),
          meta('theme-color', '#050507'),
          meta('google-site-verification', '1wv50jiwl63vgfjFlMFgKKkJY4CeeHKaDGrnZtQzrqk'),

          { tag: 'title', children: page.title, injectTo: 'head' as const },
          meta('description', page.description),
          link({ rel: 'canonical', href: canonical }),
          ...alternates,

          link({ rel: 'icon', href: publicAsset('/favicon.svg'), type: 'image/svg+xml' }),
          link({ rel: 'apple-touch-icon', href: publicAsset('/brand/mark-512.png') }),
          link({ rel: 'manifest', href: publicAsset('/site.webmanifest') }),

          // The display face is the first thing painted; preloading it removes
          // the width-axis reflow on the headline.
          link({
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: publicAsset('/fonts/archivo-latin-wdth-normal.woff2'),
            crossorigin: '',
          }),

          og('og:type', 'website'),
          og('og:site_name', 'New AI Vision Labs'),
          og('og:locale', locale.ogLocale),
          ...ogLocaleAlternates,
          og('og:title', page.title),
          og('og:description', page.description),
          og('og:url', canonical),
          og('og:image', socialImage),
          og('og:image:width', '1200'),
          og('og:image:height', '630'),
          og('og:image:alt', socialAlt),
          meta('twitter:card', 'summary_large_image'),
          meta('twitter:title', page.title),
          meta('twitter:description', page.description),
          meta('twitter:image', socialImage),
          meta('twitter:image:alt', socialAlt),
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(structured),
            injectTo: 'head' as const,
          },
        ],
      };
    },
  };
}

function legalNoscript() {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /** Walk the content object in key order, which is document order. */
  const render = (node: unknown, depth = 0): string => {
    if (typeof node === 'string') return node.trim() ? `<p>${esc(node)}</p>` : '';
    if (Array.isArray(node)) {
      // A nested array of strings is a list in the page; a list of blocks is not.
      if (node.every((n) => typeof n === 'string')) {
        return `<ul>${node.map((n) => `<li>${esc(n as string)}</li>`).join('')}</ul>`;
      }
      return node.map((n) => render(n, depth)).join('');
    }
    if (node && typeof node === 'object') {
      return Object.entries(node as Record<string, unknown>)
        .map(([key, value]) => {
          if (key === 'title' && typeof value === 'string') return `<h1>${esc(value)}</h1>`;
          if (key === 'heading' && typeof value === 'string') return `<h2>${esc(value)}</h2>`;
          return render(value, depth + 1);
        })
        .join('');
    }
    return '';
  };

  return {
    name: 'legal-noscript',
    transformIndexHtml(_html: string, ctx: { filename: string }) {
      /*
       * Matched on the document's exact route, not on a substring of its path.
       *
       * This used to ask whether the filename contained `/privacy/index.html`,
       * which is true of `/privacy/index.html` and equally true of
       * `/pt/privacy/index.html`. The moment a locale directory exists, the
       * English policy would be injected into the Portuguese page — silently,
       * and defeating the exact automated check this plugin was written to
       * satisfy, since what Google Play fetches without a script engine would
       * be a policy in the wrong language.
       *
       * Deriving the route the same way `findPages` and `pageMeta` do means
       * `pt/privacy` is a different key from `privacy`, and a locale that has
       * no approved legal copy gets no <noscript> at all rather than the wrong
       * one. Silence is recoverable; a confident wrong answer is not.
       */
      const route = relative(root, ctx.filename).replace(/\\/g, '/').replace(/\/?index\.html$/, '');
      const { locale, rest } = localeFromRoute(route);
      const legal = docsFor(locale.code);
      const bible = bibleLinkDocsFor(locale.code);
      const docs: Record<string, unknown> = {
        privacy: legal.privacy,
        terms: legal.terms,
        support: legal.support,
        'data-deletion': legal.dataDeletion,
        'apps/biblelink/privacy': bible.bibleLinkPrivacy,
        'apps/biblelink/support': bible.bibleLinkSupport,
      };
      if (!(rest in docs)) return;
      return [
        {
          tag: 'noscript',
          children: render(docs[rest]),
          injectTo: 'body' as const,
        },
      ];
    },
  };
}

export default defineConfig({
  /**
   * `base` is configurable because the same build has to serve from a domain
   * root and from a subpath (a GitHub Pages project site lives at /<repo>/).
   * Set BASE_PATH at build time; it must carry a trailing slash.
   */
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), pageMeta(), buildStamp(), legalNoscript()],
  build: {
    rollupOptions: { input },
    // Small assets inline; anything larger stays a request the browser can
    // cache separately from the JS it would otherwise be parsed with.
    assetsInlineLimit: 2048,
  },
});
