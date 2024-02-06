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

  return (
    <>
      <ul key={articleComments} className="comment-list">
        {articleComments.map((comments) => {
          return (
            <h1 key={comments.title}>
              <li key={articleComments.comment_id}>
                <p className="comment-list">
                  {comments.body}
                </p>
              </li>
            </h1>
          );
        })}
      </ul>
    </>
  );
}
