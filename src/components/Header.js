// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      
      <div className="logo">Portfolio</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="Home" smooth={true} duration={500}>Home</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="education" smooth={true} duration={500}>Education</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;