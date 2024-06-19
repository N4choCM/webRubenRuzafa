import Run from "../../assets/img/running_biography.jpg";
import Swim from "../../assets/img/swimming_biography.jpg";
import json from "../../assets/text/about.json";
import "./About.css";
import { AppStateContext } from "../../state/AppProvider";
import { useContext } from "react";

const About = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="about"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container">
				<div className="row my-4">
					<div className="col text-center text-uppercase">
						<h3>{json.paragraphs[0]}</h3>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col col-md-6 col-lg-4 d-none d-md-block g-4">
						<div className="card h-100">
							<img
								src={Swim}
								className={
                  `card-img-top rounded h-100 img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`}
								alt="Ruzafa swimming in an XTERRA."
							/>
						</div>
					</div>
					<div className="col col-md-6 col-lg-8">
						<div
							className={
                `card h-100 custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`
              }
						>
							<div className="card-body">
								<br className="d-none d-lg-block" />
								<br className="d-none d-lg-block" />
								<p className="card-text text-justify">{json.paragraphs[1]}</p>
								<br />
								<p className="card-text text-justify mt-2">
									{json.paragraphs[2]}
								</p>
								<br />
								<p className="card-text text-justify mt-2">
									{json.paragraphs[3]}
								</p>
							</div>
						</div>
					</div>
					<div className="col col-md-4 d-md-none">
						<div className="card h-100">
							<img
								src={Swim}
								className={
                  `card-img-top rounded h-100 img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`
                }
								alt="Ruzafa swimming in an XTERRA."
							/>
						</div>
					</div>
					<div className="col col-md-6 col-lg-8 g-4">
						<div
							className={
                `card h-100 custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`
              }
            >
							<div className="card-body">
								<br className="d-none d-lg-block" />
								<p className="card-text text-justify">{json.paragraphs[4]}</p>
								<br />
								<p className="card-text text-justify">{json.paragraphs[5]}</p>
								<br />
								<p className="card-text text-justify">{json.paragraphs[6]}</p>
							</div>
						</div>
					</div>
					<div className="col col-md-6 col-lg-4 d-none d-md-block">
						<div className="card h-100">
							<img
								src={Run}
								className={
                  `card-img-top rounded h-100 img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`
                }
								alt="Ruzafa running in an XTERRA."
							/>
						</div>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default About;