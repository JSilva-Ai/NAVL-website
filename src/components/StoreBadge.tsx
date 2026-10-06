import type { StoreLink } from '../content/current';
import { appsPage, ui } from '../content/current';
import { asset } from '../lib/url';

const LABEL: Record<StoreLink['store'], string> = {
  appStore: 'App Store',
  googlePlay: 'Google Play',
};

/** Store names with their logos; unpublished stores remain non-focusable. */
export function StoreBadge({ link, compact = false }: { link: StoreLink; compact?: boolean }) {
  const label = LABEL[link.store];
  const className = `badge${compact ? ' badge--compact' : ''}`;
  const icon = <img className="badge__icon" src={asset(`brand/${link.store === 'appStore' ? 'apple' : 'googleplay'}.svg`)} alt="" width="24" height="24" />;
  const content = <><span className="badge__store">{label}</span><span className="badge__note">{link.href ? ui.download : appsPage.notYetOnStores}</span></>;

  if (!link.href) {
    return (
      <span className={`${className} badge--pending`} aria-disabled="true">
        {icon}<span className="badge__copy">{content}</span>
      </span>
    );
  }

  return (
    <a className={className} href={link.href} rel="noopener">
      {icon}<span className="badge__copy">{content}</span>
    </a>
  );
}
