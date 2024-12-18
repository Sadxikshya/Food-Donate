import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = location.state || {}; // Access userType from location.state

  const handleLogin = (event) => {
    event.preventDefault();
  
    // Assuming login validation is successful, navigate based on userType
    if (userType === 'donor') {
      navigate('/donor');
    } else if (userType === 'receiver') {
      navigate('/receiver');
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="brand-name">Sustain-a-Bites Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage; 