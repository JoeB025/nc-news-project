import { Link } from 'react-router-dom'
import { getArticles } from '../../../utils';
import { useEffect, useState } from 'react';
import './Articles.css'


export default function Articles() {

  const [articleName, setArticleName] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => { 
      getArticles().then(response => {
        setArticleName(response.data.article);
        console.log(response);
        setLoading(false);
      });
    }, []);



  return (
    <>
    <section>
      <p className='intro-text'>Welcome to Articles Page!</p>
      
      <ul key="uniqueId1" className='article-list'>
        {articleName.map((article) => {
            return (

              <h1 key={article.title} className='article-container'>    
                  <li>

                    <div className='article-content'>
                      <p><span className='article-text'>Article:</span> {article.title}</p>
                      <p><span className='author-text'>Author:</span> {article.author}</p>
                      <p><span className='topic-text'>Topic:</span> {article.topic}</p>
                    </div>

                    <div className='article-image'>
                      <img src={article.article_img_url} className="article-image" alt="article-image" />
                    </div>
                    
                    <div className='comment-likes'>
                      <p><span className='comment-count-text'>Comment Count:</span> {article.number_of_comments}</p>
                      <p><span className='vote-text'>Votes:</span> {article.votes}</p>
                    </div>
                  </li>
              </h1>
          )  

        })
        } 
      </ul>
    </section>
      <div className='home-link'>
        <Link to='/'><span className='home-link-text'>Home</span></Link>
      </div>
    </>
  )
}