import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer.js';
import CTA from '../components/CTA.js';

const Georgia = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>Traffic Camera Video Evidence Georgia | Professional Retrieval Services - Argus AI</title>
        <meta name="description" content="Professional traffic camera video evidence collection throughout Georgia. Serving Atlanta, Savannah, Augusta, Athens, Marietta. Court-ready documentation for personal injury cases statewide." />
        <meta name="keywords" content="traffic camera video evidence georgia, video evidence georgia, traffic camera footage georgia, personal injury video evidence, georgia accident footage, court evidence georgia" />
        
        {/* Geographic targeting */}
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Georgia" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Traffic Camera Video Evidence Georgia | Professional Retrieval Services" />
        <meta property="og:description" content="Professional traffic camera video evidence collection throughout Georgia. Court-ready documentation for personal injury cases statewide." />
        <meta property="og:url" content="https://argusai.live/georgia" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://argusai.live/georgia" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Traffic Camera Video Evidence Georgia",
          "description": "Professional traffic camera video evidence collection throughout Georgia for personal injury attorneys",
          "provider": {
            "@type": "Organization",
            "name": "Argus AI",
            "url": "https://argusai.live"
          },
          "areaServed": {
            "@type": "State",
            "name": "Georgia"
          },
          "serviceType": "Video Evidence Collection",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://argusai.live/georgia",
            "servicePhone": "+1-402-480-6092"
          }
        })}
        </script>
      </Helmet>

      <div style={{ 
        position: 'relative', 
        zIndex: 10,
        background: 'transparent',
        minHeight: '100vh',
        paddingTop: '80px'
      }}>
        
        {/* Hero Section */}
        <section style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Traffic Camera Video Evidence <span style={{ color: '#3b82f6' }}>Georgia</span>
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: '#e5e7eb',
              marginBottom: '40px',
              maxWidth: '800px',
              margin: '0 auto 40px auto',
              lineHeight: '1.6'
            }}>
              Video evidence in Georgia offers a detailed account of the circumstances leading up to traffic incidents. 
              Professional footage retrieval across all major Georgia cities for personal injury attorneys.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '60px',
              maxWidth: '800px',
              margin: '60px auto 0'
            }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3b82f6' }}>3,500+</div>
                <div style={{ color: '#9ca3af', fontSize: '1.1rem' }}>Traffic Cameras Statewide</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#10b981' }}>24/7</div>
                <div style={{ color: '#9ca3af', fontSize: '1.1rem' }}>Evidence Access</div>
              </div>
             
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section style={{
          padding: '80px 20px',
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              Comprehensive Georgia Coverage
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  city: 'Atlanta Metro',
                  description: 'I-285 Perimeter, I-75, I-85, I-20 interstate coverage with downtown connector and major suburban corridors.',
                  cameras: '2,400+',
                  highlights: 'Hartsfield-Jackson Airport, Mercedes-Benz Stadium, State Capitol district'
                },
                {
                  city: 'Savannah Coastal',
                  description: 'Historic district, I-95, I-16 corridor, Port of Savannah traffic, and Tybee Island connector coverage.',
                  cameras: '450+',
                  highlights: 'Port traffic, Historic squares, Tourism corridors'
                },
                {
                  city: 'Augusta CSRA',
                  description: 'I-20, I-520 loop, Medical District, Augusta National area, and Richmond County networks.',
                  cameras: '350+',
                  highlights: 'Medical District, Masters tournament area, Fort Eisenhower'
                },
                {
                  city: 'Athens University',
                  description: 'UGA campus perimeter, Loop 10, downtown historic district, and student traffic patterns.',
                  cameras: '200+',
                  highlights: 'Game day traffic, Campus safety, Five Points intersection'
                },
                {
                  city: 'Marietta Suburban',
                  description: 'I-75, I-575, Cobb Parkway, historic Marietta Square, and major shopping corridors.',
                  cameras: '300+',
                  highlights: 'Historic Square, Shopping centers, Suburban intersections'
                }
              ].map((area, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  borderRadius: '12px',
                  padding: '30px',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#3b82f6'
                    }}>
                      {area.city}
                    </h3>
                    <span style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#3b82f6',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {area.cameras} Cameras
                    </span>
                  </div>
                  
                  <p style={{
                    color: '#e5e7eb',
                    lineHeight: '1.6',
                    marginBottom: '16px'
                  }}>
                    {area.description}
                  </p>
                  
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    Key Areas: {area.highlights}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links to Cities */}
        <section style={{
          padding: '80px 20px',
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '60px'
            }}>
              City-Specific Coverage
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                { name: 'Atlanta', slug: 'atlanta' },
                { name: 'Savannah', slug: 'savannah' },
                { name: 'Augusta', slug: 'augusta' },
                { name: 'Athens', slug: 'athens' },
                { name: 'Marietta', slug: 'marietta' }
              ].map((city) => (
                <button
                  key={city.slug}
                  onClick={() => onNavigate(city.slug)}
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '2px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                    padding: '20px',
                    color: '#3b82f6',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {city.name} Traffic Cameras
                </button>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer onNavigate={onNavigate} />
      </div>
    </>
  );
};

export default Georgia;