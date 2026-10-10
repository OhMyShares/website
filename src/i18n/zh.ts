import type { Dict } from './en';

export const zh: Dict = {
  meta: {
    title: 'OhMyShares — 开源、自托管的投资组合追踪器',
    description:
      '跨券商、跨币种追踪股票、债券、加密货币和自定义资产。免费、开源（AGPL-3.0），通过 Docker 自托管。你的数据只保存在你自己的服务器上。',
  },
  nav: {
    features: '功能',
    analytics: '分析',
    plugins: '插件',
    install: '自托管',
    faq: '常见问题',
    cta: '立即开始',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '语言',
  },
  hero: {
    badge: '开源 · 自托管 · 永久免费',
    titleA: '你的全部投资。',
    titleB: '一个私密的仪表盘。',
    subtitle:
      'OhMyShares 是一款自托管的投资组合追踪器，支持股票、债券、加密货币以及你拥有的任何其他资产。每一笔交易、股息、手续费和税费——跨券商、跨币种——都保存在你自己的服务器上。',
    primary: '使用 Docker 部署',
    secondary: '在 GitHub 上加星',
    points: ['AGPL-3.0 许可', 'linux/amd64 和 arm64', '12 种界面语言'],
  },
  mock: {
    portfolio: '主投资组合',
    live: '实时',
    value: '当前市值',
    totalReturn: '总收益',
    income: '股息与票息',
    growth: '组合增长',
    allocation: '按资产类型',
    positions: '主要持仓',
    positionsCount: '个持仓',
    assets: ['股票', '债券', '加密货币', '现金'],
    periods: ['1月', '6月', '1年', '全部'],
  },
  stats: [
    { value: '155', label: '种货币，自动计算交叉汇率' },
    { value: '8', label: '种操作类型——从买入到纳税' },
    { value: '12', label: '种界面语言' },
    { value: '100%', label: '的数据保存在你的服务器上' },
  ],
  features: {
    eyebrow: '功能',
    title: '追踪真实收益所需的一切',
    lead: '不是简陋的电子表格，也不是出卖你数据的 SaaS。这是一本为长期投资者打造的完整投资组合账本。',
    items: [
      {
        id: 'portfolios',
        title: '无限投资组合',
        text: '将券商账户、养老金账户和加密货币账户分开管理。一键克隆投资组合，模拟各种“假如”情景。',
      },
      {
        id: 'operations',
        title: '覆盖所有操作类型',
        text: '买入、卖出、股息、票息、手续费、税费、入金和出金——让收益反映真实情况，而不是纸面盈利。',
      },
      {
        id: 'import',
        title: '导入券商报告',
        text: '上传券商对账单，几秒钟即可导入全部交易。重复导入有重叠的报告也很安全——重复项会被自动跳过。',
      },
      {
        id: 'currency',
        title: '真正的多币种',
        text: '支持 155 种货币。每个投资组合都以你选择的货币计价，交叉汇率自动计算。',
      },
      {
        id: 'custom',
        title: '自定义资产',
        text: '房产、存款、私募股权或一块古董表——用你自己的价格历史追踪任何资产。',
      },
      {
        id: 'companies',
        title: '公司洞察',
        text: '每个代码都有价格图表、股息历史和行业数据——股票、ETF、债券、基金和加密货币。',
      },
      {
        id: 'users',
        title: '多用户与角色',
        text: '为家人或投资俱乐部托管。管理员可管理用户、插件和汇率。',
      },
      {
        id: 'api',
        title: '文档完善的 REST API',
        text: '开箱即用的 OpenAPI（Swagger）文档——自动化导入、构建机器人或连接你自己的工具。',
      },
      {
        id: 'mobile',
        title: '适配所有屏幕',
        text: '响应式、可安装的 Web 应用，在桌面、平板和手机上都得心应手。',
      },
    ],
  },
  analytics: {
    eyebrow: '分析',
    title: '一眼看懂你的投资组合',
    lead: 'OhMyShares 将原始交易转化为清晰的答案：你真正赚了多少、钱在哪里、什么在为你带来收入。',
    bullets: [
      {
        title: '真实的业绩',
        text: '未实现与已实现收益、股息与票息、总收益——均已扣除手续费和税费。',
      },
      {
        title: '资产配置分析',
        text: '按资产类型、行业、货币和发行人分布，以及最大持仓和前 5 大持仓的集中度。',
      },
      {
        title: '按年统计被动收入',
        text: '每年的股息、票息、手续费和税费，以及可供规划的净结果。',
      },
      {
        title: '目标与涨跌榜',
        text: '设定目标市值并跟踪进度。立即查看表现最好和最差的持仓。',
      },
    ],
    summaryTitle: '概览',
    summary: ['当前市值', '现金', '未平仓持仓成本', '未实现收益', '已实现收益', '股息与票息', '总收益'],
    goal: '目标完成度',
    sectorsTitle: '按行业',
    sectors: ['科技', '金融', '医疗保健', '能源', '其他'],
    incomeTitle: '按年收入',
    incomeLegend: ['股息', '票息'],
  },
  plugins: {
    eyebrow: '插件生态',
    title: '用插件打造专属于你的工具',
    lead: '市场数据、券商格式和汇率均由插件提供——选择覆盖你所在市场的数据源，或用纯 PHP 编写自己的插件。',
    caps: [
      {
        id: 'history',
        title: '市场数据',
        text: '来自你信任的任何交易所或 API 的价格历史和股息。',
      },
      {
        id: 'import',
        title: '报告导入器',
        text: '让 OhMyShares 支持新的券商对账单格式：CSV、XLSX，任何格式。',
      },
      {
        id: 'rates',
        title: '汇率',
        text: '接入你所在国家的央行或你喜欢的外汇数据提供商。',
      },
      {
        id: 'jobs',
        title: '钩子与后台任务',
        text: '响应新交易，并按小时运行同步任务。',
      },
    ],
    storeTitle: '内置插件商店',
    storeText: '任何带有 ohmyshares-plugin 主题的公开 GitHub 仓库都会自动出现在每个商店中。在管理面板中即可安装、配置和升级。',
    storeCta: '浏览插件',
    sdkCta: '阅读插件 SDK',
  },
  install: {
    eyebrow: '自托管',
    title: '五分钟即可运行',
    lead: '一个官方 Docker 镜像，同时支持 amd64 和 arm64。每次启动时自动执行数据库迁移。',
    steps: [
      {
        title: '配置',
        text: '保存 docker-compose.yml，将 .env.example 下载为 .env 并设置数据库密码。',
      },
      {
        title: '启动',
        text: '生成 APP_KEY，写入 .env，然后运行 docker compose up -d。',
      },
      {
        title: '登录',
        text: '创建第一个用户（该用户将成为管理员），然后打开 http://localhost:8000。',
      },
    ],
    tabCompose: 'docker-compose.yml',
    tabTerminal: '终端',
    copy: '复制',
    copied: '已复制',
    updateTitle: '更新',
    updateText: '拉取新镜像并重启。如需完全掌控，可固定发布标签，例如 ohmyshares/ohmyshares:1.0.0。',
    reqTitle: '系统要求',
    req: ['Docker 及 Compose v2', 'MySQL 8.4（已包含）', 'x86-64 或 ARM64 主机'],
  },
  privacy: {
    eyebrow: '为什么选择自托管',
    title: '你的钱，与他人无关',
    lead: '财务历史是你最敏感的数据。OhMyShares 让它待在应有的地方——你的手中。',
    items: [
      { id: 'data', title: '你的服务器，你的数据库', text: '所有数据都存放在你自己的 MySQL 中。无需云账户，没有供应商锁定。' },
      { id: 'tracking', title: '无追踪，无广告', text: '没有分析脚本，没有数据中间商，也没有“免费版”陷阱。' },
      { id: 'open', title: '开源', text: 'AGPL-3.0：审计代码、fork 项目、回馈社区。' },
      { id: 'cost', title: '永久免费', text: '无需订阅。你只需为已经拥有的硬件付费。' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: '常见问题解答',
    items: [
      {
        q: 'OhMyShares 真的免费吗？',
        a: '是的。它基于 AGPL-3.0 许可证开源，没有任何付费版本——你只需承担自己的托管费用。',
      },
      {
        q: '我的数据存储在哪里？',
        a: '存储在你自己服务器上的 MySQL 数据库中。OhMyShares 不会将你的投资组合发送到任何地方。',
      },
      {
        q: '可以从哪些券商导入？',
        a: '导入格式由插件提供。你可以从内置商店安装，或使用插件 SDK 为你的券商创建一个——解析器通常只是一个 PHP 类。',
      },
      {
        q: '价格和股息数据从哪里来？',
        a: '来自你安装的市场数据插件，因此你可以选择覆盖你所在交易所的数据源。自定义资产可以手动录入价格。',
      },
      {
        q: '需要什么硬件？',
        a: '任何能运行 Docker 的机器：VPS、家庭服务器或 NAS。镜像同时发布 linux/amd64 和 linux/arm64 版本。',
      },
      {
        q: '多人可以共用一个实例吗？',
        a: '可以。OhMyShares 支持多用户：第一个账户是管理员，可以管理用户、插件和汇率。公开注册是可选的。',
      },
    ],
  },
  cta: {
    title: '重新掌控你的投资',
    lead: '几分钟内部署 OhMyShares，私密地查看你的完整投资组合。',
    primary: '立即开始',
    secondary: '查看源代码',
  },
  footer: {
    tagline: '面向长期投资者的开源、自托管投资组合追踪器。',
    product: '产品',
    resources: '资源',
    community: '社区',
    dockerHub: 'Docker Hub',
    pluginSdk: '插件 SDK',
    pluginStore: '插件商店',
    contributing: '参与贡献',
    security: '安全策略',
    issues: '报告问题',
    license: '许可证',
    rights: '基于 AGPL-3.0 许可证发布。',
  },
};
