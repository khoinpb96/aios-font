import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext, AuthContext } from "../../context/";
import Clock from "./Clock";
import "./Header.scss";
import LangSelector from "./LangSelector";
import ThemeSelector from "./ThemeSelector";
import AuthForm from "./AuthForm";

export default function Header() {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  return (
    <header>
      <nav className="navBar container">
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
          <span className="hello">{`Hello, ${auth.user.username}`}</span>
          <ThemeSelector />
          <LangSelector />
          <AuthForm />
        </span>
      </nav>
    </header>
  );
}
