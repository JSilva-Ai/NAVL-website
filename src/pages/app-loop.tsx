import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProductSite } from '../components/ProductSite';

createRoot(document.getElementById('root')!).render(<StrictMode><ProductSite slug="loop"/></StrictMode>);
