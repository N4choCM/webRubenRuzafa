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
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/img/logo-transparente.png";
import { AppStateContext } from "../../../src/state/AppProvider";
import "./Navbar.css";

const NavBar = () => {
	const appStateContext = useContext(AppStateContext);
	const [scrolled, setScrolled] = useState(false);

	const handleDarkModeClick = () => {
		appStateContext?.dispatch({ type: "TOGGLE_DARK_MODE" });
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

	return (
		<header className="fixed-top">
			<nav
				className={`navbar navbar-expand-lg navbar-dark ${
					!scrolled ? "navbar-transparent" : "bg-navbar-ruben"
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
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							{/* MARK I - Home */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="home"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<Home20Regular className="mobile-bigger" />
									<span>Inicio</span>
								</Link>
							</li>
							{/* MARK II - About */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="about"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<BookContacts20Regular className="mobile-bigger" />
									<span>Biografía</span>
								</Link>
							</li>
							{/* MARK III - Best Results */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="best-results"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<RibbonStar20Regular className="mobile-bigger" />
									<span>Palmarés</span>
								</Link>
							</li>
							{/* MARK IV - Calendar */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="calendar"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<CalendarLtr20Regular className="mobile-bigger" />
									<span>Calendario</span>
								</Link>
							</li>
							{/* MARK V - Gallery */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="gallery"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<ImageStack20Regular className="mobile-bigger" />
									<span>Galería</span>
								</Link>
							</li>
							{/* MARK VI - Contact */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="contact"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<ContactCardGroup20Regular className="mobile-bigger" />
									<span>Contacto</span>
								</Link>
							</li>
							{/* MARK VII - Sponsors */}
							<li className={`nav-item navbar-hover-custom text-white me-1`}>
								<Link
									to="sponsors"
									smooth={true}
									duration={200}
									activeclassname="active"
									className="nav-link custom-pointer"
								>
									<StarEmphasis20Regular className="mobile-bigger"/>
									<span>Patrocinadores</span>
								</Link>
							</li>
						</ul>
            {/* MARK VIII - Dark Mode */}
            <div className="d-flex navbar-hover-custom">
              <button 
                className="btn btn-dark-mode"
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