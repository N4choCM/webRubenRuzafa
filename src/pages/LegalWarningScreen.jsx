/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LegalWarningScreen = ({ type }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const configs = {
    privacy: {
      title: t('legal.privacy.title'),
      updated: t('legal.privacy.updated'),
      sections: t('legal.privacy.sections', { returnObjects: true }),
    },
    cookies: {
      title: t('legal.cookies.title'),
      sections: t('legal.cookies.sections', { returnObjects: true }),
    },
    legal: {
      title: t('legal.legalNotice.title'),
      sections: t('legal.legalNotice.sections', { returnObjects: true }),
    },
  };

  const config = configs[type] || configs.legal;

  return (
    <div className="container legal-page">
      <h1 className="legal-page__title">{config.title}</h1>
      <div className="legal-page__content">
        {config.updated && <p className="legal-page__updated">{config.updated}</p>}
        {config.sections.map((section, i) => (
          <p key={i}>{section}</p>
        ))}
      </div>
      <Link to="/" className="btn btn-brand mt-4">{t('error.back')}</Link>
    </div>
  );
};

export default LegalWarningScreen;
