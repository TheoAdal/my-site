import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../HomePage/Home.js";
import About from "../AboutPage/About.js";
import Contact from "../ContactPage/Contact.js";
import Login from "../LoginPage/Login.js";
import Register from "../RegisterPage/Register.js";

import UserVerification from "../VerificationPage/UserVerification.js"
import ForgotPassword from "../PasswordResetPage/ForgotPassword.js"
import ResetPassword from "../PasswordResetPage/ResetPassword.js"

//Protected Routes
import Dashboard from "../../auth-components/Dashboard/Dashboard.js";

//Auth Logic
import RedirectIfAuthenticated from "../../Redux/RedirectIfAuthenticated";
import PrivateRoute from "../../Redux/PrivateRoute.js";

import "./ContentWrapper.css";

function ContentWrapper() {
  return (
    <div className="content-routes">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<RedirectIfAuthenticated> <Login/> </RedirectIfAuthenticated>}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/verify/:token" element={<UserVerification/>}/>
        <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
        <Route exact path="/reset-password/:token" element={<ResetPassword/>}/>
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default ContentWrapper;
