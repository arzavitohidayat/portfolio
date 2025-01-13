// src/Navbar.js
import React from 'react';
import './navbar.css'; // For custom styling (optional)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Logo</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;