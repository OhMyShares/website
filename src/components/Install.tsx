import { useState } from 'react';
import { FileCode2, RefreshCw, Server, SquareTerminal } from 'lucide-react';
import { LINKS, SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { CopyButton, highlight, Reveal, SectionHeader } from './ui';

const COMPOSE = `services:
  mysql:
    image: mysql:8.4
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: \${DB_ROOT_PASSWORD}
      MYSQL_DATABASE: \${DB_DATABASE}
      MYSQL_USER: \${DB_USERNAME}
      MYSQL_PASSWORD: \${DB_PASSWORD}
    volumes:
      - db-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "127.0.0.1", "--silent"]
      interval: 5s
      timeout: 5s
      retries: 30
      start_period: 30s

  app:
    image: ohmyshares/ohmyshares:latest
    restart: unless-stopped
    depends_on:
      mysql:
        condition: service_healthy
    ports:
      - "8000:8000"
    env_file: .env
    volumes:
      - plugins:/var/www/oms/storage/plugins

volumes:
  db-data:
  plugins:`;

const TERMINAL = `# 1. Configure: get .env next to docker-compose.yml
curl -fsSL -o .env ${LINKS.envExample}

# 2. Launch: generate APP_KEY, put it into .env, start
docker compose run --rm --no-deps app php artisan key:generate --show
docker compose up -d

# 3. Sign in: create the first (admin) user
docker compose exec app php artisan user:create`;

const UPDATE = `docker compose pull app
docker compose up -d`;

const YAML_RULES: Array<[RegExp, 'k' | 's' | 'c' | 'n' | 'f' | 'p']> = [
  [/#.*$/, 'c'],
  [/"[^"]*"/, 's'],
  [/\$\{[A-Z_]+\}/, 'n'],
  [/^\s*-?\s*[a-z_-]+(?=:)/, 'k'],
  [/\b\d+s?\b/, 'f'],
];

const SHELL_RULES: Array<[RegExp, 'k' | 's' | 'c' | 'n' | 'f' | 'p']> = [
  [/#.*$/, 'c'],
  [/https?:\/\/\S+/, 's'],
  [/\b(docker|curl)\b/, 'k'],
  [/\s--?[a-zA-Z-]+/, 'f'],
];

type Tab = 'compose' | 'terminal';

export function Install() {
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>('terminal');
  const labels = { copy: t.install.copy, copied: t.install.copied };
  const source = tab === 'compose' ? COMPOSE : TERMINAL;

  const tabs: { id: Tab; label: string; Icon: typeof FileCode2 }[] = [
    { id: 'terminal', label: t.install.tabTerminal, Icon: SquareTerminal },
    { id: 'compose', label: t.install.tabCompose, Icon: FileCode2 },
  ];

  return (
    <section id={SECTIONS.install} className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow -right-40 -bottom-40 size-[820px] [--glow-color:rgb(53_186_148/0.1)]" />

      <div className="container-page relative">
        <SectionHeader eyebrow={t.install.eyebrow} title={t.install.title} lead={t.install.lead} />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ol className="relative space-y-4">
            {t.install.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="card flex gap-4 p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 font-mono text-sm font-semibold text-brand-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal as="li" delay={300} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="card p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <RefreshCw className="size-4 text-brand-300" />
                    {t.install.updateTitle}
                  </h3>
                  <CopyButton text={UPDATE} labels={labels} />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{t.install.updateText}</p>
                <pre dir="ltr" className="mt-3 overflow-x-auto rounded-lg bg-black/40 p-3 font-mono text-[11.5px] leading-5 text-zinc-300">
                  <code>{highlight(UPDATE, SHELL_RULES)}</code>
                </pre>
              </div>
              <div className="card p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Server className="size-4 text-brand-300" />
                  {t.install.reqTitle}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  {t.install.req.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-brand-400" />
                      {r}
                    </li>
                  ))}
                </ul>
                <a href={LINKS.dockerHub} target="_blank" rel="noreferrer" className="mt-4 inline-block font-mono text-xs text-brand-300 hover:text-brand-200">
                  ohmyshares/ohmyshares ↗
                </a>
              </div>
            </Reveal>
          </ol>

          <Reveal delay={120} className="min-w-0">
            <div className="card flex h-full flex-col overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] px-3 py-2">
                <div role="tablist" className="flex gap-1">
                  {tabs.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={tab === id}
                      onClick={() => setTab(id)}
                      className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs transition ${
                        tab === id ? 'bg-white/[0.08] text-white' : 'text-zinc-500 hover:text-zinc-200'
                      }`}
                    >
                      <Icon className="size-3.5" />
                      {label}
                    </button>
                  ))}
                </div>
                <CopyButton text={source} labels={labels} />
              </div>
              <pre dir="ltr" className="flex-1 overflow-x-auto bg-black/30 p-5 font-mono text-[12.5px] leading-6 text-zinc-300">
                <code>{highlight(source, tab === 'compose' ? YAML_RULES : SHELL_RULES)}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
