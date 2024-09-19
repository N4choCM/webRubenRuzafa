import { Zoom } from 'react-reveal';
import Banner from "../components/1-banner/Banner";
import Divider from "../components/core/divider/Divider";
import bannerPic1 from "../assets/img/CoachWide.jpg";
import bannerPic2 from "../assets/img/CoachBanner.jpg";
import bannerPic3 from "../assets/img/CoachBanner2.jpg";
import Contact from "../components/6-contact/Contact";
import ImgCard from "../components/core/img-card/ImgCard";
import { useEffect, useContext } from 'react';
import ImgCard2 from "../components/core/img-card-2/ImgCard2";
import CardImg from "../components/core/card-img/CardImg";
import CardImg2 from "../components/core/card-img2/CardImg2";
import { AppStateContext } from "../state/AppProvider";

const CoachScreen = () => {
  const { dispatch } = useContext(AppStateContext);
	const images = [bannerPic1, bannerPic2, bannerPic3];
  const heading1 = "Y ahora...";
  const heading2 = "¡También soy entrenador!";
  const buttonText = "¡Entrenemos juntos! 😀";

  useEffect(() => {
    dispatch({ type: "TOGGLE_COACH_SCREEN", payload: true });
    window.scrollTo(0, 0);
  }, [dispatch]);

	return (
		<>
      <Banner images={images} heading1={heading1} heading2={heading2} buttonText={buttonText} buttonLink={"online-training"} />
      <Zoom>
        <ImgCard />
        <Divider />
      </Zoom>
      <Zoom>
        <ImgCard2 />
        <Divider />
      </Zoom>
      <Zoom>
        <CardImg />
        <Divider />
      </Zoom>
      <Zoom>
        <CardImg2 />
        <Divider />
      </Zoom>
      <Zoom>
        <Contact />
      </Zoom>
		</>
	);
};

export default CoachScreen;
