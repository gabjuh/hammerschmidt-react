import { LanguagesCodeT } from '../i18n/languages';

export const getLanguageKeyEnding = (lang: LanguagesCodeT): string => 
  lang.charAt(0).toUpperCase() + lang.charAt(1) as keyof typeof lang as string;