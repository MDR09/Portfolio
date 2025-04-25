import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Manish Dharawaniya's resume data
  const resumeData = `
  ## NAME - MANISH DHARAWANIYA

  ## CONTACT
  - Location: Jaipur
  - Phone: +91 8233660611
  - Email: manishjini29@gmail.com
  - Github: Available (see resume)

  ## PROFESSIONAL SUMMARY
  Passionate about Computer Science, I am a Bachelor's student with a strong academic foundation and a knack for problem-solving. Excited to collaborate on innovative projects, I am actively seeking an internship opportunity to translate theoretical knowledge into practical applications. My goal is to cultivate diverse technical skills and gain hands-on experience in real-world scenarios.

  ## SKILLS
  - Programming Languages: C, C++, HTML, CSS, Javascript, SQL
  - Technologies/Frameworks: React.js, Node.js, Express.js, MongoDB, Basic Flask
  - Tools Used: VS Code, Git, Github, Firebase
  - Soft Skills: Communication, Problem Solving, Teamwork, Time management
  - Coursework: Introduction to Computer Science, Data Structures and Algorithms, Operating Systems, Object Oriented Programming and Database Management system

  ## PROJECTS
  ### 1. Real-Time Code Editor (Full Stack)
  - Tools and Technologies Used: MongoDB, Express.js, React.js, Node.js, Socket.io
  - Developed a Real-Time Code Editor using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for live collaboration.
  - Implemented real-time synchronization of code changes across multiple users with instant updates via Socket.io.
  - Built a responsive frontend with React.js, managing user sessions and document storage using MongoDB and Express.js.

  ### 2. Charity Management System (Full Stack)
  - Tools and Technologies Used: HTML, CSS, JavaScript, Firebase
  - Developed a Charity Management System using HTML, CSS, JavaScript, and Firebase to manage donations, volunteers, and events.
  - Implemented features like donor registration, event scheduling, and real-time data management with Firebase.
  - Designed responsive user interfaces and integrated Firebase for authentication, data storage, and live updates.

  ### 3. Railway Management System (Full Stack)
  - Tools and Technologies Used: HTML, CSS, JavaScript, SQL, Flask
  - Developed a Railway Management System using HTML, CSS, JavaScript, SQL, and Flask to manage train schedules, bookings, and passenger data.
  - Implemented features like ticket booking, train search, and real-time schedule updates with Flask and SQL for backend processing.
  - Designed responsive interfaces with HTML, CSS, and JavaScript, ensuring smooth user interactions and efficient data handling.

  ## EDUCATION
  - **B.Tech in Computer Science And Engineering** (Expected 2026)
    - Malaviya National Institute of Technology, Jaipur, Rajasthan
    - Relevant Courses: DSA, Operating Systems, DBMS, Software Engineering
  - **Senior Secondary** (04/2021)
    - Ritual Public School, RamganjMandi, Rajasthan
  - **Secondary**
    - Aklank Public School, Kota, Rajasthan (04/2018)

  ## POSITIONS OF RESPONSIBILITY
  - Volunteer | Cultural Team | Blitzschlag | 2023
  - Volunteer | NSS | 2023
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
              content: `You are an AI assistant for Manish Dharawaniya's resume. 
              Below is Manish's complete information. Use only this data to answer questions:

              ${resumeData}

              Guidelines:
              1. Only answer questions about Manish's resume
              2. Only answer from the provided data
              3. For unknown queries: "That information isn't in Manish's resume"
              4. Keep answers professional and concise`
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
        { text: "I'm having trouble accessing Manish's information right now.", sender: 'bot' }
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
        {isOpen ? '×' : 'Ask About Manish'}
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Manish's Resume Assistant</h4>
            <p>Ask about skills, projects, or education</p>
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