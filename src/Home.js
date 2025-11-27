// Home.js
function Home() {
    return (
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Hi, I'm Anuj Prakash
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' , fontWeight:'400',opacity:'0.9'}}>
          React Native & Web Developer
        </h2>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '2.5rem' , lineHeight:'1.6' , opacity:'0.95' }}>
          I build mobile apps and websites for small businesses.
          Specializing in React Native and React.js.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}></div>

        <a href="#projects" style={{
            padding: '1rem 2.5rem',
            backgroundColor: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            View Projects
          </a>


<a href="#contact" style={{
          padding: '1rem 2.5rem',
          backgroundColor: 'transparent',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          border:'2px solid white',
          transition:'all 0.3s ease'
        }}>
          Get In Touch
        </a>
      </section>
    );
  }
  
  export default Home;