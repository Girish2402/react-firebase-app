import React from 'react';
import { NavLink } from 'react-router-dom'

const SinedInLinked = () => {
    return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create_project">New Project</NavLink></li>
                <li><NavLink to="">Logout</NavLink></li>
                <li><NavLink to="" className="btn btn-floating pink ligthen-1">NN</NavLink></li>
            </ul>
    )
}

export default SinedInLinked;