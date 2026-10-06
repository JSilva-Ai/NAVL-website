import { PageHead } from './Shell';
import { StoreBadge } from './StoreBadge';
import { apps, appsPage, routes, site, statusLabel, ui } from '../content/current';
import { asset, url } from '../lib/url';
import { GameClip } from './GameClip';
import { statusModifier } from '../lib/status';
import { bibleScreen, mediaAlt, story } from '../content/story';
import { BibleLinkShowcase, InterestSection } from './StudioStory';
import { useReducedMotion } from '../lib/hooks';
import { locales } from '../content/locales';

/**
 * The per-app page template.
 *
 * Every app gets the same page: what it is, what it looks like, where to get
 * it, and — required by both stores — a route to its privacy terms and to
 * support. Those two links are not optional furniture; a listing is rejected
 * without them, and a reviewer follows them.
 */
export function AppPage({ slug }: { slug: string }) {
  const reduced = useReducedMotion();
  const app = apps.find((a) => a.slug === slug);

  if (!app) {
    return (
      <PageHead
        title="App not found"
        lede="This page is generated from src/content/site.ts and no app matches this slug."
      />
    );
  }

  return (
    <>
      <PageHead
        label={<a href={url(routes.apps)}>{ui.backToApps}</a>}
        title={app.name}
        /* The product's own line where it has one — that sentence is the whole
           idea in eight words, and it earns the lede slot over a description of
           what stage the thing is at. */
        lede={app.positioning ?? app.tagline}
      />

      <section className="section section--ruled">
        <div className="container app">
          <div className="app__body">
            {app.icon && (
              <img
                className="app__icon"
                src={asset(app.icon.src)}
                alt={mediaAlt(app.slug, app.icon.alt)}
                width={app.icon.width}
                height={app.icon.height}
              />
            )}
            <p className={`pill pill--${statusModifier(app.status)}`}>{statusLabel(app.status)}</p>
            {app.positioning && <p className="app__tagline">{app.tagline}</p>}
            {app.description.map((p) => (
              <p className={p.includes('[TODO') ? 'todo' : 'app__para'} key={p.slice(0, 24)}>
                {p}
              </p>
            ))}

            {app.demoRoute && (
              <p className="app__para">
                <a className="btn btn--primary" href={url(app.demoRoute)}>
                  {ui.playDemo}
                  <span className="btn__arrow" aria-hidden="true">↗</span>
                </a>
              </p>
            )}
          </div>

          <aside className="app__side">
            {/* Show both store logos for every product. A badge becomes a link
                only when its official listing is available. */}
            {app.stores.length > 0 && (
              <>
                <h2 className="label">{ui.getIt}</h2>
                {!app.stores.some((store) => store.href) && (
                  <p className="app__note">{appsPage.inDevelopmentNote}</p>
                )}
                <div className="app__badges">
                  {app.stores.map((s) => (
                    <StoreBadge key={s.store} link={s} />
                  ))}
                </div>
              </>
            )}

            <h2 className={`label${app.stores.length > 0 ? ' app__side-h' : ''}`}>
              {ui.kindLabel}
            </h2>
            <p className="mono app__platforms">{app.kind}</p>

            {app.platforms && (
              <>
                <h2 className="label app__side-h">{ui.platforms}</h2>
                <p className="mono app__platforms">{app.platforms.join(' · ')}</p>
              </>
            )}

            {/* Required by both stores, per app. */}
            <h2 className="label app__side-h">{ui.legalSupport}</h2>
            <ul className="app__links">
              <li>
                <a href={url(app.privacyRoute ?? routes.privacy, app.slug === 'void-striker' ? locales.en : undefined)}>{ui.privacy}</a>
              </li>
              <li>
                <a href={url(routes.terms)}>{ui.terms}</a>
              </li>
              <li>
                <a href={url(app.supportRoute ?? routes.support, app.slug === 'void-striker' ? locales.en : undefined)}>{ui.supportShort}</a>
              </li>
              <li>
                <a href={url(routes.dataDeletion)}>{ui.dataDeletion}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="shots-title">
        <div className="container">
          <h2 className="head__title head__title--sm" id="shots-title">
            {app.clip ? ui.gameplayLabel : app.conceptArt ? ui.conceptArtLabel : ui.screenshotsLabel}
          </h2>

          {app.conceptArt && (
            <figure className="concept-hero">
              {reduced ? (
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${asset(app.conceptArt.src)} 1920w, ${asset(app.conceptArt.src.replace('concept-1920.webp', 'concept-4k.webp'))} 3840w`}
                    sizes="(max-width: 48rem) 100vw, 80vw"
                  />
                  <img
                    src={asset(app.conceptArt.src)}
                    alt={mediaAlt(app.slug, app.conceptArt.alt)}
                    width={app.conceptArt.width}
                    height={app.conceptArt.height}
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              ) : (
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={asset(app.conceptArt.src)}
                  aria-label={mediaAlt(app.slug, app.conceptArt.alt)}
                >
                  <source src={asset(`media/apps/${app.slug}/motion.webm`)} type="video/webm" />
                  <source src={asset(`media/apps/${app.slug}/motion.mp4`)} type="video/mp4" />
                </video>
              )}
              <figcaption>{app.conceptArt.label}</figcaption>
            </figure>
          )}

          <div className="gameplay">
            {app.clip && <GameClip clip={app.clip} alt={story.media.gameplay} />}
          </div>

          {app.screenshots.length === 0 ? (
            !app.clip && !app.conceptArt && <p className="app__empty">{ui.noScreenshots}</p>
          ) : (
            <ul
              className={`shots${app.screenshotDisplay === 'gallery' ? ' shots--gallery' : ''}`}
              tabIndex={app.screenshotDisplay === 'gallery' ? 0 : undefined}
              aria-label={app.screenshotDisplay === 'gallery' ? `${app.name} — ${ui.screenshotsLabel}` : undefined}
            >
              {app.screenshots.map((s, index) => {
                const localized = app.slug === 'biblelink' ? bibleScreen(index, s) : s;
                return (
                  <li className="shots__item" key={s.src}>
                    <figure className="shots__figure">
                      <img
                        src={asset(s.src)}
                        alt={localized.alt}
                        width={s.width}
                        height={s.height}
                        loading="lazy"
                        decoding="async"
                      />
                      {localized.label && (
                        <figcaption className="shots__caption">{localized.label}</figcaption>
                      )}
                    </figure>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
      {app.slug === 'biblelink' && <BibleLinkShowcase />}
      {!app.stores.some((store) => store.href) && <InterestSection product={app.name} />}
    </>
  );
}
