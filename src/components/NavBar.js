import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
