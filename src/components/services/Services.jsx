import ImgCard from '../core/img-card/ImgCard';
import ImgCard2 from '../core/img-card-2/ImgCard2';
import CardImg from '../core/card-img/CardImg';
import CardImg2 from '../core/card-img2/CardImg2';
import SectionHeader from '../core/SectionHeader';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section anchor services-section">
      <div className="container">
        <SectionHeader eyebrow={t('services.eyebrow')} title={t('services.title')} />
      </div>
      <div className="services-list">
        <ImgCard />
        <ImgCard2 />
        <CardImg />
        <CardImg2 />
      </div>
    </section>
  );
};

export default Services;
