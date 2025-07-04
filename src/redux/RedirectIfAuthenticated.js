import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    // If authenticated, redirect to dashboard (or any page you want)
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise render children (like the Login page)
  return children;
};

export default RedirectIfAuthenticated;