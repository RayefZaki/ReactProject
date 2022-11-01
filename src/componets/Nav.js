import { Link } from "react-router-dom"
import React from 'react'

function Nav() {
  return (
    <nav>
        <div class="nav1">
          <ul>
            <Link to="/RayefStory">Rayef Story</Link>
            <Link to="/login">Login</Link>
         </ul>
     
        </div>
    </nav>
  )
}

export default Nav