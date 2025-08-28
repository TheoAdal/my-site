import React from "react";
import "./About.css"; // import styles

import photoprofile from "../../images/profilephoto.jpg"

function About() {
  return (
    <div className="nes-container is-rounded is-dark about-container">
      {/* Left side - text */}
      <div className="about-text">
        <h1 className="nes-text is-success">Hi there, I'm Theo!</h1>
        <p>
          Just another CS-related graduate trying his absolute best. My journey
          in FullStack Development began roughly in 2023 through academic
          projects and has evolved into something I am really proud of.
        </p>
        <p>
          When I am not coding, you will probably find me on some camping site
          or a hopeless indie bar. My friends call me a chameleon when it comes
          to my entertainment.
        </p>
        <p>
          My goal is to broaden my curiosity about new technologies and never,
          ever settle down, always pushing myself to learn, build and explore
          the unknown!
        </p>
      </div>

      {/* Right side - avatar */}
      <div className="about-photo">
        {/* Replace src with your image later */}
        <img
          src={photoprofile}
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
}

export default About;
