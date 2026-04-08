import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://agencia-shopify.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/api/'),
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Custom priorities by URL
        const priorities = {
          '/': 1.0,
          '/shopify/': 0.9,
          '/shopify/plus/': 0.9,
          '/migracion-shopify/': 0.9,
          '/integracion-shopify/': 0.9,
          '/partner-shopify/': 0.8,
          '/soluciones/shopify-b2b/': 0.8,
          '/marketing-shopify/': 0.8,
          '/integracion-shopify/erp-shopify/': 0.8,
          '/migracion-shopify/magento-a-shopify/': 0.8,
          '/migracion-shopify/prestashop-a-shopify/': 0.7,
          '/shopify/advanced/': 0.7,
          '/soluciones/shopify-dtc/': 0.7,
          '/soluciones/shopify-b2c/': 0.7,
          '/migracion-shopify/logicommerce-a-shopify/': 0.6,
          '/aviso-legal/': 0.1,
          '/politica-privacidad/': 0.1,
          '/cookies/': 0.1,
        };

        const yearlyPaths = ['/aviso-legal/', '/politica-privacidad/', '/cookies/'];
        const path = new URL(item.url).pathname;
        item.priority = priorities[path] || 0.5;

        if (path === '/') {
          item.changefreq = 'daily';
        } else if (yearlyPaths.includes(path)) {
          item.changefreq = 'yearly';
        } else {
          item.changefreq = 'weekly';
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
});
