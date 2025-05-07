import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


const Vitamins = () =>{

  // Hooks
  const [vitamins, setVitamins] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //location of the image
  const img_url = "https://ishaqibrahim.pythonanywhere.com/static/images/"
  
  const getvitamins = async()=>{
    setLoading("Please wait as we retrieve our wide variety of products...")

    try{
      const response = await axios.get("https://ishaqibrahim.pythonanywhere.com/api/getvitamins")
      
      setVitamins(response.data)

      setLoading("");
    }
    catch(error){
      setLoading("");
      setError("Sorry an Error Occured");
    }
  
  }

  useEffect(()=>{getvitamins()},[])

  // Filtered based on search
  const [search, setSearch] = useState("");
  
  const filtered_vitamin = vitamins.filter((item) =>
    item.vitamin_name.toLowerCase().includes(search.toLowerCase())||
    item.vitamin_description.toLowerCase().includes(search.toLowerCase()));  


  return (
    <div className="row">

    
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Vitamins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
      </div>

      {/* bind loading and error */}
      {loading}
      {error}
    
      {filtered_vitamin.map((vitamin)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + vitamin.vitamin_photo} className="product_img mt-4" alt="" />

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{vitamin.vitamin_name}</h5>
              <p className='text-muted'>{vitamin.vitamin_description.slice(0, 100)}</p>
              <b className='text-warning'>Ksh{vitamin.vitamin_cost}</b> <br />
              <button className='btn btn-success' onClick={() => navigate("/Mpesapayment", {state : {vitamin}})} >Purchase Now</button>
            </div>
        </div>
        </div>
      ))}
    

    </div>
  )
}

export default Vitamins
