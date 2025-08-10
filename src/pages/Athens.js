import React from 'react';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Athens = ({ onNavigate }) => {
  return <CityLanding cityData={cityData.athens} onNavigate={onNavigate} />;
};

export default Athens;
