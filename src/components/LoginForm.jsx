import React, { useState } from 'react';
import "../styles/app.css";


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="email" className="text-left">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-left">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="text-right">
        <a href="/forgot-password" className="link lefty">Forgot Password?</a>
      </div>

      <button type="submit" className="btn">Login</button>
      

      <p className="text-center">
        Don’t have an account? <a href="/signup" className="link">Sign up</a>
      </p>
    </form>
  );
};

export default LoginForm;
