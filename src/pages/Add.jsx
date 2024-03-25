import React, { useState } from 'react';
import '../styles/add.css';
function PaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    // You can replace this with your actual form submission logic (e.g., sending data to a server)
  };

  return (
    <div className="center">

    
    <form onSubmit={handleSubmit}>
      <h2>Payment Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel" // Use "tel" for phone number input
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Payment</button>
    </form>
    </div>
  );
}

export default PaymentForm;