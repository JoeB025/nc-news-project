import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import ArticlesById from "./components/Articles/SingleArticles/ArticlesById";
import ArticleComments from "./components/Comments/Comments";
import AllUsers from './components/Users/getAllUsers';

function App() {
  return (
    <>
      <NavBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticlesById />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ArticleComments />}
        />
        <Route path="/users" element={<AllUsers />} />
        {/* <Route path="/articles/topic/cooking" element={<Articles />} /> */}
      </Routes>
    </>
  );
}

export default App;
