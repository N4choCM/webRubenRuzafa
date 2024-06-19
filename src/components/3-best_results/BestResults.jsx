import "./BestResults.css";
import Pic22 from "../../assets/img/results-2022.png";
import Pic21 from "../../assets/img/results-2021.png";
import PicMain from "../../assets/img/results-main.jpg";
import PicMtb from "../../assets/img/results-mtb.jpeg";
import json from "../../assets/text/best-results.json";

const BestResults = () => {
  const { sections } = json;

  const renderAchievements = (achievements) => {
    return achievements.map((achievement, index) => (
      <li className="mb-1" key={index}>{achievement.text}</li>
    ));
  };

  return (
    <div
      id="best-results"
      className="carousel slide carousel-fade anchor"
      data-bs-ride="carousel"
    >
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col">
            <h2 className="text-center">{sections[0].title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 p-0 mb-2 mb-md-0">
            <img 
              className="w-100 h-100 img-cover" 
              src={Pic22} 
              alt="Ruzafa in a 2022 XTERRA" 
            />
          </div>
          <div className="col-12 col-lg-6 my-3 px-5">
            <br />
            <h3 className="text-center">{sections[0].subsections[0].year}</h3>
            <br />
            <ul>
              {renderAchievements(sections[0].subsections[0].achievements)}
            </ul>
          </div>
        </div>
        <hr className="d-lg-none my-4" />
        <div className="row">
          <div className="col-12 col-lg-6 p-0 d-lg-none mt-4">
            <img 
              className="w-100 h-100 img-cover" 
              src={Pic21} 
              alt="Ruzafa in a 2021 XTERRA" 
            />
          </div>
          <div className="col-12 col-lg-6 my-auto px-5">
            <h3 className="text-center">{sections[0].subsections[1].year}</h3>
            <br />
            {renderAchievements(sections[0].subsections[1].achievements)}
          </div>
          <div className="col-12 col-lg-6 p-0 d-none d-lg-block">
            <img 
              className="w-100 h-100 img-cover" 
              src={Pic21} 
              alt="Ruzafa in a 2021 XTERRA" 
            />          
          </div>
        </div>
        <hr className="d-lg-none my-4" />
        <div className="row">
          <div className="col-12 col-lg-6 p-0 mt-md-4 mt-lg-0">
            <img 
              className="w-100 h-100 img-cover" 
              src={PicMain} 
              alt="Ruzafa becoming XTERRA World Champion in 2008" 
            />
          </div>
          <div className="col-12 col-lg-6 my-3 px-5">
            <br className="d-none d-lg-block" />
            <h3 className="text-center">{sections[1].title}</h3>
            <br />
            {renderAchievements(sections[1].achievements)}
          </div>
        </div>
        <hr className="d-lg-none my-4" />
        <div className="row">
          <div className="col-12 p-0 d-md-block d-lg-none mt-4">
            <img 
              className="w-100 h-100 img-cover" 
              src={PicMtb} 
              alt="Ruzafa becoming MTB XCO Team Relay World Champion in 2005" 
            />
          </div>
          <div className="col-12 col-lg-6 my-auto mb-md-4 my-lg-auto px-5">
            <br />
            <h3 className="text-center">{sections[2].title}</h3>
            <br />
            {renderAchievements(sections[2].achievements)}
            <br className="d-md-none" />
          </div>
          <div className="col-12 col-lg-6 p-0 d-none d-lg-block">
            <img 
              className="w-100 h-100 img-cover" 
              src={PicMtb} 
              alt="Ruzafa becoming MTB XCO Team Relay World Champion in 2005" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestResults;
