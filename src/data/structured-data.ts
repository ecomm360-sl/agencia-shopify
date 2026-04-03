export const SITE_URL = 'https://agencia-shopify.com';

export const organization = {
  '@type': 'Organization',
  name: 'eComm360',
  alternateName: 'Agencia Shopify',
  url: SITE_URL,
  logo: `${SITE_URL}/og/home.png`,
  image: `${SITE_URL}/og/home.png`,
  description: 'Agencia especializada en Shopify: diseño, migraciones, B2B, integraciones ERP y crecimiento eCommerce en España.',
  foundingDate: '2013',
  areaServed: {
    '@type': 'Country',
    name: 'España',
    sameAs: 'https://es.wikipedia.org/wiki/Espa%C3%B1a',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.4168,
      longitude: -3.7038,
    },
    geoRadius: '1000',
  },
  knowsAbout: [
    'Shopify',
    'Shopify Plus',
    'eCommerce B2B',
    'Migraciones eCommerce',
    'Integraciones ERP',
    'Diseño UX eCommerce',
    'CRO',
    'SEO para Shopify',
    'Klaviyo',
    'Integración SAP',
    'Integración Microsoft Dynamics',
  ],
  knowsLanguage: ['es', 'en', 'ca'],
  slogan: 'Partner tecnológico Shopify en España',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Shopify',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Diseño y desarrollo Shopify',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de tiendas Shopify' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Implementación Shopify Plus' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Migraciones a Shopify',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Migración Magento a Shopify' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Migración PrestaShop a Shopify' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Migración LogiCommerce a Shopify' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Integraciones Shopify',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integración ERP con Shopify' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integración CRM con Shopify' } },
        ],
      },
    ],
  },
};

export const localBusiness = {
  '@type': 'ProfessionalService',
  name: 'eComm360 - Agencia Shopify',
  url: SITE_URL,
  image: `${SITE_URL}/og/home.png`,
  description: 'Partner tecnológico especializado en Shopify para diseño, migración, B2B, integración ERP y crecimiento en España.',
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  priceRange: '€€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Transferencia bancaria',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  email: 'comercial@ecomm360.es',
  knowsLanguage: ['es', 'en'],
};

export const website = {
  '@type': 'WebSite',
  name: 'eComm360 - Agencia Shopify',
  alternateName: 'Agencia Shopify España',
  url: SITE_URL,
  inLanguage: 'es',
  publisher: {
    '@type': 'Organization',
    name: 'eComm360',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/shopify/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const siteNavigationElement = {
  '@type': 'SiteNavigationElement',
  name: 'Navegación principal',
  hasPart: [
    { '@type': 'WebPage', name: 'Agencia Shopify', url: `${SITE_URL}/shopify/` },
    { '@type': 'WebPage', name: 'Shopify Plus', url: `${SITE_URL}/shopify/plus/` },
    { '@type': 'WebPage', name: 'Shopify B2B', url: `${SITE_URL}/soluciones/shopify-b2b/` },
    { '@type': 'WebPage', name: 'Migración a Shopify', url: `${SITE_URL}/migracion-shopify/` },
    { '@type': 'WebPage', name: 'Integración Shopify', url: `${SITE_URL}/integracion-shopify/` },
    { '@type': 'WebPage', name: 'Marketing Shopify', url: `${SITE_URL}/marketing-shopify/` },
    { '@type': 'WebPage', name: 'Partner Shopify', url: `${SITE_URL}/partner-shopify/` },
  ],
};
