import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <div className="logo">Cocktail DB</div>
                </Link>            
                <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
            </div>

        </nav>
        </>
    )
}


export default Navbar