import { useState } from "react";
import IconsList from "../components/IconsList";
import "../scss/Home.scss";

export default function Home() {
  const [searchVal, setSearchVal] = useState("");
  const inputHandler = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <main className="container">
      <h1>Aios Font Icons</h1>
      <label htmlFor="search" className="search">
        <input
          type="text"
          id="search"
          placeholder="Search Icon..."
          value={searchVal}
          onChange={inputHandler}
        />
        <span className="search-btn">
          <i className="ai-magnifying-glass-c" />
        </span>
      </label>
      <IconsList searchVal={searchVal} />
    </main>
  );
}
