import { ArrowRight } from 'lucide-react';
import { LINKS, SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { GithubIcon, Logo, Reveal } from './ui';

export function Cta() {
  const { t } = useI18n();

  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-brand-500/25 bg-linear-to-br from-brand-500/20 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="glow -top-48 left-1/2 h-[420px] w-[860px] -translate-x-1/2 [--glow-color:rgb(53_186_148/0.3)]" />
          <div className="relative">
            <Logo className="mx-auto size-14" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">{t.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-300">{t.cta.lead}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`#${SECTIONS.install}`} className="btn btn-primary px-6">
                {t.cta.primary}
                <ArrowRight className="size-4 rtl:-scale-x-100" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn btn-ghost px-6">
                <GithubIcon className="size-4" />
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.product,
      links: [
        { href: `#${SECTIONS.features}`, label: t.nav.features },
        { href: `#${SECTIONS.analytics}`, label: t.nav.analytics },
        { href: `#${SECTIONS.plugins}`, label: t.nav.plugins },
        { href: `#${SECTIONS.install}`, label: t.nav.install },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { href: LINKS.dockerHub, label: t.footer.dockerHub },
        { href: LINKS.pluginSdk, label: t.footer.pluginSdk },
        { href: LINKS.pluginStore, label: t.footer.pluginStore },
        { href: LINKS.license, label: t.footer.license },
      ],
    },
    {
      title: t.footer.community,
      links: [
        { href: LINKS.github, label: 'GitHub' },
        { href: LINKS.contributing, label: t.footer.contributing },
        { href: LINKS.issues, label: t.footer.issues },
        { href: LINKS.security, label: t.footer.security },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
            <Logo className="size-8" />
            OhMyShares
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{t.footer.tagline}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => {
                const external = link.href.startsWith('http');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="text-zinc-500 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-600 sm:flex-row">
          <span>
            © {year} OhMyShares. {t.footer.rights}
          </span>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-300">
            <GithubIcon className="size-4" />
            OhMyShares/ohmyshares
          </a>
        </div>
      </div>
    </footer>
  );
}
