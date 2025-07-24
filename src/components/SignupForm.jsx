import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit logic here
    console.log(formData);
  };

  const passwordChecks = [
    { label: "At least one uppercase (A...Z)", test: /[A-Z]/ },
    { label: "At least one lowercase (a...z)", test: /[a-z]/ },
    { label: "At least one number (0...9)", test: /[0-9]/ },
    { label: "At least one special character (!@#$...)", test: /[!@#$%^&*(),.?":{}|<>]/ },
    { label: "Minimum 8 characters", test: /.{8,}/ }
  ];

  const getValidationIcon = (test) => {
    return test.test(formData.password) ? '✔' : '✖';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="hospitalName">Hospital name</label>
      <input
        type="text"
        name="hospitalName"
        placeholder="Enter Hospital Name"
        value={formData.hospitalName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        onFocus={() => setShowPasswordRules(true)}
        onBlur={() => setShowPasswordRules(false)}
        required
      />

      {showPasswordRules && (
        <div className="password-rules">
          {passwordChecks.map(({ label, test }, i) => {
            const passed = test.test(formData.password);
            return (
              <div key={i} className={`rule ${passed ? 'valid' : 'invalid'}`}>
                <span className="icon">{getValidationIcon(test)}</span>
                <span className="label">{label}</span>
              </div>
            );
          })}
        </div>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn">Continue</button>

      <p className="text-center">
        Already have an account? <a href="/create-account" className="link">Login</a>
      </p>
    </form>
  );
};

export default SignupForm;
