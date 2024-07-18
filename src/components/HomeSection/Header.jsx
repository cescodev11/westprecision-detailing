// Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="WestPrecision Detailing" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/book-appointment">Book Appointment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
