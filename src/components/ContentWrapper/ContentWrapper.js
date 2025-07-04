import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/AboutWrapperComponent.js";
import Contact from "../Contact/Contact.js";
import Login from "../Login/LoginWrapperComponent.js";
import Dashboard from "../../auth-components/Dashboard/Dashboard.js";

import RedirectIfAuthenticated from "../../redux/RedirectIfAuthenticated";
import PrivateRoute from "../../redux/PrivateRoute.js";

import "./ContentWrapper.css";

function ContentWrapper() {
  return (
    <div className="content-routes">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route 
          exact path="/login" 
          element={<RedirectIfAuthenticated> <Login/> </RedirectIfAuthenticated>}/>
        
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={<PrivateRoute> <Dashboard /></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default ContentWrapper;
