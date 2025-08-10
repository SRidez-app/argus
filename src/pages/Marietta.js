import React from 'react';
import { Helmet } from 'react-helmet-async';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Marietta = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Marietta Traffic Camera Footage | Argus AI Georgia</title>
        <meta name="description" content="Professional traffic camera footage retrieval for Marietta personal injury attorneys. 24/7 access to I-75, I-575, Cobb Parkway US-41 camera networks. Court-ready evidence packages." />
        <meta name="keywords" content="Marietta traffic camera footage, video evidence Marietta GA, personal injury lawyers Marietta, I-75 accident footage, Cobb Parkway cameras, Marietta car accident evidence" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Marietta Traffic Camera Footage | Argus AI" />
        <meta property="og:description" content="Professional traffic camera footage retrieval for Marietta personal injury attorneys. I-75/I-575 and Cobb Parkway coverage." />
        <meta property="og:url" content="https://argusai.live/marietta" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/marietta" />
      </Helmet>
      
      <CityLanding cityData={cityData.marietta} onNavigate={onNavigate} />
    </>
  );
};

export default Marietta;