import { useContext } from "react";

import useFetchNewsAPI from "../../api/useFetchNewsAPI";
import Article from "./Article";
import { ThemeContext } from "../../context";
import "./NewsList.scss";

export default function NewsList() {
  const loading = <p>Loading...</p>;
  const articles = useFetchNewsAPI();
  const theme = useContext(ThemeContext);

  return (
    <section className="articles-list">
      {articles
        ? articles.map((article, index) => (
            <Article key={index} data={article} />
          ))
        : loading}
    </section>
  );
}
