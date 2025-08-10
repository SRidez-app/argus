import React, { useRef, useEffect, useState, Component } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // ✅ ADD THIS IMPORT
import './App.css';
import ArgusHeader from './components/Header.js'; 
import Hero from './components/Hero.js';
import Problem from './components/Problem.js';
import Process from './components/Process.js';
import Footer from './components/Footer.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import TermsOfService from './components/TermsOfService.js';
import TheFuture from './components/TheFuture.js';
import CookieSettings from './components/CookieSettings.js';
import Map from './components/Map.js';
import FAQ from './components/FAQ.js';
import AboutUs from './components/AboutUs.js';
import CTA from './components/CTA.js';

// Import your new city components
import Atlanta from './pages/Atlanta.js';
import Savannah from './pages/Savannah.js';
import Augusta from './pages/Augusta.js';
import Athens from './pages/Athens.js';
import Marietta from './pages/Marietta.js';

// Define page titles for each view
const PAGE_TITLES = {
  'home': 'Home - ArgusAI',
  'privacy-policy': 'Privacy Policy - ArgusAI',
  'terms-of-service': 'Terms of Service - ArgusAI',
  'faq': 'FAQ - ArgusAI',
  'the-future': 'The Future - ArgusAI',
  'about-us': 'About Us - ArgusAI',
  'atlanta': 'Atlanta - ArgusAI',
  'savannah': 'Savannah - ArgusAI',
  'augusta': 'Augusta - ArgusAI',
  'athens': 'Athens - ArgusAI',
  'marietta': 'Marietta - ArgusAI'
};

