import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css'
export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper"> 
                <Link to="/" className="logo"> NoteBook</Link>
                <ul className="nav-right">
                    <li><Navlink to="/favorites">Favorites</Navlink></li>
                </ul>
            </div>
        </nav>
    )
}
