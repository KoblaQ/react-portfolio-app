import React from "react";

const WorkExperience = () => {
  // Example educational background data
  const workPlaces = [
    {
      id: 1,
      company: "Google Oy",
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
    <div className='work-experience container mt-5'>
      <h2 className='mb-4'>Work Experience</h2>
      <div className='row'>
        {workPlaces.map((workPlaces) => (
          <div className='col-md-6 col-lg-4 mb-4' key={workPlaces.id}>
            <div className='card h-100 shadow'>
              <div className='card-header'>
                <h5 className='card-title mb-0'>{workPlaces.company}</h5>
              </div>
              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {workPlaces.position}
                </h6>
                <p className='card-text'>{workPlaces.description}</p>
              </div>
              <div className='card-footer text-muted'>
                <small>{workPlaces.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
