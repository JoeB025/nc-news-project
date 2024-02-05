import { getArticlesById } from '../../../utils';
import { useEffect, useState } from 'react';
import { useParams } from'react-router-dom';
import './ArticlesById.css'



export default function ArticlesById() {

  const { article_id } = useParams();
  const [articleById, setArticleById] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => { 
      getArticlesById(article_id).then(response => {
        setArticleById(response.data.article);
        console.log(response.data.article);
        setLoading(false);
      });
    }, []);



  return (
    <>

      <h1 className='title'>{articleById.title}</h1>
      <p>Author: {articleById.author}</p>
      <p>Topic: {articleById.topic}</p>
      

      <div className='img-and-text'>
        <p className='body'>{articleById.body}</p>
        <img class='img' src={articleById.article_img_url}></img>
      </div>
      <p>Created: {articleById.created_at}</p>
      <p>Comment Count: {articleById.comment_count}</p>
      <p>Votes: {articleById.votes}</p>
    </>
  )
}