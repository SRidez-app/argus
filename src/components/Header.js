import React, { useState, useEffect } from 'react';
import argusLogo from '../assets/images/argusLogo.png';

const ArgusHeader = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Track active section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only track sections when on home page
      if (currentView === 'home') {
        updateActiveSection();
      }
    };

    const updateActiveSection = () => {
      // Define sections to track (you may need to adjust these selectors based on your actual component structure)
      const sections = [
        { id: 'hero', selector: '[data-section="hero"]' },
        { id: 'problem', selector: '[data-section="problem"]' },
        { id: 'process', selector: '[data-section="process"]' },
        { id: 'the-future', selector: '[data-section="the-future"]' }
      ];

      let currentSection = 'hero'; // default

      for (const section of sections) {
        const element = document.querySelector(section.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if it's in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    if (currentView === 'home') {
      updateActiveSection();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Reset active section when navigating away from home
  useEffect(() => {
    if (currentView !== 'home') {
      setActiveSection('home');
    }
  }, [currentView]);

  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    if (section === 'home') {
      // Navigate to home page
      onNavigate && onNavigate('home');
    } else if (section === 'how-it-works') {
      // If we're not on home, go to home first, then scroll to process section
      if (currentView !== 'home') {
        onNavigate && onNavigate('home');
        // Wait for navigation to complete, then scroll to process section
        setTimeout(() => {
          const processElement = document.querySelector('[data-section="process"]');
          if (processElement) {
            processElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        // If we're already on home, just scroll to process section
        const processElement = document.querySelector('[data-section="process"]');
        if (processElement) {
          processElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else if (section === 'the-future') {
      // If we're not on home, go to home first, then scroll to the-future section
      if (currentView !== 'home') {
        onNavigate && onNavigate('home');
        // Wait for navigation to complete, then scroll to the-future section
        setTimeout(() => {
          const futureElement = document.querySelector('[data-section="the-future"]');
          if (futureElement) {
            futureElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        // If we're already on home, just scroll to the-future section
        const futureElement = document.querySelector('[data-section="the-future"]');
        if (futureElement) {
          futureElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Function to handle external links
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Helper function to determine if a nav item should be highlighted
  const isNavItemActive = (navItem) => {
    if (currentView !== 'home') {
      return navItem === 'home';
    }
    
    // When on home page, highlight based on scroll position
    switch (navItem) {
      case 'home':
        return activeSection === 'hero' || activeSection === 'problem';
      case 'how-it-works':
        return activeSection === 'process';
      case 'the-future':
        return activeSection === 'the-future';
      default:
        return false;
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo - Click to go home */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              cursor: 'pointer'
            }}
            onClick={() => handleNavClick('home')}
          >
            <img 
              src={argusLogo} 
              alt="Argus Logo" 
              style={{
                height: '90px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <button 
              onClick={() => handleNavClick('home')}
              style={{ 
                background: 'none',
                border: 'none',
                color: isNavItemActive('home') ? '#3b82f6' : 'white', 
                textDecoration: 'none', 
                fontWeight: '500', 
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.target.style.color = isNavItemActive('home') ? '#3b82f6' : 'white'}
            >
              Home
            </button>
            
            <button 
              onClick={() => handleNavClick('how-it-works')}
              style={{ 
                background: 'none',
                border: 'none',
                color: isNavItemActive('how-it-works') ? '#3b82f6' : 'white', 
                textDecoration: 'none', 
                fontWeight: '500', 
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.target.style.color = isNavItemActive('how-it-works') ? '#3b82f6' : 'white'}
            >
              How It Works
            </button>
            
            <button 
              onClick={() => handleNavClick('the-future')}
              style={{ 
                background: 'none',
                border: 'none',
                color: isNavItemActive('the-future') ? '#3b82f6' : 'white', 
                textDecoration: 'none', 
                fontWeight: '500', 
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.target.style.color = isNavItemActive('the-future') ? '#3b82f6' : 'white'}
            >
              The Future
            </button>
            
            <button 
              onClick={() => handleExternalLink('https://calendly.com/getargusai/30min?month=2025-08')}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'white', 
                textDecoration: 'none', 
                fontWeight: '500', 
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              Contact Us
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => handleExternalLink('https://calendly.com/getargusai/30min?month=2025-08')}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #2563eb, #0891b2)',
              color: 'white',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Get a Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default ArgusHeader;