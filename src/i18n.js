// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['querystring', 'cookie'],
      lookupQuerystring: 'lang',
      lookupCookie: 'i18next',
      caches: ['cookie'], // caches the language in cookies to remember the user's language preference
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // the path to the translation files
    },
  });

export default i18n;