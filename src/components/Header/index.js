import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext, LangContext, ThemeContext } from "../../context/";
import Clock from "./Clock";
import LangSelector from "./LangSelector";
import ThemeSelector from "./ThemeSelector";
import AuthForm from "./AuthForm";
import "./Header.scss";
import { hellos } from "../../assets/db";

export default function Header() {
  const { user } = useContext(AuthContext);
  const { language } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  const [menuOpened, setMenuOpened] = useState(false);
  const menuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <>
      <header className={menuOpened ? "active" : ""}>
        <nav className="navBar container">
          <i className="fas fa-times close-menu-btn" onClick={menuToggle} />
          <Clock />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
          <span className="features">
            {user.username && (
              <span className="hello">{`${hellos[language]}, ${user.username}`}</span>
            )}
            <ThemeSelector />
            <LangSelector />
            <AuthForm />
          </span>
        </nav>
      </header>
      <i
        className={`fas fa-bars mobile-menu-btn ${
          theme === "dark" ? "dark" : ""
        }`}
        onClick={menuToggle}
      />
    </>
  );
}
