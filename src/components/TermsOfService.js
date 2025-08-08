import React from 'react';

const TermsOfService = ({ onNavigate }) => {
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
              Terms of Service
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#94a3b8',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Effective Date: 2/10/24
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
              Welcome to ARGUS AI. These Terms of Service ("Terms") govern your use of our services, website, and applications (collectively, the "Services"). By accessing or using our Services, you agree to these Terms. If you do not agree, you may not use our Services.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              1. Acceptance of Terms
            </h2>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              By using ARGUSAI.live and its associated platforms, you confirm that you have read, understood, and accepted these Terms. ARGUS AI reserves the right to modify these Terms at any time. Changes take effect upon posting, and your continued use constitutes acceptance of the revised Terms.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              2. Description of Services
            </h2>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              ARGUS AI provides real-time and historical traffic data, video feeds, analytics, and related services to businesses, government agencies, and individuals. Use of these services is subject to compliance with these Terms and applicable laws.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              3. Authorized Use
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              You agree to use our Services solely for lawful and intended purposes. Prohibited activities include, but are not limited to:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Unauthorized distribution, reproduction, or modification of TDG's data, video feeds, or other content.</li>
              <li style={{ marginBottom: '0.5rem' }}>Using automated tools (such as bots or scrapers) to extract or collect TDG content.</li>
              <li style={{ marginBottom: '0.5rem' }}>Attempting to bypass security features or disrupt TDG services.</li>
              <li style={{ marginBottom: '0.5rem' }}>Using TDG's content or services in any way that violates privacy laws, intellectual property laws, or other legal statutes.</li>
            </ul>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG reserves the right to suspend or terminate accounts found in violation of these Terms.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              4. Data Ownership & Intellectual Property
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              All content, including video feeds, metadata, software, and analytics, is owned or licensed by ARGUS AI. Users acknowledge that:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>No ownership rights are granted by using TDG services.</li>
              <li style={{ marginBottom: '0.5rem' }}>Any modifications or derivative works based on TDG's data remain the exclusive property of TDG.</li>
              <li style={{ marginBottom: '0.5rem' }}>Unauthorized use of TDG's intellectual property, trademarks, or copyrighted materials is strictly prohibited.</li>
            </ul>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              5. Subscription, Fees, and Payments
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Certain services require payment. By subscribing or purchasing, you agree to:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Pay all applicable fees as outlined in TDG's pricing structure.</li>
              <li style={{ marginBottom: '0.5rem' }}>Authorize automatic billing for recurring services, if applicable.</li>
              <li style={{ marginBottom: '0.5rem' }}>Acknowledge that all fees are non-refundable unless otherwise stated.</li>
            </ul>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Failure to make payments may result in service suspension or termination.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              6. Privacy & Data Security
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Use of TDG's services is also governed by our Privacy Policy, which outlines how we collect, use, and protect personal information.
            </p>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              While TDG implements security measures, users acknowledge that:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>No online service is 100% secure, and unauthorized access is always a risk.</li>
              <li style={{ marginBottom: '0.5rem' }}>Users are responsible for maintaining the confidentiality of their login credentials.</li>
              <li style={{ marginBottom: '0.5rem' }}>TDG is not liable for security breaches caused by user negligence.</li>
            </ul>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              If unauthorized account activity is suspected, notify TDG immediately.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              7. Redistribution
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              No part of ARGUSAI.live or any content provided by ARGUS AI—including, but not limited to, video feeds, data, partner sites, and applications—may be:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Rebroadcast on television, cable, streaming services, or any other media platform without express written consent from TDG.</li>
              <li style={{ marginBottom: '0.5rem' }}>Embedded within another website or used in a "framing" technique to give the appearance that it is part of another website without written permission.</li>
              <li style={{ marginBottom: '0.5rem' }}>Republished, resold, or used in any commercial application without explicit authorization.</li>
              <li style={{ marginBottom: '0.5rem' }}>Utilized for any purpose other than private, non-commercial viewing without prior approval.</li>
            </ul>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              In cases where redistribution is permitted, all author attributions, copyright notices, and trademarks must remain intact. Users acknowledge that they do not acquire any ownership rights over TDG's content by using, downloading, or otherwise interacting with TDG's Services.
            </p>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Unauthorized redistribution or use will result in legal action, including but not limited to termination of service access, civil liability, and potential criminal prosecution.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              8. Third-Party Content & External Links
            </h2>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG may include links to third-party websites or integrate third-party content. We do not endorse, control, or assume responsibility for external content, services, or practices. Users access third-party sites at their own risk.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              9. Disclaimer of Warranty; Limitation of Liability
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG strives to provide reliable and accurate services; however, users acknowledge that:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>All information is provided "as is," "with all faults," and "as available" without warranties of any kind, either express or implied.</li>
              <li style={{ marginBottom: '0.5rem' }}>TDG makes no guarantees regarding the availability, accuracy, timeliness, uninterrupted use, or reliability of the data, video feeds, or analytics.</li>
              <li style={{ marginBottom: '0.5rem' }}>The accuracy of traffic conditions, weather reports, and related data may be affected by external factors beyond TDG's control, such as network issues, environmental conditions, or hardware malfunctions.</li>
              <li style={{ marginBottom: '0.5rem' }}>Users rely on TDG's data and services at their own risk. TDG, its employees, partners, and affiliates shall not be liable for decisions made based on the information provided.</li>
            </ul>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginTop: '2rem',
              marginBottom: '1rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              Liability Limitations
            </h3>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              To the fullest extent permitted by law, TDG, its officers, employees, and affiliates shall not be liable for:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use TDG's services.</li>
              <li style={{ marginBottom: '0.5rem' }}>Loss of data, revenue, business opportunities, or personal injury resulting from reliance on TDG's data or service interruptions.</li>
              <li style={{ marginBottom: '0.5rem' }}>Any damage, including damage caused by viruses, cyberattacks, hacking, or technical failures, that affects users' devices, systems, or networks as a result of accessing ARGUSAI.live.</li>
              <li style={{ marginBottom: '0.5rem' }}>Any failure, interruption, or delay of service due to acts of nature, government actions, cyberattacks, or unforeseen circumstances beyond TDG's control.</li>
            </ul>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG does not guarantee that our services will be free from security breaches, hacking, data loss, or system failures, and we expressly disclaim liability for any such incidents.
            </p>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              If you are dissatisfied with any part of TDG's services or these Terms, your sole and exclusive remedy is to discontinue use of our website and services.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              10. Indemnification
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Users agree to indemnify and hold harmless ARGUS AI, its affiliates, officers, directors, employees, and partners from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Any violation of these Terms.</li>
              <li style={{ marginBottom: '0.5rem' }}>Unauthorized use of TDG's content, data, or intellectual property.</li>
              <li style={{ marginBottom: '0.5rem' }}>Third-party claims related to users' actions or reliance on TDG's services.</li>
            </ul>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              11. Termination & Account Suspension
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG reserves the right to suspend, restrict, or terminate access to its services at any time, including but not limited to:
            </p>
            <ul style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Violation of these Terms.</li>
              <li style={{ marginBottom: '0.5rem' }}>Failure to comply with payment obligations.</li>
              <li style={{ marginBottom: '0.5rem' }}>Fraudulent, abusive, or harmful activities.</li>
            </ul>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Termination does not absolve users of outstanding obligations or liabilities incurred before account suspension.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              12. Governing Law & Dispute Resolution
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              These Terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.
            </p>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              Disputes shall first attempt to be resolved through informal negotiation. If unresolved, disputes shall be submitted to binding arbitration in Nebraska, except where prohibited by law.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              13. Changes to These Terms
            </h2>
            <p style={{
              marginBottom: '2rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              TDG reserves the right to modify these Terms at any time. Significant changes will be communicated via email or posted on ARGUSAI.live. Continued use of the Services after modifications constitutes acceptance of the revised Terms.
            </p>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#ffffff',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'
            }}>
              14. Contact Information
            </h2>
            <p style={{
              marginBottom: '1rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              For inquiries regarding these Terms, contact:
            </p>
            <div style={{
              marginLeft: '1.5rem',
              marginBottom: '1.5rem',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>ARGUS AI</strong></p>
              <p style={{ marginBottom: '0.5rem' }}>Email: hello@argusai.live</p>
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

export default TermsOfService;