import React from 'react';
import { Helmet } from 'react-helmet-async';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Athens = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Athens Traffic Camera Footage | Argus AI Georgia</title>
        <meta name="description" content="Professional traffic camera footage retrieval for Athens personal injury attorneys. 24/7 access to UGA campus, Loop 10 perimeter, US-441 corridor camera networks. Court-ready evidence packages." />
        <meta name="keywords" content="Athens traffic camera footage, video evidence Athens GA, personal injury lawyers Athens, UGA campus accidents, Loop 10 cameras, Athens car accident evidence" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Athens Traffic Camera Footage | Argus AI" />
        <meta property="og:description" content="Professional traffic camera footage retrieval for Athens personal injury attorneys. UGA campus and Loop 10 perimeter coverage." />
        <meta property="og:url" content="https://argusai.live/athens" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/athens" />
      </Helmet>
      
      <CityLanding cityData={cityData.athens} onNavigate={onNavigate} />
    </>
  );
};

export default Athens;