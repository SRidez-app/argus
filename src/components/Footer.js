import React, { useState, useEffect } from 'react';
import argusLogo from '../assets/images/argusLogo.png';
import CookieSettings from './CookieSettings.js';

const Footer = ({ onNavigate, currentPage = 'home' }) => {
  const [email, setEmail] = useState('');
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscription email:', email);
    setEmail('');
  };

  const toggleDropdown = (title) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleNavigation = (link) => {
    switch(link) {
      case 'Home':
        if (currentPage === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          onNavigate && onNavigate('home');
        }
        break;
      case 'How It Works':
        if (currentPage === 'home') {
          const processElement = document.querySelector('[data-component="process"]') || 
                                document.querySelector('.process-section') ||
                                document.getElementById('process');
          if (processElement) {
            processElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          onNavigate && onNavigate('home');
          setTimeout(() => {
            const processElement = document.querySelector('[data-component="process"]') || 
                                  document.querySelector('.process-section') ||
                                  document.getElementById('process');
            if (processElement) {
              processElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
        break;
      case 'FAQ':
        onNavigate && onNavigate('faq');
        break;
      case 'About Us':
        onNavigate && onNavigate('about-us');
        break;
      case 'Terms & Conditions':
        onNavigate && onNavigate('terms-of-service');
        break;
      case 'Privacy Policy':
        onNavigate && onNavigate('privacy-policy');
        break;
      case 'Contact Us':
        window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank');
        break;
      default:
        break;
    }
  };

  const handleLegalClick = (action) => {
    switch(action) {
      case 'privacy-policy':
        onNavigate && onNavigate('privacy-policy');
        break;
      case 'terms-of-service':
        onNavigate && onNavigate('terms-of-service');
        break;
      case 'cookies-settings':
        setShowCookieSettings(true);
        break;
      default:
        break;
    }
  };

const navigationItems = [
  {
    title: 'How It Works',
    bookmarks: [
      { label: 'AI Detection', id: 'ai-detection' },
      { label: 'Evidence Analysis', id: 'evidence-analysis' },
      { label: 'Case Documentation', id: 'case-documentation' }
    ]
  },
  {
    title: 'FAQ',
    bookmarks: [
      { label: 'Platform Access', id: 'platform-access' },
      { label: 'Video Quality', id: 'video-quality' },
      { label: 'AI Technology', id: 'ai-technology' },
      { label: 'Pricing & Support', id: 'pricing-support' },
      { label: 'Court Evidence', id: 'court-evidence' },
      { label: 'API Integration', id: 'api-integration' }
    ]
  },
  {
    title: 'About Us',
    bookmarks: [
      { label: 'Our Mission', id: 'our-mission' },
      { label: 'Technology Platform', id: 'technology-platform' },
      { label: 'Coverage Network', id: 'coverage-network' },
      { label: 'Professional Standards', id: 'professional-standards' },
      { label: 'Industry Leadership', id: 'industry-leadership' }
    ]
  },
  {
    title: 'Terms & Conditions',
    bookmarks: [
      { label: 'Data & IP Rights', id: 'data-ownership' },
      { label: 'Service Terms', id: 'authorized-use' },
      { label: 'Payment Terms', id: 'subscription-fees' },
      { label: 'Redistribution', id: 'redistribution' },
      { label: 'Liability', id: 'disclaimer-warranty' }
    ]
  },
  {
    title: 'Privacy Policy',
    bookmarks: [
      { label: 'Data Collection', id: 'information-we-collect' },
      { label: 'Data Usage', id: 'how-we-use' },
      { label: 'Data Sharing', id: 'data-sharing' },
      { label: 'Cookies & Tracking', id: 'cookies-tracking' },
      { label: 'Your Rights', id: 'your-rights' }
    ]
  },
  {
    title: 'Contact Us',
    bookmarks: [
      { label: 'hello@argusai.live', id: 'email', type: 'email' },
      { label: '1-402-480-6092', id: 'phone', type: 'phone' },
      { label: 'Schedule Call', id: 'schedule', type: 'button' }
    ]
  }
];

  // Handle bookmark navigation
  const handleBookmarkClick = (item, bookmark) => {
    if (item.title === 'How It Works') {
      if (currentPage === 'home') {
        const processElement = document.querySelector('[data-component="process"]') || 
                              document.querySelector('.process-section') ||
                              document.getElementById('process');
        if (processElement) {
          processElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        onNavigate && onNavigate('home');
        setTimeout(() => {
          const processElement = document.querySelector('[data-component="process"]') || 
                                document.querySelector('.process-section') ||
                                document.getElementById('process');
          if (processElement) {
            processElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (item.title === 'FAQ') {
      if (currentPage === 'faq') {
        const element = document.getElementById(bookmark.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        onNavigate && onNavigate('faq');
        setTimeout(() => {
          const element = document.getElementById(bookmark.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else if (item.title === 'About Us') {
      if (currentPage === 'about-us') {
        const element = document.getElementById(bookmark.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        onNavigate && onNavigate('about-us');
        setTimeout(() => {
          const element = document.getElementById(bookmark.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else if (item.title === 'Terms & Conditions') {
      if (currentPage === 'terms-of-service') {
        const element = document.getElementById(bookmark.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        onNavigate && onNavigate('terms-of-service');
        setTimeout(() => {
          const element = document.getElementById(bookmark.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else if (item.title === 'Privacy Policy') {
      if (currentPage === 'privacy-policy') {
        const element = document.getElementById(bookmark.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        onNavigate && onNavigate('privacy-policy');
        setTimeout(() => {
          const element = document.getElementById(bookmark.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    } else if (item.title === 'Contact Us') {
      if (bookmark.type === 'email') {
        window.open('mailto:hello@argusai.live', '_self');
      } else if (bookmark.type === 'phone') {
        window.open('tel:+14024806092', '_self');
      } else if (bookmark.type === 'button') {
        window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank');
      }
    }
  };

  // Mobile-specific click handler with improved touch handling
  const handleMobileClick = (callback, event) => {
    // Prevent any potential interference and ensure the click fires
    event.preventDefault();
    event.stopPropagation();
    
    // Add a small delay to ensure touch events complete
    setTimeout(() => {
      callback();
    }, 50);
  };

  return (
    <>
      <footer style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
        borderTop: '1px solid rgba(59, 130, 246, 0.2)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '0'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 40%)
          `,
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem 1.5rem',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Logo Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            <img 
              src={argusLogo} 
              alt="ARGUS Logo"
              style={{
                height: isMobile ? '60px' : '70px',
                width: 'auto',
                filter: 'brightness(1.1)'
              }}
            />
          </div>

          {/* Navigation Section */}
          {!isMobile ? (
            // Desktop Layout - Grid
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem',
              alignItems: 'start',
              marginBottom: '2rem'
            }}>
              {navigationItems.map((item) => (
                <div key={item.title} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  minHeight: '140px'
                }}>
                  <button
                    onClick={() => handleNavigation(item.title)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e2e8f0',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                      cursor: 'pointer',
                      padding: '0.5rem 0',
                      marginBottom: '0.75rem',
                      textAlign: 'left',
                      width: '100%',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#3b82f6';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#e2e8f0';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {item.title}
                  </button>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                    width: '100%'
                  }}>
                    {item.bookmarks.map((bookmark) => (
                      <button
                        key={bookmark.id}
                        onClick={() => handleBookmarkClick(item, bookmark)}
                        style={{
                          background: bookmark.type === 'button' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'none',
                          border: 'none',
                          color: bookmark.type === 'button' ? 'white' : '#94a3b8',
                          fontSize: bookmark.type === 'button' ? '0.65rem' : '0.7rem',
                          fontWeight: bookmark.type === 'button' ? '600' : '400',
                          cursor: 'pointer',
                          textAlign: 'left',
                          padding: bookmark.type === 'button' ? '5px 10px' : '0.2rem 0',
                          borderRadius: bookmark.type === 'button' ? '4px' : '0',
                          transition: 'all 0.2s ease',
                          textShadow: bookmark.type === 'button' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.4)',
                          whiteSpace: 'nowrap',
                          width: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                        onMouseEnter={(e) => {
                          if (bookmark.type === 'button') {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 3px 8px rgba(34, 197, 94, 0.3)';
                          } else {
                            e.target.style.color = '#3b82f6';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (bookmark.type === 'button') {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          } else {
                            e.target.style.color = '#94a3b8';
                          }
                        }}
                      >
                        {bookmark.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mobile Layout - Dropdown Menus with Fixed Navigation
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {navigationItems.map((item) => (
                <div key={item.title} style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Main Navigation Button */}
                  <button
                    onClick={(e) => {
                      // For Contact Us, don't toggle dropdown, just execute action
                      if (item.title === 'Contact Us') {
                        handleMobileClick(() => handleNavigation(item.title), e);
                      } else {
                        handleMobileClick(() => toggleDropdown(item.title), e);
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '1rem 0',
                      width: '100%',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.2s ease',
                      // Better touch targets for mobile
                      minHeight: '48px',
                      WebkitTapHighlightColor: 'rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <span>{item.title}</span>
                    {item.title !== 'Contact Us' && (
                      <span style={{
                        transition: 'transform 0.2s ease',
                        transform: openDropdowns[item.title] ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ▼
                      </span>
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {item.title !== 'Contact Us' && (
                    <div style={{
                      maxHeight: openDropdowns[item.title] ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '8px',
                      marginBottom: openDropdowns[item.title] ? '0.5rem' : '0'
                    }}>
                      <div style={{
                        padding: openDropdowns[item.title] ? '1rem' : '0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}>
                        {item.bookmarks.map((bookmark) => (
                          <button
                            key={bookmark.id}
                            onClick={(e) => handleMobileClick(() => handleBookmarkClick(item, bookmark), e)}
                            style={{
                              background: bookmark.type === 'button' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'none',
                              border: 'none',
                              color: bookmark.type === 'button' ? 'white' : '#94a3b8',
                              fontSize: bookmark.type === 'button' ? '0.9rem' : '0.95rem',
                              fontWeight: bookmark.type === 'button' ? '600' : '400',
                              cursor: 'pointer',
                              textAlign: 'left',
                              padding: bookmark.type === 'button' ? '8px 16px' : '0.5rem 0',
                              borderRadius: bookmark.type === 'button' ? '6px' : '0',
                              transition: 'all 0.2s ease',
                              width: '100%',
                              minHeight: '44px',
                              display: 'flex',
                              alignItems: 'center',
                              // Better mobile touch handling
                              WebkitTapHighlightColor: bookmark.type === 'button' ? 
                                'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'
                            }}
                          >
                            {bookmark.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Divider Line */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
            margin: '1.5rem 0 1rem'
          }} />

          {/* Bottom Section - Copyright */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{
              fontSize: isMobile ? '0.75rem' : '0.8rem',
              color: '#94a3b8',
              fontWeight: '500',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
              margin: '0',
              textAlign: 'center'
            }}>
              © 2025 <strong style={{ color: '#ffffff' }}>ARGUS</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;