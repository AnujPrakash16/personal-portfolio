import './App.css';

import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'
import React from 'react'
import Home from './Home'

function Navbar() {

  const [hoveredLink, setHoveredLink] = React.useState(null)

  const navStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
  }

  const linksContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center'
  }

  const linkStyle = (isHovered) => ({
    color: isHovered ? '#3498db' : 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  })

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '0.5rem'
  }

  const links = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <nav style={navStyle}>
      
      <div style={logoStyle}>Portfolio</div>

      <div style={linksContainerStyle}>
        {links.map((link) => (
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
  )
}

function App() {
  return (
    <div className="App">

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />

    </div>
  )
}

export default App
