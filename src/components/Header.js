import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import argusLogo from '../assets/images/argusLogo.png';

const ArgusHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Track active section
  const [isMobile, setIsMobile] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Get current view from location
  const getCurrentView = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // Remove leading slash
  };

  const currentView = getCurrentView();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only track sections when on home page
      if (currentView === 'home') {
        updateActiveSection();
      }
    };

    const updateActiveSection = () => {
      // Define sections to track with fallback selectors
      const sections = [
        { 
          id: 'hero', 
          selectors: [
            '[data-section="hero"]',
            '.hero-section',
            '#hero'
          ]
        },
        { 
          id: 'problem', 
          selectors: [
            '[data-section="problem"]',
            '.problem-section',
            '#problem'
          ]
        },
        { 
          id: 'process', 
          selectors: [
            '[data-section="process"]',
            '.process-section',
            '#process',
            '[data-component="process"]'
          ]
        },
        { 
          id: 'the-future', 
          selectors: [
            '[data-section="the-future"]',
            '.the-future-section',
            '#the-future',
            '[data-component="the-future"]'
          ]
        }
      ];

      let currentSection = 'hero'; // default

      for (const section of sections) {
        let element = null;
        
        // Try each selector until we find the element
        for (const selector of section.selectors) {
          element = document.querySelector(selector);
          if (element) break;
        }
        
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

  // Close mobile menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Function to scroll to a section with multiple selector options
  const scrollToSection = (sectionSelectors, behavior = 'smooth') => {
    let element = null;
    
    // Try each selector until we find the element
    for (const selector of sectionSelectors) {
      element = document.querySelector(selector);
      if (element) break;
    }
    
    if (element) {
      element.scrollIntoView({ behavior, block: 'start' });
      return true;
    }
    return false;
  };

  // Function to handle navigation clicks using React Router
  const handleNavClick = (section) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
    if (section === 'home') {
      // Always navigate to home page and scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (section === 'how-it-works') {
      // Navigate to home first if not already there, then scroll to process section
      if (currentView !== 'home') {
        navigate('/');
        // Wait for navigation to complete, then scroll to process section
        setTimeout(() => {
          scrollToSection([
            '[data-component="process"]',
            '[data-section="process"]',
            '.process-section',
            '#process'
          ]);
        }, 500);
      } else {
        // If already on home, just scroll to process section
        scrollToSection([
          '[data-component="process"]',
          '[data-section="process"]',
          '.process-section',
          '#process'
        ]);
      }
    } else if (section === 'the-future') {
      // Navigate to home first if not already there, then scroll to the-future section
      if (currentView !== 'home') {
        navigate('/');
        // Wait for navigation to complete, then scroll to the-future section
        setTimeout(() => {
          scrollToSection([
            '[data-component="the-future"]',
            '[data-section="the-future"]',
            '.the-future-section',
            '#the-future'
          ]);
        }, 500);
      } else {
        // If already on home, just scroll to the-future section
        scrollToSection([
          '[data-component="the-future"]',
          '[data-section="the-future"]',
          '.the-future-section',
          '#the-future'
        ]);
      }
    }
  };

  // Function to handle external links
  const handleExternalLink = (url) => {
    // Close mobile menu when clicking external links
    setIsMobileMenuOpen(false);
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

  // Toggle mobile menu
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: isMobile ? '70px' : '80px' 
        }}>
          
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
                height: isMobile ? '70px' : '90px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
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
          )}

          {/* Desktop CTA Button */}
          {!isMobile && (
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
          )}

          {/* Mobile Hamburger Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
              }}></div>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }}></div>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
              }}></div>
            </button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            zIndex: 40
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem 16px'
            }}>
              <button 
                onClick={() => handleNavClick('home')}
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: isNavItemActive('home') ? '#3b82f6' : 'white', 
                  textDecoration: 'none', 
                  fontWeight: '500', 
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '12px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
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
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '12px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
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
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '12px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
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
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '12px 0',
                  textAlign: 'left',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Contact Us
              </button>

              {/* Mobile CTA Button */}
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
                  fontSize: '1rem',
                  marginTop: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                Get a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ArgusHeader;