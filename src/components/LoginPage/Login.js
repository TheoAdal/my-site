import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); //For handling error messages
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/postroutes/user/login",
        {
          email,
          password,
        }
      );

      const { access_token, user } = response.data;
      const token = response?.data?.access_token;

      if (token) {
        localStorage.setItem("access_token", token);
        dispatch(login({ token: access_token, user }));

        //reset form
        setEmail("");
        setPassword("");

        navigate("/dashboard");
      } else {
        setErrorMessage("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Authentication failed:", error);

      const { code, message } = error.response?.data || {};

      if (code === "EMAIL_NOT_VERIFIED") {
        setErrorMessage("Please check your inbox and verify your email.");
      } else if (code === "INVALID_CREDENTIALS") {
        setErrorMessage("Incorrect email or password.");
      } else {
        setErrorMessage(message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="Auth-form-container">
    <form
      className="nes-container is-centered Auth-form"
      onSubmit={handleSubmit}
    >
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Log in</h3>
        <div className="input-field">
          <div className="nes-field">
            {/* <label>Email address</label> */}
            <input
              id="email_field"
              type="email"
              value={email}
              className="nes-input input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-field">
          <div className="nes-field">
            {/* <label>Password</label> */}
            <input
              id="password_field"
              type="password"
              value={password}
              className="nes-input input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
          <button
            type="submit"
            className="nes-btn is-success btn-primary"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
        <div className="form-group mt-2">
          Don't you have an account?
          <a href="/register"> Register</a>
        </div>
        <div className="options">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default Login;
