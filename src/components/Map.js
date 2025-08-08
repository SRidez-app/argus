import React from 'react';
import mapImage from '../assets/images/map.png';

// Georgia coverage areas data optimized for SEO
const georgiaLocations = [
  {
    id: 1,
    name: "Atlanta Metro Area",
    description: "Comprehensive I-285 perimeter, downtown, and suburban corridor coverage",
    cameraCount: "2,400+",
    keyAreas: ["I-285 Perimeter", "Downtown Atlanta", "Buckhead", "Midtown", "Airport Connector"]
  },
  {
    id: 2,
    name: "I-75 Corridor",
    description: "Major interstate coverage from Macon through Atlanta to Tennessee border",
    cameraCount: "800+",
    keyAreas: ["Macon Hub", "Warner Robins", "Forsyth", "McDonough", "Stockbridge"]
  },
  {
    id: 3,
    name: "Savannah Coastal Region",
    description: "Port traffic, I-16 corridor, and coastal highway camera networks",
    cameraCount: "450+",
    keyAreas: ["Port Authority", "I-16 Corridor", "Highway 17", "Tybee Island Connector"]
  },
  {
    id: 4,
    name: "Augusta Metro",
    description: "Medical district and I-20 corridor camera coverage",
    cameraCount: "350+",
    keyAreas: ["Medical District", "I-20 Corridor", "Washington Road", "River Watch Parkway"]
  }
];

// Content data optimized for Georgia personal injury attorney searches
const sectionContent = {
  headline: {
    main: "Traffic Camera Coverage",
    highlight: "Across Georgia"
  },

  benefits: [
    {
      title: "Immediate Response Network",
      description: "24/7 emergency evidence preservation across Georgia's busiest accident corridors",
      stat: "2hrs",
      statLabel: "Average Response"
    },
    {
      title: "Comprehensive Camera Access", 
      description: "Direct partnerships with GDOT, municipal traffic departments, and private camera networks",
      stat: "4,000+",
      statLabel: "Active Cameras"
    },
    {
      title: "Court-Ready Evidence Packages",
      description: "Professional video enhancement and legal documentation for disputed liability cases",
      stat: "95%",
      statLabel: "Success Rate"
    }
  ]
};

const Map = () => {
  return (
    <section 
      data-section="map"
      style={{
        padding: '5rem 0',
        position: 'relative',
        background: 'transparent'
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
          radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Main Container */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: '32px',
          padding: '4rem 3rem',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          backdropFilter: 'blur(12px)',
          position: 'relative',
          overflow: 'hidden'
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
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}>
              {sectionContent.headline.main}{' '}
              <span style={{
                color: '#22c55e'
              }}>
                {sectionContent.headline.highlight}
              </span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.7',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Our statewide camera network provides comprehensive traffic camera coverage across Georgia's major cities and interstate corridors, ensuring rapid evidence collection for personal injury cases.
            </p>
          </div>

          {/* Benefits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            {sectionContent.benefits.map((benefit, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(62, 133, 247, 0.15)',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderLeft: '6px solid #22c55e',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#22c55e',
                  marginBottom: '0.5rem'
                }}>
                  {benefit.stat}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#22c55e',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {benefit.statLabel}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Bigger Map */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '2rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Georgia Coverage Network
            </h3>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              background: 'rgba(62, 133, 247, 0.15)',
              border: '1px solid rgba(37, 99, 235, 0.3)'
            }}>
              <img 
                src={mapImage}
                alt="Georgia traffic camera coverage map showing Atlanta, Savannah, Columbus, Augusta, and major interstate corridors"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              
             
            </div>
          </div>

          {/* Small Location Cards Below Map */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 2
          }}>
            {georgiaLocations.map((location) => (
              <div 
                key={location.id}
                style={{
                  background: 'rgba(62, 133, 247, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}>
                  {location.name}
                </h4>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                  lineHeight: '1.5',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                }}>
                  {location.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#22c55e',
                    fontSize: '0.9rem',
                    fontWeight: '700'
                  }}>
                    {location.cameraCount} cameras
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Map;