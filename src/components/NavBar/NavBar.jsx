import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className="top-bar">
      <div className="nav-left">
        <Link to="/">Home</Link>
      </div>


      <div className ="nav-centre">


        <div className ='dropdown'>
          <button className="dropdown-button">
            <i className="fa fa-caret-down">Articles</i>
          </button>
          <div className='dropdown-content'>
          <Link to="articles">All Articles</Link>
            <Link to="Random Article">Random Article</Link>
          </div>
        </div>

        <div className ='dropdown'>
          <button className="dropdown-button">
            <i className="fa fa-caret-down">User</i>
          </button>
          <div className='dropdown-content'>
          <Link to="SearchUser">Search</Link>
            <Link to="User1">User1</Link>
            <Link to="User2">User2</Link>
            <Link to="User3">User3</Link>
            <Link to="User4">User4</Link>
          </div>
        </div>

        <div className ='dropdown'>
          <button className="dropdown-button">
            <i className="fa fa-caret-down">User All Stars &#9734;</i>
          </button>
          <div className='dropdown-content'>
            <Link to="Name1">Name1</Link>
            <Link to="Name2">Name1</Link>
            <Link to="Name3">Name3</Link>
            <Link to="Name4">Name4</Link>
          </div>
        </div>


        <div className ='dropdown'>
          <button className="dropdown-button">
            <i className="fa fa-caret-down">Topic</i>
          </button>
          <div className='dropdown-content'>
            <Link to="football">Football</Link>
            <Link to="coding">Coding</Link>
            <Link to="cooking">Cooking</Link>
            <Link to="music">Music &#9835; &#9836;</Link>
          </div>
        </div>




      </div>

      <div className="nav-right">
        <Link to='#' className="contact-us-link">Contact us</Link>
        <Link to='#' className="login-link">Login</Link>
        <Link to='#' className="sign-up-link">Sign-up</Link>
      </div>
    </nav>


</>
  );
};

export default NavBar;
