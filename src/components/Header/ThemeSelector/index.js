import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./ThemeSelector.scss";

export default function ThemeSelector() {
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <label className="theme">
      <input type="checkbox" defaultChecked={theme} onChange={themeToggle} />
      {theme === "dark" ? (
        <i className="fas fa-moon" />
      ) : (
        <i className="fas fa-sun" />
      )}
      <span className="checkmark" />
    </label>
  );
}
