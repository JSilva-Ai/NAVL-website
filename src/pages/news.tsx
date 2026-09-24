import { mount } from './mount';
import { PageHead } from '../components/Shell';
import { InterestSection } from '../components/StudioStory';
import { story } from '../content/story';
import { url } from '../lib/url';

mount(
  <>
    <PageHead label={story.news.label} title={story.news.title} lede={story.news.lede} />
    <section className="section section--ruled">
      <div className="container journal">
        {story.news.entries.map((entry) => (
          <article className="journal__entry" key={entry.title}>
            <div className="journal__meta"><span className="label">{entry.stage}</span><time>{entry.date}</time></div>
            <div><h2>{entry.title}</h2><p>{entry.body}</p><a className="text-link" href={url(entry.route)}>{entry.link} <span aria-hidden="true">↗</span></a></div>
          </article>
        ))}
      </div>
    </section>
    <InterestSection />
  </>,
);
