import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    /* When you are using the React Router its better to use link
    instead of "a" tag to prevent the refresh and the request server */
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">NavBar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeclassname="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink exact activeclassname="active" className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink exact activeclassname="active" className="nav-item nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
