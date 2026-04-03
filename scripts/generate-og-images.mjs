import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');
mkdirSync(outDir, { recursive: true });

const pages = [
  {
    file: 'home',
    title: 'Agencia Shopify',
    subtitle: 'Diseño · Migración · B2B · Integración ERP',
    badge: 'Partner Tecnológico en España',
  },
  {
    file: 'shopify',
    title: 'Agencia Shopify',
    subtitle: 'Diseño, Desarrollo y Consultoría Experta',
    badge: 'Especialistas en el ecosistema Shopify',
  },
  {
    file: 'shopify-plus',
    title: 'Shopify Plus',
    subtitle: 'Implementación Enterprise y B2B',
    badge: 'Escalabilidad · Checkout Custom · Multi-tienda',
  },
  {
    file: 'shopify-advanced',
    title: 'Shopify Advanced',
    subtitle: 'Para Negocios en Crecimiento',
    badge: 'Informes avanzados · Venta internacional · 399 $/mes',
  },
  {
    file: 'shopify-b2b',
    title: 'Shopify B2B',
    subtitle: 'Venta Mayorista y Profesional',
    badge: 'Catálogos privados · Precios por empresa · ERP',
  },
  {
    file: 'shopify-dtc',
    title: 'Shopify DTC',
    subtitle: 'Venta Directa al Consumidor',
    badge: 'Tu marca · Tu canal · Tus datos',
  },
  {
    file: 'shopify-b2c',
    title: 'Shopify B2C',
    subtitle: 'Tiendas de Alta Conversión',
    badge: 'Diseño a medida · Checkout Shop Pay · Growth',
  },
  {
    file: 'migracion-shopify',
    title: 'Migración a Shopify',
    subtitle: 'Desde Magento, PrestaShop y LogiCommerce',
    badge: 'Sin perder datos · Sin perder SEO · Sin parar',
  },
  {
    file: 'magento-a-shopify',
    title: 'Magento → Shopify',
    subtitle: 'Reduce tu TCO hasta un 50%',
    badge: 'Migración profesional · Preservación SEO',
  },
  {
    file: 'prestashop-a-shopify',
    title: 'PrestaShop → Shopify',
    subtitle: 'Simplifica tu Operativa',
    badge: 'Catálogo · Clientes · Pedidos · SEO',
  },
  {
    file: 'logicommerce-a-shopify',
    title: 'LogiCommerce → Shopify',
    subtitle: 'Más Ecosistema y Flexibilidad',
    badge: '+8.000 apps · B2B nativo · Comunidad global',
  },
  {
    file: 'integracion-shopify',
    title: 'Integración Shopify',
    subtitle: 'ERP · CRM · PIM · Automatización',
    badge: 'Sincronización automática de datos',
  },
  {
    file: 'erp-shopify',
    title: 'ERP + Shopify',
    subtitle: 'SAP · Dynamics · Sage · Holded',
    badge: 'Catálogo · Stock · Pedidos · Facturación',
  },
  {
    file: 'marketing-shopify',
    title: 'Marketing Shopify',
    subtitle: 'SEO · CRO · Klaviyo · Performance',
    badge: 'Crece con datos, no con intuición',
  },
  {
    file: 'partner-shopify',
    title: 'Partner Shopify',
    subtitle: 'eComm360 — España',
    badge: 'Enfoque técnico y consultivo',
  },
];

function createSvg({ title, subtitle, badge }) {
  // Escape XML entities
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#071311"/>
      <stop offset="100%" stop-color="#0a1f1a"/>
    </linearGradient>
    <radialGradient id="glow1" cx="15%" cy="20%" r="35%">
      <stop offset="0%" stop-color="#7ECF4D" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7ECF4D" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="85%" cy="75%" r="30%">
      <stop offset="0%" stop-color="#7ECF4D" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#7ECF4D" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bagFront" x1="20" y1="18" x2="45" y2="60">
      <stop offset="0" stop-color="#95D66A"/>
      <stop offset="1" stop-color="#62A83B"/>
    </linearGradient>
    <linearGradient id="bagSide" x1="48" y1="22" x2="61" y2="66">
      <stop offset="0" stop-color="#548C36"/>
      <stop offset="1" stop-color="#376A21"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Grid pattern -->
  <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
    <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Green accent line -->
  <rect x="80" y="155" width="4" height="100" rx="2" fill="#7ECF4D"/>

  <!-- Badge -->
  <rect x="80" y="88" width="${badge.length * 9.5 + 40}" height="36" rx="18" fill="rgba(126,207,77,0.12)" stroke="rgba(126,207,77,0.25)" stroke-width="1"/>
  <text x="100" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#A7EA7A" letter-spacing="0.5">${esc(badge)}</text>

  <!-- Title -->
  <text x="100" y="205" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="white" letter-spacing="-2">${esc(title)}</text>

  <!-- Subtitle -->
  <text x="100" y="268" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.6)" letter-spacing="-0.5">${esc(subtitle)}</text>

  <!-- Divider -->
  <line x1="80" y1="340" x2="500" y2="340" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Logo bag icon -->
  <g transform="translate(80, 380) scale(0.65)">
    <rect width="70" height="70" rx="18" fill="rgba(126,207,77,0.12)"/>
    <g transform="translate(3, 2) scale(0.75)">
      <path d="M33 24L51 18L58 61L40 66L33 24Z" fill="url(#bagSide)"/>
      <path d="M24 25L47 18L51 18L40 66L18 58L24 25Z" fill="url(#bagFront)"/>
      <path d="M34 15C35 10 39 7 43 7C48 7 51 10 52 15" stroke="#9CDC70" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    </g>
  </g>

  <!-- Brand name -->
  <text x="135" y="407" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="rgba(167,234,122,0.7)" letter-spacing="4" text-transform="uppercase">AGENCIA</text>
  <text x="135" y="432" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="white" letter-spacing="-1">shopify</text>

  <!-- eComm360 -->
  <text x="80" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.35)">eComm360 — Partner Tecnológico Shopify en España</text>

  <!-- URL -->
  <text x="80" y="590" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="400" fill="rgba(126,207,77,0.5)">agencia-shopify.com</text>

  <!-- Decorative green dot -->
  <circle cx="1100" cy="100" r="6" fill="#7ECF4D" opacity="0.3"/>
  <circle cx="1060" cy="530" r="4" fill="#7ECF4D" opacity="0.2"/>

</svg>`;
}

async function generate() {
  console.log(`Generating ${pages.length} OG images...\n`);

  for (const page of pages) {
    const svg = createSvg(page);
    const outputPath = join(outDir, `${page.file}.png`);

    await sharp(Buffer.from(svg))
      .resize(1200, 630)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`  ✓ ${page.file}.png (${stats.width}x${stats.height})`);
  }

  console.log(`\nDone! ${pages.length} images saved to public/og/`);
}

generate().catch(console.error);
