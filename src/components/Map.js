import React, { useState, useEffect, useRef } from 'react';
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

const Map = ({ onNavigate }) => { 
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle map click to toggle zoom
  const handleMapClick = () => {
    if (!isZoomed) {
      setIsZoomed(true);
      setMapPosition({ x: 0, y: 0 }); // Reset position when zooming in
    }
  };

  // Handle closing zoom mode
  const handleCloseZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
    setMapPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  // Handle drag start
  const handleDragStart = (e) => {
    if (!isZoomed) return;
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    setDragStart({
      x: clientX - mapPosition.x,
      y: clientY - mapPosition.y
    });
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging || !isZoomed) return;
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;
    
    // Limit drag bounds (adjust these values based on your map size)
    const maxX = 100;
    const maxY = 100;
    const minX = -100;
    const minY = -100;
    
    setMapPosition({
      x: Math.max(minX, Math.min(maxX, newX)),
      y: Math.max(minY, Math.min(maxY, newY))
    });
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Add event listeners for drag
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => handleDragMove(e);
      const handleMouseUp = () => handleDragEnd();
      const handleTouchMove = (e) => handleDragMove(e);
      const handleTouchEnd = () => handleDragEnd();

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, dragStart, mapPosition]);

  // Determine grid columns based on screen size
  const getBenefitsGridColumns = () => {
    if (isMobile) return '1fr';
    return 'repeat(auto-fit, minmax(300px, 1fr))';
  };

  const getLocationsGridColumns = () => {
    if (isMobile) return '1fr';
    return 'repeat(auto-fit, minmax(250px, 1fr))';
  };

  return (
    <section 
      data-section="map"
      style={{
        padding: isMobile ? '3rem 0' : '5rem 0',
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

      <div style={{ 
        maxWidth: '1400px', 
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
            marginBottom: isMobile ? '3rem' : '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.5rem)',
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
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: '#e2e8f0',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.7',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Our statewide camera network provides comprehensive{' '}
              <a 
                href="/georgia"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof onNavigate === 'function') {
                    onNavigate('georgia');
                  } else {
                    window.location.href = '/georgia';
                  }
                }}
                style={{
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                traffic camera coverage across Georgia
              </a>{' '}
              major cities and interstate corridors, ensuring rapid evidence collection for personal injury cases.
            </p>
          </div>

          {/* Benefits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: getBenefitsGridColumns(),
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: isMobile ? '3rem' : '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            {sectionContent.benefits.map((benefit, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(62, 133, 247, 0.15)',
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRadius: isMobile ? '16px' : '20px',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderLeft: '6px solid #22c55e',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontWeight: '900',
                  color: '#22c55e',
                  marginBottom: '0.5rem'
                }}>
                  {benefit.stat}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.8rem' : '0.875rem',
                  color: '#22c55e',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {benefit.statLabel}
                </div>
                <h3 style={{
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
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
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map Section with Zoom Feature */}
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '3rem' : '4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '1.75rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Georgia Coverage Network
            </h3>
            
            {/* Click to zoom hint */}
            {!isZoomed && (
              <p style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                fontStyle: 'italic'
              }}>
                Click map to zoom and explore coverage areas
              </p>
            )}

            <div 
              ref={mapRef}
              style={{
                maxWidth: isMobile ? '100%' : '800px',
                margin: '0 auto',
                position: 'relative',
                borderRadius: isMobile ? '12px' : '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                background: 'rgba(62, 133, 247, 0.15)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'pointer'
              }}
              onClick={handleMapClick}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <img 
                src={mapImage}
                alt="Georgia traffic camera coverage map showing Atlanta, Savannah, Columbus, Augusta, and major interstate corridors"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: isZoomed 
                    ? `scale(2) translate(${mapPosition.x}px, ${mapPosition.y}px)` 
                    : 'scale(1)',
                  transition: isDragging ? 'none' : 'transform 0.3s ease',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none'
                }}
                draggable={false}
              />
              
              {/* Close button when zoomed */}
              {isZoomed && (
                <button
                  onClick={handleCloseZoom}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                  }}
                >
                  ×
                </button>
              )}
              
              {/* Zoom instructions */}
              {isZoomed && (
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  zIndex: 10
                }}>
                  Drag to explore • Click × to close
                </div>
              )}
            </div>
          </div>

          {/* Small Location Cards Below Map */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: getLocationsGridColumns(),
            gap: isMobile ? '1rem' : '1.5rem',
            position: 'relative',
            zIndex: 2
          }}>
            {georgiaLocations.map((location) => (
              <div 
                key={location.id}
                style={{
                  background: 'rgba(62, 133, 247, 0.1)',
                  padding: isMobile ? '1.25rem' : '1.5rem',
                  borderRadius: isMobile ? '12px' : '16px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <h4 style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
                }}>
                  {location.name}
                </h4>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: isMobile ? '0.8rem' : '0.85rem',
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
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
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
    </section>
  );
};

export default Map;