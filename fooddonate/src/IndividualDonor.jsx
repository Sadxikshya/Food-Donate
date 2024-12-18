import React, { useState, useEffect } from 'react';
import './IndividualDonor.css';

function IndividualDonor({ setUploadedImage, setDonorName, setDonorAddress ,setDonorDescription, setDonorPhone}) {
  const [donorImages, setDonorImages] = useState([]);
  const [donorNameInput, setDonorNameInput] = useState('');
  const [donorAddressInput, setDonorAddressInput] = useState('');
  const [donorDescriptionInput, setDonorDescriptionInput] = useState('');
  const [donorPhoneInput, setDonorPhoneInput] = useState('');

  // Load saved images from localStorage when the component mounts
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('donorImages')) || [];
    setDonorImages(savedImages);
  }, []);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            const updatedImages = [...donorImages, ...newImages];
            setDonorImages(updatedImages);
            localStorage.setItem('donorImages', JSON.stringify(updatedImages));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleUploadClick = () => {
    if (donorImages.length > 0) {
      setUploadedImage(donorImages); 
      setDonorName(donorNameInput);  
      setDonorAddress(donorAddressInput); 
      setDonorDescription(donorDescriptionInput);
      setDonorPhone(donorPhoneInput); 
      alert('Images uploaded successfully!'); 

    }
  };

  return (
    <div className="individual-donor">
      <h3>Individual Donor</h3>
      <input
        type="text"
        placeholder="Donor Name"
        value={donorNameInput}
        onChange={(e) => setDonorNameInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Donor Address"
        value={donorAddressInput}
        onChange={(e) => setDonorAddressInput(e.target.value)}
      />


      <input
        type="text"
        placeholder="Donor Description"
        value={donorDescriptionInput}
        onChange={(e) => setDonorDescriptionInput(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={donorPhoneInput} // Create a state for this input
        onChange={(e) => setDonorPhoneInput(e.target.value)} // Update state on change
      />
      <div className="image-gallery">
        {donorImages.map((image, index) => (
          <img key={index} src={image} alt={`Donor Image ${index}`} className="donor-image" />
        ))}
      </div>
      <input type="file" onChange={handleImageChange} multiple />
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default IndividualDonor;
