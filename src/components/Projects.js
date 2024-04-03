import React from "react";

const Projects = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      projectName: "Guess My Number Game",
      position: "Javascript",
      link: "https://koblaq.github.io/Complete_JavaScript_Course/Guess_My_Number_Game/",
    },
    {
      id: 2,
      projectName: "Modal",
      position: "JavaScript",
      link: "https://koblaq.github.io/Complete_JavaScript_Course/Modal_Project/",
    },
    // You can add more educational background entries here
    {
      id: 3,
      projectName: "Pig Game",
      position: "JavaScript",
      link: "https://koblaq.github.io/Complete_JavaScript_Course/Pig_Game/",
    },
  ];

  return (
    <div className='projects container-fluid mt-5'>
      <h2 className='mb-4'>Projects</h2>
      <div className='row'>
        {projects.map((projects) => (
          <div className='col-md-6 col-lg-4 mb-4' key={projects.id}>
            <div className='card h-100 shadow'>
              <div className='card-header'>
                <h5 className='card-title mb-0'>{projects.projectName}</h5>
              </div>
              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {projects.position}
                </h6>
                <p className='card-text'>
                  <a href={projects.link} target='_#'>
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
