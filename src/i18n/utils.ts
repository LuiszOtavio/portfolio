import { pt, type TranslationKey } from './pt';
import { en } from './en';

export const languages = {
  pt: { label: 'PT', htmlLang: 'pt-BR', home: '/' },
  en: { label: 'EN', htmlLang: 'en', home: '/en/' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

const dictionaries: Record<Lang, Record<TranslationKey, string>> = { pt, en };

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: TranslationKey) => dictionaries[lang][key];
}

/** Equivalent path of the current page in the target language. */
export function getLocalizedPath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const rest =
    current === defaultLang ? url.pathname : url.pathname.replace(`/${current}`, '') || '/';
  return target === defaultLang ? rest : `/${target}${rest}`;
}
