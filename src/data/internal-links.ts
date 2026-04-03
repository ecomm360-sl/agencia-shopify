export interface InternalLink {
  label: string;
  href: string;
  description: string;
}

export const clusterLinks: Record<string, InternalLink[]> = {
  '/shopify/': [
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Escalabilidad enterprise y B2B' },
    { label: 'Shopify Advanced', href: '/shopify/advanced/', description: 'Para negocios en crecimiento' },
    { label: 'Shopify B2C', href: '/soluciones/shopify-b2c/', description: 'Comercio al consumidor' },
    { label: 'Shopify DTC', href: '/soluciones/shopify-dtc/', description: 'Venta directa de marca' },
    { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/', description: 'Venta mayorista' },
    { label: 'Partner Shopify', href: '/partner-shopify/', description: 'Nuestras credenciales' },
  ],
  '/shopify/plus/': [
    { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/', description: 'Venta mayorista y profesional' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad y automatización' },
    { label: 'ERP Shopify', href: '/integracion-shopify/erp-shopify/', description: 'Integración con ERP' },
    { label: 'Partner Shopify', href: '/partner-shopify/', description: 'Metodología y experiencia' },
  ],
  '/shopify/advanced/': [
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Nuestra especialización' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Solución enterprise' },
    { label: 'Marketing Shopify', href: '/marketing-shopify/', description: 'Growth y rendimiento' },
  ],
  '/soluciones/shopify-b2b/': [
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Plataforma enterprise' },
    { label: 'ERP Shopify', href: '/integracion-shopify/erp-shopify/', description: 'Integración con ERP' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad completa' },
    { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Transición ordenada' },
  ],
  '/soluciones/shopify-dtc/': [
    { label: 'Shopify B2C', href: '/soluciones/shopify-b2c/', description: 'Comercio al consumidor' },
    { label: 'Marketing Shopify', href: '/marketing-shopify/', description: 'Growth y captación' },
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Nuestra especialización' },
  ],
  '/soluciones/shopify-b2c/': [
    { label: 'Shopify DTC', href: '/soluciones/shopify-dtc/', description: 'Venta directa de marca' },
    { label: 'Marketing Shopify', href: '/marketing-shopify/', description: 'Growth y rendimiento' },
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Nuestra especialización' },
  ],
  '/migracion-shopify/': [
    { label: 'Magento a Shopify', href: '/migracion-shopify/magento-a-shopify/', description: 'Desde Magento' },
    { label: 'PrestaShop a Shopify', href: '/migracion-shopify/prestashop-a-shopify/', description: 'Desde PrestaShop' },
    { label: 'LogiCommerce a Shopify', href: '/migracion-shopify/logicommerce-a-shopify/', description: 'Desde LogiCommerce' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad post-migración' },
    { label: 'Partner Shopify', href: '/partner-shopify/', description: 'Metodología y confianza' },
  ],
  '/migracion-shopify/magento-a-shopify/': [
    { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Proceso general' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Para proyectos enterprise' },
  ],
  '/migracion-shopify/prestashop-a-shopify/': [
    { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Proceso general' },
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Nuestra especialización' },
    { label: 'Marketing Shopify', href: '/marketing-shopify/', description: 'Crecimiento post-migración' },
  ],
  '/migracion-shopify/logicommerce-a-shopify/': [
    { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Proceso general' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Para operaciones complejas' },
  ],
  '/integracion-shopify/': [
    { label: 'ERP Shopify', href: '/integracion-shopify/erp-shopify/', description: 'Integración con ERP' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Plataforma enterprise' },
    { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/', description: 'Venta mayorista' },
    { label: 'Partner Shopify', href: '/partner-shopify/', description: 'Capacidad técnica' },
  ],
  '/integracion-shopify/erp-shopify/': [
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Hub de conectividad' },
    { label: 'Shopify B2B', href: '/soluciones/shopify-b2b/', description: 'Venta mayorista' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Plataforma enterprise' },
  ],
  '/marketing-shopify/': [
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Nuestra especialización' },
    { label: 'Shopify DTC', href: '/soluciones/shopify-dtc/', description: 'Venta directa de marca' },
    { label: 'Partner Shopify', href: '/partner-shopify/', description: 'Metodología integral' },
  ],
  '/partner-shopify/': [
    { label: 'Agencia Shopify', href: '/shopify/', description: 'Especialización Shopify' },
    { label: 'Shopify Plus', href: '/shopify/plus/', description: 'Proyectos enterprise' },
    { label: 'Migración a Shopify', href: '/migracion-shopify/', description: 'Transiciones a Shopify' },
    { label: 'Integración Shopify', href: '/integracion-shopify/', description: 'Conectividad técnica' },
    { label: 'Marketing Shopify', href: '/marketing-shopify/', description: 'Crecimiento' },
  ],
};
