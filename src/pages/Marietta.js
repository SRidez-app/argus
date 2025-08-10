import React from 'react';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Marietta = ({ onNavigate }) => {
  return <CityLanding cityData={cityData.marietta} onNavigate={onNavigate} />;
};

export default Marietta;