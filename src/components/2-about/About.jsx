import { useTranslation } from 'react-i18next';
import Run from '../../assets/img/running_biography.webp';
import Swim from '../../assets/img/swimming_biography.webp';
import SectionHeader from '../core/SectionHeader';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  const nowParagraphs = t('about.now.paragraphs', { returnObjects: true });
  const careerParagraphs = t('about.career.paragraphs', { returnObjects: true });
  const highlights = t('about.highlights.items', { returnObjects: true });

  return (
    <section id="about" className="anchor about-section">
      <div className="container">
        <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />

        <div className="about-grid about-grid--now">
          <div className="about-grid__content">
            <span className="about-tag">{t('about.now.title')}</span>
            <div className="about-prose">
              {nowParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="about-grid__media">
            <img src={Swim} className="about-photo" alt="Rubén Ruzafa swimming" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="about-highlights">
          <h3 className="about-highlights__title">{t('about.highlights.title')}</h3>
          <div className="about-highlights__grid">
            {highlights.map((item, i) => (
              <div className="highlight-stat" key={i}>
                <span className="highlight-stat__value">{item.value}</span>
                <span className="highlight-stat__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-grid about-grid--career">
          <div className="about-grid__media">
            <img src={Run} className="about-photo" alt="Rubén Ruzafa running" loading="lazy" decoding="async" />
          </div>
          <div className="about-grid__content">
            <span className="about-tag about-tag--muted">{t('about.career.title')}</span>
            <div className="about-prose">
              {careerParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
