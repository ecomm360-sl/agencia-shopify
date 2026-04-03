export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const mainNav: NavGroup[] = [
  {
    label: 'Shopify',
    items: [
      { label: 'Agencia Shopify', href: '/shopify/', description: 'Expertos en el ecosistema Shopify' },
      { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Escalabilidad enterprise' },
      { label: 'Shopify Advanced', href: '/shopify/advanced/', description: 'Para negocios en crecimiento' },
    ],
  },
  {
    label: 'Soluciones',
    items: [
      { label: 'Shopify B2C', href: '/soluciones/shopify-b2c/', description: 'Comercio al consumidor final' },
      { label: 'Shopify DTC', href: '/soluciones/shopify-dtc/', description: 'Venta directa de marca' },
      { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/', description: 'Venta mayorista y profesional' },
    ],
  },
  {
    label: 'Migraciones',
    items: [
      { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Proceso y metodología' },
      { label: 'Magento a Shopify', href: '/migracion-shopify/magento-a-shopify/', description: 'Desde Magento' },
      { label: 'PrestaShop a Shopify', href: '/migracion-shopify/prestashop-a-shopify/', description: 'Desde PrestaShop' },
      { label: 'LogiCommerce a Shopify', href: '/migracion-shopify/logicommerce-a-shopify/', description: 'Desde LogiCommerce' },
    ],
  },
  {
    label: 'Integraciones',
    items: [
      { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad y automatización' },
      { label: 'ERP Shopify', href: '/integracion-shopify/erp-shopify/', description: 'Integración con ERP' },
    ],
  },
];

export const directNav: NavItem[] = [
  { label: 'Marketing', href: '/marketing-shopify/' },
  { label: 'Partner', href: '/partner-shopify/' },
];

export const footerColumns = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Agencia Shopify', href: '/shopify/' },
      { label: 'Shopify Plus', href: '/shopify/plus/' },
      { label: 'Shopify Advanced', href: '/shopify/advanced/' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { label: 'Shopify B2C', href: '/soluciones/shopify-b2c/' },
      { label: 'Shopify DTC', href: '/soluciones/shopify-dtc/' },
      { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Migración a Shopify', href: '/migracion-shopify/' },
      { label: 'Integración Shopify', href: '/integracion-shopify/' },
      { label: 'Marketing Shopify', href: '/marketing-shopify/' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { label: 'Partner Shopify', href: '/partner-shopify/' },
    ],
  },
];
