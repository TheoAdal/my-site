import React from "react";
import "./FooterStyles.css"

function Footer() {
  return (
    <div className="footer-content">
      <div className="company-info">
        <div className="name-address flex flex-col items-start">
          <p>DevProfile</p>
          <p>Theodoros-Marios Adalakis</p>
        </div>
      </div>
      <div className="contact-info flex justify-end row">
        <div className="flex items-center justify-end">
          <p className="pl-2">+30 6940680087</p>
        </div>
        <div className="flex items-center justify-end">
          <p className="pl-2">theoadal@gmail.gr</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;