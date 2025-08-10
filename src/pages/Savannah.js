import React from 'react';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Savannah = ({ onNavigate }) => {
  return <CityLanding cityData={cityData.savannah} onNavigate={onNavigate} />;
};

export default Savannah;