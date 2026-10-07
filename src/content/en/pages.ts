/**
 * Every page on the site, and the metadata that goes in its head.
 *
 * This is the route table. It exists because the head of a page is not
 * content a person should be maintaining by hand thirteen times: a title, a
 * description, a canonical, five Open Graph tags and three Twitter tags,
 * repeated per document, is a copy-paste surface where a wrong canonical hides
 * for months. `pageMeta()` in vite.config.ts renders all of it from here at
 * build time, so each index.html carries only the two things Vite has to read
 * literally — the charset, and the module script that is the page's entry.
 *
 * It also exists for what comes next. A four-locale site is fifty-two
 * documents; the same head rendered from one table is the difference between
 * that being routine and being unmaintainable.
 *
 * Adding a page: add a row here, create <route>/index.html with the two
 * literal lines, and add the route to public/sitemap.xml and to ROUTES in
 * scripts/shoot.mjs. `findPages` in vite.config.ts discovers the document
 * itself — a row without a document is inert, and a document without a row
 * fails the build rather than shipping with no title.
 */
export interface PageMeta {
  /** The route as it appears in the sitemap: '' for home, 'apps', 'apps/loop'. */
  route: string;
  /** <title>, og:title and twitter:title — one string, three tags. */
  title: string;
  /** The meta description, og:description and twitter:description. */
  description: string;
}

export const pages: PageMeta[] = [
  {
    route: '',
    title: 'New AI Vision Labs — independent technology studio',
    description:
      'New AI Vision Labs is an independent technology studio. We design and build our own products — intelligent applications and original games — and publish them under our own name.',
  },
  {
    route: 'apps',
    title: 'Products — New AI Vision Labs',
    description:
      'Explore seven New AI Vision Labs products — four applications and three games — from released work to future concepts.',
  },
  {
    route: 'about',
    title: 'About New AI Vision Labs',
    description:
      'Meet the independent studio behind BibleLink, VOID STRIKER, and a growing portfolio of original applications and games.',
  },
  {
    route: 'news',
    title: 'Studio News — New AI Vision Labs',
    description:
      'Launch preparation, product milestones, and selected work from New AI Vision Labs.',
  },
  {
    route: 'apps/biblelink',
    title: 'BIBLELINK — New AI Vision Labs',
    description:
      'BIBLELINK is a daily devotional app by New AI Vision Labs, centered on Scripture, reflection, practical application, and prayer. Available now on the App Store and Google Play.',
  },
  {
    route: 'apps/biblelink/privacy',
    title: 'BibleLink Privacy Policy — New AI Vision Labs',
    description:
      'How BibleLink stores, synchronizes, exports, and deletes reading data on Apple devices.',
  },
  {
    route: 'apps/biblelink/support',
    title: 'BibleLink Support — New AI Vision Labs',
    description:
      'Help with BibleLink reading, widgets, audio, iCloud synchronization, purchase, and restoration.',
  },
  {
    route: 'apps/galaxy-forge',
    title: 'GALAXY FORGE — New AI Vision Labs',
    description:
      'GALAXY FORGE is the second game from New AI Vision Labs, currently in development.',
  },
  {
    route: 'apps/nova-frontier',
    title: 'NOVA FRONTIER — New AI Vision Labs',
    description: 'NOVA FRONTIER is a future strategy game by New AI Vision Labs, currently in development. Explore its concept artwork and creative direction.',
  },
  {
    route: 'apps/guard',
    title: 'GUARD — New AI Vision Labs',
    description:
      'GUARD is a product concept in research at New AI Vision Labs, exploring the money people lose to renewals, trials and deadlines nobody was watching.',
  },
  {
    route: 'apps/loop',
    title: 'LOOP — New AI Vision Labs',
    description:
      'LOOP is a consumer application in development at New AI Vision Labs, engineered around proactive intelligence and built in English, Portuguese and Spanish.',
  },
  {
    route: 'apps/shield',
    title: 'SHIELD — New AI Vision Labs',
    description:
      'SHIELD is a product concept in research at New AI Vision Labs, exploring personal trust intelligence: weighing a digital interaction before you act on it.',
  },
  {
    route: 'apps/void-striker',
    title: 'VOID STRIKER — New AI Vision Labs',
    description:
      'Explore VOID STRIKER, a retro arcade space shooter with seven ships, five weapons, six bosses, Daily Challenge, and Survival Mode.',
  },
  {
    route: 'apps/void-striker/privacy',
    title: 'Void Striker Privacy Policy — New AI Vision Labs',
    description: 'How Void Striker stores game progress and settings on your device.',
  },
  {
    route: 'apps/void-striker/support',
    title: 'Void Striker Support — New AI Vision Labs',
    description: 'Help with Void Striker progress, language, haptics, and settings.',
  },
  {
    route: 'demo',
    title: 'VOID STRIKER gameplay — New AI Vision Labs',
    description:
      'Watch real VOID STRIKER gameplay captured directly from the game.',
  },
  {
    route: 'support',
    title: 'Support — New AI Vision Labs',
    description:
      'Support for New AI Vision Labs apps. Email support@newaivisionlabs.com.',
  },
  {
    route: 'privacy',
    title: 'Privacy Policy — New AI Vision Labs',
    description:
      'How New AI Vision Labs handles personal information across its apps and this website.',
  },
  {
    route: 'terms',
    title: 'Terms of Use — New AI Vision Labs',
    description:
      'The terms that apply to New AI Vision Labs apps and this website.',
  },
  {
    route: 'data-deletion',
    title: 'Data Deletion — New AI Vision Labs',
    description:
      'How to request deletion of your data from New AI Vision Labs apps.',
  },
];

/** Looked up by `pageMeta()` per document, and by the sitemap check. */
export function pageFor(route: string): PageMeta | undefined {
  return pages.find((p) => p.route === route);
}
