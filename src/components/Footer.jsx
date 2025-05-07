import '../styles/Footer.css'
import axios from 'axios';
import { useState } from 'react';
import Ig from '../assets/ig.jpeg'
import Fb from '../assets/fb.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Footer = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState("");
  const [messageState, setMessageState] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) =>{
    e.preventDefault();
    setLoading("Please wait ... ");


    const data = new FormData();
    data.append("email", email);
    data.append("message", message);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addgrocery",
        data
      );
      setLoading("");
      setMessageState(response.data.Message);

      setEmail("");
      setMessage("");

    } catch (error) {
      setError("Failed to add product. Please try again.");
    }
  }



  return (
    <div className="footer">
      <section>
        <div className="footer-content">
          <div className="paragraphs">
            <h5 className="about">About Us</h5>
            <p className='par'>
              At SpeedyShaq, we provide fast, reliable delivery for food, groceries, and medicine. We understand the importance of getting essentials to your doorstep quickly, safely, and with care.
            </p>
            
          </div>

          <form onSubmit={submit}>
          <div className="contact_us">
            <h5 className="reach_out">Reach Us Out</h5>
            <input 
            className="email" 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            />

            <textarea 
            className="txtarea" 
            rows="3" 
            placeholder="Leave a comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>

            <button type='submit' className=' purple-button w-100'>Send</button><br />

            {loading}
            {messageState}
            {error}
          </div>
          </form>

          <div className="socials">
            <h4 className="contact">Connect With Us</h4>
            <a href="https://facebook.com">
              <img src={Fb} alt="Facebook" className="socialspictures" />
            </a>
            <a href="https://instagram.com">
              <img src={Ig} alt="Instagram" className="socialspictures" />
            </a>
            
          </div>
        </div>
        <footer className="developer">
          <h5>Developed by Ishaq Ibrahim &copy; 2025. All rights reserved</h5>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
