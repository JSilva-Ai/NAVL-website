/**
 * Every visible string on the site, in one file, so a copy pass never has to
 * touch layout.
 *
 * Nothing in here is invented. Where a real fact is needed and does not exist
 * yet — a release date, a store URL, a screenshot — the value is an explicit
 * [TODO] rather than a plausible placeholder, so it fails loudly in review
 * instead of shipping as though it were true. There are no metrics, no team
 * counts, no publication counts, and no testimonials on this site until there
 * is something real to put in them.
 */

export const site = {
  name: 'New AI Vision Labs',
  /** Used where the full name is too long: nav on small screens, manifest. */
  shortName: 'NAI Labs',
  domain: 'newaivisionlabs.com',
  origin: 'https://newaivisionlabs.com',
  email: 'support@newaivisionlabs.com',

  /**
   * Who is behind the studio.
   *
   * The entity is a Georgia limited liability company, registered with the
   * Secretary of State and holding an EIN issued to "NEW AI VISION LABS LLC".
   *
   * `name` above is the trading name and is what the site says everywhere it
   * is speaking to a visitor. `legalName` is the entity, and it belongs in the
   * three places that are speaking to a lawyer or a store reviewer: the
   * privacy policy, the terms, and the copyright line.
   *
   * The EIN itself is never stored in this repo and never goes on the site. It
   * is required nowhere and is useful to anyone attempting fraud in the
   * company's name.
   */
  legalName: 'New AI Vision Labs LLC',
  /** The jurisdiction the entity is formed in — named in the terms. */
  jurisdiction: 'Georgia, United States',
  operator: 'Jorge Silva',

  /**
   * City and state, for the places that only need to say where the studio
   * operates from — the footer, and prose that would read badly with a street
   * address dropped into it.
   *
   * This is enough for the privacy policy's "who we are", which has to say who
   * the controller is and where they operate from. It is *not* a postal
   * address, so it does not cover the two cases that need one: a Google Play
   * listing, where the developer address is displayed and verified, and
   * offering the apps in the EU. Both want a full street address, which is
   * `postalAddress` below.
   */
  location: 'Kennesaw, Georgia, United States',

  /**
   * The operator's home address, published deliberately.
   *
   * This is a decision, not an oversight, and it was taken with the trade-off
   * stated: Google Play displays the developer address on the store listing,
   * and the EU trader rules oblige Apple to show it too, so withholding it
   * from this site would not have kept it private once an app is listed. A
   * registered agent or a commercial mailbox would have avoided that; the
   * owner weighed both and chose to use the home address.
   *
   * Swapping in a business address later is a one-line change here plus the
   * matching sentence in the privacy policy's "Who we are".
   */
  postalAddress: '1926 Barrett Knoll Circle NW, Kennesaw, GA 30152, United States',

  /** Displayed on the site and linked as tel:. */
  phone: '+1 (404) 597-3852',
  /** The same number, dial-safe, for href="tel:". */
  phoneHref: '+14045973852',

  /** The proposition, in one sentence. Read it out loud before changing it. */
  proposition:
    'We are an independent technology studio. We design and build our own products — intelligent applications and original games — and publish them under our own name.',
  /** Shorter form, for meta descriptions and the footer. */
  blurb: 'An independent technology studio building intelligent applications and original games.',
};

/**
 * Routes, written the way they appear in the sitemap. `url()` in lib/url.ts
 * turns these into hrefs that survive being served from a subpath.
 */
export const routes = {
  home: '',
  apps: 'apps',
  about: 'about',
  news: 'news',
  demo: 'demo',
  support: 'support',
  privacy: 'privacy',
  terms: 'terms',
  dataDeletion: 'data-deletion',
  bibleLinkPrivacy: 'apps/biblelink/privacy',
  bibleLinkSupport: 'apps/biblelink/support',
} as const;

export const nav = [
  { route: routes.apps, label: 'Products' },
  { route: routes.demo, label: 'Gameplay' },
  { route: routes.support, label: 'Support' },
] as const;

