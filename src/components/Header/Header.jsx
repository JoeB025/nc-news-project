import "./Header.css";
import { UserContext } from "../Users/singleUser/SingleUser";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>

<div className="logged-user-container">

<div className="user-header">
  <p>Logged in: {user.username}</p>
</div>
<img className="user-img" src={user.avatar_url} />
</div>
      <h1 className="title-header">nc-News</h1>
     
    </>
  );
};

export default Header;
