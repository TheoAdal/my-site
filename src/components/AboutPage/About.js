import React from "react";
import "./About.css"; // import styles

function About() {
  // usePixelPerfectContainers();
  return (
    <div className="about-wrap">
      <div className="nes-container is-rounded is-dark education-container ">
        <h2 className="nes-text is-primary education-title">Education</h2>
        <div className="education-text">
          <h3 className="nes-text is-success diploma-title">
            Computer Engineering & Informatics
          </h3>
          <h3 className="nes-text is-error university-name">
            Cyprus University of Technology
          </h3>
          <ul className="nes-list is-circle">
            <li>
              <i className="nes-logo"></i>
              <strong> PHP,SQL:</strong> Collaborated with a team of five
              students to develop an eCommerce website for the company “TUFIT
              CYPRUS” and a “Clock In” application for the university, deisgned
              to track employee attendance.
            </li>
            <li>
              <i className="nes-logo"></i>
              <strong> Thesis:</strong> Developed an aplication aimed at
              combating loneliness among the elderly by matching with volunteers
              through the platform, offering social interaction and
              companionship. Built using ReactJs for the front-end, NodeJs &
              ExpressJs for the backend and MongoDB for the database management.
              The live site can be accessed at{" "}
              <a
                href="https://graduateproject-8f797.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="nes-text is-primary"
              >
                https://graduateproject-8f797.web.app
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nes-container is-rounded is-dark experience-container">
        <h2 className="nes-text is-primary education-title ">
          Work Experience
        </h2>
        <div className="experience-text">
          <h3 className="nes-text is-success job-title">Lab Assistant</h3>
          <h3 className="nes-text is-error company-name">
            OneLearn Global Services Ltd
          </h3>
          <ul className="nes-list is-circle">
            <li>
              <i className="snes-jp-logo"></i>
              <strong> </strong>
              Responsible for copying data from a server to over 30 company made
              mini PC by the name "Enza" for training purposes.{" "}
            </li>
            <li>
              <i className="snes-jp-logo"></i>
              <strong> </strong>
              Responsible for assemblying hardware on a "Enza" as well as
              installing OS and Microsoft Office apps depending on the client's
              order.
            </li>
          </ul>
        </div>
        <div className="experience-text">
          <h3 className="nes-text is-success job-title">
            Automation & Installation Assistant
          </h3>
          <h3 className="nes-text is-error company-name">
            Piperaris Security Cyprus
          </h3>
          <ul className="nes-list is-circle">
            <li>
              <i className="snes-logo"></i>
              <strong> </strong>
              Participated in KNX training sessions and gained hands-on
              experience with automation tools.
            </li>
            <li>
              <i className="snes-logo"></i>
              <strong> </strong>
              Configured, installed, and tested Electron switches, ensuring
              their proper functionality.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
