import React from "react";
import "./About.css"; // import styles

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-wrap">
      <div className="nes-container is-rounded is-dark education-container ">
        <h2 className="nes-text is-primary education-title">
          {t("education.title")}
        </h2>
        <div className="education-text">
          <h3 className="nes-text is-success diploma-title">
            {t("education.degree")}
          </h3>
          <h3 className="nes-text is-error university-name">
            {t("education.university")}
          </h3>
          <ul className="nes-list is-circle">
            <li>
              <strong>PHP,SQL:</strong> {t("education.bullet1")}
            </li>
            <li>
              <strong>{t("education.bullet2title")}</strong> {t("education.bullet2")}{" "}
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

      {/* EXPERIENCE */}
      <div className="nes-container is-rounded is-dark experience-container">
        <h2 className="nes-text is-primary education-title">
          {t("experience.title")}
        </h2>

        {/* First Job */}
        <div className="experience-text">
          <h3 className="nes-text is-success job-title">
            {t("experience.title")}
          </h3>
          <h3 className="nes-text is-error company-name">
            {t("experience.job1Company")}
          </h3>
          <ul className="nes-list is-circle">
            <li>{t("experience.job1Bullet1")}</li>
            <li>{t("experience.job1Bullet2")}</li>
          </ul>
        </div>

        {/* Second Job */}
        <div className="experience-text">
          <h3 className="nes-text is-success job-title">
            {t("experience.job2Title")}
          </h3>
          <h3 className="nes-text is-error company-name">
            {t("experience.job2Company")}
          </h3>
          <ul className="nes-list is-circle">
            <li>{t("experience.job2Bullet1")}</li>
            <li>{t("experience.job2Bullet2")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
