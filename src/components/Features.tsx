import {
  ArrowLeftRight,
  Braces,
  Briefcase,
  Building2,
  Coins,
  FileUp,
  Gem,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { Reveal, SectionHeader } from './ui';

const ICONS: Record<string, LucideIcon> = {
  portfolios: Briefcase,
  operations: ArrowLeftRight,
  import: FileUp,
  currency: Coins,
  custom: Gem,
  companies: Building2,
  users: Users,
  api: Braces,
  mobile: Smartphone,
};

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="container-page grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {t.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="px-4 text-center">
            <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</div>
            <div className="mx-auto mt-1 max-w-[16rem] text-sm text-zinc-500">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useI18n();

  return (
    <section id={SECTIONS.features} className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} lead={t.features.lead} />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[item.id];
            return (
              <Reveal key={item.id} delay={(i % 3) * 90} className="group card relative overflow-hidden p-6 transition hover:border-brand-500/30 hover:bg-white/[0.04]">
                <div className="glow -top-24 -right-24 size-56 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [--glow-color:rgb(53_186_148/0.18)]" />
                <div className="flex size-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-300">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
