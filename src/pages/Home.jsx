import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BackgroundImg from "../assets/pizza.jpeg"
import Fashion from '../assets/fasionbakgrnd.jpg'
import Medbackgrnd from '../assets/medbackgrnd.jpg'
import '../styles/Home.css'

function Home() {
  return (

    <div>
    
    <div className='home'>
      <div className='header' style={{backgroundImage:`url(${BackgroundImg})`}}>
        <div >
        <h1>SpeedyShaq Delivery</h1>
        <p>Fast like Shaq on a snack attack — SpeedyShaq delivers food, meds, and groceries in a slam dunk!</p>
        
        <Link to="/foodlanding">
        <button>Foods</button>
        </Link>
        </div>
      </div>

      
    </div><br />

    <div className="home">
      <div className="header" style={{backgroundImage:`url(${Fashion})`}}>
        <h1>Explore Fashion</h1>
        <p>Explore our wide variety of fashion</p>
        <Link to="/fashionlanding">
        <button>Fashion</button>
        </Link>
      </div>
      </div><br />

      <div className="home">
      <div className="header" style={{backgroundImage:`url(${Medbackgrnd})`}}>
        <h1>Explore Health</h1>
        <p>Explore our wide variety of Health And Nutrition</p>
        <Link to="/medlanding">
        <button>Meds</button>
        </Link>
      </div>
      </div><br />

    </div>
  )
}

export default Home
