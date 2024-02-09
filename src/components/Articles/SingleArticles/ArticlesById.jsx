import { getArticlesById, getArticleComments } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticlesById.css";
import ArticleComments from "../../Comments/Comments";
import PostUserComments from "../../Comments/PostComments/PostUserComments";

export default function ArticlesById() {
  const { article_id } = useParams();
  const [articleComments, setArticleComments] = useState([]);
  const [articleById, setArticleById] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setArticleById(response.data.article);
      setLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setArticleComments(response.data.comments);
    });
  }, [article_id]);



  if (loading)
    return <p className="loading">Article {article_id} loading...</p>;

  return (
    <>
      <h1 className="title">{articleById.title}</h1>

      <div className="body-container">
        <div className="body">
          <p>{articleById.body}</p>
          <p>Author: {articleById.author}</p>
          <p className="comments-votes">
            <span>&#9998; Comments: {articleById.comment_count}</span>
            Votes: {articleById.votes}
            <button className="like-button">&#10084;</button>
          </p>
        </div>

        <img className="img" src={articleById.article_img_url} alt="Article" />
      </div>

      <PostUserComments articleComments={articleComments} setArticleComments={setArticleComments} />
      <ArticleComments articleComments={articleComments} setArticleComments={setArticleComments}/>

      <div className="created-container">
        <p>Created: {articleById.created_at}</p>
      </div>
    </>
  );
}