export const home = {
  hero: {
    eyebrow: 'Independent technology studio',
    /** Set as three lines so the break is authored, not left to the browser. */
    headline: ['Intelligent products.', 'Original thinking.'],
    accentWord: 'Original thinking.',
    lede: site.proposition,
    primaryCta: { label: 'See what we are building', route: routes.apps },
    secondaryCta: { label: 'Watch gameplay', route: routes.demo },
  },
  approach: {
    index: '02',
    label: 'How we work',
    headline: 'Small studio. Whole product.',
    body: [
      'We are a small studio, and everything we publish is our own. There is no client work behind the scenes and no white-label version of what you see here.',
      'The same people write the code, draw the interface, and answer the support email. That is a real constraint on how much we can ship at once, and it is also the reason the details hold up.',
    ],
    points: [
      {
        title: 'We ship our own work',
        body: 'Every product under our name is designed and built in-house, start to finish.',
      },
      {
        title: 'We keep data collection minimal',
        body: 'We ask for what a product needs to function and nothing else. What each one collects is written on its own privacy page.',
      },
      {
        title: 'We say which stage things are at',
        body: 'Every product on this site carries its real stage, from research to released. Nothing here is described as finished before it is.',
      },
    ],
  },
  /**
   * The portfolio section head on the home page.
   *
   * The home page shows the same two groups as /products, so a visitor who
   * never clicks through still leaves knowing this is a studio with several
   * products rather than a site for one.
   */
  portfolio: {
    index: '01',
    label: 'Portfolio',
    headline: 'Seven products. One standard.',
    body: 'Four applications and three games, each marked with the stage it is actually at.',
    cta: { label: 'All products', route: routes.apps },
  },
  demoCallout: {
    index: '03',
    label: 'Gameplay',
    headline: 'See VOID STRIKER in action.',
    body: 'Watch real gameplay from VOID STRIKER: space combat, enemy waves, and upgrades between missions.',
    cta: { label: 'Watch gameplay', route: routes.demo },
  },
};

/* -------------------------------------------------------------------------
   Apps
   ------------------------------------------------------------------------- */

export interface StoreLink {
  /** 'appStore' | 'googlePlay' — drives which badge is drawn. */
  store: 'appStore' | 'googlePlay';
  /** Empty string means "not published yet"; the badge renders as unavailable. */
  href: string;
}

/** A recorded clip, at the house 520x720. Paths are under public/. */
export interface GameClipSources {
  webm: string;
  mp4: string;
  poster: string;
}

export interface Screenshot {
  /** Path under public/, e.g. 'media/apps/void-striker/01.png'. */
  src: string;
  alt: string;
  /** Optional short caption, shown only in galleries that ask for it. */
  label?: string;
  width: number;
  height: number;
}

/**
 * Where a product sits in the portfolio.
 *
 * Two groups rather than one long list, because they are read differently: an
 * application is judged on what it does for you, a game on whether it looks
 * worth an evening. Mixing them makes a visitor sort them mentally before they
 * can react to either.
 */
export type Category = 'app' | 'game';

/**
 * How far along a product is.
 *
 * Four values, ordered. They are the studio's real internal stages, not
 * marketing words, and the pill says exactly the one a product is at:
 *
 *   'Product discovery'  research; the shape of the thing is still open
 *   'In development'     being built
 *   'Final testing'      built, being tested before release
 *   'On the stores'      published, with a store link that works
 *   'On the App Store'    published on Apple, with Google Play pending
 *
 * Nothing may carry 'On the stores' without a real href in `stores`.
 */
export type Status = 'Product discovery' | 'In development' | 'Final testing' | 'On the stores' | 'On the App Store';

export interface App {
  slug: string;
  name: string;
  category: Category;
  /** What kind of thing it is, e.g. 'AI · Digital protection'. Shown on the card. */
  kind: string;
  /**
   * The product's own line, where one has been settled — "Know before you
   * trust." It is the headline on the product's page, so it is the sentence
   * that has to carry the idea on its own. Omitted rather than invented.
   */
  positioning?: string;
  /** One line, shown on the card and under the title. */
  tagline: string;
  status: Status;
  /**
   * Optional on purpose. A product early enough that the platforms are not
   * decided says nothing here, rather than guessing at iOS and Android
   * because that is what a studio usually ships.
   */
  platforms?: string[];
  /** Longer description for the app's own page. Paragraphs. */
  description: string[];
  /** Final product icon, when approved. Displayed on the portfolio card and product page. */
  icon?: Screenshot;
  /** Editorial concept art for an unreleased product, never a fake screenshot. */
  conceptArt?: Screenshot;
  screenshots: Screenshot[];
  /** Product pages can opt into a horizontal, device-shaped screenshot rail. */
  screenshotDisplay?: 'gallery';
  /** Shown on the card and on the app page in place of a screenshot. */
  clip?: GameClipSources;
  stores: StoreLink[];
  /** Set when the app has a playable web build. Route, not a full URL. */
  demoRoute?: string;
  /** App-specific store-facing pages, when its data practices need their own detail. */
  privacyRoute?: string;
  supportRoute?: string;
}

