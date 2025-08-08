import React, { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga4'; // Add this import

const CookieSettings = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });
  
  const bannerRef = useRef(null);
  const settingsRef = useRef(null);

  const GA4_MEASUREMENT_ID = 'G-METTS4SGRH';

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cookie utility functions
  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const getCookiePreferences = () => {
    const prefs = getCookie('cookiePreferences');
    if (prefs) {
      return JSON.parse(prefs);
    }
    return {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
  };

  // Updated function to actually load tracking scripts
  const loadCookieScripts = (prefs) => {
    // Load Google Analytics 4 if user consented to analytics
    if (prefs.analytics) {
      console.log('Loading Google Analytics...');
      
      // Initialize GA4
      ReactGA.initialize(GA4_MEASUREMENT_ID);
      
      // Send initial pageview
      ReactGA.send({ 
        hitType: "pageview", 
        page: window.location.pathname + window.location.search 
      });
      
      // Track page views for SPA navigation
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;
      
      const trackPageChange = () => {
        ReactGA.send({ 
          hitType: "pageview", 
          page: window.location.pathname + window.location.search 
        });
      };
      
      window.history.pushState = function() {
        originalPushState.apply(window.history, arguments);
        setTimeout(trackPageChange, 100);
      };
      
      window.history.replaceState = function() {
        originalReplaceState.apply(window.history, arguments);
        setTimeout(trackPageChange, 100);
      };
      
      window.addEventListener('popstate', trackPageChange);
    }

    // Load marketing scripts (Facebook Pixel, etc.)
    if (prefs.marketing) {
      console.log('Loading marketing scripts...');
      
      // Example: Facebook Pixel
      // !function(f,b,e,v,n,t,s)
      // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      // n.queue=[];t=b.createElement(e);t.async=!0;
      // t.src=v;s=b.getElementsByTagName(e)[0];
      // s.parentNode.insertBefore(t,s)}(window, document,'script',
      // 'https://connect.facebook.net/en_US/fbevents.js');
      // fbq('init', 'YOUR_PIXEL_ID');
      // fbq('track', 'PageView');
    }

    // Load functional scripts (Chat widgets, etc.)
    if (prefs.functional) {
      console.log('Loading functional scripts...');
      
      // Example: Add chat widgets, preference storage, etc.
      // Intercom, Zendesk, etc.
    }
  };

  // Function to track custom events (use this in other components)
  const trackEvent = (eventName, parameters = {}) => {
    const currentPrefs = getCookiePreferences();
    if (currentPrefs.analytics) {
      ReactGA.event({
        category: parameters.category || 'User Interaction',
        action: eventName,
        label: parameters.label,
        value: parameters.value
      });
    }
  };

  // Make trackEvent available globally
  useEffect(() => {
    window.trackEvent = trackEvent;
  }, []);

  // Initialize on component mount
  useEffect(() => {
    const consent = getCookie('cookieConsent');
    if (!consent) {
      setShowBanner(true);
      setIsVisible(true);
    } else {
      // Load scripts based on existing preferences
      const savedPreferences = getCookiePreferences();
      setPreferences(savedPreferences);
      loadCookieScripts(savedPreferences);
    }
  }, []);

  // Handle clicks outside settings modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettings]);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    setCookie('cookiePreferences', JSON.stringify(allAccepted), 365);
    setCookie('cookieConsent', 'accepted', 365);
    setShowBanner(false);
    loadCookieScripts(allAccepted);
  };

  const handleDecline = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(essentialOnly);
    setCookie('cookiePreferences', JSON.stringify(essentialOnly), 365);
    setCookie('cookieConsent', 'declined', 365);
    setShowBanner(false);
    loadCookieScripts(essentialOnly);
  };

  const handleSavePreferences = () => {
    setCookie('cookiePreferences', JSON.stringify(preferences), 365);
    setCookie('cookieConsent', 'customized', 365);
    setShowSettings(false);
    setShowBanner(false);
    loadCookieScripts(preferences);
  };

  const handleOpenSettings = () => {
    const savedPreferences = getCookiePreferences();
    setPreferences(savedPreferences);
    setShowSettings(true);
  };

  const handleTogglePreference = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieCategories = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be disabled.',
      required: true
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously using Google Analytics.',
      required: false
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver personalized advertisements and track the effectiveness of our marketing campaigns.',
      required: false
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      required: false
    }
  ];

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div
          ref={bannerRef}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderBottom: 'none',
            padding: isMobile ? '1rem' : '1.5rem',
            zIndex: 9999,
            boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.4)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{
              flex: isMobile ? 'none' : '1',
              minWidth: isMobile ? 'auto' : '300px',
              color: '#e2e8f0',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '700',
                color: '#ffffff',
                margin: '0 0 0.5rem 0'
              }}>
                We use cookies
              </h3>
              <p style={{
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                lineHeight: '1.5',
                margin: 0,
                opacity: 0.9
              }}>
                We use cookies and similar technologies to enhance your browsing experience, analyze our traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: isMobile ? '0.5rem' : '0.75rem',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-end',
              width: isMobile ? '100%' : 'auto'
            }}>
              <button
                onClick={handleDecline}
                style={{
                  padding: isMobile ? '0.625rem 1rem' : '0.75rem 1.5rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#fca5a5',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flex: isMobile ? '1' : 'none',
                  minWidth: isMobile ? '80px' : 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(239, 68, 68, 0.2)';
                    e.target.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                    e.target.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(239, 68, 68, 0.1)';
                    e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                    e.target.style.color = '#fca5a5';
                  }
                }}
              >
                Decline
              </button>
              
              <button
                onClick={handleOpenSettings}
                style={{
                  padding: isMobile ? '0.625rem 1rem' : '0.75rem 1.5rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  background: 'transparent',
                  color: '#93c5fd',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flex: isMobile ? '1' : 'none',
                  minWidth: isMobile ? '80px' : 'auto'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    e.target.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.target.style.color = '#93c5fd';
                  }
                }}
              >
                Settings
              </button>
              
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 2rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: '#ffffff',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  whiteSpace: 'nowrap',
                  flex: isMobile ? '2' : 'none',
                  minWidth: isMobile ? '100px' : 'auto'
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
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <>
          {/* Overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            opacity: showSettings ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }} />
          
          {/* Modal */}
          <div
            ref={settingsRef}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: isMobile ? '16px' : '24px',
              padding: isMobile ? '1.5rem' : '2rem',
              maxWidth: isMobile ? '95%' : '600px',
              width: isMobile ? '95%' : '90%',
              maxHeight: isMobile ? '90vh' : '80vh',
              overflowY: 'auto',
              zIndex: 10001,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              opacity: showSettings ? 1 : 0,
              transform: showSettings ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <h2 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: '800',
                color: '#ffffff',
                margin: 0
              }}>
                Cookie Preferences
              </h2>
              
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'none';
                    e.target.style.color = '#94a3b8';
                  }
                }}
              >
                ×
              </button>
            </div>

            <p style={{
              color: '#cbd5e1',
              fontSize: isMobile ? '0.9rem' : '0.95rem',
              lineHeight: '1.6',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              opacity: 0.9
            }}>
              We use different types of cookies to optimize your experience on our website. 
              You can choose which categories of cookies to allow below.
            </p>

            {/* Cookie Categories */}
            <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: isMobile ? '12px' : '16px',
                    padding: isMobile ? '1.25rem' : '1.5rem',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem'
                  }}>
                    <h4 style={{
                      fontSize: isMobile ? '1rem' : '1.1rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      margin: 0,
                      flex: 1,
                      marginRight: '1rem'
                    }}>
                      {category.title}
                    </h4>
                    
                    {/* Toggle Switch */}
                    <label style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: isMobile ? '44px' : '50px',
                      height: isMobile ? '22px' : '26px',
                      flexShrink: 0
                    }}>
                      <input
                        type="checkbox"
                        checked={preferences[category.id]}
                        disabled={category.required}
                        onChange={() => handleTogglePreference(category.id)}
                        style={{
                          opacity: 0,
                          width: 0,
                          height: 0
                        }}
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: category.required ? 'not-allowed' : 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: preferences[category.id] 
                          ? (category.required ? '#22c55e' : '#3b82f6')
                          : '#64748b',
                        transition: '0.3s',
                        borderRadius: isMobile ? '22px' : '26px',
                        opacity: category.required ? 0.7 : 1
                      }}>
                        <div style={{
                          position: 'absolute',
                          height: isMobile ? '16px' : '20px',
                          width: isMobile ? '16px' : '20px',
                          left: preferences[category.id] ? (isMobile ? '25px' : '27px') : '3px',
                          bottom: '3px',
                          background: '#ffffff',
                          transition: '0.3s',
                          borderRadius: '50%'
                        }} />
                      </span>
                    </label>
                  </div>
                  
                  <p style={{
                    color: '#cbd5e1',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5',
                    margin: 0,
                    opacity: 0.8
                  }}>
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: isMobile ? '0.75rem' : '1rem',
              justifyContent: 'flex-end',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(59, 130, 246, 0.2)',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  padding: isMobile ? '0.75rem' : '0.75rem 1.5rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  background: 'transparent',
                  color: '#93c5fd',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  order: isMobile ? 2 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.target.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#93c5fd';
                  }
                }}
              >
                Cancel
              </button>
              
              <button
                onClick={handleSavePreferences}
                style={{
                  padding: isMobile ? '0.75rem' : '0.75rem 2rem',
                  borderRadius: isMobile ? '10px' : '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: '#ffffff',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  order: isMobile ? 1 : 2
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                  }
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// Export a function to manually show cookie settings
export const showCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('showCookieSettings'));
};

export default CookieSettings;