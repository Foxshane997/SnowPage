import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <nav className={`navbar ${isCollapsed ? "collapsed" : ""}`} ref={navbarRef}>
      <button className="toggle-button" onClick={toggleNavbar}>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>
      {!isCollapsed && (
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
