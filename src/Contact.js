// Contact.js
function Contact() {
    return (
      <section id="contact" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        backgroundColor: '#2c3e50',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          Get In Touch
        </h2>
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          fontSize: '1.2rem',
          lineHeight: '2'
        }}>
          <p><strong>Email:</strong> anujprakash16@gmail.com</p>
          {/* <p><strong>Phone:</strong> +91 6201471436</p> */}
          <p><strong>Location:</strong> Ranchi,Jharkhand India</p>
          <p><strong>GitHub:</strong> github.com/AnujPrakash16</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/anuj-prakash-16a785392</p>
          
          <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
            Available for freelance projects and full-time opportunities.
            Let's build something great together!
          </p>
        </div>
      </section>
    );
  }
  
  export default Contact;