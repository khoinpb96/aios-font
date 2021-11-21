import NewsList from "../components/NewsList";
import "../scss/News.scss";

export default function News() {
  return (
    <main className="container">
      <h1>NEWS</h1>
      <NewsList />
    </main>
  );
}
