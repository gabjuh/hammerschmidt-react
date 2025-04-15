export const languages = {
  hu: { label: 'Magyar', flag: '🇭🇺', code: 'hu' as LanguagesCodeT  },
  en: { label: 'English', flag: '🇬🇧', code: 'en' as LanguagesCodeT },
  de: { label: 'Deutsch', flag: '🇩🇪', code: 'de' as LanguagesCodeT  },
};

export type LanguagesCodeT = "hu" | "de" | "en";

export type LanguageCode = keyof typeof languages;
