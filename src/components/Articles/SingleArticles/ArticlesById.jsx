import { getArticlesById } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticlesById.css";
import ArticleComments from "../../Comments/Comments";
import PostUserComments from "../../Comments/PostComments/PostUserComments";

export default function ArticlesById() {
  const { article_id } = useParams();
  const [articleById, setArticleById] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setArticleById(response.data.article);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <p className="loading">Article {article_id.title} loading...</p>;


  return (
    <>
      <h1 className="title">{articleById.title}</h1>

      <div className="body-container">
        <div className="body">
          <p>{articleById.body}</p>
          <p>Author: {articleById.author}</p>
          <p className="comments-votes">
            <span>&#9998; &#9998; Comments: {articleById.comment_count}</span>
            Votes: {articleById.votes}
            <button className="like-button">&#10084;</button>
            
          </p>
        </div>

        <img className="img" src={articleById.article_img_url}></img>
      </div>

      <PostUserComments />
      <ArticleComments />
      
      <div className="created-container">
        <p>Created: {articleById.created_at}</p>
      </div>
    </>
  );
}
