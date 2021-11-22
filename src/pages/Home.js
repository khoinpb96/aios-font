import { useContext, useState } from "react";
import IconsList from "../components/IconsList";
import { ThemeContext, LangContext } from "../context";
import "../scss/Home.scss";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LangContext);
  const [searchVal, setSearchVal] = useState("");

  const inputHandler = (e) => {
    setSearchVal(e.target.value);
  };

  const placeholders = {
    EN: "Search Icon...",
    VN: "Tìm icon...",
    TH: "ค้นหาไอคอน...",
    CN: "搜索图标...",
  };

  const placeholder = placeholders[language];

  return (
    <main className={`${theme === "dark" ? "dark" : "light"}`}>
      <div className="container">
        <h1>Aios Font Icons</h1>
        <label htmlFor="search" className="search">
          <input
            type="text"
            id="search"
            placeholder={placeholder}
            value={searchVal}
            onChange={inputHandler}
          />
          <span className="search-btn">
            <i className="ai-magnifying-glass-c" />
          </span>
        </label>
        <IconsList searchVal={searchVal} />
      </div>
    </main>
  );
}
