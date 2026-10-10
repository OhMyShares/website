import { CircleCheck } from 'lucide-react';
import { SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { Bars, Donut } from './charts';
import { Reveal, SectionHeader } from './ui';

const SUMMARY = ['$168,420', '$7,960', '$128,590', '+$31,870', '+$4,120', '$4,215', '+$40,205'];
const SUMMARY_ACCENT = [false, false, false, true, true, true, true];
const SECTORS = [
  { value: 34, color: '#35ba94' },
  { value: 21, color: '#38bdf8' },
  { value: 16, color: '#a78bfa' },
  { value: 11, color: '#fbbf24' },
  { value: 18, color: '#52525b' },
];
const INCOME = [
  { label: '2021', values: [820, 140] },
  { label: '2022', values: [1240, 310] },
  { label: '2023', values: [1980, 420] },
  { label: '2024', values: [2610, 560] },
  { label: '2025', values: [3350, 865] },
];
const INCOME_COLORS = ['#35ba94', '#38bdf8'];
const GOAL = 67;

export function Analytics() {
  const { t } = useI18n();

  return (
    <section id={SECTIONS.analytics} className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow top-1/4 -left-72 size-[760px] [--glow-color:rgb(53_186_148/0.1)]" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeader center={false} eyebrow={t.analytics.eyebrow} title={t.analytics.title} lead={t.analytics.lead} />
          <ul className="mt-10 space-y-6">
            {t.analytics.bullets.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 80} className="flex gap-4">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-400" />
                <div>
                  <h3 className="font-semibold text-white">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
          <div className="card p-5 sm:row-span-2">
            <div className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">{t.analytics.summaryTitle}</div>
            <dl className="mt-4 divide-y divide-white/[0.06] text-sm">
              {t.analytics.summary.map((label, i) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-zinc-400">{label}</dt>
                  <dd className={`font-medium tabular-nums ${SUMMARY_ACCENT[i] ? 'text-brand-400' : 'text-white'}`}>{SUMMARY[i]}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">{t.analytics.goal}</span>
                <span className="font-medium text-white tabular-nums">{GOAL}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-linear-to-r from-brand-600 to-brand-300" style={{ width: `${GOAL}%` }} />
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">{t.analytics.sectorsTitle}</div>
            <div className="mt-4 flex items-center gap-4">
              <Donut segments={SECTORS} size={96} stroke={11} />
              <ul className="min-w-0 flex-1 space-y-1.5 text-[11px]">
                {t.analytics.sectors.map((name, i) => (
                  <li key={name} className="flex items-center gap-2">
                    <span className="size-2 shrink-0 rounded-sm" style={{ background: SECTORS[i].color }} />
                    <span className="truncate text-zinc-400">{name}</span>
                    <span className="ms-auto text-zinc-200 tabular-nums">{SECTORS[i].value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">{t.analytics.incomeTitle}</div>
              <div className="flex gap-3 text-[10px] text-zinc-500">
                {t.analytics.incomeLegend.map((name, i) => (
                  <span key={name} className="flex items-center gap-1">
                    <span className="size-2 rounded-sm" style={{ background: INCOME_COLORS[i] }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Bars groups={INCOME} colors={INCOME_COLORS} height={96} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
