// Skills.js
function Skills() {
    const skills = [
      'React Native',
      'React.js',
      'JavaScript (ES6+)',
      'Firebase',
      'HTML5 & CSS3',
      'Git & GitHub',
      'Responsive Design',
      'REST APIs'
    ];
  
    return (
      <section id="skills" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          Skills
        </h2>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '500',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;