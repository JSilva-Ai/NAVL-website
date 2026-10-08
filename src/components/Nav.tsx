import { useEffect, useRef, useState } from 'react';
import { Lockup } from './Logo';
import { nav, routes, site, ui } from '../content/current';
import { isCurrent, url, currentLocale } from '../lib/url';
import { PUBLISHED, languageNames, locales, localeFromRoute } from '../content/locales';
import { story } from '../content/story';
import { useMediaQuery, useScrollY } from '../lib/hooks';
import './nav.css';

/**
 * Site navigation.
 *
 * This is a multi-page site, not a single page with anchors, so "active" is a
 * question about the current URL rather than about scroll position. That also
 * means the links are ordinary hrefs and a middle-click or a right-click →
 * open in new tab behaves the way a visitor expects.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const locale = currentLocale();
  const compact = useMediaQuery('(max-width: 64rem)');
  const scrolled = useScrollY() > 12;
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, and hand focus back to the control that opened the sheet
  // — otherwise focus is left on a node that no longer exists and the next Tab
  // starts from the top of the document.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // The sheet covers the page; letting the body scroll behind it means the
  // page moves under a menu that is not moving.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // A resize past the breakpoint leaves the sheet mounted but its trigger gone.
  useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);

  const links = [...nav, { route: 'about', label: story.nav.about }, { route: 'news', label: story.nav.news }].map((item) => (
    <a
      key={item.route}
      className="nav__link"
      href={url(item.route)}
      aria-current={isCurrent(item.route) ? 'page' : undefined}
      onClick={() => setOpen(false)}
    >
      {item.label}
    </a>
  ));

  const languagePicker = (
    <label className="language-picker">
      <span className="sr-only">{ui.languages}</span>
      <span aria-hidden="true">◎</span>
      <select
        aria-label={ui.languages}
        value={locale.code}
        onChange={(event) => {
          const target = locales[event.target.value as keyof typeof locales];
          const base = import.meta.env.BASE_URL.replace(/^\/+|\/+$/g, '');
          const here = location.pathname.replace(/^\/+|\/+$/g, '');
          const route = localeFromRoute(base && here.startsWith(base) ? here.slice(base.length) : here).rest;
          location.href = url(route, target);
        }}
      >
        {PUBLISHED.map((code) => (
          <option value={code} key={code}>
            {languageNames[locale.code][code]}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a className="skip" href="#main">
        {ui.skipToContent}
      </a>

      <div className="container nav__inner">
      <a className="nav__brand" href={url(routes.home)} aria-label="New AI Vision Labs">
          <Lockup />
        </a>

        {!compact && <nav className="nav__links" aria-label={ui.primaryNav}>{links}</nav>}

        {compact ? (
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
            {open ? ui.close : ui.menu}
          </button>
        ) : (
          <div className="nav__actions">
            {languagePicker}
            <a className="btn btn--sm" href={`mailto:${site.email}`}>
              {ui.emailUs}
            </a>
          </div>
        )}
      </div>

      {compact && (
        <div
          id="nav-sheet"
          ref={sheetRef}
          className="nav__sheet"
          data-open={open}
          hidden={!open}
        >
          <nav className="nav__sheet-links" aria-label={ui.primaryNav}>
            {links}
          </nav>
          {languagePicker}
          <a className="btn btn--block" href={`mailto:${site.email}`}>
            {ui.emailUs}
          </a>
        </div>
      )}
    </header>
  );
}
