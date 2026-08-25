import { useTranslation } from 'react-i18next';
import Pic from '../../../assets/img/RubenTogether.webp';
import ServiceList from '../ServiceList';
import '../img-card/ImgCard.css';

const CardImg2 = () => {
  const { t } = useTranslation();
  const items = t('services.competition.items', { returnObjects: true });

  return (
    <div id="competition-support" className="service-block anchor">
      <div className="container">
        <div className="service-block__inner service-block__inner--reverse">
          <div className="service-block__media">
            <div className="service-image-wrap">
              <img src={Pic} className="service-image" alt="Competition support" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="service-block__content">
            <span className="service-block__number">04</span>
            <h3 className="service-block__title">{t('services.competition.title')}</h3>
            <p className="service-block__heading">{t('services.competition.heading')}</p>
            <ServiceList items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg2;
