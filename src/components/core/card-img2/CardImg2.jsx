import Pic from "../../../assets/img/RubenTogether.jpg"
import "./CardImg2.css";
import { AppStateContext } from "../../../../src/state/AppProvider";
import { useContext } from "react";

const CardImg2 = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="competition-support"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container mb-5">
				<div className="row my-5">
					<div className="col text-center text-uppercase">
						<h3 className="fs-1">Acompañamiento a Competiciones</h3>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col col-md-6 col-lg-5">
						<div className="card">
							<img
								src={Pic}
								className={
                  `card-img-top rounded img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`}
								alt="Ruzafa pointing to the horizon."
							/>
						</div>
					</div>
					<div className="col col-md-6 offset-lg-1 col-lg-6 mt-md-5 mt-lg-0">
						{/* <div
							className={
                `card h-100 custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`
              }
						> */}
							{/* <div className="card-body"> */}
								<br className="d-none d-lg-block" />
								<br className="d-none d-lg-block" />
								<h5 className="ms-5 mt-lg-3 mt-xl-4 fs-2">Llegó el día D y la hora H, y estar acompañado por un triatleta profesional puede ser un plus en tu rendimiento.</h5>
                <ul className="ms-5 mt-3 mt-md-5">
                  <li className="fs-5 mt-2">Realización de circuitos</li>
                  <li className="fs-5 mt-2">Práctica de zonas técnicas</li>
                  <li className="fs-5 mt-2">Consejos de gestión</li>
                  <li className="fs-5 mt-2">Estrategia de carrera</li>
									<li className="fs-5 mt-2">Elección del material</li>
                </ul>
							{/* </div> */}
						{/* </div> */}
					</div>
					{/* <div className="col col-md-4 d-md-none">
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
					</div> */}
					{/* <div className="col col-md-6 col-lg-8 g-4">
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
					</div> */}
					{/* <div className="col col-md-6 col-lg-4 d-none d-md-block">
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
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default CardImg2;