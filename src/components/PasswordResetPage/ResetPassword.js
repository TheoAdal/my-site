import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import "./PasswordPage.scss";

const ResetPassword = () => {
  const { token } = useParams(); // token from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/tokenbasedroutes/reset-password/${token}`,
        { password }
      );

      setMessage(response.data.text || "Password has been reset.");
      setPassword("");
      setConfirmPassword("");

      // Redirect to login after a delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Reset error:", err);
      setError(
        err.response?.data?.message ||
          "Reset failed. Link may be invalid or expired."
      );
    }
  };

  return (
    <div className="verification-container">
      <form className="verification-windown" onSubmit={handleReset}>
        <h2>Reset Your Password</h2>

        <label>New Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm New Password:</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="green_btn">
          Reset Password
        </button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
