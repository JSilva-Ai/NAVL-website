import type { BibleLinkDoc } from '../content/current';
import { PageHead } from './Shell';
import { Blocks } from './Prose';
import { site, ui } from '../content/current';

export function BibleLinkDocPage({ doc, kind }: { doc: BibleLinkDoc; kind: 'privacy' | 'support' }) {
  return (
    <>
      <PageHead
        label="BibleLink"
        title={doc.title}
        lede={doc.lede}
        meta={doc.updated ? <p className="mono pagehead__updated">{ui.lastUpdated}: {doc.updated}</p> : undefined}
      />

      {kind === 'support' && (
        <section className="section section--tight">
          <div className="container">
            <div className="mailcard">
              <p className="label mailcard__label">{ui.supportEmail}</p>
              <a className="mailcard__address" href={`mailto:${site.email}?subject=BibleLink%20Support`}>
                {site.email}
              </a>
              <p className="label mailcard__label mailcard__label--2">{ui.phone}</p>
              <a className="mailcard__phone" href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <p className="mailcard__place">{site.location}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container legal-locales">
          <nav className="language-links" aria-label={ui.languages}>
            <p className="label">{ui.languages}</p>
            <div className="language-links__items">
              {doc.languages.map((language) => (
                <a href={`#${language.id}`} key={language.id}>{language.label}</a>
              ))}
            </div>
          </nav>

          {doc.languages.map((language) => (
            <article className="prose legal-language" id={language.id} lang={language.lang} dir={language.lang === 'ar' ? 'rtl' : 'ltr'} key={language.id}>
              <h2 className="legal-language__title">{language.label}</h2>
              {language.sections.map((section) => (
                <section className="prose__section" key={section.heading}>
                  <h3 className="prose__h2">{section.heading}</h3>
                  <Blocks blocks={section.body} />
                </section>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
