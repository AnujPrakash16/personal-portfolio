// Project.js (or Projects.js)
export default function Project()
  {
    return(
      <section id="projects" style={{ 
  minHeight: '100vh', 
  padding: '4rem 2rem',
  backgroundColor: '#f8f9fa'
}}>
  <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
    Portfolio Projects
  </h2>
  <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c3e50' }}>
          The Gangaur Restaurant Website
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          A modern, responsive restaurant website featuring menu display, gallery, 
          and contact information. Built with React.js.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#e3f2fd', 
            color: '#1976d2',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>React.js</span>
          <span style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#f3e5f5', 
            color: '#7b1fa2',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>Responsive Design</span>
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <a href="https://restaurant-website1-five.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '500'
          }}>
            View Live
          </a>
          <a href="https://github.com/AnujPrakash16/restaurant-website1.git" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#2c3e50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '500'
          }}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
           )
}
