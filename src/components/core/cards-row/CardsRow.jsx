import "./CardsRow.css";
import { AppStateContext } from "../../../../src/state/AppProvider";
import { useContext } from "react";

const CardsRow = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div className="container">
      <div className="row gap-sm-2 gap-md-0">
        <div className="col-12 col-md-4">
          <div className={`card training-option-cards h-100 ${appStateContext?.state.isDarkMode ? "bg-dark" : ""}`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-4">🚲 Mensuales</h5>
              <ul className="mt-3">
                <li className="fs-6">Contacto dos veces al mes</li>
                <li className="fs-6">Establecimiento de objetivos</li>
                <li className="fs-6">Entrenamiento mensual acorde con los objetivos establecidos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={`card training-option-cards h-100 ${appStateContext?.state.isDarkMode ? "bg-dark" : ""}`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-4">🛵 Semanales</h5>
              <ul className="mt-3">
                <li className="fs-6">Un contacto semanal</li>
                <li className="fs-6">Establecimiento de objetivos</li>
                <li className="fs-6">Evaluación de la semana completada</li>
                <li className="fs-6">Planificación de la semana siguiente según necesidades (compromisos, cansancio, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={`card training-option-cards h-100 ${appStateContext?.state.isDarkMode ? "bg-dark" : ""}`}>
            <div className="card-body">
              <h5 className="card-title text-center fs-4">🏍 Semanal Premium</h5>
              <ul className="mt-3">
                <li className="fs-6">Contacto a demanda</li>
                <li className="fs-6">Establecimiento de objetivos</li>
                <li className="fs-6">Evaluación de la semana completada</li>
                <li className="fs-6">Planificación de la semana siguiente según necesidades (compromisos, cansancio, etc.)</li>
                <li className="fs-6">Disposición para dudas diarias y cambios en la semana.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default CardsRow;