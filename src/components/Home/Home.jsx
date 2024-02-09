import './Home.css'
import { useContext } from 'react';
import { UserContext } from '../Users/singleUser/SingleUser';


const Home = () => { 


  const { user } = useContext(UserContext)

  return (
    <>
  <h1 className='welcome-text'>Welcome to the <i className="fa-solid fa-house"></i> Page</h1>
  <p className='delete-text'> Go to user in the top bar and choose a user. The default one won't let you post a comment.</p><p className='user-name'>Hello {user.name}</p>
  <p className='user-msg'>You are logged in as: {user.username}</p>

  <p className='intro-text'>&#9730; Hope you like my frontend project... &#9728; &#9760;</p>
  <p className='logo'>&#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;</p>

 
  </>
  )
}


export default Home;

