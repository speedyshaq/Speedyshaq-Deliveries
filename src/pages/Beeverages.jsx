import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


const Beeverages = () =>{

  // Hooks
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //location of the image
  const img_url = "https://ishaqibrahim.pythonanywhere.com/static/images/"
  
  const getbeverage = async()=>{
    setLoading("Please wait as we retrieve our wide variety of products...")

    try{
      const response = await axios.get("https://ishaqibrahim.pythonanywhere.com/api/getbeverage")
      
      setBeverages(response.data)

      setLoading("");
    }
    catch(error){
      setLoading("");
      setError("Sorry an Error Occured");
    }
  
  }

  useEffect(()=>{getbeverage()},[])

  // Filtered based on search
  const [search, setSearch] = useState("");
  
  const filtered_beverage = beverages.filter((item) =>
    item.beverage_name.toLowerCase().includes(search.toLowerCase())||
    item.beverage_description.toLowerCase().includes(search.toLowerCase()));  


  return (
    <div className="row">

    
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Beverage..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
      </div>

      {/* bind loading and error */}
      {loading}
      {error}
    
      {filtered_beverage.map((beverage)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + beverage.beverage_photo} className="product_img mt-4" alt="" />

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{beverage.beverage_name}</h5>
              <p className='text-muted'>{beverage.beverage_description.slice(0, 100)}</p>
              <b className='text-warning'>Ksh{beverage.beverage_cost}</b> <br />
              <button className='btn btn-success' onClick={() => navigate("/mpesabeverage", {state : {beverage}})} >Purchase Now</button>
            </div>
        </div>
        </div>
      ))}
    

    </div>
  )
}

export default Beeverages
