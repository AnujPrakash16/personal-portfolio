// About.js
function About() {
    return (
      <section id="about" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          About Me
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            I'm a React Native and Web Developer from Ranchi,Jharkhand. 
            I recently completed my React Native training and I'm passionate 
            about building practical, user-friendly applications.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            With a B.Tech in Computer Science (2015), I've spent the last year 
            focusing on modern JavaScript frameworks and mobile app development. 
            I specialize in creating solutions for small businesses and startups.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            I believe in clean code, continuous learning, and delivering 
            value through technology.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;