// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Manish Dharawaniya. All rights reserved.</p>
        <div className="social-links">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;