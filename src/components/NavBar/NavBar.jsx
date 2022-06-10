import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/games">Games</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            </ul>
    </nav>
  )
}

export default NavBar