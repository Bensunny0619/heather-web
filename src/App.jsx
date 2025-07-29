import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; 
// import './styles/app.css';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import PasswordVerificationPage from './pages/PasswordVerificationPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PasswordSuccessPage from './pages/PasswordSuccessPage';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password-success" element={<PasswordSuccessPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/verify-password" element={<PasswordVerificationPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
