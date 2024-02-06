import { Link } from 'react-router-dom'
import { getArticles } from '../../utils';
import { useEffect, useState } from 'react';
import './Articles.css'



export default function Articles() {

  const [articleName, setArticleName] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => { 
      getArticles().then(response => {
        setArticleName(response.data.article);
        // console.log(response);
        setLoading(false);
      });
    }, []);

if (loading) return <p className='loading'>Articles loading...</p>

  return (
    <>
    <section>
      <p className='intro-text'>Welcome to the Articles Page!</p>
      
      <ul key="uniqueId1" className='article-list'>
        {articleName.map((article) => {
            return (

              <h1 key={article.title} className='article-container'>    
                  
                  <li>
                    <h2 className='article-header'>{article.title}</h2>
                    <div className='article-content'>
                      <p><span className='author-text'>Author:</span> {article.author}</p>
                      <p><span className='topic-text'>Topic:</span> {article.topic}</p>
                    </div>

                    <div className='article-image-container'>
                      <img 
                        src={article.article_img_url} 
                        className="article-image" 
                        alt= {article.title} />
                    </div>
                    
                    <div className='comment-likes'>
                      <p><span className='comment-count-text'>Comment Count:</span> {article.number_of_comments}</p>
                      <p><span className='vote-text'>Votes:</span> {article.votes}</p>
                    </div>
                    <div className='article-link-container'>
                    <Link to={`/articles/${article.article_id}`} className='article-link'>Link to article page</Link>
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