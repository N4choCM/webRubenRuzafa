/* eslint-disable react/prop-types */
import './SectionHeader.css';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="section-header">
    {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
    <h2 className="section-header__title">{title}</h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
