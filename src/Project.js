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
    
    {/* PROJECT 1: RESTAURANT */}
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c3e50' }}>
          Spice Garden Restaurant Website
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          A modern, responsive restaurant website featuring menu display, gallery, 
          and contact information. Built with React.js.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: '20px', fontSize: '0.9rem' }}>
            React.js
          </span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#f3e5f5', color: '#7b1fa2', borderRadius: '20px', fontSize: '0.9rem' }}>
            Responsive Design
          </span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e8f5e9', color: '#388e3c', borderRadius: '20px', fontSize: '0.9rem' }}>
            Business Website
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
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

{/* PROJECT 4: MOBILE APP */}
<div style={{...projectCardStyle}}>
  <h3>BizApp - Business Mobile App</h3>
  <p>
    Complete mobile application template for local businesses. 
    Features: Business info, services, gallery, contact with maps, 
    WhatsApp integration.
  </p>
  <div style={{tags}}>
    <span>React Native</span>
    <span>Expo</span>
    <span>Firebase</span>
    <span>Mobile App</span>
  </div>
  <div style={{buttons}}>
    <a href="https://expo.dev/accounts/anujprakash/projects/BizApp/builds/f6629fca-de17-42ef-9dca-240dc848e262">Download APK</a>
    <a href="https://github.com/AnujPrakash16/BizApp.git">GitHub</a>
  </div>
</div>

    {/* PROJECT 2: GROCERY STORE */}
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c3e50' }}>
          Fresh Daily Groceries Website
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Complete grocery store website with product categories, gallery, and 
          WhatsApp ordering integration. Modern design with image overlays.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e3f2fd', color: '#1976d2', borderRadius: '20px', fontSize: '0.9rem' }}>
            React.js
          </span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#fff3e0', color: '#e65100', borderRadius: '20px', fontSize: '0.9rem' }}>
            WhatsApp Integration
          </span>
          <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e8f5e9', color: '#388e3c', borderRadius: '20px', fontSize: '0.9rem' }}>
            E-commerce Ready
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://grocery-store1-pi.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '500'
          }}>
            View Live
          </a>
          <a href="https://github.com/AnujPrakash16/grocery-store.git" target="_blank" rel="noopener noreferrer" style={{
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
</section>)
}
