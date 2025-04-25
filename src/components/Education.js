import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science And Engineering",
      institution: "Malaviya National Institute of Technology, Jaipur",
      year: "2022 - 2026",
      details: [
        "Relevant Courses: DSA, Operating Systems And Database Management System"
      ]
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "Ritual Public School, Kota, Rajasthan",
      year: "2021 - 2022",
      details: [
        "Board: Rajasthan Board of Secondary Education"
      ]
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Aklank Public School, Kota, Rajasthan",
      year: "2019",
      details: [
        "Board: Central Board of Secondary Education"
      ]
    }
  ];

  return (
    <section className="education-timeline" id="education">
      <div className="timeline-header">
        <h2>Education</h2>
        <p>My academic progression from school to college</p>
      </div>
      
      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={index}
          >
            <div className="timeline-content">
              <div className="timeline-year">{edu.year}</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <ul>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Education;