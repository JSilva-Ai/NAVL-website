import { useRef, useState, type CSSProperties } from 'react';
import { apps, currentLocaleCode as locale, routes, site, ui, statusLabel } from '../content/current';
import { productAccent, productDetail, pageCopy, productStage } from '../content/product-pages';
import { asset, url } from '../lib/url';
import { locales } from '../content/locales';
import { StoreBadge } from './StoreBadge';
import { ProductFilm } from './LaunchMedia';
import { bibleScreen } from '../content/story';
import { ProductStory, ProductQuestions } from './ProductStory';
import './product-design.css';
export function AppPage({ slug }: {
    slug: string;
}) {
    const app = apps.find(item => item.slug === slug);
    const dialog = useRef<HTMLDialogElement>(null);
    const [selected, setSelected] = useState(0);
    const copy = pageCopy[locale];
    if (!app)
        return <section className="section container"><h1>{ui.backToApps}</h1><a href={url(routes.apps)}>{ui.backToApps}</a></section>;
    const detail = productDetail(app, locale);
    const released = app.stores.some(store => store.href);
    const stage = released ? statusLabel(app.status) : productStage(app, locale);
    const film = slug === 'biblelink' || slug === 'void-striker';
    const cover = app.conceptArt;
    const shots = app.screenshots.map((shot, i) => slug === 'biblelink' ? { ...shot, ...bibleScreen(i, shot) } : shot);
    const related = apps.filter(item => item.slug !== slug && item.category === app.category).slice(0, 3);
    const legalLocale = slug === 'void-striker' ? locales.en : undefined;
    const localPreview = typeof location !== 'undefined' && ['localhost', '127.0.0.1'].includes(location.hostname);
    return (<article className={`product-page product-page--${slug}`} style={{ '--product-accent': productAccent[slug] ?? '#9ecbff' } as CSSProperties}>
      {localPreview && <div className="product-preview">{copy.preview}</div>}
      <div className="container product-breadcrumb"><a href={url(routes.apps)}>← {ui.backToApps}</a><span>NAVL / {String(apps.indexOf(app) + 1).padStart(2, '0')}</span></div>
      <header className="product-hero container">
        <div className="product-hero__copy">
          <p className="product-eyebrow">{app.category === 'game' ? 'NAVL GAMES' : 'NAVL APPS'} / {stage}</p>
          <p className="product-name">{app.displayName ?? app.name}</p>
          <h1>{detail.headline}</h1><p className="product-lede">{detail.intro}</p>
          <div className="product-hero__actions">
            {released ? app.stores.filter(store => store.href).map(store => <StoreBadge key={store.store} link={store}/>) : <a className="product-button" href="#product-experience">{copy.overview}<span aria-hidden="true">↓</span></a>}
            {film && <a className="product-watch" href="#product-film">{copy.film} ↗</a>}
          </div><p className="product-platforms">{app.platforms?.join(' / ') ?? stage}</p>
        </div>
        <div className={`product-hero__art${cover ? ' product-hero__art--wide' : ''}`}>
          {cover ? <figure><img src={asset(cover.src)} alt={cover.alt} width={cover.width} height={cover.height} fetchPriority="high"/><figcaption>{copy.concept}</figcaption></figure>
            : shots.length ? <div className="product-devices" aria-label={copy.gallery}>{shots.slice(0, 2).map((shot, i) => <div className={`product-device product-device--${i}`} key={shot.src}><img src={asset(shot.src)} alt={shot.alt} width={shot.width} height={shot.height} fetchPriority={i === 0 ? 'high' : 'auto'}/></div>)}</div>
                : <div className="product-identity" aria-label={copy.concept}>
              <div className="product-identity__grid" aria-hidden="true"/><span className="product-identity__edition">NEW AI VISION LABS / APPS</span>
              <svg className="product-symbol" viewBox="0 0 240 240" fill="none" aria-hidden="true">
                {slug === 'special-dates' ? <><rect x="45" y="55" width="150" height="145" rx="22"/><path d="M45 100h150M85 38v36m70-36v36M90 140l23 23 39-41"/></> : slug === 'personal-finance' ? <path d="M45 178h150M64 154v-40m39 40V82m39 72v-56m39 56V52M55 88l43-39 44 17 44-35"/> : <><path d="M120 190c-82-35-76-106-33-109 18-1 29 9 33 20 4-11 15-21 33-20 43 3 49 74-33 109Z"/><path d="M120 75c0-32 22-42 43-39-2 25-17 40-43 39Z"/></>}
              </svg><span className="product-identity__name">{app.displayName ?? app.name}</span><span className="product-identity__status">{stage}</span><span className="product-identity__caption">{copy.concept}</span>
            </div>}
        </div>
      </header>
      <nav className="product-sections container" aria-label={ui.onThisPage}><a href="#product-experience">{copy.overview}</a>{shots.length > 0 && <a href="#product-gallery">{copy.gallery}</a>}{film && <a href="#product-film">{copy.film}</a>}<a href="#product-details">{copy.details}</a></nav>
      <ProductStory slug={slug} />
      <section className="product-experience container" id="product-experience" aria-labelledby="experience-title"><div className="product-section-head"><p className="product-eyebrow">01 / {app.displayName ?? app.name}</p><h2 id="experience-title">{released ? copy.features : copy.planned}</h2></div><div className="product-features">{detail.features.map((item, i) => <div className="product-feature" key={item.title}><span className="product-feature__number">{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></div>)}{detail.features.length === 0 && <p className="product-lede">{detail.intro}</p>}</div></section>
      {shots.length > 0 && <section className="product-gallery-section" id="product-gallery" aria-labelledby="gallery-title"><div className="container product-section-head"><p className="product-eyebrow">02 / {copy.gallery}</p><h2 id="gallery-title">{copy.gallery}</h2><p>{copy.enlarge} ↗</p></div><ul className="product-gallery container">{shots.map((shot, i) => <li key={shot.src}><button type="button" aria-label={`${copy.enlarge}: ${shot.label ?? shot.alt}`} onClick={() => { setSelected(i); dialog.current?.showModal(); }}><img src={asset(shot.src)} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy"/></button><p><span>{String(i + 1).padStart(2, '0')}</span>{shot.label ?? app.name}</p></li>)}</ul><dialog aria-label={`${app.name} — ${copy.gallery}`} ref={dialog} className="product-lightbox" onClick={event => { if (event.target === dialog.current)
        dialog.current?.close(); }}><button type="button" className="product-lightbox__close" onClick={() => dialog.current?.close()} aria-label={copy.close}>×</button><img src={asset(shots[selected]?.src ?? '')} alt={shots[selected]?.alt ?? ''}/><p>{shots[selected]?.label ?? shots[selected]?.alt}</p></dialog></section>}
      {film && <section className="product-film-section container" id="product-film" aria-labelledby="film-title"><div className="product-section-head"><p className="product-eyebrow">03 / {copy.film}</p><h2 id="film-title">{copy.film}</h2><p>{copy.videoNote}</p></div><ProductFilm slug={slug}/></section>}
      <ProductQuestions slug={slug} />
      <section className="product-details container" id="product-details" aria-labelledby="details-title"><div className="product-section-head"><p className="product-eyebrow">NAVL / {copy.details}</p><h2 id="details-title">{released ? copy.availability : stage}</h2>{detail.note && <p>{detail.note}</p>}{!cover && !shots.length && <p>{copy.noMedia}</p>}</div><div className="product-facts"><dl><div><dt>{copy.stage}</dt><dd>{stage}</dd></div><div><dt>{copy.platform}</dt><dd>{app.platforms?.join(' · ') ?? (locale === 'pt' ? 'A confirmar' : locale === 'es' ? 'Por confirmar' : locale === 'ko' ? '미정' : locale === 'ar' ? 'لم تحدد بعد' : 'To be confirmed')}</dd></div>{detail.price && <div><dt>{copy.price}</dt><dd>{detail.price}<small>{copy.payment}</small></dd></div>}</dl><div className="product-store-list">{app.stores.map(store => <StoreBadge key={store.store} link={store}/>)}</div>{released && <p className="product-source-note">{copy.sources}</p>}<h3>{copy.privacy}</h3><div className="product-legal"><a href={url(app.privacyRoute ?? routes.privacy, legalLocale)}>{ui.privacy}</a><a href={url(app.supportRoute ?? routes.support, legalLocale)}>{ui.supportShort}</a><a href={url(routes.terms)}>{ui.terms}</a><a href={url(routes.dataDeletion)}>{ui.dataDeletion}</a><a href={`mailto:${site.email}`}>{site.email}</a></div></div></section>
      <aside className="product-related container" aria-labelledby="related-title"><p className="product-eyebrow">{copy.related}</p><h2 id="related-title">{ui.backToApps}</h2><div>{related.map(item => <a href={url(`apps/${item.slug}`)} key={item.slug}><span>{item.displayName ?? item.name}</span><span aria-hidden="true">↗</span></a>)}</div><a className="product-all" href={url(routes.apps)}>{ui.backToApps} →</a></aside>
    </article>);
}
