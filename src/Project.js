// Project.js (or Projects.js)
function Project() {
    return (
      <section id="projects" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          Projects
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Portfolio projects coming soon!
          </p>
          <p style={{ fontSize: '1rem', color: '#888', marginTop: '1rem' }}>
            I'm currently building 2-3 showcase projects that will be added here by the end of this week.
          </p>
        </div>
      </section>
    );
  }
  
  export default Project;