import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ErrorScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="container error-page">
      <h1>{t('error.title')}</h1>
      <p>{t('error.message')}</p>
      <Link to="/" className="btn btn-brand">{t('error.back')}</Link>
    </div>
  );
};

export default ErrorScreen;
