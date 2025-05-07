import React from 'react';
import '../styles/Contact.css'

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We're here to assist you with any queries related to food delivery, fashion, and medicine.</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select id="category" name="category" required>
            <option value="food">Food Delivery</option>
            <option value="fashion">Fashion</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="contact-info">
        <p>Or reach us via:</p>
        <ul>
          <li><strong>Phone:</strong> +1-800-123-456</li>
          <li><strong>Email:</strong> support@website.com</li>
          <li><strong>Location:</strong> 1234 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
