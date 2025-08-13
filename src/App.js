import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

// Import city components
import Atlanta from './pages/Atlanta.js';
import Savannah from './pages/Savannah.js';
import Augusta from './pages/Augusta.js';
import Athens from './pages/Athens.js';
import Marietta from './pages/Marietta.js';
import Georgia from './pages/Georgia.js'

// Home page component
const HomePage = ({ onNavigate }) => (
  <div style={{ 
    position: 'relative', 
    zIndex: 10,
    background: 'transparent'
  }}>
    <Hero onNavigate={onNavigate} />
    <Problem />
    <Process />
    <TheFuture />
    <Map onNavigate={onNavigate} />
    <CTA />
    <Footer onNavigate={onNavigate} />
  </div>
);

// Main App Content Component
function AppContent() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  // Network configuration
  const nodeCount = 120;
  const connectionDistance = 140;
  const pulseSpeed = 0.010;
  const rotationSpeed = 0.0005;

  // Get current view from pathname
  const getCurrentView = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  const currentView = getCurrentView();

  // Function to handle navigation using React Router
  const handleNavigation = (view) => {
    if (view === 'home') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
    
    // Scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

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
  }, []);

  return (
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
      
      {/* Routes */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
          
          {/* City Pages */}
          <Route path="/atlanta" element={<Atlanta onNavigate={handleNavigation} />} />
          <Route path="/savannah" element={<Savannah onNavigate={handleNavigation} />} />
          <Route path="/augusta" element={<Augusta onNavigate={handleNavigation} />} />
          <Route path="/athens" element={<Athens onNavigate={handleNavigation} />} />
          <Route path="/marietta" element={<Marietta onNavigate={handleNavigation} />} />
          
          {/* Info Pages - Canonical URLs */}
          <Route path="/about-us" element={<AboutUs onNavigate={handleNavigation} />} />
          <Route path="/georgia" element={<Georgia onNavigate={handleNavigation} />} />
          <Route path="/faq" element={<FAQ onNavigate={handleNavigation} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy onNavigate={handleNavigation} />} />
          <Route path="/terms-of-service" element={<TermsOfService onNavigate={handleNavigation} />} />
          <Route path="/the-future" element={<TheFuture onNavigate={handleNavigation} />} />
          
          {/* SEO-Friendly Redirects - About Us Variations */}
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
          <Route path="/About" element={<Navigate to="/about-us" replace />} />
          <Route path="/AboutUs" element={<Navigate to="/about-us" replace />} />
          <Route path="/about_us" element={<Navigate to="/about-us" replace />} />
          
          {/* FAQ Variations */}
          <Route path="/FAQ" element={<Navigate to="/faq" replace />} />
          <Route path="/faqs" element={<Navigate to="/faq" replace />} />
          <Route path="/questions" element={<Navigate to="/faq" replace />} />
          
          {/* Privacy Policy Variations */}
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/Privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy_policy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacypolicy" element={<Navigate to="/privacy-policy" replace />} />
          
          {/* Terms Variations */}
          <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/Terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/terms_of_service" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/termsofservice" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/tos" element={<Navigate to="/terms-of-service" replace />} />
          
          {/* City Variations (if needed) */}
          <Route path="/Atlanta" element={<Navigate to="/atlanta" replace />} />
          <Route path="/Savannah" element={<Navigate to="/savannah" replace />} />
          <Route path="/Augusta" element={<Navigate to="/augusta" replace />} />
          <Route path="/Athens" element={<Navigate to="/athens" replace />} />
          <Route path="/Marietta" element={<Navigate to="/marietta" replace />} />
          <Route path="/Georgia" element={<Navigate to="/georgia" replace />} />
          {/* 404 Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      <CookieSettings />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;