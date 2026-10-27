import { useState, type CSSProperties } from 'react';
import { mount } from './mount';
import { apps, currentLocaleCode as locale, appsPage, statusLabel } from '../content/current';
import { pageCopy, productAccent, productSlugs, productStage } from '../content/product-pages';
import { asset, url } from '../lib/url';
import '../components/product-page.css';
import '../styles/product-collection.css';
export function ProductCollection() {
    const [filter, setFilter] = useState('all');
    const labels = { pt: ['Todos', 'Aplicativos', 'Jogos', 'Disponíveis'], en: ['All', 'Applications', 'Games', 'Available now'], es: ['Todos', 'Aplicaciones', 'Juegos', 'Disponibles'], ko: ['전체', '앱', '게임', '출시됨'], ar: ['الكل', 'التطبيقات', 'الألعاب', 'متوفرة الآن'] }[locale];
    const ordered = [...apps].sort((a, b) => productSlugs.indexOf(a.slug) - productSlugs.indexOf(b.slug));
    const shown = ordered.filter(app => filter === 'all' || app.category === filter || filter === 'released' && app.stores.some(store => store.href));
    return <div className="product-page collection">
    <header className="container collection-head"><p className="product-eyebrow">NEW AI VISION LABS / {apps.length} {locale === 'pt' ? 'PRODUTOS' : 'PRODUCTS'}</p><h1>{appsPage.headline}</h1><p>{appsPage.lede}</p></header>
    <div className="container collection-controls" role="group" aria-label={appsPage.label}>{['all', 'app', 'game', 'released'].map((value, i) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{labels[i]}</button>)}<span aria-live="polite">{String(shown.length).padStart(2, '0')} / {apps.length}</span></div>
    <div className="container collection-grid">{shown.map((app, index) => {
            const art = app.conceptArt;
            const shot = app.screenshots[0];
            const stage = app.stores.some(s => s.href) ? statusLabel(app.status) : productStage(app, locale);
            return <article className="collection-card" style={{ '--product-accent': productAccent[app.slug] } as CSSProperties} key={app.slug}>
        <a className="collection-art" href={url(`apps/${app.slug}`)} aria-label={`${pageCopy[locale].explore}: ${app.displayName ?? app.name}`}>
          {art ? <img src={asset(art.src)} alt={art.alt} width={art.width} height={art.height} loading={index < 2 ? 'eager' : 'lazy'}/> : shot ? <div className="collection-phone"><img src={asset(shot.src)} alt={shot.alt} width={shot.width} height={shot.height} loading={index < 2 ? 'eager' : 'lazy'}/></div> : <div className="collection-concept"><span aria-hidden="true">{app.slug === 'special-dates' ? '◷' : '↗'}</span><strong>{app.displayName ?? app.name}</strong><small>{pageCopy[locale].concept}</small></div>}
          <span className="collection-arrow" aria-hidden="true">↗</span>
        </a><div className="collection-meta"><p>{stage}</p><h2><a href={url(`apps/${app.slug}`)}>{app.displayName ?? app.name}</a></h2><p className="collection-tagline">{app.tagline}</p></div>
      </article>;
        })}</div>
  </div>;
}
mount(<ProductCollection />);
