import React, { useState } from 'react';
import '../styles/app.css';


export default function CreateAccountPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className="create-account">
      <h2 className="heading">Create Your Account</h2>
      <p className="subtext">
        Join thousands taking control of their health. Sign up to securely manage your records all in one place.
      </p>

      <form className="form">
        <label className="nospace">Full Name</label>
        <input type="text" name="fullName" placeholder="Enter Full Name" onChange={handleChange} />

        <label className="nospace">Email Address</label>
        <input type="email" name="email" placeholder="Enter Email Address" onChange={handleChange} />

        <label className="nospace">Phone Number</label>
        <div className="phone-group">
          <button type="button" className="country-code" onClick={() => setShowCountryModal(true)}>
            {form.countryCode.flag} {form.countryCode.code}
          </button>
          <input type="tel" name="phone" placeholder="Enter Phone Number" onChange={handleChange} />
        </div>

        <label className="nospace">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="dob-input"
        />

        <label className="nospace">Gender (Optional)</label>
        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit" className="proceed-button">Proceed</button>
      </form>

      <div className="divider">or</div>

      <div className="social-buttons">
        <button type="button" className="social-btn">Sign Up with Apple</button>
        <button type="button" className="social-btn">
          <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
          Sign Up with Google
        </button>
      </div>

      <p className="login-text">Already have an account? <span>Login</span></p>
    </div>
  );
}
