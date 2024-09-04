import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "../Select";
import { useLocation, useNavigate } from "react-router-dom";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const locale = i18n.language || 'en';
    if (["en", "fr", "es","de"].includes(locale)) {
      setLanguage(locale);
      i18n.changeLanguage(locale);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    if (location.pathname !== "/") {
      const currentPath = location.pathname.split("/");
      currentPath.splice(1, 1, lng);
      const newPath = currentPath.join("/");
      navigate(newPath, { replace: true });
    }
  };

  const languageOptions = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "fr",
      label: "French",
    },
    {
      value: "es",
      label: "Spanish"
    },
    {
      value: "de",
      label: "German"
    }
  ];

  return (
    <div className="p-2">
      <Select
        options={languageOptions}
        styles={{
          control: {
            borderRadius: "50px",
            padding: "12px 20px",
            border: "1px solid transparent",
            backgroundColor: "rgb(241 245 249)",
            "&:hover": {
              border: "1px solid transparent",
            },
          },
          placeholder: {
            color: "#000",
          },
        }}
        className="!w-60"
        onChange={(option) => changeLanguage(option.value)}
        value={languageOptions.find((i) => i.value === language)}
      />
    </div>
  );
}

export default LanguageSwitcher;
