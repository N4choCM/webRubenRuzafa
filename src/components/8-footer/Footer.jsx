import "./Footer.css";
import Logo from "../../assets/img/logo-transparente.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { AppStateContext } from "../../../src/state/AppProvider";
import { Link } from 'react-router-dom';

const Footer = () => {
  const appStateContext = useContext(AppStateContext);
  const isCoachScreen = appStateContext?.state.isCoachScreen; 

  return (
    <footer className={`footer ${isCoachScreen ? "bg-black" : "bg-red"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md mt-2 mt-md-0">
            <Link className="footer-items" to="/privacy">Política de privacidad</Link>
          </div>
          <div className="col-12 col-md">
            <Link className="footer-items" to="/cookies">Política de cookies</Link>
          </div>
          <div className="col-12 col-md mb-3 mb-md-0">
            <Link className="footer-items" to="/legal">Aviso legal</Link>
          </div>
          <div className="col-12 col-md">
            <a href="https://www.facebook.com/ruben.ruzafa" target="_blank">
              <FaFacebook className="me-3 social-icons" />
            </a>
            <a href="https://www.instagram.com/rubenruzafa/" target="_blank">
              <FaInstagram className="me-3 social-icons" />
            </a>
            <a href="https://twitter.com/rubenruzafa?lang=es" target="_blank">
              <FaXTwitter className="social-icons" />
            </a>
          </div>
        </div>
        <hr />
        <div className="row d-md-none">
          <img id="logo-footer" src={Logo} alt="Rubén Ruzafa Brand Logo" />
        </div>
        <div className="row d-none d-md-block d-lg-none">
          <img id="logo-footer-md" src={Logo} alt="Rubén Ruzafa Brand Logo" />
        </div>
        <div className="row d-none d-lg-block">
          <img id="logo-footer-lg" src={Logo} alt="Rubén Ruzafa Brand Logo" />
        </div>
        <div className="row text-white">
          <p>©️ Rubén Ruzafa Cueto</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
