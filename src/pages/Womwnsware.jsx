import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import womenswardrobe from '../assets/womenswardrobe.jpg'
import '../styles/Womensware.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";



const Womwnsware = () =>{


  // Hooks
  const [womens, setWomens] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //location of the image
  const img_url = "https://ishaqibrahim.pythonanywhere.com/static/images/"
  
  const getwomens = async()=>{
    setLoading("Please wait as we retrieve our wide variety of products...")

    try{
      const response = await axios.get("https://ishaqibrahim.pythonanywhere.com/api/getwomens")
      
      setWomens(response.data)

      setLoading("");
    }
    catch(error){
      setLoading("");
      setError("Sorry an Error Occured");
    }
  
  }

  useEffect(()=>{getwomens()},[])

  // Filtered based on search
  const [search, setSearch] = useState("");
  
  const filtered_womens = womens.filter((item) =>
    item.womens_name.toLowerCase().includes(search.toLowerCase())||
    item.womens_description.toLowerCase().includes(search.toLowerCase()));


  return (

    <div>
      <div className='food-img' >
        <img src={womenswardrobe} alt="" className='landing-img'/>
      </div>


    <div className="row">

    
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Womens Ware..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
      </div>

      {/* bind loading and error */}
      {loading}
      {error}
    
      {filtered_womens.map((womens)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + womens.womens_photo} className="product_img mt-4" alt="" />

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{womens.womens_name}</h5>
              <p className='text-muted'>{womens.womens_description.slice(0, 100)}</p>
              <b className='text-warning'>Ksh{womens.womens_cost}</b> <br />
              <button className='btn btn-success' onClick={() => navigate("/mpesawomens", {state : {womens}})} >Purchase Now</button>
            </div>
        </div>
        </div>
      ))}
    

    </div>
    </div>
  )
}

export default Womwnsware
