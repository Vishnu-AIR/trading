import React, { useEffect, useState } from "react";
import index from "./index.css";
import c1 from '../../assets/c1.jpeg'
import c2 from '../../assets/c2.jpeg'
import c3 from '../../assets/c3.jpeg'
import { SlCalender } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import s1 from "../../assets/s11.jpg";
import s2 from "../../assets/s22.jpg";
import s3 from "../../assets/s3.webp";
import { FaStar } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import i102 from '../../assets/i102.JPG'
import i103 from '../../assets/i103.JPG'
import i104 from '../../assets/i104.JPG'
import i105 from '../../assets/i105.JPG'
import i106 from '../../assets/i106.jpg'
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;


export const Ourcourses = () => {
  const[coursesdaata,setCoursesdata] = useState([])
  // Dummy data representing course details
 
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(apiEndpoint+'course/', {
          method: 'GET',
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCoursesdata(data.data);
        } else {
          // Handle response not OK
        }
      } catch (error) {
        // Handle fetch error
      }
    };
  
    fetchCourses();
  }, []);
  

  const navigate = useNavigate();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show'); // Add 'show' class when in viewport
            }
          });
        }, { threshold: 0.1 }); // Adjust the threshold as needed
    
        const elements = document.querySelectorAll('.course');
        elements.forEach(element => observer.observe(element));
    
        return () => {
          elements.forEach(element => observer.unobserve(element)); // Cleanup on unmount
        };
      });
   
    var coursesData = [
        {
          id: 1,
          name: 'Advance Profit Mentorship (Offline)',
          mode: 'Offline',
          date: '2023-12-01',
          time: '10:00 AM',
          totalUsers: 400,
          rating: 5,
          url:i105,
          description: 'Become the God of Trading with Trading Gods, join us at our Offline Centre. Learn, trade and make money live with us',
          isvisible:true
        },
        {
          id: 2,
          name: 'Advance Profit Mentorship (Online) ',
          mode: 'Online',
          date: '2023-12-15',
          time: '2:30 PM',
          totalUsers: 250,
          rating: 4,
          url:i104,
          description: 'Learn the art of trading while you are at your home attending live online classes with Ishan and Vanshika',
          isvisible:true
        },
        // {
        //   id: 3,
        //   name: 'TRADING 101 (PRE-RECORDED)',
        //   mode: 'Online',
        //   date: '2023-12-10',
        //   time: '9:00 AM',
        //   totalUsers: 800,
        //   rating: 4.5,
        //   url:i103,
        //   description: '25+ hours of pre recorded content to get you kickstarted in the universe of trading and limitless profits. Learn at your own pace',
        //   isvisible:true
        // },
        
    
        {
            id: 4,
            name: 'Pro Professional OFFLINE MENTORSHIP (1-1)',
            mode: 'Offline',
            date: '2023-11-25',
            time: '11:00 AM',
            totalUsers: 600,
            rating: 4.8,
           url:i106,
            description: 'The "Pro Professional Offline Mentorship (1-1)" is an exclusive mentoring program designed to provide personalized guidance and support in a face-to-face setting',
            isvisible:true
          },
          {
            id: 5,
            name: 'Personal Profit Guide ONLINE MENTORSHIP (1-1)',
            mode: 'Online',
            date: '2023-12-05',
            time: '3:45 PM',
            totalUsers: 300,
            rating: 3.7,
            url:i102,
            description: 'The "Personal Profit Guide Online Mentorship (1-1)" is a personalized mentoring program designed to help individuals achieve their financial goals and enhance their overall financial well-being.',
            isvisible:true
          },
      ]
      const showmore=()=>{
        
        
      }
     
  return (
    <>
      <div className="ourcourses" id='Courses'>
        
        <div className="ourcourse-heading">Our Courses</div>
        <div className="course-flexbox">
        {coursesData?.map((course, index) => (
       <div className="course" key={course._id}>
          <div style={{ position: 'relative' }}>
            <div style={{overflow:'hidden'}}>
            <img src={course.url} className="course-img" alt={`Course ${course?.name}`} />
            </div>
            <div className="course-mode">{course?.mode}</div>
          </div>
          <div className="course-div">
            <div className="course-details">
              <div className="course-name">{course?.name}</div>
              <div className="date-time">
                <div><SlCalender style={{ color: 'rgba(207, 96, 96, 1)' }} /> Date: {course?.startdate}</div>
                <div><CiTimer style={{ color: 'rgba(207, 96, 96, 1)' }} /> Time: {course?.time}</div>
              </div>
              <div className="total-users">
                <img src={s1} alt="star" />
                <img src={s2} alt="star" />
                <img src={s3} alt="star" />
                <div style={{ color: 'rgba(85, 85, 85, 1)', position: 'absolute', right: '0', fontSize: '20px' }}>
                  {/* {course?.users?.length+'+'} */}
                  {course.totalUsers}
                </div>
              </div>
              <div className="rating">
                {Array.from({ length: 4 }, (_, index) => (
                  <FaStar key={index} style={{ color: 'rgba(240, 181, 34, 1)' }} />
                ))}
              </div>
            </div>
            <div className="course-desc">{course?.description}</div>
            <div className="enroll-btn" onClick={()=>{window.scrollTo(0, 0);navigate('/coursedet')}}>Enroll Now</div>
          </div>
          
        </div>
        )
      )}
      
    </div>
    <div style={{display:'flex',justifyContent:'center'}} ><span onClick={showmore}  className="ourcourse-footer">View All Courses</span></div>
      </div>
    </>
  );
};
