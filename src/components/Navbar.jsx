import React, { useState } from 'react'
// img
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='navbar'>

      <div className='leftside'>
        <p className='trademark'>SpeedyShaq</p>
      </div>

      <div className='center'>
        <Link to="/">Home</Link>
        <Link to="/foodlanding">Food & Beverages</Link>
        <Link to="/fashionlanding">Fashion</Link>
        <Link to="/medlanding">Meds</Link>

        <div 
          className="dropdown" 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="dropbtn">Add Items</button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/addmedicine">Add Meds</Link>
              <Link to="/addfood">Add Food</Link>
              <Link to="/addmens">Add MensWare</Link>
              <Link to="/addwomens">Add WomensWare</Link>
              <Link to="/addshoes">Add Shoes</Link>
              <Link to="/addgroceries">Add Groceries</Link>
              <Link to="/addbeverages">Add Beverages</Link>
              <Link to="/addvitamins">Add Vitamins</Link>
              <Link to="/addcosmetic">Add Cosmetic</Link>
            </div>
          )}
        </div>
      </div>

      <div className='rightside'>
        <button className='links'><Link to="/chat">Chat Speedy</Link></button>
        <button className='links'><Link to="/about">About Us</Link></button>
        <button className='links'><Link to="/signin">Log In</Link></button>
        <button className='links'><Link to="/signup">Sign Up</Link></button>
      </div>

    </div>
  )
}

export default Navbar
