import Pic from "../../../assets/img/RubenTalk.jpg"
import "./CardImg.css";
import { AppStateContext } from "../../../../src/state/AppProvider";
import { useContext } from "react";

const CardImg = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="talks"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container mb-5">
				<div className="row my-5">
					<div className="col text-center text-uppercase">
						<h3 className="fs-1">Charlas</h3>
					</div>
				</div>
				<div className="row d-md-none">
					<div className="col col-md-6 col-lg-5">
						<div className="card h-100">
							<img
								src={Pic}
								className={
									`card-img-top rounded h-100 img-cover
									custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`}
								alt="Ruzafa pointing to the horizon."
							/>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col col-md-5 col-lg-6">
						{/* <div
							className={
                `card h-100 custom-shadow-${appStateContext?.state.isDarkMode ? "dark bg-dark" : "light"}`
              }
						> */}
							{/* <div className="card-body"> */}
								{/* <br className="d-none d-lg-block" />
								<br className="d-none d-lg-block" /> */}
								<h5 className="mt-3 mt-md-none ms-5 fs-2">Dialoga con un deportista con más de 20 años de experiencia en Alto Rendimiento</h5>
								<h4 className="ms-5 fs-3">¡También graduado en CCAFD y entrenador Nivel 3 de triatlón!</h4>
                <ul className="ms-5 mt-3">
                  <li className="fs-5">Entrenamiento</li>
                  <li className="fs-5">Planificación de carreras</li>
                  <li className="fs-5">Secretos del Triatlón Cross y Xterra</li>
                  <li className="fs-5">Otros (a consultar)</li>
                </ul>
							{/* </div> */}
						{/* </div> */}
					</div>
					<div className="col col-md-6 offset-md-1 col-lg-5 d-none d-md-block">
						<div className="card h-100">
							<img
								src={Pic}
								className={
                  `card-img-top rounded h-100 img-cover
                  custom-shadow-${appStateContext?.state.isDarkMode ? "dark" : "light"}`}
								alt="Ruzafa pointing to the horizon."
							/>
						</div>
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

export default CardImg;