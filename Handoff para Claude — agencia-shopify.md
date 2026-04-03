# Handoff para Claude — agencia-shopify

## Objetivo del proyecto

Este proyecto corresponde al rediseño de **agencia-shopify.com** con una dirección visual inspirada en Shopify, pero aplicada a una propuesta propia para una agencia especializada. El trabajo ya incluye una primera base de diseño, documentación de identidad, investigación de Shopify y una propuesta estratégica de arquitectura SEO, GEO y AEO para crecer el sitio con páginas especializadas.

## Estado actual

La base del frontend ya existe en React + Vite + Tailwind 4. Se ha trabajado una primera home con enfoque premium y se han generado documentos de soporte para marca, investigación y contenidos. El proyecto debe entenderse como una **base preparada para iterar**, no como una versión final cerrada.

## Decisión importante de marca

La instrucción más reciente del usuario es clara: **mantener el logotipo original de eComm360** como identidad principal. Por tanto, cualquier variante híbrida o inspirada en Shopify debe tratarse solo como exploración descartada, no como activo principal de marca.

## Qué debe usar Claude como referencia principal

| Tipo | Archivo / ruta | Uso recomendado |
|---|---|---|
| Código base | `client/src/pages/Home.tsx` | Referencia de la landing actual |
| Sistema visual | `client/src/index.css` | Tokens, paleta y acabados globales |
| HTML base | `client/index.html` | Tipografías y base del documento |
| Branding | `brand/identidad-corporativa.md` | Guía conceptual de identidad |
| Brainstorming | `ideas.md` | Dirección creativa inicial |
| Investigación visual Shopify | `shopify_research_notes.md` | Rasgos visuales y de tono observados |
| Estrategia SEO/GEO/AEO | `research/arquitectura-seo-geo-aeo-shopify-espana.md` | Arquitectura de URLs y clusters |
| Notas de mercado | `research/shopify-spain-market-notes.md` | Contexto competitivo y semántico |
| Logo original eComm360 | `brand/original/ecomm360_logotipo_positivo.png` | Activo principal a respetar |

## Archivos exploratorios que no son la referencia principal

| Archivo | Estado |
|---|---|
| `brand/logo-ecomm360-shopify-fusion.svg` | Exploración descartada |
| `brand/isotipo-ecomm360-shopify-fusion.svg` | Exploración descartada |
| `brand/logo-agencia-shopify.svg` | Propuesta de marca derivada para Agencia Shopify |
| `brand/isotipo-agencia-shopify.svg` | Propuesta de isotipo para Agencia Shopify |

## Dirección visual deseada

La dirección aprobada para el sitio parte de varias señales extraídas de Shopify: contraste alto, bloques oscuros muy limpios, tipografía protagonista, uso controlado del verde, UI con apariencia premium y una narrativa visual que mezcla producto, crecimiento y operación. Aun así, la marca eComm360 no debe perder su identidad original.

En la práctica, Claude debería trabajar con esta tensión bien resuelta: **web con lenguaje Shopify, pero marca eComm360 intacta**.

## Prioridades recomendadas para la siguiente iteración

La prioridad más lógica es continuar el desarrollo del sitio con una arquitectura más completa. La documentación estratégica ya recomienda una expansión mediante clusters de contenido para páginas como Shopify, Shopify Plus, Shopify Advanced, Shopify B2B, Shopify DTC, migraciones e integraciones.

## Orden de trabajo sugerido

| Prioridad | Siguiente paso |
|---|---|
| Alta | Revisar y refinar `Home.tsx` con el logo original de eComm360 aplicado correctamente |
| Alta | Crear estructura de rutas para nuevas landings SEO |
| Alta | Preparar componentes reutilizables para secciones de servicio, migración e integración |
| Media | Convertir la estrategia SEO en páginas reales |
| Media | Revisar copies y CTAs para alinearlos con el posicionamiento de partner tecnológico |
| Media | Reforzar pruebas de confianza, metodología y casos de uso |

## Notas de posicionamiento

El enfoque estratégico más fuerte para este proyecto no es competir solo como una agencia de diseño Shopify, sino como un **partner tecnológico estratégico** especializado en **Shopify, B2B, integración, ERP y migración**. Esa intersección es la que aporta más diferenciación frente a agencias generalistas.

## Estructura mínima que Claude debería preservar

| Ruta | Función |
|---|---|
| `client/src/pages/Home.tsx` | Home principal |
| `client/src/index.css` | Tokens y sistema visual |
| `research/` | Base documental SEO y mercado |
| `brand/` | Marca, logos y guía de identidad |

## Nota final

Este paquete se ha preparado para que Claude pueda continuar el trabajo con el máximo contexto posible. Si hubiera conflicto entre exploraciones visuales y decisiones recientes del usuario, debe prevalecer siempre la instrucción más reciente: **mantener el logotipo original de eComm360**.
