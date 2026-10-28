import { mount } from './mount';
import { Hero } from '../components/Hero';
import { Approach } from '../components/Approach';
import { SectionHead } from '../components/Shell';
import { apps, currentLocaleCode, home, statusLabel } from '../content/current';
import { launchCopy } from '../content/launch';
import { pageCopy, productStage, productSlugs } from '../content/product-pages';
import { InterestSection } from '../components/StudioStory';
import '../styles/home.css';
import '../styles/company-products.css';
import { url } from '../lib/url';

function ProductDestinations() {
  const c = launchCopy(currentLocaleCode);
  return <section className="section section--ruled company-products" id="available-now" aria-labelledby="portfolio-title"><div className="container">
    <SectionHead label={home.portfolio.label} headline={home.portfolio.cta.label} lede={c.upcomingDescription} id="portfolio-title"/>
    <div className="company-products__links">{productSlugs.map(slug => apps.find(app => app.slug === slug)!).map((app, i) => <a href={url(`apps/${app.slug}`)} key={app.slug}><span className="company-products__number">{String(i+1).padStart(2,'0')}</span><span><strong>{app.displayName ?? app.name}</strong><small>{app.stores.some(s => s.href) ? statusLabel(app.status) : productStage(app,currentLocaleCode)}</small></span><span aria-hidden="true">↗</span></a>)}</div>
    <a className="btn btn--sm" href={url('apps')}>{pageCopy[currentLocaleCode].explore}<span aria-hidden="true">↗</span></a>
  </div></section>;
}

mount(<><Hero/><Approach/><ProductDestinations/><InterestSection/></>);
