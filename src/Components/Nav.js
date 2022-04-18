import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (

    <div style={{padding: "28px",margin: "1px"}}>
      
        <Link to='/'>Home</Link>|
        <Link to='/movies'>Movies</Link>|

    </div>
  )
}

export default Nav
