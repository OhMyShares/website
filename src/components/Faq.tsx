import { Plus } from 'lucide-react';
import { SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { Reveal, SectionHeader } from './ui';

export function Faq() {
  const { t } = useI18n();

  return (
    <section id={SECTIONS.faq} className="py-24 sm:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Reveal className="mt-12 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-white/[0.02]">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-start font-medium text-white">
                {item.q}
                <Plus className="size-5 shrink-0 text-zinc-500 transition duration-300 group-open:rotate-45 group-open:text-brand-400" />
              </summary>
              <p className="-mt-1 pb-5 text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
