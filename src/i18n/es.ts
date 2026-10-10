import type { Dict } from './en';

export const es: Dict = {
  meta: {
    title: 'OhMyShares — gestor de cartera de inversiones de código abierto y autoalojado',
    description:
      'Controla acciones, bonos, criptomonedas y activos personalizados en distintos brókers y divisas. Gratis, de código abierto (AGPL-3.0) y autoalojado con Docker. Tus datos se quedan en tu servidor.',
  },
  nav: {
    features: 'Funciones',
    analytics: 'Análisis',
    plugins: 'Plugins',
    install: 'Autoalojamiento',
    faq: 'FAQ',
    cta: 'Empezar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },
  hero: {
    badge: 'Código abierto · Autoalojado · Gratis para siempre',
    titleA: 'Todas tus inversiones.',
    titleB: 'Un panel privado.',
    subtitle:
      'OhMyShares es un gestor de cartera autoalojado para acciones, bonos, criptomonedas y cualquier otro activo que tengas. Cada operación, dividendo, comisión e impuesto — en todos tus brókers y divisas — en tu propio servidor.',
    primary: 'Desplegar con Docker',
    secondary: 'Estrella en GitHub',
    points: ['Licencia AGPL-3.0', 'linux/amd64 y arm64', '12 idiomas de interfaz'],
  },
  mock: {
    portfolio: 'Cartera principal',
    live: 'En vivo',
    value: 'Valor actual',
    totalReturn: 'Rentabilidad total',
    income: 'Dividendos y cupones',
    growth: 'Crecimiento de la cartera',
    allocation: 'Por tipo de activo',
    positions: 'Principales posiciones',
    positionsCount: 'posiciones',
    assets: ['Acciones', 'Bonos', 'Cripto', 'Efectivo'],
    periods: ['1M', '6M', '1A', 'Todo'],
  },
  stats: [
    { value: '155', label: 'divisas con tipos cruzados automáticos' },
    { value: '8', label: 'tipos de operaciones — de compras a impuestos' },
    { value: '12', label: 'idiomas de interfaz' },
    { value: '100%', label: 'de tus datos se quedan en tu servidor' },
  ],
  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que necesitas para medir tu rentabilidad real',
    lead: 'Ni una hoja de cálculo de juguete ni un SaaS que vende tus datos. Un libro de cartera completo pensado para inversores a largo plazo.',
    items: [
      {
        id: 'portfolios',
        title: 'Carteras ilimitadas',
        text: 'Separa las cuentas de bróker, de jubilación y de cripto. Clona una cartera con un clic para simular escenarios hipotéticos.',
      },
      {
        id: 'operations',
        title: 'Todo tipo de operaciones',
        text: 'Compras, ventas, dividendos, cupones, comisiones, impuestos, depósitos y retiradas — para que la rentabilidad refleje la realidad y no ganancias sobre el papel.',
      },
      {
        id: 'import',
        title: 'Importación de informes del bróker',
        text: 'Sube un extracto del bróker y obtén todas las operaciones en segundos. Volver a importar un informe solapado es seguro: los duplicados se omiten.',
      },
      {
        id: 'currency',
        title: 'Multidivisa de verdad',
        text: '155 divisas. Cada cartera se muestra en la divisa que elijas, con tipos cruzados calculados automáticamente.',
      },
      {
        id: 'custom',
        title: 'Activos personalizados',
        text: 'Inmuebles, depósitos, capital privado o un reloj antiguo: controla cualquier cosa con tu propio historial de precios.',
      },
      {
        id: 'companies',
        title: 'Información de empresas',
        text: 'Gráficos de precios, historial de dividendos y datos sectoriales para cada ticker: acciones, ETF, bonos, fondos y cripto.',
      },
      {
        id: 'users',
        title: 'Multiusuario con roles',
        text: 'Alójalo para tu familia o tu club de inversión. Los administradores gestionan usuarios, plugins y tipos de cambio.',
      },
      {
        id: 'api',
        title: 'API REST documentada',
        text: 'Documentación OpenAPI (Swagger) incluida: automatiza importaciones, crea bots o conecta tus propias herramientas.',
      },
      {
        id: 'mobile',
        title: 'Funciona en cualquier pantalla',
        text: 'Aplicación web adaptable e instalable que se siente como en casa en ordenador, tableta y móvil.',
      },
    ],
  },
  analytics: {
    eyebrow: 'Análisis',
    title: 'Entiende tu cartera de un vistazo',
    lead: 'OhMyShares convierte las operaciones en respuestas claras: cuánto has ganado realmente, dónde está tu dinero y qué te genera ingresos.',
    bullets: [
      {
        title: 'Rentabilidad honesta',
        text: 'Ganancia latente y realizada, dividendos y cupones, rentabilidad total — descontando comisiones e impuestos.',
      },
      {
        title: 'Desglose de la distribución',
        text: 'Por tipo de activo, sector, divisa y emisor, además de la concentración de la mayor posición y del top 5.',
      },
      {
        title: 'Ingresos pasivos por año',
        text: 'Dividendos, cupones, comisiones e impuestos por año, con el resultado neto para planificar.',
      },
      {
        title: 'Objetivos y destacados',
        text: 'Fija un valor objetivo y sigue tu progreso. Ve al instante tus mejores y peores posiciones.',
      },
    ],
    summaryTitle: 'Resumen',
    summary: [
      'Valor actual',
      'Efectivo',
      'Coste de posiciones abiertas',
      'Ganancia latente',
      'Ganancia realizada',
      'Dividendos y cupones',
      'Rentabilidad total',
    ],
    goal: 'Progreso del objetivo',
    sectorsTitle: 'Por sectores',
    sectors: ['Tecnología', 'Finanzas', 'Salud', 'Energía', 'Otros'],
    incomeTitle: 'Ingresos por año',
    incomeLegend: ['Dividendos', 'Cupones'],
  },
  plugins: {
    eyebrow: 'Ecosistema de plugins',
    title: 'Hazlo tuyo con plugins',
    lead: 'Los datos de mercado, los formatos de brókers y los tipos de cambio llegan a través de plugins: elige los proveedores que cubren tus mercados o escribe el tuyo en PHP.',
    caps: [
      {
        id: 'history',
        title: 'Datos de mercado',
        text: 'Historial de precios y dividendos de cualquier bolsa o API de confianza.',
      },
      {
        id: 'import',
        title: 'Importadores de informes',
        text: 'Enseña a OhMyShares un nuevo formato de extracto: CSV, XLSX, lo que sea.',
      },
      {
        id: 'rates',
        title: 'Tipos de cambio',
        text: 'Conecta tu banco central o tu proveedor de divisas favorito.',
      },
      {
        id: 'jobs',
        title: 'Hooks y tareas en segundo plano',
        text: 'Reacciona a nuevas operaciones y ejecuta sincronizaciones cada hora.',
      },
    ],
    storeTitle: 'Tienda de plugins integrada',
    storeText: 'Cualquier repositorio público de GitHub con el tema ohmyshares-plugin aparece automáticamente en todas las tiendas. Instala, configura y actualiza desde el panel de administración.',
    storeCta: 'Explorar plugins',
    sdkCta: 'Leer el Plugin SDK',
  },
  install: {
    eyebrow: 'Autoalojamiento',
    title: 'En marcha en cinco minutos',
    lead: 'Una imagen oficial de Docker para amd64 y arm64. Las migraciones de la base de datos se ejecutan automáticamente en cada arranque.',
    steps: [
      {
        title: 'Configura',
        text: 'Guarda docker-compose.yml, descarga .env.example como .env y define las contraseñas de la base de datos.',
      },
      {
        title: 'Inicia',
        text: 'Genera APP_KEY, añádela a .env y ejecuta docker compose up -d.',
      },
      {
        title: 'Inicia sesión',
        text: 'Crea el primer usuario — será el administrador — y abre http://localhost:8000.',
      },
    ],
    tabCompose: 'docker-compose.yml',
    tabTerminal: 'Terminal',
    copy: 'Copiar',
    copied: 'Copiado',
    updateTitle: 'Actualización',
    updateText: 'Descarga la nueva imagen y reinicia. Fija una versión como ohmyshares/ohmyshares:1.0.0 para tener control total.',
    reqTitle: 'Requisitos',
    req: ['Docker con Compose v2', 'MySQL 8.4 (incluido)', 'Servidor x86-64 o ARM64'],
  },
  privacy: {
    eyebrow: 'Por qué autoalojado',
    title: 'Tu dinero no es asunto de nadie más',
    lead: 'Tu historial financiero es el dato más sensible que tienes. OhMyShares lo guarda donde debe estar: contigo.',
    items: [
      { id: 'data', title: 'Tu servidor, tu base de datos', text: 'Todo vive en tu propio MySQL. Sin cuenta en la nube, sin dependencia de proveedor.' },
      { id: 'tracking', title: 'Sin rastreo ni anuncios', text: 'Sin scripts de analítica, sin intermediarios de datos, sin trampas de “plan gratuito”.' },
      { id: 'open', title: 'Código abierto', text: 'AGPL-3.0: audita el código, haz un fork, contribuye.' },
      { id: 'cost', title: 'Gratis para siempre', text: 'Sin suscripciones. Solo pagas el hardware que ya tienes.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿OhMyShares es realmente gratis?',
        a: 'Sí. Es de código abierto bajo la licencia AGPL-3.0. No hay planes de pago: solo cubres tu propio alojamiento.',
      },
      {
        q: '¿Dónde se guardan mis datos?',
        a: 'En la base de datos MySQL de tu propio servidor. OhMyShares no envía tu cartera a ningún sitio.',
      },
      {
        q: '¿Desde qué brókers puedo importar?',
        a: 'Los formatos de importación los aportan los plugins. Instálalos desde la tienda integrada o crea uno para tu bróker con el Plugin SDK; un parser suele ser una única clase PHP.',
      },
      {
        q: '¿De dónde salen los precios y dividendos?',
        a: 'De los plugins de datos de mercado que instales, así puedes elegir proveedores que cubran tus bolsas. Los activos personalizados admiten precios introducidos a mano.',
      },
      {
        q: '¿Qué hardware necesito?',
        a: 'Cualquier máquina que ejecute Docker: un VPS, un servidor doméstico o un NAS. Se publican imágenes para linux/amd64 y linux/arm64.',
      },
      {
        q: '¿Pueden varias personas usar una misma instancia?',
        a: 'Sí. OhMyShares es multiusuario: la primera cuenta es la del administrador, que gestiona usuarios, plugins y tipos de cambio. El registro público es opcional.',
      },
    ],
  },
  cta: {
    title: 'Recupera el control de tus inversiones',
    lead: 'Despliega OhMyShares en minutos y consulta toda tu cartera, en privado.',
    primary: 'Empezar',
    secondary: 'Ver código fuente',
  },
  footer: {
    tagline: 'Gestor de cartera de código abierto y autoalojado para inversores a largo plazo.',
    product: 'Producto',
    resources: 'Recursos',
    community: 'Comunidad',
    dockerHub: 'Docker Hub',
    pluginSdk: 'Plugin SDK',
    pluginStore: 'Tienda de plugins',
    contributing: 'Cómo contribuir',
    security: 'Política de seguridad',
    issues: 'Reportar un problema',
    license: 'Licencia',
    rights: 'Publicado bajo la licencia AGPL-3.0.',
  },
};