function App() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [currentView, setCurrentView] = useState(() => {
    // Read URL fragment and set initial state accordingly
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash === 'privacy-policy') return 'privacy-policy';
    if (hash === 'terms-of-service') return 'terms-of-service';
    if (hash === 'faq') return 'faq';
    if (hash === 'the-future') return 'the-future';
    if (hash === 'about-us') return 'about-us';
    // Add your new city hash routes
    if (hash === 'atlanta') return 'atlanta';
    if (hash === 'savannah') return 'savannah';
    if (hash === 'augusta') return 'augusta';
    if (hash === 'athens') return 'athens';
    if (hash === 'marietta') return 'marietta';
    return 'home'; // Default to home for any other hash or no hash
  });

  // Function to update document title
  const updateDocumentTitle = (view) => {
    const title = PAGE_TITLES[view] || 'ArgusAI';
    document.title = title;
  };

  // Network configuration
  const nodeCount = 120;
  const connectionDistance = 140;
  const pulseSpeed = 0.010;
  const rotationSpeed = 0.0005; 

  // Update document title when currentView changes
  useEffect(() => {
    updateDocumentTitle(currentView);
  }, [currentView]);

  useEffect(() => {
    // Listen for hash changes (back/forward button)
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      let newView = 'home'; // default
      
      if (hash === 'privacy-policy') {
        newView = 'privacy-policy';
      } else if (hash === 'terms-of-service') {
        newView = 'terms-of-service';
      } else if (hash === 'the-future') {
        newView = 'the-future';
      } else if (hash === 'faq') {
        newView = 'faq';
      } else if (hash === 'about-us') {
        newView = 'about-us';
      // Add your new city navigation
      } else if (hash === 'atlanta') {
        newView = 'atlanta';
      } else if (hash === 'savannah') {
        newView = 'savannah';
      } else if (hash === 'augusta') {
        newView = 'augusta';
      } else if (hash === 'athens') {
        newView = 'athens';
      } else if (hash === 'marietta') {
        newView = 'marietta';
      }
      
      setCurrentView(newView);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    class SurveillanceNode {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.originalX = x;
        this.originalY = y;
        this.originalZ = z;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.baseSize = Math.random() * 2.5 + 1.5;
        this.isHub = Math.random() < 0.1;
      }

      update(time) {
        const cos = Math.cos(time * rotationSpeed);
        const sin = Math.sin(time * rotationSpeed);
        
        this.x = this.originalX * cos - this.originalZ * sin;
        this.z = this.originalX * sin + this.originalZ * cos;
        this.y = this.originalY + Math.sin(time * 0.0003 + this.pulseOffset) * 8;
      }

      project(centerX, centerY) {
        const perspective = 1000;
        const scale = perspective / (perspective + this.z);
        return {
          x: centerX + this.x * scale,
          y: centerY + this.y * scale,
          scale: scale,
          z: this.z
        };
      }
    }

    // Create network nodes
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = Math.random() * 300 + 80;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      nodes.push(new SurveillanceNode(x, y, z));
    }

    // Add hub nodes
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 40;
      const node = new SurveillanceNode(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 80
      );
      node.isHub = true;
      nodes.push(node);
    }

    let time = 0;

    const animate = () => {
      time += 16;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      nodes.forEach(node => node.update(time));

      const projectedNodes = nodes.map(node => ({
        ...node,
        ...node.project(centerX, centerY)
      }));

      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connections
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const nodeA = projectedNodes[i];
          const nodeB = projectedNodes[j];
          
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dz = nodeA.z - nodeB.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < connectionDistance) {
            const opacity = Math.max(0, 0.25 - (distance / connectionDistance) * 0.25);
            
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = nodeA.isHub || nodeB.isHub ? 1.5 : 1;
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach(node => {
        const pulseIntensity = Math.sin(time * pulseSpeed + node.pulseOffset) * 0.4 + 0.6;
        const size = node.baseSize * node.scale * pulseIntensity;
        
        const color = node.isHub ? '34, 197, 94' : '59, 130, 246';
        const alpha = Math.max(0.1, node.scale * 0.9);
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size * 3
        );
        
        gradient.addColorStop(0, `rgba(${color}, ${alpha * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${color}, ${alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core node
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * (node.isHub ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  // Function to handle navigation
  const handleNavigation = (view) => {
    setCurrentView(view);
    
    // Update URL to match the view
    if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
    
    // Always scroll to top when changing views
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Render different views based on currentView state
  const renderContent = () => {
    switch (currentView) {
      case 'privacy-policy':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <PrivacyPolicy onNavigate={handleNavigation} />
          </div>
        );
      case 'terms-of-service':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <TermsOfService onNavigate={handleNavigation} />
          </div>
        );
      case 'the-future':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <TheFuture onNavigate={handleNavigation} />
          </div>
        );
      case 'faq':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <FAQ onNavigate={handleNavigation} />
          </div>
        );
      case 'about-us':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <AboutUs onNavigate={handleNavigation} />
          </div>
        );
      // Add your new city cases
      case 'atlanta':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Atlanta onNavigate={handleNavigation} />
          </div>
        );
      case 'savannah':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Savannah onNavigate={handleNavigation} />
          </div>
        );
      case 'augusta':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Augusta onNavigate={handleNavigation} />
          </div>
        );
      case 'athens':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Athens onNavigate={handleNavigation} />
          </div>
        );
      case 'marietta':
        return (
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Marietta onNavigate={handleNavigation} />
          </div>
        );
      case 'home':
      default:
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
            <CTA />
            <Footer onNavigate={handleNavigation} />
          </div>
        );
    }
  };

  return (
    <HelmetProvider> {/* ✅ ADD THIS WRAPPER */}
      <div style={{ 
        position: 'relative',
        background: 'black'
      }}>
        {/* Fixed Background Animation Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: 'black'
          }}
        />

        {/* Fixed Header */}
        <div style={{ position: 'relative', zIndex: 20 }}>
          <ArgusHeader onNavigate={handleNavigation} currentView={currentView} />
        </div>
        
        {/* Dynamic Content based on currentView */}
        {renderContent()}
        <CookieSettings />
      </div>
    </HelmetProvider> 
  );
}

export default App;