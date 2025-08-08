import React, { useState, useEffect } from 'react';
import argusLogo from '../assets/images/argusLogo.png';

const ArgusHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            <a href="#home" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>
              Home
            </a>
            <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>
              How It Works
            </a>
            <a href="#impact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>
              Our Impact
            </a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}>
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <button style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #2563eb, #0891b2)',
            color: 'white',
            fontWeight: '600',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            Get a Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default ArgusHeader;