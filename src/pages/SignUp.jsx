import React from 'react'
import '../styles/Signup.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function SignUp() {

  // hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // hooks to capture state of the application
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // function to handle data submitted on the form to the database

  const submit = async (e) =>{
    // prevent loading
    e.preventDefault();

    // update loading hook
    setLoading("Please wait as your details are being uploaded.")
    
    // try block

    try{
      // object to hold data
      const data = new FormData();

      // append details to the object
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      // connect to the signup API
      const response = await axios.post("https://ishaqibrahim.pythonanywhere.com/api/signup", data);

      // set loading hook to default
      setLoading("");

      // set success hook with a success message
      setSuccess(response.data.Message);

      // clear input fields and return to default
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    }
    catch(error){
      // update loading hook to empty
      setLoading("");

      // update error hook with error message
      setError("Something went wrong")
    }
  }


    return (
        <div className="container">
          <form className="login-form" onSubmit={submit}>
            <h2>Sign Up</h2>
            
            {loading}
            {success}
            {error}



            <div className="input-group">
              <label >Username</label>
              {/* username */}
              <input
                type="text"
                placeholder='Enter Your Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                
              />
            </div>

            <div className="input-group">
              {/* password */}
              <label >Password</label>
              <input
                type="password"
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />

            </div>

            <div className="input-group">
              <label >Email</label>
              <input
                type="email"
                placeholder='Enter Your Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                
              />
            </div>

            <div className="input-group">
              <label >Phone</label>
              <input
                type="text"
                placeholder='Enter Your Phone Number'
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                required
                
              />
            </div>
            
            <div className="options">
              
            </div>
            <button type="submit" className='signupbtn'>Sign Up</button>
          </form>
        </div>
      );
    };

export default SignUp
