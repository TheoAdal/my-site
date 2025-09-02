import React from "react";

import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h1>{t("error.title")}</h1> 
      <p>{t("error.text")}</p>
    </div>
  );
};

export default NotFound;