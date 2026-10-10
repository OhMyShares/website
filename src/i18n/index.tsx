import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Dict } from './en';
import { SITE_URL } from '../config';
import { DEFAULT_LANG, isLang, LANGUAGES, langPath, type Lang } from './languages';

export { LANG_CODES, LANGUAGES, type Lang } from './languages';

const STORAGE_KEY = 'oms.lang';
const BASE = import.meta.env.BASE_URL;

interface I18nValue {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

function langFromPath(): Lang | null {
  const { pathname } = window.location;
  const segment = pathname.startsWith(BASE) ? pathname.slice(BASE.length).split('/')[0] : '';
  return isLang(segment) && segment !== DEFAULT_LANG ? segment : null;
}

function detectLang(): Lang {
  const fromPath = langFromPath();
  if (fromPath) {
    return fromPath;
  }
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (isLang(fromQuery)) {
    return fromQuery;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) {
    return stored;
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const code = tag.split('-')[0].toLowerCase();
    if (isLang(code)) {
      return code;
    }
  }
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    const { dict, dir } = LANGUAGES[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = dict.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);

    const path = `${BASE}${langPath(lang)}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${path}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}${path}`);
    if (window.location.pathname !== path || window.location.search) {
      window.history.replaceState(null, '', `${path}${window.location.hash}`);
    }
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      t: LANGUAGES[lang].dict,
      setLang: (next) => {
        localStorage.setItem(STORAGE_KEY, next);
        setLangState(next);
      },
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
