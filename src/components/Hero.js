import React from 'react';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1000px',
        textAlign: 'center',
        color: 'white'
      }}>
        
        {/* Main Headline - SEO Optimized */}
        <h1 style={{
     fontSize: 'clamp(3rem, 3vw, 4rem)',  // Responsive: 40px to 96px
          fontWeight: '900',
          lineHeight: '1.5',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.02em'
        }}>
          Traffic Camera Footage 
          Video Evidence
        </h1>

        {/* Spacer for breathing room */}
        <div style={{ height: '1rem' }}></div>

        {/* Description - SEO Keywords */}
        <p style={{
         fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', // Responsive: 20px to 28px
          lineHeight: '1.6',
          color: '#cbd5e1',
          maxWidth: '800px',
          margin: '0 auto 3rem auto',
          fontWeight: '400'
        }}>
          Professional traffic camera footage retrieval for Georgia personal injury attorneys. 
          
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2.5rem'
        }}>
          <button style={{
           padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, #2563eb, #0891b2)',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.125rem',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
            minWidth: '180px'
          }}>
            Get Evidence Now
          </button>
          
          <button style={{
          padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.125rem',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(8px)',
            minWidth: '180px'
          }}>
            View Case Studies
          </button>
        </div>

    
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          p {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;