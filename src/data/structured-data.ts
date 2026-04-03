export const SITE_URL = 'https://agencia-shopify.com';

export const organization = {
  '@type': 'Organization',
  name: 'eComm360',
  alternateName: 'Agencia Shopify',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-ecomm360.png`,
  description: 'Agencia especializada en Shopify: diseño, migraciones, B2B, integraciones ERP y crecimiento eCommerce en España.',
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  knowsAbout: [
    'Shopify',
    'Shopify Plus',
    'eCommerce B2B',
    'Migraciones eCommerce',
    'Integraciones ERP',
    'Diseño UX eCommerce',
  ],
};

export const localBusiness = {
  '@type': 'LocalBusiness',
  name: 'eComm360 - Agencia Shopify',
  url: SITE_URL,
  description: 'Partner tecnológico especializado en Shopify para diseño, migración, B2B, integración ERP y crecimiento en España.',
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  priceRange: '€€€',
};

export const website = {
  '@type': 'WebSite',
  name: 'eComm360 - Agencia Shopify',
  url: SITE_URL,
  inLanguage: 'es',
  publisher: {
    '@type': 'Organization',
    name: 'eComm360',
  },
};
