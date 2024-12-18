import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes , } from 'react-router-dom'; 
import Home from './Home'; 
import DonorProfile from './DonorProfile'; 
import ReceiverProfile from './ReceiverProfile'; 
import IndividualDonor from './IndividualDonor'; 
import RestaurantDonor from './RestaurantDonor'; 
import LandingPage from './LandingPage'; 
import LoginPage from './LoginPage'; 

function App() { 
  const [donorName, setDonorName] = useState(''); 
  const [donorAddress, setDonorAddress] = useState('');
  const [donorDescription, setDonorDescription] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorOption, setDonorOption] = useState('');
  const [donorShip, setDonorShip] = useState('');
  const [uploadedImage, setUploadedImage] = useState([]); 
  const [donorType, setDonorType] = useState(null); 

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Home Page Route */}
        <Route path="/home" element={<Home />} />

        {/* Donor Profile Route */}
        <Route
          path="/donor"
          element={
            <DonorProfile 
              setUploadedImage={setUploadedImage} 
              setDonorName={setDonorName} 
              setDonorAddress={setDonorAddress}
              setDonorDescription={setDonorDescription}
              setDonorPhone={setDonorPhone}
              setDonorOption={setDonorOption}
              donorType={donorType}
              setDonorType={setDonorType}
            />
          }
        />

        {/* Individual Donor Route */}
        <Route
          path="/donor/individual"
          element={
            <IndividualDonor 
              donorType={donorType}
              setDonorType={setDonorType}
              setUploadedImage={setUploadedImage} 
              setDonorName={setDonorName} 
              setDonorAddress={setDonorAddress}
              uploadedImage={uploadedImage} 
              donorName={donorName}
              setDonorDescription={setDonorDescription}
              setDonorPhone={setDonorPhone}
              donorAddress={donorAddress}
              
            />
          }
        />

        {/* Restaurant Donor Route */}
        <Route
          path="/donor/restaurant"
          element={
            <RestaurantDonor 
              donorType={donorType}
              setUploadedImage={setUploadedImage} 
              setDonorName={setDonorName} 
              setDonorAddress={setDonorAddress}
              setDonorDescription={setDonorDescription}
              setDonorPhone={setDonorPhone}
              setDonorOption={setDonorOption}
              setDonorShip={setDonorShip}
              setDonorType={setDonorType}
              uploadedImage={uploadedImage} 
              donorName={donorName}
              donorAddress={donorAddress}
            />
          }
        />

        {/* Receiver Profile Route */}
        <Route
          path="/receiver"
          element={<ReceiverProfile donorName={donorName} 
          donorAddress={donorAddress}
           donorDescription={donorDescription} 
           donorPhone={donorPhone} 
           donorOption={donorOption}
           setDonorShip={setDonorShip}
            />}
        />
      </Routes>
    </Router>
  );
}

export default App; 