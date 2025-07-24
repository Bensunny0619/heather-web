import React from 'react';
import SignupForm from '../components/SignupForm';
import '../styles/app.css';
import logoImage from '../assets/heatherweb-img.jpg';


const SignupPage = () => {
  return (
    <div className="container">
      <div className='signup'>
        <h1 className='heather-text'>Heather</h1>
        <div className='left'>
           <div className="header">
            <h2 className="heading">Create an account</h2>
           </div>
           <SignupForm />
        </div>
      </div>
      <div className='image'>
        <img src={logoImage} alt="Signup Background" className="signup-image" />
        <div className="image-text">
          <h2>Welcome To <br /> Heather</h2>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
