import React from "react";
import { Link } from "react-router-dom";

import "./TopBarNavStyles.css"


export default function Topbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
