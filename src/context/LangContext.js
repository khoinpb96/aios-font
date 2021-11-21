import { createContext, useState } from "react";
const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  const languageChange = (e) => {
    setLanguage(e.target.value);
  };
  const context = { language, languageChange };

  return (
    <LangContext.Provider value={context}>{children}</LangContext.Provider>
  );
};

export { LangContext, LangProvider };
