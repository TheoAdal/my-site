import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import LogoutButton from "../auth-components/Logout.js";

import "./TopBarNavStyles.css";

export default function Topbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); //user info from Redux

  return (
    <div>
      <nav className="top-nav">
        <div className="center-nav">
          <Link className="nes-text is-primary" to="/">Home</Link>
          <Link className="nes-text is-success" to="/about">About</Link>
          <Link className="nes-text is-warning" to="/contact">Contact</Link>
        </div>
        {!isAuthenticated ? (
          <>
            <Link className="nes-text is-error" to="/login">Login</Link>
            <Link className="nes-text is-error" to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <div className="right-nav">
              <Link to={`/profile/${user?.username}`}>Profile</Link>
              <LogoutButton>Logout</LogoutButton>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
