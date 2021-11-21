import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}
