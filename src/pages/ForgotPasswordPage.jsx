import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/password.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [hospital, setHospital] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reset link sent to:', email, 'from hospital:', hospital);
    navigate('/verify-code', { state: { email } });
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2 className="forgot-heading">Forgot Password</h2>
        <p className="forgot-subtext">
          No worries, it happens. Let’s help you securely reset your password.
        </p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="form-group">
            <label htmlFor="hospital">Hospital Name</label>
            <input
              id="hospital"
              type="text"
              placeholder="Enter your hospital name"
              value={hospital}
              onChange={e => setHospital(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reset-email">Email Address</label>
            <input
              id="reset-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Continue</button>

          <p className="text-center">
           Remember Password? <a href="/create-account" className="link">Login</a>
        </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
