import { mount } from './mount';
import { PageHead } from '../components/Shell';
import { InterestSection } from '../components/StudioStory';
import { story } from '../content/story';
import { apps } from '../content/current';
import { StoreBadge } from '../components/StoreBadge';
import { url } from '../lib/url';

mount(
  <>
    <PageHead label={story.news.label} title={story.news.title} lede={story.news.lede} />
    <section className="section section--ruled">
      <div className="container journal">
        {story.news.entries.map((entry) => (
          <article className="journal__entry" key={entry.title}>
            <div className="journal__meta"><span className="label">{entry.stage}</span><time>{entry.date}</time></div>
            <div>
              <h2>{entry.title}</h2>
              <p>{entry.body}</p>
              {entry.products && (
                <div className="journal__products">
                  {entry.products.map((slug) => {
                    const app = apps.find((item) => item.slug === slug);
                    if (!app) return null;
                    return <div className="journal__product" key={slug}>
                      <a className="text-link" href={url(`apps/${slug}`)}>{app.name}</a>
                      {app.stores.map((link) => <StoreBadge link={link} compact key={link.store} />)}
                    </div>;
                  })}
                </div>
              )}
              <a className="text-link" href={url(entry.route)}>{entry.link} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
    <InterestSection />
  </>,
);
