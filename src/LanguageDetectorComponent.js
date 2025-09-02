import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageDetectorComponent = ({ children }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");

    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    } else if (!lang) {
      // If no lang in URL, default to current i18n language and add it to the URL
      navigate(`?lang=${i18n.language}`, { replace: true });
    }
  }, [location, i18n, navigate]);

  return children;
};

export default LanguageDetectorComponent;