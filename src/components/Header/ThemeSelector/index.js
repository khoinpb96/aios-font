import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./ThemeSelector.scss";

export default function ThemeSelector() {
  const context = useContext(ThemeContext);
  const themeToggle = context.themeToggle;

  return (
    <label className="theme">
      <input
        type="checkbox"
        defaultChecked={context.darkTheme}
        onChange={themeToggle}
      />
      {context.darkTheme ? (
        <i className="fas fa-moon" />
      ) : (
        <i className="fas fa-sun" />
      )}
      <span className="checkmark" />
    </label>
  );
}
