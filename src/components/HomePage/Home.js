import React from "react";
import "./Home.css";

import photoprofile from "../../images/profilephoto.jpg"

function Home() {
  return (//<div className="nes-container is-centered with-title" style={{ margin: "2rem" }}>
    <div className="home">
      {/* <p className="title">Title Text</p> */}
      <h2 className="nes-text is-primary">Currently in local deployment</h2>
      <div className="page-wrap">
        <div className="nes-container is-dark is-centered nes-card"> 
          <p>
            Hi there, I am Theo and this is my portfolio website, why don't you
            have a look!
          </p>
        </div>
      </div>
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
      <section style={{ marginTop: "2rem" }}>
        <i className="nes-icon coin is-medium"></i>
        <i className="nes-icon heart is-medium"></i>
        <i className="nes-icon star is-medium"></i>
      </section>
    </div>
  );
}

export default Home;
