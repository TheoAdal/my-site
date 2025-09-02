import React from "react";
import "./Home.css";

import { useTranslation } from "react-i18next";

import photoprofile from "../../images/profilephoto.jpg";

function Home() {
  const { t } = useTranslation();

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
          <h1 className="nes-text is-success">{t("home.welcome")}</h1>
          <p>{t("home.intro1")}</p>
          <p>{t("home.intro2")}</p>
          <p>{t("home.intro3")}</p>
        </div>
        <div className="welcome-photo">
          <img src={photoprofile} alt="" className="avatar" />
        </div>
      </div>
      {/* <section style={{ marginTop: "2rem" }}>
        <i className="nes-icon coin is-medium"></i>
        <i className="nes-icon heart is-medium"></i>
        <i className="nes-icon star is-medium"></i>
      </section> */}
       <div className="nes-container is-rounded is-dark project-container ">
        <h2 className="nes-text is-primary project-title">
          {t("home.projectsTitle")}
        </h2>
        <div className="project-text">
          <h3 className="nes-text is-error project-name">
            {t("home.project1Title")}
          </h3>
          <ul className="nes-list is-circle">
            <li>
              {t("home.project1Desc")}{" "}
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
