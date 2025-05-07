import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddShoe = () => {
  const [shoe_name, setShoeName] = useState("");
  const [shoe_description, setShoeDescription] = useState("");
  const [shoe_cost, setShoeCost] = useState("");
  const [shoe_photo, setShoePhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("shoe_name", shoe_name);
    data.append("shoe_description", shoe_description);
    data.append("shoe_cost", shoe_cost);
    data.append("shoe_photo", shoe_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addshoe",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setShoeName("");
      setShoeDescription("");
      setShoeCost("");
      setShoePhoto("");
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
          <h2 className='text-info'>Add A Shoe</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Shoe Name"
            value={shoe_name}
            onChange={(e) => setShoeName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Shoe..."
            className="form-control"
            value={shoe_description}
            onChange={(e) => setShoeDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the shoe"
            className="form-control"
            onChange={(e) => setShoeCost(e.target.value)}
            value={shoe_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setShoePhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Shoe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShoe;
