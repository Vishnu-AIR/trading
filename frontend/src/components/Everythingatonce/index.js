import React, { useEffect, useState } from 'react'
import { Landing } from '../Landing';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Faqs } from '../Faqs';
import { Login } from '../Login';
import { Signin } from '../Signin';
import { Auth } from '../Auth';
import { Feed } from '../Dashboard/Feed';
import { Profile } from '../Dashboard/Profile';
import { Chat } from '../Dashboard/Chat';
import { Course } from '../Dashboard/Course';
import { CourseDetail } from '../Coursed2';
import { Navbar } from '../Navbar';






export const Routing = () => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [data,setData]=useState(null)
  
  
  useEffect(() => {
    const fetchData = async () => {
      const storedId = localStorage.getItem("id");
      if (storedId) {
        try {
          const response = await fetch(apiEndpoint+'users/'+storedId, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          const data = await response.json();
          // Assuming response structure is { userId: 'someId', username: 'someUsername' }
          setId(data.data._id);
          setUsername(data.data.name);
          setData(data.data)

        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchData();
  }, []);
  const loggedInRoutes = [
   
    <Route key="faq" path="/faq" element={<Faqs />} />,
    <Route key="home" path="/home" element={<Feed data={data} />} />,
    <Route key="profile" path="/profile" element={<Profile data={data} />} />,
    <Route key="chat" path="/chat" element={<Chat id={id} name={username} />} />,
    <Route key="course" path="/course" element={<Course />} />,
    
  ];
  return (

    <Router>
      <Routes>
        {username ? (
          loggedInRoutes
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/*" element={<Login />} />
            
            
            
            {/* Redirect to login if no username */}
            {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
          </>
        )}
         <Route key="landing" path="/" element={<Landing />} />,
         <Route path="/coursedet" element={<CourseDetail/>}/> 
        
      </Routes>
    </Router>
  )
}
