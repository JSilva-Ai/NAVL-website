import { mount } from './mount';
import { PageHead } from '../components/Shell';
import { InterestSection } from '../components/StudioStory';
import { story } from '../content/story';

mount(
  <>
    <PageHead label={story.about.label} title={story.about.title} lede={story.about.lede} />
    <section className="section section--ruled story-page">
      <div className="container story-page__intro">
        {story.about.origin.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
    <section className="section section--ruled" aria-labelledby="principles-title">
      <div className="container">
        <h2 className="head__title" id="principles-title">{story.about.principlesTitle}</h2>
        <div className="principles">
          {story.about.principles.map((item, index) => (
            <article key={item.title}><span className="mono">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>
          ))}
        </div>
      </div>
    </section>
    <section className="section statement"><div className="container"><h2>{story.about.closingTitle}</h2><p>{story.about.closing}</p></div></section>
    <InterestSection />
  </>,
);
