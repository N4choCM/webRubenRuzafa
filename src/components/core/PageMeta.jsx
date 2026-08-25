import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PageMeta = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const applyMeta = () => {
      document.documentElement.lang = (i18n.resolvedLanguage || i18n.language || 'es').split('-')[0];
      document.title = t('meta.title');

      const description = t('meta.description');
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    };

    applyMeta();
    i18n.on('languageChanged', applyMeta);
    return () => i18n.off('languageChanged', applyMeta);
  }, [t, i18n]);

  return null;
};

export default PageMeta;
