import React from 'react';
import { NavLink } from 'react-router-dom'

const SinedOutLinked = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Login</NavLink></li>
            <li><NavLink to="/">Sign Up</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink ligthen-1">NN</NavLink></li>
        </ul>
    )
}

export default SinedOutLinked;