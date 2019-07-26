import React from 'react';
import {Link} from 'react-router-dom'
import SinedInLinked from './SignedInLinks'
import SinedOutLinked from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    <SinedInLinked />
                    <SinedOutLinked />
                </div>
            </nav>
        </nav>
    )
}

export default Navbar;