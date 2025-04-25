import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import '../styles/Hero.css';

function Home() {
    const [role, setRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    const roles = useMemo(() => ['Coder', 'Web Developer', 'Programmer'], []);
    
    useEffect(() => {
      const handleTyping = () => {
        const current = loopNum % roles.length;
        const fullText = roles[current];
        
        setRole(isDeleting 
          ? fullText.substring(0, role.length - 1)
          : fullText.substring(0, role.length + 1)
        );
        
        setTypingSpeed(isDeleting ? 30 : 150);
        
        if (!isDeleting && role === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && role === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      };
  
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }, [role, isDeleting, loopNum, roles, typingSpeed]);
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text-content"
            >
              <h2 className="hero-title">Manish Dharawaniya</h2>
              <div className="hero-subtitle-container">
                <span className="hero-subtitle-text">I'm a</span>
                <span className="hero-subtitle-highlight">
                {role}
                  <span className="typing-cursor">|</span>
                </span>
              </div>
              <p className="hero-description">
              Passionate about Computer Science, I am a Bachelor's student with a strong academic foundation and a knack for
problem-solving. Excited to collaborate on innovative projects, I am actively seeking an internship opportunity to
translate theoretical knowledge into practical applications. My goal is to cultivate diverse technical skills and gain
hands-on experience in real-world scenarios.
              </p>
              <div className="hero-actions">
                <motion.a
                  href="https://drive.google.com/file/d/1pTPcwTGzWIhmhE9S9OJp0kEKpsJ3kOku/view?usp=sharing"
                  target="_blank"
                  className="download-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
                <div className="social-icons">
                  <motion.a
                    href="https://github.com/MDR09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  {/* <motion.a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin size={20} />
                  </motion.a> */}
                  {/* <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Youtube size={20} />
                  </motion.a>
                  <motion.a
                    href="#gaming"
                    className="social-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GameController size={20} />
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="profile-image-container"
            >
              <div className="profile-image-wrapper">
                <img
                  src="profile.jpg"
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div className="profile-glow" />
              <div className="profile-border-1" />
              <div className="profile-border-2" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;