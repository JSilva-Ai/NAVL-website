import { story } from '../content/story';
import { site } from '../content/current';
import { asset, url } from '../lib/url';
import { SectionHead } from './Shell';
import { useReducedMotion } from '../lib/hooks';

export function LatestSection() {
  const item = story.news.entries[0];
  return (
    <section className="section section--ruled latest" aria-labelledby="latest-title">
      <div className="container latest__grid">
        <SectionHead label={story.updates.label} headline={story.updates.title} lede={story.updates.body} id="latest-title" />
        <article className="latest__card">
          <p className="label">{item.date} · {item.stage}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <a className="text-link" href={url('news')}>{story.updates.cta} <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
  );
}

export function InterestSection({ product }: { product?: string }) {
  const subject = encodeURIComponent(`${story.interest.subject}${product ? ` — ${product}` : ''}`);
  const body = encodeURIComponent(`${story.interest.body}\n\n${product ?? 'NAVL'}`);
  return (
    <section className="section section--tight interest" aria-labelledby="interest-title">
      <div className="container interest__inner">
        <div>
          <p className="label">{story.interest.label}</p>
          <h2 className="head__title head__title--sm" id="interest-title">{story.interest.title}</h2>
          <p>{story.interest.body}</p>
          <small>{story.interest.note}</small>
        </div>
        <a className="btn btn--primary" href={`mailto:${site.email}?subject=${subject}&body=${body}`}>
          {story.interest.cta}<span className="btn__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function BibleLinkShowcase() {
  const reduced = useReducedMotion();
  return (
    <section className="section section--ruled bible-story" aria-labelledby="bible-story-title">
      <div className="container">
        <SectionHead label={story.bible.label} headline={story.bible.title} lede={story.bible.lede} id="bible-story-title" />
        <div className="bible-story__grid">
          <figure className="bible-story__film">
            {reduced ? (
              <img src={asset('media/apps/biblelink/screens/01-home.webp')} alt={story.bible.videoAlt} width="660" height="1434" />
            ) : (
              <video muted loop playsInline autoPlay preload="metadata" poster={asset('media/apps/biblelink/screens/01-home.webp')} aria-label={story.bible.videoAlt}>
                <source src={asset('media/apps/biblelink/tour.webm')} type="video/webm" />
                <source src={asset('media/apps/biblelink/tour.mp4')} type="video/mp4" />
              </video>
            )}
            <figcaption>{story.bible.videoAlt}</figcaption>
          </figure>
          <ol className="bible-story__steps">
            {story.bible.steps.map((step, index) => (
              <li key={step.title}>
                <span className="mono">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
