import logo from './logo.svg';
import './App.css';

import About from './About'
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import React from 'react';
import Home from './Home';



function Navbar(){
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const navStyle = {
    position: 'left',
    top: 0,
    backgroundColor: '#2c3e50',  // Dark blue-gray
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? '#3498db' : 'white',  // Blue on hover
    textDecoration: 'none',
    margin: '0 1.5rem',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  });

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  };
  const links = ['home', 'about', 'skills', 'projects', 'contact'];
  return(
    <nav style={navStyle}>
    <div style={logoStyle}></div>
    <div>
    {links.map(link => (
          <a 
            key={link}
            href={`#${link}`}
            style={linkStyle(hoveredLink === link)}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      
        <Navbar />
       

        <Home/>
        
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        
       
    
    </div>
  );
}


export default App;
