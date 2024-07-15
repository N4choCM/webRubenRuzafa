/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import { useEffect, useState, useContext } from "react";
import "./Banner.css";
import { AppStateContext } from "../../state/AppProvider";

const Banner = ({ images, heading1, heading2, buttonText, buttonLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const appStateContext = useContext(AppStateContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="home"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}
            key={index}
          >
            <img
              src={image}
              className="w-100 h-100 img-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-8 col-lg-6 text-md-start text-center">
              <h1 className="d-none d-md-block text-white fw-bolder">
                {heading1}
              </h1>
              <h1 className="d-none d-md-block text-white fw-bolder">
                {heading2}
              </h1>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center text-white p-3">
          <Link to={buttonLink} smooth={true} duration={200}>
            <button className={`btn btn-bottom btn-banner-custom${appStateContext?.state.isCoachScreen ? "-coach" : ""} text-white px-3 py-2`}>
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
