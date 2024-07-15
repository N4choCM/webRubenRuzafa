// import "./TwoCardsRow.css";
// // import { AppStateContext } from "../../../../src/state/AppProvider";
// // import { useContext } from "react";

// const TwoCardsRow = () => {
// 	// const appStateContext = useContext(AppStateContext);

// 	return (
//     <div
//     id="in-person-training"
//     className="carousel slide carousel-fade anchor"
//     data-bs-ride="carousel"
//     >
//       <div className="container">
//         <div className="row py-4">
//           <div className="col">
//             <h2 className="text-center fs-1">Entrenamientos Presenciales</h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col offset-md-1 col-md-5">
//             <div className="card" style={{width: 400, height:300}}>
//               <div className="card-body">
//                 <h5 className="card-title text-center fs-3">Entrenamientos Grupales</h5>
//                 <ul className="mt-3">
//                   <li className="fs-5">🏊 Natación en Piscina</li>
//                   <li className="fs-5">🌊 Aguas abiertas</li>
//                   <li className="fs-5">🚴 Ciclismo de carretera</li>
//                   <li className="fs-5">🚵 BTT</li>
//                   <li className="fs-5">🏃 Running</li>
//                   <li className="fs-5">🏔️ Trail Running</li>
//                   <li className="fs-5">💪 Sesiones de fuerza</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col offset-md-1 col-md-5">
//             <div className="card" style={{width: 400, height:300}}>
//               <div className="card-body">
//                 <h5 className="card-title text-center fs-3">Entrenamientos Individuales</h5>
//                 <ul className="mt-3">
//                   <li className="fs-5">🏊 Natación en Piscina</li>
//                   <li className="fs-5">🌊 Aguas abiertas</li>
//                   <li className="fs-5">🚴 Ciclismo de carretera</li>
//                   <li className="fs-5">🚵 BTT</li>
//                   <li className="fs-5">🏃 Running</li>
//                   <li className="fs-5">🏔️ Trail Running</li>
//                   <li className="fs-5">💪 Sesiones de fuerza</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
// 	);
// };

// export default TwoCardsRow;

import IndividualPic from "../../../assets/img/IndividualTraining2.jpg";
import GroupPic from "../../../assets/img/GroupTraining.jpg";
import "./ImgCard2.css";
import { AppStateContext } from "../../../state/AppProvider";
import { useContext } from "react";

const ImgCard2 = () => {
	const appStateContext = useContext(AppStateContext);

	return (
		<div
			id="in-person-training"
			className="carousel slide carousel-fade anchor"
			data-bs-ride="carousel"
		>
			<div className="container mb-5">
				<div className="row my-4 my-lg-5">
					<div className="col text-center text-uppercase">
						<h3 className="fs-1">Entrenamientos Presenciales</h3>
					</div>
				</div>
				<div className="row d-md-none">
					<div className="col">
						<h5 className="text-center fs-3">Individuales</h5>
					</div>
				</div>
				<div className="row d-md-none">
					<div className="col col-md-6 g-4">
							<div className="card h-100">
								<img
									src={IndividualPic}
									className={`card-img-top rounded h-100 img-cover
										custom-shadow-${
											appStateContext?.state.isDarkMode ? "dark" : "light"
										}`}
									alt="Ruzafa pointing to the horizon."
								/>
							</div>
						</div>
					</div>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col col-md-6 my-auto">
						<h5 className="text-center fs-2 d-none d-md-block">Individuales</h5>
						<ul className="mt-5 mt-md-3 mb-5 mb-md-none list-margin">
							<li className="fs-5">🏊 Natación en Piscina</li>
							<li className="fs-5">🌊 Aguas abiertas</li>
							<li className="fs-5">🚴 Ciclismo de carretera</li>
							<li className="fs-5">🚵 BTT</li>
							<li className="fs-5">🏃 Running</li>
							<li className="fs-5">🏔️ Trail Running</li>
							<li className="fs-5">💪 Sesiones de fuerza</li>
						</ul>
					</div>

					<div className="col col-md-6 d-none d-md-block g-4">
						<div className="card h-100">
							<img
								src={IndividualPic}
								className={`card-img-top rounded h-100 img-cover
                  custom-shadow-${
										appStateContext?.state.isDarkMode ? "dark" : "light"
									}`}
								alt="Ruzafa pointing to the horizon."
							/>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 g-4 mt-md-2 mt-lg-0">
				<div className="col col-md-6 d-none d-md-block g-4">
						<div className="card h-100">
							<img
								src={GroupPic}
								className={`rounded h-100 w-100 img-cover
                  custom-shadow-${
										appStateContext?.state.isDarkMode ? "dark" : "light"
									}`}
								alt="Ruzafa pointing to the horizon."
							/>
						</div>
					</div>
					<div className="row d-md-none">
					<div className="col">
						<h5 className="text-center fs-3">Grupales</h5>
					</div>
				</div>
				<div className="row d-md-none">
					<div className="col col-md-6 col-lg-5 g-4">
							<div className="card h-100">
								<img
									src={GroupPic}
									className={`card-img-top rounded h-100 img-cover
										custom-shadow-${
											appStateContext?.state.isDarkMode ? "dark" : "light"
										}`}
									alt="Ruzafa pointing to the horizon."
								/>
							</div>
						</div>
					</div>
					<div className="col col-md-6 my-auto">
						<h5 className="text-center d-none d-md-block fs-2">Grupales</h5>
						<ul className="mt-1 mt-md-3 list-margin">
							<li className="fs-5">🏊 Natación en Piscina</li>
							<li className="fs-5">🌊 Aguas abiertas</li>
							<li className="fs-5">🚴 Ciclismo de carretera</li>
							<li className="fs-5">🚵 BTT</li>
							<li className="fs-5">🏃 Running</li>
							<li className="fs-5">🏔️ Trail Running</li>
							<li className="fs-5">💪 Sesiones de fuerza</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImgCard2;
