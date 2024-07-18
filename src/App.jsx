// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HomeSection/Header";
import Hero from "./components/HomeSection/Hero";
import Services from "./components/ServicesSection/Services";
import BookingForm from "./components/BookingSection/BookingForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-appointment" element={<BookingForm />} />
          {/* Add more routes for other sections like About Us, Gallery, Testimonials */}
        </Routes>
        {/* Footer section can be added here */}
      </div>
    </Router>
  );
};

export default App;
