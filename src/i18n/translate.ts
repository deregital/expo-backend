import { I18n, Scope, TranslateOptions } from 'i18n-js';

import esJson from '@/i18n/es';
import { Paths } from '@/shared/errors/dotType';

const translations: Record<string, typeof esJson> = {
  es: esJson,
};

export const i18n = new I18n(translations, {
  defaultLocale: 'es',
  locale: 'es',
  missingTranslationPrefix: 'TRANSLATION MISSING: ',
});

type Translations = Paths<(typeof translations)['es']>;

// Extracts variables from a string interpolated with {{var}}
type VariablesFromString<S extends string> =
  S extends `${string}{{${infer Var}}}${infer Rest}`
    ? Var | VariablesFromString<Rest>
    : never;

// Extracts the value from a path
type ValueFromPath<T, P extends string> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? ValueFromPath<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

// Extracts variables from a key
type VariablesFromKey<K extends Translations> = VariablesFromString<
  ValueFromPath<typeof esJson, K>
>;

// remove the [key: string]: any; from TranslateOptions
// Utility type to remove index signatures
type CleanTranslateOptions = Pick<
  TranslateOptions,
  'defaultValue' | 'count' | 'scope' | 'defaults' | 'missingBehavior'
>;

type CustomTranslateOptions<Keys extends Translations> =
  CleanTranslateOptions & {
    [K in VariablesFromKey<Keys>]: string;
  };

export function translate<Keys extends Translations>(
  key: Keys extends `${string}.${string}` ? Keys : never,
  params?: VariablesFromKey<Keys> extends never
    ? CleanTranslateOptions
    : CustomTranslateOptions<Keys>,
): string {
  return i18n.t(key as Scope, params);
}
