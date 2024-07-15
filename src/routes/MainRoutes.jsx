import { Route, Routes } from "react-router-dom";
import Footer from "../components/8-footer/Footer";
import Navbar from "../components/0-navbar/Navbar";
import ErrorScreen from "../pages/ErrorScreen";
import ProScreen from "../pages/ProScreen";
import CoachScreen from "../pages/CoachScreen";
import LegalWarningScreen from "../pages/LegalWarningScreen";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProScreen />} />
        <Route path="/training" element={<CoachScreen />} />
        <Route path="/privacy" element={<LegalWarningScreen type="privacy" />} />
        <Route path="/cookies" element={<LegalWarningScreen type="cookies" />} />
        <Route path="/legal" element={<LegalWarningScreen type="legal" />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;