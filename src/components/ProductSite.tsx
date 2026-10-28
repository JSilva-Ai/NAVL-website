import { useRef, useState } from 'react';
import { apps, currentLocaleCode as locale, ui, statusLabel } from '../content/current';
import { pageCopy, productDetail, productStage } from '../content/product-pages';
import { locales, PUBLISHED, type LocaleCode } from '../content/locales';
import { asset, url } from '../lib/url';
import { useReducedMotion } from '../lib/hooks';
import { ProductStory, ProductQuestions } from './ProductStory';
import './product-site.css';

export function ProductSite({ slug }: { slug: string }) {
  const app = apps.find(item => item.slug === slug)!;
  const c = pageCopy[locale], d = productDetail(app, locale);
  const released = app.stores.some(store => store.href);
  const name = app.displayName ?? app.name;
  const stage = released ? statusLabel(app.status) : productStage(app, locale);
  const [menu, setMenu] = useState(false), [depth, setDepth] = useState(true), [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  const shots = slug === 'void-striker' ? app.screenshots.slice(0, 2) : app.screenshots;
  const game = app.category === 'game';
  const graphic = slug === 'special-dates' ? <><rect x="45" y="55" width="150" height="145" rx="20"/><path d="M45 100h150M85 38v36m70-36v36M90 140l23 23 39-41"/></> : slug === 'personal-finance' ? <><path d="M45 185h150M65 160v-40m36 40V92m37 68v-40m37 40V60M55 85l43-37 42 16 44-36"/></> : slug === 'shield' || slug === 'guard' ? <><path d="M120 30 195 60v60c0 45-43 75-75 90-32-15-75-45-75-90V60Z"/><path d="m85 120 25 25 48-50"/></> : <><ellipse cx="120" cy="120" rx="90" ry="45" transform="rotate(-35 120 120)"/><ellipse cx="120" cy="120" rx="90" ry="45" transform="rotate(35 120 120)"/><circle cx="120" cy="120" r="18"/></>;
  const stores = () => <div className="ps-stores">{app.stores.filter(s => s.href).map(s => <a href={s.href} key={s.store} rel="noopener"><img src={asset(`brand/${s.store === 'appStore' ? 'apple' : 'googleplay'}.svg`)} width="24" height="24" alt=""/><span><small>{ui.download}</small><strong>{s.store === 'appStore' ? 'App Store' : 'Google Play'}</strong></span><span aria-hidden="true">↗</span></a>)}</div>;
  return <div className={`ps-site ps-${slug}${game ? ' ps-game' : ''}`}>
    <a className="ps-skip" href="#ps-main">{c.overview}</a>
    <header className="ps-header"><div className="ps-wrap ps-nav"><a className="ps-brand" href="#ps-main">{name}<small>BY NAVL</small></a><button className="ps-menu" aria-expanded={menu} aria-controls="ps-nav" onClick={() => setMenu(!menu)}>Menu {menu ? '−' : '+'}</button><nav id="ps-nav" className={menu ? 'is-open' : ''} aria-label={name}>{[[c.overview, '#ps-experience'], ...(shots.length ? [[c.gallery, '#ps-gallery']] : []), [c.details, '#ps-details']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}<a className="ps-nav-cta" href={released ? '#ps-download' : '#ps-details'} onClick={() => setMenu(false)}>{released ? ui.download : c.stage} ↗</a></nav></div></header>
    <main id="ps-main">
      <section className="ps-hero ps-wrap"><div className="ps-hero-copy"><p className="ps-kicker"><span/> {stage}</p><p className="ps-wordmark">{name}</p><h1>{d.headline}</h1><p className="ps-intro">{d.intro}</p>{released ? stores() : <a className="ps-button" href="#ps-experience">{c.explore} <span aria-hidden="true">↓</span></a>}<p className="ps-platforms">{app.platforms?.join(' / ')}</p></div>
        <div className="ps-showcase" data-depth={depth && !reduced}>
          {shots.length && !app.conceptArt ? <div className="ps-phones">{shots.slice(0,2).map((s,i) => <figure className={`ps-phone ps-phone-${i}`} key={s.src}><img src={asset(s.src)} width={s.width} height={s.height} alt={s.alt} fetchPriority={i === 0 ? 'high' : 'auto'}/></figure>)}</div> : app.conceptArt ? <figure className="ps-cover"><img src={asset(app.conceptArt.src)} alt={app.conceptArt.alt} width={app.conceptArt.width} height={app.conceptArt.height} fetchPriority="high"/><figcaption>{c.concept}</figcaption></figure> : <figure className="ps-concept"><div className="ps-orbit" aria-hidden="true"/><svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{graphic}</svg><figcaption>{c.concept}</figcaption></figure>}
          <button className="ps-depth" type="button" disabled={reduced} aria-pressed={depth && !reduced} onClick={() => setDepth(!depth)}>3D {depth && !reduced ? '−' : '+'}</button>
        </div>
      </section>
      {(locale === 'pt' || locale === 'en') && <ProductStory slug={slug}/>}
      <section className="ps-experience ps-wrap" id="ps-experience" aria-labelledby="ps-experience-title"><div className="ps-section-head"><p className="ps-kicker">01 / {name}</p><h2 id="ps-experience-title">{released ? c.features : c.planned}</h2></div><div className="ps-feature-grid">{d.features.map((f,i) => <article key={f.title}><span className="ps-number">0{i+1}</span><h3>{f.title}</h3><p>{f.body}</p></article>)}</div></section>
      {shots.length > 0 && <section className="ps-gallery-section" id="ps-gallery" aria-labelledby="ps-gallery-title"><div className="ps-wrap"><div className="ps-section-head"><p className="ps-kicker">02 / {name}</p><h2 id="ps-gallery-title">{c.gallery}</h2><p>{c.enlarge} ↗</p></div><div className={`ps-gallery${slug === 'nova-frontier' ? ' ps-gallery-wide' : ''}`}>{shots.map((s,i) => <figure key={s.src}><button type="button" aria-label={`${c.enlarge}: ${s.label ?? s.alt}`} onClick={() => { setSelected(i); dialog.current?.showModal(); }}><img src={asset(s.src)} alt={s.alt} width={s.width} height={s.height} loading="lazy"/></button><figcaption>{s.label ?? name}</figcaption></figure>)}</div></div><dialog ref={dialog} className="ps-lightbox" aria-label={c.gallery} onClick={e => {if(e.target === dialog.current) dialog.current.close();}}><button aria-label={c.close} onClick={() => dialog.current?.close()}>×</button><img src={asset(shots[selected]?.src ?? '')} alt={shots[selected]?.alt ?? ''}/></dialog></section>}
      {slug === 'void-striker' && <section className="ps-film ps-wrap" id="ps-film" aria-labelledby="ps-film-title"><div className="ps-section-head"><p className="ps-kicker">VOID STRIKER / 1.1.3</p><h2 id="ps-film-title">{c.film}</h2></div><div className="ps-cinema">{playing ? <video controls autoPlay playsInline aria-label={c.film}><source src={asset('media/apps/void-striker/promo/film-113.mp4')} type="video/mp4"/></video> : <button onClick={() => setPlaying(true)} aria-label={c.film}><img src={asset('media/apps/void-striker/menu-113.webp')} alt="" loading="lazy"/><span aria-hidden="true">▶</span></button>}</div></section>}
      <section className="ps-details ps-wrap" id="ps-details" aria-labelledby="ps-details-title"><div><p className="ps-kicker">{name} / NAVL</p><h2 id="ps-details-title">{released ? c.availability : stage}</h2><p>{d.note ?? d.intro}</p>{!app.conceptArt && !shots.length && <p>{c.noMedia}</p>}</div><dl><div><dt>{c.stage}</dt><dd>{stage}</dd></div><div><dt>{c.platform}</dt><dd>{app.platforms?.join(' · ') ?? '—'}</dd></div>{d.price && <div><dt>{c.price}</dt><dd>{d.price}<small>{c.payment}</small></dd></div>}</dl></section>
      <ProductQuestions slug={slug}/>
      <section className="ps-finale" id="ps-download"><div className="ps-wrap"><p className="ps-kicker">{stage}</p><h2>{name}</h2><p>{released ? app.tagline : c.future}</p>{released ? stores() : <a className="ps-button" href={`mailto:support@newaivisionlabs.com`}>{ui.supportShort} ↗</a>}</div></section>
    </main>
    <footer className="ps-footer ps-wrap"><div><a className="ps-brand" href="#ps-main">{name}</a><p>© {new Date().getFullYear()} New AI Vision Labs LLC</p></div><nav aria-label={c.privacy}><a href={url('')}>NAVL ↗</a><a href={url(app.privacyRoute ?? 'privacy', slug === 'void-striker' ? locales.en : undefined)}>{ui.privacy}</a><a href={url(app.supportRoute ?? 'support', slug === 'void-striker' ? locales.en : undefined)}>{ui.supportShort}</a><a href={url('terms')}>{ui.terms}</a></nav><label><span className="ps-kicker">{locales[locale].endonym}</span><select aria-label={locales[locale].endonym} value={locale} onChange={e => {location.href = url(`apps/${slug}`, locales[e.target.value as LocaleCode]);}}>{PUBLISHED.map(l => <option key={l} value={l}>{locales[l].endonym}</option>)}</select></label></footer>
  </div>;
}
