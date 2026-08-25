import { useEffect } from 'react';
import Banner from '../components/1-banner/Banner';
import About from '../components/2-about/About';
import Contact from '../components/6-contact/Contact';
import Services from '../components/services/Services';
import SectionReveal from '../components/core/SectionReveal';

const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </>
  );
};

export default HomeScreen;
