import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <div className="nav__bar">
             <Link to="/" className="nav__home">Home</Link>
           </div>
        </div>
    )
}

export default Navbar
