import React from 'react';
import { useNavigate } from 'react-router-dom';
import individualImage from './images/individual.jpg'; // Add your image path here
import restaurantImage from './images/restaurant.jpg'; // Add your image path here
import './DonorProfile.css'; // Make sure the path is correct

function DonorProfile({ setDonorName, setDonorAddress, setUploadedImage, donorType, setDonorType }) {
  const navigate = useNavigate();

  const handleDonorSelection = (type) => {
    setDonorType(type); // Set the donor type when selected
    if (type === 'Individual') {
      navigate('/donor/individual');
    } else {
      navigate('/donor/restaurant');
    }
  };

  return (
    <div className="donor-profile">
      <h2>Select Donor Type</h2>
      <div className="donor-options">
        {/* Individual Button */}
        <div className="donor-option" onClick={() => handleDonorSelection('Individual')}>
          <img src={individualImage} alt="Individual" />
          <button>Individual</button>
        </div>

        {/* Restaurant Button */}
        <div className="donor-option" onClick={() => handleDonorSelection('Restaurant')}>
          <img src={restaurantImage} alt="Restaurant" />
          <button>Restaurant</button>
        </div>
      </div>
    </div>
  );
}

export default DonorProfile;
