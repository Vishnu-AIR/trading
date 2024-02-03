import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import index from "./index.css";
import logo from "../../assets/logoalt.png"
import { useNavigate } from 'react-router-dom';;
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;


export const Login = () => {
  const navigate = useNavigate();
  const [data,setData]=useState({})
  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem('id')
        if(id){
      try {
        
        const response = await fetch(apiEndpoint+'users/'+id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        setData(result);
        // console.log(result)
        navigate('/home')
      } catch (error) {
        // console.log('Login Again')
      }}
    };

    fetchData(); // Call the function to fetch data when the component mounts

    // Optionally, if you need to clean up any resources when the component unmounts,
    // you can return a cleanup function from useEffect:
    // return () => {
    //   // cleanup logic here
    // };
  
  }, []);
  const login = async (event) => {
    event.preventDefault();
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
      const response = await fetch(apiEndpoint+'users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  phone , email , password }),
      });

      if (response.status) {
        const data = await response.json(); // Parse the JSON response body
        if(data.status){
          
          // console.log(data)
          localStorage.setItem("id",data.success._id)
          document.cookie = `username=${data.success.name};`;
          document.cookie = `userId=${data.success._id};`;
          window.location.reload()
          toast.success('Login Success')
          setTimeout(() => navigate('/'), 5000);
          
        }
        else{
          toast.error('Incorrect Password')
        }
        // Extract the token from the response
        // If signup is successful, navigate to the login page or any other route
        
       
      } else {
        toast.warning('Failed Signing In ')
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
          <form className="login-window" onSubmit={login}>
            <div className="div-1-login">
              <div className="login-header">LogIn</div>
              <div className="text-tag">
                Enter the details below to Login to the{" "}
                <div style={{ color: "#2C981A", fontWeight: "bold" }}>
                Trading Tiers
              </div>
              </div>
             
              <input required className="input-login" placeholder="Phone or Email" type='text'  name="emailorPhone"/>
              <input required className="input-login" placeholder="Password" type='password' name="password"/>
              
            </div>
            <div className="div-2-login">
                <div>Don't have an account ? <span style={{color: 'rgb(112,148,233)',fontSize:'18px',cursor:'pointer'}} onClick={()=>{navigate('/signup');window.location.reload()}}>Sign Up </span></div>
                <button className="continue-btn" type='submit'  > Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
