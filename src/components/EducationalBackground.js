import React from "react";

const EducationalBackground = () => {
  // Educational background data
  const educations = [
    {
      id: 1,
      institution: "Häme University of Applied Sciences",
      degree: "Computer Applications",
      year: "2022 - 2025",
      description:
        "An acclaimed institute dedicated to the study of cartoon motion and slapstick science.",
    },
    {
      id: 2,
      institution: "University of Oulu",
      degree: "Master of Arts in Learning, Education and Technology",
      year: "2015 BC - 2017",
      description:
        "A prestigious institution known for its rigorous curriculum in memeology and viral content.",
    },
    {
      id: 3,
      institution: "University of Ghana, Legon",
      degree: "Sociology & Adult Education (Combined Majors)",
      year: "2010 - 2014",
      description:
        "An acclaimed institute dedicated to the study of cartoon motion and slapstick science.",
    },
  ];

  return (
    <div className='educational-background container-fluid mt-5'>
      <h2 className='mb-4'>Educational Background</h2>
      <div className='row'>
        {educations.map((education) => (
          <div className='col-md-6 col-lg-4 mb-4' key={education.id}>
            <div className='card h-100 shadow'>
              <div className='card-header'>
                <h5 className='card-title mb-0'>{education.institution}</h5>
              </div>
              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {education.degree}
                </h6>
                <p className='card-text'>{education.description}</p>
              </div>
              <div className='card-footer text-muted'>
                <small>{education.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalBackground;
