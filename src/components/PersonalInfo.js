import React from "react";
import ProfilePic from "../assets/images/ProfilePic.png";

const PersonalInfo = () => {
  return (
    <div className='personal-info container mt-5'>
      <div className='card mb-3 shadow'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={ProfilePic}
              alt='Pikku Panda'
              className='img-fluid rounded-start'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h2 className='card-title'>Personal Information</h2>
              <p className='card-text'>
                <strong>Name:</strong> Edem Quashigah
              </p>
              <p className='card-text'>
                <strong>Email:</strong> edem.quashigah@student.hamk.fi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
