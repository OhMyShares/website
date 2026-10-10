import type { Dict } from './en';

export const fr: Dict = {
  meta: {
    title: 'OhMyShares — suivi de portefeuille d’investissement open source et auto-hébergé',
    description:
      'Suivez actions, obligations, cryptomonnaies et actifs personnalisés chez plusieurs courtiers et dans plusieurs devises. Gratuit, open source (AGPL-3.0) et auto-hébergé avec Docker. Vos données restent sur votre serveur.',
  },
  nav: {
    features: 'Fonctionnalités',
    analytics: 'Analyses',
    plugins: 'Plugins',
    install: 'Auto-hébergement',
    faq: 'FAQ',
    cta: 'Commencer',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },
  hero: {
    badge: 'Open source · Auto-hébergé · Gratuit pour toujours',
    titleA: 'Tous vos investissements.',
    titleB: 'Un seul tableau de bord privé.',
    subtitle:
      'OhMyShares est un outil de suivi de portefeuille auto-hébergé pour les actions, obligations, cryptomonnaies et tout ce que vous possédez. Chaque opération, dividende, frais et impôt — chez tous vos courtiers et dans toutes les devises — sur votre propre serveur.',
    primary: 'Déployer avec Docker',
    secondary: 'Étoile sur GitHub',
    points: ['Licence AGPL-3.0', 'linux/amd64 et arm64', '12 langues d’interface'],
  },
  mock: {
    portfolio: 'Portefeuille principal',
    live: 'En direct',
    value: 'Valeur actuelle',
    totalReturn: 'Rendement total',
    income: 'Dividendes et coupons',
    growth: 'Croissance du portefeuille',
    allocation: 'Par type d’actif',
    positions: 'Principales positions',
    positionsCount: 'positions',
    assets: ['Actions', 'Obligations', 'Crypto', 'Liquidités'],
    periods: ['1M', '6M', '1A', 'Tout'],
  },
  stats: [
    { value: '155', label: 'devises avec taux croisés automatiques' },
    { value: '8', label: 'types d’opérations — des achats aux impôts' },
    { value: '12', label: 'langues d’interface' },
    { value: '100%', label: 'de vos données restent sur votre serveur' },
  ],
  features: {
    eyebrow: 'Fonctionnalités',
    title: 'Tout ce qu’il faut pour suivre votre rendement réel',
    lead: 'Ni un tableur bricolé, ni un SaaS qui revend vos données. Un registre de portefeuille complet, conçu pour les investisseurs de long terme.',
    items: [
      {
        id: 'portfolios',
        title: 'Portefeuilles illimités',
        text: 'Séparez vos comptes-titres, retraite et crypto. Clonez un portefeuille en un clic pour simuler des scénarios « et si ».',
      },
      {
        id: 'operations',
        title: 'Tous les types d’opérations',
        text: 'Achats, ventes, dividendes, coupons, frais, impôts, dépôts et retraits — pour un rendement qui reflète la réalité, pas des gains sur le papier.',
      },
      {
        id: 'import',
        title: 'Import des relevés de courtier',
        text: 'Importez un relevé de courtier et récupérez toutes les opérations en quelques secondes. Réimporter un relevé qui se chevauche est sans risque — les doublons sont ignorés.',
      },
      {
        id: 'currency',
        title: 'Vraiment multidevise',
        text: '155 devises. Chaque portefeuille s’affiche dans la devise de votre choix, avec des taux croisés calculés automatiquement.',
      },
      {
        id: 'custom',
        title: 'Actifs personnalisés',
        text: 'Immobilier, dépôts, capital-investissement ou montre ancienne — suivez n’importe quoi avec votre propre historique de prix.',
      },
      {
        id: 'companies',
        title: 'Informations sur les sociétés',
        text: 'Graphiques de cours, historique des dividendes et données sectorielles pour chaque ticker — actions, ETF, obligations, fonds et crypto.',
      },
      {
        id: 'users',
        title: 'Multi-utilisateur avec rôles',
        text: 'Hébergez-le pour votre famille ou votre club d’investissement. Les administrateurs gèrent utilisateurs, plugins et taux de change.',
      },
      {
        id: 'api',
        title: 'API REST documentée',
        text: 'Documentation OpenAPI (Swagger) incluse — automatisez les imports, créez des bots ou connectez vos propres outils.',
      },
      {
        id: 'mobile',
        title: 'Sur tous les écrans',
        text: 'Application web responsive et installable, à l’aise sur ordinateur, tablette et smartphone.',
      },
    ],
  },
  analytics: {
    eyebrow: 'Analyses',
    title: 'Comprenez votre portefeuille en un coup d’œil',
    lead: 'OhMyShares transforme vos opérations brutes en réponses claires : combien vous avez réellement gagné, où est votre argent et ce qui vous rapporte.',
    bullets: [
      {
        title: 'Performance honnête',
        text: 'Plus-values latentes et réalisées, dividendes et coupons, rendement total — nets de frais et d’impôts.',
      },
      {
        title: 'Répartition détaillée',
        text: 'Par type d’actif, secteur, devise et émetteur, ainsi que la concentration de la plus grosse position et du top 5.',
      },
      {
        title: 'Revenus passifs par année',
        text: 'Dividendes, coupons, frais et impôts par année, avec le résultat net pour planifier.',
      },
      {
        title: 'Objectifs et palmarès',
        text: 'Fixez une valeur cible et suivez votre progression. Repérez instantanément vos meilleures et pires positions.',
      },
    ],
    summaryTitle: 'Résumé',
    summary: [
      'Valeur actuelle',
      'Liquidités',
      'Coût des positions ouvertes',
      'Plus-value latente',
      'Plus-value réalisée',
      'Dividendes et coupons',
      'Rendement total',
    ],
    goal: 'Progression de l’objectif',
    sectorsTitle: 'Par secteurs',
    sectors: ['Technologie', 'Finance', 'Santé', 'Énergie', 'Autres'],
    incomeTitle: 'Revenus par année',
    incomeLegend: ['Dividendes', 'Coupons'],
  },
  plugins: {
    eyebrow: 'Écosystème de plugins',
    title: 'Personnalisez-le avec des plugins',
    lead: 'Données de marché, formats de courtiers et taux de change proviennent de plugins — choisissez les fournisseurs qui couvrent vos marchés, ou écrivez le vôtre en PHP.',
    caps: [
      {
        id: 'history',
        title: 'Données de marché',
        text: 'Historique des cours et dividendes depuis n’importe quelle bourse ou API de confiance.',
      },
      {
        id: 'import',
        title: 'Importateurs de relevés',
        text: 'Apprenez à OhMyShares un nouveau format de relevé : CSV, XLSX, n’importe lequel.',
      },
      {
        id: 'rates',
        title: 'Taux de change',
        text: 'Branchez votre banque centrale ou votre fournisseur de devises préféré.',
      },
      {
        id: 'jobs',
        title: 'Hooks et tâches en arrière-plan',
        text: 'Réagissez aux nouvelles opérations et lancez des synchronisations horaires.',
      },
    ],
    storeTitle: 'Boutique de plugins intégrée',
    storeText: 'Tout dépôt GitHub public portant le topic ohmyshares-plugin apparaît automatiquement dans chaque boutique. Installez, configurez et mettez à jour depuis le panneau d’administration.',
    storeCta: 'Parcourir les plugins',
    sdkCta: 'Lire le Plugin SDK',
  },
  install: {
    eyebrow: 'Auto-hébergement',
    title: 'Opérationnel en cinq minutes',
    lead: 'Une image Docker officielle pour amd64 et arm64. Les migrations de base de données s’exécutent automatiquement à chaque démarrage.',
    steps: [
      {
        title: 'Configurer',
        text: 'Enregistrez docker-compose.yml, téléchargez .env.example sous le nom .env et définissez les mots de passe de la base de données.',
      },
      {
        title: 'Lancer',
        text: 'Générez APP_KEY, ajoutez-la dans .env et exécutez docker compose up -d.',
      },
      {
        title: 'Se connecter',
        text: 'Créez le premier utilisateur — il devient administrateur — et ouvrez http://localhost:8000.',
      },
    ],
    tabCompose: 'docker-compose.yml',
    tabTerminal: 'Terminal',
    copy: 'Copier',
    copied: 'Copié',
    updateTitle: 'Mise à jour',
    updateText: 'Récupérez la nouvelle image et redémarrez. Épinglez une version comme ohmyshares/ohmyshares:1.0.0 pour garder le contrôle.',
    reqTitle: 'Prérequis',
    req: ['Docker avec Compose v2', 'MySQL 8.4 (inclus)', 'Hôte x86-64 ou ARM64'],
  },
  privacy: {
    eyebrow: 'Pourquoi l’auto-hébergement',
    title: 'Votre argent ne regarde que vous',
    lead: 'Votre historique financier est la donnée la plus sensible que vous possédez. OhMyShares la garde là où elle doit être — chez vous.',
    items: [
      { id: 'data', title: 'Votre serveur, votre base de données', text: 'Tout est stocké dans votre propre MySQL. Pas de compte cloud, pas d’enfermement.' },
      { id: 'tracking', title: 'Ni pistage, ni publicité', text: 'Pas de scripts d’analyse, pas de courtiers en données, pas de piège « offre gratuite ».' },
      { id: 'open', title: 'Open source', text: 'AGPL-3.0 : auditez le code, forkez-le, contribuez.' },
      { id: 'cost', title: 'Gratuit pour toujours', text: 'Aucun abonnement. Vous ne payez que le matériel que vous possédez déjà.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        q: 'OhMyShares est-il vraiment gratuit ?',
        a: 'Oui. Il est open source sous licence AGPL-3.0. Il n’existe aucune offre payante — vous ne payez que votre propre hébergement.',
      },
      {
        q: 'Où sont stockées mes données ?',
        a: 'Dans la base MySQL de votre propre serveur. OhMyShares n’envoie votre portefeuille nulle part.',
      },
      {
        q: 'Depuis quels courtiers puis-je importer ?',
        a: 'Les formats d’import sont fournis par des plugins. Installez-les depuis la boutique intégrée ou créez-en un pour votre courtier avec le Plugin SDK — un parseur tient généralement en une seule classe PHP.',
      },
      {
        q: 'D’où viennent les cours et les dividendes ?',
        a: 'Des plugins de données de marché que vous installez : vous choisissez donc les fournisseurs qui couvrent vos bourses. Les actifs personnalisés acceptent des prix saisis manuellement.',
      },
      {
        q: 'De quel matériel ai-je besoin ?',
        a: 'N’importe quelle machine capable d’exécuter Docker : un VPS, un serveur domestique ou un NAS. Les images sont publiées pour linux/amd64 et linux/arm64.',
      },
      {
        q: 'Plusieurs personnes peuvent-elles utiliser une même instance ?',
        a: 'Oui. OhMyShares est multi-utilisateur : le premier compte est administrateur et gère utilisateurs, plugins et taux de change. L’inscription publique est facultative.',
      },
    ],
  },
  cta: {
    title: 'Reprenez le contrôle de vos investissements',
    lead: 'Déployez OhMyShares en quelques minutes et visualisez tout votre portefeuille — en toute confidentialité.',
    primary: 'Commencer',
    secondary: 'Voir le code source',
  },
  footer: {
    tagline: 'Suivi de portefeuille open source et auto-hébergé pour les investisseurs de long terme.',
    product: 'Produit',
    resources: 'Ressources',
    community: 'Communauté',
    dockerHub: 'Docker Hub',
    pluginSdk: 'Plugin SDK',
    pluginStore: 'Boutique de plugins',
    contributing: 'Contribuer',
    security: 'Politique de sécurité',
    issues: 'Signaler un problème',
    license: 'Licence',
    rights: 'Distribué sous licence AGPL-3.0.',
  },
};
