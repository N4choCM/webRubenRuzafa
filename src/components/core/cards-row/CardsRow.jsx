import { useTranslation } from 'react-i18next';
import './CardsRow.css';
import '../img-card/ImgCard.css';

const CardsRow = () => {
  const { t } = useTranslation();

  const plans = [
    { key: 'monthly', featured: false },
    { key: 'weekly', featured: true },
    { key: 'premium', featured: false },
  ];

  return (
    <div className="pricing-section">
      <p className="pricing-section__title">{t('services.online.plansTitle')}</p>
      <div className="pricing-grid">
        {plans.map(({ key, featured }) => {
          const items = t(`services.online.plans.${key}.items`, { returnObjects: true });
          return (
            <div className={`pricing-card ${featured ? 'pricing-card--featured' : ''}`} key={key}>
              <span className="pricing-card__tier">{t(`services.online.plans.${key}.tier`)}</span>
              <h5 className="pricing-card__title">{t(`services.online.plans.${key}.title`)}</h5>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsRow;
