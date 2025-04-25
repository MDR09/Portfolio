import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Real Time Code Editor",
      description: "Full-stack application that provides real-time synchronization of code changes across multiple users with instant updates via Socket.io",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      features: [
        "Real-time code editing",
        "Compile at real-time",
        "MongoDB data storage",
        "Responsive frontend design"
      ],
      category: "Full Stack",
      demoUrl: "https://your-demo-link-1.com",
      codeUrl: "https://github.com/yourusername/project1"
    },
    {
      title: "Charity Management System",
      description: "Full stack website the provide features like donor registration, event scheduling, and real-time data management with Firebase.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: [
        "Donor Registration and Management",
        "Donation Tracking",
        "Volunteer Registration",
        "Responsive design"
      ],
      category: "Full Stack",
      demoUrl: "https://ngo-charity.netlify.app/",
      codeUrl: "https://github.com/MDR09/Charity-Donation-"
    },
    {
      title: "Railway Management System",
      description: "Implemented features like ticket booking, train search, and real-time schedule updates with Flask and SQL for backend processing",
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "SQL"],
      features: [
        "Train Search and Schedule Viewing",
        "Ticket Booking System",
        "Passenger Data Management",
        "Admin Dashboard"
      ],
      category: "Web Development",
      demoUrl: "https://your-demo-link-3.com",
      codeUrl: "https://github.com/MDR09/Railway"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Some of my recent technical work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-details">
              <div className="technologies">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-links">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  View Demo
                </a>
              )}
              {project.codeUrl && (
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="code-btn"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;