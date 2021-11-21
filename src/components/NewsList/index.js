import useFetchNewsAPI from "../../api/useFetchNewsAPI";
import Article from "./Article";
import "./NewsList.scss";

export default function NewsList() {
  const loading = <p>Loading...</p>;
  const articles = useFetchNewsAPI();

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
