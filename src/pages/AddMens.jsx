import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddMens = () => {
  const [mens_name, setMensName] = useState("");
  const [mens_description, setMensDescription] = useState("");
  const [mens_cost, setMensCost] = useState("");
  const [mens_photo, setMensPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("mens_name", mens_name);
    data.append("mens_description", mens_description);
    data.append("mens_cost", mens_cost);
    data.append("mens_photo", mens_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addmens",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setMensName("");
      setMensDescription("");
      setMensCost("");
      setMensPhoto("");
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
          <h2 className='text-info'>Add MensWare</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the MensWare..."
            value={mens_name}
            onChange={(e) => setMensName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the MensWare..."
            className="form-control"
            value={mens_description}
            onChange={(e) => setMensDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the MensWare"
            className="form-control"
            onChange={(e) => setMensCost(e.target.value)}
            value={mens_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setMensPhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Mens
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMens;
