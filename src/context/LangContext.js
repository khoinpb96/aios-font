import { createContext, useState } from "react";
const LangContext = createContext();

const LangProvider = ({ children }) => {
  const initLang = localStorage.getItem("lang") || "EN";
  const [language, setLanguage] = useState(initLang);

  const languageChange = (e) => {
    setLanguage(e);
    localStorage.setItem("lang", e);
  };

  const context = { language, languageChange };

  return (
    <LangContext.Provider value={context}>{children}</LangContext.Provider>
  );
};

export { LangContext, LangProvider };
