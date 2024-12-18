import React, { useState, useEffect } from 'react';
import './IndividualDonor.css';

function IndividualDonor({ setUploadedImage, setDonorName, setDonorAddress, setDonorDescription , setDonorPhone ,setDonorOption ,setDonorShip}) {
  const [donorImages, setDonorImages] = useState([]);
  const [donorNameInput, setDonorNameInput] = useState('');
  const [donorAddressInput, setDonorAddressInput] = useState('');
  const [donorDescriptionInput, setDonorDescriptionInput] = useState('');
  const [donorPhoneInput, setDonorPhoneInput] = useState(''); 
  const [donorOptionInput, setDonorOptionInput] = useState(''); 
  const [donorShipInput, setDonorShipInput] = useState(''); 

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
      setUploadedImage(donorImages); // Pass images to parent component
      setDonorName(donorNameInput);  // Set donor name
      setDonorAddress(donorAddressInput);  // Set donor address
      setDonorDescription(donorDescriptionInput);
      setDonorPhone(donorPhoneInput);
      setDonorOption(donorOptionInput);
      setDonorShip(donorShipInput);


      alert('Images uploaded successfully!');  // Display pop-up message
    }
  };

  return (
    <div className="individual-donor">
      <h3>Restaurant Donor</h3>
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

      <select
        value={donorOptionInput} // Create a state for this input
        onChange={(e) => setDonorOptionInput(e.target.value)} // Update state on change
      >
        <option value="" disabled>Fees Option</option> {/* Placeholder */}
        <option value="50% off">50% off</option>
        <option value="Completely Free">Completely Free</option>
      </select>

      <select
        value={donorShipInput} // Create a state for this input
        onChange={(e) => setDonorShipInput(e.target.value)} // Update state on change
      >
        <option value="" disabled>Shipping  Option</option> {/* Placeholder */}
        <option value="Drop off">Drop off</option>
        <option value="Pick up">Pickup</option>
      </select>

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
