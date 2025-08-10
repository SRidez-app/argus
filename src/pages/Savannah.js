import React from 'react';
import { Helmet } from 'react-helmet-async';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Savannah = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Savannah Traffic Camera Footage | Argus AI Georgia</title>
        <meta name="description" content="Professional traffic camera footage retrieval for Savannah personal injury attorneys. 24/7 access to I-95, I-16, historic district, port traffic camera networks. Court-ready evidence packages." />
        <meta name="keywords" content="Savannah traffic camera footage, video evidence Savannah GA, personal injury lawyers Savannah, I-95 accident footage, historic district cameras, port traffic accidents" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Savannah Traffic Camera Footage | Argus AI" />
        <meta property="og:description" content="Professional traffic camera footage retrieval for Savannah personal injury attorneys. I-95/I-16 corridor and historic district coverage." />
        <meta property="og:url" content="https://argusai.live/savannah" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/savannah" />
      </Helmet>
      
      <CityLanding cityData={cityData.savannah} onNavigate={onNavigate} />
    </>
  );
};

export default Savannah;