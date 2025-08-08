import React, { useState, useEffect, useRef } from 'react';
import TheFutureImage from '../assets/images/TheFuture.png';

const TheFuture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Start animation 100px before it comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      data-component="the-future"
      id="the-future"
      className="future-section"
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 40%),
          radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 40%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Main Container */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: isMobile ? '20px' : '32px',
          padding: isMobile ? '2.5rem 1.5rem' : '4rem 3rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(12px)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.8s ease-out'
        }}>
          
          {/* Decorative glow elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(15px)'
          }}></div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            {/* Main Headline */}
            <h1 style={{
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              The Future of Personal Injury Law
            </h1>

            {/* Subheadline with SEO Keywords */}
            <p style={{
              fontSize: isMobile ? 'clamp(1rem, 4vw, 1.25rem)' : 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: '#e2e8f0',
              marginBottom: isMobile ? '2rem' : '3rem',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: isMobile ? '0 auto 2rem auto' : '0 auto 3rem auto',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              From safer Georgia roads to smarter cities, our AI-powered solutions help 
              <strong style={{ color: '#3b82f6' }}> personal injury attorneys</strong> accelerate 
              auto accident case claims and investigations. Partner with us to revolutionize 
              <strong style={{ color: '#22c55e' }}> Georgia car accident litigation</strong> and shape tomorrow's legal landscape.
            </p>

            {/* The Future Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '2rem' : '3rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'all 0.8s ease-out 0.6s'
            }}>
              <img 
                src={TheFutureImage} 
                alt="The Future of Personal Injury Law - AI Technology for Georgia Auto Accident Claims"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: isMobile ? '8px' : '12px',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}
              />
            </div>

            {/* Call to Action */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '0.75rem' : '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.8s',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <button 
                onClick={() => window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank')}
                style={{
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: '#ffffff',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '280px' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                  }
                }}
              >
                Schedule Demo
              </button>

              <button 
                onClick={() => window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank')}
                style={{
                  padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: '2px solid #22c55e',
                  background: 'transparent',
                  color: '#22c55e',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '280px' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = '#22c55e';
                    e.target.style.color = '#000000';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#22c55e';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFuture;