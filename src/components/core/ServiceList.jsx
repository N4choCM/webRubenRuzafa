/* eslint-disable react/prop-types */
import { HiCheck } from 'react-icons/hi';
import './ServiceList.css';

const ServiceList = ({ items }) => (
  <ul className="service-list">
    {items.map((item, i) => (
      <li key={i}>
        <HiCheck className="service-list__icon" aria-hidden />
        {item}
      </li>
    ))}
  </ul>
);

export default ServiceList;
