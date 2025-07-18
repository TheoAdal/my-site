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
                required
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
                required
              />
            </div>
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
            <div className="form-group mt-2">
              Don't have an account?
              <Link to={"/register"}>Register</Link>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
            <div className="options">
              <a href="/forgot-password">Forgot your password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
