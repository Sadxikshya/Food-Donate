import React, { useState, useEffect } from 'react';
import './ReceiverProfile.css'; 


function ReceiverProfile({ donorName, donorAddress , donorDescription ,donorPhone , donorOption ,donorShip }) {
  const [uploadedImage, setUploadedImage] = useState([]);
  const [foodCollected, setFoodCollected] = useState(false);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('donorImages')) || [];
    setUploadedImage(savedImages);
  }, []);

  const handleCollectClick = (image) => {
    // Remove the collected image from the list
    const updatedImages = uploadedImage.filter(img => img !== image);
    setUploadedImage(updatedImages);
    localStorage.setItem('donorImages', JSON.stringify(updatedImages)); // Update localStorage

    // Set the state to show the message
    setFoodCollected(true);
  };

  return (
    <div className="receiver-profile">
      <h2>Receiver View</h2>
      {uploadedImage.length > 0 ? (
        <div className="image-gallery">
          {uploadedImage.map((image, index) => (
            <div key={index} className="image-card">
              <h3>Food from: {donorName}
                  Location: {donorAddress}
                  Description: {donorDescription}
                  Number: {donorPhone}
                  Price: {donorOption}
                  Shipping:{donorShip}
              </h3>
              <img src={image} alt={`Food from ${donorName} ${donorAddress} ${donorDescription} ${donorPhone} ${donorOption} ${donorShip}`} className="received-image" />
              <button onClick={() => handleCollectClick(image)}>Collect</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}

{foodCollected && (
  <div className={`collection-message ${foodCollected ? 'show' : 'hide'}`}>
  <h3>Food Collected!</h3>
    <p>Collect the food from the address: {donorAddress} </p>
    <p>The food is : {donorDescription} </p>
    <p> The contact number is : {donorPhone}</p> 
  </div>
)}

    </div>
  );
}

export default ReceiverProfile;