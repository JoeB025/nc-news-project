import { getArticleComments } from "../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Comments.css";
import { deleteComments } from "../../utils";
import { useContext } from "react";
import { UserContext } from "../Users/singleUser/SingleUser";

export default function ArticleComments() {
  const { article_id } = useParams();
  //  // update this state.
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setArticleComments(response.data.comments);
      setLoading(false);
    });
  }, []);

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
            <h2 key={comments.title}>
              <li key={comments.comment_id} className="comments-container">
                <div className="comment-info">
                  <p>User: {comments.author}</p>
                  <p>Votes: {comments.votes}</p>
                  <p>Posted:</p>
                  <p>{comments.created_at}</p>   
                </div>
                <p className="comment-text">{comments.body}</p>
              </li>
              <div className="delete-button-container">
              <button className="delete-button"
                  onClick={() =>
                    comments.author === user.username
                      ? deleteComments(comments.comment_id) 
                      : alert("Cannot delete comment")
                  }
                >
                  Delete comment
                </button>
                </div>
            </h2>
          );
        })}
      </ul>
    </>
  );
}

// put in user avatar images on the right hand side of comments.
// code below is not right but its a starting point.

{
  /* <li>
{comments.author === user.username ? (
  <img src={`${user.avatar_url}`} />) : (<img />)
}
</li> */
}
