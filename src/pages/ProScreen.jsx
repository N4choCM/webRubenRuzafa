import { Zoom, Fade } from 'react-reveal';
import Banner from "../components/1-banner/Banner";
import About from "../components/2-about/About";
import BestResults from "../components/3-best_results/BestResults";
import Calendar from "../components/4-calendar/Calendar";
import Gallery from "../components/5-gallery/Gallery";
import Contact from "../components/6-contact/Contact";
import Sponsors from "../components/7-sponsors/Sponsors";
import Divider from "../components/core/divider/Divider";
import bannerPic1 from "../assets/img/bike_16-9.jpg";
import bannerPic2 from "../assets/img/swimming.jpg";
import bannerPic3 from "../assets/img/running.jpg";
import { useEffect } from 'react';

const ProScreen = () => {
  const images = [bannerPic1, bannerPic2, bannerPic3];
  const heading1 = "3x XTERRA & 4x ITU";
  const heading2 = "World Champion";
  const buttonText = "¡Conóceme! 😀";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Fade>
        <Banner images={images} heading1={heading1} heading2={heading2} buttonText={buttonText} buttonLink={"about"} />
      </Fade>
      <Zoom>
        <About />
        <Divider />
      </Zoom>
      <Zoom>
        <BestResults />
        <Divider />
      </Zoom>
      <Zoom>
        <Calendar />
        <Divider />
      </Zoom>
      <Zoom>
        <Gallery />
        <Divider />
      </Zoom>
      <Zoom>
        <Contact />
        <Divider />
      </Zoom>
      <Zoom>
        <Sponsors />
      </Zoom>
    </>
  );
};

export default ProScreen;
