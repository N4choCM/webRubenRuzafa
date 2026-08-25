import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from 'react-icons/hi';
import heroImage from '../../assets/img/coach-hero.webp';
import { NAV_HEIGHT } from '../../constants/layout';
import './Banner.css';

const Banner = () => {
  const { t } = useTranslation();
  const sloganLines = t('hero.slogan').split('\n');

  return (
    <section id="home" className="hero">
      <img
        src={heroImage}
        className="hero__image"
        alt="Rubén Ruzafa"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__overlay" />
      <div className="hero__vignette" aria-hidden />

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-line">{t('hero.subtitle.champion')}</span>
            <span className="hero__badge-line hero__badge-line--muted">{t('hero.subtitle.experience')}</span>
          </div>
          <h1 className="hero__slogan">
            {sloganLines.map((line, i) => (
              <span key={i} className={i === 1 ? 'hero__slogan-line hero__slogan-line--accent' : 'hero__slogan-line'}>
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <Link
        to="about"
        smooth
        duration={600}
        offset={-NAV_HEIGHT}
        className="hero__scroll"
        aria-label={t('hero.scroll')}
      >
        <span className="hero__scroll-icon">
          <HiChevronDown />
        </span>
      </Link>
    </section>
  );
};

export default Banner;
