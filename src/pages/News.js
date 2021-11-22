import { useContext } from "react";

import NewsList from "../components/NewsList";
import { ThemeContext } from "../context";

export default function News() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "dark" ? "dark" : "light"}`}>
      <div className="container">
        <h1>NEWS</h1>
        <NewsList darkTheme />
      </div>
    </main>
  );
}
