import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Rinku Yadav's portfolio data
  const portfolioData = `
  ## NAME - RINKU YADAV

  ## EDUCATION
  - **B.Tech in Electronics and Communication Engineering**
    - Malaviya National Institute of Technology, Jaipur (2020-2024)
    - CGPA: 8.02/10
  - **Senior Secondary (12th Grade)**
    - Matrix High School, Sikar, Rajasthan
    - Percentage: 87.20% (PCM)
  - **Secondary (10th Grade)**
    - HDI Public School, Sikar, Rajasthan
    - Percentage: 86.5%

  ## TECHNICAL SKILLS
  - **Programming Languages:** C, C++, HTML, CSS, JavaScript, SQL
  - **Technologies/Frameworks:** React.js, Tailwind CSS
  - **Tools:** VS Code, Git, GitHub
  - **Coursework:** DSA, Operating Systems, Microprocessors, Computer Architecture

  ## PROJECTS
  ### 1. AI-Powered Code Reviewer (Full Stack)
  - **Tech Stack:** React.js, Tailwind CSS, Node.js, Express, Gemini API, MongoDB
  - **Features:**
    - Real-time code suggestions and error detection
    - Integrated AI for code improvements
    - Responsive frontend design

  ### 2. Doctor Appointment Website (Frontend)
  - **Tech Stack:** React.js, Tailwind CSS
  - **Features:**
    - Doctor search and filtering
    - Appointment scheduling system
    - Responsive UI for all devices

  ### 3. Weather Web App
  - **Tech Stack:** HTML, CSS, JavaScript, OpenWeather API
  - **Features:**
    - Real-time weather data display
    - Location detection
    - Temperature conversion

  ## POSITIONS OF RESPONSIBILITY
  - Joint Secretary | Dance Club | MNIT Jaipur
  - Technical Team Member | Sphinx 2023
  - Executive | Cultural Team | Sphinx 2023
  `;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const apiKey = process.env.REACT_APP_TOGETHER_API_KEY;
    if (!apiKey) throw new Error("API key missing");
      const response = await axios.post(
        'https://api.together.xyz/v1/chat/completions',
        {
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
          messages: [
            {
              role: "system",
              content: `You are an AI assistant for Rinku Yadav's portfolio. 
              Below is Rinku's complete information. Use only this data to answer questions:

              ${portfolioData}

              Guidelines:
              1. Only answer those questions that will ask in chat no another information 
              2. Only answer from the provided data
              3. For unknown queries: "That information isn't in Rinku's portfolio"
              4. Keep answers professional`
            },
            { role: "user", content: input }
          ],
          max_tokens: 200,
          temperature: 0.3
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_TOGETHER_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const botMessage = { 
        text: response.data.choices[0].message.content.trim(),
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, 
        { text: "I'm having trouble accessing Rinku's information right now.", sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
      >
        {isOpen ? '×' : 'Ask About Rinku'}
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Rinku's Portfolio Assistant</h4>
            <p>Powered by Together AI</p>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="loading-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about skills, projects or education..."
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;