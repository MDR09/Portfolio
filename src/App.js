// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Skills';
import Experience from './components/Education';
import Portfolio from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;