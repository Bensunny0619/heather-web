import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/password.css';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const navigate = useNavigate();

  const passwordChecks = [
    { label: "At least one uppercase (A...Z)", test: /[A-Z]/ },
    { label: "At least one lowercase (a...z)", test: /[a-z]/ },
    { label: "At least one number (0...9)", test: /[0-9]/ },
    { label: "At least one special character (!@#$...)", test: /[!@#$%^&*(),.?":{}|<>]/ },
    { label: "Minimum 8 characters", test: /.{8,}/ }
  ];

  const validation = passwordChecks.reduce((acc, rule) => {
    acc[rule.label] = rule.test.test(password);
    return acc;
  }, {});

  const getValidationIcon = (test) => {
    return test.test(password) ? '✔' : '✖';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(validation).every(Boolean);
    if (allValid && password === confirm) {
      console.log('Password reset successful');
      navigate('/password-success');
    } else {
      alert("Please make sure all password rules are met and both passwords match.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2 className="forgot-heading text-left">Reset Password</h2>
        <p className="forgot-subtext text-left">
          You're almost there. Set a strong password to continue.
        </p>

        <form onSubmit={handleSubmit} className="forgot-form">
          <label htmlFor="password" className="text-left nospace">Password</label>
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowPasswordRules(true)}
              onBlur={() => {
                if (password === '') setShowPasswordRules(false);
              }}
              required
            />
          </div>

          {showPasswordRules && (
            <div className="forgot-password-rules">
              {passwordChecks.map(({ label, test }, i) => {
                const passed = test.test(password);
                return (
                  <div key={i} className={`rule ${passed ? 'valid' : 'invalid'}`}>
                    <span className="icon">{getValidationIcon(test)}</span>
                    <span className="label">{label}</span>
                  </div>
                );
              })}
            </div>
          )}

          <label htmlFor="confirm" className="text-left nospace">Confirm New Password</label>
          <div className="forgot-password-wrapper">
            <input
              id="confirm"
              type="password"
              placeholder="Re-Enter Password"
              className="form-input"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
