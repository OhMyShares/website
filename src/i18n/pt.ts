import type { Dict } from './en';

export const pt: Dict = {
  meta: {
    title: 'OhMyShares — rastreador de carteira de investimentos open source e auto-hospedado',
    description:
      'Acompanhe ações, títulos, criptomoedas e ativos personalizados em diferentes corretoras e moedas. Gratuito, open source (AGPL-3.0) e auto-hospedado com Docker. Seus dados ficam no seu servidor.',
  },
  nav: {
    features: 'Recursos',
    analytics: 'Análises',
    plugins: 'Plugins',
    install: 'Auto-hospedagem',
    faq: 'FAQ',
    cta: 'Começar',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
  },
  hero: {
    badge: 'Open source · Auto-hospedado · Grátis para sempre',
    titleA: 'Todos os seus investimentos.',
    titleB: 'Um painel privado.',
    subtitle:
      'OhMyShares é um rastreador de carteira auto-hospedado para ações, títulos, criptomoedas e qualquer outro ativo que você possua. Cada operação, dividendo, taxa e imposto — em todas as corretoras e moedas — no seu próprio servidor.',
    primary: 'Implantar com Docker',
    secondary: 'Estrela no GitHub',
    points: ['Licença AGPL-3.0', 'linux/amd64 e arm64', '12 idiomas de interface'],
  },
  mock: {
    portfolio: 'Carteira principal',
    live: 'Ao vivo',
    value: 'Valor atual',
    totalReturn: 'Retorno total',
    income: 'Dividendos e cupons',
    growth: 'Crescimento da carteira',
    allocation: 'Por tipo de ativo',
    positions: 'Maiores posições',
    positionsCount: 'posições',
    assets: ['Ações', 'Títulos', 'Cripto', 'Caixa'],
    periods: ['1M', '6M', '1A', 'Tudo'],
  },
  stats: [
    { value: '155', label: 'moedas com taxas cruzadas automáticas' },
    { value: '8', label: 'tipos de operação — de compras a impostos' },
    { value: '12', label: 'idiomas de interface' },
    { value: '100%', label: 'dos seus dados ficam no seu servidor' },
  ],
  features: {
    eyebrow: 'Recursos',
    title: 'Tudo o que você precisa para medir o retorno real',
    lead: 'Nem uma planilha de brinquedo, nem um SaaS que vende seus dados. Um livro-razão de carteira completo, feito para investidores de longo prazo.',
    items: [
      {
        id: 'portfolios',
        title: 'Carteiras ilimitadas',
        text: 'Mantenha separadas as contas da corretora, da previdência e de cripto. Clone uma carteira com um clique para simular cenários hipotéticos.',
      },
      {
        id: 'operations',
        title: 'Todo tipo de operação',
        text: 'Compras, vendas, dividendos, cupons, taxas, impostos, depósitos e saques — para que o retorno reflita a realidade, não ganhos no papel.',
      },
      {
        id: 'import',
        title: 'Importação de relatórios da corretora',
        text: 'Envie um extrato da corretora e tenha todas as operações em segundos. Reimportar um relatório sobreposto é seguro — duplicatas são ignoradas.',
      },
      {
        id: 'currency',
        title: 'Multimoeda de verdade',
        text: '155 moedas. Cada carteira é exibida na moeda que você escolher, com taxas cruzadas calculadas automaticamente.',
      },
      {
        id: 'custom',
        title: 'Ativos personalizados',
        text: 'Imóveis, depósitos, private equity ou um relógio antigo — acompanhe qualquer coisa com seu próprio histórico de preços.',
      },
      {
        id: 'companies',
        title: 'Informações das empresas',
        text: 'Gráficos de preço, histórico de dividendos e dados setoriais para cada ticker — ações, ETFs, títulos, fundos e cripto.',
      },
      {
        id: 'users',
        title: 'Multiusuário com papéis',
        text: 'Hospede para sua família ou clube de investimentos. Administradores gerenciam usuários, plugins e taxas de câmbio.',
      },
      {
        id: 'api',
        title: 'API REST documentada',
        text: 'Documentação OpenAPI (Swagger) pronta para uso — automatize importações, crie bots ou conecte suas próprias ferramentas.',
      },
      {
        id: 'mobile',
        title: 'Funciona em qualquer tela',
        text: 'Aplicativo web responsivo e instalável, à vontade no desktop, tablet e celular.',
      },
    ],
  },
  analytics: {
    eyebrow: 'Análises',
    title: 'Entenda sua carteira num relance',
    lead: 'OhMyShares transforma operações brutas em respostas claras: quanto você realmente ganhou, onde está seu dinheiro e o que gera renda para você.',
    bullets: [
      {
        title: 'Desempenho honesto',
        text: 'Ganho não realizado e realizado, dividendos e cupons, retorno total — líquidos de taxas e impostos.',
      },
      {
        title: 'Detalhamento da alocação',
        text: 'Por tipo de ativo, setor, moeda e emissor, além da concentração da maior posição e das 5 maiores.',
      },
      {
        title: 'Renda passiva por ano',
        text: 'Dividendos, cupons, taxas e impostos por ano, com o resultado líquido para você planejar.',
      },
      {
        title: 'Metas e destaques',
        text: 'Defina um valor-alvo e acompanhe seu progresso. Veja na hora suas melhores e piores posições.',
      },
    ],
    summaryTitle: 'Resumo',
    summary: [
      'Valor atual',
      'Caixa',
      'Custo das posições abertas',
      'Ganho não realizado',
      'Ganho realizado',
      'Dividendos e cupons',
      'Retorno total',
    ],
    goal: 'Progresso da meta',
    sectorsTitle: 'Por setores',
    sectors: ['Tecnologia', 'Financeiro', 'Saúde', 'Energia', 'Outros'],
    incomeTitle: 'Renda por ano',
    incomeLegend: ['Dividendos', 'Cupons'],
  },
  plugins: {
    eyebrow: 'Ecossistema de plugins',
    title: 'Deixe do seu jeito com plugins',
    lead: 'Dados de mercado, formatos de corretoras e taxas de câmbio vêm de plugins — escolha os provedores que cobrem seus mercados ou escreva o seu em PHP puro.',
    caps: [
      {
        id: 'history',
        title: 'Dados de mercado',
        text: 'Histórico de preços e dividendos de qualquer bolsa ou API em que você confie.',
      },
      {
        id: 'import',
        title: 'Importadores de relatórios',
        text: 'Ensine ao OhMyShares um novo formato de extrato: CSV, XLSX, qualquer um.',
      },
      {
        id: 'rates',
        title: 'Taxas de câmbio',
        text: 'Conecte seu banco central ou seu provedor de câmbio favorito.',
      },
      {
        id: 'jobs',
        title: 'Hooks e tarefas em segundo plano',
        text: 'Reaja a novas operações e execute sincronizações de hora em hora.',
      },
    ],
    storeTitle: 'Loja de plugins integrada',
    storeText: 'Qualquer repositório público do GitHub com o tópico ohmyshares-plugin aparece automaticamente em todas as lojas. Instale, configure e atualize pelo painel de administração.',
    storeCta: 'Explorar plugins',
    sdkCta: 'Ler o Plugin SDK',
  },
  install: {
    eyebrow: 'Auto-hospedagem',
    title: 'Funcionando em cinco minutos',
    lead: 'Uma imagem Docker oficial para amd64 e arm64. As migrações do banco de dados rodam automaticamente a cada inicialização.',
    steps: [
      {
        title: 'Configure',
        text: 'Salve o docker-compose.yml, baixe o .env.example como .env e defina as senhas do banco de dados.',
      },
      {
        title: 'Inicie',
        text: 'Gere a APP_KEY, coloque-a no .env e execute docker compose up -d.',
      },
      {
        title: 'Entre',
        text: 'Crie o primeiro usuário — ele se torna o administrador — e abra http://localhost:8000.',
      },
    ],
    tabCompose: 'docker-compose.yml',
    tabTerminal: 'Terminal',
    copy: 'Copiar',
    copied: 'Copiado',
    updateTitle: 'Atualização',
    updateText: 'Baixe a nova imagem e reinicie. Fixe uma versão como ohmyshares/ohmyshares:1.0.0 para ter controle total.',
    reqTitle: 'Requisitos',
    req: ['Docker com Compose v2', 'MySQL 8.4 (incluído)', 'Host x86-64 ou ARM64'],
  },
  privacy: {
    eyebrow: 'Por que auto-hospedado',
    title: 'Seu dinheiro não é da conta de ninguém',
    lead: 'O histórico financeiro é o dado mais sensível que você tem. OhMyShares o mantém onde ele deve estar — com você.',
    items: [
      { id: 'data', title: 'Seu servidor, seu banco de dados', text: 'Tudo fica no seu próprio MySQL. Sem conta na nuvem, sem aprisionamento.' },
      { id: 'tracking', title: 'Sem rastreamento, sem anúncios', text: 'Sem scripts de análise, sem corretores de dados, sem pegadinhas de “plano grátis”.' },
      { id: 'open', title: 'Open source', text: 'AGPL-3.0: audite o código, faça um fork, contribua.' },
      { id: 'cost', title: 'Grátis para sempre', text: 'Sem assinaturas. Você só paga pelo hardware que já tem.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'O OhMyShares é realmente gratuito?',
        a: 'Sim. É open source sob a licença AGPL-3.0. Não há planos pagos — você só arca com a sua própria hospedagem.',
      },
      {
        q: 'Onde meus dados ficam armazenados?',
        a: 'No banco de dados MySQL do seu próprio servidor. O OhMyShares não envia sua carteira para lugar nenhum.',
      },
      {
        q: 'De quais corretoras posso importar?',
        a: 'Os formatos de importação são fornecidos por plugins. Instale-os pela loja integrada ou crie um para sua corretora com o Plugin SDK — um parser geralmente é uma única classe PHP.',
      },
      {
        q: 'De onde vêm os preços e dividendos?',
        a: 'Dos plugins de dados de mercado que você instalar, então você escolhe provedores que cobrem suas bolsas. Ativos personalizados podem ter preços inseridos manualmente.',
      },
      {
        q: 'De que hardware eu preciso?',
        a: 'Qualquer máquina que rode Docker: uma VPS, um servidor doméstico ou um NAS. As imagens são publicadas para linux/amd64 e linux/arm64.',
      },
      {
        q: 'Várias pessoas podem usar a mesma instância?',
        a: 'Sim. O OhMyShares é multiusuário: a primeira conta é a de administrador, que gerencia usuários, plugins e taxas de câmbio. O cadastro público é opcional.',
      },
    ],
  },
  cta: {
    title: 'Retome o controle dos seus investimentos',
    lead: 'Implante o OhMyShares em minutos e veja toda a sua carteira — com privacidade.',
    primary: 'Começar',
    secondary: 'Ver código-fonte',
  },
  footer: {
    tagline: 'Rastreador de carteira open source e auto-hospedado para investidores de longo prazo.',
    product: 'Produto',
    resources: 'Recursos',
    community: 'Comunidade',
    dockerHub: 'Docker Hub',
    pluginSdk: 'Plugin SDK',
    pluginStore: 'Loja de plugins',
    contributing: 'Como contribuir',
    security: 'Política de segurança',
    issues: 'Relatar um problema',
    license: 'Licença',
    rights: 'Distribuído sob a licença AGPL-3.0.',
  },
};
