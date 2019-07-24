import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div className="container">
                <div className="nav-wrapper grey">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">home</Link></li>
                        <li><Link to=""></Link></li>
                        <li><Link to=""></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;