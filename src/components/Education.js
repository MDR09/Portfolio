import React from "react";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Malaviya National Institute of Technology, Jaipur",
      year: "2020 - 2024",
      details: [
        "CGPA: 8.02/10",
        "Relevant Courses: DSA, Operating Systems, Microprocessors and Computer Architecture"
      ]
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "Matrix High School, Sikar, Rajasthan",
      year: "2018 - 2020",
      details: [
        "Percentage: 87.20% (PCM)",
        "Board: Rajasthan Board of Secondary Education"
      ]
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "HDI Public School, Sikar, Rajasthan",
      year: "2018",
      details: [
        "Percentage: 86.5%",
        "Board: Rajasthan Board of Secondary Education"
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