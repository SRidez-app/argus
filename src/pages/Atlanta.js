

// ===== src/pages/Atlanta.js =====
import React from 'react';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Atlanta = ({ onNavigate }) => {
  return <CityLanding cityData={cityData.atlanta} onNavigate={onNavigate} />;
};

export default Atlanta;

