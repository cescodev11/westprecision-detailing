// Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to WestPrecision Detailing</h1>
        <p>Your premier choice for automotive detailing services.</p>
        <Link to="/book-appointment" className="btn-primary">Book Now</Link>
      </div>
    </section>
  );
};

export default Hero;
