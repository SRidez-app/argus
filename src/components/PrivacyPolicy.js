import React from 'react';
import Footer from './Footer';


const PrivacyPolicy = ({ onNavigate }) => {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
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
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        
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

          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative',
            zIndex: 2
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: '1.1',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Effective Date: 3/1/2025
            </p>
          </div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            color: '#e2e8f0',
            lineHeight: '1.7',
            fontSize: '1rem'
          }}>
            
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI  (" "we," "us," or "our") is committed to protecting the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data.
            </p>

            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              By using ARGUSAI.live or any associated services, you consent to the practices outlined in this Privacy Policy.
            </p>

            <h2 
              id="information-we-collect"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginTop: '2.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
            >
              1. Information We Collect
            </h2>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI collects certain types of information to improve our services, enhance user experience, and maintain security. This includes:
            </p>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginTop: '2rem',
              marginBottom: '1rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              1.1. Automatically Collected Data
            </h3>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              When you visit ARGUSAI.live, we may automatically collect:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Log Data: IP address, browser type, device information, and timestamps.</li>
              <li style={{ marginBottom: '0.5rem' }}>Usage Data: Page visits, interactions, preferences, and navigation patterns.</li>
              <li style={{ marginBottom: '0.5rem' }}>Cookies & Tracking Technologies: Small data files stored on your device to enhance user experience and enable faster access to features.</li>
            </ul>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginTop: '2rem',
              marginBottom: '1rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              1.2. User-Provided Information
            </h3>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              When you register for an account, subscribe, or request information, we may collect:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Personal Information: Name, email address, phone number, and company details.</li>
              <li style={{ marginBottom: '0.5rem' }}>Payment Information: For transactions, we collect billing details, though payment processing is securely handled by third-party providers.</li>
              <li style={{ marginBottom: '0.5rem' }}>Communication Records: If you contact us, we may store emails or messages for service improvements.</li>
            </ul>

            <h2 
              id="how-we-use"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginTop: '2.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
            >
              2. How We Use Your Information
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI uses collected information to:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Improve service quality, website functionality, and user experience.</li>
              <li style={{ marginBottom: '0.5rem' }}>Provide customer support and respond to inquiries.</li>
              <li style={{ marginBottom: '0.5rem' }}>Manage and process transactions or service requests.</li>
              <li style={{ marginBottom: '0.5rem' }}>Conduct security monitoring and prevent fraudulent activity.</li>
              <li style={{ marginBottom: '0.5rem' }}>Enhance marketing, analytics, and targeted advertising efforts (when applicable).</li>
              <li style={{ marginBottom: '0.5rem' }}>Comply with legal obligations and protect company rights.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We do not sell or rent personal information to third parties.
            </p>

            <h2 
              id="data-sharing"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginTop: '2.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
            >
              3. Data Sharing & Disclosure
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI takes your privacy seriously and does not share personal data except under the following circumstances:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>With Service Providers:</strong> Trusted vendors may process data on our behalf (e.g., cloud hosting, payment processing), subject to strict confidentiality agreements.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>For Legal Compliance:</strong> We may disclose user data when required by law, such as in response to court orders, legal requests, or regulatory requirements.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>In Business Transactions:</strong> If ARGUS AI undergoes a merger, acquisition, or asset sale, user information may be transferred as part of the business operation.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We ensure all data shared with third parties is handled securely and in compliance with applicable privacy laws.
            </p>

            <h2 
              id="cookies-tracking"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginTop: '2.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
            >
              4. Cookies & Tracking Technologies
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI uses cookies, pixels, and other tracking technologies to enhance user experience and gather insights. These may include:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Essential Cookies:</strong> Required for website functionality (e.g., login sessions).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Performance Cookies:</strong> Track user behavior to optimize website performance.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Targeting Cookies:</strong> Used for personalized ads and marketing campaigns.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              You may adjust browser settings to block cookies; however, doing so may limit certain website functionalities.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              5. Third-Party Advertising & Analytics
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI partners with third-party advertisers and analytics providers who may collect non-personally identifiable data to:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Display relevant ads based on browsing behavior.</li>
              <li style={{ marginBottom: '0.5rem' }}>Analyze website traffic patterns and engagement metrics.</li>
            </ul>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              These third parties do not have access to personal identifiers such as your name, email, or payment details.
            </p>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              If you wish to opt out of interest-based advertising, you may use online opt-out tools provided by the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA).
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              6. Data Security & Protection
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We implement industry-standard security measures to protect user data from unauthorized access, loss, or misuse. These include:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Encryption:</strong> Secure encryption protocols for data transmission.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Access Controls:</strong> Limited access to personal data, granted only to authorized personnel.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Secure Storage:</strong> Use of firewall-protected servers and encrypted databases.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Despite our efforts, no system is 100% secure. Users are encouraged to use strong passwords and enable multi-factor authentication where applicable.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              7. Redistribution & Third-Party Use Restrictions
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI strictly prohibits the unauthorized redistribution of its data, video feeds, and content.
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>No content from ARGUS AI.live may be rebroadcasted, embedded, or resold without prior written consent.</li>
              <li style={{ marginBottom: '0.5rem' }}>You may not use Argus AI's content in any commercial application, software, or third-party platform without authorization.</li>
              <li style={{ marginBottom: '0.5rem' }}>Any approved redistribution must retain author attributions, copyright notices, and trademarks.</li>
              <li style={{ marginBottom: '0.5rem' }}>Unauthorized use may result in legal action, including account termination, civil liability, and criminal prosecution.</li>
            </ul>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              8. Links to External Websites
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI may provide links to third-party websites for reference or partner integrations. However, we are not responsible for the privacy practices or content of these external sites.
            </p>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We encourage users to review the privacy policies of any third-party services they engage with.
            </p>

            <h2 
              id="your-rights"
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                marginTop: '2.5rem',
                marginBottom: '1.5rem',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
              }}
            >
              9. Your Rights & Choices
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Depending on your location, you may have rights under applicable privacy laws, including:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Access & Correction:</strong> Request a copy of your data or correct inaccuracies.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Data Deletion:</strong> Request deletion of personal information (subject to legal and operational requirements).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Marketing Preferences:</strong> Opt out of promotional emails or targeted advertising.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Do Not Track (DNT):</strong> While Argus AI respects browser DNT signals, third-party services may not respond to them consistently.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              To exercise any of these rights, contact us at  hello@argusai.live.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              10. Changes to This Privacy Policy
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page, and where required, we will provide notice to users.
            </p>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Your continued use of ARGUSAI.live after policy updates constitutes acceptance of the revised terms.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              11. Contact Information
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              For questions about this Privacy Policy, you can contact us at:
            </p>
            <div style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>ARGUS AI</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Email:  hello@argusai.live.live</p>
              <p style={{ marginBottom: '0.5rem' }}>Website: www.argusai.live</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <button
          onClick={() => {
            onNavigate && onNavigate('home');
          }}
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: '#ffffff',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
          }}
        >
          ← Back to Home
        </button>
      </div>
      <Footer onNavigate={onNavigate} currentPage="privacy-policy" />
      {/* Mobile-specific CSS */}
      <style jsx>{`
        /* Base responsive adjustments */
        @media (max-width: 768px) {
          div[style*="maxWidth: '1000px'"] {
            padding: 2rem 1.5rem !important;
          }
          
          div[style*="padding: '4rem 3rem'"] {
            padding: 2.5rem 2rem !important;
            border-radius: 24px !important;
          }
          
          h1[style*="fontSize: 'clamp"] {
            font-size: clamp(2rem, 8vw, 3rem) !important;
            margin-bottom: 0.75rem !important;
          }
          
          p[style*="fontSize: '1.125rem'"] {
            font-size: 1rem !important;
          }
          
          h2[style*="fontSize: '1.75rem'"] {
            font-size: 1.5rem !important;
            margin-top: 2rem !important;
            margin-bottom: 1rem !important;
          }
          
          h3[style*="fontSize: '1.5rem'"] {
            font-size: 1.3rem !important;
            margin-top: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          div[style*="lineHeight: '1.7'"] {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }
          
          ul[style*="marginLeft: '1.5rem'"] {
            margin-left: 1rem !important;
            padding-left: 0.5rem !important;
          }
          
          li[style*="marginBottom: '0.5rem'"] {
            margin-bottom: 0.75rem !important;
            line-height: 1.5 !important;
          }
          
          div[style*="marginLeft: '1.5rem'"] {
            margin-left: 1rem !important;
          }
          
          button[style*="padding: '1rem 2rem'"] {
            padding: 0.875rem 1.5rem !important;
            font-size: 0.95rem !important;
            width: auto !important;
            max-width: 200px !important;
          }
        }
        
        @media (max-width: 640px) {
          div[style*="maxWidth: '1000px'"] {
            padding: 1.5rem 1rem !important;
          }
          
          div[style*="padding: '2.5rem 2rem'"] {
            padding: 2rem 1.5rem !important;
            border-radius: 20px !important;
          }
          
          h1[style*="fontSize: 'clamp"] {
            font-size: clamp(1.75rem, 10vw, 2.5rem) !important;
            line-height: 1.2 !important;
          }
          
          div[style*="marginBottom: '3rem'"] {
            margin-bottom: 2rem !important;
          }
          
          h2[style*="fontSize: '1.5rem'"] {
            font-size: 1.3rem !important;
            margin-top: 1.75rem !important;
            margin-bottom: 0.875rem !important;
          }
          
          h3[style*="fontSize: '1.3rem'"] {
            font-size: 1.2rem !important;
            margin-top: 1.25rem !important;
            margin-bottom: 0.625rem !important;
          }
          
          div[style*="lineHeight: '1.6'"] {
            font-size: 0.9rem !important;
            line-height: 1.55 !important;
          }
          
          p[style*="marginBottom: '2rem'"] {
            margin-bottom: 1.5rem !important;
          }
          
          p[style*="marginBottom: '1rem'"] {
            margin-bottom: 0.875rem !important;
          }
          
          ul[style*="marginBottom: '1.5rem'"] {
            margin-bottom: 1.25rem !important;
          }
          
          li[style*="marginBottom: '0.75rem'"] {
            margin-bottom: 0.625rem !important;
            font-size: 0.9rem !important;
          }
          
          button[style*="padding: '0.875rem 1.5rem'"] {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.9rem !important;
            min-width: 160px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="maxWidth: '1000px'"] {
            padding: 1rem 0.75rem !important;
          }
          
          div[style*="padding: '2rem 1.5rem'"] {
            padding: 1.5rem 1rem !important;
            border-radius: 16px !important;
          }
          
          h1[style*="fontSize: 'clamp"] {
            font-size: clamp(1.5rem, 12vw, 2rem) !important;
            margin-bottom: 0.5rem !important;
          }
          
          div[style*="marginBottom: '2rem'"] {
            margin-bottom: 1.5rem !important;
          }
          
          h2[style*="fontSize: '1.3rem'"] {
            font-size: 1.2rem !important;
            margin-top: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          h3[style*="fontSize: '1.2rem'"] {
            font-size: 1.1rem !important;
            margin-top: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          div[style*="lineHeight: '1.55'"] {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
          }
          
          ul[style*="margin-left: 1rem"] {
            margin-left: 0.75rem !important;
            padding-left: 0.25rem !important;
          }
          
          li[style*="font-size: 0.9rem"] {
            font-size: 0.85rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.4 !important;
          }
          
          div[style*="margin-left: 1rem"] {
            margin-left: 0.75rem !important;
          }
          
          p[style*="marginBottom: '1.5rem'"] {
            margin-bottom: 1.25rem !important;
          }
          
          p[style*="marginBottom: '0.875rem'"] {
            margin-bottom: 0.75rem !important;
          }
          
          p[style*="marginBottom: '1.25rem'"] {
            margin-bottom: 1rem !important;
          }
          
          ul[style*="marginBottom: '1.25rem'"] {
            margin-bottom: 1rem !important;
          }
          
          button[style*="min-width: 160px"] {
            padding: 0.75rem 1rem !important;
            font-size: 0.875rem !important;
            min-width: 140px !important;
            max-width: 180px !important;
          }
          
          div[style*="padding: '2rem'"] {
            padding: 1.5rem 0.75rem !important;
          }
        }
        
        /* Very small screens */
        @media (max-width: 360px) {
          div[style*="padding: '1rem 0.75rem'"] {
            padding: 0.75rem 0.5rem !important;
          }
          
          div[style*="padding: '1.5rem 1rem'"] {
            padding: 1.25rem 0.75rem !important;
            border-radius: 12px !important;
          }
          
          h1[style*="fontSize: 'clamp"] {
            font-size: clamp(1.25rem, 15vw, 1.75rem) !important;
          }
          
          h2[style*="fontSize: '1.2rem'"] {
            font-size: 1.1rem !important;
          }
          
          h3[style*="fontSize: '1.1rem'"] {
            font-size: 1rem !important;
          }
          
          div[style*="lineHeight: '1.5'"] {
            font-size: 0.8rem !important;
          }
          
          li[style*="font-size: 0.85rem"] {
            font-size: 0.8rem !important;
          }
          
          button[style*="max-width: 180px"] {
            min-width: 120px !important;
            max-width: 160px !important;
            font-size: 0.8rem !important;
          }
        }
        
        /* Landscape mobile adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          div[style*="padding: '1.5rem 1rem'"] {
            padding: 1rem 1.5rem !important;
          }
          
          div[style*="marginBottom: '1.5rem'"] {
            margin-bottom: 1rem !important;
          }
          
          h1[style*="fontSize: 'clamp"] {
            font-size: clamp(1.5rem, 8vw, 2rem) !important;
            margin-bottom: 0.5rem !important;
          }
          
          h2[style*="marginTop"] {
            margin-top: 1.25rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          h3[style*="marginTop"] {
            margin-top: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          div[style*="padding: '1.5rem 0.75rem'"] {
            padding: 1rem 0.75rem !important;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          div[style*="textShadow"] {
            text-rendering: optimizeLegibility !important;
          }
        }
        
        /* Improve readability on all mobile devices */
        @media (max-width: 768px) {
          * {
            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
          }
          
          p, li, div {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
          }
          
          /* Ensure proper touch targets */
          button {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation !important;
          }
          
          /* Improve focus visibility on mobile */
          button:focus {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
          }
          
          /* Better list formatting on mobile */
          li {
            padding-left: 0.25rem !important;
          }
          
          strong {
            font-weight: 700 !important;
          }
        }
        
        /* Extra mobile optimizations */
        @media (max-width: 640px) {
          /* Improve spacing between sections */
          h2 + p {
            margin-top: 0.5rem !important;
          }
          
          h3 + p {
            margin-top: 0.25rem !important;
          }
          
          /* Better visual hierarchy on small screens */
          h2 {
            border-bottom: 1px solid rgba(59, 130, 246, 0.2) !important;
            padding-bottom: 0.5rem !important;
          }
          
          h3 {
            color: #60a5fa !important;
          }
        }
        
        /* Ultra-wide mobile screens */
        @media (max-width: 768px) and (min-aspect-ratio: 3/2) {
          div[style*="maxWidth: '1000px'"] {
            max-width: 90% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;