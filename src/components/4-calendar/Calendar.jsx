import "./Calendar.css";
import json from "../../assets/text/calendar.json";
import { AppStateContext } from "../../../src/state/AppProvider";
import { useContext } from "react";

const Calendar = () => {
	const appStateContext = useContext(AppStateContext);
  return (
    <div
      id="calendar"
      className="carousel slide carousel-fade anchor"
      data-bs-ride="carousel"
    >
      <div className="container">
        <div className="row">
          <div className="col text-center text-uppercase my-3">
            <h3>Calendario</h3>
            <h5>2024</h5>
          </div>
        </div>
        <div className="row row-cols-1 mx-auto">
          <table className="table table-bordered table-hover">
            <thead className="header-row">
              <tr>
                <th>Fecha</th>
                <th>Prueba</th>
                <th>Lugar</th>
                <th className="text-center">Resultado</th>
              </tr>
            </thead>
            <tbody 
              className={
                `table-group-divider 
                ${appStateContext?.state.isDarkMode ? "tbody-bg-dark" : ""}`
              }
            >
              {json.map((event, index) => (
                <tr key={index}>
                  <td>{event.date}</td>
                  <td>{event.event}</td>
                  <td>{event.location}</td>
                  <td className="text-center">{event.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
