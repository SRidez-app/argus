import React, { useState } from 'react';
import argusLogo from '../assets/images/argusLogo.png';
import CookieSettings from './CookieSettings.js';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscription email:', email);
    setEmail('');
  };

  const handleNavigation = (link) => {
    switch(link) {
      case 'Home':
        // Scroll to top (Hero section)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'How It Works':
        // Scroll to Process component
        const processElement = document.querySelector('[data-component="process"]') || 
                              document.querySelector('.process-section') ||
                              document.getElementById('process');
        if (processElement) {
          processElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'The Future':
        // Scroll to TheFuture component
        const futureElement = document.querySelector('[data-component="the-future"]') || 
                             document.querySelector('.future-section') ||
                             document.getElementById('the-future');
        if (futureElement) {
          futureElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'Contact Us':
        // Open Calendly link in new tab
        window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank');
        break;
      default:
        break;
    }
  };

  const handleLegalClick = (action) => {
    switch(action) {
      case 'privacy-policy':
        onNavigate && onNavigate('privacy-policy');
        break;
      case 'terms-of-service':
        onNavigate && onNavigate('terms-of-service');
        break;
      case 'cookies-settings':
        setShowCookieSettings(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <footer style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
        borderTop: '1px solid rgba(59, 130, 246, 0.2)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 40%)
          `,
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2.5rem 2rem 1.5rem',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Main Footer Content */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '3rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            
            {/* Left Side - Logo */}
            <div style={{ flex: '0 0 auto' }}>
              <img 
                src={argusLogo} 
                alt="ARGUS Logo"
                style={{
                  height: '80px',
                  width: 'auto',
                  filter: 'brightness(1.1)'
                }}
              />
            </div>

            {/* Right Side - Navigation */}
            <div style={{ flex: '1 1 auto', maxWidth: '600px' }}>
              <nav style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'flex-end'
              }}>
                {[
                  'Home',
                  'How It Works',
                  'The Future',
                  'Contact Us'
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNavigation(link)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e2e8f0',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                      cursor: 'pointer',
                      padding: '0.5rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#3b82f6';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#e2e8f0';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
            margin: '1.5rem 0'
          }} />

          {/* Bottom Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            
            {/* Legal Links */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {[
                { name: 'Privacy Policy', action: 'privacy-policy' },
                { name: 'Terms of Service', action: 'terms-of-service' },
            
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLegalClick(link.action)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer',
                    padding: '0.25rem 0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#cbd5e1';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#94a3b8';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Copyright */}
            <p style={{
              fontSize: '0.875rem',
              color: '#94a3b8',
              fontWeight: '500',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
              margin: '0'
            }}>
              © 2025 <strong style={{ color: '#ffffff' }}>ARGUS</strong>. All rights reserved.
            </p>
          </div>
        </div>

        <style jsx>{`
          input::placeholder {
            color: rgba(203, 213, 225, 0.6);
          }
          
          @media (max-width: 768px) {
            div[style*="justifyContent: 'space-between'"] {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem !important;
            }
            
            nav[style*="justifyContent: 'flex-end'"] {
              justify-content: flex-start !important;
              flex-direction: column !important;
              gap: 1rem !important;
            }
            
            div[style*="gap: '1.5rem'"] {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="maxWidth: '1400px'"] {
              padding: 2rem 1rem 1rem !important;
            }
            
            nav {
              width: 100% !important;
            }
          }
        `}</style>
      </footer>

  
    </>
  );
};

export default Footer;