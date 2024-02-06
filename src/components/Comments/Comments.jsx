import { Link } from "react-router-dom";
import { getArticleComments } from "../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Comments.css";

export default function ArticleComments() {
  const { article_id } = useParams();
  const [articleComments, setArticleComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setArticleComments(response.data.comments);
      console.log(response.data.comments);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading comments...</p>;

  return (
    <>
      <h1 className="comments-title">Comments</h1>

      <ul key={articleComments} className="comment-list">
        {articleComments.map((comments) => {
          return (
            <h2 key={comments.title}>
              <li
                key={articleComments.comment_id}
                className="comments-container"
              >
                <div className="comment-info">
                  <p>User: {comments.author}</p>
                  <p>Votes: {comments.votes}</p>
                  <p>Posted:</p>
                  <p>{comments.created_at}</p>
                </div>
                <p className="comment-text">{comments.body}</p>
              </li>
            </h2>
          );
        })}
      </ul>
    </>
  );
}