/**
 * The studio's portfolio.
 *
 * Everything on this list is written from what the studio has actually
 * decided. Where a product is early, the entry says so and stops — the rule
 * that no page may describe unshipped behaviour is not a stylistic preference
 * here, it is what keeps the two discovery-stage entries below from reading as
 * a security product and a financial product that exist. They do not.
 *
 * VOID STRIKER's description is written from the game's own source, which is
 * maintained in the private game repository — every feature named was read out of it
 * rather than assumed.
 *
 * Order within each category is the order they appear. Adding an app also
 * means adding its page: copy apps/void-striker/index.html to
 * apps/<slug>/index.html and change the slug it imports. See README.
 */
export const apps: App[] = [
  {
    slug: 'loop',
    name: 'LOOP',
    category: 'app',
    kind: 'AI · Consumer application',
    positioning: 'Intelligence that stays one step ahead.',
    tagline: 'A consumer application in active development, built multilingual from the start.',
    status: 'In development',
    description: [
      'LOOP is a consumer application we are actively building, engineered around proactive intelligence.',
      'It is multilingual from the first line rather than the last: English, Portuguese and Spanish. That was decided early because adding a second language to a finished product is not a feature, it is a rewrite.',
      'What it does in detail is not described here yet. It is still being built, and we would rather say nothing than describe something that changes before it ships. There is no release date on this page for the same reason.',
    ],
    screenshots: [],
    conceptArt: {
      src: 'media/apps/loop/concept-1920.webp',
      alt: 'Concept artwork for LOOP: a luminous glass loop connecting points around a calm central light.',
      label: 'Concept artwork · product in development',
      width: 1920,
      height: 1280,
    },
    stores: [
      { store: 'appStore', href: '' },
      { store: 'googlePlay', href: '' },
    ],
  },
  {
    slug: 'shield',
    name: 'SHIELD',
    category: 'app',
    kind: 'AI · Digital protection',
    positioning: 'Know before you trust.',
    tagline: 'A product concept in discovery, built around one question: can I trust this?',
    status: 'Product discovery',
    description: [
      'SHIELD starts from a question people already ask themselves several times a week. A message from a number they do not know. A link in an email that looks almost right. A screenshot, an invoice, a QR code on a parking meter.',
      'The idea we are exploring is personal trust intelligence: helping someone weigh a digital interaction before they click it, answer it, or send money to it.',
      'SHIELD is at the research stage. Nothing is built and nothing is released. Nothing on this page describes behaviour that exists today, and we will not say it detects scams or keeps anyone safe until there is a product that has been tested against those words.',
    ],
    screenshots: [],
    conceptArt: {
      src: 'media/apps/shield/concept-1920.webp',
      alt: 'Concept artwork for SHIELD: a transparent crystalline shield protecting a luminous signal.',
      label: 'Concept artwork · product discovery',
      width: 1920,
      height: 1280,
    },
    stores: [
      { store: 'appStore', href: '' },
      { store: 'googlePlay', href: '' },
    ],
  },
  {
    slug: 'guard',
    name: 'GUARD',
    category: 'app',
    kind: 'AI · Financial protection',
    positioning: 'Know before you lose.',
    tagline: 'A product concept in discovery, about the money that leaves quietly.',
    status: 'Product discovery',
    description: [
      'Most money lost quietly is lost to a date nobody was watching. A trial that converted. A subscription renewed for another year. A return window that closed on Tuesday. A price that went up between one bill and the next.',
      'GUARD is the concept we are exploring around that — what we describe internally as an AI money guardian.',
      'It is at the research stage. Nothing is built and nothing is released. It does not connect to a bank, cancel anything, claim a refund, or move money, and it will not be described as doing any of those things until there is a product that does them.',
    ],
    screenshots: [],
    conceptArt: {
      src: 'media/apps/guard/concept-1920.webp',
      alt: 'Concept artwork for GUARD: a golden timeline passing safely through a protective arc.',
      label: 'Concept artwork · product discovery',
      width: 1920,
      height: 1280,
    },
    stores: [
      { store: 'appStore', href: '' },
      { store: 'googlePlay', href: '' },
    ],
  },
  {
    slug: 'biblelink',
    name: 'BIBLELINK',
    category: 'app',
    kind: 'Application · Daily devotional',
    positioning: 'Scripture, reflection, and prayer for every day.',
    tagline: 'A daily devotional app, available on the App Store.',
    status: 'On the App Store',
    description: [
      'BIBLELINK is a daily devotional experience centered on Scripture, reflection, practical application, and prayer.',
      'It is designed around a calm, focused daily rhythm with the Bible, bringing the devotional experience together in one place.',
      'BIBLELINK is available on the App Store. Google Play availability has not been announced.',
    ],
    icon: {
      src: 'media/apps/biblelink/icon.png',
      alt: 'BibleLink app icon: an ornate black and gold Bible with a luminous cross on its cover.',
      width: 1024,
      height: 1024,
    },
    screenshots: [
      {
        src: 'media/apps/biblelink/screens/01-home.webp',
        alt: 'BibleLink home screen showing Romans 5:8 over a sunrise at the ocean, with listening, favorite, and sharing controls.',
        label: 'A quiet daily start',
        width: 660,
        height: 1434,
      },
      {
        src: 'media/apps/biblelink/screens/02-bible.webp',
        alt: 'BibleLink Bible reader open to Romans chapter 5 with translation, parallel reading, audio, and text controls.',
        label: 'Read and listen to Scripture',
        width: 660,
        height: 1434,
      },
      {
        src: 'media/apps/biblelink/screens/03-moment-with-god.webp',
        alt: 'Moment with God screen presenting Scripture, reflection, prayer, and an action for the day.',
        label: 'A complete daily devotional',
        width: 660,
        height: 1434,
      },
      {
        src: 'media/apps/biblelink/screens/04-prayers.webp',
        alt: 'BibleLink prayers screen with morning, night, anxiety, and gratitude categories and Bible references.',
        label: 'Prayers for every moment',
        width: 660,
        height: 1434,
      },
      {
        src: 'media/apps/biblelink/screens/05-favorites.webp',
        alt: 'BibleLink favorites screen organizing saved verses, prayers, highlights, and notes.',
        label: 'Keep what speaks to you',
        width: 660,
        height: 1434,
      },
      {
        src: 'media/apps/biblelink/screens/06-reading-size.webp',
        alt: 'BibleLink Bible reader with larger text for more comfortable and accessible reading.',
        label: 'Comfortable, adjustable reading',
        width: 660,
        height: 1434,
      },
    ],
    screenshotDisplay: 'gallery',
    stores: [
      { store: 'appStore', href: 'https://apps.apple.com/us/app/biblelink/id6812830407' },
      { store: 'googlePlay', href: '' },
    ],
    privacyRoute: routes.bibleLinkPrivacy,
    supportRoute: routes.bibleLinkSupport,
  },
  {
    slug: 'void-striker',
    name: 'VOID STRIKER',
    category: 'game',
    kind: 'Game',
    tagline: 'Humanity’s last fighter. The Void has awakened.',
    status: 'On the App Store',
    platforms: ['iOS', 'Android'],
    description: [
      'Fight through five campaign sectors, take on six bosses, or enter the Daily Challenge and Survival Mode. Seven starfighters and five weapon types give every run a different rhythm.',
      'Earn Scrap to unlock ships and paint jobs, improve your arsenal between waves, and carry pilot progression into the next run. Haptics, reduced effects, and English, Portuguese, and Spanish interface options let you tune the experience.',
      'VOID STRIKER is available on the App Store. Google Play availability has not been announced.',
    ],
    screenshots: [
      {
        src: 'media/apps/void-striker/01.jpg',
        alt: 'VOID STRIKER pilot hub with the equipped starfighter, weapon and hangar panels, Daily Challenge and Survival buttons, and a Start Mission control.',
        width: 520,
        height: 720,
      },
      {
        src: 'media/apps/void-striker/02.jpg',
        alt: 'Wave three in sector one: enemy starfighters, incoming fire, power-ups, and the player ship over a deep-blue space battlefield.',
        width: 520,
        height: 720,
      },
      {
        src: 'media/apps/void-striker/03.jpg',
        alt: 'Upgrade station between waves offering Power Core, Overdrive, and Magnet Field improvements for credits earned in play.',
        width: 520,
        height: 720,
      },
      {
        src: 'media/apps/void-striker/04.jpg',
        alt: 'Wave three with shield, speed, and beam power-ups descending through the battlefield as the player ship dodges enemy fire.',
        width: 520,
        height: 720,
      },
    ],
    clip: {
      webm: 'media/games/void-striker/clip.webm',
      mp4: 'media/games/void-striker/clip.mp4',
      poster: 'media/games/void-striker/poster.jpg',
    },
    stores: [
      { store: 'appStore', href: 'https://apps.apple.com/us/app/void-striker/id6815695186' },
      { store: 'googlePlay', href: '' },
    ],
    privacyRoute: 'apps/void-striker/privacy',
    supportRoute: 'apps/void-striker/support',
  },
  {
    slug: 'galaxy-forge',
    name: 'GALAXY FORGE',
    category: 'game',
    kind: 'Game',
    tagline: 'A second game, in development.',
    status: 'In development',
    description: [
      'GALAXY FORGE is the studio\'s second game and is being built now.',
      'Nothing about how it plays is described here yet. It is early, the answers change weekly at this stage, and a page that guessed at them would be out of date before anyone read it.',
    ],
    screenshots: [],
    conceptArt: {
      src: 'media/apps/galaxy-forge/concept-1920.webp',
      alt: 'Concept artwork for GALAXY FORGE: an orbital forge shaping a starship from molten starlight.',
      label: 'Concept artwork · game in development',
      width: 1920,
      height: 1280,
    },
    stores: [
      { store: 'appStore', href: '' },
      { store: 'googlePlay', href: '' },
    ],
  },
  {
    slug: 'nova-frontier',
    name: 'NOVA FRONTIER',
    category: 'game',
    kind: 'Game',
    tagline: 'A new strategy world in development.',
    status: 'In development',
    description: [
      'NOVA FRONTIER is a future original game from New AI Vision Labs, currently in development.',
      'The image below is concept artwork showing the creative direction. Its depicted systems, platforms, and features are not a release commitment and may change as development continues.',
    ],
    screenshots: [],
    conceptArt: {
      src: 'media/apps/nova-frontier/concept.webp',
      alt: 'NOVA FRONTIER concept artwork showing explorers overlooking a science-fiction citadel, a distant planet, and an approaching battle.',
      label: 'Concept artwork · game in development',
      width: 1672,
      height: 941,
    },
    stores: [
      { store: 'appStore', href: '' },
      { store: 'googlePlay', href: '' },
    ],
  },
];

