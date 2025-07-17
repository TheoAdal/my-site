import React, { useState } from "react";
import axios from "axios";
// import "./PasswordPage.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/tokenbasedroutes/forgot-password",
        { email }
      );
      setMessage("An email has been sent to you. Please check your inbox.");
    } catch (error) {
      if (error.response?.status === 404) {
        setError("There is no account with this email address.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="verification-container">
      <form className="verification-windown" onSubmit={handleSubmit}>
        <h2>Forgot Your Password?</h2>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="green_btn">
          Send Reset Link
        </button>
      </form>

      {/* Message or error feedback */}
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
