import { useEffect, useRef, useState } from 'react';
import { apps, currentLocaleCode, home, routes, statusLabel } from '../content/current';
import { launchCopy } from '../content/launch';
import { asset } from '../lib/url';
import { url } from '../lib/url';
import { usePointer, useReducedMotion } from '../lib/hooks';
import { createPerceptionField, type FieldHandle } from '../lib/perceptionField';
import './hero.css';

/**
 * Home hero.
 *
 * The field behind the headline is the same WebGL renderer the site has always
 * used, recoloured to the identity: points at rest are achromatic, points that
 * have returned run the mark's blue. It is the studio's one piece of ornament
 * and it is confined to this page.
 *
 * It is decoration here, so it carries no readout and makes no claim. If the
 * GPU cannot run it, or the visitor prefers reduced motion, the page loses a
 * texture and nothing else — the headline, the lede, and both calls to action
 * are ordinary DOM and never depend on it.
 */
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = usePointer();
  const reduced = useReducedMotion();
  const [live, setLive] = useState(false);
  const copy = launchCopy(currentLocaleCode);
  const bibleLink = apps.find((a) => a.slug === 'biblelink');
  const voidStriker = apps.find((a) => a.slug === 'void-striker');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let handle: FieldHandle | null = null;
    handle = createPerceptionField(canvas, {
      pointer: pointer.current,
      animate: !reduced,
      mode: 'scan',
      onReady: () => setLive(true),
    });
    return () => handle?.destroy();
  }, [pointer, reduced]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" data-live={live} />
      <div className="hero__grain" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="label hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            {home.hero.eyebrow}
          </p>

          <h1 className="hero__title" id="hero-title">
            {home.hero.headline.map((line) => {
              const accent = line.includes(home.hero.accentWord);
              if (!accent) return <span className="hero__line" key={line}>{line}</span>;
              const [before] = line.split(home.hero.accentWord);
              return (
                <span className="hero__line" key={line}>
                  {before}
                  <em className="hero__accent">{home.hero.accentWord}</em>
                </span>
              );
            })}
          </h1>

          <p className="hero__lede">{home.hero.lede}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={url(`${routes.apps}/biblelink`)}>
              {copy.bible}
              <span className="btn__arrow" aria-hidden="true">↗</span>
            </a>
            <a className="btn" href={url(`${routes.apps}/void-striker`)}>
              {copy.void}
            </a>
          </div>
        </div>

        {/* The right-hand crop uses only the abstract part of the supplied
            artwork. Its baked-in English words must not duplicate the real,
            translated headline on the left. */}
        <div className="hero__stage">
          <div className="hero__vision hero__vision--studio">
            <img className="hero__studio-art" src={asset('media/studio/vision-hero.webp')} alt="" width="1200" height="780" fetchPriority="high" />
            <span className="hero__vision-shade" aria-hidden="true" />
            {bibleLink?.icon && (
              <a className="hero__float hero__float--bible" href={url(`${routes.apps}/biblelink`)}>
                <img src={asset(bibleLink.icon.src)} alt="" width="1024" height="1024" />
                <span><strong>{bibleLink.name}</strong><small>{statusLabel(bibleLink.status)}</small></span>
              </a>
            )}
            {voidStriker && (
              <a className="hero__float hero__float--void" href={url(`${routes.apps}/void-striker`)}>
                <span className="hero__float-orb" aria-hidden="true" />
                <span><strong>{voidStriker.name}</strong><small>{statusLabel(voidStriker.status)}</small></span>
              </a>
            )}
          </div>
          <p className="hero__caption">{copy.available}</p>
        </div>
      </div>
    </section>
  );
}
