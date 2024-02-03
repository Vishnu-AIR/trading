import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logoalt.png";


export const Signin = () => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const navigate = useNavigate();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const isEmail = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailIsValid(emailPattern.test(event.target.value));
  };

  const isPhone = (event) => {
    const phonePattern = /^\d{10}$/; // 10-digit phone number pattern
    setPhoneIsValid(phonePattern.test(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const emailOrPhone = event.target.elements.emailorPhone.value;
    const password = event.target.elements.password.value;

    let email = "";
    let phone = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (emailPattern.test(emailOrPhone)) {
      email = emailOrPhone;
    } else if (phonePattern.test(emailOrPhone)) {
      phone = emailOrPhone;
    } else {
      // Handle invalid input here (e.g., show an error message)
      window.alert("Invalid input for email or phone");
      return; // Do not proceed with submission
    }

    try {
      const response = await fetch(apiEndpoint+'users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, phone }),
      });

      if (response.ok) {
        const data = await response.json();
        if(data.duplicate){
          toast.warning(data.whichone + ' already in Use')
        } // Parse the JSON response body
        else{
        const { _id } = data.data;
        // console.log(data.data.name)
        // console.log(_id) // Extract the token from the response
        
        
        localStorage.setItem('id',_id);
        toast.success("Registration Successful")
        
        
        document.cookie = `username=${data.data.name}};`;
        document.cookie = `userId=${_id};`;
        setTimeout(()=>{navigate('/login');window.location.reload()},2000);
        
        
        // If signup is successful, navigate to the login page or any other route
        }
       
      } else  {
       
          toast.alert('Failed Signing In')
        
        // Handle errors here (e.g., show an error message)
      }
    } catch (error) {
      toast.error('Internal Server Error')
    }
  };

  return (
    <><ToastContainer/>
      <div className="login-main">
        <div className="login">
          <img src={logo} className="login-logo" />
          <form className="login-window" onSubmit={handleSubmit}>
            <div className="div-1-login">
              <div className="login-header">SignIn</div>
              <div className="text-tag">
                Enter the details below to create an account on
                <div style={{ color: "#2C981A", fontWeight: "bold" }}>
                Trading Tiers
              </div>
              </div>
             
              <input required className="input-login" placeholder="Name" type='text' name='name'/>

              <input required onChange={isEmail} className="input-login" placeholder="Phone or Email" type='text' name='emailorPhone'/>
              <input required className="input-login" placeholder="Password" type='password' name='password'/>
              
            </div>
            <div className="div-2-login">
                <div>Already have an account ? <span style={{color: 'rgb(112,148,233)',fontSize:'18px',cursor:'pointer'}} onClick={()=>{navigate('/login');window.location.reload()}}>Log In </span></div>
                <button className="continue-btn" type='submit' > Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
