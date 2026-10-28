import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { asset, currentLocale, url } from '../lib/url';
import { locales } from '../content/locales';
import { bibleLinkSiteCopy } from '../content/biblelink-site';
import { useReducedMotion } from '../lib/hooks';
import './biblelink-site.css';

const stores = [
  { label: 'App Store', href: 'https://apps.apple.com/us/app/biblelink/id6812830407', icon: 'apple.svg' },
  { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.newaivisionlabs.biblelink', icon: 'googleplay.svg' },
];

export function BibleLinkSite() {
  const locale = currentLocale().code === 'pt' ? 'pt' : 'en';
  const c = bibleLinkSiteCopy[locale];
  const [depth, setDepth] = useState(true);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [menu, setMenu] = useState(false);
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const preview = ['localhost', '127.0.0.1'].includes(location.hostname);

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (!depth || reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--bl-tilt-x', `${((event.clientY - bounds.top) / bounds.height - .5) * -5}deg`);
    event.currentTarget.style.setProperty('--bl-tilt-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 8}deg`);
  }
  function resetTilt() {
    stage.current?.style.setProperty('--bl-tilt-x', '0deg');
    stage.current?.style.setProperty('--bl-tilt-y', '0deg');
  }
  function navigateTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % 3 : event.key === 'ArrowLeft' ? (index + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : null;
    if (next === null) return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  const badges = (placement: string) => <div className="bl-badges">{stores.map(store => <a key={store.label} href={store.href} rel="noopener" aria-label={`BibleLink — ${store.label}`} data-placement={placement}><img src={asset(`brand/${store.icon}`)} width="23" height="26" alt=""/><span><small>{locale === 'pt' ? 'Disponível na' : 'Available on'}</small><strong>{store.label}</strong></span><span className="bl-store-arrow" aria-hidden="true">↗</span></a>)}</div>;

  return <div className="bl-site">
    <a className="bl-skip" href="#bl-main">{locale === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}</a>
    <header className="bl-header">{preview && <div className="bl-preview">{c.preview}</div>}<div className="bl-wrap bl-nav">
      <a className="bl-brand" href="#bl-main" aria-label="BibleLink"><img src={asset('media/apps/biblelink/brand-icon.webp')} alt="" width="40" height="40"/><span>BibleLink<i>by NAVL</i></span></a>
      <button className="bl-menu-toggle" type="button" aria-expanded={menu} aria-controls="bl-navigation" onClick={() => setMenu(!menu)}>{menu ? c.close : 'Menu'} <span aria-hidden="true">{menu ? '−' : '+'}</span></button>
      <nav className={`bl-nav-links${menu ? ' is-open' : ''}`} id="bl-navigation" aria-label="BibleLink">
        {['#bl-experience', '#bl-film', '#bl-faq'].map((href, i) => <a href={href} key={href} onClick={() => setMenu(false)}>{c.nav[i]}</a>)}
        <a className="bl-nav-download" href="#bl-download" onClick={() => setMenu(false)}>{c.download}<span aria-hidden="true">↗</span></a>
      </nav>
    </div></header>

    <main id="bl-main">
      <section className="bl-hero" aria-labelledby="bl-hero-title">
        <div className="bl-wrap bl-hero-copy"><p className="bl-eyebrow"><span/> {c.eyebrow}</p><h1 id="bl-hero-title">{c.headline[0]}<br/><em>{c.headline[1]}</em></h1><p className="bl-intro">{c.intro}</p>{badges('hero')}<p className="bl-availability">{c.store}<span aria-hidden="true">·</span><a href="#bl-film">{c.watch} <span aria-hidden="true">↗</span></a></p></div>
        <div className="bl-stage-wrap bl-wrap">
          <div ref={stage} className="bl-stage" data-depth={depth && !reduced} onPointerMove={tilt} onPointerLeave={resetTilt}>
            <div className="bl-stage-halo" aria-hidden="true"/><div className="bl-stage-floor" aria-hidden="true"/>
            <div className="bl-device-group">
              {['04-prayers.webp', '01-home.webp', '02-bible.webp'].map((screen,i) => <figure className={`bl-device bl-device-${i}`} key={screen}><div className="bl-device-body"><img src={asset(`media/apps/biblelink/screens/${screen}`)} alt={c.screenNames[i]} width="720" height="1564" fetchPriority={i === 1 ? 'high' : 'auto'}/></div></figure>)}
            </div>
          </div>
          <div className="bl-stage-controls"><p>{c.realScreens}</p><button type="button" onClick={() => { resetTilt(); setDepth(!depth); }} aria-pressed={depth && !reduced} aria-label={c.depthLabel} disabled={reduced}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5M12 12 3 7m9 5v10"/></svg>{depth && !reduced ? c.depthOn : c.depthOff}</button></div>
        </div>
      </section>
      <div className="bl-essentials bl-wrap" aria-label={locale === 'pt' ? 'BibleLink em resumo' : 'BibleLink at a glance'}>{c.essentials.map(item => <p key={item}><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>{item}</p>)}</div>

      <section className="bl-experience bl-wrap" id="bl-experience" aria-labelledby="bl-experience-title">
        <div className="bl-section-heading"><p className="bl-eyebrow">{c.experienceLabel}</p><h2 id="bl-experience-title">{c.experienceTitle[0]}<br/><em>{c.experienceTitle[1]}</em></h2><p>{c.experienceIntro}</p></div>
        <div className="bl-feature-tabs" role="tablist" aria-label={c.nav[0]}>{c.tabs.map((tab,i) => <button type="button" role="tab" key={tab.name} id={`bl-tab-${i}`} aria-selected={active === i} aria-controls={`bl-panel-${i}`} tabIndex={active === i ? 0 : -1} ref={el => { tabs.current[i] = el; }} onKeyDown={event => navigateTab(event,i)} onClick={() => setActive(i)}><span>0{i+1}</span>{tab.name}</button>)}</div>
        {c.tabs.map((tab,i) => <div className="bl-feature-panel" key={tab.name} role="tabpanel" id={`bl-panel-${i}`} aria-labelledby={`bl-tab-${i}`} hidden={active !== i} tabIndex={0}>
          <div className={`bl-feature-art bl-feature-art-${i}`}><span className="bl-art-orbit" aria-hidden="true"/><img src={asset(`media/apps/biblelink/screens/${tab.image}`)} alt={tab.alt} width="720" height="1564" loading="lazy"/></div>
          <div className="bl-feature-copy"><p className="bl-eyebrow">{tab.eyebrow}</p><h3>{tab.title}</h3><p>{tab.text}</p><ul>{tab.points.map(point => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul></div>
        </div>)}
      </section>

      <section className="bl-listen" aria-labelledby="bl-listen-title"><div className="bl-wrap bl-listen-grid"><div className="bl-listen-copy"><p className="bl-eyebrow">{c.audioLabel}</p><h2 id="bl-listen-title">{c.audioTitle}</h2><p>{c.audioText}</p><ul>{c.audioChips.map(chip => <li key={chip}>{chip}</li>)}</ul></div><div className="bl-listen-art" aria-hidden="true"><div className="bl-listen-circle"><svg viewBox="0 0 100 100" width="110" height="110" fill="none" stroke="currentColor" strokeWidth="2"><path d="M25 55V43a25 25 0 0 1 50 0v12M25 51h8v22h-8a6 6 0 0 1-6-6V57a6 6 0 0 1 6-6Zm50 0h-8v22h8a6 6 0 0 0 6-6V57a6 6 0 0 0-6-6Z"/></svg></div><div className="bl-waveform">{Array.from({length:35},(_,i) => <span key={i} style={{height:`${12 + Math.sin(i * .7) ** 2 * 44 + Math.sin(i * 1.8) ** 2 * 16}px`}}/>)}</div></div></div></section>

      <section className="bl-film-section bl-wrap" id="bl-film" aria-labelledby="bl-film-title"><div className="bl-section-heading"><p className="bl-eyebrow">{c.filmLabel}</p><h2 id="bl-film-title">{c.filmTitle}</h2><p>{c.filmText}</p></div><div className="bl-cinema">{playing ? <video controls autoPlay playsInline preload="none" poster={asset('media/apps/biblelink/promo/poster.webp')} aria-label={c.filmPlay}><source src={asset('media/apps/biblelink/promo/film.mp4')} type="video/mp4"/></video> : <button className="bl-play-film" type="button" onClick={() => setPlaying(true)} aria-label={c.filmPlay}><div className="bl-cinema-wash" aria-hidden="true"/><img src={asset('media/apps/biblelink/promo/poster.webp')} alt="" width="720" height="1280" loading="lazy"/><span className="bl-play-symbol" aria-hidden="true">▶</span><span className="bl-play-caption">{c.filmPlay}</span></button>}</div><p className="bl-film-note">{c.filmNote}</p></section>

      <section className="bl-offer" aria-labelledby="bl-offer-title"><div className="bl-wrap"><div className="bl-offer-heading"><p className="bl-eyebrow">{c.offerLabel}</p><h2 id="bl-offer-title">{c.offerTitle[0]}<br/><em>{c.offerTitle[1]}</em></h2><p>{c.offerText}</p></div><ol className="bl-offer-steps">{c.offerSteps.map(([number,title,text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

      <section className="bl-faq bl-wrap" id="bl-faq" aria-labelledby="bl-faq-title"><div><p className="bl-eyebrow">{c.faqLabel}</p><h2 id="bl-faq-title">{c.faqTitle}</h2><a href="mailto:support@newaivisionlabs.com">support@newaivisionlabs.com ↗</a></div><div className="bl-faq-items">{c.faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="bl-download" id="bl-download" aria-labelledby="bl-download-title"><div className="bl-wrap"><img className="bl-download-icon" src={asset('media/apps/biblelink/brand-icon.webp')} alt="" width="80" height="80" loading="lazy"/><p className="bl-eyebrow">{c.finalLabel}</p><h2 id="bl-download-title">{c.finalTitle[0]}<br/><em>{c.finalTitle[1]}</em></h2><p>{c.finalText}</p>{badges('footer')}<span className="bl-download-note">{c.essentials[3]} · iPhone & Android</span></div></section>
    </main>
    <footer className="bl-footer"><div className="bl-wrap"><div className="bl-footer-top"><a className="bl-brand" href="#bl-main"><img src={asset('media/apps/biblelink/brand-icon.webp')} alt="" width="32" height="32"/><span>BibleLink</span></a><p>{c.footerNote}</p></div><div className="bl-footer-bottom"><p>© {new Date().getFullYear()} New AI Vision Labs LLC</p><nav aria-label={c.support}><a href={url('apps/biblelink/privacy')}>{c.privacy}</a><a href={url('apps/biblelink/support')}>{c.support}</a><a href={url('terms')}>{c.terms}</a><a href={url('')}>{c.company}</a></nav><label>{c.language}<select value={locale} onChange={event => { location.href = url('apps/biblelink', locales[event.target.value as 'pt' | 'en']); }}><option value="pt">Português</option><option value="en">English</option></select></label></div></div></footer>
  </div>;
}
