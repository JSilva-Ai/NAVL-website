/**
 * One entry per product. To add one: copy this file and apps/<slug>/index.html,
 * and change the slug in both. The slug must match an entry in `apps` in
 * src/content/site.ts.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BibleLinkSite } from '../components/BibleLinkSite';

// Every locale uses an independent product shell.
if (['pt-BR', 'en'].includes(document.documentElement.lang)) {
  const root = document.getElementById('root');
  if (!root) throw new Error('Missing BibleLink root');
  createRoot(root).render(<StrictMode><BibleLinkSite /></StrictMode>);
} else {
  import('../components/ProductSite').then(({ ProductSite }) => {
    createRoot(document.getElementById('root')!).render(<StrictMode><ProductSite slug="biblelink" /></StrictMode>);
  });
}
