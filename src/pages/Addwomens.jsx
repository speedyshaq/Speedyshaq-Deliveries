import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddWomens = () => {
  const [womens_name, setWomensName] = useState("");
  const [womens_description, setWomensDescription] = useState("");
  const [womens_cost, setWomensCost] = useState("");
  const [womens_photo, setWomensPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("womens_name", womens_name);
    data.append("womens_description", womens_description);
    data.append("womens_cost", womens_cost);
    data.append("womens_photo", womens_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addwomens",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setWomensName("");
      setWomensDescription("");
      setWomensCost("");
      setWomensPhoto("");
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
          <h2 className='text-info'>Add WomenWare</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the WomensWare.."
            value={womens_name}
            onChange={(e) => setWomensName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the WomensWare..."
            className="form-control"
            value={womens_description}
            onChange={(e) => setWomensDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the WomensWare"
            className="form-control"
            onChange={(e) => setWomensCost(e.target.value)}
            value={womens_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setWomensPhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add WomensWare
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWomens;
