import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "./LoginWrapperComponent.css";

import axios from "axios";

const LoginWrapperComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); //For handling error messages

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://graduate-back-end.onrender.com/login", {
        email,
        password,
        // verified,
      });
      localStorage.setItem('access_token', response.data.access_token)
      navigate('/dashboard')
    } catch (error) {
      //window.alert('Wrong email or password')
      console.error("Authentication failed:", error);

      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log in</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
            <div className="form-group mt-2">
                Don't have an account? 
                <Link to={'/register'}>Register</Link>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={setToken}
              >
                Log In
              </button>
            </div>
            {/* <div className="options">
              Forgot your <a href="/forgotpassword">password?</a>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWrapperComponent;
