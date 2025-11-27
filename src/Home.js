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
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          React Native & Web Developer
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
          I build mobile apps and websites for small businesses.
          Specializing in React Native and React.js.
        </p>
        <a href="#contact" style={{
          padding: '1rem 2rem',
          backgroundColor: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Get In Touch
        </a>
      </section>
    );
  }
  
  export default Home;