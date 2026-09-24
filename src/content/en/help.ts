/**
 * Support and data deletion.
 *
 * Both are store requirements with a functional test behind them: a reviewer
 * will look for a contact that works and for instructions a user could
 * actually follow. Google Play in particular expects the deletion route to be
 * reachable without installing anything, which is why it is a page on this
 * site and not only a screen inside an app.
 */

import type { Section } from './legal.ts';
import { site } from './site.ts';

export const support = {
  title: 'Support',
  description: `How to reach New AI Vision Labs about any of our apps. Email ${site.email}.`,
  /** The page's whole reason for existing — kept as its own field so no edit can bury it. */
  email: site.email,
  headline: 'Talk to us.',
  lede: 'Email reaches the people who build the apps. There is no ticket system and no chatbot in front of it.',
  emailLabel: 'Support email',
  phoneLabel: 'Phone',
  /**
   * Deliberately absent. No response-time commitment is made, because none can
   * currently be met — and a promise on a support page is the kind a user holds
   * you to. Add one here only when it is real, and it will render automatically.
   */
  responseNote: '',
  helpful: {
    heading: 'What to include',
    body: [
      'You do not need any of this to write to us, but it usually saves a round trip:',
      [
        'Which app, and the version number if you can find it',
        'Your device and OS version',
        'What you expected to happen, and what happened instead',
        'A screenshot or screen recording, if the problem is visible',
      ],
    ] as (string | string[])[],
  },
  sections: [
    {
      heading: 'Bugs and crashes',
      body: [
        'Send whatever you have. A vague report of something going wrong is still worth sending — we would rather hear about it and ask questions than not hear about it.',
      ],
    },
    {
      heading: 'Refunds',
      body: [
        'Purchases go through the App Store or Google Play, not through us, so refunds are handled by them. Apple: reportaproblem.apple.com. Google Play: through your order history in the Play Store.',
        'If a refund is refused and you think it should not have been, write to us anyway — we can sometimes help.',
      ],
    },
    {
      heading: 'Privacy and your data',
      body: [
        'Requests for access to, correction of, or deletion of your personal information go to the same address. Deletion has its own page with the details of what to send.',
      ],
    },
    {
      heading: 'Feature requests',
      body: [
        'Welcome, and genuinely read. We will not promise a timeline, and most requests take a long time or never happen — but they do shape what gets built.',
      ],
    },
  ] as Section[],
};

export const dataDeletion = {
  title: 'Data Deletion',
  description:
    'How to delete local and private iCloud data from New AI Vision Labs apps.',
  /*
   * The same day the privacy policy and the terms were published, and factual
   * for this page: its content was final on 17 August and has not changed
   * since, so 21 August is when it went live rather than when it was written.
   * All three store-facing documents agreeing is also what a reviewer
   * comparing them expects.
   */
  updated: 'September 19, 2026',
  headline: 'Deleting your data.',
  lede: 'We do not operate user accounts or an app-data server. Most app data stays on the device; BibleLink can also synchronize selected data through the user’s private iCloud database.',
  intro: [
    'We run no app accounts and no advertising or analytics database. New AI Vision Labs cannot access the contents of a user’s private CloudKit database or Keychain. The controls below explain how the user can remove the data each app stores.',
  ] as (string | string[])[],
  steps: {
    heading: 'Deleting what is on your device',
    items: [
      {
        title: 'In the browser',
        body: 'VOID STRIKER keeps your high scores, achievements and volume setting in your browser\'s local storage. Clearing site data for newaivisionlabs.com in your browser settings removes all of it immediately.',
      },
      {
        title: 'On a phone',
        body: 'Deleting an app removes its local data. If an app synchronizes through iCloud, deleting the app alone does not remove the private iCloud copy.',
      },
      {
        title: 'In BibleLink',
        body: 'Open BibleLink Settings → Privacy. You can export a JSON copy of synchronized reading data or, after confirmation, delete that data from the device and the private iCloud database. Purchase status and protected evaluation dates are managed separately and are not included in this deletion.',
      },
      {
        title: 'If you have emailed us',
        body: `The one thing we do hold is any support correspondence you have sent us. Write to ${'support@newaivisionlabs.com'} and ask us to delete it, and we will.`,
      },
    ],
  },
  inApp: {
    heading: 'Account deletion',
    body: [
      'None of our apps have accounts, so there is no account to delete. If that changes, Apple requires account deletion to be available from inside the app itself, and this page will describe where to find it.',
    ] as (string | string[])[],
  },
  whatHappens: {
    heading: 'What we would do with a request',
    body: [
      'If you write to us asking for data held by New AI Vision Labs, we will check our support records and delete the email exchange if requested. We cannot retrieve or delete content inside a user’s private CloudKit database or Keychain, so BibleLink provides that control in the app.',
      /*
       * MAINTENANCE NOTE — not rendered, and not a blocker for launch.
       * If any future app gains a server, accounts, or analytics, this page is
       * rewritten before that app ships: a real timeline, a list of what is and
       * is not deleted, and how long deleted data survives in backups.
       */
    ] as (string | string[])[],
  },
  storeNote: {
    heading: 'Purchases',
    body: [
      'A purchase is held by the App Store or Google Play rather than by us. Deleting app data does not remove or cancel it. BibleLink uses a one-time unlock, not a subscription, and the purchase can be restored with the same store account.',
    ] as (string | string[])[],
  },
};
