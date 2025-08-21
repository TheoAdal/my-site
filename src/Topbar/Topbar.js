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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to={`/profile/${user?.username}`}>Profile</Link>
          <LogoutButton>Logout</LogoutButton>
          </>
        )}
      </nav>
    </div>
  );
}