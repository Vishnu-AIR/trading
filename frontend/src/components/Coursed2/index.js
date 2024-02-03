import React from 'react'
import index from './index.css'
import logo from '../../assets/logo.png';
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";
import { BsBook, BsCashCoin } from "react-icons/bs";
import { SiGoogleclassroom,SiSessionize } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { MdOutlineEventSeat } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { SiSeat } from "react-icons/si";
import { Module } from '../OurcourseModule';
import { FaQ } from 'react-icons/fa6';
import { Footer } from '../footer';
import { Faqs } from '../Faqs';
import c2 from '../../assets/c2.jpeg'
import {useNavigate} from 'react-router-dom'
import { FaStar } from "react-icons/fa";

export const CourseDetail = () => {
  const navigate = useNavigate();
  return (

    <>
    
    <div className='Navbar' style={{backgroundColor:'black'}} >
      <div className='Nav-container'>
        <img className='logo' src={logo}/>
       
       
      </div>
      
        
    </div>
    <div className='course-detail'>
     
        <div className='details-course'>
          <div className='detail-head'>
           <IoMdArrowRoundBack style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}/> <div><span className='dark'>Online</span> <span className='light'>Course</span></div>

          </div>
          <div className='detail-time'>
            <div><SlCalender style={{color:'rgb(177,95,92'}}/>30 NOV 2023</div>
            <div><CiClock1  style={{color:'rgb(177,95,92'}}/>7:00 - 8:30 P.M.</div>
          </div>
          <div className='detail-spec'>
            <div className='flex-coursed'><BsCashCoin className='icon-prop'/><div>The total<span className='gradient-text'> course Fees is 30k </span>for online </div></div>
            <div className='flex-coursed'><SlCalender className='icon-prop'/>The next batch starts by<span className='gradient-text'> 30th November </span></div>
            <div className='flex-coursed'><SiGoogleclassroom className='icon-prop'/>Classes go on for <span className='gradient-text'> 2 months </span></div>
            <div className='flex-coursed'><SiSessionize className='icon-prop'/>Around <span className='gradient-text'> 20-25 sessions </span></div>
            <div className='flex-coursed'><BsBook className='icon-prop'/>Classes happen <span className='gradient-text'> Thrice a week - TTS </span></div>
            <div className='flex-coursed'><SiBookstack className='icon-prop'/><div>Every session<span className='gradient-text'> 1.5 hrs </span> - Usually after 8pm</div></div>
            <div className='flex-coursed flex-coursed-2'><SiSeat className='icon-prop' style={{fontSize:'42px'}}/><div>You can confirm your seat by paying <span className='gradient-text'>10k</span> & rest can be paid in <span className='gradient-text'>installments</span>  when the course starts! <span className='gradient-text'>Limited seats only!</span></div>
</div>
          </div>
          <div className='enroll-btn'>Confirm </div>
        </div>
        <div className='course-display'>

          <img src={c2} className='course-img-detail'/>
          <div className='desc-det'>
          We teach you everything there is to learn about the global markets from the basics till advanced level! Technical analysis, advanced technicals, trading tools, fundamentals, psychology & mindset management, trade management, money management & help you become profitable traders!

          </div>
          <div style={{color:'rgba(240, 181, 34, 1)'}}> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></div>
        </div>
       
    </div>
    <Module/>
    <Faqs/>
    <Footer/>
     
    </>
  )}
