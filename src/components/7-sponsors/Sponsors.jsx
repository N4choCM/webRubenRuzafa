import "./Sponsors.css";
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";
import LogoOrca from "../../assets/img/orca.png";
import Logo226ers from "../../assets/img/226ers-transparent.png";

const Sponsors = () => {
  const appStateContext = useContext(AppStateContext);
  return (
      <div
        id="sponsors"
        className="carousel slide carousel-fade anchor"
        data-bs-ride="carousel"
      >
        <div className="row row-margin-correction">
        <div className="col">
          <h2 className="text-center my-5">PATROCINADORES Y COLABORADORES</h2>
        </div>
      </div>
      <div className="row row-margin-correction">
        <div className="col-12 col-md-6">
          <div id="no-border" className="m-auto bigger-logo">
            <a href="https://www.orca.com/es-es" target="_blank">
              <img 
                src={LogoOrca}
                className={
                  `orca-logo 
                  ${appStateContext.state.isDarkMode ? "invert-color" : ""}`
                } 
                alt="Orca Logo"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div id="no-border" className="m-auto bigger-logo">
            <a href="https://www.226ers.com/es/" target="_blank">
              <img 
                src={Logo226ers} 
                className={
                  `${appStateContext.state.isDarkMode ? "invert-color" : ""}`
                } 
                alt="226ers Logo"
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Sponsors;
