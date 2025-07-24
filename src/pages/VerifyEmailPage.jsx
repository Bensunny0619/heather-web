import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/verify.css';


const VerifyCodePage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email || '';

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Verification Code:', fullCode);
      navigate('/reset-password', { state: { email } });
    }
  };

  const handleResendClick = (e) => {
    e.preventDefault();
    if (timer === 0) {
      console.log('🔁 Resending code...');
      setTimer(60);
    }
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split('@');
    if (!user || !domain) return email;
    const maskedUser =
      user.length <= 2
        ? user[0] + '*'
        : user[0] + '*'.repeat(user.length - 2) + user.slice(-1);
    return `${maskedUser}@${domain}`;
  };

return (
  <div className="verify-page">
    <h1 className='verify-heather-text'>Heather</h1>
  <div className="verify-container">
    <div className="card verify-card">
      <div className="verify-header">
        <h2 className="heading">Verification Code Sent</h2>
        <p className="subtext">
          Enter the 6-digit security code sent to <b>{maskEmail(email)}</b>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="code-input-group">
          {code.map((digit, idx) => (
            <input
              key={idx}
              id={`code-${idx}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="code-input"
              autoComplete="off"
              inputMode="numeric"
            />
          ))}
        </div>

        <div className="resend-wrapper">
          <p className="resend-text">
            Didn’t receive it?{' '}
            <a
              href="/#"
              onClick={handleResendClick}
              className={`link ${timer > 0 ? 'disabled' : ''}`}
            >
              {timer > 0 ? `Resend in ${timer}s` : 'Resend Code'}
            </a>
          </p>
        </div>

        <button type="submit" className="btn">Continue</button>

        <p className="text-center small">
          Already have an account?{' '}
          <a href="/login" className="link">Login</a>
        </p>
      </form>
    </div>
  </div>
  </div>
);

};

export default VerifyCodePage;
