import React, { useState, useEffect, useRef } from 'react';

// Import the images
import evidenceImg from '../assets/images/evidence.png';
import bureaucracyImg from '../assets/images/bureaucracy.png';
import moneyImg from '../assets/images/money.png';

const ProblemSection = () => {
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
    const currentSection = sectionRef.current; // Capture the ref value

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

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  const problems = [
    {
      id: 1,
      title: "Evidence Disappears Fast",
      description: "Most traffic cameras only store footage for 24-72 hours. By the time you know you need it, it's deleted forever.",
      image: evidenceImg,
      delay: 0
    },
    {
      id: 2,
      title: "Complex Bureaucracy", 
      description: "Multiple agencies, different procedures, endless paperwork. Each day of delay means lost evidence.",
      image: bureaucracyImg,
      delay: 0.2
    },
    {
      id: 3,
      title: "Your Time = Lost Money",
      description: "Spending hours tracking down footage means less time on high-value legal work and client development.",
      image: moneyImg,
      delay: 0.4
    }
  ];

  // Determine grid columns based on screen size
  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (window.innerWidth <= 1024) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  return (
    <section 
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: 'transparent',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern - more subtle like Process */}
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
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Main Container - Much more transparent like Process */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: isMobile ? '20px' : '32px',
          padding: isMobile ? '2rem 1.5rem' : '4rem 3rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(12px)',
          position: 'relative',
          overflow: 'hidden',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.8s ease-out'
        }}>
          
          {/* Decorative glow elements - more subtle */}
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

        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '3rem' : '5rem',
          position: 'relative', 
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          <h1 style={{
            fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            lineHeight: '1.1',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
          }}>
            Did Your Evidence Disappear in the First{' '}
            <span style={{
              color: '#ef4444'
            }}>
              72 Hours?
            </span>
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#e2e8f0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7',
            opacity: '0.9',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
          }}>
            While you focus on your client's care, critical video evidence vanishes forever from traffic camera systems.
          </p>
        </div>

        {/* Problems Grid */}
        <div 
          className="problems-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: isMobile ? '3rem' : '4rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          {problems.map((problem, index) => (
            <div 
              key={problem.id}
              style={{
                position: 'relative',
                height: isMobile ? '280px' : '350px',
                borderRadius: isMobile ? '16px' : '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transform: 'perspective(1000px) rotateY(0deg)',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                transitionDelay: isVisible ? `${0.4 + index * 0.2}s` : '0s',
                transitionDuration: '0.8s'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) translateY(-20px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4)';
                  
                  const overlay = e.currentTarget.querySelector('.problem-overlay');
                  const content = e.currentTarget.querySelector('.problem-content');
                  const bgImage = e.currentTarget.querySelector('.problem-bg');
                  
                  if (overlay) overlay.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.3), rgba(30, 41, 59, 0.4))';
                  if (content) content.style.transform = 'translateY(-10px)';
                  if (bgImage) bgImage.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(0px) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
                  
                  const overlay = e.currentTarget.querySelector('.problem-overlay');
                  const content = e.currentTarget.querySelector('.problem-content');
                  const bgImage = e.currentTarget.querySelector('.problem-bg');
                  
                  if (overlay) overlay.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(30, 41, 59, 0.5))';
                  if (content) content.style.transform = 'translateY(0)';
                  if (bgImage) bgImage.style.transform = 'scale(1.05)';
                }
              }}
            >
              {/* Background Image */}
              <div 
                className="problem-bg"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${problem.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.6s ease',
                  filter: 'brightness(0.7) contrast(1.1)'
                }}
              />
              
              {/* Gradient Overlay */}
              <div 
                className="problem-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(30, 41, 59, 0.5))',
                  transition: 'background 0.4s ease'
                }}
              />
              
              {/* Content */}
              <div 
                className="problem-content"
                style={{
                  position: 'relative',
                  zIndex: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: isMobile ? '1.5rem 1.25rem' : '1.5rem',
                  transition: 'transform 0.4s ease'
                }}
              >
                {/* Content */}
                <div>
                  <h3 style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    lineHeight: '1.2',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                  }}>
                    {problem.title}
                  </h3>
                  
                  <p style={{
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    color: '#e2e8f0',
                    lineHeight: '1.5',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                  }}>
                    {problem.description}
                  </p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: isMobile ? '60px' : '100px',
                height: isMobile ? '60px' : '100px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), transparent)',
                borderBottomLeft: isMobile ? '30px solid rgba(239, 68, 68, 0.1)' : '50px solid rgba(239, 68, 68, 0.1)',
                zIndex: 4
              }} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: isMobile ? '2.5rem 1.5rem' : '4rem 2rem',
          borderRadius: isMobile ? '16px' : '24px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(6px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease-out 1.2s'
        }}>
          <h2 style={{
            fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '1.5rem',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
          }}>
            We Get Your Evidence{' '}
            <span style={{
              color: '#ef4444'
            }}>
              Before It's Gone
            </span>
          </h2>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
          }}>
            Atlanta • Savannah • Augusta • Alpharetta  • Macon • Warner Robins   
          </p>
        </div>
        
        </div> {/* End of main container */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;