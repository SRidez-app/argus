import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';


const FAQ = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [showContactModal, setShowContactModal] = useState(false);
  const sectionRef = useRef(null);

  // FAQ data with SEO-optimized content
  const faqSections = [
    {
      id: 'platform-access',
      title: 'Platform Access & Video Retrieval',
      items: [
        {
          id: 'access-footage',
          question: 'How can I access traffic camera footage for legal cases?',
          answer: (
            <div>
              <p>To access <strong>traffic camera footage</strong> for your legal investigations:</p>
              <ol style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>Log in to your Argus AI account</li>
                <li>Select the specific location and date of interest</li>
                <li>Browse available footage in our database</li>
                <li>Preview clips before downloading full videos</li>
              </ol>
              <p>We offer two access methods: browser-based platform or <strong>API integration</strong> with your existing case management systems.</p>
            </div>
          )
        },
        {
          id: 'setup-account',
          question: 'How do I set up my account and invite team members?',
          answer: (
            <p>Once you become a customer, you'll receive login credentials. As an admin, you can invite your team through the organization management panel, allowing controlled access to <strong>video evidence</strong> based on user roles.</p>
          )
        },
        {
          id: 'real-time-alerts',
          question: 'Can I get real-time alerts for accidents in my coverage area?',
          answer: (
            <p>Yes, our <strong>real-time incident detection system</strong> allows you to set up notifications for specific locations and incident types, ensuring immediate awareness of critical events for faster case initiation.</p>
          )
        }
      ]
    },
    {
      id: 'video-quality',
      title: 'Video Quality & Court Admissibility',
      items: [
        {
          id: 'court-evidence',
          question: 'Is the video footage quality sufficient for court evidence?',
          answer: (
            <div>
              <p>Yes, our <strong>high-definition traffic camera footage</strong> is court-admissible and suitable for legal proceedings. We provide:</p>
              <ul style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>HD resolution for clear vehicle identification</li>
                <li>Detailed metadata including timestamps and location data</li>
                <li>Secure chain of custody documentation</li>
                <li>Camera specifications and technical details</li>
              </ul>
            </div>
          )
        },
        {
          id: 'identify-plates',
          question: 'Can I identify license plates and individuals in the footage?',
          answer: (
            <p>Our footage is suitable for identifying vehicles and, in many cases, license plates depending on camera angle and conditions. Individual identification varies by clip quality and distance. We recommend reviewing specific clips to assess clarity for your case needs.</p>
          )
        },
        {
          id: 'footage-retention',
          question: 'How long is traffic camera footage retained?',
          answer: (
            <p><strong>Footage retention</strong> varies by location based on when recording began. We maintain all accident footage permanently. After 6 months, videos move to long-term storage requiring 2-3 days for retrieval. Contact <span style={{ color: '#3b82f6' }}>hello@argusai.live</span> for archived footage requests.</p>
          )
        }
      ]
    },
    {
      id: 'ai-technology',
      title: 'AI Technology & Data Accuracy',
      items: [
        {
          id: 'ai-accuracy',
          question: 'How accurate is the AI in detecting traffic incidents?',
          answer: (
            <p>Our <strong>AI incident detection</strong> uses advanced computer vision technology with high accuracy rates. The system continuously improves through machine learning algorithms. For critical cases, we recommend combining AI analysis with human verification to ensure comprehensive evidence review.</p>
          )
        },
        {
          id: 'ai-reporting',
          question: 'What is AI-augmented reporting and how does it help investigations?',
          answer: (
            <div>
              <p><strong>AI-augmented reporting</strong> analyzes video footage to generate detailed incident reports including:</p>
              <ul style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>Vehicle speeds and trajectories</li>
                <li>Impact analysis and reconstruction data</li>
                <li>Timeline of events</li>
                <li>Supporting data for expert testimony</li>
              </ul>
            </div>
          )
        },
        {
          id: 'api-integration',
          question: 'Can I integrate traffic camera data with my case management system?',
          answer: (
            <p>Yes, we offer <strong>API integration</strong> and data export options for seamless integration with existing legal case management systems. Contact our technical support team for implementation details and documentation.</p>
          )
        }
      ]
    },
    {
      id: 'pricing-support',
      title: 'Pricing & Support',
      items: [
        {
          id: 'pricing-costs',
          question: 'What are the costs for traffic camera footage access?',
          answer: (
            <div>
              <p><strong>Pricing for traffic camera footage</strong> varies based on:</p>
              <ul style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>Number of cameras in your coverage area</li>
                <li>Geographic location requirements</li>
                <li>Video download volume</li>
                <li>Subscription plan (monthly or annual)</li>
              </ul>
              <p>Contact our sales team for a customized quote tailored to your firm's needs.</p>
            </div>
          )
        },
        {
          id: 'subscribe-services',
          question: 'How do I subscribe to Argus AI services?',
          answer: (
            <div>
              <p>To subscribe to our <strong>traffic camera footage services</strong>:</p>
              <ol style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>Contact our sales team for consultation</li>
                <li>Choose a plan based on your coverage needs</li>
                <li>Complete secure payment processing</li>
                <li>Receive immediate platform access upon subscription</li>
              </ol>
            </div>
          )
        },
        {
          id: 'access-speed',
          question: 'How quickly can I access footage after an incident?',
          answer: (
            <p>For <strong>real-time incidents</strong>, access is almost immediate through our alert system. For archived footage, access is available instantly upon request for videos within 6 months. Older footage requires 2-3 days for retrieval from long-term storage.</p>
          )
        },
        {
          id: 'training-support',
          question: 'What training and support is available?',
          answer: (
            <div>
              <p>We provide comprehensive support including:</p>
              <ul style={{ color: '#cbd5e1', marginLeft: '1.5rem' }}>
                <li>Platform training materials and tutorials</li>
                <li>Technical support via email and phone</li>
                <li>Scheduled consultations for complex cases</li>
                <li>Integration assistance for API connections</li>
              </ul>
              <p>Contact our support team at <span style={{ color: '#3b82f6' }}>hello@argusai.live</span> or call 1+ 402-480-6092.</p>
            </div>
          )
        }
      ]
    }
  ];

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

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          "@type": "FAQPage",
          "mainEntity": faqSections.flatMap(section => 
            section.items.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : item.question.includes('access traffic camera footage') 
                  ? "Log in to your Argus AI account, select the location and date of interest, and browse available footage. You can preview clips before downloading full videos."
                  : typeof item.answer === 'object' ? "Contact Argus AI for detailed information about this service."
                  : item.question
              }
            }))
          )
        })}
      </script>

      <section 
        ref={sectionRef}
        data-component="faq"
        id="faq"
        className="faq-section"
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
              }}>
                Frequently Asked Questions
              </h1>
              
              <h2 style={{
                fontSize: isMobile ? 'clamp(1.25rem, 6vw, 1.8rem)' : 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#06b6d4',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Traffic Camera Footage & Video Evidence
              </h2>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                color: '#e2e8f0',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Get answers to common questions about <strong style={{ color: '#22c55e' }}>traffic camera footage retrieval</strong>, 
                video evidence quality, and legal documentation for attorneys using the Argus AI platform.
              </p>
            </div>

            {/* Quick Navigation - Table of Contents */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: isMobile ? '16px' : '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '3rem',
              position: 'relative',
              zIndex: 2,
              backdropFilter: 'blur(6px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                Quick Navigation
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {faqSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '12px',
                      padding: '1rem',
                      color: '#e2e8f0',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.25)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Sections */}
            {faqSections.map((section, sectionIndex) => (
              <div 
                key={section.id}
                id={section.id}
                style={{
                  marginBottom: '3rem',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${0.6 + sectionIndex * 0.2}s`
                }}
              >
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: '700',
                  color: '#22c55e',
                  marginBottom: '2rem',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
                  borderBottom: '2px solid rgba(34, 197, 94, 0.3)',
                  paddingBottom: '0.5rem'
                }}>
                  {section.title}
                </h3>

                {section.items.map((item, itemIndex) => (
                  <div 
                    key={item.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      marginBottom: '1.5rem',
                      overflow: 'hidden',
                      backdropFilter: 'blur(6px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      style={{
                        width: '100%',
                        padding: isMobile ? '1.25rem' : '1.5rem',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: isMobile ? '1rem' : '1.125rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{
                        fontSize: '1.5rem',
                        color: '#22c55e',
                        transform: expandedItems.has(item.id) ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}>
                        +
                      </span>
                    </button>
                    
                    {expandedItems.has(item.id) && (
                      <div style={{
                        padding: isMobile ? '0 1.25rem 1.25rem' : '0 1.5rem 1.5rem',
                        color: '#cbd5e1',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.6',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(0, 0, 0, 0.1)',
                        animation: 'fadeInDown 0.3s ease-out'
                      }}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Contact CTA Section */}
            <div style={{
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
              transition: 'all 0.8s ease-out 1.4s'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                Still Have Questions About Traffic Camera Footage?
              </h3>
              
              <p style={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                color: '#e2e8f0',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                Our expert team is ready to help you understand how <strong style={{ color: '#22c55e' }}>Argus AI traffic camera footage</strong> can strengthen your legal cases.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <button
                  onClick={() => setShowContactModal(true)}
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
                  Contact Our Support Team
                </button>
                
                <button
                  onClick={() => window.open('https://calendly.com/getargusai/30min?month=2025-08', '_blank')}
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
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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
      <Footer onNavigate={onNavigate} currentPage="FAQ" />
    </>
  );
};

export default FAQ;