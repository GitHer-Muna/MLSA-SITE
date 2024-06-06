import React from "react";

const Education = () => {
  const educationDetails = [
    {
      institution: 'Lord Budhha Education Foundation',
      degree: 'Bachelor in Information Technology',
      period: '(2023 onwards)',
      modules: [
        { name: 'Data Structures and Algorithms', grade: 'A+' },
        { name: 'Database Systems', grade: 'A' },
        { name: 'Web Development', grade: 'A+'},
        { name: 'Software Engineering', grade: 'A' },
        { name: 'Operating Systems', grade: 'A-' },
        { name: 'Computer Networks', grade: 'A' },
      ],
    },
    // Add more education details if needed
  ];

  return (
    <section className="education-section" id="education">
    <h2 style={{ textAlign: "center" }}>Education</h2>
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
      {educationDetails.map((edu, index) => (
          <div key={index} className="education-block">
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="period">{edu.period}</p>
            <ul className="modules"  style={{ textAlign: "left" }}>
              {edu.modules.map((module, index) => (
                <li key={index}>
                  <span className="module-name">{module.name}:</span>
                  <span className={`grade grade-${module.grade.replace('+', 'plus').replace('-', 'minus')}`}>
                    {module.grade}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
    </section>
  );
};

export default Education;

// Add some basic styling
// You can expand upon this with your own CSS or styling solution
