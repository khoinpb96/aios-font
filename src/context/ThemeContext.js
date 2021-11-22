import { createContext, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initTheme = localStorage.getItem("theme") || "dark";

  const [theme, setTheme] = useState(initTheme);

  const themeToggle = () => {
    setTheme((prev) => {
      if (prev === "dark") {
        localStorage.setItem("theme", "light");
        return "light";
      } else {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
    });
  };

  const context = { theme, themeToggle };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
