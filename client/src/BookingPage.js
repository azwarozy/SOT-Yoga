import React, { useState } from "react";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit the form data to the server
    console.log("Form submitted!");
  };

  return (
    <div>
      <h1>Book a Yoga Class</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="emergencyContactNumber">Emergency Contact Number:</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            value={emergencyContactNumber}
            onChange={(e) => setEmergencyContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="class">Select a Class:</label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Hatha Yoga">Hatha Yoga</option>
            <option value="Vinyasa Flow">Vinyasa Flow</option>
            <option value="Ashtanga Yoga">Ashtanga Yoga</option>
            <option value="Kundalini Yoga">Kundalini Yoga</option>
            <option value="Hot Yoga">Hot Yoga</option>
            <option value="Bikram Yoga">Bikram Yoga</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;