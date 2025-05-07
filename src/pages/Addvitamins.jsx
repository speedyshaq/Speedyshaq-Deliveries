import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddVitamin = () => {
  const [vitamin_name, setVitaminName] = useState("");
  const [vitamin_description, setVitaminDescription] = useState("");
  const [vitamin_cost, setVitaminCost] = useState("");
  const [vitamin_photo, setVitaminPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("vitamin_name", vitamin_name);
    data.append("vitamin_description", vitamin_description);
    data.append("vitamin_cost", vitamin_cost);
    data.append("vitamin_photo", vitamin_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addvitamin",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setVitaminName("");
      setVitaminDescription("");
      setVitaminCost("");
      setVitaminPhoto("");
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
          <h2 className='text-info'>Add A Vitamin</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Vitamin Name"
            value={vitamin_name}
            onChange={(e) => setVitaminName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Vitamin..."
            className="form-control"
            value={vitamin_description}
            onChange={(e) => setVitaminDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the vitamin"
            className="form-control"
            onChange={(e) => setVitaminCost(e.target.value)}
            value={vitamin_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setVitaminPhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Vitamin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVitamin;
