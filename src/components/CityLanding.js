import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const CityLanding = ({ cityData, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = cityData.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', cityData.description);
    }
    
    // Set visibility after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, [cityData]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleGetStarted = () => {
    window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank');
  };

  const handleContactUs = () => {
    window.location.href = 'mailto:hello@argusai.live';
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Argus AI - ${cityData.name}`,
          "description": cityData.description,
          "url": `https://argusai.live/${cityData.slug}`,
          "areaServed": {
            "@type": "City",
            "name": cityData.name,
            "addressRegion": "GA",
            "addressCountry": "US"
          },
          "serviceType": [
            "Traffic Camera Footage Retrieval",
            "Video Evidence Analysis",
            "Car Accident Video Evidence",
            "Personal Injury Legal Support"
          ],
          "provider": {
            "@type": "Organization",
            "name": "Argus AI",
            "url": "https://argusai.live"
          }
        })}
      </script>

      <div style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      }}>
        
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
          padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Hero Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: isMobile ? '20px' : '32px',
            padding: isMobile ? '2.5rem 1.5rem' : '4rem 3rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '3rem',
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out'
          }}>
            
            {/* Navigation Breadcrumb */}
            <div style={{
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <button
                onClick={() => onNavigate('home')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
              >
                ← Back to Home
              </button>
              <span style={{ color: '#64748b', margin: '0 0.5rem' }}>/</span>
              <span style={{ color: '#e2e8f0' }}>{cityData.name} Traffic Camera Footage</span>
            </div>

            <h1 style={{
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}>
              {cityData.heroTitle}
            </h1>
            
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              color: '#06b6d4',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Professional Legal Evidence Collection in {cityData.name}
            </p>
            
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#e2e8f0',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              lineHeight: '1.7',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              {cityData.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem'
            }}>
              <button
                onClick={handleGetStarted}
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: 'white',
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: isMobile ? '100%' : '200px',
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
                Get Started Today
              </button>
              
              <button
                onClick={handleContactUs}
                style={{
                  background: 'transparent',
                  color: '#3b82f6',
                  padding: '14px 28px',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: isMobile ? '100%' : '200px'
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
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Local Services Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: isMobile ? '20px' : '32px',
            padding: isMobile ? '2.5rem 1.5rem' : '3rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '3rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out 0.4s'
          }}>
            
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              fontWeight: '700',
              color: '#22c55e',
              marginBottom: '2rem',
              textAlign: 'center',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              {cityData.name} Traffic Camera Coverage Areas
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {cityData.coverageAreas.map((area, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '1.5rem',
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
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#3b82f6',
                    marginBottom: '1rem'
                  }}>
                    {area.title}
                  </h3>
                  <p style={{
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Statistics */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#22c55e',
                marginBottom: '1rem'
              }}>
                Why Choose Argus AI in {cityData.name}?
              </h3>
              <div style={{
                display: 'grid',
               gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                {cityData.stats.map((stat, index) => (
                  <div key={index}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#3b82f6',
                      marginBottom: '0.5rem'
                    }}>
                     {stat.number}  
                    </div>
                    <p style={{
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

  
          {/* Statewide Georgia Coverage Link Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: isMobile ? '20px' : '32px',
            padding: isMobile ? '2.5rem 1.5rem' : '3rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '3rem',
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out 0.6s'
          }}>
            
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: '700',
              color: '#22c55e',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Comprehensive Georgia Coverage
            </h3>
            
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#e2e8f0',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              maxWidth: '700px',
              margin: '0 auto 1.5rem'
            }}>
              Need evidence from multiple locations across Georgia? Our{' '}
              <button
                onClick={() => onNavigate('georgia')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#3b82f6',
                  fontSize: 'inherit',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3b82f6'}
              >
                traffic camera video evidence Georgia
              </button>{' '}
              services provide comprehensive coverage across all major cities, interstate corridors, and rural highways throughout the state.
            </p>
            
            <button
              onClick={() => onNavigate('georgia')}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }
              }}
            >
              View All Georgia Coverage →
            </button>
          </div>


          {/* Contact CTA */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: isMobile ? '20px' : '32px',
            padding: isMobile ? '2.5rem 1.5rem' : '3rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(12px)',
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease-out 0.8s'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : '2.2rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Ready to Get {cityData.name} Traffic Camera Footage?
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '2rem',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Contact our {cityData.name} team today for immediate assistance with your traffic accident case.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <a
                href="tel:+14024806092"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  minWidth: isMobile ? '100%' : '180px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                📞 Call Now: 402-480-6092
              </a>
              
              <a
                href="mailto:hello@argusai.live"
                style={{
                  background: 'transparent',
                  color: '#22c55e',
                  padding: '12px 24px',
                  border: '2px solid #22c55e',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  minWidth: isMobile ? '100%' : '180px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = '#22c55e';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#22c55e';
                  }
                }}
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} currentPage={cityData.slug} />
    </>
  );
};

export default CityLanding;