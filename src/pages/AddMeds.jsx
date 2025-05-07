import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const AddMedicines = () => {
  const [medicine_name, setMedicineName] = useState("");
  const [medicine_description, setMedicineDescription] = useState("");
  const [medicine_cost, setMedicineCost] = useState("");
  const [medicine_photo, setMedicinePhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait ... ");

    const data = new FormData();
    data.append("medicine_name", medicine_name);
    data.append("medicine_description", medicine_description);
    data.append("medicine_cost", medicine_cost);
    data.append("medicine_photo", medicine_photo);

    try {
      const response = await axios.post(
        "https://ishaqibrahim.pythonanywhere.com/api/addmedicine",
        data
      );
      setLoading("");
      setMessage(response.data.Message);

      setMedicineName("");
      setMedicineDescription("");
      setMedicineCost("");
      setMedicinePhoto("");
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
          <h2 className='text-info'>Add A Medicine</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Medicine Name"
            value={medicine_name}
            onChange={(e) => setMedicineName(e.target.value)}
          />
          <br />

          <textarea
            placeholder="Enter some Description of the Medicine..."
            className="form-control"
            value={medicine_description}
            onChange={(e) => setMedicineDescription(e.target.value)}
          ></textarea>
          <br />

          <input
            type="number"
            placeholder="Enter the price of the medicine"
            className="form-control"
            onChange={(e) => setMedicineCost(e.target.value)}
            value={medicine_cost}
          />
          <br />

          <input
            type="file"
            className="form-control"
            accept='image/*'
            onChange={(e) => setMedicinePhoto(e.target.files[0])}
          />
          <br />

          <button type="submit" className="btn btn-primary w-100">
            Add Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicines;
