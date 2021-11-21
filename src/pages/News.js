import { useContext } from "react";

import NewsList from "../components/NewsList";
import { ThemeContext } from "../context";
import "../scss/News.scss";

export default function News() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <main className={`${darkTheme ? "dark" : "light"}`}>
      <div className="container">
        <h1>NEWS</h1>
        <NewsList darkTheme />
      </div>
    </main>
  );
}
