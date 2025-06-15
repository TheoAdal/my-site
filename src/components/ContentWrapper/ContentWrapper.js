import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Login from "../Login/Login.js";

import "./ContentWrapper.css"

function ContentWrapper() {
  return (
    <div className="content-routes">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default ContentWrapper;
