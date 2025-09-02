import React from "react";

// import { useTranslation } from "react-i18next";

const NotFound = () => {
  // const { t } = useTranslation();

  return (
    <div className="not-found">
      {/* <h1>{t("error.title")}</h1> 
      <p>{t("error.text")}</p> */}
      <h1>"Oops! That page can’t be found."</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFound;