import React from 'react';

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
              ARGUS ("TDG," "we," "us," or "our") is committed to protecting the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data.
            </p>

            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              By using ARGUS.live or any associated services, you consent to the practices outlined in this Privacy Policy.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              1. Information We Collect
            </h2>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS collects certain types of information to improve our services, enhance user experience, and maintain security. This includes:
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
              When you visit ARGUS.live, we may automatically collect:
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

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              2. How We Use Your Information
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS uses collected information to:
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

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              3. Data Sharing & Disclosure
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS takes your privacy seriously and does not share personal data except under the following circumstances:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>With Service Providers:</strong> Trusted vendors may process data on our behalf (e.g., cloud hosting, payment processing), subject to strict confidentiality agreements.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>For Legal Compliance:</strong> We may disclose user data when required by law, such as in response to court orders, legal requests, or regulatory requirements.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>In Business Transactions:</strong> If ARGUS undergoes a merger, acquisition, or asset sale, user information may be transferred as part of the business operation.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We ensure all data shared with third parties is handled securely and in compliance with applicable privacy laws.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              4. Cookies & Tracking Technologies
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS uses cookies, pixels, and other tracking technologies to enhance user experience and gather insights. These may include:
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
              ARGUS partners with third-party advertisers and analytics providers who may collect non-personally identifiable data to:
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
              ARGUS strictly prohibits the unauthorized redistribution of its data, video feeds, and content.
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>No content from ARGUS.live may be rebroadcasted, embedded, or resold without prior written consent.</li>
              <li style={{ marginBottom: '0.5rem' }}>You may not use TDG's content in any commercial application, software, or third-party platform without authorization.</li>
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
              ARGUS may provide links to third-party websites for reference or partner integrations. However, we are not responsible for the privacy practices or content of these external sites.
            </p>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              We encourage users to review the privacy policies of any third-party services they engage with.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
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
              <li style={{ marginBottom: '0.5rem' }}><strong>Do Not Track (DNT):</strong> While TDG respects browser DNT signals, third-party services may not respond to them consistently.</li>
            </ul>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              To exercise any of these rights, contact us at hello@ARGUS.live.
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
              ARGUS reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page, and where required, we will provide notice to users.
            </p>
            <p style={{
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Your continued use of ARGUS.live after policy updates constitutes acceptance of the revised terms.
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
              <p style={{ marginBottom: '0.5rem' }}><strong>ARGUS</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Email: hello@ARGUS.live</p>
              <p style={{ marginBottom: '0.5rem' }}>Website: www.ARGUS.live</p>
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
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
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
    </div>
  );
};

export default PrivacyPolicy;