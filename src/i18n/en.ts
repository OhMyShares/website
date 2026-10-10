export const en = {
  meta: {
    title: 'OhMyShares — open-source self-hosted investment portfolio tracker',
    description:
      'Track stocks, bonds, crypto and custom assets across brokers and currencies. Free, open-source (AGPL-3.0) and self-hosted with Docker. Your data stays on your server.',
  },
  nav: {
    features: 'Features',
    analytics: 'Analytics',
    plugins: 'Plugins',
    install: 'Self-hosting',
    faq: 'FAQ',
    cta: 'Get started',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    badge: 'Open source · Self-hosted · Free forever',
    titleA: 'All your investments.',
    titleB: 'One private dashboard.',
    subtitle:
      'OhMyShares is a self-hosted portfolio tracker for stocks, bonds, crypto and anything else you own. Every trade, dividend, fee and tax — across brokers and currencies — on your own server.',
    primary: 'Deploy with Docker',
    secondary: 'Star on GitHub',
    points: ['AGPL-3.0 licensed', 'linux/amd64 & arm64', '12 interface languages'],
  },
  mock: {
    portfolio: 'Main portfolio',
    live: 'Live',
    value: 'Current value',
    totalReturn: 'Total return',
    income: 'Dividends & coupons',
    growth: 'Portfolio growth',
    allocation: 'By asset types',
    positions: 'Top positions',
    positionsCount: 'positions',
    assets: ['Shares', 'Bonds', 'Crypto', 'Cash'],
    periods: ['1M', '6M', '1Y', 'All'],
  },
  stats: [
    { value: '155', label: 'currencies with automatic cross-rates' },
    { value: '8', label: 'operation types — from buys to taxes' },
    { value: '12', label: 'interface languages' },
    { value: '100%', label: 'of your data stays on your server' },
  ],
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to track real returns',
    lead: 'Not a toy spreadsheet and not a SaaS that sells your data. A complete portfolio ledger built for long-term investors.',
    items: [
      {
        id: 'portfolios',
        title: 'Unlimited portfolios',
        text: 'Keep brokerage, retirement and crypto accounts apart. Clone a portfolio in one click to model “what if” scenarios.',
      },
      {
        id: 'operations',
        title: 'Every kind of operation',
        text: 'Buys, sells, dividends, coupons, fees, taxes, deposits and withdrawals — so returns reflect reality, not paper gains.',
      },
      {
        id: 'import',
        title: 'Broker report import',
        text: 'Upload a broker statement and get all trades in seconds. Re-importing an overlapping report is safe — duplicates are skipped.',
      },
      {
        id: 'currency',
        title: 'True multi-currency',
        text: '155 currencies. Each portfolio reports in the currency you choose, with cross-rates calculated automatically.',
      },
      {
        id: 'custom',
        title: 'Custom assets',
        text: 'Real estate, deposits, private equity or a vintage watch — track anything with your own price history.',
      },
      {
        id: 'companies',
        title: 'Company insights',
        text: 'Price charts, dividend history and sector data for every ticker — stocks, ETFs, bonds, funds and crypto.',
      },
      {
        id: 'users',
        title: 'Multi-user with roles',
        text: 'Host it for your family or investment club. Admins manage users, plugins and currency rates.',
      },
      {
        id: 'api',
        title: 'Documented REST API',
        text: 'OpenAPI (Swagger) docs out of the box — automate imports, build bots or connect your own tools.',
      },
      {
        id: 'mobile',
        title: 'Works on every screen',
        text: 'Responsive, installable web app that feels at home on desktop, tablet and phone.',
      },
    ],
  },
  analytics: {
    eyebrow: 'Analytics',
    title: 'Understand your portfolio at a glance',
    lead: 'OhMyShares turns raw trades into clear answers: how much you really earned, where your money is and what pays you.',
    bullets: [
      {
        title: 'Honest performance',
        text: 'Unrealized and realized gain, dividends and coupons, total return — net of fees and taxes.',
      },
      {
        title: 'Allocation breakdowns',
        text: 'By asset type, sector, currency and issuer, plus concentration of the largest and top-5 positions.',
      },
      {
        title: 'Passive income by year',
        text: 'Dividends, coupons, fees and taxes per year, with the net result you can plan around.',
      },
      {
        title: 'Goals and movers',
        text: 'Set a target value and watch your progress. See your best and worst positions instantly.',
      },
    ],
    summaryTitle: 'Summary',
    summary: [
      'Current value',
      'Cash',
      'Cost basis of open positions',
      'Unrealized gain',
      'Realized gain',
      'Dividends and coupons',
      'Total return',
    ],
    goal: 'Goal achievement',
    sectorsTitle: 'By sectors',
    sectors: ['Technology', 'Financials', 'Healthcare', 'Energy', 'Other'],
    incomeTitle: 'Income by years',
    incomeLegend: ['Dividends', 'Coupons'],
  },
  plugins: {
    eyebrow: 'Plugin ecosystem',
    title: 'Make it yours with plugins',
    lead: 'Market data, broker formats and FX rates come from plugins — pick the providers that cover your markets, or write your own in plain PHP.',
    caps: [
      {
        id: 'history',
        title: 'Market data',
        text: 'Price history and dividends from any exchange or API you trust.',
      },
      {
        id: 'import',
        title: 'Report importers',
        text: 'Teach OhMyShares a new broker statement format: CSV, XLSX, anything.',
      },
      {
        id: 'rates',
        title: 'Currency rates',
        text: 'Plug in your central bank or favourite FX provider.',
      },
      {
        id: 'jobs',
        title: 'Hooks & background jobs',
        text: 'React to new trades and run hourly sync tasks.',
      },
    ],
    storeTitle: 'Built-in plugin store',
    storeText: 'Any public GitHub repository with the ohmyshares-plugin topic shows up in every store automatically. Install, configure and upgrade from the admin panel.',
    storeCta: 'Browse plugins',
    sdkCta: 'Read the Plugin SDK',
  },
  install: {
    eyebrow: 'Self-hosting',
    title: 'Up and running in five minutes',
    lead: 'One official Docker image for amd64 and arm64. Database migrations run automatically on every start.',
    steps: [
      {
        title: 'Configure',
        text: 'Save docker-compose.yml, download .env.example as .env and set database passwords.',
      },
      {
        title: 'Launch',
        text: 'Generate APP_KEY, put it into .env and run docker compose up -d.',
      },
      {
        title: 'Sign in',
        text: 'Create the first user — it becomes the admin — and open http://localhost:8000.',
      },
    ],
    tabCompose: 'docker-compose.yml',
    tabTerminal: 'Terminal',
    copy: 'Copy',
    copied: 'Copied',
    updateTitle: 'Updating',
    updateText: 'Pull the new image and restart. Pin a release tag like ohmyshares/ohmyshares:1.0.0 for full control.',
    reqTitle: 'Requirements',
    req: ['Docker with Compose v2', 'MySQL 8.4 (included)', 'x86-64 or ARM64 host'],
  },
  privacy: {
    eyebrow: 'Why self-hosted',
    title: 'Your money is nobody else’s business',
    lead: 'Financial history is the most sensitive data you have. OhMyShares keeps it where it belongs — with you.',
    items: [
      { id: 'data', title: 'Your server, your database', text: 'Everything lives in your own MySQL. No cloud account, no lock-in.' },
      { id: 'tracking', title: 'No tracking, no ads', text: 'No analytics scripts, no data brokers, no “free tier” catch.' },
      { id: 'open', title: 'Open source', text: 'AGPL-3.0: audit the code, fork it, contribute back.' },
      { id: 'cost', title: 'Free forever', text: 'No subscriptions. You only pay for the hardware you already own.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is OhMyShares really free?',
        a: 'Yes. It is open source under the AGPL-3.0 license. There are no paid tiers — you only cover your own hosting.',
      },
      {
        q: 'Where is my data stored?',
        a: 'In the MySQL database on your own server. OhMyShares does not send your portfolio anywhere.',
      },
      {
        q: 'Which brokers can I import from?',
        a: 'Import formats are provided by plugins. Install them from the built-in store or create one for your broker with the Plugin SDK — a parser is usually a single PHP class.',
      },
      {
        q: 'Where do prices and dividends come from?',
        a: 'From market data plugins you install, so you can choose providers that cover your exchanges. Custom assets can have manually entered prices.',
      },
      {
        q: 'What hardware do I need?',
        a: 'Any machine that runs Docker: a VPS, a home server or a NAS. Images are published for linux/amd64 and linux/arm64.',
      },
      {
        q: 'Can several people use one instance?',
        a: 'Yes. OhMyShares is multi-user: the first account is an admin who can manage users, plugins and currency rates. Public sign-up is optional.',
      },
    ],
  },
  cta: {
    title: 'Take back control of your investments',
    lead: 'Deploy OhMyShares in minutes and see your whole portfolio — privately.',
    primary: 'Get started',
    secondary: 'View source',
  },
  footer: {
    tagline: 'Open-source, self-hosted portfolio tracker for long-term investors.',
    product: 'Product',
    resources: 'Resources',
    community: 'Community',
    dockerHub: 'Docker Hub',
    pluginSdk: 'Plugin SDK',
    pluginStore: 'Plugin store',
    contributing: 'Contributing',
    security: 'Security policy',
    issues: 'Report an issue',
    license: 'License',
    rights: 'Released under the AGPL-3.0 license.',
  },
};

export type Dict = typeof en;
