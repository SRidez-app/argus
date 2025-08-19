import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const AboutUs = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Update document title for SEO
    document.title = 'About Argus AI | Professional Traffic Camera Footage & Video Evidence Services Georgia';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Argus AI\'s mission to provide professional traffic camera footage retrieval and video evidence services for Georgia personal injury attorneys. Leading AI-powered legal technology since 2025.');
    }

    // Add structured data for About page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": ["ProfessionalService", "TechnologyCompany"],
        "name": "Argus AI",
        "alternateName": "ArgusAI",
        "description": "Professional traffic camera footage retrieval and video evidence collection services for personal injury attorneys and insurance investigators",
        "url": "https://argusai.live",
        "foundingDate": "2025",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Atlanta",
          "addressRegion": "GA",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "State", "name": "Georgia" },
          { "@type": "State", "name": "Maryland" },
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Virgina" },
          { "@type": "State", "name": "Nevada" }
        ],
        "serviceType": [
          "Traffic Camera Footage Retrieval",
          "Video Evidence Analysis",
          "Court Evidence Preparation",
          "AI-Enhanced Video Processing",
          "Emergency Evidence Response"
        ]
      }
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowContactModal(false);
      }
    };

    const handleClickOutside = (e) => {
      if (showContactModal && e.target.classList.contains('modal-overlay')) {
        setShowContactModal(false);
      }
    };

    if (showContactModal) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showContactModal]);

  const ContactModal = () => {
    if (!showContactModal) return null;

    return (
      <div 
        className="modal-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
            borderRadius: isMobile ? '20px' : '24px',
            padding: isMobile ? '2rem' : '2.5rem',
            maxWidth: isMobile ? '95vw' : '500px',
            width: '100%',
            maxHeight: isMobile ? '90vh' : '80vh',
            overflowY: 'auto',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(59, 130, 246, 0.1)',
            position: 'relative',
            animation: 'modalSlideIn 0.3s ease-out'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setShowContactModal(false)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              color: '#e2e8f0',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
              e.currentTarget.style.color = '#ef4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#e2e8f0';
            }}
          >
            ×
          </button>

          {/* Modal content */}
          <div style={{ paddingRight: '20px' }}>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.5rem',
              textAlign: 'center',
              lineHeight: '1.3'
            }}>
              Contact Our Support Team
            </h3>

            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '2rem'
            }}>
              <p style={{
                color: '#e2e8f0',
                fontSize: isMobile ? '1rem' : '1.1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Get in touch with our expert team for immediate assistance with traffic camera footage and video evidence questions.
              </p>

              {/* Contact methods */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.2)'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    marginRight: '12px',
                    color: '#22c55e'
                  }}>
                    📧
                  </div>
                  <div>
                    <p style={{
                      color: '#e2e8f0',
                      fontSize: '0.9rem',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Email us at: <a 
                        href="mailto:hello@argusai.live" 
                        style={{ 
                          color: '#22c55e', 
                          textDecoration: 'none',
                          fontWeight: '700'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        hello@argusai.live
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    marginRight: '12px',
                    color: '#3b82f6'
                  }}>
                    📞
                  </div>
                  <div>
                    <p style={{
                      color: '#e2e8f0',
                      fontSize: '0.9rem',
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      Call us at: <a 
                        href="tel:+14024806092" 
                        style={{ 
                          color: '#3b82f6', 
                          textDecoration: 'none',
                          fontWeight: '700'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        1-402-480-6092
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule section */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <p style={{
                  color: '#e2e8f0',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  Or connect with our team member directly - find a time on your calendar that works best.
                </p>

                <a
                  href="https://calendly.com/getargusai/30min?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: 'white',
                    padding: isMobile ? '12px 24px' : '14px 28px',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)';
                    }
                  }}
                >
                  Schedule a Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": ["ProfessionalService", "TechnologyCompany"],
            "name": "Argus AI",
            "alternateName": "ArgusAI",
            "description": "Professional traffic camera footage retrieval and video evidence collection services for personal injury attorneys and insurance investigators",
            "url": "https://argusai.live",
            "foundingDate": "2025",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "State", "name": "Georgia" },
              { "@type": "State", "name": "Virginia" },
              { "@type": "State", "name": "California" },
              { "@type": "State", "name": "Maryland" },
              { "@type": "State", "name": "Nevada" }
            ],
            "serviceType": [
              "Traffic Camera Footage Retrieval",
              "Video Evidence Analysis",
              "Court Evidence Preparation",
              "AI-Enhanced Video Processing",
              "Emergency Evidence Response"
            ]
          }
        })}
      </script>

      <section 
        ref={sectionRef}
        data-component="about-us"
        id="about-us"
        className="about-us-section"
        style={{
          padding: isMobile ? '3rem 0' : '5rem 0',
          position: 'relative',
          background: 'transparent',
          minHeight: '100vh'
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
        }}></div>

        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 16px' : '0 24px', 
          position: 'relative' 
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

            {/* Header Section */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: isMobile ? '3rem' : '4rem', 
              position: 'relative', 
              zIndex: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}>
              <h1 style={{
                fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: '1.2',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }} itemProp="name">
                About Argus AI
              </h1>
              
              <h2 style={{
                fontSize: isMobile ? 'clamp(1.25rem, 6vw, 1.8rem)' : 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#06b6d4',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Leading Provider of AI-Enhanced Traffic Camera Footage
              </h2>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: '#e2e8f0',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }} itemProp="description">
                Founded in 2025, we're revolutionizing <strong style={{ color: '#22c55e' }}>traffic accident investigations </strong> 
                through cutting-edge artificial intelligence and comprehensive video evidence collection 
                for legal professionals across the United States.
              </p>
            </div>


            {/* Mission Section - ADDED ID */}
            <div 
              id="our-mission"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: isMobile ? '2rem' : '2.5rem',
                borderRadius: isMobile ? '16px' : '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '3rem',
                position: 'relative',
                zIndex: 2,
                backdropFilter: 'blur(6px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 0.6s'
              }} 
              itemScope 
              itemType="https://schema.org/Organization"
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#22c55e',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Our Mission: Revolutionizing Legal Evidence Collection
              </h3>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }} itemProp="description">
                We serve personal injury attorneys, insurance investigators, and law enforcement agencies 
                across <strong style={{ color: '#3b82f6' }}>Georgia, Virginia, California, Maryland, and Nevada</strong>. 
                Our commitment extends beyond simple footage retrieval—we're dedicated to delivering 
                truth through technology.
              </p>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                marginBottom: 0
              }}>
                Our AI-powered platform doesn't just archive video—it transforms raw footage into actionable, 
                <strong style={{ color: '#22c55e' }}>court-ready evidence</strong> that accelerates case resolution 
                and meets the highest standards for legal proceedings.
              </p>
            </div>

            {/* Statistics Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 197, 94, 0.1) 100%)',
              padding: isMobile ? '2rem 1.5rem' : '2.5rem',
              borderRadius: isMobile ? '16px' : '20px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              marginBottom: '3rem',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.8s'
            }}>
              <div>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  89%
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>Case Success Rate</p>
              </div>
              <div>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  24/7
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>Emergency Response</p>
              </div>
              <div>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  5+
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>States Served</p>
              </div>
              <div>
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  4K
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>Video Resolution</p>
              </div>
            </div>

            {/* Technology Features Grid - ADDED ID */}
            <div 
              id="technology-platform"
              style={{
                marginBottom: '3rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 1.0s'
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#22c55e',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Advanced Technology Platform
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'AI-Enhanced Analysis',
                    description: 'Our proprietary AI technology automatically detects, analyzes, and catalogs critical evidence within traffic camera footage, ensuring comprehensive coverage and rapid processing for time-sensitive legal cases.'
                  },
                  {
                    title: 'Real-Time Incident Detection',
                    description: 'Unlike traditional archive-only services, Argus AI provides live monitoring capabilities with instant incident alerts integrated directly with 911 dispatch systems across our coverage areas.'
                  },
                  {
                    title: 'Court-Certified Processing',
                    description: 'Every video evidence package includes detailed chain of custody documentation, timestamp verification, and authentication protocols that meet all federal and state court requirements.'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: isMobile ? '1.5rem' : '2rem',
                      backdropFilter: 'blur(6px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <h4 style={{
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: '600',
                      color: '#22c55e',
                      marginBottom: '1rem'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      color: '#cbd5e1',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Network - ADDED ID */}
            <div 
              id="coverage-network"
              style={{
                marginBottom: '3rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 1.2s'
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#22c55e',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Comprehensive Coverage Network
              </h3>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                textAlign: 'center',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Our extensive traffic camera network spans major metropolitan areas and highway systems 
                across five states, providing unparalleled access to <strong style={{ color: '#3b82f6' }}>traffic accident footage</strong> when you need it most.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { state: 'Georgia', cities: 'Atlanta, Augusta, Savannah, Marietta, Athens' },
                  { state: 'Virginia', cities: 'Norfolk, Newport News, Virginia Beach, Richmond, Alexandria, Alrginton' },
                  { state: 'California', cities: 'Los Angeles, Sacramento, Anaheim, Long Beach, Riverside, San Bernadino, San Deigo' },
                  { state: 'Maryland', cities: 'Baltimore, Frederick, Annapolis' },
                  { state: 'Nevada', cities: 'Las Vegas, Reno, Carson City, Hendersonville' }
                ].map((location, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      textAlign: 'center',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#22c55e',
                      marginBottom: '0.5rem'
                    }}>
                      {location.state}
                    </h4>
                    <p style={{
                      color: '#94A3B8',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      {location.cities}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Standards - ADDED ID */}
            <div 
              id="professional-standards"
              style={{
                marginBottom: '3rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 1.4s'
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#22c55e',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Professional Standards & Compliance
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  {
                    title: 'Legal Compliance',
                    description: 'All evidence collection and processing procedures comply with federal and state legal requirements, including proper chain of custody documentation and court admissibility standards.'
                  },
                  {
                    title: 'Data Security',
                    description: 'Advanced encryption, secure storage protocols, and 24/7 monitoring protect all video evidence and client information with military-grade security measures.'
                  },
                  {
                    title: 'Quality Assurance',
                    description: 'Every video undergoes multi-point quality verification, including resolution standards, timestamp accuracy, and metadata validation before delivery to legal professionals.'
                  }
                ].map((standard, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: isMobile ? '1.5rem' : '2rem',
                      backdropFilter: 'blur(6px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <h4 style={{
                      fontSize: isMobile ? '1.25rem' : '1.5rem',
                      fontWeight: '600',
                      color: '#22c55e',
                      marginBottom: '1rem'
                    }}>
                      {standard.title}
                    </h4>
                    <p style={{
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      color: '#cbd5e1',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Leadership - ADDED ID */}
            <div 
              id="industry-leadership"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 197, 94, 0.1) 100%)',
                padding: isMobile ? '2rem' : '2.5rem',
                borderRadius: isMobile ? '16px' : '20px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                marginBottom: '3rem',
                backdropFilter: 'blur(10px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 1.6s'
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#3B82F6',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Industry Leadership in Legal Technology
              </h3>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                As Georgia's leading provider of <strong style={{ color: '#22c55e' }}>traffic camera footage services</strong>, 
                Argus AI continues to innovate at the intersection of artificial intelligence and legal evidence collection. 
                Our platform serves as the foundation for faster case resolution, more accurate liability determination, 
                and improved outcomes for legal professionals nationwide.
              </p>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                marginBottom: 0,
                textAlign: 'center'
              }}>
                We partner with law firms, insurance companies, and government agencies to deliver comprehensive 
                <strong style={{ color: '#3b82f6' }}> video evidence solutions</strong> that transform how traffic accident 
                investigations are conducted in the digital age.
              </p>
            </div>

            {/* Contact CTA Section - ADDED ID */}
            <div 
              id="contact-team"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: isMobile ? '2rem 1.5rem' : '2.5rem',
                borderRadius: isMobile ? '16px' : '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
                backdropFilter: 'blur(6px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s ease-out 1.8s'
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Experience the Argus AI Advantage
              </h3>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Join thousands of legal professionals who trust <strong style={{ color: '#22c55e' }}>Argus AI</strong> for 
                their most critical traffic accident cases. Our team of experts is ready to discuss how our advanced 
                video evidence services can transform your case outcomes.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <button
                  onClick={() => window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank')}
                  style={{
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: isMobile ? '100%' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Get Started Today
                </button>
                
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      const processSection = document.getElementById('process');
                      if (processSection) {
                        processSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  style={{
                    background: 'transparent',
                    color: '#3b82f6',
                    padding: '12px 24px',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: isMobile ? '100%' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = '#3b82f6';
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#3b82f6';
                    }
                  }}
                >
                  Learn More About Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal />

        <style jsx>{`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </section>
      <Footer onNavigate={onNavigate} currentPage="about-us" />
    </>
  );
};

export default AboutUs;