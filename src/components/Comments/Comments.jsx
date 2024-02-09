import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Comments.css";
import { deleteComments } from "../../utils";
import { UserContext } from "../Users/singleUser/SingleUser";


export default function ArticleComments(props) {
  const {articleComments, setArticleComments} = props;
  const { article_id } = useParams();
  const [userComments, setUserComments] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);


  useEffect(() => {
    setUserComments(articleComments);
  }, [articleComments]);

  if (loading) return <p>Loading comments...</p>;

  if (articleComments.length === 0) {
    return <p>No comments yet!</p>;
  }

  return (
    <>
      <h1 className="comments-title">Comments</h1>

      <ul className="comment-list">
        {articleComments.map((comments) => {
          return (
            <h2 key={comments.comment_id}>
              <li className="comments-container">
                <div className="comment-info">
                  <p>User: {comments.author}</p>
                  <p>Votes: {comments.votes}</p>
                  <p>Posted: {comments.created_at}</p>   
                </div>
                <p className="comment-text">{comments.body}</p>
                <div className="delete-button-container">
                  <button
                    className="delete-button"
                    onClick={() => comments.author === user.username ? deleteComments(comments.comment_id) : alert("Cannot delete comment")}
                  >
                    Delete comment
                  </button>
                </div>
              </li>
            </h2>
          );
        })}
      </ul>
    </>
  );
}