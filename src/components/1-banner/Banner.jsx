import { Link } from "react-scroll";
import bannerPic1 from "../../assets/img/bike_16-9.jpg";
import "./Banner.css";
import bannerPic2 from "../../assets/img/swimming.jpg";
import bannerPic3 from "../../assets/img/running.jpg";
import { useEffect, useState } from "react";

const images = [bannerPic1, bannerPic2, bannerPic3];

const Banner = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

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
                3x XTERRA &amp; 4x ITU
              </h1>
              <h1 className="d-none d-md-block text-white fw-bolder">
                World Champion
              </h1>
            </div>
          </div>
        </div>
        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
          <Link to="about" smooth={true} duration={200}>
            <button className={"btn btn-bottom btn-banner-custom text-white px-3 py-2"}>
              ¡Conóceme! 😀
            </button>
          </Link>
        </div>
      </div>
		</div>
	);
};

export default Banner;
