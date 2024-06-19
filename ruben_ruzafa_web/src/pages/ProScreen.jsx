import Banner from "../components/1-banner/Banner";
import About from "../components/2-about/About";
import BestResults from "../components/3-best_results/BestResults";
import Calendar from "../components/4-calendar/Calendar";
import Gallery from "../components/5-gallery/Gallery";
import Contact from "../components/6-contact/Contact";
import Sponsors from "../components/7-sponsors/Sponsors";
import Divider from "../components/core/divider/Divider";

const ProScreen = () => {
	return (
		<>
			<Banner />
			<About />
			<Divider />
      <BestResults />
			<Divider />
			<Calendar />
			<Divider />
			<Gallery />
			<Divider />
			<Contact />
			<Divider />
			<Sponsors />
		</>
	);
};

export default ProScreen;
