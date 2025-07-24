import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/password.css';
import confettiImage from '../assets/coffetti.png';



const PasswordSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className='success-page'>
       <h1 className='heather-text'>Heather</h1>
      <div className="success-container">
      <div className="success-card">
       
       <div className="confetti-wrapper">
           <img src={confettiImage} alt="Confetti" className="confetti-image" />
       </div>
        <div className="success-circle">
          <svg
            className="success-check"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="success-heading">Password Reset successfully</h2>
        <p className="success-subtext">
          Your password has been updated successfully. You can now sign in securely.
        </p>

        <button className="btn" onClick={() => navigate('/login')}>
          Log In to your Account
        </button>
      </div>
      </div>
    </div>
  );
};

export default PasswordSuccessPage;
