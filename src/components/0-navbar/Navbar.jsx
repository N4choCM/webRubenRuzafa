import {
  Home20Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular,
  BookContacts20Regular,
  RibbonStar20Regular,
  CalendarLtr20Regular,
  ContactCardGroup20Regular,
  ImageStack20Regular,
  StarEmphasis20Regular
} from "@fluentui/react-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo-transparente.png";
import { AppStateContext } from "../../../src/state/AppProvider";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Navbar.css";
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';
import PhonelinkOffIcon from '@mui/icons-material/PhonelinkOff';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HelpIcon from '@mui/icons-material/Help';

const NavBar = () => {
  const appStateContext = useContext(AppStateContext);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  const handleDarkModeClick = () => {
    appStateContext?.dispatch({ type: "TOGGLE_DARK_MODE" });
    closeMenu();
  };

  const handleTrainingClick = () => {
    appStateContext?.dispatch({ type: "TOGGLE_COACH_SCREEN", payload: true });
    navigate("/training");
    closeMenu();
  };

  const handleBackClick = () => {
    appStateContext?.dispatch({ type: "TOGGLE_COACH_SCREEN", payload: false });
    navigate("/");
    closeMenu();
  };

  const closeMenu = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    document.body.classList.remove("app-mode-dark", "app-mode-light");
    document.body.classList.add(
      `app-mode-${appStateContext?.state.isDarkMode ? "dark" : "light"}`
    );
  }, [appStateContext?.state.isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultNavItems = [
    { to: "home", label: "Inicio", icon: <Home20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "about", label: "Biografía", icon: <BookContacts20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "best-results", label: "Palmarés", icon: <RibbonStar20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "calendar", label: "Calendario", icon: <CalendarLtr20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "gallery", label: "Galería", icon: <ImageStack20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "contact", label: "Contacto", icon: <ContactCardGroup20Regular className="mobile-bigger" />, onClick: closeMenu },
    { to: "sponsors", label: "Patrocinadores", icon: <StarEmphasis20Regular className="mobile-bigger"/>, onClick: closeMenu },
    { label: "Training", icon: <FitnessCenterIcon className="mobile-bigger mui-icon me-1"/>, onClick: handleTrainingClick }
  ];

  const coachNavItems = [
    { label: "Entrenos Online", to: "online-training", icon: <DevicesIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu },
    { label: "Entrenos Presenciales", to: "in-person-training", icon: <PhonelinkOffIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu},
    { label: "Charlas", to: "talks", icon: <KeyboardVoiceIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu},
    { label: "Acompañamiento a Competiciones", to: "competition-support", icon: <GroupIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu},
    { label: "Otros", to: "contact", icon: <HelpIcon className="mobile-bigger mui-icon me-1"/>, onClick: closeMenu},
    { label: "", icon: <ArrowBackIcon className="mobile-bigger mui-icon"/>, onClick: handleBackClick }
  ];

  const navItems = appStateContext?.state.isCoachScreen ? coachNavItems : defaultNavItems;

  return (
    <header className="fixed-top">
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          !scrolled ? "navbar-transparent" : scrolled && !appStateContext?.state.isCoachScreen ? "bg-navbar-ruben" : "bg-black"
        }`}
      >
        <div className="container">
          <Link
            to="home"
            smooth={true}
            duration={200}
            activeclassname="active"
            className="navbar-brand custom-pointer"
          >
            <div>
              <img
                className={"img-logo"}
                src={Logo}
                alt="logo"
              />
            </div>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item navbar-hover-custom text-white me-1 navbar-flex ${item.label === "" ? "training-item" : item.label === "Training" ? "training-item" : ""}`}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={200}
                      activeclassname="active"
                      className="nav-link custom-pointer"
                      onClick={item.onClick}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div
                      onClick={item.onClick}
                      className="nav-link custom-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="d-flex navbar-hover-custom navbar-flex">
              <button 
                className="btn"
                onClick={handleDarkModeClick}
              >
                {appStateContext?.state.isDarkMode 
                  ? <WeatherSunny20Regular className="text-light mobile-bigger-dark-mode" /> 
                  : <WeatherMoon20Regular className="text-light mobile-bigger-dark-mode"/>
                }
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
