import { currentLocaleCode, home, site } from '../content/current';
import { launchCopy } from '../content/launch';
import { asset, url } from '../lib/url';
import './hero.css';

/** The studio comes first; released products begin in the next section. */
export function Hero() {
  const copy = launchCopy(currentLocaleCode);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero__art" aria-hidden="true">
        <source media="(max-width: 74.99rem)" srcSet={asset('media/studio/vision-mobile.webp')} type="image/webp" />
        <img src={asset('media/studio/vision-hero.webp')} alt="" width="1556" height="1011" fetchPriority="high" />
      </picture>

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__heading">
            <p className="label hero__eyebrow">{home.hero.eyebrow}</p>
            <h1 className="hero__title" id="hero-title">{site.name}</h1>
          </div>
          <p className="hero__lede">{home.hero.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={url('about')}>
              {copy.aboutCompany}<span className="btn__arrow" aria-hidden="true">↗</span>
            </a>
            <a className="btn" href="#available-now">{copy.viewProducts}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
