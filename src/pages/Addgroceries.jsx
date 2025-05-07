import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddGrocery = () => {
  const [grocery_name, setGroceryName] = useState("");
  const [grocery_description, setGroceryDescription] = useState("");
  const [grocery_cost, setGroceryCost] = useState("");
  const [grocery_photo, setGroceryPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("grocery_name", grocery_name);
    data.append("grocery_description", grocery_description);
    data.append("grocery_cost", grocery_cost);
    data.append("grocery_photo", grocery_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addgrocery",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setGroceryName("");
      setGroceryDescription("");
      setGroceryCost("");
      setGroceryPhoto("");
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
          <h2 className='text-info'>Add A Grocery</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Grocery Name"
            value={grocery_name}
            onChange={(e) => setGroceryName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Grocery..."
            className="form-control"
            value={grocery_description}
            onChange={(e) => setGroceryDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the grocery"
            className="form-control"
            onChange={(e) => setGroceryCost(e.target.value)}
            value={grocery_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setGroceryPhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Grocery
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGrocery;
