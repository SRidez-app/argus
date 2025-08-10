import React from 'react';
import { Helmet } from 'react-helmet-async';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Augusta = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Augusta Traffic Camera Footage | Argus AI Georgia</title>
        <meta name="description" content="Professional traffic camera footage retrieval for Augusta personal injury attorneys. 24/7 access to I-20, I-520 Bobby Jones Expressway, medical district camera networks. Court-ready evidence packages." />
        <meta name="keywords" content="Augusta traffic camera footage, video evidence Augusta GA, personal injury lawyers Augusta, I-20 accident footage, Bobby Jones Expressway cameras, Augusta medical district accidents" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Augusta Traffic Camera Footage | Argus AI" />
        <meta property="og:description" content="Professional traffic camera footage retrieval for Augusta personal injury attorneys. I-20 corridor and medical district coverage." />
        <meta property="og:url" content="https://argusai.live/augusta" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/augusta" />
      </Helmet>
      
      <CityLanding cityData={cityData.augusta} onNavigate={onNavigate} />
    </>
  );
};

export default Augusta;