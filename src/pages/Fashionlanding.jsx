import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mens from '../assets/mens.jpg'
import Womens from '../assets/womens.jpg'
import Shoe from '../assets/shoe.jpg'
import '../styles/Fashionlanding.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

function Fashionlanding() {
  return (
  <div className='row pink-background'>
  
      {/* Mens  */}
        <div className="col-md-6">
          <img src={Mens} alt="" />
        </div>
        <div className="col-md-6">
          <b><h2 className='heading' >Mens Ware</h2></b>
          <p className='right_paragraph'>At SpeedyShaq, we bring stylish, high-quality men’s wear directly to your doorstep with speed, convenience, and care. Whether you're looking for everyday essentials, sharp business attire, casual weekend outfits, or something special for an occasion, our delivery service makes shopping effortless. We partner with top brands and trusted suppliers to offer a wide selection of clothing, from tailored suits and dress shirts to jeans, jackets, footwear, and accessories—all available at your fingertips. Our fast and reliable delivery ensures you stay on top of your style game without ever stepping foot in a store. With easy online ordering, flexible payment options, and a commitment to customer satisfaction, we make sure you always look your best—no hassle, no delays. Fashion for men, delivered with confidence and class.</p>

        <Link to="/mensware">
        <button className='purple-button'>Men's Ware</button>
        </Link>
          
        </div><br /><hr />
  
      {/* Women */}
        
        <div className="col-md-6">
          <b><h2 className='heading' id='left_heading'>Womens Ware</h2></b>
          <p className='left_paragraph'>At SpeedyShaq, we make shopping for women’s fashion effortless by delivering the latest trends, timeless classics, and everything in between, straight to your door. From chic dresses, stylish tops, and cozy sweaters to tailored pants, elegant outerwear, and accessories that complete every look, we offer a curated selection from top designers and trusted brands. Whether you're preparing for a big event, updating your wardrobe, or just need a new piece to refresh your collection, our fast and reliable delivery service ensures you get what you want, when you want it.</p>
        

        <Link to="/womensware">
        <button className='purple-button' id='left_button'>Women's Ware</button>
        </Link>
        </div>

        <div className="col-md-6">
          <img src={Womens} alt="" className='img '/>

        </div><br /><hr />
  
      {/* Shoes */}
        <div className="col-md-6">
          <img src={Shoe} alt="" className='img'/>
        </div>
        <div className="col-md-6">
          <b><h2 className='heading'>Shoes</h2></b>
          <p className='right_paragraph'>At SpeedyShaq, we take the hassle out of shoe shopping by delivering a wide range of stylish, comfortable, and high-quality footwear directly to your door. Whether you’re searching for the latest sneakers, sleek dress shoes, casual boots, or comfy sandals, we’ve got your feet covered for any occasion. Our extensive selection includes top brands and a variety of sizes to ensure the perfect fit for everyone. With fast and reliable delivery, your new pair of shoes will arrive on time and ready to step into your life. Our easy-to-use platform, secure checkout, and commitment to customer satisfaction make shoe shopping simpler and more convenient than ever. Put your best foot forward—let us bring your next pair of shoes right to you, with speed and style.</p>

        <Link to="/shoes">
        <button className='purple-button' >Shoes</button>
        </Link>

        </div><br /><hr />
  
      </div>
  )
}

export default Fashionlanding
