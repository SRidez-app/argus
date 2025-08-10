import React from 'react';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Augusta = ({ onNavigate }) => {
  return <CityLanding cityData={cityData.augusta} onNavigate={onNavigate} />;
};

export default Augusta;