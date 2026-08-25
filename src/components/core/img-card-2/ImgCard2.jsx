import { useTranslation } from 'react-i18next';
import IndividualPic from '../../../assets/img/IndividualTraining2.webp';
import GroupPic from '../../../assets/img/GroupTraining.webp';
import ServiceList from '../ServiceList';
import '../img-card/ImgCard.css';

const ImgCard2 = () => {
  const { t } = useTranslation();
  const items = t('services.inPerson.items', { returnObjects: true });

  const formats = [
    {
      key: 'individual',
      image: IndividualPic,
      alt: 'Individual training',
    },
    {
      key: 'group',
      image: GroupPic,
      alt: 'Group training',
    },
  ];

  return (
    <div id="in-person-training" className="service-block anchor">
      <div className="container">
        <div className="service-block__inner">
          <div className="service-block__content">
            <span className="service-block__number">02</span>
            <h3 className="service-block__title">{t('services.inPerson.title')}</h3>
            <p className="service-block__heading">{t('services.inPerson.heading')}</p>
            <p className="service-block__subtitle">{t('services.inPerson.includes')}</p>
            <ServiceList items={items} />
          </div>

          <div className="service-block__media">
            <div className="in-person-gallery">
              {formats.map(({ key, image, alt }) => (
                <article className="in-person-card" key={key}>
                  <div className="in-person-card__media">
                    <img src={image} alt={alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="in-person-card__body">
                    <h4 className="in-person-card__title">{t(`services.inPerson.${key}`)}</h4>
                    <p className="in-person-card__note">{t(`services.inPerson.${key}Note`)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCard2;
