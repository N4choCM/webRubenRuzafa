import Pic from "../../../assets/img/EntrenamientosOnline.jpg"
import "./ImgCard.css";
import { AppStateContext } from "../../../../src/state/AppProvider";
import { useContext } from "react";
import CardsRow from "../cards-row/CardsRow";

const ImgCard = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="online-training"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container mb-2 mb-md-5">
				<div className="row my-4 my-lg-5">
					<div className="col text-center text-uppercase">
						<h3 className="fs-1">Entrenamientos Online</h3>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col col-md-6 col-lg-5 g-4">
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
					<div className="col col-md-6 col-lg-7">
								<h5 className="ms-5 fs-2 mt-md-3 mt-lg-5 text-center">Servicios incluidos:</h5>
                <ul className="ms-md-5 mt-4">
                  <li className="fs-5">Plataforma de entrenamientos TrainingPeaks.</li>
                  <li className="fs-5">Establecimiento de objetivos y retos.</li>
                  <li className="fs-5">Establecimiento de tiempo de trabajo y adecuación de las sesiones a cada caso particular.</li>
                  <li className="fs-5">Establecimiento de zonas de entrenamiento.</li>
                </ul>
					</div>
				</div>
			</div>
			<CardsRow />
		</div>
	);
};

export default ImgCard;