import { LanguagesCodeT } from '../i18n/languages';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLocalizedField = <T extends Record<string, any>>(
  obj: T,
  baseKey: string,
  lang: LanguagesCodeT
): string => {
  const key = `${baseKey}${lang.charAt(0).toUpperCase()}${lang.charAt(1)}`; // e.g. "nameHu"
  return obj[key] ?? obj[`${baseKey}En`] ?? '';
};
