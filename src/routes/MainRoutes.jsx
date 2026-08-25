import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TrainingRedirect from '../pages/TrainingRedirect';
import Footer from '../components/8-footer/Footer';
import Navbar from '../components/0-navbar/Navbar';
import HomeScreen from '../pages/HomeScreen';

const LegalWarningScreen = lazy(() => import('../pages/LegalWarningScreen'));
const ErrorScreen = lazy(() => import('../pages/ErrorScreen'));
const ChatWidget = lazy(() => import('../components/chat/ChatWidget'));

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/training" element={<TrainingRedirect />} />
          <Route path="/privacy" element={<LegalWarningScreen type="privacy" />} />
          <Route path="/cookies" element={<LegalWarningScreen type="cookies" />} />
          <Route path="/legal" element={<LegalWarningScreen type="legal" />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </Suspense>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </>
  );
};

export default MainRoutes;
