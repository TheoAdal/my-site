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
import Profile from "../../auth-components/Profile/Profile.js";

//Auth Logic
import RedirectIfAuthenticated from "../../Redux/RedirectIfAuthenticated";
import PrivateRoute from "../../Redux/PrivateRoute.js";

import "./ContentWrapper.css";

function ContentWrapper() {
  return (
    <div className="content-routes">
      <Routes>
        {/* Public routes */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact/>}/>
        {/* Public routes but cannot be accessed by authenticated users */}
        <Route exact path="/login" element={<RedirectIfAuthenticated> <Login/> </RedirectIfAuthenticated>}/>
        <Route exact path="/register" element={<RedirectIfAuthenticated> <Register /> </RedirectIfAuthenticated>}/>
        <Route exact path="/verify/:token" element={<RedirectIfAuthenticated> <UserVerification /> </RedirectIfAuthenticated>}/>
        <Route exact path="/forgot-password" element={<RedirectIfAuthenticated> <ForgotPassword/> </RedirectIfAuthenticated>}/>
        <Route exact path="/reset-password/:token" element={<RedirectIfAuthenticated> <ResetPassword/> </RedirectIfAuthenticated>}/>
        {/* Protected routes */}
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
        <Route path="/profile/:username" element={<PrivateRoute> <Profile/> </PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default ContentWrapper;
