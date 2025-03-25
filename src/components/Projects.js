import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Reviewer",
      description: "Full-stack application that provides real-time code suggestions and error detection using AI",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "Gemini API", "MongoDB"],
      features: [
        "Real-time code suggestions",
        "Error detection and improvements",
        "MongoDB data storage",
        "Responsive frontend design"
      ],
      category: "Full Stack"
    },
    {
      title: "Doctor Appointment Website",
      description: "Frontend system for booking doctor appointments with search and filtering capabilities",
      technologies: ["React.js", "Tailwind CSS"],
      features: [
        "Doctor search functionality",
        "Appointment scheduling",
        "Specialization filtering",
        "Responsive design"
      ],
      category: "Frontend"
    },
    {
      title: "Weather Web App",
      description: "Weather application displaying real-time data for multiple locations",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      features: [
        "Real-time weather data",
        "Location detection",
        "Temperature conversion",
        "Responsive UI"
      ],
      category: "Web Development"
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
              <button className="demo-btn">View Demo</button>
              <button className="code-btn">View Code</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;