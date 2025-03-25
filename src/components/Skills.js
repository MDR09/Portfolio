import React from "react";
import "../styles/Skills.css";

const services = [
  { 
    title: "Programming", 
    icon: "💻",
    description: "C, C++, HTML, CSS, JavaScript, SQL" 
  },
  { 
    title: "Web Development", 
    icon: "🌐",
    description: "React.js, Tailwind CSS, Node.js, Express" 
  },
  // { 
  //   title: "Tools", 
  //   icon: "🛠️",
  //   description: "VS Code, Git, GitHub" 
  // },
  { 
    title: "Soft Skills", 
    icon: "🤝",
    description: "Communication, Problem Solving, Teamwork, Time Management" 
  },
];

const Services = () => {
  return (
    <section className="services-section" id="skills">
      <div className="services-header">
        <h2>Skills</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
              {service.description}
            </p>
            <div className="service-arrow">↘</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;