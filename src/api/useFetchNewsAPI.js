import { useEffect, useState } from "react";

export default function useFetchNewsAPI() {
  const API_KEY = "93f5bd71919b46a384eb4c2bab8d9db6";
  const [newsArticles, setNewsArticles] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setNewsArticles(data.articles);
    };
    fetchNews();
  }, []);

  return newsArticles;
}
