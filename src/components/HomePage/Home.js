import React from "react";
import "./Home.css";

function Home() {
  return (//<div className="nes-container is-centered with-title" style={{ margin: "2rem" }}>
    <div>
      {/* <p className="title">Title Text</p> */}
      <h1 className="nes-text is-primary">IN HOMEPAGE</h1>
      <div className="page-wrap">
        <div className="nes-container is-dark is-centered nes-card"> 
          <p>
            Hi there, I am Theo and this is my portfolio website, why don't you
            have a look!
          </p>
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
