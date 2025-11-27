// Contact.js
function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'anujprakash16@gmail.com', icon: '📧', link: 'mailto:anujprakash16@gmail.com' },
    //{ label: 'Phone', value: '+91 XXXXX XXXXX', icon: '📱', link: 'tel:+91XXXXXXXXXX' },
    { label: 'Location', value: 'Ranchi,Jharkhand India', icon: '📍', link: null },
    { label: 'GitHub', value: 'github.com/Anujprakash16', icon: '💻', link: 'https://github.com/Anujprakash16' },
    { label: 'LinkedIn', value: 'linkedin.com/in/anuj-prakash-16a785392', icon: '💼', link: 'https://linkedin.com/in/anuj-prakash-16a785392' }
  ];

  return (
    <section id="contact" style={{ 
      minHeight: '100vh', 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        textAlign: 'center', 
        marginBottom: '1rem' 
      }}>
        Let's Work Together
      </h2>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.2rem', 
        opacity: '0.9',
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem auto'
      }}>
        Available for freelance projects and full-time opportunities
      </p>
      
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {contactInfo.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.5rem',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            marginBottom: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}>
            <span style={{ fontSize: '2rem', marginRight: '1.5rem' }}>
              {item.icon}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.9rem', opacity: '0.8', marginBottom: '0.3rem' }}>
                {item.label}
              </div>
              {item.link ? (
                <a href={item.link} style={{ 
                  fontSize: '1.1rem', 
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  {item.value}
                </a>
              ) : (
                <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                  {item.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        fontSize: '1rem',
        opacity: '0.8'
      }}>
        <p>Response time: Within 24 hours</p>
      </div>
    </section>
  );
}

export default Contact;