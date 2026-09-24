/**
 * The four pages Apple and Google both require before a listing goes live:
 * a privacy policy, terms of use, a support page with a working contact, and
 * data-deletion instructions.
 *
 * Two rules were followed while writing these and should be followed while
 * editing them:
 *
 *   1. Nothing here asserts what any app collects, stores, or shares unless it
 *      was verified against the software. A privacy policy that guesses is
 *      worse than no policy — it is a false statement to your users and to the
 *      stores. The claims that are here were checked: no route in this site
 *      contacts a third-party host, sets a cookie, or writes to storage, and
 *      VOID STRIKER keeps its scores and settings on the player's own device.
 *   2. Nothing here is legal advice. The structure and the general language
 *      are conventional and will look familiar to a reviewer. The owner has
 *      published these on his own judgement; a lawyer in the jurisdiction has
 *      not read them, and that remains worth doing.
 *
 * The mechanism that renders any string containing "[TODO" as a loud orange
 * box on the live page is still in place (see src/components/Prose.tsx). It is
 * there so that an unfinished passage fails visibly in review rather than
 * shipping as though it were true. There are none in these documents now.
 */

/** A paragraph, or a bullet list. */
export type Block = string | string[];

export interface Section {
  heading: string;
  body: Block[];
}

export interface LegalDoc {
  /** <title> and <h1>. */
  title: string;
  /** Meta description. */
  description: string;
  /** Shown under the <h1>. Update it on every substantive edit. */
  updated: string;
  intro: Block[];
  sections: Section[];
}

/**
 * The publication date, shown under the <h1> on both documents.
 *
 * One constant rather than two values, because the two documents were
 * published together and a reader comparing them should not have to wonder
 * why the dates differ. Update it on every substantive edit — that is what
 * the line is for, and a stale date on a policy is a small dishonesty.
 */
const UPDATED = 'September 19, 2026';