/**
 * The two halves of the portfolio, in the order they are shown.
 *
 * Derived from `apps` rather than listed again, so adding a product to the
 * array above is the whole change — there is no second place to remember.
 */
export const portfolio = [
  {
    id: 'applications',
    label: 'AI & applications',
    headline: 'Intelligent applications.',
    items: apps.filter((a) => a.category === 'app').sort((a, b) => Number(b.slug === 'biblelink') - Number(a.slug === 'biblelink')),
  },
  {
    id: 'games',
    label: 'Games',
    headline: 'Original games.',
    items: apps.filter((a) => a.category === 'game'),
  },
] as const;

export const appsPage = {
  index: '',
  label: 'Products',
  headline: 'What we are building.',
  lede: 'Seven products at different stages. Everything here is our own work, and each one says where it actually is rather than where we would like it to be.',
  /** Shown when an app has no store links yet. */
  notYetOnStores: 'Not available yet',
  /**
   * Shown on any product page that is not published. The wording covers all
   * three unreleased stages on purpose — a research-stage concept and a
   * product in final testing are both "nothing to download", and writing a
   * sentence per stage invites one of them to go stale.
   */
  inDevelopmentNote:
    'This product has not been released. There is no download link because there is nothing to download yet.',
};

/* -------------------------------------------------------------------------
   Demo
   ------------------------------------------------------------------------- */

