import axios from 'axios';
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


const Addfoods = () => {
  const [food_name, setFoodName] = useState("");
  const [food_description, setFoodDescription] = useState("");
  const [food_cost, setFoodCost] = useState("");
  const [food_photo, setFoodPhoto] = useState("");

     // Hooks for information messages
     const [loading, setLoading] = useState("");
     const [message, setMessage] = useState("");
     const [error, setError] = useState("");
   
     //Submit Function
     const submit = async (e) => {
       //Prevent default actions
       e.preventDefault();
       //update loading hook to show progress
       setLoading("Pleaser wait ... ");
   
       //add all updated hooks to data variable
       const data = new FormData();
       data.append("food_name", food_name);
       data.append("food_description", food_description);
       data.append("food_cost", food_cost);
       data.append("food_photo", food_photo);
   
       //Post data to Backend API
       try {
         const response = await axios.post(
           "https://ishaqibrahim.pythonanywhere.com/api/addfood",
           data
         );
         //Set loding message to empty, after a successful POST to API
         setLoading("")
         //Update message hook to successfully Added to notify the user.
        //  setMessage("Product Added successfully!");
        setMessage(response.data.Message)
       //   setMessage(response.data.success);
   
         // reset the input fields 
         setFoodName("");
         setFoodDescription("");
         setFoodCost("");
         setFoodPhoto("");
   
         //Catch Any server error, i.e internet issues , server errors
       } catch (error) {
         setError("Failed to add product. Please try again.");
       }
     };


  return (
    <div className="row justify-content-center mt-2 y">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          {loading}
          {message}
          {error}
          <h2 className='text-info'>Add A Food</h2>
          <input type="text" className="form-control" placeholder="Enter the Food Name" 
          value={food_name} onChange={(e) => setFoodName(e.target.value)} />
          <br />
          {/* {product_name} */}

          <textarea placeholder="Enter some Description of the Food..." className="form-control" value={food_description}
          onChange={(e) => setFoodDescription(e.target.value)}></textarea> <br />
          {/* {product_description} */}
          <input type="number" placeholder="Enter the price of the food" className="form-control"
          onChange={(e) => setFoodCost(e.target.value)} value={food_cost} />
          <br />
          {/* {product_cost} */}

          <input type="file" className="form-control"
          accept='image/*'
          onChange={(e) => setFoodPhoto(e.target.files[0])}
          />
          <br />

          
          <button type="submit" className="btn btn-primary w-100">Add Food</button>
        </form>
      </div>

      
    </div>
  )
}

export default Addfoods