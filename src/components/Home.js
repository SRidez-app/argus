import React from 'react';
import Hero from './Hero.js';
import Problem from './Problem.js';
import Process from './Process.js';
import Footer from './Footer.js';
import TheFuture from './TheFuture.js';
import Map from './Map.js';


const Home = ({ onNavigate }) => {
  return (
    <div style={{ 
      position: 'relative', 
      zIndex: 10,
      background: 'transparent'
    }}>
      <Hero />
      <Problem />
      <Process />
      <TheFuture />
      <Map />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Home;