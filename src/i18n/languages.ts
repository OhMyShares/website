import { en } from './en';
import { ru } from './ru';
import { zh } from './zh';
import { es } from './es';
import { pt } from './pt';
import { fr } from './fr';
import { hi } from './hi';
import { ja } from './ja';
import { ar } from './ar';

export const LANGUAGES = {
  en: { label: 'English', short: 'EN', dir: 'ltr', dict: en },
  ru: { label: 'Русский', short: 'RU', dir: 'ltr', dict: ru },
  zh: { label: '中文（普通话）', short: 'ZH', dir: 'ltr', dict: zh },
  es: { label: 'Español', short: 'ES', dir: 'ltr', dict: es },
  pt: { label: 'Português', short: 'PT', dir: 'ltr', dict: pt },
  fr: { label: 'Français', short: 'FR', dir: 'ltr', dict: fr },
  hi: { label: 'हिन्दी', short: 'HI', dir: 'ltr', dict: hi },
  ja: { label: '日本語', short: 'JA', dir: 'ltr', dict: ja },
  ar: { label: 'العربية', short: 'AR', dir: 'rtl', dict: ar },
} as const;

export type Lang = keyof typeof LANGUAGES;

export const LANG_CODES = Object.keys(LANGUAGES) as Lang[];

export const DEFAULT_LANG: Lang = 'en';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && Object.hasOwn(LANGUAGES, value);
}

export function langPath(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `${lang}/`;
}