export const demo = {
  label: 'Gameplay',
  headline: 'VOID STRIKER',
  lede: 'Fourteen seconds of an actual run — recorded from the game itself, not animated for the site.',
  /**
   * The clip. Recorded from the real build, frame by
   * frame, at the house 520x720.
   *
   * This page used to embed the game as a playable iframe. It is a video now
   * because a clip is the format that generalises: every future game gets one,
   * at the same size, with no per-game embedding work and no third-party
   * frame to sandbox.
   */
  clip: {
    webm: 'media/games/void-striker/clip.webm',
    mp4: 'media/games/void-striker/clip.mp4',
    poster: 'media/games/void-striker/poster.jpg',
  },
  clipAlt:
    'VOID STRIKER gameplay: the player ship firing upward through waves of enemies, with the score and wave counter across the top.',
  /** Shown if `clip` is ever cleared. */
  unconfigured: {
    title: 'No clip recorded yet',
    body: 'A gameplay preview will appear when footage is available.',
  },
  facts: [
    { label: 'Recorded at', value: '520 x 720, 60 fps' },
    { label: 'Engine', value: 'None. Canvas 2D' },
    { label: 'Audio', value: 'Synthesised, Web Audio' },
  ],
  note: 'Recorded from the real game build. VOID STRIKER is available on the App Store.',
};

