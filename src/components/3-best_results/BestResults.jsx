import { useTranslation } from 'react-i18next';
import Pic22 from '../../assets/img/results-2022.webp';
import Pic21 from '../../assets/img/results-2021.webp';
import PicMain from '../../assets/img/results-main.webp';
import PicMtb from '../../assets/img/results-mtb.webp';
import './BestResults.css';

const BestResults = () => {
  const { t } = useTranslation();

  const renderAchievements = (key) => {
    const items = t(key, { returnObjects: true });
    return items.map((text, index) => (
      <li className="career-item" key={index}>{text}</li>
    ));
  };

  return (
    <section id="career" className="section anchor career-section">
      <div className="container-fluid">
        <h2 className="section-title text-center">{t('career.title')}</h2>

        <div className="row career-row g-0">
          <div className="col-12 col-lg-6">
            <img className="career-image" src={Pic22} alt="Rubén Ruzafa 2022" loading="lazy" decoding="async" />
          </div>
          <div className="col-12 col-lg-6 career-content">
            <h3>{t('career.2022.year')}</h3>
            <ul>{renderAchievements('career.2022.achievements')}</ul>
          </div>
        </div>

        <div className="row career-row g-0 flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <img className="career-image" src={Pic21} alt="Rubén Ruzafa 2021" loading="lazy" decoding="async" />
          </div>
          <div className="col-12 col-lg-6 career-content">
            <h3>{t('career.2021.year')}</h3>
            <ul>{renderAchievements('career.2021.achievements')}</ul>
          </div>
        </div>

        <div className="row career-row g-0">
          <div className="col-12 col-lg-6">
            <img className="career-image" src={PicMain} alt="Rubén Ruzafa XTERRA World Champion 2008" loading="lazy" decoding="async" />
          </div>
          <div className="col-12 col-lg-6 career-content">
            <h3>{t('career.general.title')}</h3>
            <ul>{renderAchievements('career.general.achievements')}</ul>
          </div>
        </div>

        <div className="row career-row g-0 flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <img className="career-image" src={PicMtb} alt="Rubén Ruzafa MTB" loading="lazy" decoding="async" />
          </div>
          <div className="col-12 col-lg-6 career-content">
            <h3>{t('career.mtb.title')}</h3>
            <ul>{renderAchievements('career.mtb.achievements')}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestResults;
