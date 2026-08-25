import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from '../locales/es.json';
import en from '../locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es',
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

const updateMetaDescription = () => {
  const description = i18n.t('meta.description');
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
};

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng.split('-')[0];
  document.title = i18n.t('meta.title');
  updateMetaDescription();
});

document.documentElement.lang = (i18n.language || 'es').split('-')[0];
document.title = i18n.t('meta.title');
updateMetaDescription();

export default i18n;
