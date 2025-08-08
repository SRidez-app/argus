import React, { useState } from 'react';
import argusLogo from '../assets/images/argusLogo.png';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscription email:', email);
    setEmail('');
  };

  return (
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
        padding: '4rem 2rem 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '3rem'
        }}>
          
          {/* Left Side - Logo and Navigation */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src={argusLogo} 
                alt="ARGUS Logo"
                style={{
                  height: '60px',
                  width: 'auto',
                  filter: 'brightness(1.1)'
                }}
              />
            </div>

            {/* Navigation Links */}
            <nav style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {[
                'Home',
                'How It Works',
                'The Future',
                'Contact Us'
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
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
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - Subscribe Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Subscribe
            </h3>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: '1',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  background: 'rgba(30, 41, 59, 0.6)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                  e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.75rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
                }}
              >
                Submit
              </button>
            </form>

            {/* Privacy Policy Notice */}
            <p style={{
              fontSize: '0.875rem',
              color: '#94a3b8',
              lineHeight: '1.5',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              By subscribing you agree to with our{' '}
              <button
                onClick={() => onNavigate && onNavigate('privacy-policy')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#3b82f6',
                  textDecoration: 'underline',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
          margin: '2rem 0'
        }} />

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          
          {/* Legal Links */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Privacy Policy', action: () => onNavigate && onNavigate('privacy-policy') },
              { name: 'Terms of Service', action: () => onNavigate && onNavigate('terms-of-service') },
              { name: 'Cookies Settings', action: () => console.log('Cookies Settings clicked') }
            ].map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: link.name === 'Cookies Settings' ? '600' : '400',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer'
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
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
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
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          nav[style*="display: 'flex'"] {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          form[style*="display: 'flex'"] {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          
          div[style*="justifyContent: 'space-between'"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;