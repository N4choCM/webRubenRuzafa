import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { HiHome, HiUser, HiBriefcase, HiMail, HiMoon, HiSun } from 'react-icons/hi';
import Logo from '../../assets/img/logo-transparente.png';
import { AppStateContext } from '../../state/AppProvider';
import { getCurrentLanguage } from '../../utils/language';
import { NAV_HEIGHT } from '../../constants/layout';
import './Navbar.css';

const SECTION_IDS = ['home', 'about', 'services', 'contact'];

const NavBar = () => {
  const { state, dispatch } = useContext(AppStateContext);
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentLang, setCurrentLang] = useState(() => getCurrentLanguage(i18n));
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const updateLang = (lng) => setCurrentLang(lng.split('-')[0]);
    updateLang(i18n.resolvedLanguage || i18n.language || 'es');
    i18n.on('languageChanged', updateLang);
    return () => i18n.off('languageChanged', updateLang);
  }, [i18n]);

  useEffect(() => {
    const getSectionTop = (element) => element.getBoundingClientRect().top + window.scrollY;

    const updateActiveSection = () => {
      const reference = window.scrollY + NAV_HEIGHT + 48;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && getSectionTop(el) <= reference) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    navbarCollapseRef.current?.classList.remove('show');
  };

  const handleDarkModeClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
    closeMenu();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  useEffect(() => {
    document.body.classList.remove('app-mode-dark', 'app-mode-light');
    document.body.classList.add(`app-mode-${state.isDarkMode ? 'dark' : 'light'}`);
  }, [state.isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'home', label: t('nav.home'), icon: <HiHome /> },
    { to: 'about', label: t('nav.about'), icon: <HiUser /> },
    { to: 'services', label: t('nav.services'), icon: <HiBriefcase /> },
    { to: 'contact', label: t('nav.contact'), icon: <HiMail /> },
  ];

  return (
    <header className="fixed-top">
      <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
        <div className="container">
          <Link to="home" smooth duration={500} offset={-NAV_HEIGHT} className="navbar-brand">
            <img className="navbar-logo" src={Logo} alt="Rubén Ruzafa" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navItems.map((item) => (
                <li key={item.to} className="nav-item">
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-NAV_HEIGHT}
                    className={`nav-link${activeSection === item.to ? ' active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="nav-link__icon">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              <div className="lang-switcher" role="group" aria-label="Language">
                <button
                  type="button"
                  className={`lang-switcher__btn ${currentLang === 'es' ? 'lang-switcher__btn--active' : ''}`}
                  onClick={() => changeLanguage('es')}
                  aria-pressed={currentLang === 'es'}
                >
                  ES
                </button>
                <button
                  type="button"
                  className={`lang-switcher__btn ${currentLang === 'en' ? 'lang-switcher__btn--active' : ''}`}
                  onClick={() => changeLanguage('en')}
                  aria-pressed={currentLang === 'en'}
                >
                  EN
                </button>
              </div>
              <button type="button" className="navbar-theme-btn" onClick={handleDarkModeClick} aria-label="Toggle theme">
                {state.isDarkMode ? <HiSun /> : <HiMoon />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
