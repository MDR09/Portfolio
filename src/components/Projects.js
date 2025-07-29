import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "TripWise",
      description: "An AI-powered trip planner that suggests personalized travel itineraries",
      technologies: ["React.js", "Firebase", "Gemini API", "LocationIQ API", "Unsplash API"],
      features: [
        "AI-based destination and activity recommendations using Gemini API",
        "Interactive maps via LocationIQ",
        "Destination visuals powered by Unsplash API",
        "Secure travel plan saving and real-time updates with Firebase"
      ],
      category: "Full Stack",
      demoUrl: "https://tripwisee.netlify.app/",
      codeUrl: "https://github.com/MDR09/TripWise"
    },
    {
      title: "Expense Tracker",
      description: "A full-stack application to track and visualize daily expenses",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Responsive dashboard with add/update/delete expense functionality",
        "Dynamic charts and category-wise expense tracking",
        "Secure RESTful APIs using Express.js and Node.js",
        "JWT-based authentication and React state management"
      ],
      category: "Full Stack",
      demoUrl: "https://github.com/yourusername/expense-tracker",
      codeUrl: "https://github.com/yourusername/expense-tracker"
    },
    {
      title: "Job Board",
      description: "A modern job portal for job posting and application with secure authentication",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Clerk", "ShadCN UI"],
      features: [
        "Responsive and modern UI with Tailwind CSS and ShadCN UI",
        "User sign-up/login with Clerk and role-based access",
        "Real-time job posting and user data management using Firebase"
      ],
      category: "Full Stack",
      demoUrl: "https://your-job-portal-link.com",
      codeUrl: "https://github.com/yourusername/job-board"
    },
    {
      title: "Charity Management System",
      description: "Full stack website that provides features like donor registration, event scheduling, and real-time data management with Firebase.",
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
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Some of my recent technical work</p>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
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

      {projects.length > 3 && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
