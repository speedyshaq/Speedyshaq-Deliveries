import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Meds.css'

import Med4 from '../assets/med6.jpg'




const Meds = () => {
  // Hooks
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  
  //create navigate hook

  const navigate = useNavigate();

  //location of the image
  const img_url = "https://ishaqibrahim.pythonanywhere.com/static/images/"

  // create get function
  const getmeds = async()=>{
    // update loading hook
    setLoading("Please wait as we retrieve our wide variety of products...")

    try{
      // handle response from pythonanywhere
      const response = await axios.get("https://ishaqibrahim.pythonanywhere.com/api/getmedicine")

      // update product hook with products from api
      setMeds(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")
    }
  }
  // end of get products function

  // calling our get products function
  useEffect(
    ()=> {getmeds()},[]
  )

  // Filtered based on search
  const [search, setSearch] = useState("");
  const filtered_meds = meds.filter((item) =>
    item.medicine_name.toLowerCase().includes(search.toLowerCase())||
    item.medicine_description.toLowerCase().includes(search.toLowerCase()));

  return (

    <div className='row'>

      
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Groceries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {search} */}
      </div>

      {/* bind loading and error */}
      {loading}
      {error}
    
    {filtered_meds.map((med)=>(
      <div className="col-md-3 justify-content-center mb-4">
      {/* below div will carry the card that contains a single product  */}
      <div className="card shadow">
      <img src={img_url + med.medicine_photo} alt='#'  className="product_img mt-4" />

      <div className="card-body">
        <h4 className="mt-2">{med.medicine_name}</h4>

        <p className="text-muted">{med.medicine_description.slice(0, 100)}</p>

        <p className="text-warning">Ksh{med.medicine_cost}</p>

        <button className="btn btn-success" onClick={() => navigate("/mpesameds", {state : {med}})}>
        Purchase Now</button>
      </div>
      </div>
    </div>
    ))}
    

    </div>
  );
};

export default Meds
