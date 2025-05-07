import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddBeverage = () => {
  const [beverage_name, setBeverageName] = useState("");
  const [beverage_description, setBeverageDescription] = useState("");
  const [beverage_cost, setBeverageCost] = useState("");
  const [beverage_photo, setBeveragePhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("beverage_name", beverage_name);
    data.append("beverage_description", beverage_description);
    data.append("beverage_cost", beverage_cost);
    data.append("beverage_photo", beverage_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addbeverage",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setBeverageName("");
      setBeverageDescription("");
      setBeverageCost("");
      setBeveragePhoto("");
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
          <h2 className='text-info'>Add A Beverage</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Beverage Name"
            value={beverage_name}
            onChange={(e) => setBeverageName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Beverage..."
            className="form-control"
            value={beverage_description}
            onChange={(e) => setBeverageDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the beverage"
            className="form-control"
            onChange={(e) => setBeverageCost(e.target.value)}
            value={beverage_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setBeveragePhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Beverage
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBeverage;
