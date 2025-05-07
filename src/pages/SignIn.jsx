import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Signin.css'


function SignIn() {

  // hooks for different inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // hooks to store different states
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Below will direct the user to a given page
  const navigate = useNavigate();

  // function to handle submit event
  const submit = async (e) =>{
    // prevent page from reloading
    e.preventDefault()

    // update the loading hook
    setLoading("Please wait as you log in...")

    try{
      // create foorm data object
      const data = new FormData();

      // insert records to the new object created
      data.append("email", email)
      data.append("password", password)

      // post data using the API
      const response = await axios.post("https://ishaqibrahim.pythonanywhere.com/api/signin", data)

      // set loading back to default
      setLoading("");

      // if statement to check whether there is a record with the details passed
      if(response.data.user){
        localStorage.setItem("user", JSON.stringify(response.data.user))

        // redirect user to home page
        navigate("/")
      }
      else{
        // disply error
        setError(response.data.Message)
      }
    }
    catch(error){
      setError(error.Message)
    }
  }


    return (
        <div className="container">
          <form className="login-form">
            <h2>Sign In</h2>
            <div className="input-group">
              {/* email */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your Email Address'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                
              />

            </div>
            <div className="input-group">
              {/* password */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                
              />

            </div>
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  
                /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className='signinbtn'>Sign In</button>
          </form>
        </div>
      );
    };

export default SignIn
