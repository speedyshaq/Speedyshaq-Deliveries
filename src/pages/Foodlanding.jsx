import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/Foodlanding.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Img1 from '../assets/Foodlanding.jpg'
import Beverages from '../assets/beverages.jpg'
import Grocery from '../assets/grocery.jpg'

function Foodlanding() {
  return (

    
    
    <div className='row gradient-background'>

    {/* Food  */}
      <div className="col-md-6">
        <img src={Img1} alt="" className='img' />
      </div>
      <div className="col-md-6">
        <b><h2 className='heading'>Food</h2></b>
        <p className='right_paragraph'>At SpeedyShaq we pride ourselves on being your go-to solution for fast, reliable, and delicious food delivery. Whether you're craving a juicy burger, crispy fried chicken, savory shawarma, or a fresh, flavorful salad, we bring your favorite meals straight to your doorstep—hot and ready to enjoy. Our team works around the clock to ensure every order is prepared quickly, packed securely, and delivered on time, every time. With a user-friendly ordering system, real-time tracking, and a wide selection of top-rated restaurants, we make mealtime effortless for individuals, families, and busy professionals alike.</p>

        <Link to="/Food">
        <button className='purple-button'>Order Now</button>
        </Link>
        
      </div><br /><hr />

    {/* Grocery */}
      
      <div className="col-md-6">
        <b><h2 className='heading' id='grocery_heading'>Grocery</h2></b>
        <p className='grocery_paragraph'>At SpeedyShaq, we make grocery shopping effortless by delivering fresh, high-quality products straight to your door—saving you time, energy, and the hassle of crowded stores. From farm-fresh fruits and vegetables to pantry staples, dairy, meat, snacks, and household essentials, we’ve got everything you need in one convenient place. Whether you're stocking up for the week, preparing for a last-minute dinner, or just need a few items on the go, our fast and reliable delivery service ensures your groceries arrive on time and in perfect condition. With an easy-to-use ordering platform, secure payments, and friendly customer support, we’re committed to making your daily life easier. Say goodbye to long checkout lines and heavy bags—just shop, relax, and let us handle the rest. Your groceries, your schedule, delivered with care.</p>

        <Link to="/Grocery">
        <button className='purple-button' id='grocery_button'>Get Groceries</button>
        </Link>
      </div>

      <div className="col-md-6">
        <img src={Grocery} alt="" className='img'/>
      </div><br /><hr />

    {/* Beverages */}
      <div className="col-md-6">
        <img src={Beverages} alt="" className='img'/>
      </div>
      <div className="col-md-6">
        <b><h2 className='heading'>Beverages</h2></b>
        <p className='right_paragraph'>At SpeedyShaq, we specialize in delivering a wide variety of beverages right to your doorstep—quickly, conveniently, and always chilled to perfection. Whether you're planning a party, stocking up for the weekend, or simply need a refreshing drink after a long day, we’ve got you covered with everything from soft drinks, juices, and bottled water to energy drinks, specialty coffees, and a full range of alcoholic beverages (where permitted). Our service is designed to save you time and effort, offering a seamless ordering experience, fast delivery, and top-notch customer service every step of the way. With a carefully curated selection from trusted brands and local favorites, you’ll never have to worry about running out of your go-to drink. Sit back, relax, and let us quench your thirst—delivered cold, delivered fast, delivered right.</p>

        {/*  */}
        {/*  */}
        <Link to="/beverages">
        <button className='purple-button'>Beverages</button>
        </Link>
      </div><br /><hr />

    </div>
    
  )
}

export default Foodlanding
