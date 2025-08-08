import React, { useState, useEffect, useRef } from 'react';

// Import the images
import camImg from '../assets/images/Cam.png';
import archiveImg from '../assets/images/archive.png';
import deliverImg from '../assets/images/deliver.png';

// AI-powered process steps for SEO optimization
const processSteps = [
  {
    id: 1,
    title: "Detect",
    subtitle: "AI-Powered Accident Detection",
    description: "Our advanced computer vision technology monitors traffic camera networks across Georgia to instantly identify vehicular accidents and critical incidents for personal injury case evidence.",
    details: "Real-time incident detection via 911 integration and traffic management systems",
    icon: camImg
  },
  {
    id: 2,
    title: "Archive", 
    subtitle: "Enhanced Evidence Analysis",
    description: "AI algorithms enhance human decision-making by providing precise accident reconstruction data, vehicle trajectory analysis, and impact assessments for Georgia auto accident attorneys.",
    details: "AI-augmented reporting delivers faster, more accurate insights for legal professionals",
    icon: archiveImg
  },
  {
    id: 3,
    title: "Deliver",
    subtitle: "Comprehensive Case Documentation", 
    description: "Detailed forensic analysis combining AI computer vision with legal expertise to provide court-ready evidence packages for personal injury litigation in Georgia courts.",
    details: "Complete data analysis for case planning and courtroom justice",
    icon: deliverImg
  }
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section 
      ref={sectionRef}
      data-component="process"
      id="process"
      className="process-section"
      style={{
        padding: '5rem 0',
        position: 'relative',
        background: 'transparent'
      }}
    >
      {/* Background Pattern - more subtle */}
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
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Main Container - Much more transparent */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)', // Much more transparent
          borderRadius: '32px',
          padding: '4rem 3rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(12px)', // Subtle blur
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
            marginBottom: '4rem', 
            position: 'relative', 
            zIndex: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' // Better readability
            }}>
              How It Works
            </h2>
            
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#06b6d4',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              AI and Computer Vision in Action
            </h3>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)' // Better readability
            }}>
              Our technology uses advanced computer vision detection from public and private cameras across Georgia 
              to deliver simple solutions to complex auto accident evidence collection for personal injury attorneys.
            </p>
          </div>

          {/* AI Process Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
            position: 'relative',
            zIndex: 2
          }}>
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                style={{
                  background: 'rgba(62, 133, 247, 0.15)', // More transparent cards
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)', // Glassmorphism effect
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                  transitionDelay: isVisible ? `${0.4 + index * 0.2}s` : '0s',
                  transitionDuration: '0.8s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
              >
                {/* Icon Container */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <img 
                    src={step.icon} 
                    alt={`${step.title} icon`}
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Step Title */}
                <h4 style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {step.title}
                </h4>
                
                {/* Subtitle */}
                <h5 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  lineHeight: '1.3',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}>
                  {step.subtitle}
                </h5>
                
                {/* Description */}
                <p style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                }}>
                  {step.description}
                </p>
                
                {/* Details */}
                <p style={{
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                }}>
                  "{step.details}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)', // More transparent
            padding: '2.5rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            backdropFilter: 'blur(6px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out 1.2s'
          }}>
            <p style={{
              fontSize: '1.125rem',
              color: '#e2e8f0',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)' // Better readability
            }}>
              Our AI-driven computer vision transforms existing camera networks into intelligent systems 
              that detect auto accidents, analyze traffic patterns, and enhance legal decisions for Georgia 
              personal injury attorneys—making case preparation <strong style={{ color: '#22c55e' }}>faster</strong>, <strong style={{ color: '#3b82f6' }}>smarter</strong>, and <strong style={{ color: '#06b6d4' }}>more successful</strong>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          div[style*="padding: '4rem 3rem'"] {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;