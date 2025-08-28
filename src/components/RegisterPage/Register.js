import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Password validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/postroutes/user/register",
        form
      );
      setMessage(res.data.message);
      setForm({ name: "", username: "", email: "", password: "" });

      // Redirect after success (optional)
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      if (err.response?.status === 409) {
        setError("Email is already registered.");
      } else if (err.response?.status === 410) {
        setError("Username is already taken.");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    // <div className="Register-form-container">
    <form
      className="nes-container is-centered Register-form"
      onSubmit={handleSubmit}
    >
      <div className="Register-form-content">
        <h3 className="Register-form-title">Register</h3>
        <div className="input-field">
          {/* <label>Name</label> */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="nes-input input"
            placeholder="Name"
            required
          />
        </div>
        <div className="input-field">
          {/* <label>Username</label> */}
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="nes-input input"
            placeholder="Username"
            required
          />
        </div>
        <div className="input-field">
          {/* <label>Email</label> */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="nes-input input"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-field">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="nes-input input"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-field">
          {/* <label>Confirm Password</label> */}
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="nes-input input"
            placeholder="Confirm password"
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="nes-btn is-success btn-primary">
            <a>Register</a>
          </button>
        </div>

        <div className="options">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </form>
    // </div>
  );
}

export default Register;