/* ------------------------------------------------------------------ privacy */

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  description:
    'How New AI Vision Labs handles personal information across its apps and this website.',
  updated: UPDATED,
  intro: [
    'This policy explains how New AI Vision Labs ("we", "us") handles personal information in the apps we publish and on this website.',
    'Our apps differ from one another in what they need to function, so what is collected differs too. Where that is the case, this policy says so and the specifics are listed per app rather than generalized here.',
  ],
  sections: [
    {
      heading: 'Who we are',
      body: [
        'New AI Vision Labs is an independent app studio. The legal entity behind it is New AI Vision Labs LLC, a limited liability company registered in Georgia, United States, based in Kennesaw and operated by Jorge Silva. New AI Vision Labs LLC is the data controller for the personal information described in this policy.',
        'You can reach us by email at support@newaivisionlabs.com, by phone at +1 (404) 597-3852, or by post at 1926 Barrett Knoll Circle NW, Kennesaw, GA 30152, United States.',
      ],
    },
    {
      heading: 'What we collect',
      body: [
        'Our apps do not require a New AI Vision Labs account and we do not operate an advertising or analytics system. Most app data stays on your device. Where an app uses an operating-system service such as Apple private CloudKit synchronization, Keychain, notifications, sharing, or App Store purchases, its product-specific privacy page explains that use.',
        'This website sets no cookies, runs no analytics, and makes no requests to any third party. Every font, image and video on it is served from our own domain. You can check this yourself in your browser\'s network inspector — there is nothing on the list but us.',
        'VOID STRIKER stores three things in your browser\'s local storage, on your own device: your high scores, which achievements you have unlocked, and your volume setting. That is what makes them survive a reload. It is never transmitted anywhere, we cannot see it, and clearing your browser\'s data for this site removes it completely.',
        'BibleLink stores reading data and preferences locally. On iPhone and iPad, it can synchronize selected categories through the user\'s private CloudKit database and protect evaluation dates in Keychain or iCloud Keychain. New AI Vision Labs cannot read the contents of that private database or Keychain. See the BibleLink Privacy Policy for the complete list and deletion controls.',
        /*
         * MAINTENANCE NOTE — not rendered, and not a blocker for launch.
         *
         * The three paragraphs above describe the apps as they exist today,
         * and they were verified rather than assumed: no route on this site
         * contacts a third-party host, sets a cookie, or writes to storage.
         *
         * Every new app needs its own honest entry here before it ships, and
         * the moment any app gains accounts, analytics, crash reporting, ads,
         * or a backend, this section changes first. It is the section a store
         * reviewer reads hardest and the only one where being wrong is a false
         * statement to your users.
         */
      ],
    },
    {
      heading: 'How we use information',
      body: [
        'We do not receive app reading activity for analysis, profiling, advertising, or sale. Device and Apple services process only what is needed to provide the features the user chooses.',
        'If you email us, we have your email address and whatever you wrote, for as long as it takes to answer you and keep a record of the exchange. That is the only personal information we hold about anyone.',
      ],
    },
    {
      heading: 'Legal bases for processing',
      body: [
        'Where the GDPR applies, the only personal information we process is the contents of an email you choose to send us. We rely on our legitimate interest in answering it, and on your consent in sending it. You can ask us to delete that correspondence at any time.',
      ],
    },
    {
      heading: 'Third parties',
      body: [
        'We use no analytics provider, crash-reporting service, advertising network, or attribution network on this website or in BibleLink.',
        'Apple processes App Store downloads and purchases under Apple\'s privacy policy. On Apple devices, BibleLink can use the user\'s private CloudKit database and iCloud Keychain. Those services are operated by Apple; New AI Vision Labs cannot read their private contents.',
      ],
    },
    {
      heading: 'Data retention',
      body: [
        'We hold no app account or reading database. We keep support correspondence for as long as it is useful to have a record of and delete it on request.',
        'What VOID STRIKER stores stays on your device for as long as you leave it there. Clearing your browser data, or removing the app, removes it.',
        'BibleLink reading data remains on the device and, when synchronization is active, in the user\'s private CloudKit database until the user deletes it through BibleLink Settings > Privacy. Trial-protection dates may remain in Keychain or iCloud Keychain so reinstalling the app does not restart the evaluation.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Depending on where you live, you may have the right to request access to the personal information we hold about you, to have it corrected or deleted, to object to or restrict how we use it, to receive a copy in a portable format, and to withdraw consent where our use is based on consent.',
        'To exercise any of these, email support@newaivisionlabs.com. We will respond within the period the applicable law requires. For deletion specifically, see the data deletion page, which sets out exactly what to send.',
        'If you are in the EU or UK and you believe we have handled your information improperly, you may complain to your local supervisory authority.',
      ],
    },
    {
      heading: 'Children',
      body: [
        'Age ratings are set per app rather than across the studio. Each app is rated on its own content, and the rating that applies to it is the one shown on its App Store and Google Play listing. VOID STRIKER is rated for ages 10 and up, for infrequent mild science-fiction violence.',
        'Where an app of ours is directed to children, requirements beyond this policy apply to it — Apple\'s Kids Category rules, Google Play\'s Families policy, and, in the United States, COPPA. An app published under those rules says so on its own listing.',
        'We do not knowingly collect personal information from children where doing so would require verifiable parental consent we have not obtained. If you believe a child has provided us with personal information, email us and we will delete it.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'New AI Vision Labs does not receive BibleLink reading data. Apple may process private iCloud and App Store information in accordance with its own terms and infrastructure. Support email is held with our email provider in the United States.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'We do not operate a user-account database. BibleLink uses Apple\'s private CloudKit database for optional synchronization and Keychain for protected evaluation dates; New AI Vision Labs cannot browse those private contents.',
        'This site is served over HTTPS. No system is perfectly secure and we do not claim otherwise.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy as our apps change. The date at the top reflects the most recent revision. If a change materially affects how we handle your information, we will make that clear rather than relying on the updated date alone.',
      ],
    },
    {
      heading: 'Contact',
      body: [
        'Questions about this policy or about your information: support@newaivisionlabs.com.',
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const terms: LegalDoc = {
  title: 'Terms of Use',
  description: 'The terms that apply to New AI Vision Labs apps and this website.',
  updated: UPDATED,
  intro: [
    'These terms apply to the apps published by New AI Vision Labs LLC, a Georgia limited liability company ("New AI Vision Labs", "we", "us"), and to this website. By installing an app or using the site, you agree to them.',
  ],
  sections: [
    {
      heading: 'The apps',
      body: [
        'We grant you a personal, non-exclusive, non-transferable, revocable license to use our apps on devices you own or control, for your own non-commercial use.',
        'You may not copy, modify, reverse-engineer, decompile, resell, or redistribute our apps, except to the extent that applicable law expressly permits it regardless of this restriction.',
        'Apps downloaded from the App Store or Google Play are also subject to that store\'s own terms. Where a store\'s terms conflict with these, the store\'s terms govern the distribution of the app.',
      ],
    },
    /*
     * Apple's minimum EULA terms.
     *
     * Apple offers a standard EULA, and an app that says nothing gets it. The
     * moment you supply your own — which is what this page is, the moment its
     * URL goes in the App Store Connect "License Agreement" field — Apple
     * requires it to contain the terms below, near enough verbatim in effect.
     * They exist to put Apple outside the contract: the license is ours, the
     * support obligation is ours, the liability is ours, and Apple can enforce
     * that fact against a user directly.
     *
     * Leaving them out is a review rejection, and it is the kind that comes
     * back after you think you are finished.
     *
     * The alternative is to supply no custom EULA at all and let Apple's
     * standard one apply. That is a legitimate choice and a simpler one; it is
     * not the choice this page makes, so the terms are here.
     */
    {
      heading: 'If you got the app from the App Store',
      body: [
        'This agreement is between you and New AI Vision Labs LLC only. It is not with Apple, and Apple is not responsible for the app or its contents. We are.',
        'Your license to use the app runs on any Apple-branded device you own or control, under the Usage Rules in Apple\'s Media Services Terms of Use.',
        'We are solely responsible for support and maintenance. Apple has no obligation to provide either, and you should not ask them for it — email us.',
        'We are solely responsible for any warranty, express or implied. If the app fails to conform to a warranty, you may tell Apple, and Apple will refund the purchase price if you paid one. To the maximum extent permitted by law, that is the whole of Apple\'s warranty obligation. Everything else is ours.',
        'We, not Apple, are responsible for handling any claim about the app: product liability, a failure to meet a legal or regulatory requirement, a consumer protection or privacy claim, or anything similar.',
        'If someone claims the app infringes their intellectual property, we, not Apple, are solely responsible for investigating, defending, settling, and discharging that claim.',
        'By using the app you confirm you are not in a country subject to a United States embargo or designated by the U.S. Government as supporting terrorism, and that you are not on any U.S. Government list of prohibited or restricted parties.',
        'Questions, complaints or claims about the app go to support@newaivisionlabs.com.',
        'Apple and Apple\'s subsidiaries are third-party beneficiaries of these terms, and Apple has the right to enforce them against you directly.',
      ],
    },
    {
      heading: 'Acceptable use',
      body: [
        'Do not use our apps to break the law, to interfere with the app\'s operation or security, to gain unauthorized access to any system, or to harass, abuse, or harm anyone.',
      ],
    },
    {
      heading: 'Purchases and subscriptions',
      body: [
        'BibleLink is prepared for a seven-day evaluation followed by an optional one-time permanent unlock. It is not a subscription and does not renew automatically. The store shows the localized price before confirmation.',
        'Purchases are processed by the App Store rather than by us, and refunds are handled under the store\'s policy. New AI Vision Labs does not receive payment-card or banking information.',
      ],
    },
    {
      heading: 'User content',
      body: [
        'Our apps do not provide a public user-content service. Content a user creates inside BibleLink, such as notes and highlights, stays on the device and may synchronize through that user\'s private CloudKit database. It is not uploaded to a New AI Vision Labs community or server.',
      ],
    },
    {
      heading: 'Availability',
      body: [
        'We may change, suspend, or discontinue an app or any of its features at any time. We will try to give reasonable notice of a discontinuation where we can, but we do not guarantee that any app will remain available.',
      ],
    },
    {
      heading: 'Disclaimers',
      body: [
        'Our apps are provided "as is" and "as available", without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        'Some jurisdictions do not allow the exclusion of certain warranties. Where that is the case, the exclusions above apply only to the extent permitted, and nothing in these terms limits your statutory consumer rights.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the fullest extent permitted by law, New AI Vision Labs LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, or data, arising from your use of our apps.',
        'Where liability cannot lawfully be excluded, our total liability to you for all claims arising out of or relating to our apps or this website is limited to the greater of: the amount you paid us in the twelve months before the claim arose, or one hundred United States dollars (US $100).',
        'Nothing in these terms excludes liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.',
      ],
    },
    {
      heading: 'Termination',
      body: [
        'You may stop using our apps at any time by deleting them. We may suspend or end your access if you materially breach these terms.',
      ],
    },
    {
      heading: 'Changes to these terms',
      body: [
        'We may update these terms. The date at the top reflects the most recent revision, and continuing to use an app after a change means you accept the revised terms.',
      ],
    },
    {
      heading: 'Governing law',
      body: [
        'These terms are governed by the laws of the State of Georgia, United States, without regard to its conflict-of-laws rules. The state and federal courts located in Georgia have jurisdiction over any dispute arising from them.',
        'This does not take away rights you have under the consumer-protection law of the country you live in. Those generally apply regardless of what this clause says.',
      ],
    },
    {
      heading: 'Contact',
      body: ['Questions about these terms: support@newaivisionlabs.com.'],
    },
  ],
};
