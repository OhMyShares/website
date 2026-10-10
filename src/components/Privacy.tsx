import { Database, EyeOff, HandCoins, Scale, type LucideIcon } from 'lucide-react';
import { useI18n } from '../i18n';
import { Reveal, SectionHeader } from './ui';

const ICONS: Record<string, LucideIcon> = {
  data: Database,
  tracking: EyeOff,
  open: Scale,
  cost: HandCoins,
};

export function Privacy() {
  const { t } = useI18n();

  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015] py-24 sm:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={t.privacy.eyebrow} title={t.privacy.title} lead={t.privacy.lead} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {t.privacy.items.map((item, i) => {
            const Icon = ICONS[item.id];
            return (
              <Reveal key={item.id} delay={i * 80} className="bg-ink-950 p-6 transition hover:bg-ink-900">
                <Icon className="size-6 text-brand-300" />
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
