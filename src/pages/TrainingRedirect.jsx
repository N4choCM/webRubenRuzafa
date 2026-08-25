import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [navigate]);

  return null;
};

export default TrainingRedirect;
