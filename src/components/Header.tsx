import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Menu, Star, X } from 'lucide-react';
import { LINKS, SECTIONS } from '../config';
import { LANG_CODES, LANGUAGES, useI18n } from '../i18n';
import { formatCount, GithubIcon, Logo, useGithubStars } from './ui';

function LanguageMenu() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${LANGUAGES[lang].label}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
      >
        <Globe className="size-4" />
        {LANGUAGES[lang].short}
        <ChevronDown className={`size-3.5 text-zinc-500 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          aria-label={t.nav.language}
          className="absolute end-0 top-full z-10 mt-2 max-h-[min(70vh,26rem)] w-52 overflow-y-auto rounded-xl border border-white/10 bg-ink-900 p-1 shadow-2xl shadow-black/50"
        >
          {LANG_CODES.map((code) => (
            <li key={code}>
              <button
                type="button"
                lang={code}
                aria-current={lang === code ? 'true' : undefined}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm transition ${
                  lang === code ? 'bg-white/10 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{LANGUAGES[code].label}</span>
                {lang === code ? (
                  <Check className="size-4 text-brand-400" />
                ) : (
                  <span className="text-[11px] font-semibold text-zinc-600">{LANGUAGES[code].short}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const { t, lang, setLang } = useI18n();
  const stars = useGithubStars(LINKS.githubApi);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const links = [
    { href: `#${SECTIONS.features}`, label: t.nav.features },
    { href: `#${SECTIONS.analytics}`, label: t.nav.analytics },
    { href: `#${SECTIONS.plugins}`, label: t.nav.plugins },
    { href: `#${SECTIONS.install}`, label: t.nav.install },
    { href: `#${SECTIONS.faq}`, label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white" onClick={() => setOpen(false)}>
          <Logo className="size-8" />
          <span className="text-[17px] tracking-tight">OhMyShares</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageMenu />
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            <GithubIcon className="size-4" />
            <span>GitHub</span>
            {stars !== null && (
              <span className="flex items-center gap-1 border-s border-white/10 ps-2 text-xs text-zinc-400">
                <Star className="size-3 fill-amber-300 text-amber-300" />
                {formatCount(stars)}
              </span>
            )}
          </a>
          <a href={`#${SECTIONS.install}`} className="btn btn-primary py-2">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 hover:text-white lg:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.06] lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg text-zinc-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 px-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                <Globe className="size-4" />
                {t.nav.language}
              </div>
              <div role="group" aria-label={t.nav.language} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {LANG_CODES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    lang={code}
                    aria-pressed={lang === code}
                    onClick={() => setLang(code)}
                    className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-start text-sm transition ${
                      lang === code
                        ? 'border-brand-500/40 bg-brand-500/10 text-white'
                        : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{LANGUAGES[code].label}</span>
                    {lang === code && <Check className="size-4 shrink-0 text-brand-400" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 px-3">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-300">
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
            <a href={`#${SECTIONS.install}`} onClick={() => setOpen(false)} className="btn btn-primary mt-6">
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
