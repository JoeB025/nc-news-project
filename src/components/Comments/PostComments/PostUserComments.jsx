import { insertComments } from "../../../utils";
import { getArticlesById } from "../../../utils";
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


  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setUserComments(response);
    });
  }, []);


  const addNewComment = (event) => {
  event.preventDefault();
  console.log('hello there, log works up to here')

// need to set the state here. that way i will see it right away and in the background the actual post will be done
// the user will be able to see it right away. 

  insertComments(article_id, body, user.username)
    .then((response) => {
      const newComment = response.data.comment;

      setUserComments((prevComments) => {
        if (Array.isArray(prevComments)) {
          return [newComment, ...prevComments];
        } else {
          return [newComment];
        }
      });
      setBody("");
    })
    .catch((err) => {
      console.log(err);
    });
};


  return (
    <>
      <div className="main-container">
        <div>
          <p></p>
        </div>

        <div className="add-comment-container">
          <p className="add-comment-text">Add new comment</p>
          <div className="form-container">
            <form className="submit-comment-form" type='submit'>
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

