import { createContext, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggle = () => {
    setDarkTheme((theme) => !theme);
  };
  const context = { darkTheme, themeToggle };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
