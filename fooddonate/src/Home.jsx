import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleDonorClick = () => {
    navigate('/login', { state: { userType: 'donor' } });
  };

  const handleReceiverClick = () => {
    navigate('/login', { state: { userType: 'receiver' } });
  };

  return (
    <div className="home">
      <h1>Are you a donor or receiver?</h1>
      <div className="button-container">
        {/* Donor Box */}
        <div className="card-box">
          <img src="/images/outputt.jpg" alt="Donor" className="card-image" />
          <button onClick={handleDonorClick}>I am a Donor</button>
        </div>

        {/* Receiver Box */}
        <div className="card-box">
          <img src="/images/give.jpg" alt="Receiver" className="card-image" />
          <button onClick={handleReceiverClick}>I am a Receiver</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
