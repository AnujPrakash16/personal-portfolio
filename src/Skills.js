// Skills.js
function Skills() {
    const skillsData = [
      { name: 'React Native', level: 'Intermediate', icon: '📱' },
    { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
    { name: 'JavaScript', level: 'Intermediate', icon: '💛' },
    { name: 'Firebase', level: 'Beginner', icon: '🔥' },
    { name: 'HTML & CSS', level: 'Intermediate', icon: '🎨' },
    { name: 'Git & GitHub', level: 'Beginner', icon: '🐙' },
    { name: 'REST APIs', level: 'Beginner', icon: '🔌' },
    { name: 'Responsive Design', level: 'Intermediate', icon: '📐' }
    ];
  
    return (
      <section id="skills" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' , color: '#2c3e50'}}>
          Skills & Technologies
        </h2>
      
        <p style={{ 
        textAlign: 'center', 
        fontSize: '1.1rem', 
        color: '#666', 
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem auto'
      }}>
        Technologies I work with to build modern web and mobile applications
      </p>


        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {skillsData.map((skill, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '500',
              boxShadow: '0 2px 5px rgba(0,0,0,1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
            }}onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                {skill.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                marginBottom: '0.5rem',
                color: '#2c3e50'
              }}>
                {skill.name}
              </h3>
              <span style={{ 
                fontSize: '0.9rem', 
                color: '#666',
                padding: '0.3rem 0.8rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '20px'
              }}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;