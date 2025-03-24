import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    diners: '',
    name: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" onChange={handleChange} required />
      </label><br />
      <label>
        Time:
        <input type="time" name="time" onChange={handleChange} required />
      </label><br />
      <label>
        Number of Diners:
        <input type="number" name="diners" onChange={handleChange} min="1" required />
      </label><br />
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} required />
      </label><br />
      <label>
        Contact:
        <input type="text" name="contact" onChange={handleChange} required />
      </label><br />
      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;