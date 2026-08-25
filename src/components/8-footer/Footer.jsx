import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../../assets/img/logo-transparente.png';
import LogoOrca from '../../assets/img/orca.png';
import Logo226ers from '../../assets/img/226ers-transparent.png';
import { SOCIAL_LINKS } from '../../constants/contact';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sponsors">
          <span className="footer-sponsors__label">{t('footer.sponsors')}</span>
          <div className="footer-sponsors__logos">
            <a href="https://www.orca.com/es-es" target="_blank" rel="noopener noreferrer" className="footer-sponsor-link">
              <img src={LogoOrca} className="footer-sponsor-logo footer-sponsor-logo--orca" alt="Orca" loading="lazy" />
            </a>
            <a href="https://www.226ers.com/es/" target="_blank" rel="noopener noreferrer" className="footer-sponsor-link">
              <img src={Logo226ers} className="footer-sponsor-logo footer-sponsor-logo--226ers" alt="226ers" loading="lazy" />
            </a>
          </div>
        </div>

        <div className="footer-main">
          <img className="footer-logo" src={Logo} alt="Rubén Ruzafa" />
          <div className="footer-links">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/cookies">{t('footer.cookies')}</Link>
            <Link to="/legal">{t('footer.legal')}</Link>
          </div>
          <div className="footer-social">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>

        <p className="footer-copy">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
