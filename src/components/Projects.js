import React from "react";

const Projects = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      company: "JavaScript",
      position: "JavaScript Expert",
      year: "2022 - 2024 BC",
      description: "Worked in Google as a softwere developer.",
    },
    {
      id: 2,
      company: "Meta",
      position: "Senior Data Analyst",
      year: "2019 - 2022",
      description: "Analyzed data from instagram finland.",
    },
    // You can add more educational background entries here
    {
      id: 3,
      company: "Nokia",
      position: "Java Developer",
      year: "2015 - 2019",
      description: "Developed backend solutions for satelite systems",
    },
  ];

  return (
    <div className='projects container mt-5'>
      <h2 className='mb-4'>Projects</h2>
      <div className='row'>
        {projects.map((projects) => (
          <div className='col-md-6 col-lg-4 mb-4' key={projects.id}>
            <div className='card h-100 shadow'>
              <div className='card-header'>
                <h5 className='card-title mb-0'>{projects.company}</h5>
              </div>
              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {projects.position}
                </h6>
                <p className='card-text'>{projects.description}</p>
              </div>
              <div className='card-footer text-muted'>
                <small>{projects.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
