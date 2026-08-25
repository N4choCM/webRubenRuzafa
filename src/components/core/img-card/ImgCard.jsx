import { useTranslation } from 'react-i18next';
import Pic from '../../../assets/img/EntrenamientosOnline.webp';
import ServiceList from '../ServiceList';
import CardsRow from '../cards-row/CardsRow';
import './ImgCard.css';

const ImgCard = () => {
  const { t } = useTranslation();
  const items = t('services.online.items', { returnObjects: true });

  return (
    <div id="online-training" className="service-block anchor">
      <div className="container">
        <div className="service-block__inner">
          <div className="service-block__media">
            <div className="service-image-wrap">
              <img src={Pic} className="service-image" alt="Online training" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="service-block__content">
            <span className="service-block__number">01</span>
            <h3 className="service-block__title">{t('services.online.title')}</h3>
            <p className="service-block__subtitle">{t('services.online.includes')}</p>
            <ServiceList items={items} />
          </div>
        </div>
        <CardsRow />
      </div>
    </div>
  );
};

export default ImgCard;
