import { useTranslation } from 'react-i18next';
import Pic from '../../../assets/img/RubenTalk.webp';
import ServiceList from '../ServiceList';
import '../img-card/ImgCard.css';

const CardImg = () => {
  const { t } = useTranslation();
  const items = t('services.talks.items', { returnObjects: true });

  return (
    <div id="talks" className="service-block anchor">
      <div className="container">
        <div className="service-block__inner">
          <div className="service-block__media">
            <div className="service-image-wrap">
              <img src={Pic} className="service-image" alt="Rubén Ruzafa talks" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="service-block__content">
            <span className="service-block__number">03</span>
            <h3 className="service-block__title">{t('services.talks.title')}</h3>
            <p className="service-block__heading">{t('services.talks.heading')}</p>
            <p className="service-block__note">{t('services.talks.subtitle')}</p>
            <ServiceList items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
