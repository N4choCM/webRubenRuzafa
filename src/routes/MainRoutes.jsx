import { Route, Routes } from "react-router-dom";
import Footer from "../components/8-footer/Footer";
import Navbar from "../components/0-navbar/Navbar";
import ErrorScreen from "../pages/ErrorScreen";
import ProScreen from "../pages/ProScreen";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;