import React from 'react';
import { NavLink } from 'react-router-dom'

const SinedOutLinked = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/sign_in">Login</NavLink></li>
            <li><NavLink to="/sign_up">Sign Up</NavLink></li>
        </ul>
    )
}

export default SinedOutLinked;