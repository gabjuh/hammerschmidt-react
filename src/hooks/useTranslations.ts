// import { useLanguage } from '../context/LanguageContext';
// import rawTranslations from './translations.json'; // your flat object

// export const useTranslation = () => {
//   const { lang } = useLanguage();

//   const langSuffix = lang.charAt(0).toUpperCase() + lang.slice(1); // "hu" -> "Hu"

//   const t = (baseKey: string): string => {
//     const fullKey = `${baseKey}${langSuffix}`;
//     const fallbackKey = `${baseKey}En`;
//     return rawTranslations[fullKey] || rawTranslations[fallbackKey] || baseKey;
//   };

//   return { t };
// };
