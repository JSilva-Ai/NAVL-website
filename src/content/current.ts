import { currentLocale } from '../lib/url';
import { siteContent, statusLabel as labelForStatus } from './i18n';
import { docsFor, bibleLinkDocsFor } from './docs';

const locale = currentLocale();
const content = siteContent(locale.code);
const docs = docsFor(locale.code);
const bibleDocs = bibleLinkDocsFor(locale.code);

export const { site, routes, nav, home, apps, portfolio, appsPage, demo, testimonials, ui, footer } = content;
export const { privacy, terms, support, dataDeletion } = docs;
export const { bibleLinkPrivacy, bibleLinkSupport } = bibleDocs;
export const currentLocaleCode = locale.code;
export const statusLabel = (status: string) => labelForStatus(locale.code, status);

export type { App, Screenshot, StoreLink, GameClipSources, Status, Category } from './en/site';
export type { Block, Section, LegalDoc } from './en/legal';
export type { BibleLinkDoc, BibleLinkLanguage, BibleLinkSection, BibleLinkBlock } from './en/biblelink';
