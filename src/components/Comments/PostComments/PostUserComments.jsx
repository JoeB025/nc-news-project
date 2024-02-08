import { insertComments, getArticlesById } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Users/singleUser/SingleUser";
import { useContext } from "react";
import "./PostUserComments.css";

export default function PostUserComments() {
  const [userComments, setUserComments] = useState([]);
  const [body, setBody] = useState("");
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  const addNewComment = (event) => {
    event.preventDefault();
    insertComments(article_id, body, user.username)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setUserComments(response);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <div>
          <p></p>
        </div>

        <div className="add-comment-container">
          <p class="add-comment-text">Add new comment</p>
          <div className="form-container">
            <form className="submit-comment-form" onSubmit={addNewComment}>
              <label htmlFor="body">
                <input
                  type="text"
                  id="body"
                  value={body}
                  placeholder="Enter comment &#9998;"
                  onChange={(event) => {
                    setBody(event.target.value);
                  }}
                ></input>
              </label>
            </form>
          </div>
          <div className="button-container">
            <button className="submit-comment-button" onClick={addNewComment}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
