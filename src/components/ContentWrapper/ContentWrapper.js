import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";


function ContentWrapper() {
  return (
    <div className="content-routes">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default ContentWrapper;
