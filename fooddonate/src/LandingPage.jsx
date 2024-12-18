import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleTeamClick = () => {
    navigate('/team');
  };

  const handleSuggestionClick = () => {
    navigate('/suggestions');
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Sustain-a-bite</div>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={handleContactClick}>
            Contact Us
          </button>
          <button className="nav-btn" onClick={handleTeamClick}>
            Our Team
          </button>
          <button className="nav-btn" onClick={handleSuggestionClick}>
            Suggestions
          </button>
          <button className="login-btn" onClick={handleLoginClick}>
            Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Turning Surplus Food into Opportunity</h1>
          <p>
            Join us in reducing food waste and building a sustainable future.
            Together, we can make a difference!
          </p>
          <button className="cta-btn" onClick={handleLoginClick}>
            Get Started
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <img
            src="/images/aboutus.jpg"
            alt="About Us"
            className="about-image"
          />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
            At Sustain-a-bite, we believe in a world where no food goes to waste. We're dedicated to tackling the environmental and social impact of food waste by connecting restaurants with local food banks. Our innovative platform makes it easy for restaurants to donate surplus food, ensuring it reaches those who need it most, while also reducing the carbon footprint of wasted resources.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section">
        <h2>What We Face</h2>
        <div className="challenges-container">
          <div className="challenge-text">
            <p>
              The scale of food waste and its environmental
              impact is staggering.
           
            
              1.3 billion tons of food waste annually
            
              828 million people go hungry
              
              Logistical challenges for restaurants
             
              25% of wasted food is edible
              
              10% of global greenhouse gases
              
              $1 trillion economic loss
              
              20% of material in landfills
              </p>
          </div>
          <img
            src="/images/scars.jpg"
            alt="About Us"
            className="about-image"
          />
          
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <h2>How We Help</h2>
        <div className="solutions-container">
        <img
            src="/images/aboutus.jpg"
            alt="About Us"
            className="about-image"
          />
          <div className="solution-text">
            <p>
              Sustain-a-bite provides an easy-to-use platform for restaurants
              and food businesses to donate surplus food. We connect donors
              with local charities and NGOs to ensure the food reaches those
              who need it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Sustain-a-bite. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link">Instagram</button>
            <button className="footer-link">Contact: 9861111111</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
