import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Mpesawomens = () => {

    // we pass the sate of our card from the component getproducts component.
    // we shall use the useLocation hook to extract the different details passed from the get products component
    const { womens } = useLocation().state || {};
    // create use state hooks: phone number, message

    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // create a function that will handle the payment process
    const submit = async e => {
        // prevent your site from reloading
        e.preventDefault()

        // update the message hook with some message
        setMessage("Please Wait As We Process Your Payment...")

        // create a form data object and add the phone
        const data = new FormData();

        // append the phone
        data.append("phone", phone)

        // append the cost of the product
        // the cost of the product you get it from the details from useLocation hook
        data.append("amount", womens.womens_cost)

        // use axios to access the HTTP method POST
        const response = await axios.post("https://ishaqibrahim.pythonanywhere.com/api/mpesa_payment", data)

        // update the message hook with a new message
        setMessage(response.data.message)

    }

    // console.log(product.product_name)


  return (
    <div className='row justify-content-center mt-3'>
      <h1 className='text-danger'>Mpesa payment</h1>
      
      <div className="col-md-6 card shadow p-3">
        <b className='text-success'>{message}</b>

      <h4 > Product Name: <span className='text-primary'>{womens.womens_name}</span> </h4>
      
      <form onSubmit={submit}>
        

        <h4>Cost of the product: <span className='text-primary'>{womens.womens_cost}</span></h4>

        <input 
        type="number"
        placeholder='Enter your Mpesa Number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className='form-control' />
        <br />
        <br />

        <button className='btn btn-success'>Make payment</button>
      </form>
      </div>

    </div>
  )
}

export default Mpesawomens;
