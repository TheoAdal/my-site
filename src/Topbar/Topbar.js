import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import LogoutButton from "../auth-components/Logout.js";

import "./TopBarNavStyles.css";

import { useTranslation } from "react-i18next";

export default function Topbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); //user info from Redux

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language;
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "gr" : "en";
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", newLanguage);
    navigate({ search: searchParams.toString() });
  };

  return (
      <nav className="top-nav">
        <div className="center-nav">
          <Link className="nes-text is-primary" to="/">{t("topbar.home")}</Link>
          <Link className="nes-text is-success" to="/about">{t("topbar.about")}</Link>
          <Link className="nes-text is-warning" to="/contact">{t("topbar.contact")}</Link>
        </div>
        {!isAuthenticated ? (
          <>
            <Link className="nes-text is-error" to="/login">{t("topbar.login")}</Link>
            <Link className="nes-text is-error" to="/register">{t("topbar.register")}</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">{t("topbar.dashboard")}</Link>
            <div className="right-nav">
              <Link to={`/profile/${user?.username}`}>{t("topbar.profile")}</Link>
              <LogoutButton>{t("topbar.logout")}</LogoutButton>
            </div>
          </>
        )}
        <button
            onClick={toggleLanguage}
            color="gray"
            className="nes-btn is-error lang-btn"
          >
            {currentLanguage === "en" ? "GR" : "EN"}
          </button>
      </nav>
  );
}