/* -------------------------------------------------------------------------
   Testimonials — built, switched off, and empty.

   This component exists so that turning it on later is a one-line change, and
   it renders nothing at all while `enabled` is false. Do not put anything in
   `items` that is not a real review a real person wrote. Store reviews are the
   intended source.
   ------------------------------------------------------------------------- */

export interface Testimonial {
  quote: string;
  author: string;
  /** Where the review was left, e.g. 'App Store'. */
  source: string;
}

export const testimonials: {
  enabled: boolean;
  label: string;
  headline: string;
  items: Testimonial[];
} = {
  enabled: false,
  label: 'Reviews',
  headline: 'What people say.',
  items: [],
};

/* -------------------------------------------------------------------------
   Interface strings
   ------------------------------------------------------------------------- */

export const ui = {
  skipToContent: 'Skip to content',
  menu: 'Menu',
  close: 'Close',
  backToApps: 'All products',
  screenshotsLabel: 'Screenshots',
  gameplayLabel: 'Gameplay',
  conceptArtLabel: 'Concept artwork',
  /**
   * Shown on a product page that has no artwork yet.
   *
   * This used to be a `[TODO]`, which rendered as a loud orange box aimed at
   * whoever was building the site. That was right while one product had a page
   * and it was fully illustrated. With four unreleased products holding pages,
   * it would put four developer notes in front of visitors. A missing
   * screenshot is not a false claim — saying plainly that there is nothing to
   * show yet is both honest and finished. Screenshots go in
   * public/media/apps/<slug>/ and are listed in src/content/site.ts.
   */
  noScreenshots: 'Nothing to show yet. Screenshots go up when there is something worth looking at.',
  kindLabel: 'Category',
  stageLabel: 'Stage',
  supportShort: 'Support',
  supportEmail: 'Support email',
  emailUs: 'Email us',
  primaryNav: 'Primary navigation',
  onThisPage: 'On this page',
  lastUpdated: 'Last updated',
  getIt: 'Availability',
  platforms: 'Platforms',
  legalSupport: 'Privacy & support',
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
  dataDeletion: 'Data deletion',
  playDemo: 'Play the demo',
  aboutGame: 'About the game',
  deleteRequest: 'Email a deletion request',
  download: 'View in store',
  languages: 'Languages',
  phone: 'Phone',
  productsWord: 'PRODUCTS',
  conceptNotice: 'Concept image for a product in development.',
};

export const footer = {
  blurb: site.blurb,
  columns: [
    {
      title: 'Studio',
      links: [
        { label: 'Products', route: routes.apps },
        { label: 'Gameplay', route: routes.demo },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Support', route: routes.support },
        { label: 'Data deletion', route: routes.dataDeletion },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', route: routes.privacy },
        { label: 'Terms of Use', route: routes.terms },
      ],
    },
  ],
  /**
   * Rendered as "Copyright © <year> New AI Vision Labs LLC. All rights
   * reserved." with the year filled at run time.
   *
   * The entity, not the trading name: a copyright notice identifies who owns
   * the work, and that is the LLC. "All rights reserved." is a formality with
   * no legal effect left in the Berne Convention countries, but it is the
   * convention a reader expects and its absence gets noticed.
   */
  copyright: site.legalName,
  rightsReserved: 'All rights reserved.',
};
