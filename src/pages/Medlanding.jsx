import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pharmacy from '../assets/pharmacy.jpg'
import Vitamin from '../assets/vitamins.jpg'
import Cosmetic from '../assets/cosmetics.jpg'
import ImageCarousel from "../components/Medcarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


function Medlanding() {
  return (
    <div className='row'>

      <ImageCarousel/><br /><hr />
      <div className='col-md-4 text-center'>
      <h4 className='font-weight-bold'><u>Pharmacy</u></h4>
        <img src={Pharmacy} alt="" className='img'/>
        <Link to="/Meds">
        <button className='purple-button'>Pharmacy</button>
        </Link>
      </div>

      <div className='col-md-4 text-center'>
      <h4 className='font-weight-bold'><u>Beauty and Cosmetics</u></h4>
        <img src={Cosmetic} alt="" className='img'/>
        <Link to="/cosmetics">
        <button className='purple-button' >Cosmetics</button>
        </Link>
      </div>

      <div className='col-md-4 text-center'>
      <h4 className='font-weight-bold'><u>Vitamins</u></h4>
        <img src={Vitamin} alt="" className='img'/>
        <Link to="/vitamins">
        <button  className='purple-button'>Vitamins</button>
        </Link>
      </div>

    </div>
  )
}

export default Medlanding
