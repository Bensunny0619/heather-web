import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';
import logoImage from '../assets/heatherweb-img.jpg';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left section */}
      <div className="login-left">
        <h1 className="login-heather-text">Heather</h1>
        <h2 className="login-heading">Login</h2>
        <LoginForm />
      </div>

      {/* Right section with image */}
      <div className="login-right">
        <img src={logoImage} alt="Doctor Consultation" className="login-image" />
        <div className="login-welcome-text">Welcome<br />Back</div>
      </div>
    </div>
  );
};

export default LoginPage;
