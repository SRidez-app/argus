import React from 'react';
import { Helmet } from 'react-helmet-async';
import CityLanding from '../components/CityLanding';
import { cityData } from '../data/cityData';

const Atlanta = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Atlanta Traffic Camera Footage Services | Argus AI Georgia</title>
        <meta name="description" content="Professional Atlanta traffic camera footage services and video evidence retrieval for personal injury attorneys. 24/7 access to I-75, I-85, I-20, I-285 camera networks. Court-ready evidence packages." />
        <meta name="keywords" content="Atlanta traffic camera footage services, Atlanta traffic camera footage retrieval, video evidence Atlanta GA, personal injury lawyers Atlanta, I-285 accident footage, Atlanta car accident evidence" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Atlanta Traffic Camera Footage Services | Argus AI" />
        <meta property="og:description" content="Professional Atlanta traffic camera footage services and video evidence retrieval for personal injury attorneys. 24/7 access to major interstate networks." />
        <meta property="og:url" content="https://argusai.live/atlanta" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/atlanta" />
      </Helmet>
      
      <CityLanding cityData={cityData.atlanta} onNavigate={onNavigate} />
    </>
  );
};

export default Atlanta;