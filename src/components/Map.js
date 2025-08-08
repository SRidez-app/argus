import React from 'react';
import mapImage from '../assets/images/map.png';

// Georgia coverage areas data optimized for SEO
const georgiaLocations = [
  {
    id: 1,
    name: "Atlanta Metro Area",
    description: "Comprehensive I-285 perimeter, downtown, and suburban corridor coverage",
    cameraCount: "2,400+",
    responseTime: "0-2 Hours",
    keyAreas: ["I-285 Perimeter", "Downtown Atlanta", "Buckhead", "Midtown", "Airport Connector"],
    priority: "emergency"
  },
  {
    id: 2,
    name: "I-75 Corridor",
    description: "Major interstate coverage from Macon through Atlanta to Tennessee border",
    cameraCount: "800+",
    responseTime: "2-4 Hours", 
    keyAreas: ["Macon Hub", "Warner Robins", "Forsyth", "McDonough", "Stockbridge"],
    priority: "high"
  },
  {
    id: 3,
    name: "Savannah Coastal Region",
    description: "Port traffic, I-16 corridor, and coastal highway surveillance networks",
    cameraCount: "450+",
    responseTime: "3-6 Hours",
    keyAreas: ["Port Authority", "I-16 Corridor", "Highway 17", "Tybee Island Connector"],
    priority: "standard"
  },
  {
    id: 4,
    name: "Columbus Regional Hub",
    description: "West Georgia coverage including I-185 and major commercial districts",
    cameraCount: "300+", 
    responseTime: "4-8 Hours",
    keyAreas: ["Fort Benning Area", "I-185 Corridor", "Victory Drive", "Veterans Parkway"],
    priority: "standard"
  },
  {
    id: 5,
    name: "Augusta Metro",
    description: "Medical district and I-20 corridor surveillance coverage",
    cameraCount: "350+",
    responseTime: "3-6 Hours",
    keyAreas: ["Medical District", "I-20 Corridor", "Washington Road", "River Watch Parkway"],
    priority: "standard"
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
      description: "Direct partnerships with GDOT, municipal traffic departments, and private surveillance networks",
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
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
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
              Our statewide surveillance network provides comprehensive traffic camera coverage across Georgia's major cities and interstate corridors, ensuring rapid evidence collection for personal injury cases.
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

          {/* Enhanced Map and Locations Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'start',
            position: 'relative',
            zIndex: 2
          }}>
            
            {/* Larger Map Display */}
            <div style={{
              background: 'rgba(62, 133, 247, 0.15)',
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Georgia Coverage Network
              </h3>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
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
                
                {/* Enhanced Map Overlay Info */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(0, 0, 0, 0.85)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(34, 197, 94, 0.3)'
                }}>
                  <p style={{
                    color: '#e2e8f0',
                    fontSize: '1rem',
                    margin: 0,
                    textAlign: 'center',
                    fontWeight: '600'
                  }}>
                    <strong style={{ 
                      color: '#22c55e',
                      fontSize: '1.1rem'
                    }}>
                      4,000+ Active Cameras
                    </strong>
                    <br />
                    <span style={{ 
                      color: '#94a3b8',
                      fontSize: '0.9rem'
                    }}>
                      Across Georgia's major accident corridors
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Improved Location Details */}
            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '2rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Coverage Areas & Response Times
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem'
              }}>
                {georgiaLocations.map((location) => (
                  <div 
                    key={location.id}
                    style={{
                      background: 'rgba(62, 133, 247, 0.1)',
                      padding: '2rem',
                      borderRadius: '16px',
                      border: `2px solid ${
                        location.priority === 'emergency' 
                          ? '#dc2626' 
                          : location.priority === 'high' 
                            ? '#ea580c' 
                            : 'rgba(59, 130, 246, 0.3)'
                      }`,
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(8px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <h4 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        margin: 0,
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                      }}>
                        {location.name}
                      </h4>
                      <div style={{
                        background: location.priority === 'emergency' 
                          ? 'linear-gradient(135deg, #dc2626, #991b1b)' 
                          : location.priority === 'high' 
                            ? 'linear-gradient(135deg, #ea580c, #c2410c)' 
                            : 'linear-gradient(135deg, #6b7280, #4b5563)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                      }}>
                        {location.responseTime}
                      </div>
                    </div>
                    <p style={{
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                    }}>
                      {location.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                      <span style={{
                        color: '#22c55e',
                        fontSize: '1rem',
                        fontWeight: '700'
                      }}>
                        {location.cameraCount} cameras
                      </span>
                      <div style={{
                        background: 'rgba(34, 197, 94, 0.2)',
                        color: '#22c55e',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {location.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns: '1.2fr 1fr'"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Map;