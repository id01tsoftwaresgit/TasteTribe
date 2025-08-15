import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import frCA from './locales/fr-CA.json';

export const resources = {
  en: {
    translation: en,
  },
  'fr-CA': {
    translation: frCA,
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr-CA'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
