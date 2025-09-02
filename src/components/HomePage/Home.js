import React from "react";
import "./Home.css";

import photoprofile from "../../images/profilephoto.jpg";

function Home() {
  return (
    //<div className="nes-container is-centered with-title">
    <div className="home">
      {/* <p className="title">Title Text</p> */}
      <h2 className="nes-text is-primary">Currently in local deployment</h2>
      {/* <div className="page-wrap">
        <div className="nes-container is-dark is-centered nes-card"> 
          <p>
            Hi there, I am Theo and this is my portfolio website, why don't you
            have a look!
          </p>
        </div>
      </div> */}
      <div className="nes-container is-rounded is-dark welcome-container">
        <div className="welcome-text">
          <h1 className="nes-text is-success">Hi there, I'm Theo!</h1>
          <p>
            Just another CS-related graduate trying his absolute best. My
            journey in FullStack Development began roughly in 2023 through
            academic projects and has evolved into something I am really proud
            of.
          </p>
          <p>
            When I am not coding, you will probably find me on some camping site
            or a hopeless indie bar. My friends call me a chameleon when it
            comes to my entertainment.
          </p>
          <p>
            My goal is to broaden my curiosity about new technologies and never,
            ever settle down, always pushing myself to learn, build and explore
            the unknown!
          </p>
        </div>

        {/* Right side - avatar */}
        <div className="welcome-photo">
          {/* Replace src with your image later */}
          <img src={photoprofile} alt="" className="avatar" />
        </div>
      </div>
      {/* <section style={{ marginTop: "2rem" }}>
        <i className="nes-icon coin is-medium"></i>
        <i className="nes-icon heart is-medium"></i>
        <i className="nes-icon star is-medium"></i>
      </section> */}
      <div className="nes-container is-rounded is-dark project-container ">
          <h2 className="nes-text is-primary project-title">All Projects</h2>
          <div className="project-text">
            <h3 className="nes-text is-error project-name">
              Architecture Firm Website
            </h3>
            <ul className="nes-list is-circle">
              <li>
                <i className=""></i>
                <strong></strong> Developed a website for an architecture firm,
                that showcases the firm's projects, services, and design
                philosophy. Built using ReactJS for the front end, NodeJS &
                ExpressJs for the back end, and AWS S3 for uploading and storing
                project images and files:{" "}
                <a
                  href="https://axdarchitects.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nes-text is-primary"
                >
                  https://axdarchitects.gr/
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Home;
