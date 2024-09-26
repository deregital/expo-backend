import { I18n, Scope, TranslateOptions } from 'i18n-js';

import esJson from '@/i18n/es.json';
import { Paths } from '@/shared/errors/dotType';

const translations: Record<string, typeof esJson> = {
  es: esJson,
};

export const i18n = new I18n(translations, {
  defaultLocale: 'es',
  locale: 'es',
  missingTranslationPrefix: 'TRANSLATION MISSING: ',
});

type A = (typeof translations)['es'];

type Translations = Paths<(typeof translations)['es']>;

export function translate<Keys extends Translations>(
  key: Keys extends `${string}.${string}` ? Keys : never,
  params: TranslateOptions = {},
) {
  return i18n.t(key as Scope, params);
}
