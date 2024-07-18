// BookingForm.jsx

import React, { useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState(""); // State for message field

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS setup
    const templateParams = {
      from_name: name,
      reply_to: email,
      booking_date: date,
      booking_time: time,
      booking_service: service,
      message: message, // Include message in template params
    };

    emailjs
      .send(
        "service_wy01qcm", // Replace with your EmailJS service ID
        "template_joq8pmc", // Replace with your EmailJS template ID
        templateParams,
        "4ifDZ1Wwzj9djgXh2" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Booking submitted successfully!"); // Show success message to user
        // Optionally, reset form fields after successful submission
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setService("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to submit booking. Please try again later."); // Show error message to user
      });
  };

  return (
    <section className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label htmlFor="service">Service:</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select a service</option>
          <option value="Premium Exterior Wash">Premium Exterior Wash</option>
          <option value="Interior Detail">Interior Detail</option>
          <option value="Full Detail">Full Detail</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Optional: Any specific requests or additional information"
        />

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
