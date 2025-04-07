import { useEffect, useRef, useState } from 'react';

import { useLanguage } from '../context/LanguageContext';
import { languages, LanguagesCodeT } from '../i18n/languages';

export const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => setOpen(prev => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: LanguagesCodeT) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-xl px-3 py-0 flex items-center gap-1 cursor-pointer rounded"
        onClick={toggleDropdown}
      >
        <span className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          {languages[lang].flag}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          ref={dropdownRef}
          className="absolute right-0 z-10 mt-2 bg-white shadow-md rounded min-w-[3rem]"
        >
          {Object.entries(languages).map(([code, { flag }]) => (
            <li key={code}>
              <button
                onClick={() => handleSelect(code as LanguagesCodeT)}
                className={`block w-full px-3 py-2 text-left text-xl hover:bg-gray-100 ${
                  lang === code ? 'font-bold' : ''
                }`}
              >
                {flag}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
