import { ArrowRight, Check, TrendingUp } from 'lucide-react';
import { LINKS, SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { AreaChart, Donut } from './charts';
import { GithubIcon } from './ui';

const GROWTH = [100, 104, 102, 108, 113, 111, 118, 124, 121, 129, 136, 133, 141, 149, 146, 155, 162, 168];
const INVESTED = [100, 100, 100, 105, 105, 110, 110, 115, 115, 120, 120, 125, 125, 130, 130, 135, 135, 137];
const ALLOCATION = [
  { value: 58, color: '#35ba94' },
  { value: 22, color: '#38bdf8' },
  { value: 12, color: '#a78bfa' },
  { value: 8, color: '#71717a' },
];
const POSITIONS = [
  { ticker: 'AAPL', share: 18.2, change: 32.1 },
  { ticker: 'VOO', share: 14.6, change: 18.9 },
  { ticker: 'MSFT', share: 12.3, change: 27.4 },
  { ticker: 'BTC', share: 8.1, change: 54.0 },
  { ticker: 'T 4¼ 30', share: 6.4, change: -1.2 },
];

function DashboardMock() {
  const { t } = useI18n();

  return (
    <div className="card relative overflow-hidden p-4 shadow-2xl shadow-black/60 sm:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-400/60 to-transparent" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-sm font-medium text-white">{t.mock.portfolio}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2 py-0.5 text-[11px] font-medium text-brand-300">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-400" />
            {t.mock.live}
          </span>
        </div>
        <div className="flex rounded-lg bg-white/[0.04] p-0.5 text-[11px] font-medium">
          {t.mock.periods.map((p, i) => (
            <span key={p} className={`rounded-md px-2 py-1 ${i === 2 ? 'bg-white/10 text-white' : 'text-zinc-500'}`}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: t.mock.value, value: '$168,420', sub: '+2.4%' },
          { label: t.mock.totalReturn, value: '+$40,205', sub: '+31.4%' },
          { label: t.mock.income, value: '$4,215', sub: '+12.8%' },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="truncate text-[11px] text-zinc-500">{kpi.label}</div>
            <div className="mt-1 text-sm font-semibold tracking-tight text-white tabular-nums sm:text-xl">{kpi.value}</div>
            <div className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-brand-400">
              <TrendingUp className="size-3" />
              {kpi.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.6fr_1fr]">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="text-xs font-medium text-zinc-400">{t.mock.growth}</div>
          <div className="mt-3 h-36 sm:h-44">
            <AreaChart id="hero" values={GROWTH} baseline={INVESTED} />
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="text-xs font-medium text-zinc-400">{t.mock.allocation}</div>
          <div className="mt-3 flex items-center gap-4">
            <Donut segments={ALLOCATION} size={104} stroke={12}>
              <span className="text-sm font-semibold text-white">24</span>
              <span className="text-[10px] text-zinc-500">{t.mock.positionsCount}</span>
            </Donut>
            <ul className="space-y-1.5 text-[11px]">
              {t.mock.assets.map((name, i) => (
                <li key={name} className="flex items-center gap-2">
                  <span className="size-2 rounded-sm" style={{ background: ALLOCATION[i].color }} />
                  <span className="text-zinc-400">{name}</span>
                  <span className="ms-auto ps-2 text-zinc-200 tabular-nums">{ALLOCATION[i].value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:block">
        <div className="text-xs font-medium text-zinc-400">{t.mock.positions}</div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {POSITIONS.map((pos) => (
            <div key={pos.ticker} className="rounded-lg bg-white/[0.03] px-2.5 py-2">
              <div className="truncate font-mono text-[11px] font-semibold text-white">{pos.ticker}</div>
              <div className="mt-1 flex items-baseline justify-between gap-1">
                <span className="text-[10px] text-zinc-500 tabular-nums">{pos.share}%</span>
                <span className={`text-[10px] font-medium tabular-nums ${pos.change >= 0 ? 'text-brand-400' : 'text-rose-400'}`}>
                  {pos.change >= 0 ? '+' : ''}
                  {pos.change.toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow -top-64 left-1/2 h-[820px] w-[1300px] -translate-x-1/2 [--glow-color:rgb(53_186_148/0.22)]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 ps-1 pe-3 text-xs text-zinc-300 transition hover:border-brand-500/40"
          >
            <span className="rounded-full bg-brand-500 px-2 py-0.5 font-semibold text-ink-950">AGPL-3.0</span>
            {t.hero.badge}
            <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </a>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            {t.hero.titleA}
            <br />
            <span className="text-gradient">{t.hero.titleB}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-zinc-400 sm:text-lg">{t.hero.subtitle}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`#${SECTIONS.install}`} className="btn btn-primary w-full px-6 sm:w-auto">
              {t.hero.primary}
              <ArrowRight className="size-4 rtl:-scale-x-100" />
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn-ghost w-full px-6 sm:w-auto">
              <GithubIcon className="size-4" />
              {t.hero.secondary}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            {t.hero.points.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Check className="size-4 text-brand-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="glow -inset-x-24 -inset-y-20 [--glow-color:rgb(53_186_148/0.14)]" />
          <div className="relative">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}
