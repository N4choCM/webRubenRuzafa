/* eslint-disable react/prop-types */
import { useInView } from '../../hooks/useInView';

const SectionReveal = ({ children }) => {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className={`section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
      {children}
    </div>
  );
};

export default SectionReveal;
