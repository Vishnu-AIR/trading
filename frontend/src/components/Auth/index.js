import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logoalt.png";
import { useNavigate } from "react-router-dom";



export const Auth = () => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const inputs = useRef([]);
 const id= localStorage.getItem('id')
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(apiEndpoint+`users/getuser/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data) // Parse the JSON response body
        // console.log(data); // Log the fetched user data
        // Further handling of the user data
      } else {
        console.error('Failed to fetch user data');
        // Handle errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchUser(); // Call the function to fetch user data
}, [id]); // Add id as a dependency for the useEffect hook

  const handleInput = (index, event) => {
    const { value } = event.target;

    // Update the input value
    inputs.current[index].value = value;

    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }

    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyUp = (index, event) => {
    if (event.key === "Backspace" && index > 0 && !event.target.value) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredOtp = inputs.current.map(input => input.value).join("");
    console.log("Entered OTP:", enteredOtp);

    // Validate entered OTP or perform necessary actions here
    // For example, you might want to make an API call to verify the OTP

    // After successful validation, navigate to another page (e.g., '/signup')
    
  };

  return (
    <div className="login-main">
      <div className="login">
        <img src={logo} className="login-logo" alt="Logo" />
        <form className="login-window" onSubmit={handleSubmit}>
          <div className="div-1-login div-1-login-auth">
            <div className="login-header">Verify Your Phone Number</div>
            <div className="text-tag">
              Please enter the code we have sent on
              <div style={{ color: "#2C981A", fontWeight: "bold" }}>
              {userData ? (userData.data.phone ? userData.data.phone : userData.data.email) : ''}
              </div>
            </div>
          </div>

          <div className="otp-input">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                className="otp-inp"
                type="text"
                maxLength="1"
                required
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleInput(index, e)}
                onKeyUp={(e) => handleKeyUp(index, e)}
              />
            ))}
          </div>

          <div className="div-2-login">
            <div>
              Didn’t get the code ?{" "}
              <span
                style={{
                  color: "rgb(112,148,233)",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                
              >
                Resend OTP{" "}
              </span>
            </div>
            <button className="continue-btn" type="submit">
              
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

