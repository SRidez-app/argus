import React, { useState, useEffect, useRef } from 'react';
// Adjust this import to match your setup:
// If you use Vite alias "@", do: import gavel from '@/assets/images/gavel.png';
import gavel from '../assets/images/gavel.png';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleLetsTalkClick = () => {
    window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      data-component="cta"
      id="cta"
      className="cta-section"
      style={{
        padding: isMobile ? '3rem 0' : '5rem 0',
        position: 'relative',
        background: 'transparent'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 40%),
          radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 40%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 24px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Container */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: isMobile ? '20px' : '32px',
          padding: isMobile ? '3rem 2rem' : '4rem 3rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.8s ease-out'
        }}>
          {/* --- Gavel background (behind content) --- */}
          <img
            src={gavel}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '120%',
              height: '120%',
              objectFit: 'contain',
          
              objectPosition: isMobile ? '60% center' : '85% center',
              opacity: isMobile ? 0.35 : 0.45,   
            
              filter: isMobile ? 'none' : 'blur(1.5px) drop-shadow(0 10px 30px rgba(0,0,0,0.45))',
              transform: isMobile ? 'translate(8%, -4%) rotate(-4deg)' : 'translate(14%, -6%) rotate(-6deg)',
              mixBlendMode: 'soft-light',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
          {/* A subtle dark veil for contrast over the image */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.25) 40%, rgba(2,6,23,0.35) 100%)',
              zIndex: 1
            }}
          />

          {/* Decorative glow elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(15px)',
            zIndex: 1
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              Ready to Secure Your Evidence?
            </h2>

            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#e2e8f0',
              marginBottom: isMobile ? '2.5rem' : '3rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: isMobile ? '0 auto 2.5rem auto' : '0 auto 3rem auto',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              Don't let critical video evidence disappear. Let's discuss how we can help protect your case, settle faster, and increase case value with clear evidence while reducing disputed liability.
            </p>

            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.6s'
            }}>
              <button
                onClick={handleLetsTalkClick}
                style={{
                  padding: isMobile ? '1rem 2rem' : '1.25rem 2.5rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                  color: '#ffffff',
                  fontSize: isMobile ? '1.125rem' : '1.25rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                  minWidth: isMobile ? '200px' : '220px',
                  textTransform: 'none',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 99, 235, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
                  }
                }}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
