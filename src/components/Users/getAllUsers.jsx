import { getUsers } from '../../utils'
import { useEffect, useState } from 'react'
import './getAllUsers.css'
import { UserContext } from './singleUser/SingleUser';
import { useContext } from'react';

export default function AllUsers() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);



useEffect(() => {
  getUsers().then((users) => {
    setUsers(users)
    setLoading(false)
  })
}, [])

if (loading) return <p className="loading">Loading users...</p>


return (
  <>
  
   <h1 className='heading'>Users</h1>

   <section>
    <ul className='all-users'>
      {users.map((user) => {
        return (
          <li key={user.username} className='single-user' onClick={() => {{setUser(user)}; alert=(`Signed in as ${user.username}`)}}>
              <div className='user-text'>
              <p>{user.name}</p>
              <p>Username: {user.username}</p>
              </div>
              <img 
              src={user.avatar_url}
              alt={user.name}
              className='user-avatar-img'
              />
          </li>
        )
      })}
    </ul>
 
      
   </section>

      
  </>
 
)


}