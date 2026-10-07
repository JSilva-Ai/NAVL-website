import { useState } from 'react';
import { apps, currentLocaleCode, statusLabel } from '../content/current';
import { launchCopy } from '../content/launch';
import { asset, url } from '../lib/url';
import { StoreBadge } from './StoreBadge';

const films = {
  biblelink: { poster: 'media/apps/biblelink/promo/poster.webp', video: 'media/apps/biblelink/promo/film.mp4' },
  'void-striker': { poster: 'media/apps/void-striker/promo/poster.webp', video: 'media/apps/void-striker/promo/film.mp4' },
} as const;

export function ProductFilm({ slug }: { slug: keyof typeof films }) {
  const [started, setStarted] = useState(false);
  const app = apps.find((item) => item.slug === slug);
  if (!app) return null;
  const media = films[slug];
  return (
    <figure className="launch-film">
      {started ? (
        <video controls autoPlay playsInline preload="none" poster={asset(media.poster)} aria-label={`${app.name} — ${launchCopy(currentLocaleCode).watch}`}>
          <source src={asset(media.video)} type="video/mp4" />
        </video>
      ) : (
        <button className="launch-film__play" type="button" onClick={() => setStarted(true)} aria-label={`${launchCopy(currentLocaleCode).watch}: ${app.name}`}>
          <img src={asset(media.poster)} alt="" width="720" height="1280" loading="lazy" decoding="async" />
          <span className="launch-film__play-icon" aria-hidden="true">▶</span>
        </button>
      )}
      <figcaption>{app.name} · {launchCopy(currentLocaleCode).watch}</figcaption>
    </figure>
  );
}

export function AvailableNow() {
  const copy = launchCopy(currentLocaleCode);
  const launched = apps.filter((app) => app.slug === 'biblelink' || app.slug === 'void-striker');
  return (
    <section className="section section--ruled launch" id="available-now" aria-labelledby="launch-title">
      <div className="container">
        <p className="label">{copy.available}</p>
        <h2 className="head__title" id="launch-title">BibleLink &amp; VOID STRIKER</h2>
        <div className="launch__grid">
          {launched.map((app) => (
            <article className="launch__card" key={app.slug}>
              <ProductFilm slug={app.slug as keyof typeof films} />
              <div className="launch__copy">
                <span className="pill pill--released">{statusLabel(app.status)}</span>
                <h3>{app.name}</h3>
                <p>{app.tagline}</p>
                <a className="btn btn--primary" href={url(`apps/${app.slug}`)}>{app.slug === 'biblelink' ? copy.bible : copy.void}<span className="btn__arrow" aria-hidden="true">↗</span></a>
                <div className="launch__store"><StoreBadge link={app.stores[0]} compact /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FutureGame() {
  const copy = launchCopy(currentLocaleCode);
  return (
    <section className="section section--ruled future-game" aria-labelledby="future-game-title">
      <div className="container future-game__grid">
        <div className="future-game__copy">
          <p className="label">{copy.future}</p>
          <h2 className="head__title" id="future-game-title">NOVA FRONTIER</h2>
          <p className="head__lede">{copy.futureDescription}</p>
          <a className="btn" href={url('apps/nova-frontier')}>{copy.exploreFuture}<span className="btn__arrow" aria-hidden="true">↗</span></a>
        </div>
        <a className="future-game__art" href={url('apps/nova-frontier')} aria-label={copy.exploreFuture}>
          <img src={asset('media/apps/nova-frontier/concept.webp')} alt="" width="1672" height="941" loading="lazy" decoding="async" />
        </a>
      </div>
    </section>
  );
}
