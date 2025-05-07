import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddCosmetic = () => {
  const [cosmetic_name, setCosmeticName] = useState("");
  const [cosmetic_description, setCosmeticDescription] = useState("");
  const [cosmetic_cost, setCosmeticCost] = useState("");
  const [cosmetic_photo, setCosmeticPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("cosmetic_name", cosmetic_name);
    data.append("cosmetic_description", cosmetic_description);
    data.append("cosmetic_cost", cosmetic_cost);
    data.append("cosmetic_photo", cosmetic_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addcosmetic",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setCosmeticName("");
      setCosmeticDescription("");
      setCosmeticCost("");
      setCosmeticPhoto("");
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
          <h2 className='text-info'>Add A Cosmetic</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Cosmetic Name"
            value={cosmetic_name}
            onChange={(e) => setCosmeticName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Cosmetic..."
            className="form-control"
            value={cosmetic_description}
            onChange={(e) => setCosmeticDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the cosmetic"
            className="form-control"
            onChange={(e) => setCosmeticCost(e.target.value)}
            value={cosmetic_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setCosmeticPhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Cosmetic
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCosmetic;
